let burger = document.querySelector(".menu__burger"),
    menuPopup = document.querySelector(".menu__popup");

burger.addEventListener("click", function(){
    if(burger.classList.contains('menu__burger_active')) {
        menuPopup.classList.add("menu__popup_disable");
        burger.classList.remove('menu__burger_active');
    } else {
    burger.classList.add('menu__burger_active');
    menuPopup.classList.remove("menu__popup_disable");
    }
});