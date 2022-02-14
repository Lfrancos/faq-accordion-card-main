// select all the things that you need.

const questions = Array.from(document.querySelectorAll('.flex'));
const container = document.querySelectorAll('.question');
const paragraph = document.querySelectorAll('.paragraph');

// BONUS:: make sure that once you select one all the other questions get closed.

//add a click event listener to questions

questions.forEach(question => {
    console.log(question);
    question.addEventListener('click', e => {

        // close all the questions that are open.

        container.forEach(q => {
            if (q.classList.contains('open')) {
                q.classList.remove('open');
                q.classList.add('closed');
            }
        })
        // select the container that has the question that you just clicked.
        const hide = question.closest('.question');

        // remove class hide and add class open to the paragraph that you selected if they have the class closed.
        // but remove class open and add class closed to the paragraph that you selected that has a class open.

        if (hide.classList.contains('closed')) {
            hide.classList.remove('closed');
            hide.classList.add('open');
        }else if (hide.classList.contains('open')) {
            hide.classList.remove('open');
            hide.classList.add('closed');
        }
    })
})


