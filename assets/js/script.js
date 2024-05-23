document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    if (questions.length > 0) {
        const firstAnswer = questions[0].nextElementSibling;
        const firstIcon = questions[0].querySelector('img');

        firstAnswer.style.display = 'block';
        firstIcon.src = './assets/images/icon-minus.svg';
    }

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('img');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.src = './assets/images/icon-plus.svg';
            } else {
                answer.style.display = 'block';
                icon.src = './assets/images/icon-minus.svg';
            }
        });
    });
})