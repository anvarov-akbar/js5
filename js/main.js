var elForm = document.querySelector(".form")
var elInput = document.querySelector(".form__input")
var elList = document.querySelector(".list")

var plans = ["Uyqudan turiw","Tish yuvish","Ertalabki nonushta"];

function renderTodo(todoArray, element) {
    for (var i = 0; i < todoArray.length; i++){
      var newLi = document.createElement('li');
      var newSpan = document.createElement('span');
      var newInput = document.createElement('input');
      var newButton = document.createElement('button');
      newLi.setAttribute('class', 'list__item');
  newInput.setAttribute('type', 'checKbox');
  newButton.setAttribute('type', 'submit');
  newButton.setAttribute('class', 'new__button');
  newButton.textContent = 'del'

  
  newSpan.textContent = plans[i];
  newLi.appendChild(newInput);
newLi.appendChild(newSpan);
newLi.appendChild(newButton);
  element.appendChild(newLi);
 
 

 

}  

}   

renderTodo(plans, elList)


function handleFormSubmit(evt) {
  evt.preventDefault();
elList.innerHTML = null;
  var inputValue = elInput.value.trim();

  plans.push(inputValue);
  renderTodo(plans, elList)

  elInput.value = null;
  
}


elForm.addEventListener('submit', handleFormSubmit);