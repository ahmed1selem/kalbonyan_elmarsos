//import { values } from 'core-js/core/array';
import icons from 'url:../../img/icons.svg';
export default class View {
  _data;
  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    if (!render) return markup;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  update(data) {
    // if (!data || (Array.isArray(data) && data.length == 0))
    //   return this.renderError();
    this._data = data;
    const newMarkup = this._generateMarkup();
    const newDom = document.createRange().createContextualFragment(newMarkup);
    const newElemnts = Array.from(newDom.querySelectorAll('*'));
    const curElemnts = Array.from(this._parentElement.querySelectorAll('*'));

    newElemnts.forEach((newEl, i) => {
      const curEl = curElemnts[i];
      // console.log(curEl, newEl.isEqualNode(curEl));
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        curEl.textContent = newEl.textContent;
      }
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(att =>
          curEl.setAttribute(att.name, att.value)
        );
      }
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner = function () {
    const markup = `<div class="spinner">
    <div>
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
          </div>
        </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  };
  renderError(message = this._errorMessage) {
    const markup = `<div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._Message) {
    const markup = `<div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
