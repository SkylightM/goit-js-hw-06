const loginForm = document.querySelector(".login-form");
const formMail = document.querySelector('[name="email"]');
const formPassword = document.querySelector('[name="password"]');
const formBtn = document.querySelector('button');

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const form = event.target;
    const formMail = form.elements.email;
    const formPassword = form.elements.password;

    const formDataSaved = {
        [formMail.name]: formMail.value,
        [formPassword.name]: formPassword.value,
    };

    if (formMail.value === '' || formPassword.value === '') {
        alert("Wszystkie pola powinny być wypełnione!")
    } else {
        console.log(formDataSaved);
    };

    form.reset();
});