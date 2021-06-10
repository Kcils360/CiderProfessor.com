$(function(){

$(".menu-icon").click( function() {
  $(".nav-list").toggleClass("hide");
});

if($(window).width() > 780) $(".nav-list").removeClass("hide");
if($(window).width() > 1080) $(".app-icon").toggleClass("hide");

$("#gradebook").click( function() {
  $(".gradebook").toggleClass("hide");
});

$("#gradebook ul").click( function(e){
  let $this = e.target.children;
  if($this && $this.length > 0){
    $(e.target.children).toggleClass("hide");    
  }
  $(this).toggleClass("hide");
});

$(".style").click( function() {
  $(this).next().children().toggleClass("hide");
  $(this).parent().toggleClass("hide");
});

$("#complit").click( function() {
  $(".complit").toggleClass("hide");
});

$("#complit ul").click( function(e){
  let $this = e.target.children;
  if($this && $this.length > 0){
    $(e.target.children).toggleClass("hide");    
  }
  $(this).toggleClass("hide");
});

$(".litstyle").click( function() {
  $(this).find(".sub-style").toggleClass("hide");
  $(this).parent().toggleClass("hide");
})

$("#cidreviews").click( function() {
  $(".cidreviews").toggleClass("hide");
});

$("#crgeography").click( function() {
  $(".crgeography").toggleClass("hide");
  $(this).parent().toggleClass("hide");
});

$(".state").click( function() {
  $(this).find(".state-item").toggleClass("hide");
  $(this).parent().toggleClass("hide");
})

$(".listofciders").click(function () {
  var id = $( this ).attr("title");
  window.location.href = `/ciderdetail/${id}`;
})

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

});
