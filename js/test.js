//Show laptop menu
const menuLaptop = document.getElementById("menu-laptop");
const laptopList = document.getElementsByClassName("laptop-list")[0];
menuLaptop.addEventListener("click", function (event) {
  laptopList.classList.toggle("show");
});
//Laptop 1
const laptop1 = document.querySelector("#laptop-1 > h3");
const laptop1Info = document.querySelector("#laptop-1 > .laptop-description");
laptop1.addEventListener("click", function (event) {
  laptop1Info.classList.toggle("show");
});
//Laptop2
const laptop2 = document.querySelector("#laptop-2 > h3");
const laptop2Info = document.querySelector("#laptop-2 > .laptop-description");
laptop2.addEventListener("click", function (event) {
  laptop2Info.classList.toggle("show");
});
//Laptop3
const laptop3 = document.querySelector("#laptop-3 > h3");
const laptop3Info = document.querySelector("#laptop-3 > .laptop-description");
laptop3.addEventListener("click", function (event) {
  laptop3Info.classList.toggle("show");
});
//Laptop button
const laptop1Btn = document.querySelector("#laptop-1 > .laptop-description > button");
laptop1Btn.addEventListener("click", function (event) {
  alert("Куплено");
  laptop1Info.classList.toggle("show");
  laptopList.classList.toggle("show");
});
const laptop2Btn = document.querySelector("#laptop-2 > .laptop-description > button");
laptop2Btn.addEventListener("click", function (event) {
  alert("Куплено");
  laptop2Info.classList.toggle("show");
  laptopList.classList.toggle("show");
});
const laptop3Btn = document.querySelector("#laptop-3 > .laptop-description > button");
laptop3Btn.addEventListener("click", function (event) {
  alert("Куплено");
  laptop3Info.classList.toggle("show");
  laptopList.classList.toggle("show");
});

//Show smartphone menu
const menuSmartphone = document.getElementById("menu-smartphone");
const smartphoneList = document.getElementsByClassName("smartphone-list")[0];
menuSmartphone.addEventListener("click", function (event) {
  smartphoneList.classList.toggle("show");
});
//Smartphone1
const smartphone1 = document.querySelector("#smartphone-1 > h3");
const smartphone1Info = document.querySelector("#smartphone-1 > .smartphone-description");
smartphone1.addEventListener("click", function (event) {
  smartphone1Info.classList.toggle("show");
});
//Smartphone2
const smartphone2 = document.querySelector("#smartphone-2 > h3");
const smartphone2Info = document.querySelector("#smartphone-2 > .smartphone-description");
smartphone2.addEventListener("click", function (event) {
  smartphone2Info.classList.toggle("show");
});
//Smartphone3
const smartphone3 = document.querySelector("#smartphone-3 > h3");
const smartphone3Info = document.querySelector("#smartphone-3 > .smartphone-description");
smartphone3.addEventListener("click", function (event) {
  smartphone3Info.classList.toggle("show");
});
//Smartphone button
const smartphone1Btn = document.querySelector("#smartphone-1 > .smartphone-description > button");
smartphone1Btn.addEventListener("click", function (event) {
  alert("Куплено");
  smartphone1Info.classList.toggle("show");
  smartphoneList.classList.toggle("show");
});
const smartphone2Btn = document.querySelector("#smartphone-2 > .smartphone-description > button");
smartphone2Btn.addEventListener("click", function (event) {
  alert("Куплено");
  smartphone2Info.classList.toggle("show");
  smartphoneList.classList.toggle("show");
});
const smartphone3Btn = document.querySelector("#smartphone-3 > .smartphone-description > button");
smartphone3Btn.addEventListener("click", function (event) {
  alert("Куплено");
  smartphone3Info.classList.toggle("show");
  smartphoneList.classList.toggle("show");
});

//Show tv menu
const menuTv = document.getElementById("menu-tv");
const tvList = document.getElementsByClassName("tv-list")[0];
menuTv.addEventListener("click", function (event) {
  tvList.classList.toggle("show");
});
//TV1
const tv1 = document.querySelector("#tv-1 > h3");
const tv1Info = document.querySelector("#tv-1 > .tv-description");
tv1.addEventListener("click", function (event) {
  tv1Info.classList.toggle("show");
});
//TV2
const tv2 = document.querySelector("#tv-2 > h3");
const tv2Info = document.querySelector("#tv-2 > .tv-description");
tv2.addEventListener("click", function (event) {
  tv2Info.classList.toggle("show");
});
//TV3
const tv3 = document.querySelector("#tv-3 > h3");
const tv3Info = document.querySelector("#tv-3 > .tv-description");
tv3.addEventListener("click", function (event) {
  tv3Info.classList.toggle("show");
});
//TV button
const tv1Btn = document.querySelector("#tv-1 > .tv-description > button");
tv1Btn.addEventListener("click", function (event) {
  alert("Куплено");
  tv1Info.classList.toggle("show");
  tvList.classList.toggle("show");
});
const tv2Btn = document.querySelector("#tv-2 > .tv-description > button");
tv2Btn.addEventListener("click", function (event) {
  alert("Куплено");
  tv2Info.classList.toggle("show");
  tvList.classList.toggle("show");
});
const tv3Btn = document.querySelector("#tv-3 > .tv-description > button");
tv3Btn.addEventListener("click", function (event) {
  alert("Куплено");
  tv3Info.classList.toggle("show");
  tvList.classList.toggle("show");
});
