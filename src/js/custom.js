$(document).ready(function() {
    $("#asideToggleBtn,#asideToggleBtn2").click(function() {
      $(".asideBarToggle").toggleClass("custom-translate-x-full");
      $(".bg-primary-summit-mainbgblue").toggleClass("removeMarginFromMain");
      $("#asideToggleBtn svg").toggleClass("arrowRotate");
    });

    $("#modalclose3").click(function () {
      $("#videoplayer3").attr('src',$('#videoplayer3').attr('src')); 
      });
});