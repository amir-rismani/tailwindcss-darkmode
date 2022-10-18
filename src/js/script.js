const userTheme = localStorage.getItem('theme');
const systemeTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const modeItems = document.querySelectorAll('.mode-item');


const lightIcon = document.querySelector('.light-icon');
const darkIcon = document.querySelector('.dark-icon');

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (userTheme === 'dark' || !userTheme && systemeTheme) {
    document.documentElement.classList.add('dark');
    darkIcon.classList.remove('hidden');
    lightIcon.classList.add('hidden');
} else {
    document.documentElement.classList.remove('dark');
    lightIcon.classList.remove('hidden');
    darkIcon.classList.add('hidden');
}


modeItems.forEach(modeItem => {
    modeItem.addEventListener('click', (event) => {
        let theme = modeItem.dataset.theme;
        console.log(theme)
        switch (theme) {
            case 'ligth':
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', theme);
                lightIcon.classList.remove('hidden');
                darkIcon.classList.add('hidden');
                break;
            case 'dark':
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', theme);
                darkIcon.classList.remove('hidden');
                lightIcon.classList.add('hidden');
                break;
            case 'system':
                console.log(systemeTheme)
                if (systemeTheme) {
                    document.documentElement.classList.add('dark');
                    darkIcon.classList.remove('hidden');
                    lightIcon.classList.add('hidden');
                } else {
                    document.documentElement.classList.remove('dark');
                    lightIcon.classList.remove('hidden');
                    darkIcon.classList.add('hidden');
                }
                localStorage.removeItem('theme');
                break;
        }
    })
});



// On page load or when changing themes, best to add inline in `head` to avoid FOUC
// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     document.documentElement.classList.add('dark')
// } else {
//     document.documentElement.classList.remove('dark')
// }

// Whenever the user explicitly chooses light mode
// localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
// localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
// localStorage.removeItem('theme')