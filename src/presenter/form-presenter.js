import PointEditView from '../view/point-edit-view.js';
import { MODE } from '../const.js';
import { render } from '../render.js';

class FormPresenter {
    #pointEditComponent = null;
    #point = null;
  
    constructor(){
  
    }
  
    init(point) {
      this.#point = point;
  
      this.#pointEditComponent = new PointEditView(this.#point);

      this.#pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
        this.#replaceEditToPoint();
      });
      this.#pointEditComponent.element.querySelector('form').addEventListener('submit', (evt) => {
        evt.preventDefault();
        this.#replaceEditToPoint();
      });
    }

    #replacePointToEdit() {
        this.#pointListComponent.element.replaceChild(this.#pointEditComponent.element, this.#pointComponent.element);
        document.addEventListener('keydown', this.#keyDownHandler);
        this.#mode = MODE.EDITING;
      }
    
      #replaceEditToPoint() {
        this.#pointListComponent.element.replaceChild(this.#pointComponent.element, this.#pointEditComponent.element);
        document.removeEventListener('keydown', this.#keyDownHandler);
        this.#mode = MODE.DEFAULT;
      }
    
      #keyDownHandler = (evt) => {
        if (evt.key === 'Escape' || evt.key === 'Esc') {
          evt.preventDefault();
          this.#replaceEditToPoint();
        }
      };

  }