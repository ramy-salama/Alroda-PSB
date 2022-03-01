    /*Start Nav*/
    //MenuToggle
    let toggle = document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');

    toggle.onclick = function() {
            navigation.classList.toggle('active');
            main.classList.toggle('active');
        }
        //add hovered class
    let list = document.querySelectorAll('.navigation li');

    function activeLink() {
        list.forEach((item) =>
            item.classList.remove('hovered'));
        this.classList.add('hovered');
    }
    list.forEach((item) =>
        item.addEventListener('mouseover', activeLink));
    //map
    if (navigator.onLine)
        document.getElementsByClassName('img-map')[0].classList.add('hide')
    else
        document.getElementsByClassName('map-cont')[0].classList.add('hide')