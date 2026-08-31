
document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('ticketForm');

  if(!form) return;
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    message.textContent = '';
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const qty = parseInt(document.getElementById('qty').value,10);
    const terms = document.getElementById('terms').checked;

    if(name.length < 2){ message.textContent = 'Please enter your full name.'; return; }
    if(!email || !email.includes('@')){ message.textContent = 'Please enter a valid email.'; return; }
    if(!qty || qty < 1 || qty > 10){ message.textContent = 'Please select 1–10 tickets.'; return; }
    if(!terms){ message.textContent = 'You must agree to the terms.'; return; }

    message.textContent = `Thanks ${name}! Your ${qty} ticket(s) are reserved. Check your email (${email}).`;
    form.reset();
  });
});

