const xhr = new XMLHttpRequest();

const url = 'https://netology-slow-rest.herokuapp.com/poll.php';

const card = document.querySelector('.card');
const poll = document.querySelector('div.poll');
const pollTitle = document.querySelector('div.poll__title');
const pollAnswers = document.querySelector('div.poll__answers');

xhr.open("GET", url);

xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        const responseId = response.id;
        pollTitle.textContent = response.data.title;
        console.log(response);
        const answers = response.data.answers;
        console.log(answers);
        for (let i = 0; i < answers.length; i++) {
            const answerBtn = document.createElement('button');
            answerBtn.classList.add("poll__answer");
            answerBtn.textContent = answers[i];
            answerBtn.addEventListener("click", function (event) {
                alert("Спасибо ваш голос учтён!");
                const postRequest = new XMLHttpRequest();
                postRequest.open("POST", url);
                postRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                postRequest.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                        const statistic = JSON.parse(postRequest.responseText);
                        const stat = statistic.stat;
                        pollAnswers.textContent = "";
                        for (let j = 0; j < stat.length; j++) {
                            const pollAnswer = document.createElement('div');
                            pollAnswer.textContent = stat[j].answer + " " + stat[j].votes;
                            console.log(pollAnswer.textContent);
                            pollAnswers.append(pollAnswer);
                        }
                    }
                }
                postRequest.send('vote=' + responseId + '&answer='+i);
                event.preventDefault();
            })
            pollAnswers.append(answerBtn);
        }
    }
}

xhr.send();