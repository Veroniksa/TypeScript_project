import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'

window.addEventListener('DOMContentLoaded', () => {
  const chechIn = document.querySelectorAll("check-in-date") 
  const chechInVal = chechIn.values
  const chechOut = document.querySelectorAll("check-out-date") 
  const chechOutVal = chechOut.values 
  renderUserBlock("", "", 0)
  renderSearchFormBlock(chechInVal, chechOutVal)
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
