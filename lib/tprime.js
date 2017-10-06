function off(){
  document.getElementById('initialize').style.display = "none";
}

let age;
function setAge(){
  age = document.getElementById('age-input').value;
  off();
}
