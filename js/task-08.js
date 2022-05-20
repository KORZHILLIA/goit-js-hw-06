const form = document.querySelector('.login-form');

form.addEventListener("submit", formSubmitHandler);

const Form = function (name, password) {
  this.name = name;
  this.password = password;
};

function formSubmitHandler(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  const { value: emailValue } = email;
  const { value: passwordValue } = password;
  if (emailValue === "" || passwordValue === "") {
    alert("All the fields should be completed");
    return;
  }
  const formObj = new Form(emailValue, passwordValue);
  console.log(formObj);
  form.reset();
}