$(document).ready(function(){
  $('.icon-humburger').click(function(){
      $('#iphone-list').removeClass('jq-list-call-none');
      $('.icon-humburger').hide();
      $('nav').addClass('justify-content-center');
  })
  $('#header-logo, .banner, .header-iphone-list li').click(function(){
    $('#iphone-list').addClass('jq-list-call-none');
    $('.icon-humburger').show();
    $('nav').removeClass('justify-content-center');
  })
})