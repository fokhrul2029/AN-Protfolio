// ------------Loader----------------------
// document.addEventListener("DOMContentLoaded", function () {
//   // Simulate content loading delay
//   setTimeout(function () {
//     // Hide loader and show main content
//     document.getElementById("loader-container").style.display = "none";
//     document.getElementById("main-content").style.display = "block";
//   }, 500); // Adjust the delay time (in milliseconds) based on your needs
  
// });

document.addEventListener("DOMContentLoaded", function () {
  // Simulate content loading delay
  setTimeout(function () {
    // Hide loader and show main content
    document.getElementById("loader-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 200); // Adjust the delay time (in milliseconds) based on your needs
});



// AOS Animation / Animation on scroll 
AOS.init();
// Navigation Js-----------
window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("#navbar").style.boxShadow =
      " 0px 0px 20px 0px #0000005e   ";
  } else {
    document.querySelector("#navbar").style.boxShadow = " 0 0 0  transparent ";
  }
};

// Toast of Contact Form
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

// Typed.js / js for Typing on Text
var typed = new Typed(".typedJs", {
  strings: [
    "I'M AN MAMUN.",
  ],
  typeSpeed: 10,
  loop: true,
  backSpeed: 50,
});


// From sublit action 
function showLoading(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var popup = document.getElementById('loadingPopup');
  var formButton = document.getElementById('liveToastBtn'); // Add an ID to the submit button

  // Clear the form fields
  document.getElementById('contactForm').reset();

  // Position the popup just below the button
  popup.style.top = formButton.offsetTop + formButton.offsetHeight + 'px';
  popup.style.display = 'block';

  // Set a timeout to hide the popup after 5 seconds (5000 milliseconds)
  setTimeout(function () {
      popup.style.display = 'none';
  }, 5000);
}



// skill section
document.addEventListener('DOMContentLoaded', function () {
  // Get all elements with class 'progressBar'
  var progressBars = document.querySelectorAll('.progressBar');

  // Loop through each progress bar
  progressBars.forEach(function (progressBar) {
    // Get the inner progress bar element
    var innerProgressBar = progressBar.querySelector('.progress-bar');

    // Get the initial width of the progress bar
    var initialWidth = parseInt(innerProgressBar.style.width) || 0;

    // Add a click event listener to the progress bar
    progressBar.addEventListener('click', function () {
      // Toggle the width between 0% and the initial width
      innerProgressBar.style.width = innerProgressBar.style.width === '0%' ? initialWidth + '%' : '0%';
    });
  });
});



// Time Sectiom ---------------
function updateTime() {
  const dateElement = document.getElementById('date');
  const timeElement = document.getElementById('time');

  const now = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  //For 14Hour Format--
  const formattedTime = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;

  //For 12 Hour Format--
  // const formattedTime = `${addZero(hours % 12 || 12)}:${addZero(minutes)}:${addZero(seconds)} ${hours >= 12 ? 'PM' : 'AM'}`;

  dateElement.textContent = formattedDate;
  timeElement.textContent = formattedTime;
}

function addZero(number) {
  return number < 10 ? '0' + number : number;
}

updateTime(); // Initial call
setInterval(updateTime, 1000); // Update every second




// --------------------------------------------



