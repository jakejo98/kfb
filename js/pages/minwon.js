export function minwon() {
  checkUserAge();
}

function checkUserAge() {
  const showForm = $('.complaint-form-area.age-verified');

  $('input[name="complaint-input-radio-2"]').on('change', function () {
      const isChecked = $('input[name="complaint-input-radio-2"]').first().is(':checked');
      
      if (isChecked) {
          $(showForm).css('display', 'block');
      } else {
        $(showForm).css('display', 'none');
      }
  });
}

