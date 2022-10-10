import View from './View.js';
import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query please try another one  ';
  _Message = '';
  _generateMarkup() {
    return this._data
      .map(results => previewView.render(results, false))
      .join('');
  }
}
export default new ResultsView();
