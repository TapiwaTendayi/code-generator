function displayCode(response) {
  new Typewriter("#code", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
function generateCode(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "60bfefo647de9cd06a8b9634a3cft9b4";
  let context =
    "You are an intelligent programmer who is an expert at writing short code.Your mission is to generate a short code  and separate each line with a </br>.Do not include a title.If the user does not specify the language use python as the default langauge. Sign the code with 'SheCodes AI' inside a <strong> element at the end of the code .Make sure to follow the user instructons below";
  let prompt = `User instructions are:Generate a code about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let codeElement = document.querySelector("#code");
  codeElement.classList.remove("hidden");
  codeElement.innerHTML = `<div class="generating"> 🧑‍💻Generating  ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayCode);
}
let codeForm = document.querySelector("#code-generator-form");
codeForm.addEventListener("submit", generateCode);
