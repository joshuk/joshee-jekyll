document.querySelector('.colour-scheme-switch').addEventListener('click', () => {
    let classes = ['light', 'dark'];
    let value = (1 - document.querySelectorAll('body.dark').length);
    document.cookie = 'darkMode=' + value + ';path=/;';

    document.querySelector('body').classList.remove(classes[1 - value]);
    document.querySelector('body').classList.add(classes[value]);
});