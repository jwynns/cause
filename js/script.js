$('.overslide label').click(function(){
  var $target = $(this).attr('for');
  $('.overslide [id=' + $target + ']').focus();
});

$('.overslide input, .overslide textarea').focus(function(){
  var $target = $(this).attr('id');
  $('.overslide label[for=' + $target + ']').addClass("focused");
  $(this).addClass("focused");
});

$('.overslide input, .overslide textarea').blur(function(){
  $(this).val($(this).val().trim());
  if($(this).val() == ''){
    var $target = $(this).attr('id');
    $('.overslide label[for=' + $target + ']').removeClass("focused");
    $(this).removeClass("focused");
  }
});