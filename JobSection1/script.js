

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


function myFunction2() {
    var x = document.getElementById("myLinks2");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function myFunction3() {
    var x = document.getElementById("myLinks3");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  document.querySelector(".profile-header").addEventListener("click", function (event) {
    var dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    event.stopPropagation();
});

document.addEventListener("click", function () {
    var dropdown = document.querySelector(".dropdown-content");
    dropdown.style.display = "none";
});

const bookmark = document.getElementById("bookmark");
const bookmarkIcon = document.getElementById("bookmark-icon");


let isBookmarked = false;

bookmark.addEventListener("click", function () {
  isBookmarked = !isBookmarked; // Toggle bookmark state

  if (isBookmarked) {
    bookmark.classList.add("bookmarked");
    bookmarkIcon.innerHTML = "📖"; // Change icon when bookmarked

  } else {
    bookmark.classList.remove("bookmarked");
    bookmarkIcon.innerHTML = "📚"; // Change icon when not bookmarked

  }
});

// pagination
