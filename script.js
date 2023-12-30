const faq = document.querySelectorAll('.card-faq-header');
const faqArr = Array.from(faq);

const expandFaq = (e) => {
  const container = e.target.closest('.card-faq-container');
  const answer = container.querySelector('p');
  answer.classList.toggle('toggle-style');
  const iconPlus = container.querySelector('.plus');
  iconPlus.classList.toggle('toggle-style');
  const iconMinus = container.querySelector('.minus');
  iconMinus.classList.toggle('minus-block');
};

faqArr.map((item) => item.addEventListener('click', expandFaq));
