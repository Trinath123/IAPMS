window.$(document).ready(function () {
  ChangeLogo();

});

function ChangeLogo() {
  setTimeout(function () {
      if (window.$("div").attr("className") === "nav-md") {
          window.$("#imgLogo").attr("src", "Images/Bosch-LifeClip-EN-4C-Left1.jpg");
          window.$("#imgLogo").css("width", "140px");
      } else {
          window.$("#imgLogo").attr("src", "Images/smallLogoBosch.png");
          window.$("#imgLogo").css("width", "50px");
      }
  }, 200);
}