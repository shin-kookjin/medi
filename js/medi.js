$(function () {
  //탭메뉴
  $(".tabmenu .tits a").click(function () {
    $(".tabmenu .tits a").removeClass("active");
    $(this).addClass("active");

    // $(".tabmenu .con ul").toggle();
    var idx = $(this).index();
    // alert(idx);
    $(".tabmenu .con ul").hide();
    $(".tabmenu .con ul").eq(idx).show();
  });
  //패밀사이트
  $(".fam button").click(function () {
    $(".fam_list").toggle();
  });
});
