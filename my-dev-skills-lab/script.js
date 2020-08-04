
$('button').click(
  function (event) {
    let toAdd = $('input').val();
    $('ul').append('<li>' + toAdd + ' <button class="btn btn-xs btn-danger">X</button></li>') 

    $('input').val('');
  });

$('input').click(function (event) {
  $(this.fadeOut('slow'));
});

$(document).on('click', 'li', function () {
  $(this).fadeOut('slow');
});


