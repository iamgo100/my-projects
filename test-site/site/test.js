const tbody = document.querySelector('#c-table');
const buttons = document.querySelector('#buttons');

const comModal = document.querySelector('#w-modal');
const comModalCont = document.querySelector('#c-modal');
const msaveBnt = document.querySelector('#ms');
const mcloseBtn = document.querySelector('#mc');

const warningModal = document.querySelector('#w-warning');
const warningModalCont = document.querySelector('#c-warning');
const wsaveBtn = document.querySelector('#ws');
const wcloseBtn = document.querySelector('#wc');

const close = new CustomEvent('close');
const save = new CustomEvent('save');
const warning = new CustomEvent('warning');

const getData = async () => {
    const res = await fetch('http://localhost:8080/db', {method: "POST"});
    const data = await res.json();
    return data;
};

const renderTable = async () => {
    const staff = await getData();
    staff.forEach(el => {
        const preview = `<img src="${el.preview}" alt="${el.name} ${el.lastName}" />`;
        const remote = `<input type="checkbox" checked="${el.remote}" disabled />`;
        const addr = el.address;
        const addressString = `г. ${addr.city}, ${addr.street} ${addr.house}, кв. ${addr.flat}`;
        tbody.innerHTML += `<tr>
            <td>${preview}</td>
            <td>${el.name}</td>
            <td>${el.lastName}</td>
            <td>${el.dateOfBirth}</td>
            <td>${el.age}</td>
            <td>${el.post}</td>
            <td>${remote}</td>
            <td>${addressString}</td>
        </tr>`;
    });
};

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

// функция очищения формы от введенных данных
// добавить ее в функцию закрывания модального окна

const closeFunc = () => comModal.classList.remove('open');
const warningFunc = () => warningModal.classList.add('open');
const removeWarning = () => {
    mcloseBtn.removeEventListener('click', warningFunc);
    mcloseBtn.addEventListener('click', closeFunc);
};

 const saveFunc = () => {
    // сохраняет данные
};

comModalCont.addEventListener('change', () => {
    mcloseBtn.removeEventListener('click', closeFunc);
    mcloseBtn.addEventListener('click', warningFunc);
})

mcloseBtn.addEventListener('click', closeFunc);

msaveBnt.addEventListener('click', () => {
    // saveFunc();
    removeWarning();
});

wcloseBtn.addEventListener('click', () => {
    warningModal.classList.remove('open');
    closeFunc();
    removeWarning();
});

wsaveBtn.addEventListener('click', () => {
    // saveFunc();
    warningModal.classList.remove('open');
    closeFunc();
    removeWarning();
});

renderTable();