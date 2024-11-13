import Component from "../framework/component.js";

export default class FilterView extends Component {
  constructor() {
    super();
  }

  getTemplate() {
    return `
      <div class="movie-filter">
        <h2>Фильтры</h2>

        <fieldset>
          <legend>Статус:</legend>
          <label><input type="radio" name="status-filter" value="all" checked /> Все</label>
          <label><input type="radio" name="status-filter" value="watched" /> Просмотренные</label>
          <label><input type="radio" name="status-filter" value="unwatched" /> Непросмотренные</label>
        </fieldset>

        <label><input type="checkbox" id="favorite-filter" /> Показывать только избранное</label>
      </div>
    `;
  }
}