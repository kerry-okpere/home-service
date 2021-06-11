const foodItem = document.querySelector('.modal_list-item')
const foodModal = document.getElementById('food-modal')
const food = document.getElementById('food')

const menuButton = document.getElementById('button')
const menuModal = document.getElementById('modal')
const menuContent = document.getElementById('content')
const menuTitle = document.getElementById('title')
const menuList = document.querySelector('.modal_list')

const buttonTitle = document.getElementById('text')
const closeIcon = document.querySelector('.activity_action-cancel')
const buttonText = document.getElementById('button_text')

let boundTop
let width = menuContent.getBoundingClientRect().width
let menuContentTop = menuContent.getBoundingClientRect().y

menuContent.style.width = `${width}px`

const menu = {
  action: '',
  buttonTitle: true,
  title: false,
  buttonText: true,
  closeIcon: false,
}

const handleMenu = (menu) => {
  if (menu.action === 'remove') {
    menuModal.classList.add('activity_modal-bgcolor')
    setTimeout(() => {
      menuModal.classList[menu.action]('modal')
      menuContent.style.marginTop = `0`
      menuModal.style.position = 'initial'
    }, 400)
    
  }else {
    menuModal.classList[menu.action]('modal')
    menuModal.classList.remove('activity_modal-bgcolor')
    menuModal.style.position = 'fixed'
  }
  menuContent.classList[menu.action]('modal_content')
  menuList.classList[menu.action]('modal_list-show')
  
  buttonTitle.style.display = menu.buttonTitle ? 'block' : 'none'
  menuTitle.style.display = menu.title ? 'block' : 'none'

  buttonText.style.display = menu.buttonText ? 'block' : 'none'
  closeIcon.style.display = menu.closeIcon ? 'block' : 'none'

  boundTop = food.getBoundingClientRect().y
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
    menuContent.style.marginTop = `${menuContentTop}px`
  }
}

const showFoodModal = (e) => {
  food.style.top = boundTop
  food.style.position = 'relative'
  foodModal.classList.add('modal')
  food.classList.add('food_gastonton')
}

const hideFoodModal = (e) => {
  if( e.target !== foodModal ) {
    return
  }
  setTimeout(function() {
    food.className = 'modal_img'
    food.classList.remove('food_gastonton')
  }, 0) 

  setTimeout(function() {
    foodModal.classList.remove('modal')
    food.style.position = 'initial'
  }, 400)
}

menuButton.onclick = showFoodMenu

foodItem.addEventListener('click', showFoodModal)
foodModal.addEventListener('click', hideFoodModal)
