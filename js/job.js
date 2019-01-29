$(document).ready(function() {
    $(".pin-digit").on("keyup", function (e) {
      if (e.keyCode == 8 || e.keyCode == 48) {
        $(e.currentTarget).prev().select();
        $(e.currentTarget).prev().focus();
      } else {
        if ($(e.currentTarget).val() != "") {
          console.log($(e.currentTarget).next())
          $(e.currentTarget).next().select();
          $(e.currentTarget).next().focus();
        }
      }
    });
})