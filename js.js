let array = ["1.jpg", "2.jpg", "3.jpg"];
function open_cont() {
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
function open_photo() {
  if (pop.style.display === "none") {
    pop.style.display = "block";
    document.querySelector(".arrow_next").style.display = "block";
    document.querySelector(".arrow_back").style.display = "block";
  } else {
    pop.style.display = "none";
    document.querySelector(".arrow_next").style.display = "none";
    document.querySelector(".arrow_back").style.display = "none";
  }
  if (one === 1) {
    photo_box.style.display = "block";
  }
  if (one === 2) {
    photo_box.style.display = "none";
    photo_box_two.style.display = "block";
  }
  if (one === 3) {
    photo_box.style.display = "none";
    photo_box_two.style.display = "none";
    photo_box_three.style.display = "block";
  }
}
function next() {
  document.querySelector(".arrow_back").style.display = "none";
  setTimeout(() => {
    document.querySelector(".arrow_back").style.display = "block";
  }, 3000);
  if (one === 1) {
    photo_box.style.margin = " 1.5% 0 0 -70%";
    photo_box.classList.remove("shadow");
    photo_box.style.display = "block";
    photo_box_two.style.display = "block";
  }
  if (one === 2) {
    photo_box_two.style.margin = " 1.5% 0 0 -70%";
    photo_box_two.classList.remove("shadow");
    photo_box_two.style.display = "block";
    photo_box_three.style.display = "block";
  }
  if (one === 3) {
    photo_box.style.margin = " 1.5% 0 0 -70%";
    photo_box_two.style.margin = " 1.5% 0 0 -70%";
    photo_box_three.style.margin = " 1.5% 0 0 -70%";
    photo_box.style.display = "block";
    photo_box_two.style.display = "block";
    photo_box_three.style.display = "block";
    setTimeout(() => {
        document.querySelector(".arrow_back").style.display = "none";
      }, 3000);
    setTimeout(() => {
      document.querySelector(".arrow_back").style.display = "block";
    }, 5600);
    setTimeout(() => {
      photo_box.style.margin = " 1.5% 0 0 20%";
      photo_box.classList.add("shadow");
    }, 2000);
    setTimeout(() => {
      photo_box_two.style.margin = " 1.5% 0 0 20%";
      photo_box_two.classList.add("shadow");
    }, 2300);
    setTimeout(() => {
      photo_box_three.style.margin = " 1.5% 0 0 20%";
    }, 2600);

    one = 0;
  }
  ++one;
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
if(KeyboardEvent.keycode === 39) {
  function next ();
}