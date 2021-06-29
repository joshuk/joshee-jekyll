document.querySelector('.colour-scheme-switch').addEventListener('click', () => {
    const classes = ['light', 'dark'];
    const value = (1 - document.querySelectorAll('body.dark').length);
    document.cookie = 'darkMode=' + value + ';path=/;';

    document.querySelector('body').classList.add('transition');
    setTimeout(() => {
        document.querySelector('body').classList.remove('transition');
    }, 500);

    document.querySelector('body').classList.remove(classes[1 - value]);
    document.querySelector('body').classList.add(classes[value]);
});