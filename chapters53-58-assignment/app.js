//   ab main aek function bna rha hn show image or main or is main maine parameter recieve karlia

// function showImage(e){
// console.log(e.src)
// var modalImage = document.getElementById("modalImage")
// modalImage.src =e.src
// }

// ab yahn dekhte hai ka img par jab click hoga to humain consile main mila ga kia


// TASK 2


function changeFs(target) {
    var demo = document.getElementById("p");
    var computedStyle = window.getComputedStyle
          ? getComputedStyle(p) 
          : demo.currentStyle;  
    var fontSize;

    if (computedStyle) { 
        fontSize = parseFloat(computedStyle && computedStyle.fontSize);
    if (target == document.getElementById("button1")) {
          fontSize += 10;
        } else if (target == document.getElementById("button2")) {
          fontSize -= 10;
        }
        demo.style.fontSize = fontSize + "px";
    }
      }