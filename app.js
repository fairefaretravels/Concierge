const chat = document.getElementById("chat");

function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  const response = generateXOCOResponse(text);
  setTimeout(() => addMessage(response, "bot"), 500);
}

function addMessage(text, type) {
  const div = document.createElement("div");
  div.className = "message " + type;
  div.innerText = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}
