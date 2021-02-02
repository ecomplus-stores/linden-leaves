// Add your custom JavaScript for storefront pages here.
if (window.innerWidth < 991) {
  const searchFormMobile = document.getElementById('search-bar')
  const buttonSearchOpen = document.getElementById('mobile-search-btn')
  const menuMobile = document.getElementById('accordion-menu')
  const userMobile = document.getElementById('user-button')
  const menuList = document.querySelectorAll('.menu__list a')
  const position = menuList.length
  buttonSearchOpen.remove()
  searchFormMobile.classList.remove('col-12')
  menuMobile.before(searchFormMobile)
  menuList[position - 1].after(userMobile)
}
const buttonTo = document.getElementById('link-direct')
const productB = document.querySelector('.product-card')
productB.append(buttonTo)
console.log(buttonTo)
console.log(productB)
