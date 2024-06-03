$(document).ready(function () {
  $("#asideToggleBtn,#asideToggleBtn2").click(function () {
    $(".asideBarToggle").toggleClass("custom-translate-x-full");
    $(".bg-summit-blue-light").toggleClass("removeMarginFromMain");
    $("#asideToggleBtn svg").toggleClass("arrowRotate");
  });

  $("#modalclose3").click(function () {
    $("#videoplayer3").attr("src", $("#videoplayer3").attr("src"));
  });
  $("#modalclose2").click(function () {
    $('#mp4player')[0].pause(); 
  });
});
