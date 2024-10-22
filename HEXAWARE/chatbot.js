const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");
const questionList = document.getElementById("question-list");

// Simulated bot responses (Data Science Questions and Answers)
const botReplies = {
    "hello": "Hi! How can I assist you?",
    "hi": "Hello! What can I do for you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "bye": "Goodbye! Have a nice day!",
    "help": "I'm here to assist. What do you need help with?",
    "thatha": "thatha thatha podi kodu illa payra payra thadi yadu.",
    
    // Data Science Questions and Answers
    "data science": "Data science is the field that uses statistical and computational techniques to extract insights from data.",
    "data science project": "The steps are: data collection, data cleaning, data exploration, modeling, and evaluation.",
    "supervised learning": "Supervised learning is when the model learns from labeled data to make predictions.",
    "overfitting": "Overfitting happens when a model learns noise; avoid it with techniques like cross-validation or regularization.",
};

// Function to display messages
function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to bottom
}

// Function to handle user input and bot response
function handleInput() {
    const userMessage = userInput.value.trim().toLowerCase();
    if (userMessage) {
        displayMessage(userMessage, "user");

        // Find bot's reply
        let botMessage = botReplies[userMessage] || "Sorry, I don't understand that.";
        setTimeout(() => {
            displayMessage(botMessage, "bot");
        }, 500); // Simulate a delay in bot response

        userInput.value = ""; // Clear input
    }
}

// Send message on button click
sendBtn.addEventListener("click", handleInput);

// Send message when Enter key is pressed
userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(); // Prevent new line
        handleInput();
    }
});

// Handle recommended question click
questionList.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName === "LI") {
        const question = e.target.textContent.trim().toLowerCase(); // Ensure matching format
        userInput.value = question;  // Set the clicked question in the input box
        handleInput();  // Trigger the message to be sent
    }
});
