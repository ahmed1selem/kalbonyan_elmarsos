import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';
import searchView from './views/searchView.js';
import { MODAL_CLOSE_SEC } from './config.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
// if (module.hot) {
//   module.hot.accept();
// }
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    //spinner loading
    const id = window.location.hash.slice(1);
    //0 update result view
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);
    if (!id) return;
    recipeView.renderSpinner();
    //1) loading the recipe
    await model.loadRecipe(id);
    //2) rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};
const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //0
    const query = searchView.getQuery();
    console.log(query);
    if (!query) return;
    await model.loadSerchResulats(query);
    resultsView.render(model.getSearchResultsPage());
    //render pagnitions
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};
const controlPagination = function (gotopage) {
  //render new results
  resultsView.render(model.getSearchResultsPage(gotopage));
  //render pagnitions
  paginationView.render(model.state.search);
};
const controlServings = function (newServings) {
  //update the recipe
  model.updateServings(newServings);
  //update recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};
const controlAddBookmark = function () {
  //add remove
  if (!model.state.recipe.bookmarked) model.addBookMark(model.state.recipe);
  else model.deletBookmark(model.state.recipe.id);
  //update
  recipeView.update(model.state.recipe);
  //render
  bookmarksView.render(model.state.bookmarks);
};
const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};
const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);
    //render recipe
    recipeView.render(model.state.recipe);
    //success message
    addRecipeView.renderMessage();

    //render bookmark view
    bookmarksView.render(model.state.bookmarks);
    //change id in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    //close window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC);
  } catch (err) {
    addRecipeView.renderError(err.message);
  }
};
const init = function () {
  bookmarksView.addHandelrRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookMark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('hashchange', controlRecipes);
