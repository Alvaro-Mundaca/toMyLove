
        // Password validation
        document.getElementById('loginButton').addEventListener('click', function() {
            const password = document.getElementById('passwordInput').value;
            const errorMessage = document.getElementById('errorMessage');
            
            if (password === '04052023') {
                window.location.href = 'hermosa.html';
                createHearts();
                createSunflowers();
            } else {
                errorMessage.classList.add('show');
                setTimeout(() => {
                    errorMessage.classList.remove('show');
                }, 3000);
            }
        });

        // Also allow Enter key to submit
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                document.getElementById('loginButton').click();
            }
        });

        // Mobile menu toggle
        document.getElementById('menuButton').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
            }
        });

        // Create animated hearts
        function createHearts() {
            const container = document.getElementById('hearts-container');
            const section = document.getElementById('section1');
            const sectionWidth = section.offsetWidth;
            
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const heart = document.createElement('div');
                    heart.classList.add('heart');
                    
                    // Random position and size
                    const size = Math.random() * 15 + 10;
                    heart.style.width = `${size}px`;
                    heart.style.height = `${size}px`;
                    heart.style.left = `${Math.random() * sectionWidth}px`;
                    heart.style.bottom = '-20px';
                    
                    // Random animation duration
                    const duration = Math.random() * 10 + 10;
                    heart.style.animation = `float ${duration}s linear infinite`;
                    
                    container.appendChild(heart);
                }, i * 500);
            }
        }

        // Create animated sunflowers
        function createSunflowers() {
            const container = document.getElementById('sunflowers-container');
            const section = document.getElementById('section2');
            const sectionWidth = section.offsetWidth;
            
            for (let i = 0; i < 10; i++) {
                setTimeout(() => {
                    const sunflower = document.createElement('div');
                    sunflower.classList.add('sunflower');
                    
                    // Create SVG sunflower
                    const size = Math.random() * 20 + 30;
                    sunflower.innerHTML = `
                        <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="20" fill="#7e5306"/> <!-- Centro marrón -->
                            <g>
                                ${Array.from({length: 12}, (_, i) => {
                                    const angle = (i * 30) * Math.PI / 180;
                                    const x = 50 + 30 * Math.cos(angle);
                                    const y = 50 + 30 * Math.sin(angle);
                                    return `<ellipse cx="${x}" cy="${y}" rx="15" ry="10" fill="#fbbf24" transform="rotate(${i * 30 + 90}, ${x}, ${y})"/>`; 
                                }).join('')}
                            </g>
                        </svg>
                    `;
                    
                    // Random position
                    sunflower.style.left = `${Math.random() * sectionWidth}px`;
                    sunflower.style.bottom = '-50px';
                    
                    // Random animation duration
                    const duration = Math.random() * 15 + 15;
                    sunflower.style.animation = `float ${duration}s linear infinite`;
                    
                    container.appendChild(sunflower);
                }, i * 1000);
            }
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.getElementById('mobileMenu').classList.add('hidden');
            });
        });
    

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'94bbdcc3a0480dd6',t:'MTc0OTI1NDM1NC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();