$(document).ready(function() {
    $("#asideToggleBtn,#asideToggelBtn2").click(function() {
      $(".asideBarToggle").toggleClass("custom-translate-x-full");
      $(".bg-primary-summit-mainbgblue").toggleClass("removeMarginFromMain");
      $("#asideToggelBtn svg").toggleClass("arrowRotate");
    });
});