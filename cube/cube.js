const cube = {
    'b': [['00','01','02'],['10','blue','12'],['20','21','22']],
    'o': [['00','01','02'],['10','orange','12'],['20','21','22']],
    'w': [['00','01','02'],['10','white','12'],['20','21','22']],
    'r': [['00','01','02'],['10','red','12'],['20','21','22']],
    'g': [['00','01','02'],['10','green','12'],['20','21','22']],
    'y': [['00','01','02'],['10','yellow','12'],['20','21','22']]
};

// const edges = {
//     'top':[['g32','y12'],['o21','y21'],['b12','y32'],['r23','y23']],
//     'middle':[['g23','r32'],['g21','o32'],['o12','b21'],['b23','r12']],
//     'bottom':[['g12','w32'],['o23','w21'],['b32','w12'],['r21','w23']]
// };

const check = (cube) => {
    for (let side in cube) {
        for (let i1 of cube[side]) {
            for (let i2 of i1) {
                if (i2[0] !== side) {
                    return false;
                };
            };
        };
    };
    return true;
};

const getCorners = (cube) => {
    return corners = {
        'bottom': {
            'g': [cube.g[2][2], cube.r[2][2], cube.y[0][2]],
            'o': [cube.o[2][0], cube.g[2][0], cube.y[0][0]],
            'b': [cube.b[0][0], cube.o[0][0], cube.y[2][0]],
            'r': [cube.r[0][2], cube.b[0][2], cube.y[2][2]]
        },
        'top': {
            'g': [cube.g[0][2], cube.r[2][0], cube.w[2][2]],
            'o': [cube.o[2][2], cube.g[0][0], cube.w[2][0]],
            'b': [cube.b[2][0], cube.o[0][2], cube.w[0][0]],
            'r': [cube.r[0][0], cube.b[2][2], cube.w[0][2]]
        }
    };
};

const sideRight = (cube, side) => {
    const [el00, el01] = [cube[side][0][0], cube[side][0][1]];
    cube[side][0][0] = cube[side][2][0];
    cube[side][2][0] = cube[side][2][2];
    cube[side][2][2] = cube[side][0][2];
    cube[side][0][2] = el00;
    cube[side][0][1] = cube[side][1][0];
    cube[side][1][0] = cube[side][2][1];
    cube[side][2][1] = cube[side][1][2];
    cube[side][1][2] = el01;
};

const sideLeft = (cube, side) => {
    const [el00, el01] = [cube[side][0][0], cube[side][0][1]];
    cube[side][0][0] = cube[side][0][2];
    cube[side][0][2] = cube[side][2][2];
    cube[side][2][2] = cube[side][2][0];
    cube[side][2][0] = el00;
    cube[side][0][1] = cube[side][1][2];
    cube[side][1][2] = cube[side][2][1];
    cube[side][2][1] = cube[side][1][0];
    cube[side][1][0] = el01;
};

const cubeRightUp = (cube, side) => {
    switch (side) {
        case 'g': {
            const elements = [cube.g[0][2], cube.g[1][2], cube.g[2][2]];
            [cube.g[0][2], cube.g[1][2], cube.g[2][2]] = [cube.y[0][2], cube.y[1][2], cube.y[2][2]];
            [cube.y[0][2], cube.y[1][2], cube.y[2][2]] = [cube.b[0][2], cube.b[1][2], cube.b[2][2]];
            [cube.b[0][2], cube.b[1][2], cube.b[2][2]] = [cube.w[0][2], cube.w[1][2], cube.w[2][2]];
            [cube.w[0][2], cube.w[1][2], cube.w[2][2]] = elements;
            sideRight(cube, 'r');
            break;
        };
        case 'o': {
            const elements = [cube.o[2][0], cube.o[2][1], cube.o[2][2]];
            [cube.o[2][0], cube.o[2][1], cube.o[2][2]] = [cube.y[0][0], cube.y[0][1], cube.y[0][2]];
            [cube.y[0][0], cube.y[0][1], cube.y[0][2]] = [cube.r[2][0], cube.r[2][1], cube.r[2][2]];
            [cube.r[2][0], cube.r[2][1], cube.r[2][2]] = [cube.w[2][0], cube.w[2][1], cube.w[2][2]];
            [cube.w[2][0], cube.w[2][1], cube.w[2][2]] = elements;
            sideRight(cube, 'g');
            break;
        };
        case 'b': {
            cubeLeftDown(cube, 'g');
            break;
        };
        case 'r': {
            cubeLeftDown(cube, 'o');
            break;
        };
    };
};

