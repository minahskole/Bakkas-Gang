/* <div id="navbar">
  <a class="active" href="javascript:void(0)">Home</a>
  <a href="javascript:void(0)">News</a>
  <a href="javascript:void(0)">Contact</a>
</div> */



headerdiv = document.createElement("header")
h1div = document.createElement("h1")
h1div.innerHTML = "BAKKAS GANG"
headerdiv.appendChild(h1div)
document.body.appendChild(headerdiv)


tempdiv = document.createElement("div")
tempdiv.setAttribute("id", "navbar")

homeA = document.createElement("a")
homeA.setAttribute("class", "active")
homeA.setAttribute("href", "javascript:void(0)")
homeA.innerHTML = "Home"

newsA = document.createElement("a")
newsA.setAttribute("href", "javascript:void(0)")
newsA.innerHTML = "News"

ContactA = document.createElement("a")
ContactA.setAttribute("href", "javascript:void(0)")
ContactA.innerHTML = "Contact"

tempdiv.appendChild(homeA)
tempdiv.appendChild(newsA)
tempdiv.appendChild(ContactA)

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
