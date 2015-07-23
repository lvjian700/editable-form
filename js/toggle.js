var Pricing = Pricing || {};


(function($) {

  $.extend(Pricing, {
    Form: function(options) {
      $.extend(this, {
        el: $('#form-container'),
        msg: $('#msg'),
        input: $('#msg-input'),
        events: {
          'submit': 'updateView'
        },
        updateView: function() {
          this.msg.html(this.input.val());
          this.el.toggleClass('edit');
        },
        edit: function() {
          this.input.val(this.msg.text());
          this.el.toggleClass('edit');
        }
      }, options);

      for(var eventName in this.events) {
        if (this.events.hasOwnProperty(eventName)) {
          var that = this;
          this.el.bind(eventName, function(e) {
            e.preventDefault();
            that[that.events[eventName]]();
          });
        }
      }
    }
  });

  var updateForm = new Pricing.Form({
    toggle: function() {
      this.el.toggleClass('edit');
    }
  });

  function preventDefault (actionFunc) {
    return function(e) {
      e.preventDefault();
      actionFunc.call(this);
    };
  }

  function switchToEditForm () {
    updateForm.edit();
  }

  $('#btn-edit').click(preventDefault(switchToEditForm));

})(jQuery);
