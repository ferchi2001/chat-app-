const socket = io('http://localhost:5001');

socket.on('message', (data) => {
    const messages = document.getElementById('messages');
    const li = document.createElement('li');
    li.textContent = `${data.user}: ${data.text}`;
    messages.appendChild(li);
});

function sendMessage() {
    const input = document.getElementById('messageInput');
    socket.emit('message', { user: 'Anonymous', text: input.value });
    input.value = '';
}
