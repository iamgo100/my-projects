const tbody = document.querySelector('#table-container');
const buttons = document.querySelector('#buttons');
const modal = document.querySelector('#modal-wrapper');
const modalCont = document.querySelector('#modal-container');
const saveBnt = document.querySelector('#save');
const closeBtn = document.querySelector('#close');

const closeFunc = () => {
    modal.classList.remove('open');
};

buttons.addEventListener('click', ({target}) => {
    switch (target.id) {
        case 'add': {
            modal.classList.add('open');
            break;
        };
        case 'update': {
            // вывод модального окна для редакторования данных выбранного пользователя
            console.log('update');
            break;
        };
        case 'remove': {
            // обработка запроса на удаление выбранного сотрудника из БД
            console.log('remove');
            break;
        };
    }
});

modalCont.addEventListener('change', () => {
    closeBtn.removeEventListener('click', closeFunc);
    closeBtn.addEventListener('click', () => {
        alert('Вы не сохранили данные');
    })
})

saveBnt.addEventListener('click', () => {
    // обработка запроса на сохранение введенных данных
    closeFunc();
});

closeBtn.addEventListener('click', closeFunc);