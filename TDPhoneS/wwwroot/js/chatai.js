if (HTMLScriptElement.supports('importmap.json')) {
    // The importmap feature is supported.

}

// Access your API key (see "Set up your API key" above)
const output = document.getElementById("output");
const buttonClick = document.getElementById("clickable");

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.querySelector('.input-field');
    const sendButton = document.querySelector('.send-button');
    const chatWindow = document.querySelector('.chat-window');

    const appendMessage = (message, className) => {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.className = className;
        chatWindow.appendChild(messageDiv);
        chatWindow.scrollTop = chatWindow.scrollHeight;

    };

    const sendMessage = () => {
        const message = inputField.value.trim();
        if (message) {
            appendMessage(message, 'user-message');
            //inputField.value = '';

            // Here you could add your code to send the message to the server
            // and then wait for a response to call appendMessage with the 'response-message' class
            run();
        }
    };




    /**
    sendButton.addEventListener('click', sendMessage);

    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
     */

});






//buttonClick.onclick = async()=> await run();
