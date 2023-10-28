//jquery is used to create the onscreen scroll effect
$(document).ready(function(){
  $('.header,.about,.education,.work,.skills,.project').height($(window).height());
}) // this code makes each section take the height of the window

$(".navbar a").click(function(){
  $("body,html").animate({
   scrollTop:$("#" + $(this).data('value')).offset().top
  },1000)
  
 }) // this code creates the scroll effect when the link on the navigation bar is clicked
