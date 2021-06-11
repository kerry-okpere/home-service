const foodItem = document.querySelector('.modal_list-item')
const foodModal = document.querySelector('.modal_food')
const food = document.querySelector('.food')

const menuButton = document.getElementById('button')
const menuModal = document.getElementById('modal')
const menuContent = document.getElementById('content')
const menuTitle = document.getElementById('title')

const buttonTitle = document.getElementById('text')
const closeIcon = document.querySelector('.activity_action-cancel')
const buttonText = document.getElementById('button_text')

const menu = {
  action: '',
  buttonTitle: true,
  title: false,
  buttonText: true,
  closeIcon: false,
}
const showFoodModal = (e) => {
  foodModal.style.display = 'block'
  food.style.backgroundImage = 'url("../img/spag.png")'
}

const hideFoodModal = (e) => {
  if( e.target !== foodModal ) {
    return;
  }
  foodModal.style.display = 'none'
}

const handleMenu = (menu) => {
  menuModal.classList[menu.action]('modal')
  menuContent.classList[menu.action]('modal_content')

  buttonTitle.style.display = menu.buttonTitle ? 'block' : 'none'
  menuTitle.style.display = menu.title ? 'block' : 'none'

  buttonText.style.display = menu.buttonText ? 'block' : 'none'
  closeIcon.style.display = menu.closeIcon ? 'block' : 'none'
}
const showFoodMenu = (e) => {
  if(menuModal.classList.contains('modal')){
    menu.action = 'remove'
    menu.buttonTitle = true
    menu.title = false
    menu.buttonText = true
    menu.closeIcon = false
    handleMenu(menu)
  }else{
    menu.action = 'add'
    menu.buttonTitle = false
    menu.title = true
    menu.buttonText = false
    menu.closeIcon = true
    setTimeout(() => { handleMenu(menu) }, 0)
  }
}

menuButton.onclick = showFoodMenu

foodItem.addEventListener('click', showFoodModal)
foodModal.addEventListener('click', hideFoodModal)
