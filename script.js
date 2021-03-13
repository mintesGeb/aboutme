// alert("hi");
// serlectors

const images = document.querySelectorAll("img"); //
const links = document.querySelectorAll("a");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", function () {
    images[i].style.width = "200px";
    images[i].style.height = "200px";
  });
  setTimeout(function () {
    images[i].style.width = "150px";
    images[i].style.height = "150px";
  }, 3000);
}

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    images[i].style.width = "150px";
    images[i].style.height = "150px";
  });
}

setTimeout(function () {
  images[i].style.width = "150px";
  images[i].style.height = "150px";
}, 3000);
