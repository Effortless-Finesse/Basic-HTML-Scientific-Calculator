const π = Math.PI;
const e = Math.exp(1);
const hover = document.querySelectorAll('.number, .operator, .TrigFunction, .function, .equal');

hover.forEach(number => {
    number.addEventListener('mouseover', () => {
    number.style.background = '#3a4452';
    });

    number.addEventListener('mouseout', () => {
        number.style.background = 'transparent';
        });
});


  function root(x , y){
    let result;
    result = Math.pow(x,1/y);
    return result;
  }

  function pwr(x , y){
    let result;
    result = Math.pow(x,y);
    return result;
  }

  function sine(x){
    if (ifdegree){
      x /= 180;
      x *= Math.PI;
    }
    let result = Math.sin(x);
    return result;
}

  function cosin(x){
    if (ifdegree){
      x /= 180;
      x *= Math.PI;
    }
    let result = Math.cos(x);
    return result;
    }

  function tang(x){
    if (ifdegree){
      x /= 180;
      x *= Math.PI;
    }
    let result = Math.tan(x);
    return result;
}

  function arcsin(x){
    let result = Math.asin(x);
    if (ifdegree){
      result *= 180;
      result /= Math.PI;
    }
    
    return result;
  }

  function arccos(x){
    let result = Math.acos(x);
    if (ifdegree){
      result *= 180;
      result /= Math.PI;
    }
    
    return result;
  }

  function arctan(x){
    let result = Math.atan(x);
    if (ifdegree){
      result *= 180;
      result /= Math.PI;
    }
    
    return result;
  }

  function lg(x){
    let result = Math.log10(x);
    return result;
  }

  function ln(x){
    let result = Math.log(x);
    return result;
  }


  const shift = document.getElementById('shift');
  const degree = document.getElementById('degree');
  const equal = document.getElementById('equal');
  const del = document.getElementById('del');
  const display = document.querySelector('[name="display"]');
  

  let inverse = false;

shift.addEventListener('click', () => {
  inverse =!inverse;
  document.querySelectorAll('.TrigFunction').forEach((element) => {
    element.style.color = inverse? 'red' : 'orange';
  });
  shift.style.background = inverse? 'red' : 'orange';

  document.getElementById('sin').value = inverse? 'arcsin' : 'sin';
  document.getElementById('cos').value = inverse? 'arccos' : 'cos';
  document.getElementById('tan').value = inverse? 'arctan' : 'tan';
});

let ifdegree = true;

degree.addEventListener('click', () => {
  ifdegree =!ifdegree;

  document.getElementById('degree').value = ifdegree? 'DEGREE' : 'RADIAN';
});

equal.addEventListener('click', () => {
  try {
        display.value = eval(display.value);
        if (isNaN(display.value) ) {
            throw error;
        }
    } catch (error) {
        display.value = 'Error';
    }
});

del.addEventListener('click', () => {
    let currentValue = display.value;
    
    currentValue = currentValue.slice(0,-1);

  while (currentValue.length > 0 && isNaN(currentValue.charAt(currentValue.length - 1))) {
    currentValue = currentValue.slice(0, -1);
  }
  display.value = currentValue;
})

/*document.querySelector('.shift').addEventListener('click', () => {
  inverse = !inverse;
  document.querySelectorAll('.TrigFunction').forEach((element) => {
    element.style.color = inverse ? 'orange' : ''; // Use an empty string to remove the inline style
  });
});*/
