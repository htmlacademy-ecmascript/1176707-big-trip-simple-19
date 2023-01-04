import NewForm from './view/creationForm.js';
import SortView from './view/sorting.js';
import FilterView from './view/filters.js';
import EditForm from './view/editingForm.js';
import ShowPoint from './view/routePoint.js';
import {render} from './render.js';

const mainElement = document.querySelector('.page-body');
const formElement = mainElement.querySelector('.trip-main');
const headerElement = mainElement.querySelector('.trip-events');
const filtersElement = formElement.querySelector('.trip-controls__filters');


render(new NewForm(), formElement);
render(new SortView(), headerElement);
render(new EditForm(), headerElement);
render(new FilterView(), filtersElement);
for(let i = 0; i < 3; i++) {
  render(new ShowPoint(), headerElement);
}
