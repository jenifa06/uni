
function calculateBMI() {
  let w = parseFloat(document.getElementById("weight").value);
  let h = parseFloat(document.getElementById("height").value);
  if (w > 0 && h > 0) {
    let bmi = (w / (h * h)).toFixed(2);
    document.getElementById("bmiResult").innerText = "Your BMI: " + bmi;
  } else {
    alert("Please enter valid numbers!");
  }
}

// ✅ jQuery: Currency Converter (₹ → $)
$(document).ready(function () {
  $("#inr").on("keyup change", function () {
    let inr = parseFloat($(this).val()) || 0;
    let usd = (inr / 83.0).toFixed(2);
    $("#usdValue").text("$" + usd);
  });
});

// ✅ Progress Bar Updates as form fields are filled
const inputs = document.querySelectorAll("#regForm input, #regForm select, #regForm textarea");
const progress = document.getElementById("formProgress");

inputs.forEach(input => {
  input.addEventListener("input", () => {
    let filled = Array.from(inputs).filter(i => i.value).length;
    let percent = (filled / inputs.length) * 100;
    progress.value = percent;
  });
});

// ✅ Login popup message
document.getElementById("loginBtn").addEventListener("click", () => {
  let user = document.getElementById("username").value;
  if (user.trim() !== "") alert("Welcome, " + user + " 🎉");
  else alert("Please enter your username!");
});
