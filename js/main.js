let burger = document.querySelector(".menu__burger"),
    menuPopup = document.querySelector(".menu__popup");

burger.addEventListener("click", function () {
    if (burger.classList.contains('menu__burger_active')) {
        menuPopup.classList.add("menu__popup_disable");
        burger.classList.remove('menu__burger_active');
    } else {
        burger.classList.add('menu__burger_active');
        menuPopup.classList.remove("menu__popup_disable");
    }
});

// filter
const filterBtns = document.querySelectorAll(".filter__item"),
    listItems = document.querySelectorAll('.works-list__item');

filterBtns.forEach(function(item){
    item.addEventListener("click",function(){
        let kindCategory = "";
        // 
        filterBtns.forEach(function(elem){
            if(elem.classList.contains("filter__item_active")){
                elem.classList.remove("filter__item_active");
            }
        })
        // 
        item.classList.add("filter__item_active");
        kindCategory = item.dataset.category;
        console.log(kindCategory);


        listItems.forEach(function(listitem){
            // console.log(listitem);
            if(listitem.classList.contains("works-list__item_disable")){
                listitem.classList.remove("works-list__item_disable");
            }
            // console.log(listitem.dataset.category);

            if(kindCategory === "all") {
                listitem.classList.remove("works-list__item_disable");
            } else {

            if(listitem.dataset.category !== kindCategory) {
                listitem.classList.add("works-list__item_disable")
            }else{}
        }
        });
    });
});