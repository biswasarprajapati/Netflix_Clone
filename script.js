document.addEventListener('DOMContentLoaded', () => {
    // FAQ section toggle functionality
    const faqBoxes = document.querySelectorAll('.faqbox');
    
    faqBoxes.forEach(box => {
      box.addEventListener('click', () => {
        box.classList.toggle('active');
        const svg = box.querySelector('svg');
        if (box.classList.contains('active')) {
          svg.innerHTML = `
            <path d="M12 4V20" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
          `;
        } else {
          svg.innerHTML = `
            <path d="M12 4V20" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
            <path d="M4 12H20" stroke="#141B34" stroke-width="1.5" stroke-linejoin="round"/>
          `;
        }
      });
    });
  
    // Email validation functionality
    const emailInput = document.querySelector('.hero input[type="text"]');
    const getStartedButton = document.querySelector('.hero .btn-red');
  
    getStartedButton.addEventListener('click', () => {
      const email = emailInput.value;
      if (validateEmail(email)) {
        alert('Email is valid. Proceeding to create or restart your membership.');
        // Here you can add the functionality to proceed with the form submission
      } else {
        alert('Please enter a valid email address.');
      }
    });
  
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(String(email).toLowerCase());
    }
  });
  