function menu_toogle() {
    var _body = document.body;

    if(_body.classList.contains('menu-close')){
        _body.classList.remove('menu-close');
    }else{
        _body.classList.add('menu-close');
    }
}