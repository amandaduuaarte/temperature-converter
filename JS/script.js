const FinalValue = (valor, type) => {
  document.querySelector(
    "#final"
  ).innerHTML = `A temperatura é:  ${valor}° ${type} `;
};

const getInputTempValues = (nameInput, nameCheckbox) => {
  const getTempValue = document.querySelector(`#${nameInput}`).value;
  const tempValue = parseInt(getTempValue);

  const type = document.querySelector(
    `input[name=${nameCheckbox}]:checked`
  ).value;

  return {
    tempValue,
    type,
  };
};

function transformCelsiusToFahrenheit() {
  const { tempValue, type } = getInputTempValues(
    "tempValueCelsiusToFahrenheit",
    "celsiusToFahrenheit"
  );

  if (!type) {
    document.querySelector("#final").innerHTML = "Valor inválido";
  } else if (type === "celcius") {
    const value = Math.floor(tempValue * 1.8 + 32);
    FinalValue(value, "Fahrenheit");
  } else if (type === "fahrenheit") {
    const value = Math.floor((tempValue - 32) * 1.8);
    FinalValue(value, "Celcius");
  }
}

function transformCelsiusToKelvin() {
  const { tempValue, type } = getInputTempValues(
    "tempValueKelvinToFahrenheit",
    "celsiusToKelvin"
  );

  if (!type) {
    document.querySelector("#final").innerHTML = "Valor inválido";
  } else if (type === "celcius") {
    const value = Math.floor(tempValue + 273);
    FinalValue(value, "kelvin");
  } else if (type === "kelvin") {
    const value = Math.floor(tempValue - 273);
    FinalValue(value, "Celcius");
  }
}

function transformKelvinToCelcius() {
  const { tempValue, type } = getInputTempValues(
    "tempValueKelvinToFahrenheit",
    "kelvinToFahrenheit"
  );

  if (!type) {
    document.querySelector("#final").innerHTML = "Valor inválido";
  } else if (type === "kelvin") {
    const value = Math.floor(tempValue * 1.8 - 459.67);
    FinalValue(value, "Fahrenheit");
  } else if (type === "Fahrenheit") {
    const value = Math.floor((tempValue + 459.67) / 1.8);
    FinalValue(value, "kelvin");
  }
}
