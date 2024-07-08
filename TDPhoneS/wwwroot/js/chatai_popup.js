let geminiToken = "AIzaSyDF_-1oVWZuU1OMY5vNtsDowPBmSR0mT04";

async function sendQuestion() {
    const question = document.getElementById('question').value;
    if (!question) return;

    const chatBox = document.getElementById('chat-box');
    const userQuestionDiv = document.createElement('div');
    userQuestionDiv.className = 'question';
    userQuestionDiv.textContent = 'You: ' + question;
    chatBox.appendChild(userQuestionDiv);

    const payload = {
        contents: [{ parts: [{ text: question }] }],
        generationConfig: { maxOutputTokens: 10000 }
    };

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiToken}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });

    if (response.ok) {
        const result = await response.json();
        const answer = result.candidates[0].content.parts[0].text;

        const botAnswerDiv = document.createElement('div');
        botAnswerDiv.className = 'answer';
        botAnswerDiv.textContent = 'Bot: ' + answer;
        chatBox.appendChild(botAnswerDiv);

        chatBox.scrollTop = chatBox.scrollHeight;  // Scroll to the bottom
        document.getElementById('question').value = '';  // Clear the input field
    } else {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'answer text-danger';
        errorDiv.textContent = 'Error: Unable to get a response from the API';
        chatBox.appendChild(errorDiv);
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendQuestion();
    }
}

function clearChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '';
}

function downloadChat() {
    const chatBox = document.getElementById('chat-box');
    const chatText = chatBox.innerText;
    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'chat.txt';
    a.click();
    URL.revokeObjectURL(url);
}

function showAllChat() {
    const chatBox = document.getElementById('chat-box').innerHTML;
    const popupWindow = window.open('', '_blank', 'width=600,height=400');
    popupWindow.document.open();
    popupWindow.document.write('<html><head><title>Chat Transcript</title></head><body><pre>' + chatBox + '</pre></body></html>');
    popupWindow.document.close();
}