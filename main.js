let homepagecount = 0;
let dishplpcount = 0;
let dishpdp1count = 0;
let searchbarcount = 0;
let addtocartcount = 0;
let mycartcount = 0;
let pincode = "000";

let loginPopup = null;
let closee = null;

function clearClickCount() {
  localStorage.clear(homepagecount);
  localStorage.clear(dishplpcount);
  localStorage.clear(dishpdp1count);
  localStorage.clear(searchbarcount);
  localStorage.clear(addtocartcount);
  localStorage.clear(mycartcount);
  localStorage.clear(pincode);
  location.href = "index.html";
}

function loadedplp() {
  document.getElementById("planuser").style.display = "none";
  checkPlanUser();
  function checkPlanUser() {
    if (parseInt(localStorage.getItem("dishplpcount")) >= 2) {
      if (document.getElementById("planuser").style.display === "none") {
        document.getElementById("planuser").style.display = "block";
      }
    }
  }
}

function showPopup() {
  const timeLimit = 3; // seconds;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    // console.log(i);
  }, 1000);
  closee = document.querySelector(".closee");
}

function loadedrefpdp1() {
  loginPopup = document.querySelector(".login-popup");
  document.getElementById("emerguser").style.display = "none";
  document.getElementById("nonduresuser").style.display = "none";
  checkEmergUser();
  function checkEmergUser() {
    if (
      parseInt(localStorage.getItem("dishpdp1count")) >= 1 &&
      parseInt(localStorage.getItem("searchbarcount")) >= 1 &&
      parseInt(localStorage.getItem("addtocartcount")) >= 1
    ) {
      if (document.getElementById("emerguser").style.display === "none") {
        document.getElementById("emerguser").style.display = "block";
      }
    }
  }

  checkNonDUser();
  function checkNonDUser() {
    if (
      parseInt(localStorage.getItem("searchbarcount")) >= 1 &&
      parseInt(localStorage.getItem("homepagecount")) >= 1 &&
      parseInt(localStorage.getItem("dishpdp1count")) >= 1
    ) {
      if (document.getElementById("nonduresuser").style.display === "none") {
        document.getElementById("normaluser").style.display = "none";
        document.getElementById("nonduresuser").style.display = "block";
      }
    }
  }

  if (
    parseInt(localStorage.getItem("dishpdp1count")) >= 2 &&
    parseInt(localStorage.getItem("addtocartcount")) >= 1
  ) {
    // console.log("Show message");
    showPopup();
  }
}

function close1() {
  loginPopup.classList.remove("show");
}

function loadedpdp1() {
  document.getElementById("emerguser").style.display = "none";
  document.getElementById("nonduresuser").style.display = "none";
  checkEmergUser();
  function checkEmergUser() {
    if (
      parseInt(localStorage.getItem("dishpdp1count")) >= 1 &&
      parseInt(localStorage.getItem("searchbarcount")) >= 1 &&
      parseInt(localStorage.getItem("addtocartcount")) >= 1
    ) {
      if (document.getElementById("emerguser").style.display === "none") {
        document.getElementById("emerguser").style.display = "block";
      }
    }
  }

  checkNonDUser();
  function checkNonDUser() {
    if (
      parseInt(localStorage.getItem("searchbarcount")) >= 1 &&
      parseInt(localStorage.getItem("homepagecount")) >= 1 &&
      parseInt(localStorage.getItem("dishpdp1count")) >= 1
    ) {
      if (document.getElementById("nonduresuser").style.display === "none") {
        document.getElementById("normaluser").style.display = "none";
        document.getElementById("nonduresuser").style.display = "block";
      }
    }
  }
}

// To clear use the code in console - localStorage.clear(dishplpcount)
console.log(
  "Home page clicked " +
    parseInt(localStorage.getItem("homepagecount")) +
    " times"
);

function homepageclickCount() {
  if (localStorage.getItem("homepagecount")) {
    homepagecount = parseInt(localStorage.getItem("homepagecount"));
  }
  homepagecount++;
  localStorage.setItem("homepagecount", homepagecount);
}

console.log(
  "Dishwasher PLP clicked " +
    parseInt(localStorage.getItem("dishplpcount")) +
    " times"
);

function dishplpclickCount() {
  if (localStorage.getItem("dishplpcount")) {
    dishplpcount = parseInt(localStorage.getItem("dishplpcount"));
  }
  dishplpcount++;
  localStorage.setItem("dishplpcount", dishplpcount);
}

console.log(
  "Dishwasher PDP one clicked " +
    parseInt(localStorage.getItem("dishpdp1count")) +
    " times"
);

function dishpdp1clickCount() {
  if (localStorage.getItem("dishpdp1count")) {
    dishpdp1count = parseInt(localStorage.getItem("dishpdp1count"));
  }
  dishpdp1count++;
  localStorage.setItem("dishpdp1count", dishpdp1count);
}

console.log(
  "Searchbar clicked " +
    parseInt(localStorage.getItem("searchbarcount")) +
    " times"
);

function searchbarclickCount() {
  if (localStorage.getItem("searchbarcount")) {
    searchbarcount = parseInt(localStorage.getItem("searchbarcount"));
  }
  searchbarcount++;
  localStorage.setItem("searchbarcount", searchbarcount);
}

console.log(
  "Add to cart clicked " +
    parseInt(localStorage.getItem("addtocartcount")) +
    " times"
);

function addtocartclickcount() {
  if (localStorage.getItem("addtocartcount")) {
    addtocartcount = parseInt(localStorage.getItem("addtocartcount"));
  }
  addtocartcount++;
  localStorage.setItem("addtocartcount", addtocartcount);
}

console.log(
  "My Cart clicked " + parseInt(localStorage.getItem("mycartcount")) + " times"
);

function mycartclickCount() {
  if (localStorage.getItem("mycartcount")) {
    mycartcount = parseInt(localStorage.getItem("mycartcount"));
  }
  mycartcount++;
  localStorage.setItem("mycartcount", mycartcount);
}

function dishplp() {
  if (localStorage.getItem("pincode") === "100") {
    dishplpclickCount();
    location.href = "dishplp1.html";
  } else if (localStorage.getItem("pincode") === "200") {
    dishplpclickCount();
    location.href = "dishplp2.html";
  } else {
    dishplpclickCount();
    location.href = "dishplp.html";
  }
}
function dishpdp1() {
  dishpdp1clickCount();
  location.href = "dishpdp1.html";
}
function dishpdp2() {
  dishpdp1clickCount();
  location.href = "dishpdp2.html";
}
function dishpdp3() {
  dishpdp1clickCount();
  location.href = "dishpdp3.html";
}
function dishpdp4() {
  dishpdp1clickCount();
  location.href = "dishpdp4.html";
}
function refplp() {
  location.href = "refplp.html";
}

function refpdp1() {
  // dishpdp1clickCount();
  location.href = "refpdp1.html";
}

function ovenplp() {
  location.href = "ovenplp.html";
}

function home() {
  homepageclickCount();
  location.href = "index.html";
}

function mycart() {
  mycartclickCount();
  location.href = "mycart.html";
}

function getpincode() {
  pincode = prompt("Please enter pincode", "000");
  if (pincode != null) {
    localStorage.setItem("pincode", pincode);
    console.log("Entered pincode is " + pincode);
    location.href = "index.html";
  }
}
console.log("Entered pincode is " + localStorage.getItem("pincode"));

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /*loop through a collection of all HTML elements:*/
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /*make an HTTP request using the attribute value as the file name:*/
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /*remove the attribute, and call this function once more:*/
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /*exit the function:*/
      return;
    }
  }
}
