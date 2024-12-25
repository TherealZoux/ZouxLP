const statsSection = document.querySelector('.stats');
const spans = document.querySelectorAll('.stats .number');
let started = false;


window.addEventListener('scroll', function() {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      spans.forEach((span) => startCount(span));
      started = true;
    }
  }
});




function startCount(el) {
  let goal = parseInt(el.dataset.goal);
  let count = 0;
  let intervalId = setInterval(() => {
    count++;
    el.textContent = count;
    if (count === goal) {
      clearInterval(intervalId);
    }
  }, 2000 / goal);
}

