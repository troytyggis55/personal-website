<script setup>
  import {ref} from "vue";

  const calculatorScreenInput = ref("0");
  const calculatorScreenOutput = ref("0");

  const setNumber = ref(0);

  const currentOperation = ref("");

  function addCharToInput(symbol) {
    if (calculatorScreenInput.value.length >= 10) {
      return;
    }

    if (symbol === "." && !calculatorScreenInput.value.includes(".")) {
      calculatorScreenInput.value += symbol;
    } else if (symbol !== ".") {
      if (calculatorScreenInput.value === "0") {
        calculatorScreenInput.value = symbol;
      } else {
        calculatorScreenInput.value += symbol;
      }
    }

    if (currentOperation.value === "") {
      calculatorScreenOutput.value = calculatorScreenInput.value;
    } else {
      calculatorScreenOutput.value = setNumber.value + currentOperation.value + calculatorScreenInput.value;
    }
  }

  function addOperator(operation) {
    if (currentOperation.value === "" && setNumber.value === 0) {
      setNumber.value = parseFloat(calculatorScreenInput.value);
      calculatorScreenInput.value = "0";
    }

    currentOperation.value = operation;
    calculatorScreenOutput.value = setNumber.value + operation + calculatorScreenInput.value;
  }

  function deleteCharFromInput() {
    if (calculatorScreenInput.value.length === 1) {
      calculatorScreenInput.value = "0";
    } else {
      calculatorScreenInput.value = calculatorScreenInput.value.slice(0, -1);
    }

    if (currentOperation.value === "") {
      calculatorScreenOutput.value = calculatorScreenInput.value;
    } else {
      calculatorScreenOutput.value = setNumber.value + currentOperation.value + calculatorScreenInput.value;
    }
  }

  function calculate() {
    if (currentOperation.value === "") {
      return;
    }

    switch (currentOperation.value) {
      case "+": setNumber.value += parseFloat(calculatorScreenInput.value); break;
      case "-": setNumber.value -= parseFloat(calculatorScreenInput.value); break;
      case "*": setNumber.value *= parseFloat(calculatorScreenInput.value); break;
      case "/": setNumber.value /= parseFloat(calculatorScreenInput.value); break;
    }


    if (setNumber.value > 9999999999) {
      setNumber.value = setNumber.value.toExponential(2);
    } else if (setNumber.value.toString().length > 10) {
      setNumber.value = setNumber.value.toPrecision(10);
    }

    calculatorScreenOutput.value = setNumber.value;
    calculatorScreenInput.value = "0";
    currentOperation.value = "";
  }

  function clearAll() {
    calculatorScreenInput.value = "0";
    calculatorScreenOutput.value = "0";
    setNumber.value = 0;
  }

  function clearInput() {
    calculatorScreenInput.value = "0";
    currentOperation.value = "";
  }

  function getAnswer() {
    calculatorScreenInput.value = calculatorScreenOutput.value;
  }
</script>

<template>
  <div id="calculatorBody">
    <div id="calculatorScreen">
      <p>{{ calculatorScreenOutput }}</p>
      <p>{{ calculatorScreenInput }}</p>
    </div>

    <div id="calculatorButtons">

      <button @click="clearAll()" class="cButton">CE</button>
      <button @click="getAnswer()" class="ansButton">ANS</button>
      <button @click="deleteCharFromInput()" class="delButton">DEL</button>
      <button @click="addOperator('/')" class="divButton">/</button>

      <button @click="addCharToInput('7')" class="numButton">7</button>
      <button @click="addCharToInput('8')" class="numButton">8</button>
      <button @click="addCharToInput('9')" class="numButton">9</button>
      <button @click="addOperator('*')" class="mulButton">*</button>

      <button @click="addCharToInput('4')" class="numButton">4</button>
      <button @click="addCharToInput('5')" class="numButton">5</button>
      <button @click="addCharToInput('6')" class="numButton">6</button>
      <button @click="addOperator('-')" class="subButton">-</button>

      <button @click="addCharToInput('1')" class="numButton">1</button>
      <button @click="addCharToInput('2')" class="numButton">2</button>
      <button @click="addCharToInput('3')" class="numButton">3</button>
      <button @click="addOperator('+')" class="addButton">+</button>

      <button @click="clearInput()" class="clearbutton">C</button>
      <button @click="addCharToInput('0')" class="numButton">0</button>
      <button @click="addCharToInput('.')" class="periodButton">.</button>
      <button @click="calculate()" class="equalButton">=</button>
    </div>
  </div>
</template>

<style scoped>
#calculatorBody {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  gap: 20px;
  border-radius: 20px;

  background-color: #424242;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.19);
}

#calculatorScreen {
  height: 100px;
  width: 100%;
  border-radius: 10px;

  background-color: #262626;
  box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.21);
  color: cadetblue;
}

#calculatorScreen p:last-child {
  color: #bbbbbb;
}

#calculatorScreen p {
  margin: 0;
  font-size: 1.5em;
  text-align: right;
  padding: 10px 10px 0 0;
}

#calculatorButtons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 40px);
  gap: 10px;
  width: 100%;
}

#calculatorButtons button:active {
  margin: auto;
  transform: scale(0.98);
  width: 100%;
  height: 100%;
  box-shadow: inset -1px -3px 3px 3px rgba(0, 0, 0, 0.1);
}

#calculatorButtons .equalButton {
  background-color: #009d89;
}

#calculatorButtons .numButton {
  background-color: #937676;
}

button {
  padding: 10px;
  border-radius: 5px;
  border-style: none;

  color: black;
  background-color: #626262;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.19);

  transition: 0.2s ease-in-out;
}

button:hover {
  background-color: #8f8f8f;
}
</style>