const cubeRightDown = (cube, side) => {
    switch (side) {
        case 'g': {
            const elements = [cube.g[0][2], cube.g[1][2], cube.g[2][2]];
            [cube.g[0][2], cube.g[1][2], cube.g[2][2]] = [cube.w[0][2], cube.w[1][2], cube.w[2][2]];
            [cube.w[0][2], cube.w[1][2], cube.w[2][2]] = [cube.b[0][2], cube.b[1][2], cube.b[2][2]];
            [cube.b[0][2], cube.b[1][2], cube.b[2][2]] = [cube.y[0][2], cube.y[1][2], cube.y[2][2]];
            [cube.y[0][2], cube.y[1][2], cube.y[2][2]] = elements;
            sideLeft(cube, 'r');
            break;
        };
        case 'o': {
            const elements = [cube.o[2][0], cube.o[2][1], cube.o[2][2]];
            [cube.o[2][0], cube.o[2][1], cube.o[2][2]] = [cube.w[2][0], cube.w[2][1], cube.w[2][2]];
            [cube.w[2][0], cube.w[2][1], cube.w[2][2]] = [cube.r[2][0], cube.r[2][1], cube.r[2][2]];
            [cube.r[2][0], cube.r[2][1], cube.r[2][2]] = [cube.y[0][0], cube.y[0][1], cube.y[0][2]];
            [cube.y[0][0], cube.y[0][1], cube.y[0][2]] = elements;
            sideLeft(cube, 'g');
            break;
        };
        case 'b': {
            cubeLeftUp(cube, 'g')
            break;
        };
        case 'r': {
            cubeLeftUp(cube, 'o')
            break;
        };
    };
};

const cubeLeftUp = (cube, side) => {
    switch (side) {
        case 'g': {
            const elements = [cube.g[0][0], cube.g[1][0], cube.g[2][0]];
            [cube.g[0][0], cube.g[1][0], cube.g[2][0]] = [cube.y[0][0], cube.y[1][0], cube.y[2][0]];
            [cube.y[0][0], cube.y[1][0], cube.y[2][0]] = [cube.b[0][0], cube.b[1][0], cube.b[2][0]];
            [cube.b[0][0], cube.b[1][0], cube.b[2][0]] = [cube.w[0][0], cube.w[1][0], cube.w[2][0]];
            [cube.w[0][0], cube.w[1][0], cube.w[2][0]] = elements;
            sideLeft(cube, 'o');
            break;
        };
        case 'o': {
            const elements = [cube.o[0][0], cube.o[0][1], cube.o[0][2]];
            [cube.o[0][0], cube.o[0][1], cube.o[0][2]] = [cube.y[2][0], cube.y[2][1], cube.y[2][2]];
            [cube.y[2][0], cube.y[2][1], cube.y[2][2]] = [cube.r[0][0], cube.r[0][1], cube.r[0][2]];
            [cube.r[0][0], cube.r[0][1], cube.r[0][2]] = [cube.w[0][0], cube.w[0][1], cube.w[0][2]];
            [cube.w[0][0], cube.w[0][1], cube.w[0][2]] = elements;
            sideLeft(cube, 'b');
            break;
        };
        case 'b': {
            cubeRightDown(cube, 'g')
            break;
        };
        case 'r': {
            cubeRightDown(cube, 'o')
            break;
        };
    };
};

const cubeLeftDown = (cube, side) => {
    switch (side) {
        case 'g': {
            const elements = [cube.g[0][0], cube.g[1][0], cube.g[2][0]];
            [cube.g[0][0], cube.g[1][0], cube.g[2][0]] = [cube.w[0][0], cube.w[1][0], cube.w[2][0]];
            [cube.w[0][0], cube.w[1][0], cube.w[2][0]] = [cube.b[0][0], cube.b[1][0], cube.b[2][0]];
            [cube.b[0][0], cube.b[1][0], cube.b[2][0]] = [cube.y[0][0], cube.y[1][0], cube.y[2][0]];
            [cube.y[0][0], cube.y[1][0], cube.y[2][0]] = elements;
            sideRight(cube, 'o');
            break;
        };
        case 'o': {
            const elements = [cube.o[0][0], cube.o[0][1], cube.o[0][2]];
            [cube.o[0][0], cube.o[0][1], cube.o[0][2]] = [cube.w[0][0], cube.w[0][1], cube.w[0][2]];
            [cube.w[0][0], cube.w[0][1], cube.w[0][2]] = [cube.r[0][0], cube.r[0][1], cube.r[0][2]];
            [cube.r[0][0], cube.r[0][1], cube.r[0][2]] = [cube.y[2][0], cube.y[2][1], cube.y[2][2]];
            [cube.y[2][0], cube.y[2][1], cube.y[2][2]] = elements;
            sideRight(cube, 'b');
            break;
        };
        case 'b': {
            cubeRightUp(cube, 'g');
            break;
        };
        case 'r': {
            cubeRightUp(cube, 'o');
            break;
        };
    };
};

