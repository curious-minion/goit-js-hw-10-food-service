import './styles.css';
import { switcher, switchTheme, addClassBody } from './js/theme-switch';
import menuTpl from './templates/menu-item.hbs';
import menuItems from './menu.json';



function createMenu(menuItems) {
    return menuItems.map(menuTpl).join('');
}

const menuMarkup = createMenu(menuItems);
const menuEl = document.querySelector('.js-menu');

menuEl.insertAdjacentHTML('beforeend', menuMarkup);

addClassBody();

switcher.addEventListener('change', switchTheme);
