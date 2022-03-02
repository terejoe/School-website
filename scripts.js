let toggle = document.getElementById("toggle");
let sidebar = document.getElementById("navlist");

function myFunction (){
  if(sidebar.style.right === "-200px"){
    sidebar.style.right = "0"
  }else{
    sidebar.style.right = "-200px"
  }
}

