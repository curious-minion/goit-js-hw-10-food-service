export const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const lightTheme = Theme.LIGHT;
const darkTheme = Theme.DARK;
export const switcher = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

export function switchTheme(e) {

    if (e.target.checked) {
        bodyEl.classList.replace(lightTheme, darkTheme);
        localStorage.setItem('theme', darkTheme);
    }
    else {
      bodyEl.classList.replace(darkTheme, lightTheme);
      localStorage.setItem('theme', lightTheme);
  }
}

export function addClassBody() {
  const currentTheme = localStorage.getItem('theme');
  bodyEl.classList.add(currentTheme);

  if (currentTheme === darkTheme) {
    switcher.checked = true;
    bodyEl.classList.add(darkTheme);
    localStorage.setItem('theme', darkTheme);
  }
}



