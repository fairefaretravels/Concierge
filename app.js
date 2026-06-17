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
function generateXOCOResponse(input) {
  const text = input.toLowerCase();

  let style = "modern minimal";
  let space = "living space";
  let vibe = "balanced";

  // ---- SPACE DETECTION ----
  if (text.includes("studio")) space = "studio apartment";
  if (text.includes("bedroom")) space = "bedroom";
  if (text.includes("office")) space = "home office";
  if (text.includes("living")) space = "living room";

  // ---- STYLE DETECTION ----
  if (text.includes("luxury")) style = "luxury editorial";
  if (text.includes("cozy")) style = "warm cozy modern";
  if (text.includes("minimal")) style = "minimal clean";
  if (text.includes("boho")) style = "soft bohemian";
  if (text.includes("black")) style = "monochrome modern";

  // ---- VIBE DETECTION ----
  if (text.includes("calm")) vibe = "calm + soft lighting";
  if (text.includes("bold")) vibe = "high contrast + statement pieces";
  if (text.includes("bright")) vibe = "airy + natural light";

  return `
XOCO Direction Engine

Space: ${space}
Style Match: ${style}
Mood Direction: ${vibe}

Layout Suggestion:
- Anchor focal point (sofa, bed, or desk)
- Clear negative space for flow
- Layer textures instead of adding objects

Materials Palette:
- Natural wood
- Linen / cotton textures
- Matte black or brass accents

Next Step:
Do you want this space optimized for:
1. Real estate listing
2. Content creation / photography
3. Personal comfort
`;
}
