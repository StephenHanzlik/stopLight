"use strict";

  var redButton = document.getElementById('stopButton');
  var redLight = document.getElementById('stopLight');

  var orangeButton = document.getElementById('slowButton');
  var orangeLight = document.getElementById('slowLight');

  var greenButton = document.getElementById('goButton');
  var greenLight = document.getElementById('goLight');

  function clickSwitch (event){
    switch (event.target.id) {
      case 'stopButton':
        redLight.style.background = 'red';
        orangeLight.style.background = 'black';
        greenLight.style.background = 'black';
        break;
      case 'slowButton':
        orangeLight.style.background = 'orange';
        redLight.style.background = 'black';
        greenLight.style.background = 'black';
        break;
      case 'goButton':
        greenLight.style.background = 'green';
        orangeLight.style.background = 'black';
        redLight.style.background = 'black';
        break;
      default:

    }
  }

  document.querySelector('#controls').addEventListener('click', clickSwitch);
