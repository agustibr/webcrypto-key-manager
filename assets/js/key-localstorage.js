// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// localStorage.setItem('myCat', 'Tom');
// const cat = localStorage.getItem('myCat');
// localStorage.removeItem('myCat');
// localStorage.clear();

function saveInLocalStorage(name, key_string){
  console.log("saved it!");
  localStorage.setItem("my_" + name + "_key" , key_string);
}

function getFromLocalStorage(name){
  console.log("got it!");
  return localStorage.getItem("my_" + name + "_key");
};
