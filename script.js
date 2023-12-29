const faq = document.querySelectorAll('.card-faq-header');
const faqArr = Array.from(faq);

const expandFaq = (e) => {
  const container = e.target.closest('.card-faq-container');
  const answer = container.querySelector('p');
  console.log(answer);
  answer.classList.toggle('card-faq-toggle');
};

faqArr.map((item) => item.addEventListener('click', expandFaq));
