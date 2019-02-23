document.getElementById('name').innerHTML = "JOIS";
document.getElementsByClassName('kelas')[0].innerHTML = 'INI KELAS';

function pindah() {
  window.open("index2.html", "_blank");
}

function diKlik() {
  alert('OKE berhasil');
}

function berubah() {
  document.getElementsByClassName('kelas')[1].innerHTML = 'INI KELAS';
}

function berubahLagi() {
  document.getElementsByClassName('kelas')[1].innerHTML = 'Test Class 2';
}

function munculkanAlert() {
  var inputan = document.getElementById('inputan').value;
  alert(inputan);
}

$(document).ready(function () {
  $('#name').html('<strong>GILANG<strong>');
  $('.kelas').html('INI KELAS DARI JQUERY');


  $('#paragraf').mouseover(function () {
    $('#inputan').prop('disabled', true);
  });

  var state = 0;
  $('#paragraf').click(function () {

    if (state === 0) state = 1;
    else state = 0;

    if (state === 0) {
      $(this).text(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit tenetur quibusdam beatae
      molestias eum dolor
      amet, explicabo eveniet ipsa consequuntur fugiat repellendus quos natus totam modi, ea blanditiis dicta? Ducimus!`);
      $(this).css('color', 'black');
    } else {
      $(this).text('Ini lorem juga loh');
      $(this).css('color', 'red');
    }
  });

  $('#btnEnabled').click(function () {
    if ($('#inputan').is(':disabled')) {
      $('#inputan').prop('disabled', false);
      $('#name').css('font-size', '500px');
    }
  });



});





