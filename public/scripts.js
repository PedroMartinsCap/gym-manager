//recebe a page atual
const currentPage = location.pathname
console.log(currentPage)

const menuItems = document.querySelectorAll("header .links a")

for(item of menuItems){
  if(currentPage.includes(item.getAttribute("href"))){
    item.classList.add("active")
  }
}