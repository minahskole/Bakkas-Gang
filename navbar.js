/* <div id="navbar">
  <a class="active" href="javascript:void(0)">Home</a>
  <a href="javascript:void(0)">News</a>
  <a href="javascript:void(0)">Contact</a>
</div> */

navbarEle = document.getElementsByClassName("navbar")[0]


headerdiv = document.createElement("header")
h1div = document.createElement("h1")
h1div.innerHTML = "BAKKAS GANG"
headerdiv.appendChild(h1div)
navbarEle.appendChild(headerdiv)


tempdiv = document.createElement("div")
tempdiv.setAttribute("id", "navbar")

homeA = document.createElement("a")
homeA.setAttribute("class", "active")
homeA.setAttribute("href", "javascript:void(0)")
homeA.innerHTML = "Home"

newsA = document.createElement("a")
newsA.setAttribute("href", "javascript:void(0)")
newsA.setAttribute("id", "idNews")
newsA.innerHTML = "News"

ContactA = document.createElement("a")
ContactA.setAttribute("href", "javascript:void(0)")
ContactA.setAttribute("id", "idContact")
ContactA.innerHTML = "Contact"

tempdiv.appendChild(homeA)
tempdiv.appendChild(newsA)
tempdiv.appendChild(ContactA)

navbarEle.appendChild(tempdiv)




window.onscroll = function() {myFunction()};

/* var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} */
