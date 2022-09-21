/* <div id="navbar">
  <a class="active" href="javascript:void(0)">Home</a>
  <a href="javascript:void(0)">News</a>
  <a href="javascript:void(0)">Contact</a>
</div> */



tempdiv = document.createElement("div")
tempdiv.setAttribute("id", "navbar")

homeA = document.createElement("a")
homeA.setAttribute("class", "active")
homeA.setAttribute("href", "javascript:void(0)")
homeA.innerHTML = "Home"

sportA = document.createElement("a")
sportA.setAttribute("href", "sport.html")
sportA.innerHTML = "Sport"

sykkellagetA = document.createElement("a")
sykkellagetA.setAttribute("href", "sykkellaget.html")
sykkelllagetA.innerHTML = "Sykkellaget"

tempdiv.appendChild(homeA)
tempdiv.appendChild(sportA)
tempdiv.appendChild(sykkellagetA)

document.body.appendChild(tempdiv)




window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
