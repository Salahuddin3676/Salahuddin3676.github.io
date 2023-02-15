(function () {
    'use strict';

    const bodyTag = document.querySelector('body');
    const divTag = document.querySelectorAll('div')[1];
    const btnAdd = document.querySelectorAll('button')[0];
    const btnDel = document.querySelectorAll('button')[1];
    const bgColors = ['one', 'two', 'three', 'four', 'five'];
    const colors = ['blue', 'grey', 'coral', 'blueviolet', 'goldenrod'];
    let colorIndex = 0;
    let paraNum = 1;

    btnAdd.addEventListener('click', function () {
        paraNum++;
        const newPara = document.createElement('p');
        const paraText = document.createTextNode(`This is paragraph number ${paraNum}`);
        newPara.appendChild(paraText);
        divTag.appendChild(newPara);
        if (colorIndex > colors.length - 1) { colorIndex = 0 };
        newPara.style.color = colors[colorIndex];
        bodyTag.className = bgColors[colorIndex]
        colorIndex++;
    });

    // let allParas = document.querySelectorAll('p');

    btnDel.addEventListener('click', function () {

        if (divTag.children.length > 1) {
            paraNum--;
            divTag.removeChild(divTag.children[divTag.children.length - 1]);
        } else {
            alert('Dont delete the last para!');
        }
    });
})();