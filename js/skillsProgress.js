//elements
let skillsSection = document.getElementById("skills");
let skillsSpans = document.querySelectorAll(".the-progress span");

window.onscroll = function() {
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    skillsSpans.forEach((span) => span.style.width = span.dataset.width);
  }
}
