document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = 'Back to top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.backgroundColor = '#007bff';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.padding = '10px 20px';
    backToTopButton.style.borderRadius = '4px';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        header.style.transition = 'background-color 0.3s';
        backToTopButton.style.display = 'block';
      } else {
        header.style.backgroundColor = 'transparent';
        header.style.transition = 'background-color 0.3s';
        backToTopButton.style.display = 'none';
      }
    });
  
    backToTopButton.addEventListener('click', scrollToTop);
  });