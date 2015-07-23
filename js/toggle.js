(function($) {

  function preventDefault (actionFunc) {
    return function(e) {
      e.preventDefault();
      actionFunc.call(this);
    };
  }

  function updateView () {
    $('#form-container').toggleClass('edit');
    $('#msg').text($('#msg-input').val());
  }

  function switchToEditForm () {
    $('#msg-input').val($('#msg').text());
    $('#form-container').toggleClass('edit');
  }

  $('#btn-edit').click(preventDefault(switchToEditForm));
  $('#editor').submit(preventDefault(updateView));

})(jQuery);
