let array = []

function calculate() {
    let nameInput = document.getElementById("userName").value;
    let heightInput = (document.getElementById("userHeight").value)/100;
    let weightInput = document.getElementById("userWeight").value;

    count = weightInput / (heightInput * heightInput);
    console.log('Your result is' + count);

    const element = document.querySelector("h2");
    element.textContent = nameInput + " your BMI result is " + count.toFixed(1);

    let person = {
        name: nameInput,
        height: heightInput,
        weight: weightInput,
        BMI: count,
      }

      console.log(person)
      
      array.push(person);
      console.log(array);
    
    document.getElementById("userName").value = '';
    document.getElementById("userHeight").value = '';
    document.getElementById("userWeight").value = '';
  }


