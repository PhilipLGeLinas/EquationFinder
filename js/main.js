const equations = document.getElementsByTagName('eq');
let variables = [];

$('input[type=checkbox]').change(function(){
  if($(this).is(':checked')) {
    variables.push($(this).val());
  } else {
    let index = variables.indexOf($(this).val());
    if (index >= 0) {
      variables.splice(index, 1);
    }
  }
  if (variables.length == 0) {
    for (let i = 0; i < equations.length; i++) {
      equations[i].style.display = 'none';
    }
  } else {
    for (let i = 0; i < equations.length; i++) {
      let containsAll = true;
      for (let j = 0; j < variables.length; j++) {
        if (!equations[i].className.includes(variables[j])) {
          containsAll = false;
          break;
        }
      }
      if (containsAll) {
        equations[i].style.display = 'inline';
      } else {
        equations[i].style.display = 'none';
      }
    }
  }
});