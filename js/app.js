let $=document
const switchElement = document.querySelector('.switch')

let isLight=true

function swichHandler() {
  if (isLight) {
    $.body.classList.add('dark')
    localStorage.setItem('theme', 'dark') // ذخیره وضعیت تم در localStorage
    isLight = false
  } else {
    $.body.classList.remove('dark')
    localStorage.setItem('theme', 'light') // ذخیره وضعیت تم در localStorage
    isLight = true
  }
}

window.onload=function(){

  if(localStorage.getItem('theme')==='dark'){
    $.body.classList.add('dark')
  }else{
    $.body.classList.remove('dark')
  }

}





switchElement.addEventListener('click', swichHandler)



