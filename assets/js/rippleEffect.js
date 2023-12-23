//Ripple Event Handler
var drawRipple = function(ev) {
    var x = ev.clientX;
    var y = ev.clientY;
    var node = document.querySelector(".ripple");
    var newNode = node.cloneNode(true);
    newNode.classList.add("animate");
    newNode.style.left = ev.clientX - 5 + "px";
    newNode.style.top = ev.clientY - 5 + "px";
    node.parentNode.replaceChild(newNode, node);
  };
  
  //Ripple Triggers
  window.addEventListener("click", drawRipple);
  
  
  //Control Handler
  var controlHandler = function() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      controller.textContent = "Dark Ripple";
    } else {
      controller.textContent = "Bright Ripple";
    }
  };
  

  