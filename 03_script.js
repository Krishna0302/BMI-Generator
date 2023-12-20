const form = document.querySelector('form')
// this usecase will give empty value
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', function (e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if(height==='' || height < 0 || isNaN(height)){
      result.innerHTML = "Please give a valid height";
    } else if(weight==='' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Please give a valid weight";
      } else {
        const bmi = (weight/((height*height)/1000)).toFixed(2)
        // show the result
        result.innerHTML = "Your BMI is: " + bmi;
      }
});