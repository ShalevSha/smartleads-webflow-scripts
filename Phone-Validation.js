<script>
  // Phone Validation Script
  // Get all input elements with the name "Phone"
  const phoneInputs = document.querySelectorAll('input[name="Phone"]');

  // Add an event listener to each input element
  phoneInputs.forEach(input => {
    input.addEventListener('input', function (event) {
      // Get the current input value
      let value = event.target.value;

      // Remove any non-numeric characters
      value = value.replace(/[^0-9]/g, '');

      // Limit the input to 13 digits
      if (value.length > 13) {
        value = value.slice(0, 13);
      }

      // Update the input value with the limited numeric value
      event.target.value = value;
    });
  });
</script>
