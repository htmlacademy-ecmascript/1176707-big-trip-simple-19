import NewFormView from './view/new-form-view.js';
import SortView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
import ListPresenter from './presenter/list-presenter.js';
import PointModel from './model/point-model.js';
import {render} from './render.js';

const formElement = document.querySelector('.trip-main');
const headerElement = document.querySelector('.trip-events');
const filtersElement = formElement.querySelector('.trip-controls__filters');
const pointModel = new PointModel();
const listPresenter = new ListPresenter({
  pointContainer: headerElement,
  pointModel,
});

render(new NewFormView(), formElement);
render(new SortView(), headerElement);
render(new FilterView(), filtersElement);

listPresenter.init();
