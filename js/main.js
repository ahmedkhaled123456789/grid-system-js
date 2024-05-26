

// ============================loading==========================//
let loader=document.querySelectorAll(".loading");
window.addEventListener('load', function(){
    loader.forEach((e) =>{
e.style.display="none";
    });
    
})

//javascript for  cursor

let cursor =document.querySelector(".cursor");
let cursor2 =document.querySelector(".cursor-2");
document.addEventListener('mousemove', function(e){
cursor.style.cssText = cursor2.style.cssText ="left: " + e.clientX + "px; top: " + e.clientY + "px;";
});


//Scroll to top button
const scrolltotop = document.querySelector('.scrolltotop-btn');
window.addEventListener('scroll',function(){
    scrolltotop.classList.toggle('active', window.scrollY > 500);
 
});
scrolltotop.addEventListener("click", (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//javascript for responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links li a")

menuBtn.addEventListener("click",  () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
  navigationItem.addEventListener("click", () => {
    navigationItems.forEach(item => item.classList.remove("active"));
    navigationItem.classList.add("active");
    
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
  });
});




window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i = 0; i < reveals.length; i++){
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint){
      reveals[i].classList.add("active");
    }
  }
}



// ====================loady=======================//
let loadyTwo=document.querySelectorAll(".loady-2");

let loady=document.querySelectorAll(".loady");
window.onload=function(){
  loady.forEach((e) =>{
e.classList.add("active");
  }) 
  loadyTwo.forEach((e)=>{
e.classList.add("active");
  }) 

}
 

