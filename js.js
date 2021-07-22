var inputData = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById("list");
var spans = document.getElementsByTagName('span');
var lis = document.getElementsByTagName('li');
var saveBtn = document.getElementById('save');
var ClearBtn = document.getElementById('clear');
var infoBtn = document.getElementById('info');
var now = new Date();

function deleteTodo(){
    for(let span of spans)
    {
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.preventDefault();
        })
    }

    for(let li of lis){
        li.addEventListener('click', function(){
            li.style.textDecoration="line-through";
        })
    }
}

function loadTodo(){
    if(localStorage.getItem('todoAplication')){
        ulSpisok.innerHTML = localStorage.getItem('todoAplication');
        deleteTodo();
    }
}

inputData.addEventListener("keypress", function(KeyPressed){
        if (KeyPressed.which === 13)
    {
        if(this.value == null || this.value == "" || !inputData.value.trim() )
        {
            alert('Введите задачу! Поле не может быть пустым :)')
        }
        else{
    var newLi = document.createElement("li");
    var newSpan = document.createElement("span");
    newSpan.innerHTML = "Удалить: ";

    var newTodo = this.value;
    this.value = "";
    ulSpisok.appendChild(newLi).append(newSpan, 'Задача: ' + newTodo + '. ' + ' дата добовления задачи: ' + now.getFullYear() + ' ' + now.getMonth() + ' ' + now.getDate() + ' г');
      }
    }
deleteTodo();
    
    
    });



saveBtn.addEventListener('click', function(){
    localStorage.setItem('todoAplication', ulSpisok.innerHTML);
})

ClearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = '';
    localStorage.clear();
})

infoBtn.addEventListener('click', function(){

    alert('Разработчик: Полозков Илья Васильевич')

})

deleteTodo();

loadTodo();

