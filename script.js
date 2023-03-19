// Get references to HTML elements
const chatWindow = document.querySelector('.chat-window');
const messageForm = document.querySelector('form');
const messageInput = document.querySelector('input[type="text"]');

// Listen for form submit events
messageForm.addEventListener('submit', (event) => {
	event.preventDefault();

	// Get the message text from the input field
	const message = messageInput.value;

	// Create a new message element
	const messageElement = document.createElement('div');
	messageElement.classList.add('message');

	// Add the user name and timestamp to the message element
	const userElement = document.createElement('span');
	userElement.classList.add('user');
	userElement.textContent = 'Me';
	messageElement.appendChild(userElement);

	const timestampElement = document.createElement('span');
	timestampElement.classList.add('timestamp');
	timestampElement.textContent = new Date().toLocaleString();
	messageElement.appendChild(timestampElement);

	// Add the message text to the message element
	const messageTextElement = document.createElement('span');
	messageTextElement.textContent = message;
	messageElement.appendChild(messageTextElement);

	// Add the message element to the chat window
	chatWindow.appendChild(messageElement);

	// Scroll to the bottom of the chat window
	chatWindow.scrollTop = chatWindow.scrollHeight;

	// Clear the message input field
	messageInput.value = '';
});
