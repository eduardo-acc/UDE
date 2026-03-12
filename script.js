document.addEventListener('DOMContentLoaded', () => {
    
    // Menu Mobile Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Scroll Suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simulação de Envio de Formulário
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Obrigado! Sua mensagem foi enviada (Simulação).');
        form.reset();
    });
});

  document.addEventListener('DOMContentLoaded', () => {
    const cards = [...document.querySelectorAll('.service-card')];

    function checkVisibility() {
      const windowHeight = window.innerHeight;
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowHeight * 0.9) {
          // Delay diferenciado para cascata
          setTimeout(() => {
            card.classList.add('is-visible');
          }, index * 150);
        }
      });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
  });

