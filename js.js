let two = 1;
const array = ["1.jpg", "2.jpg", "3.jpg"];
function openCont() {
  if (box.classList.contains("visibility_blok_none")) {
    box.classList.remove("visibility_blok_none");
    setTimeout(() => {
      box.classList.add("visibility_blok");
    }, 20);
  } else {
    box.classList.remove("visibility_blok");
    setTimeout(() => {
      box.classList.add("visibility_blok_none");
    }, 1000);
  }
}
const video = ["one.mp4", "two.jfif", "three.mp4"];

let countProd = 1;
function openProd() {
  if (countProd === 0) {
    prod.style.display = "none";
    shopning_pop_ID.style.display = "none";
    countProd = 1;
  } else {
    prod.style.display = "grid";
    shopning_pop_ID.style.display = "block";
    countProd = 0;
  }
}
function openVideo() {
  if (countPh === 0) {
    vid.style.display = "block";
    vids.style.display = "block";
    document.querySelector(".arrow_next_video").style.display = "block";
    document.querySelector(".arrow_back_video").style.display = "block";
    countPh = 1;
  } else {
    vid.style.display = "none";
    vids.style.display = "none";
    img_v.style.display = "none";
    document.querySelector(".arrow_next_video").style.display = "none";
    document.querySelector(".arrow_back_video").style.display = "none";
    countPh = 0;
  }
}
function nextVideo() {
  if (two === 1) {
    img_v.src = video[1];
    img_v.style.display = "block";
  }
  if (two === 2) {
    vids.src = video[2];
    img_v.style.display = "none";
  }
  if (two === 3) {
    vids.src = video[0];
  }
  if (two === 3) {
    two = 0;
  }
  ++two;
}
function backVideo() {
  if (two === 1) {
    vids.src = video[2];
  }
  if (two === 2) {
    vids.src = video[0];
    img_v.style.display = "none";
  }
  if (two === 3) {
    img_v.src = video[1];
    img_v.style.display = "block";
  }
  --two;
  if (two === 0) {
    two = 3;
  }
}
countPh = 0;
function openPhoto() {
  if (countPh === 0) {
    pop.style.display = "block";
    photo_box.style.display = "block";
    document.querySelector(".arrow_next").style.display = "block";
    document.querySelector(".arrow_back").style.display = "block";
    countPh = 1;
  } else {
    pop.style.display = "none";
    document.querySelector(".arrow_next").style.display = "none";
    document.querySelector(".arrow_back").style.display = "none";
    photo_box.style.display = "none";
    countPh = 0;
  }
  if (one === 1) {
    document.getElementById("photo_box").src = array[0];
  }
  if (one === 2) {
    photo_box.src = array[1];
  }
  if (one === 3) {
    photo_box.src = array[2];
  }
}
function next() {
  if (one === 1) {
    photo_box.src = array[1];
  }
  if (one === 2) {
    photo_box.src = array[2];
  }
  if (one === 3) {
    photo_box.src = array[0];
  }
  if (one === 3) {
    one = 0;
  }
  ++one;
}
function back() {
  if (one === 1) {
    photo_box.src = array[2];
  }
  if (one === 2) {
    photo_box.src = array[0];
  }
  if (one === 3) {
    photo_box.src = array[1];
  }
  --one;
  if (one === 0) {
    one = 3;
  }
}
function numOne() {
  one = 1;
}
function numTwo() {
  one = 2;
}
function numThree() {
  one = 3;
}
let prod1 = 0,
  prod2 = 0,
  prod3 = 0,
  prod4 = 0,
  prod5 = 0,
  prod6 = 0,
  prod7 = 0,
  prod8 = 0;
let countShop = 1;

function openShoping() {
  if (countShop === 0) {
    shopning_pop_ID.style.display = "none";
    countShop = 1;
  } else {
    shopning_pop_ID.style.display = "block";
    countShop = 0;
  }
}
document.addEventListener("keydown", function (event) {
  if (["ArrowRight"].includes(event.key)) {
    next();
  }
});
document.addEventListener("keydown", function (event) {
  if (["ArrowLeft"].includes(event.key)) {
    back();
  }
});
// document.addEventListener('keydown', function(event){
//   if (event.shiftKey && ['F','f'].includes(event.key) ) {
//       console.log('Нажаты Shift + F или Shift + f');
//   }
// });
