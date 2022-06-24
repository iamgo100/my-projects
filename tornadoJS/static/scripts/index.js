const main = () => {
    const webSocket = new WebSocket('ws://localhost:8000/server');

    const header = document.getElementById('header');
    const condHead = document.getElementById('condition-header');
    const contText = document.getElementById('condition-text');
    const footerText = document.getElementById('footer');
    const check = document.getElementById('btn-check');
    const codeArea = document.getElementById('code');
    const result = document.getElementById('result');

    header.innerText = "FOX - формальный исполнитель";
    condHead.innerText = 'Условие задачи №1';
    contText.innerText = 'Здесь должно быть написано очень большое красивое условие, которое буудет заполнять практически все место, которое есть на этой строчке и, возможно, на следующей';
    footerText.innerText = 'Автор: Елкина Галина, 2021';

    check.addEventListener('click', () => {
        let arr = codeArea.value.split('\n').join('|');
        console.log(arr);
        webSocket.send(`{"code": "${arr}"}`);
    });

    webSocket.onmessage = event => {
        const response = JSON.parse(event.data);
        console.log(response);
        if (response.rightCode) {
            result.innerText = response.rightCode;
        };
    };
};