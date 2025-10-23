// Plain JavaScript: BMI Calculator
function calculateBMI() {
  let w = parseFloat(document.getElementById("weight").value);
  let h = parseFloat(document.getElementById("height").value);
  if (w > 0 && h > 0) {
    let bmi = (w / (h * h)).toFixed(2);
    document.getElementById("bmiResult").innerText = "Your BMI: " + bmi;
  } else {
    alert("Please enter valid values!");
  }
}

// jQuery: Currency Converter
$(document).ready(function() {
  $("#inr").on("keyup change", function() {
    let inr = parseFloat($(this).val()) || 0;
    let usd = (inr / 83.0).toFixed(2); // sample rate
    $("#usdValue").text(usd);
  });
});

// Form Progress Tracker
const inputs = document.querySelectorAll("#regForm input, #regForm select, #regForm textarea");
const progress = document.getElementById("formProgress");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    let filled = Array.from(inputs).filter(i => i.value).length;
    let percent = (filled / inputs.length) * 100;
    progress.value = percent;
  });
});

// Login alert
document.getElementById("loginBtn").addEventListener("click", function() {
  let user = document.getElementById("username").value;
  alert("Welcome, " + user + "!");
});
