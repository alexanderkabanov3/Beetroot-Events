//  1.Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.

document.addEventListener('keydown', (firstKey) => {
    if (firstKey.code == 'ControlLeft' || firstKey.code == 'ControlRight') {
            document.addEventListener('keyup', (secondKey) => {
                if (secondKey.code == 'KeyV') {
                    secondKey.preventDefault();

                    let firstDiv = document.getElementsByTagName('div')[0];
                    let firstDivContent = document.getElementsByTagName('div')[0].innerHTML;
                    let textarea = document.createElement('textarea');
                    textarea.innerText = firstDivContent;
                    firstDiv.replaceWith(textarea);

                       document.addEventListener('keydown', (Ctrl) => {
                            if (Ctrl.code == 'ControlLeft') {
                                document.addEventListener('keyup', (keym) => {
                                    if (keym.code == 'KeyM') {
                                        let text = document.getElementsByTagName('textarea')[0].value;
                                        firstDiv.innerHTML = '';
                                        firstDiv.append(text); 
                                        textarea.replaceWith(firstDiv);
                                    };
                                });  
                            };
                       }); 
                };
            }); 
    };
}); 

// 2.Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. Учтите, что числовые значения должны сортироваться как числа, а не как строки.

const firstTh = document.querySelectorAll('.first__th');
const arr = [];

for (let i = 0; i < firstTh.length; i++) {
    arr.push(+firstTh[i].innerHTML);
};

arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
} 

const fisrtThCkick = document.querySelector('#fisrtThCkick');

fisrtThCkick.addEventListener('click', function() {
    for (let i = 0; i < firstTh.length; i++) {
        firstTh[i].innerHTML = arr[i];
    };
});

// // Первый столбец

const secondTh = document.querySelectorAll('.second__th');
const arr1 = [];

secondTh.forEach((event) => {
    arr1.push(+event.innerHTML);
});

arr1.sort(compareNum);

const secondThClick = document.querySelector('#secondThClick');

secondThClick.addEventListener('click', function() {
    for (let i = 0; i < secondTh.length; i++) {
        secondTh[i].innerHTML = arr1[i];
    }
});

// Третий столбец

const thirdTh = document.querySelectorAll('.third__th');
const arr2 = [];

thirdTh.forEach((event) => {
    arr2.push(+event.innerHTML);
});

arr2.sort(compareNum);


const thirdThClick = document.querySelector('#thirdThClick');

thirdThClick.addEventListener('click', function() {
    for (let i = 0; i < thirdTh.length; i++) {
        thirdTh[i].innerHTML = arr2[i];
    }
});

// 3.Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом нижнем углу и тянуть ее дальше.

const divResize = document.querySelector('#frame');

divResize.addEventListener('mousemove', (event) => {
     let x = event.offsetX;
     let y = event.offsetY;
     if (x > 373 && y > 381) {
         divResize.classList.add('resizeCursor');
         divResize.addEventListener('mousedown', mousedown);
         
         function mousedown(e) {

            let prevX = e.clientX;
            let prevY = e.clientY;

             document.addEventListener('mousemove', mousemove);
             document.addEventListener('mouseup', mouseup);

             function mousemove (e) {
                let rect = divResize.getBoundingClientRect();
                divResize.style.width = rect.width - (prevX - e.clientX) + "px";
                divResize.style.height = rect.height - (prevY - e.clientY) + "px";

                prevX = e.clientX;
                prevY = e.clientY;
             }

             function mouseup() {
                document.removeEventListener('mousemove', mousemove);
                document.removeEventListener('mouseup', mouseup);
             }
         }
     } else {
         divResize.classList.remove('resizeCursor');
     }
});

