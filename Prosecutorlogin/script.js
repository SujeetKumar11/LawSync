//script.js 

document.addEventListener("DOMContentLoaded", function () {
  const passwordField = document.querySelector(".field.password");
  const startDateInput = document.getElementById("start-date");
  const endDateInput = document.getElementById("end-date");

  // Function to check if both date inputs are filled
  function isDateRangeValid() {
    return startDateInput.value !== "" && endDateInput.value !== "";
  }

  // Event listener for the date inputs
  startDateInput.addEventListener("input", function () {
    if (isDateRangeValid()) {
      passwordField.classList.remove("error");
    }
  });

  endDateInput.addEventListener("input", function () {
    if (isDateRangeValid()) {
      passwordField.classList.remove("error");
    }
  });

  // Event listener for the form submission
  document.querySelector("form").addEventListener("submit", function (e) {
    if (!isDateRangeValid()) {
      e.preventDefault(); // Prevent form submission if the date range is not valid
      passwordField.classList.add("error");
      document.querySelector(".error.error-txt.date-range").style.display = "block";
    }
  });
});
