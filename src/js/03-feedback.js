'use strict';
import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');


let formData = {};


const handleInputForm = event => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const handleSubmitForm = event => {
    event.preventDefault();
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    feedbackFormEl.reset();
    formData = {};
};

const load = key => {
    try {
        const serializedState = localStorage.getItem(key);
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('Get state error: ', error.message);
    }
};
const storageData = load('feedback-form-state');

if (storageData) {
    email.value = storageData.email;
    message.value = storageData.message;

    if (!storageData.email) {
        email.value = '';
    } else if (!storageData.message) {
        message.value = '';
    }
}
feedbackFormEl.addEventListener('input', throttle(handleInputForm, 500))
feedbackFormEl.addEventListener('submit', handleSubmitForm);


