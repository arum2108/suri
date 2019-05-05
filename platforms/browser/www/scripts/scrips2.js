window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}