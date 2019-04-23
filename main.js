$(document).ready(function(){
  $('.color').on('click', function(){
    // split crée un tableau à partir d'une chaîne de caractère
    // [1] parce que l'indice de l'élément correspond au deuxième élement du tableau
    var colorChange = $(this).attr('class').split(' ')[1];
    $('#text').css('color', colorChange);
  });
});
