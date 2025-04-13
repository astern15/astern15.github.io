// script.js

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Experience Section Toast Notification
const jobEntries = document.querySelectorAll('.experience li');
jobEntries.forEach(entry => {
  entry.addEventListener('click', () => {
    const company = entry.textContent.split(' - ')[0];
    showToast(`Learn more about my role at ${company}`);
  });
});

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade');
    setTimeout(() => document.body.removeChild(toast), 500);
  }, 3000);
}

// Download PDF Resume
const downloadBtn = document.getElementById('download-pdf');
downloadBtn.addEventListener('click', () => {
  const element = document.body;
  html2pdf().from(element).save('My_Resume.pdf');
});

// Contact Form Validation
const form = document.querySelector('form');
const errorDiv = document.createElement('div');
errorDiv.className = 'form-error';
form.appendChild(errorDiv);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorDiv.textContent = '';
  
  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector('textarea').value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name) {
    errorDiv.textContent = 'Name is required.';
  } else if (!emailPattern.test(email)) {
    errorDiv.textContent = 'Invalid email address.';
  } else if (message.length < 10) {
    errorDiv.textContent = 'Message must be at least 10 characters.';
  } else {
    alert('Message sent successfully!');
    form.reset();
  }
});
