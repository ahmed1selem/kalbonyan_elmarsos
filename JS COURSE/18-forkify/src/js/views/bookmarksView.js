import View from './View';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView';
class bookmarks extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. find a nice recipe and bookmark it;';
  _Message = '';

  addHandelrRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new bookmarks();
