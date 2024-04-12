  document.addEventListener('DOMContentLoaded', function() {
    const elements = [document.getElementById('header-section'), 
                      document.getElementById('hero-section'), 
                      document.getElementById('about-section')];

    const sectionColors = {
        'header-section': '#00d3ff', 
        'hero-section': '#3edea8',
        'about-section': '#fff',      
    };

    const sectionShadowBoxColors = {
        'header-section': '#003b60', 
        'hero-section': '#008657',
        'about-section': '#fff',      
    };
  
    function updateButtonColor(sectionId) {
      const color = sectionColors[sectionId] || '#00d3ff'; 
      document.documentElement.style.setProperty('--button-bg-color', color);
    }

    function updateButtonShadowbox(sectionId) {
        const color = sectionShadowBoxColors[sectionId] || '#00d3ff'; 
        document.documentElement.style.setProperty('--button-shadowbox-color', color);
    }
  
    function getCurrentIndex() {
      let currentScrollPosition = window.scrollY + window.innerHeight / 2;
      let currentIndex = 0;
  
      elements.forEach((element, index) => {
        if (element && element.offsetTop <= currentScrollPosition) {
          currentIndex = index;
        }
      });
  
      return currentIndex;
    }
  
    window.addEventListener('scroll', function() {
      updateButtonColor(elements[getCurrentIndex()].id);
      updateButtonShadowbox(elements[getCurrentIndex()].id)
    });
  
    updateButtonColor(elements[getCurrentIndex()].id);
    updateButtonShadowbox(elements[getCurrentIndex()].id)
  
    const button = document.getElementById('navigate-button');
    button.addEventListener('click', function() {
      let currentIndex = getCurrentIndex();
      currentIndex = (currentIndex + 1) % elements.length;
      const nextElement = elements[currentIndex];
      nextElement.scrollIntoView({ behavior: 'smooth' });
      updateButtonColor(nextElement.id);
      updateButtonShadowbox(elements[getCurrentIndex()].id)
    });
  });
  