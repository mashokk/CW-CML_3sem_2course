//дожидаемся полной загрузки страницы
window.onload = function () {

    //получаем идентификатор элемента
    var a = document.getElementById('switch');
    
    //вешаем на него событие
    a.onclick = function() {
        //производим какие-то действия
        if (this.innerHTML=='<object data="image/kontakty.svg" type="image/svg+xml"><img src="images/kontakty.svg" alt="Contacts"></object>') this.innerHTML = '+375251234567 <br> marusia2200@gmail.com';
        else this.innerHTML = '<object data="image/kontakty.svg" type="image/svg+xml"><img src="images/kontakty.svg" alt="Contacts"></object>';
        //предотвращаем переход по ссылке href
        return false;
    }
}