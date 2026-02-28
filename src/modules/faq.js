
export function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) return;

    faqItems.forEach(item => {
        const question = item.querySelector('h4');
        const answer = item.querySelector('p');

        if (!question || !answer) return;

        // Initially hide answers
        answer.style.maxHeight = '0px';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, padding 0.3s ease';
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';

        // Make question clickable
        question.style.cursor = 'pointer';
        question.style.display = 'flex';
        question.style.justifyContent = 'space-between';
        question.style.alignItems = 'center';

        // Add toggle icon
        const icon = document.createElement('span');
        icon.className = 'material-symbols-outlined';
        icon.textContent = 'expand_more';
        icon.style.transition = 'transform 0.3s';
        question.appendChild(icon);

        question.addEventListener('click', () => {
            const isOpen = answer.style.maxHeight !== '0px';

            // Close all other items
            faqItems.forEach(otherItem => {
                const otherAnswer = otherItem.querySelector('p');
                const otherIcon = otherItem.querySelector('h4 .material-symbols-outlined');
                if (otherItem !== item && otherAnswer) {
                    otherAnswer.style.maxHeight = '0px';
                    otherAnswer.style.paddingTop = '0';
                    otherAnswer.style.paddingBottom = '0';
                    if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current item
            if (isOpen) {
                answer.style.maxHeight = '0px';
                answer.style.paddingTop = '0';
                answer.style.paddingBottom = '0';
                icon.style.transform = 'rotate(0deg)';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 20 + 'px';
                answer.style.paddingTop = '10px';
                answer.style.paddingBottom = '10px';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
}
