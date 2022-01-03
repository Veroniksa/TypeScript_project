import { renderBlock } from './lib.js'
import { getDateString, getNextMonthLastDay, getPlusTwoDays, getTomorrow } from "./helpes/date-manager.js"
import { SearchFormData, search } from "./SearchFormData.js"

export function renderSearchFormBlock(arrivalDate: SearchFormData["arrivalDate"] = getTomorrow(), leavingDate: SearchFormData["leavingDate"] = getPlusTwoDays(arrivalDate)) {
  const arrivalString = getDateString(arrivalDate)
  const leavingString = getDateString(leavingDate)
  const minDate = getDateString(new Date())
  const maxDate = getDateString(getNextMonthLastDay())

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${arrivalString} min="${minDate}" max="${maxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${leavingString}" min="${minDate}" max="${maxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button onClik="search()">Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
  const checkInDate = document.querySelectorAll("#check-in-date")
  const checkOutDate = document.querySelectorAll("#check-out-date")

  //
  search({ arrivalString: checkInDate[0].defaultValue, leavingString: checkOutDate[0].defaultValue, minDate: checkInDate[0].min, maxDate: checkInDate[0].max })
}