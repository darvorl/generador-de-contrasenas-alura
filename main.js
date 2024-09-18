const inputRange = document.getElementById("password-range");
const rangeValue = document.getElementById("range-value");
const passwordGenerated = document.getElementById("password-generated");
const generateBtn = document.getElementById("generate-password");
const passwordRange = document.getElementById("password-range");
const minusculas = "abcdefghijklmnopqrstuvwxyz";
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "1234567890";
const simbolos = "!@#$%^&*()_+-=[]{}|;',./<>?";
const mayusculasCheckbox = document.getElementById("incluir-mayusculas");
const minusculasCheckbox = document.getElementById("incluir-minusculas");
const numerosCheckbox = document.getElementById("incluir-numeros");
const simboloCheckbox = document.getElementById("incluir-simbolos");
const copyIcon = document.getElementById("copy-icon");

function updateRangeValue() {
  rangeValue.textContent = inputRange.value;
}

function generatePassword(
  longitud,
  incluirMayusculas,
  incluirMinusculas,
  incluirNumeros,
  incluirSimbolos
) {
  let password = "";
  let caracteres = "";

  if (
    mayusculasCheckbox.checked ||
    minusculasCheckbox.checked ||
    numerosCheckbox.checked ||
    simboloCheckbox.checked
  ) {
    passwordGenerated.textContent = "";
    if (incluirMayusculas) {
      caracteres += mayusculas;
    }
    if (incluirMinusculas) {
      caracteres += minusculas;
    }
    if (incluirNumeros) {
      caracteres += numeros;
    }
    if (incluirSimbolos) {
      caracteres += simbolos;
    }

    for (let i = 0; i < longitud; i++) {
      password += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    return password;
  } else {
    alert("Marca al menos un checkbox!");
    return "Password"
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then();
}

inputRange.addEventListener("input", updateRangeValue);
inputRange.addEventListener("input", function () {
  const value = this.value;
  const min = this.min;
  const max = this.max;

  const percentage = ((value - min) / (max - min)) * 100;

  this.style.background = `linear-gradient(to right, var(--clr--accent) ${percentage}%, var(--clr--text--400) ${percentage}%)`;
});
copyIcon.addEventListener("click", function () {
  let password = passwordGenerated.textContent;
  if (password !== "Password") {
    copyToClipboard(password);
  }
});
copyIcon.addEventListener("click", function () {
  copyIcon.style.opacity = "20%";

  setTimeout(function () {
    copyIcon.style.opacity = "100%";
  }, 400);
});

window.onload = function () {
  var inputs = document.querySelectorAll(
    'input[type="checkbox"], input[type="radio"]'
  );

  inputs.forEach(function (input) {
    input.value = input.defaultValue;
  });
};

generateBtn.addEventListener("click", function () {
  passwordGenerated.textContent = generatePassword(
    passwordRange.value,
    mayusculasCheckbox.checked,
    minusculasCheckbox.checked,
    numerosCheckbox.checked,
    simboloCheckbox.checked
  );
});
