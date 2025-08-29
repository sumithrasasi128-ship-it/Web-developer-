// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission (demo only)
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for reaching out, your message has been sent!");
  this.reset();
});
