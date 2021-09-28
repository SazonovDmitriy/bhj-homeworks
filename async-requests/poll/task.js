const xhr = new XMLHttpRequest;

const url = 'https://netology-slow-rest.herokuapp.com/poll.php';

const card = document.querySelector('.card');
const poll = document.querySelector('div.poll');
const pollTitle = document.querySelector('div.poll__title');
const pollAnswer = document.querySelector('div.poll__answers');

xhr.open("GET", url);

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        const responseId = response.id;
        pollTitle.textContent = response.data.title;
        console.log(response);
        const answers = response.data.answers;
        for (let i = 0; i < answers.length; i++) {
            
        }
    }
}

xhr.send();