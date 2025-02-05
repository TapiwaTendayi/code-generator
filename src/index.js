function displayCode(response) {
  console.log("poem generated");
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
    "You are an intelligent programmer who is an expert at writing short code.Your mission is to generate a four line code in basic HTML,but do not include the basic HTML on the response and separate each line with a </br>.Do not include a title. Sign the code with 'SheCodes AI' inside a <strong> element at the end of the code .Make sure to follow the user instructons below";
  let prompt = `User instructions are:Generate a code about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("generating code");
  console.log(`Promp:${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiUrl).then(displayCode);
}
let codeForm = document.querySelector("#code-generator-form");
codeForm.addEventListener("submit", generateCode);

