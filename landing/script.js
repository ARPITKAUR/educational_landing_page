const open = document.getElementById('open'); 
const open2 = document.getElementById('open2'); 
const close = document.getElementById('close'); 
const popup = document.getElementsByClassName('popup')[0];
const bar = document.getElementById('bar')
const nav = document.getElementsByClassName('nav-1')[0]
const closee = document.getElementById('closee')
if(open){
    open.addEventListener('click',()=>{
        popup.style.top = '113px'
    })
}
if(close){
    close.addEventListener('click',()=>{
        popup.style.top = '-11123px'
        // window.location.href = "http://127.0.0.1:5500/landing%20page/index.html"
    })
}

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('act')
        document.getElementById('mobile').style.display = 'none'
    })
}
if(closee){
    nav.classList.remove('act')
}