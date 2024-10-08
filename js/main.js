document.addEventListener('DOMContentLoaded', function() {
  const faqGroups = document.querySelectorAll('.faq-group');

  faqGroups.forEach(group => {
    const header = group.querySelector('.faq-group-header');
    const body = group.querySelector('.faq-group-body');
    const icon = group.querySelector('.faq-group-header i');

    header.addEventListener('click', () => {
      // 关闭所有其他的 FAQ 组
      faqGroups.forEach(otherGroup => {
        if (otherGroup !== group) {
          otherGroup.querySelector('.faq-group-body').classList.remove('open');
          otherGroup.querySelector('.faq-group-header i').classList.remove('fa-minus');
          otherGroup.querySelector('.faq-group-header i').classList.add('fa-plus');
        }
      });

      // 切换当前 FAQ 组的状态
      body.classList.toggle('open');
      
      if (body.classList.contains('open')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      } else {
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
    });
  });
});
