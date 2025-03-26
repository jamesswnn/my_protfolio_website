document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById('menu-icon');
    const navbarList = document.getElementById('navbar-list');

    menuIcon.addEventListener('click', function () {
        navbarList.classList.toggle('active');
    });
});