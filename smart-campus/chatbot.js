const chatbotBtn = document.getElementById("chatbot-btn");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("close-chat");

chatbotBtn.addEventListener("click", () => {
    chatbot.style.display = "block";
});

closeChat.addEventListener("click", () => {
    chatbot.style.display = "none";
});

const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const messages = document.getElementById("chat-messages");

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

async function sendMessage() {
    const message = userInput.value.trim();

    if (message === "") {
        return;
    }

    addMessage(message, "user-message");
    userInput.value = "";

    const thinking = addMessage("Thinking... 🤖", "bot-message");

    try {
        const response = await fetch(
            "http://127.0.0.1:5001/smart-campus-demo1/us-central1/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: message
                })
            }
        );

        const data = await response.json();

        thinking.remove();

        if (!response.ok) {
            throw new Error(data.error || "AI request failed");
        }

        addMessage(data.reply, "bot-message");

    } catch (error) {
        thinking.remove();

        console.error(error);

        addMessage(
            "Sorry, I couldn't connect to the AI assistant. 🤖",
            "bot-message"
        );
    }
}

function addMessage(text, className) {
    const messageDiv = document.createElement("div");

    messageDiv.className = className;
    messageDiv.textContent = text;

    messages.appendChild(messageDiv);
    messages.scrollTop = messages.scrollHeight;

    return messageDiv;
}