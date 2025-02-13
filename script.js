document.addEventListener("DOMContentLoaded", () => {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80, 
          density: {
            enable: true,
            value_area: 800 
          }
        },
        color: {
          value: '#ffffff'
        },
        shape: {
          type: 'circle', 
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.5, 
          random: true, 
          anim: {
            enable: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false
          }
        },
        line_linked: {
          enable: true, 
          distance: 150, 
          color: '#ffffff', 
          opacity: 0.4, 
          width: 1 
        },
        move: {
          enable: true, 
          speed: 2, 
          direction: 'none', 
          random: false, 
          straight: false, 
          out_mode: 'out', 
          bounce: false
        }
      },
      interactivity: {
        events: {
          onhover: {
            enable: true, 
            mode: 'repulse' 
          },
          onclick: {
            enable: true, 
            mode: 'push' 
          }
        },
        modes: {
          repulse: {
            distance: 100, 
            duration: 0.4
          }
        }
      },
      retina_detect: true 
    });

    document.addEventListener("DOMContentLoaded", () => {
        const twitchEmbed = document.querySelector('.twitch-embed');
        const offlineMessage = document.querySelector('.offline-message');
      
        
        twitchEmbed.addEventListener('error', () => {
          offlineMessage.style.display = 'block'; 
        });
      });
  
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60, 
            behavior: 'smooth'
          });
        }
      });
    });
  });