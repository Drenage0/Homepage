var count = 0;
let element = document.getElementById("picture");
element.addEventListener("click", function () {
  count++;
  if (count == 1) {
    alert("Please don't click on my face");
  } else if (count == 2) {
    alert("Cman, I asked you nicely!");
  } else if (count == 3) {
    alert("RWAUUUUUUUUU!");
  }
  //   console.log(count);
  if (count > 3) {
    document.querySelector(".container").style.opacity = 1;
    document.querySelector(".container").style.zIndex = 99;
    document.querySelector(".content").innerHTML =
      "CONTENT BLOCKED FOR BEING RUDE";
    // document.querySelector(".content").style.color = "white";
    console.log("here");
  }
});
