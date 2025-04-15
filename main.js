document.getElementById("cnic").addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9-]/g, ""); // Allow only numbers and dashes
  });
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('Button has been activated!');
  });
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("activeForm");
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const submitButton = document.getElementById("submitBtn");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");

    // Validate the form fields
    function validateForm() {
        let isValid = true;

        // Username validation
        if (usernameInput.value.trim().length < 3) {
            usernameError.textContent = "Username must be at least 3 characters.";
            isValid = false;
        } else {
            usernameError.textContent = "";
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        } else {
            emailError.textContent = "";
        }

        // Enable or disable the submit button
        submitButton.disabled = !isValid;
    }

    // Attach event listeners
    usernameInput.addEventListener("input", validateForm);
    emailInput.addEventListener("input", validateForm);

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        form.reset();
        validateForm(); // Reset the button state
    });
});
document.addEventListener("DOMContentLoaded", () => {
  const filterForm = document.getElementById("filterForm");
  const typeSelect = document.getElementById("type");
  const priceRangeSelect = document.getElementById("priceRange");
  const vehicleBoxes = document.querySelectorAll(".service-container .box");

  function applyFilters() {
      const selectedType = typeSelect.value;
      const selectedPrice = priceRangeSelect.value;

      vehicleBoxes.forEach((box) => {
          const vehicleType = box.querySelector("img").src.includes("bike") ? "bike" : "car";
          const priceText = box.querySelector("h2").textContent;
          const price = parseInt(priceText.replace(/[^0-9]/g, ""), 10);

          let typeMatch = selectedType === "all" || vehicleType === selectedType;
          let priceMatch =
              selectedPrice === "all" ||
              (selectedPrice === "5000" && price <= 5000) ||
              (selectedPrice === "7000" && price <= 7000) ||
              (selectedPrice === "10000" && price <= 10000) ||
              (selectedPrice === "15000" && price <= 15000);

          if (typeMatch && priceMatch) {
              box.style.display = "block";
          } else {
              box.style.display = "none";
          }
      });
  }

  document.getElementById("applyFilters").addEventListener("click", applyFilters);
});
