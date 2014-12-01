$('.spritesheet').blur(function (){
  if(this.value == '') {
    $(this).addClass('empty');
  }
}).focus(function (){
  $(this).removeClass('empty');
});