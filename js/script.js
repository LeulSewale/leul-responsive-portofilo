/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

const options = {
    threshold: 0.6, // Adjust the threshold as needed
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);

            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

/*==================== sticky navbar ====================*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);
