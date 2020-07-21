const tbody = document.querySelector('#table-container');
const buttons = document.querySelector('#buttons');
const modal = document.querySelector('#modal-container');

buttons.addEventListener('click', ({target}) => {
    switch (target.id) {
        case 'add': {
            modal.classList.add('open');
            break;
        };
        case 'update': {
            console.log('update');
            break;
        };
        case 'remove': {
            console.log('remove');
            break;
        };
    }
})