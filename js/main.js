

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
 







  //  /*------------------------------------- style switcher--------------------------------*/
  function styleSwitcherToggle(){
    let styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");
    styleSwitcherToggler.addEventListener("click", function(){
            styleSwitcher.classList.toggle("open");
            this.querySelector("i").classList.toggle("fa-times");
            this.querySelector("i").classList.toggle("fa-cog");

        });
 }
styleSwitcherToggle();

  //  /*------------------------------------- theme color--------------------------------*/
let styleHref = document.querySelector(".change-color"),
color = document.querySelectorAll(".color");
// window.onload=function(){
    

// }


let colorStorage = localStorage.getItem("color")
if(!colorStorage ) {
    window.localStorage.setItem("color","color-2");
    styleHref.href = colorStorage;
}


color.forEach((ele) =>{
      ele.onclick= function () {
          //1
          color.forEach((e) =>{
              e.classList.remove("active");
          });
          this.classList.add("active");
          // 2............
         let colorTheme = ele.dataset.color;
           window.localStorage.setItem("color",colorTheme);
          styleHref.href=window.localStorage.color+".css";

      };
if(ele.dataset.color === window.localStorage.color){
   ele.classList.toggle("active");

}
styleHref.href = window.localStorage.color+(".css");

});
 




//    /*------------------------------------- theme color  dark mode--------------------------------*/
function themeLightDark(){
  let darkModeCheck=document.querySelector(".js-dark-mode");
  darkModeCheck.addEventListener("click", function(){
      if(this.checked){
  localStorage.setItem("theme-dark","true")
      }else{
          localStorage.setItem("theme-dark","false")
      }
      themeMode();
  });
  function themeMode(){
      if(localStorage.getItem("theme-dark") === "false"){
          document.body.classList.remove("t-dark")
  
      }else{
          document.body.classList.add("t-dark")
  
      }
  
   };
   if(localStorage.getItem("theme-dark") !== null){
      themeMode();
   }
  if(document.body.classList.contains("t-dark")){
      darkModeCheck.checked = true;
  }
   };
   themeLightDark()



   // /*--------------------------------------theme glass effect------------------------------- */

function themeGlassEffect(){
  let glassEffectChecked =document.querySelector(".js-glass-effect"),
  glassStyle = document.querySelector(".js-glass-style");
  glassEffectChecked.addEventListener("click", function(){
  if(this.checked){
      localStorage.setItem("glass-effect", "true")
  }else{
      localStorage.setItem("glass-effect", "false")
  
  }
  glass();
  });
  
  function glass(){
      if(localStorage.getItem("glass-effect") === "true"){
          glassStyle.removeAttribute("disabled")
      }else{
          glassStyle.disabled = true;
  
      }
  }
  if(localStorage.getItem("glass-effect") !== null){
      glass();
  }
  if(!glassStyle.hasAttribute("disabled")){
      glassEffectChecked.checked= true;
  }
  };
  themeGlassEffect();
  
  