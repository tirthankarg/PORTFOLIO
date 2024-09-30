document
  .querySelector(".left-icon")
  .addEventListener("click", function (event) {

    // open and flip

    document.querySelector(".left").classList.toggle("show-left");

    document.querySelector(".right").classList.remove("show-right");

    document.querySelector(".left-icon").classList.toggle("v");

    document.querySelector(".right-icon-l").classList.toggle("v");

    document.querySelector(".icon-nav-l").classList.toggle("flip-icon");

    // close right

    document.querySelector(".left-icon-r").classList.remove("v");

    document.querySelector(".icon-nav-r").classList.remove("flip-icon");


    document.querySelector(".right-icon").classList.add("v");

  });

document
  .querySelector(".right-icon")
  .addEventListener("click", function (event) {


    // open and flip

    document.querySelector(".right").classList.toggle("show-right");

    document.querySelector(".left").classList.remove("show-left");

    document.querySelector(".right-icon").classList.toggle("v");

    document.querySelector(".left-icon-r").classList.toggle("v");

    document.querySelector(".icon-nav-r").classList.toggle("flip-icon");

    // close right

    document.querySelector(".right-icon-l").classList.remove("v");

    document.querySelector(".icon-nav-l").classList.remove("flip-icon");


    document.querySelector(".left-icon").classList.add("v");


  });

document
  .querySelector(".left-icon-r")
  .addEventListener("click", function (event) {
    document.querySelector(".right").classList.toggle("show-right");

    // document.querySelector(".left").classList.remove("show-left");

    document.querySelector(".right-icon").classList.toggle("v");

    document.querySelector(".left-icon-r").classList.toggle("v");

    document.querySelector(".icon-nav-r").classList.toggle("flip-icon");
  });

document
  .querySelector(".right-icon-l")
  .addEventListener("click", function (event) {
    document.querySelector(".left").classList.toggle("show-left");

    // document.querySelector(".right").classList.remove("show-right");

    document.querySelector(".left-icon").classList.toggle("v");

    document.querySelector(".right-icon-l").classList.toggle("v");

    document.querySelector(".icon-nav-l").classList.toggle("flip-icon");
  });


 