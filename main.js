$('.color').on('click', function(){
  var colorChange = $(this).attr('class').split(' ')[1];
  $('#text').css('color', colorChange);
});
