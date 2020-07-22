const tbody = document.querySelector('#c-table');
const buttons = document.querySelector('#buttons');
const comModal = document.querySelector('#w-modal');
const comModalCont = document.querySelector('#c-modal');
const msaveBnt = document.querySelector('#ms');
const mcloseBtn = document.querySelector('#mc');
const warningModal = document.querySelector('#w-warning');
const warningModalCont = document.querySelector('#c-warning');
const wsavwBtn = document.querySelector('#ws');
const wcloseBtn = document.querySelector('#wc');

buttons.addEventListener('click', ({target}) => {
    switch (target.id) {
        case 'add': {
            comModal.classList.add('open');
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

const closeFunc = (modal) => modal.classList.remove('open');
const warning = () => warningModal.classList.add('open');
const saveFunc = () => {
    console.log('save'); // обработка запроса на сохранение введенных данных
    mcloseBtn.removeEventListener('click', warning);
    mcloseBtn.addEventListener('click', closeFunc(comModal));
};

msaveBnt.addEventListener('click', saveFunc);
mcloseBtn.addEventListener('click', closeFunc(comModal));

comModalCont.addEventListener('change', () => {
    mcloseBtn.removeEventListener('click', closeFunc(comModal));
    mcloseBtn.addEventListener('click', warning);
});

wsavwBtn.addEventListener('click', () => {
    saveFunc();
    closeFunc(warningModal);
});
wcloseBtn.addEventListener('click', closeFunc(warningModal));