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
