function addToDisplay(value) {
     if (value === 'C') { 
       clearDisplay();
     } else if (value === '←') { 
       removeLastCharacter();
     } else if (value === '=') { 
       calculate();
     } else {
       if (displayValue === 'Error!') { 
         clearDisplay();
       }
       displayValue += value;
       document.getElementById('display').value = displayValue;
     }
   }
   
   function clearDisplay() {
     displayValue = '';
     document.getElementById('display').value = displayValue;
   }
   
   function removeLastCharacter() {
     displayValue = displayValue.slice(0, -1);
     document.getElementById('display').value = displayValue;
   }
   
   function calculate() {
     try {
       displayValue = eval(displayValue);
       document.getElementById('display').value = displayValue;
     } catch (error) {
       document.getElementById('display').value = 'Error!';
     }
   }
   

   
   
   
   