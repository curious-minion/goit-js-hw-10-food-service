export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const lightTheme = Theme.LIGHT;
const switcher = document.getElementById('#theme-switch-toggle');
const currentTheme = localStorage.getItem('theme');

export function addClassBody(currentTheme) {
  if (currentTheme) {
  body.classList.add(currentTheme);
 if (currentTheme === 'Theme.DARK') {
        switcher.checked = true;
    }
}
}


export function switchTheme(e) {
    if (e.target.checked) {
        body.classList.add(currentTheme);
        localStorage.setItem('theme', 'Theme.DARK');
    }
    else { body.classList.add(lightTheme);
          localStorage.setItem('theme', lightTheme);
    }    
}




