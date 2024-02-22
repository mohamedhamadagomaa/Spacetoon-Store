//check if there is color option for main

let mainColor = localStorage.getItem("color-option");
if (mainColor !== null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  //remove active class from all
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    //add calss active to li colored
    if (mainColor === element.dataset.color) {
      element.classList.add("active");
    }
  });
}
let backgroundInterval;
//get random background img

let optionbackground = true;

//check if there is color option for second color
let secondColor = localStorage.getItem("color-option-two");
if (secondColor !== null) {
  document.documentElement.style.setProperty("--second-color", secondColor);

  // remove active color for all li
  document.querySelectorAll(".colors-list-two li").forEach((element) => {
    element.classList.remove("active");
    if (secondColor === element.dataset.color) {
      element.classList.add("active");
    }
  });
}

//check if there is option color in
let backgroundLocalitem = localStorage.getItem("background-option");
//check if there is optin background in local
if (backgroundLocalitem !== null) {
  console.log(backgroundLocalitem);
  if (backgroundLocalitem === "true") {
    optionbackground = true;
  } else {
    optionbackground = false;
    console.log(optionbackground);
  }

  //remove active class from all sapn
  document.querySelectorAll(".random-background span").forEach((span) => {
    span.classList.remove("active");
  });
  if (backgroundLocalitem === "true") {
    document.querySelector(".yes").classList.add("active");
  } else {
    document.querySelector(".no").classList.add("active");
  }
}

//toggle spin class on icon

let settingBtn = document.querySelector(".gear");
let settingBox = document.querySelector(".setting-box");
let settingLink = document.querySelector(".links .setting-link");
console.log(settingLink);
settingBtn.onclick = function () {
  this.classList.toggle("fa-spin");
  settingBox.classList.toggle("open");
};
settingLink.onclick = function () {
  settingBox.classList.toggle("open");
};

//switch main color of page
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //set color to local storage

    localStorage.setItem("color-option-two", e.target.dataset.color);

    //remove active from all li
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //add active class to target element
    e.target.classList.add("active");
  });
});

//switch second color of page
const secondColorsLi = document.querySelectorAll(".colors-list-two li");
secondColorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      "--second-color",
      e.target.dataset.color
    );
    //set color on local storage
    localStorage.setItem("color-option-two", e.target.dataset.color);

    //remove class active from all li
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    //add class active to target element
    e.target.classList.add("active");
  });
});

//switch background option random

const randomBackground = document.querySelectorAll(".random-background span");

//loop on spans in background option
randomBackground.forEach((span) => {
  //remove calss active from all spans
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");

    if (e.target.dataset.backg === "yes") {
      optionbackground = true;
      randomBGfun();

      localStorage.setItem("background-option", true);
    } else {
      optionbackground = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option", false);
    }
  });
});

//select landing page element

let landingPage = document.querySelector(".landing-page");

//get array of imgs

let imgsArray = [
  ".../images/overlay1.jpg",
  ".../images/overlay2.jpg",
  ".../images/overlay3.jpg",
  ".../images/overlay4.jpg",
];

//change background landing page

function randomBGfun() {
  if (optionbackground === true) {
    backgroundInterval = setInterval(() => {
      let randomNum = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage = `url(".../images/overlay${
        randomNum + 1
      }.jpg")`;
    }, 1000);
  } else {
    clearInterval(backgroundInterval);
  }
}
randomBGfun();

//
