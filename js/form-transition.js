$(document).ready(function(){
  $('form').removeClass('navigating');
});

$(document).on('click', function(){
  $('form').addClass('navigating');
});