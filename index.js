let menu = document.getElementById("menu");
let body = document.getElementsByTagName('body')
let header = document.getElementsByTagName("header");






menu.addEventListener("click",function(e){
    document.querySelector('body').classList.toggle("mobile_activity");
    this.classList.toggle("fa-xmark")
})
let typed = new Typed(".auto-type",{
    strings:["Frontend Devloper","web Devloper"],
    typeSpeed:50,
    backSpeed:50,
    looped:true,
})







