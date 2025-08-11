'use strict';

function initializeQuestion(questionContainer) {
    const options = questionContainer.querySelectorAll('li[data-option]');
    const checkButton = questionContainer.querySelector('.check-answer-btn');
    const explanation = questionContainer.querySelector('.explanation');

    let selectedOption = null;

    options.forEach(option => {
        option.addEventListener('click', () => {
            if (checkButton.disabled) return;

            // Desmarcar opção anterior e marcar a nova
            options.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            selectedOption = option;
        });
    });

    checkButton.addEventListener('click', () => {
        if (!selectedOption) {
            alert('Por favor, selecione uma alternativa.');
            return;
        }

        const isCorrect = selectedOption.dataset.correct === 'true';

        // Desabilitar o botão e as opções
        checkButton.disabled = true;
        options.forEach(opt => opt.style.cursor = 'default');

        // Aplicar estilos
        if (isCorrect) {
            selectedOption.classList.add('correct');
        } else {
            selectedOption.classList.add('incorrect');
            const correctOption = questionContainer.querySelector('li[data-correct="true"]');
            if (correctOption) {
                correctOption.classList.add('correct');
            }
        }

        // Mostrar explicação
        explanation.style.display = 'block';
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const questionContainers = document.querySelectorAll('.question-container');
    questionContainers.forEach(container => {
        initializeQuestion(container);
    });
});