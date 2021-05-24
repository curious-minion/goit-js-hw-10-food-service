import menuTpl from './templates/menu-item.hbs';
import menuItems from './menu.json';

import { switchTheme, addClassBody } from './js/theme-switch';


const menuEl = document.querySelector('.js-menu');

function createMenu(menuItems) {
    return menuItems.map(menuTpl).join('');
}
const menuMarkup = createMenu(menuItems);

menuEl.insertAdjacentElement('beforeend', menuMarkup);

switcher.addEventListener('change', switchTheme, false);