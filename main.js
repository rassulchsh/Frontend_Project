const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');

// opens nav menu

const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);


const sideBar = document.querySelector('aside');
const showSideBarBtn = document.querySelector('#show_sidebar-btn');
const hideSideBarBtn = document.querySelector('#hide_sidebar-btn');

const showSideBar = () => {
    sideBar.style.left = '0';
    showSideBarBtn.style.display = 'none';
    hideSideBarBtn.style.display = 'inline-block';
}

const hideSideBar = () => {
    sideBar.style.left = '-100%';
    showSideBarBtn.style.display = 'inline-block';
    hideSideBarBtn.style.display = 'none';
}

showSideBarBtn.addEventListener('click', showSideBar);
hideSideBarBtn.addEventListener('click', hideSideBar);
