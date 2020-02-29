const name = 'Tio';
const age = 18;
const job = 'Web Developer';
const city = 'Palembang';

let html;

// Without Template String (es5)

html = '<ul>' +
    '<li>Name: ' + name + '</li>' +
    '<li>Age: ' + age + '</li>' +
    '<li>Job: ' + job + '</li>' +
    '<li>City: ' + city + '</li>' +
    '</ul>'

function heelo() {
    return "heelo"
}

// JS With Template String (ES6)
html = `
        <li>Name : ${name}</li>
        <li>age : ${age}</li>
        <li>Job : ${job}</li>
        <li>City : ${city}</li>
        <li>${5+7}</li>
        <li>${heelo()}</li>
        <li>${age > 20 ? 'Over 20' : 'Under 20'}<li>
`;

document.body.innerHTML = html;