(() => {
    const menuBtnRef = document.querySelector ("[data-menu-button]");
    const mobelMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click",( ) => {
    menuBtnRef.classList.toggle("is-open");
    mobelMenuRef.classList.toggle("is-open");
    });
})();