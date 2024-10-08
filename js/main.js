// faq accordion

document.addEventListener('DOMContentLoaded', () => {
    const faqContent = document.querySelector('.faq-content');

    faqContent.addEventListener('click', (e) => {

        // get the closest faq-group-header element
        const faqGroupHeader = e.target.closest('.faq-group-header');
        // if the clicked element is not a faq-group-header, return
        if (!faqGroupHeader) return;
        // get the faq-group-body element
        const faqGroup = faqGroupHeader.parentElement;
        const faqGroupBody = faqGroup.querySelector('.faq-group-body');
        const icon = faqGroupHeader.querySelector('i');
        // toggle the icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
        // Toggle visibility of the faq-group-body element
        faqGroupBody.classList.toggle('open');
        
        // 找到其他的 faq-group-body 并设置为关闭
        const faqGroups = faqContent.querySelectorAll('.faq-group');
        faqGroups.forEach((group) => {
            if (group !== faqGroup) {
                group.querySelector('.faq-group-body').classList.remove('open');
                group.querySelector('i').classList.remove('fa-minus');
                group.querySelector('i').classList.add('fa-plus');
            }
        });

    });
});


// mobile menu

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

});
