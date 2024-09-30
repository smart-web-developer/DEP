const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') 
        ? 'Enable Light Mode' 
        : 'Enable Dark Mode';
});
