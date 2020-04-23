
var messages = [];

var messageType = {
    send: 'send-message',
    reply: 'reply-message',
    empty: 'Enter-a-message'
};

var data = [
    {
        type: messageType.send,
        user: 'Sophia',
        message: 'Hey Ethan, Whats going on??'
    },
    {
        type: messageType.reply,
        user: 'Ethan',
        message: 'Just staying home'
    },
    {
        type: messageType.send,
        user: 'Sophia',
        message: 'Me too, have been catching up on tv series on Netflix'
    }
];

function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message) {
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');     
    var messagesContainerEl= document.getElementById('message-container');

switch(event.target.id) {
    case 'send-button':
        user = 'Sophia';
        type = messageType.send;
        break;
    case 'reply-button':
        user = 'Ethan';
        type = messageType.reply;
        break;
    default:
        user = 'empty';
        type = messageType.empty;
}

if(messageInput.value != '') 
    {
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    var el = createMessageElement(message);

    messagesContainerEl.appendChild(el);

    messageInput.value = '';
    }
}

function loadSeedData() {
    for (var i=0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }
var messagesContainerEl = document.getElementById('message-container');

for (var i = 0; i < messages.length; i++) {
    var message = messages[i];
    var el = createMessageElement(message)

    messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();

};

init();
