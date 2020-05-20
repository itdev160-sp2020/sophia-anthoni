

//Quotes

const quotes = [
    {
        author: 'Eleanor Roosevelt', 
        quote: 'The future belongs to those who believe in the beauty of their dreams.'
    },
    {
        author: 'David Hume', 
        quote: 'Beauty in things exists in the mind which contemplates them.'
    },
    {
        author: 'Audrey Hepburn', 
        quote: 'You may be one person to the world but you may also be the world to one person.'
    },
    {
        author: 'Richard Bach', 
        quote: 'The best way to pay for a lovely moment is to enjoy it.'
    },
    {
        author: 'Alice Walker', 
        quote: 'Whenever you are creating beauty around you, you are restoring your own soul.'
    },
    {
        author: 'Tony Robbins', 
        quote: 'Setting goals is the first step in turning the invisible into the visible.'
    },
    {
        author: 'Mark Twain',
        quote: 'The secret of getting ahead is getting started.'
    }   
];

const btn = document.querySelector(".onClick");

btn.addEventListener('click', genQuote);

function genQuote(){
    const random = Number.parseInt(Math.random()*quotes.length + 1);
    document.querySelector('#quote').textContent = `\"${quotes[random].quote}\"`;
    document.querySelector('#author').textContent = `-${quotes[random].author}`;
    
}

//right side

function get(element) {
    return document.getElementById(element);
}

function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');


    title.value = '';
    text.value = '';

    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

    function saveContent() {
        var title = get('edit-title-text');
        var text = get('edit-content-text');
        var content = get('display-content');

        var newContent = document.createElement('p');
        var newContentText = document.createTextNode(`\"${text.value}\"`);
        var newTitle = document.createElement('p');
        var newTitleText = document.createTextNode(`-${title.value}`);
        
        newContent.appendChild(newContentText);
        newTitle.appendChild(newTitleText);
        content.appendChild(newContent);
        content.appendChild(newTitle);
        
        closeModal();
    }

    window.addEventListener('load', function() {
        var newButton = get('new-button');
        var cancelButton = get('cancel-button');
        var saveButton = get('save-button');

        newButton.addEventListener('click', openModal);
        cancelButton.addEventListener('click', closeModal);
        saveButton.addEventListener('click', saveContent);
    }); 

//Grocery list

var tasks = [];

var taskStatus = {
    active: 'active',
    completed: 'completed'
};

function Task(id, name, status) {
    this.id = id;
    this.name = name;
    this.status = status; 
}

function addTaskElement(task){

    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    taskEl.setAttribute('id', task.id);

    taskEl.appendChild(textEl);

    listEl.appendChild(taskEl);
}

function addTask (event) {
    var inputEl = document.getElementById('input-task');
    if (inputEl.value != '') {
        var id = 'item-' + tasks.length;

        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        addTaskElement(task);

        inputEl.value = '';
    }
}

function completeTask (event) {
    var taskEl = event.target;
    var id = taskEl.id; 

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].status = taskStatus.completed;
            break;
        }
    }
    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

function clickButton (event) {
    if (event.keyCode === 13) {
        document.getElementById('add-task').click();
    }
}

function init () {

    document.getElementById('add-task').onclick = addTask;

    document.getElementById('active-list').onclick = completeTask;

    document.getElementById('input-task').onkeypress = clickButton;
}

init();

