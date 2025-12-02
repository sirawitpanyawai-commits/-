document.addEventListener('DOMContentLoaded', (event) => {
    const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('closeBtn');
    const overlay = document.getElementById('overlay');

    menuBtn.onclick = () => {
      sidebar.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden'; 
    };

    const closeSidebar = () => {
      sidebar.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = 'auto'; 
    };

    closeBtn.onclick = closeSidebar;
    overlay.onclick = closeSidebar;

    const slider = document.getElementById('heroSlider');
    const slides = slider ? slider.querySelectorAll('.slick-slide') : []; 
    const dotsContainer = document.getElementById('sliderDots');
    
    if (slider && slides.length > 0) {
        let currentSlide = 0;
        const intervalTime = 5000; 
        const dots = [];

        slides.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetAutoplay(); 
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);

            if (index === 0) {
                slide.classList.add('active');
                dot.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        function goToSlide(n) {
            slides[currentSlide].classList.remove('active');
            dots[currentSlide].classList.remove('active');
            
            currentSlide = (n + slides.length) % slides.length; 
            
            slides[currentSlide].classList.add('active');
            dots[currentSlide].classList.add('active');
        }

        function nextSlide() {
            goToSlide(currentSlide + 1);
        }

        let sliderInterval;
        
        function resetAutoplay() {
            clearInterval(sliderInterval);
            sliderInterval = setInterval(nextSlide, intervalTime);
        }
        
        resetAutoplay();
        
        slider.addEventListener('mouseenter', () => {
            clearInterval(sliderInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            resetAutoplay();
        });
    }

    const foodCards = document.querySelectorAll('.food-card');
    const modal = document.getElementById('foodModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalRegion = document.getElementById('modalRegion');
    const modalDescription = document.getElementById('modalDescription');
    const closeModalBtn = document.getElementById('closeDetailBtn');

    foodCards.forEach(card => {
        const summary = card.querySelector('.card-summary');
        
        summary.addEventListener('click', (e) => {
            e.preventDefault(); 
            
            const title = card.querySelector('.card-title').textContent;
            const region = card.querySelector('.card-region').textContent;
            const descriptionHTML = card.querySelector('.modal-description-inline').innerHTML;

            modalTitle.textContent = title;
            modalRegion.textContent = region;
            modalDescription.innerHTML = descriptionHTML;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeModalBtn.onclick = closeModal;
    modal.onclick = (e) => {
        if (e.target.id === 'foodModal') {
            closeModal();
        }
    };
});