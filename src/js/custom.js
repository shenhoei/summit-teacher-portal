$(document).ready(function () {
  $("#asideToggleBtn,#asideToggleBtn2").click(function () {
    $(".asideBarToggle").toggleClass("custom-translate-x-full");
    $(".bg-summit-blue-light").toggleClass("removeMarginFromMain");
    $("#asideToggleBtn img").toggleClass("arrowRotate");
    $("#teacher-reports-content").toggleClass("teacher-report-main-margin");
  });

  $("#asideStudentPLPToggleBtn").click(function () {
    $(".plpasideBarToggle").toggleClass("plp-custom-translate-x-full");
    $(".plpasideBarToggle").toggleClass("mr-5");
    $(".bg-summit-blue-light").toggleClass("removeMarginFromMain");
    $("#asideStudentPLPToggleBtn img").toggleClass("arrowRotate");
    $("#student-plp-content").toggleClass("student-plp-main-margin");
  });

  
  $(function(){
    $("#summit-table-holder").width($("main").width() - $("aside").width() - 42);
  });

  $("#modalclose3").click(function () {
    $("#videoplayer3").attr("src", $("#videoplayer3").attr("src"));
  });
  $("#modalclose2").click(function () {
    $('#mp4player')[0].pause(); 
  });
  $(".aside-button").click(function(){
    $(this).toggleClass("asideRotate")
  });

  $(".half-circle-progress").each(function(){
  
    var $bar = $(this).find(".half-circle-bar");
    var $val = $(this).find("span.half-circle-percent");
    var perc = parseInt( $val.text(), 10);
  
    $({p:0}).animate({p:perc}, {
      duration: 1000,
      easing: "swing",
      step: function(p) {
        $bar.css({
          transform: "rotate("+ (45+(p*1.8)) +"deg)", // 100%=180° so: ° = % * 1.8
          // 45 is to add the needed rotation to have the green borders at the bottom
        });
        $val.text(p|0);
      }
    });
  });

  $("#defaultModal").modal.isVisible();
});
