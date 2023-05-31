function convert() {
  var inputValue = parseFloat(document.getElementById("inputValue").value);
  var inputUnit = document.getElementById("inputUnit").value;
  var outputUnit = document.getElementById("outputUnit").value;
  var outputValue;

  if (inputUnit === outputUnit) {
    outputValue = inputValue;
  } else if (inputUnit === "cm") {
    if (outputUnit === "m") {
      outputValue = inputValue / 100;
    } else if (outputUnit === "ft") {
      outputValue = inputValue / 30.48;
    } else if (outputUnit === "in") {
      outputValue = inputValue / 2.54;
    } else if (outputUnit === "km") {
      outputValue = inputValue / 100000;
    }
  } else if (inputUnit === "m") {
    if (outputUnit === "cm") {
      outputValue = inputValue * 100;
    } else if (outputUnit === "ft") {
      outputValue = inputValue * 3.281;
    } else if (outputUnit === "in") {
      outputValue = inputValue * 39.37;
    } else if (outputUnit === "km") {
      outputValue = inputValue / 1000;
    }
  } else if (inputUnit === "in") {
    if (outputUnit === "cm") {
      outputValue = inputValue * 2.54;
    } else if (outputUnit === "m") {
      outputValue = inputValue * 0.0254;
    } else if (outputUnit === "ft") {
      outputValue = inputValue * 0.0833;
    } else if (outputUnit === "km") {
      outputValue = inputValue * 0.0000254;
    }
  } else if (inputUnit === "km") {
    if (outputUnit === "cm") {
      outputValue = inputValue * 100000;
    } else if (outputUnit === "m") {
      outputValue = inputValue * 1000;
    } else if (outputUnit === "ft") {
      outputValue = inputValue * 3281;
    } else if (outputUnit === "in") {
      outputValue = inputValue * 39370;
    }
  }

  document.getElementById("outputValue").value = outputValue;
}
