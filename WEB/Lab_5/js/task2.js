function sendMessage(user) {
    let messageInput = document.getElementById(user + '-message-input');
    let chatBox = document.getElementById('chat-box');

    let messageText = messageInput.value.trim();

    if (messageText === '') {
        return;
    }

    let newMessage = document.createElement('div');
    newMessage.textContent = 'User ' + (user === 'user1' ? '1' : '2') + ': ' + messageText;

    if (user === 'user1') {
        newMessage.className = 'user1-message';
    } else if (user === 'user2') {
        newMessage.className = 'user2-message';
    }

    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;

    messageInput.value = '';
}
