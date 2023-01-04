import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';
let formData = {};


const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormDataInput, 500));

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function onFormDataInput(evt) {
    formData[evt.target.name] = evt.target.value;
    console.log(evt.target.name, evt.target.value);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function getFormData() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    formData = savedMessage;
 

    refs.input.value = savedMessage.email || '';
    refs.textarea.value = savedMessage.message || '';
}
getFormData();
















