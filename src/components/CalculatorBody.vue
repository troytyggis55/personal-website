<script setup>
  import {ref} from "vue";

  const calculatorScreenInput = ref("0");
  const calculatorScreenOutput = ref("0");

  function addCharToInput(number) {
    if (calculatorScreenInput.value.length > 10) {
      return;
    }
    if (calculatorScreenInput.value === "0") {
      calculatorScreenInput.value = number;
    } else {
      calculatorScreenInput.value += number;
    }
  }

  function deleteCharFromInput() {
    if (typeof calculatorScreenInput.value === 'string') {
      if (calculatorScreenInput.value.length === 1) {
        calculatorScreenInput.value = "0";
      } else {
        calculatorScreenInput.value = calculatorScreenInput.value.slice(0, -1);
      }
    } else {
      console.error('calculatorScreenInput.value is not a string:', calculatorScreenInput.value);
    }
  }

  function calculate() {
    calculatorScreenOutput.value = calculatorScreenInput.value;
    calculatorScreenInput.value = "0";
  }

  function clearAll() {
    calculatorScreenInput.value = "0";
    calculatorScreenOutput.value = "0";
  }

  function clearInput() {
    calculatorScreenInput.value = "0";
  }
</script>

<template>
  <div class="calculatorBody">
    <div class="calculatorScreen">
      <p>{{ calculatorScreenOutput }}</p>
      <p>{{ calculatorScreenInput }}</p>
    </div>

    <div class="calculatorButtons">

      <button @click="clearAll()" class="cButton">C</button>
      <button class="ansButton">ANS</button>
      <button @click="deleteCharFromInput()" class="delButton">DEL</button>
      <button @click="addCharToInput('/')" class="divButton">/</button>

      <button @click="addCharToInput('7')" class="numButton">7</button>
      <button @click="addCharToInput('8')" class="numButton">8</button>
      <button @click="addCharToInput('9')" class="numButton">9</button>
      <button @click="addCharToInput('*')" class="mulButton">*</button>

      <button @click="addCharToInput('4')" class="numButton">4</button>
      <button @click="addCharToInput('5')" class="numButton">5</button>
      <button @click="addCharToInput('6')" class="numButton">6</button>
      <button @click="addCharToInput('-')" class="subButton">-</button>

      <button @click="addCharToInput('1')" class="numButton">1</button>
      <button @click="addCharToInput('2')" class="numButton">2</button>
      <button @click="addCharToInput('3')" class="numButton">3</button>
      <button @click="addCharToInput('+')" class="addButton">+</button>

      <button @click="clearInput" class="clearbutton">CE</button>
      <button @click="addCharToInput('0')" class="numButton">0</button>
      <button @click="addCharToInput('.')" class="periodButton">.</button>
      <button @click="calculate()" class="equalButton">=</button>
    </div>
  </div>
</template>

<style scoped>
  .calculatorBody {
    max-width: 220px;
    max-height: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    background-color: #424242;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.19);

    border-radius: 20px;
  }

  .calculatorScreen {
    background-color: #262626;
    color: cadetblue;
    height: 85px;
    width: 100%;
    border-radius: 10px;
    box-shadow: inset 0 0 10px 5px rgba(0, 0, 0, 0.21);

    p {
      margin: 0;
      padding: 0;
      font-size: 1.5em;
      text-align: right;
      padding-right: 10px;
      padding-top: 10px;
    }
  }

  .calculatorButtons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 40px);
    gap: 10px;
    overflow: visible;

    button {
      border-radius: 5px;
      border-style: none;
      background-color: #626262;
      box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.19);
      transition: 0.2s ease-in-out;
    }

    button:active {
      margin: auto;
      transform: scale(0.98);
      width: 100%;
      height: 100%;
      box-shadow: inset -1px -3px 3px 3px rgba(0, 0, 0, 0.1);
    }

    .equalButton {
      background-color: #009d89;
    }

    .numButton {
      background-color: #937676;
    }
  }


</style>