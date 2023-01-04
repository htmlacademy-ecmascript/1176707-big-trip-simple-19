import NewForm from './view/new-form-view.js';
import SortViewer from './view/sort-view.js';
import FilterViewer from './view/filter-view.js';
import FormEditor from './view/form-editor-view.js';
import PointsList from './view/points-list-view.js';
import {render} from './render.js';

const mainElement = document.querySelector('.page-body');
const formElement = mainElement.querySelector('.trip-main');
const headerElement = mainElement.querySelector('.trip-events');
const filtersElement = formElement.querySelector('.trip-controls__filters');


render(new NewForm(), formElement);
render(new SortViewer(), headerElement);
render(new FormEditor(), headerElement);
render(new FilterViewer(), filtersElement);
render(new PointsList(), headerElement);
