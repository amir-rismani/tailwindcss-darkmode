const userTheme = localStorage.getItem('theme');
const systemeTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const modeItems = document.querySelectorAll('.mode-item');


const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (userTheme === 'dark' || !userTheme && systemeTheme) {
    changeMode('dark');
} else {
    changeMode('light');
}


modeItems.forEach(modeItem => {
    modeItem.addEventListener('click', (event) => {
        let theme = modeItem.dataset.theme;
        switch (theme) {
            case 'ligth':
                localStorage.setItem('theme', theme);
                changeMode('light');
                break;
            case 'dark':
                localStorage.setItem('theme', theme);
                changeMode('dark');
                break;
            case 'system':
                if (systemeTheme) {
                    changeMode('dark');
                } else {
                    changeMode('light');
                }
                localStorage.removeItem('theme');
                break;
        }
    })
});


function changeMode(mode) {
    if (mode === 'dark') {
        document.documentElement.classList.add('dark');
        darkIcon.classList.remove('hidden');
        lightIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        lightIcon.classList.remove('hidden');
        darkIcon.classList.add('hidden');
    }
}