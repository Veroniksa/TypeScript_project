import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'


function getUserData(){

  const user = {}
  user[0] = localStorage.getItem("userName") as unknown
  const userNameLocal = user[0] as string
  user[1] = localStorage.getItem("avatarUrl") as unknown
  const userLinkLocal = user[1] as string


/*   let userName = localStorage.setItem("userName", "Wade Warren") as unknown
  let userLocalName = userName as string
  let userLink = localStorage.setItem("userLink", "/img/avatar.png") as unknown
  let userLocalLink = userLink as string
  console.log(userLocalName, userLocalLink) */

  console.log(user)
}

function getFavoriteAmount(){
  const favoriteAmount = localStorage.getItem("favoriteItemsAmount") as unknown
  favoriteAmount as number
  console.log(favoriteAmount)
}

getUserData()
getFavoriteAmount()


window.addEventListener('DOMContentLoaded', () => {
  const checkIn = document.querySelectorAll("check-in-date") 
  const chechInVal = checkIn.values
  const chechOut = document.querySelectorAll("check-out-date") 
  const chechOutVal = chechOut.values 
  renderUserBlock("Wade Warren", "/img/avatar.png", 0)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})
