const toggleButton = document.querySelector('.mode-toggle-button');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});