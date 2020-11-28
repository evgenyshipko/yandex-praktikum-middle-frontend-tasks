'use strict';

//Код десять раз выведет на экран число 10. Подумайте, почему так происходит? Как исправить код, чтобы он выводил по порядку числа от 0 до 9? Предложите три разные решения, которые выведут в консоль цифры от 0 до 9.
// const badResult = () => {
//     for (var i = 0; i < 10; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, 10);
//     }
// };


'use strict';

const badResult = () => {
    for (var i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 10);
    }
};

const iifeSolution = () => {
    for (var i = 0; i < 10; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 0);
        })(i)
    }
};

function es6Solution() {
    for(let i = 0; i < 10; i++) {
        setTimeout(function() {
            console.log(i);
        }, 10);
    }
}

const bindSolution = function () {
    for (var i = 0; i < 10; i++) {
        setTimeout(console.log.bind(console, i), 0);
    }
};
