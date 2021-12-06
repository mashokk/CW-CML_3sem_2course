//дожидаемся полной загрузки страницы
window.onload = function () {

    //получаем идентификатор элемента
    var a = document.getElementById('switch');
    
    //вешаем на него событие
    a.onclick = function() {
        //производим какие-то действия
        if (this.innerHTML=='Контакты') this.innerHTML = '+375259914356 <br> marusia2200@gmail.com';
        else this.innerHTML = 'Контакты';
        //предотвращаем переход по ссылке href
        return false;
    }
}