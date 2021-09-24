$(function(){
   
});
function testJump(x){
    var ml = ~~x.getAttribute('maxlength');
    if(ml && x.value.length >= ml){
        do{
            x = x.nextSibling;
        }
        while(x && !(/text/.test(x.type)));
        if(x && /text/.test(x.type)){
            x.focus();
        }
    }
}
let close=document.querySelectorAll(".close");
let open=document.querySelector(".open");
let popup=document.querySelector(".popup");
open.onclick= function(){
    popup.classList.add("opened");
}
for (i=0; i<close.length; i++){
    close[i].onclick= function(){
        popup.classList.remove("opened");
    }
}
let slider = document.getElementById("myRange");
let ta=document.querySelector(".ta");
let tb=document.querySelector(".tb");
let tc=document.querySelector(".tc");
let td=document.querySelector(".td");
let te=document.querySelector(".te");
let tf=document.querySelector(".tf");
let tg=document.querySelector(".tg");
slider.oninput = function() {
    console.log(this.value);
    if(slider.value=="1"){
        ta.classList.add("focused");
        tb.classList.remove("focused");
        tc.classList.remove("focused");
        td.classList.remove("focused");
        te.classList.remove("focused");
        tf.classList.remove("focused");
        tg.classList.remove("focused");
    }
    if(slider.value=="2"){
        ta.classList.remove("focused");
        tb.classList.add("focused");
        tc.classList.remove("focused");
        td.classList.remove("focused");
        te.classList.remove("focused");
        tf.classList.remove("focused");
        tg.classList.remove("focused");
    }
    if(slider.value=="3"){
        ta.classList.remove("focused");
        tb.classList.remove("focused");
        tc.classList.add("focused");
        td.classList.remove("focused");
        te.classList.remove("focused");
        tf.classList.remove("focused");
        tg.classList.remove("focused");
    }
    if(slider.value=="4"){
        ta.classList.remove("focused");
        tb.classList.remove("focused");
        tc.classList.remove("focused");
        td.classList.add("focused");
        te.classList.remove("focused");
        tf.classList.remove("focused");
        tg.classList.remove("focused");
    }
    if(slider.value=="5"){
        ta.classList.remove("focused");
        tb.classList.remove("focused");
        tc.classList.remove("focused");
        td.classList.remove("focused");
        te.classList.add("focused");
        tf.classList.remove("focused");
        tg.classList.remove("focused");
    }
    if(slider.value=="6"){
        ta.classList.remove("focused");
        tb.classList.remove("focused");
        tc.classList.remove("focused");
        td.classList.remove("focused");
        te.classList.remove("focused");
        tf.classList.add("focused");
        tg.classList.remove("focused");
    }
    if(slider.value=="7"){
        ta.classList.remove("focused");
        tb.classList.remove("focused");
        tc.classList.remove("focused");
        td.classList.remove("focused");
        te.classList.remove("focused");
        tf.classList.remove("focused");
        tg.classList.add("focused");
    }
}
const anchors = document.querySelectorAll('a[href*="#"]');


const burger = document.querySelector(".burger");
const menubrg = document.querySelector(".headercontainernav");
burger.onclick=function(){
    menubrg.classList.toggle("aaaaaactive");
}
for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      
      const blockID = anchor.getAttribute('href').substr(1)
      menubrg.classList.remove("aaaaaactive");
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }



