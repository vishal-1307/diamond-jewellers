
export function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question || !answer) return;

        // Initially hide answers
        answer.style.maxHeight = '0px';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, padding 0.3s ease';
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight !== '0px';

            // Close all other items
            faqItems.forEach(otherItem => {
                const otherQuestion = otherItem.querySelector('.faq-question');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if (otherItem !== item && otherAnswer) {
                    otherAnswer.style.maxHeight = '0px';
                    otherAnswer.style.paddingTop = '0';
                    otherAnswer.style.paddingBottom = '0';
                    otherQuestion?.setAttribute('aria-expanded', 'false');
                    otherItem.classList.remove('faq-open');
                }
            });

            // Toggle current item
            if (isOpen) {
                answer.style.maxHeight = '0px';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
                question.setAttribute('aria-expanded', 'false');
                item.classList.remove('faq-open');
            } else {
                answer.style.maxHeight = answer.scrollHeight + 20 + 'px';
                answer.style.paddingTop = '10px';
                answer.style.paddingBottom = '10px';
                question.setAttribute('aria-expanded', 'true');
                item.classList.add('faq-open');
            }
        });
    });
}
