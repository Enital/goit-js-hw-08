import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const inputEmailEl = document.querySelector('.feedback-form input');
const inputMessageEl = document.querySelector('.feedback-form textarea');
let formData = {};
const STORAGE_KEY = 'feedback-form-state';

addDataIfResetPage()

function addDataIfResetPage() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    const savedMessageFromJSON = JSON.parse(savedMessage);
    if (savedMessage) { 
        const { email = "", message = "" } = savedMessageFromJSON;
        inputEmailEl.value = email;
        inputMessageEl.value = message;
    }     
}

formEl.addEventListener("input", throttle(inputData, 500));

function inputData() {
    formData.email = inputEmailEl.value;
    formData.message = inputMessageEl.value;
    const formDataJson=JSON.stringify(formData)
    try {
        localStorage.setItem(STORAGE_KEY, formDataJson)
    } catch(error) {
        console.log("Error", error)
    }
}

formEl.addEventListener("submit", submitFormBtn)

function submitFormBtn(event) {
    event.preventDefault();
    if (!formData.hasOwnProperty("email") && !formData.hasOwnProperty("message")) {
        return
    }
    console.log(formData);
    formData = {};
    localStorage.removeItem(STORAGE_KEY)
    event.currentTarget.reset()
}