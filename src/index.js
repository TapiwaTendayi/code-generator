function generateCode(event) {
  event.preventDefault();
  new Typewriter("#code", {
    strings: "x+y",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}
let codeForm = document.querySelector("#code-generator-form");
codeForm.addEventListener("submit", generateCode);
