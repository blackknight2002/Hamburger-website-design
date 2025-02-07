const hamburgericon=document.querySelector('.hamburger-menu')
const head=document.querySelector('.head')
const closeicon=document.querySelector('.close-icon')
const gototop=document.querySelector('.go-totop')
const entire=document.querySelector('.entire')

hamburgericon.addEventListener('click',()=>
{
    head.classList.add('menuopen')
})

closeicon.addEventListener('click',()=>{
    head.classList.remove('menuopen')
})

gototop.addEventListener('click',()=>{
   entire.scrollTo(0,0)
})