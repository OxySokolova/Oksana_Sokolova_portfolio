gsap.from('.boxes', {y:-20,  duration: 3, delay: 1.5, opacity: 0, stagger: .3, repeat: -1, repeatDelay: 3})
gsap.from('.photoOne', {y: -200, ease: 'bounce', duration: 5, delay: 2, opacity: 0})

gsap.to('.text', {
text: "a web developer!", 
duration: 3,
repeat: -1,
ease: "power1.in",
yoyo: true,
delay: 2
})

document.getElementById('toggleButton').addEventListener('click', function () {
    const buttonText = this.querySelector('.btnContact');
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    buttonText.textContent = isExpanded ? 'Close' : 'Contact me';
});