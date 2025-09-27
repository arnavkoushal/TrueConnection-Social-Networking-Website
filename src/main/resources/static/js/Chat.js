'use strict';

var usernamePage = document.querySelector('#username-page');
var chatPage = document.querySelector('#chat-page');

var usernameForm = document.querySelector('#usernameForm');
var messageForm = document.querySelector('#messageForm');

var messageInput = document.querySelector('#message');
var messageArea = document.querySelector('#messageArea');

var connectingElement = document.querySelector('.connecting');

var stompClient = null;
var username = null;

var colors = [
    '#2196F3', '#32c787', '#00BCD4', '#ff5652',
    '#ffc107', '#ff85af', '#FF9800', '#39bbb0'
];

function connect(event) {
    username = document.querySelector('#name').value.trim();

    if(username) {
        usernamePage.classList.add('hidden');
        chatPage.classList.remove('hidden');

        var socket = new SockJS('/ws');
        stompClient = Stomp.over(socket);

        stompClient.connect({}, onConnected, onError);
    }
    event.preventDefault();
}

function onConnected() {
    // subscribe to the public Topic
    stompClient.subscribe('/topic/public', onMessageReceived);

    // tell username to the server
    stompClient.send("/app/chat.addUser",
        {},
        JSON.stringify({ sender: username, type: 'JOIN' })
    );
    connectingElement.classList.add('hidden');
}

function onError() {
    connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    connectingElement.style.color = 'red';
}
function sendMessage(event) {
    var messageContent = messageInput.value.trim();

    if (messageContent && stompClient) {
        var chatMessage = {
            sender: username,
            content: messageContent,
            type: "CHAT"
        };
        console.log("Sending message: ", chatMessage);   // Log message before sending
        stompClient.send("/app/chat.sendMessage", {}, JSON.stringify(chatMessage));
        messageInput.value = "";
    }
    event.preventDefault();
}

function getAvatarColor(username) {
    // Example logic to pick a color from predefined palette based on username hash
    const colors = ['#2196F3', '#32c787', '#00BCD4', '#ff5652', '#ffc107', '#ff85af', '#FF9800', '#39bbb0'];
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
        hash = 31 * hash + username.charCodeAt(i);
    }
    const index = Math.abs(hash % colors.length);
    return colors[index];
}



function onMessageReceived(payload) {
    var message = JSON.parse(payload.body);
    console.log("Received message: ", message);
    var messageElement = document.createElement('li');

    if (message.type === 'JOIN') {
        messageElement.classList.add('event-message');
        message.content = message.sender + ' joined!';
    } else if (message.type === 'LEAVE') {
        messageElement.classList.add('event-message');
        message.content = message.sender + ' left!';
    } else if (message.type ==='CHAT') {
        messageElement.classList.add('chat-message');

        var avatarElement = document.createElement('i');
        var avatarText = document.createTextNode(message.sender[0]);
        avatarElement.appendChild(avatarText);
        avatarElement.style['background-color'] = getAvatarColor(message.sender);

        messageElement.appendChild(avatarElement);



        var usernameElement = document.createElement('span');
        var usernameText = document.createTextNode(message.sender);
        usernameElement.appendChild(usernameText);
        messageElement.appendChild(usernameElement);
    }

    var textElement = document.createElement('p');
    var messageText = document.createTextNode(message.content);
    textElement.appendChild(messageText);

    messageElement.appendChild(textElement);

    messageArea.appendChild(messageElement);
    messageArea.scrollTop = messageArea.scrollHeight;
}

usernameForm.addEventListener('submit', connect, true);
messageForm.addEventListener('submit', sendMessage, true);


function navigateTo(page) {
    window.location.href = page;
}
document.getElementById('Home-link').onclick = function() { navigateTo('home.html'); };
document.getElementById('MyProfile-link').onclick = function() { navigateTo('/Pages/Myprofile.html'); };
document.getElementById('Chat-link').onclick = function() { navigateTo('/Pages/Chat.html'); };
document.getElementById('Logout-link').onclick = function() { navigateTo('/Pages/login.html'); };

// Theme toggle logic for chat page
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.getElementById('theme-icon');

themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeIcon.classList.remove('fas', 'fa-sun');
        themeIcon.classList.add('fas', 'fa-moon');
        // You can store preference in localStorage if desired
        localStorage.setItem('theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fas', 'fa-moon');
        themeIcon.classList.add('fas', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    }
});

// On page load, apply saved theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeIcon.classList.remove('fas', 'fa-moon');
        themeIcon.classList.add('fas', 'fa-sun');
    }
});
