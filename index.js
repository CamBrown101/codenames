let nmbguess = 0;
let hint = '';
$(document).ready(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
  });
  //Hint Submission
  $('.submit-btn').click(function () {
    $('.submit-btn').hide('.submit-btn');
    // update variables with user inputs
    nmbguess = $('.number-guess').val();
    hint = $('.hint').val();
    let html = `<h1 class="inputs">${hint} ${nmbguess}</h1>`;
    //Hide Input Bars
    $('.hint').hide();
    $('.number-guess').hide();
    //Display Hints
    $('.hint-submission').append(html);
    //Reset Inputs
    $('.hint').val('');
    $('.number-guess').val(1);
    console.log(nmbguess);
    console.log(hint);
  });

  $('.burger').on('click', function () {
    $('.pop-out-menu').toggle();
  });
});
