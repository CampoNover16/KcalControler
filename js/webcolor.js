const html = document.querySelector('html');
html.dataset.theme = `theme_light`;

function switchTheme(theme) {
  html.dataset.theme = `theme_${theme}`;
  var el1 = document.getElementById("light_btn");
  var el2 = document.getElementById("dark_btn");
  if(theme=='dark'){
    el1.classList.remove("active")
    el2.classList.add("active");   
  }else{
    el2.classList.remove("active")
    el1.classList.add("active");
  }
}