const cubeTopRight = (cube) => {
    const elements = [cube.g[0][0], cube.g[0][1], cube.g[0][2]];
    [cube.g[0][0], cube.g[0][1], cube.g[0][2]] = [cube.o[0][2], cube.o[1][2], cube.o[2][2]];
    [cube.o[0][2], cube.o[1][2], cube.o[2][2]] = [cube.b[2][2], cube.b[2][1], cube.b[2][0]];
    [cube.b[2][2], cube.b[2][1], cube.b[2][0]] = [cube.r[2][0], cube.r[1][0], cube.r[0][0]];
    [cube.r[2][0], cube.r[1][0], cube.r[0][0]] = elements;
    sideLeft(cube, 'w');
};

const cubeTopLeft = (cube) => {
    const elements = [cube.g[0][0], cube.g[0][1], cube.g[0][2]];
    [cube.g[0][0], cube.g[0][1], cube.g[0][2]] = [cube.r[2][0], cube.r[1][0], cube.r[0][0]];
    [cube.r[2][0], cube.r[1][0], cube.r[0][0]] = [cube.b[2][2], cube.b[2][1], cube.b[2][0]];
    [cube.b[2][2], cube.b[2][1], cube.b[2][0]] = [cube.o[0][2], cube.o[1][2], cube.o[2][2]];
    [cube.o[0][2], cube.o[1][2], cube.o[2][2]] = elements;
    sideRight(cube, 'w');
};

const cubeTopTwice = (cube) => {
    const elementsg = [cube.g[0][0], cube.g[0][1], cube.g[0][2]];
    [cube.g[0][0], cube.g[0][1], cube.g[0][2]] = [cube.b[2][2], cube.b[2][1], cube.b[2][0]];
    [cube.b[2][2], cube.b[2][1], cube.b[2][0]] = elementsg;
    const elemenstr = [cube.r[2][0], cube.r[1][0], cube.r[0][0]];
    [cube.r[2][0], cube.r[1][0], cube.r[0][0]] = [cube.o[0][2], cube.o[1][2], cube.o[2][2]];
    [cube.o[0][2], cube.o[1][2], cube.o[2][2]] = elementsr;
    const [el00, el01, el02, el10] = [cube.w[0][0], cube.w[0][1], cube.w[0][2], cube.w[1][0]];
    cube.w[0][0] = cube.w[2][2];
    cube.w[2][2] = el00;
    cube.w[0][1] = cube.w[2][1];
    cube.w[2][1] = el01;
    cube.w[0][2] = cube.w[2][0];
    cube.w[2][0] = el02;
    cube.w[1][0] = cube.w[1][2];
    cube.w[1][2] = el10;
};

const cubeBottomRight = (cube) => {
    const elements = [cube.g[2][0], cube.g[2][1], cube.g[2][2]];
    [cube.g[2][0], cube.g[2][1], cube.g[2][2]] = [cube.o[0][0], cube.o[1][0], cube.o[2][0]];
    [cube.o[0][0], cube.o[1][0], cube.o[2][0]] = [cube.b[0][2], cube.b[0][1], cube.b[0][0]];
    [cube.b[0][2], cube.b[0][1], cube.b[0][0]] = [cube.r[2][2], cube.r[1][2], cube.r[0][2]];
    [cube.r[2][2], cube.r[1][2], cube.r[0][2]] = elements;
    sideRight(cube, 'y');
};

const cubeBottomLeft = (cube) => {
    const elements = [cube.g[2][0], cube.g[2][1], cube.g[2][2]];
    [cube.g[2][0], cube.g[2][1], cube.g[2][2]] = [cube.r[2][2], cube.r[1][2], cube.r[0][2]];
    [cube.r[2][2], cube.r[1][2], cube.r[0][2]] = [cube.b[0][2], cube.b[0][1], cube.b[0][0]];
    [cube.b[0][2], cube.b[0][1], cube.b[0][0]] = [cube.o[0][0], cube.o[1][0], cube.o[2][0]];
    [cube.o[0][0], cube.o[1][0], cube.o[2][0]] = elements;
    sideLeft(cube, 'y');
};

const rightHand = (cube, side, dir) => {
    cubeRightUp(cube, side);
    (dir === 'l')? cubeTopLeft(cube) : cubeTopRight(cube);
    cubeRightDown(cube, side);
};

const leftHand = (cube, side, dir) => {
    cubeLeftUp(cube, side);
    (dir === 'l')? cubeTopLeft(cube) : cubeTopRight(cube);
    cubeLeftDown(cube, side);
};

const cornerSide = (cube, side, dir) => {
    rightHand(cube, side, dir);
    cubeTopTwice(cube);
    rightHand(cube, side, dir);
};

const cornerTop = (cube, side) => {
    for (let i; i < 2; i++) {
        rightHand(cube, side, 'l');
        cubeTopRight(cube);
    }
    rightHand(cube, side, 'l');
};

const searchTopYellowCorners = (corners) => {
    for (let side in corners) {
        const arr = corners[side];
        for (let i; i < 3; i++) {
            if (arr[i] === 'yellow') {
                return [side, i];
            };
        };
    };
    return [undefined, undefined];
};

const searchBottomYellowCorners = (corners) => {
    for (let side in corners) {
        const arr = corners[side];
        for (let i; i < 2; i++) {
            if (arr[i] === 'yellow') {
                return [side, i];
            };
        };
    };
    return [undefined, undefined];
};

const turnCube = (side, dir) => {
    switch (side) {
        case 'g': {
            switch (dir) {
                case 'r': {
                    return 'o';
                };
                case 'l': {
                    return 'r';
                };
                case 't': {
                    return 'b';
                };
            };
        };
        case 'o': {
            switch (dir) {
                case 'r': {
                    return 'b';
                };
                case 'l': {
                    return 'g';
                };
                case 't': {
                    return 'r';
                };
            };
        };
        case 'b': {
            switch (dir) {
                case 'r': {
                    return 'r';
                };
                case 'l': {
                    return 'o';
                };
                case 't': {
                    return 'g';
                };
            };
        };
        case 'r': {
            switch (dir) {
                case 'r': {
                    return 'g';
                };
                case 'l': {
                    return 'b';
                };
                case 't': {
                    return 'o';
                };
            };
        };
    };
};

// функция нахождения нужной стороны кубика;

const whichCornerType = (cube, side, angle, yellowInd) => {
    switch (yellowInd) {
        case 0: {
            if (side === angle[2][0]) {
                cubeTopRight(cube);
            } else if (side === angle[1][0]) {
                side = turnCube(side, 'r');
            } else {
                // поиск нужной стороны кубика;
                cubeTopRight(cube);
            };
            cornerSide(cube, side, 'r');
            break;
        };
        case 1: {
            if (side === angle[0][0]) {
                cubeTopLeft(cube);
            } else if (side === angle[2][0]) {
                side = turnCube(side, 'r');
                cubeTopTwice(cube);
            } else {
                // поиск нужной стороны кубика;
                cubeTopLeft(cube);
            };
            cornerSide(cube, side, 'l');
            break;
        };
        case 2: {
            if (side !== angle[1][0]) {
                // поиск нужной стороны кубика;
            };
            cornerTop(cube, side);
            break;
        };
    };
};

const corners = (cube) => {
    const {bottom: bottomCorners, top: topCorners} = getCorners(cube);
    for(let i; i < 4; i++) {
        const [side, yellowInd] = searchTopYellowCorners(topCorners);
        if (side) {
            const angle = topCorners[side];
            whichCornerType(cube, side, angle, yellowInd);
        } else {
            const [side, yellowInd] = searchBottomYellowCorners(bottomCorners);
            cornerTop(cube, side);
            cubeTopRight(cube);
            const {top: {side: angle}} = getCorners(cube);
            whichCornerType(cube, side, angle, yellowInd);
        };
    };
};

//-------------------
const myCube = Object.assign({}, cube);
const container = document.querySelector('#cont');
const solveButton = document.querySelector('.btn');

container.addEventListener('change', ({target}) => {
    const el = target.closest('input');
    const side = el.closest('.side').id;
    const indexes = el.dataset.num;
    const color = el.value;
    myCube[side][parseInt(indexes[0])][parseInt(indexes[1])] = color;
    el.setAttribute('style', `background-color: ${color}`);
});

solveButton.addEventListener('click', () => {
    if (!(check(myCube))) {
        console.log('Не собран');
    } else {
        container.innerHTML += `<div class="message"><h2>Кубик собран!</h2></div>`
    }
});