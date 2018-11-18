//1) Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е.
//чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
//– латинскими буквами A, B, C, D, E, F, G, H.
//2) Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-
//король, Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть
//соответственно черными и белыми.
//3) * Заменить буквы, обозначающие фигуры картинками.

createChessBoard()

fillChessBoard();

function createChessBoard(){
    
    chessNotatio = {
        rows: ['' , 8, 7, 6, 5, 4, 3, 2, 1, ''],
        columns: ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '']
    }
    var board = document.createElement('table');
    
    for (let i=0; i<10; i++ ){
        let tr = document.createElement('tr');
        board.appendChild(tr)

        for (let j=0; j<10; j++){
            td = document.createElement('td');
            td.id = chessNotatio.columns[j] + chessNotatio.rows[i];
//            td.innerHTML = td.id;
            
            if(j==0 || j==9) {
                td.innerHTML = chessNotatio.rows[i];
                td.classList = 'edge';
            }
            
            if(i==0 || i==9) {
                td.innerHTML = chessNotatio.columns[j];
                td.classList = 'edge';
            }
            
            if (i % 2 && (i < 9) && (1 < j && j < 9) && (j-1) % 2 ) {
                td.style.background = 'Sienna';
            }
            
            if ((i-1) % 2 && (i > 1) && (0 < j && j < 9) && j % 2 ) {
                td.style.background = 'Sienna';
            }
//            if((i>0 && i<9) && (j>0 && j<9)) { 
//                td.classList = 'cell';
////                td.innerHTML = td.classList;
//            }
            
            board.appendChild(td);
        }
    }
    
    document.body.appendChild(board);
    
    table = document.getElementsByTagName('table');
    table[0].style.backgroundImage = 'url(./img/wood_texture.jpg)';
    table[0].style.border = 'solid #000 1px';
    table[0].style.borderCollapse = 'collapse';
    table[0].style.fontFamily = 'arial', 'sans-serif';
    table[0].style.textAlign = 'center';

//    var td = document.getElementsByClassName('cell');
    var td = document.getElementsByTagName('td');
    for (let i = 0; i < td.length; i++) {
        td[i].style.width = '60px';
        td[i].style.height = '60px';
        td[i].style.borderCollapse = 'collapse';    
        td[i].style.border = 'solid #000 1px';
        td[i].style.fontSize = '34pt';
        td[i].style.lineHeight = '60px';
        td[i].style.width = '70px';
    }

    var edge = document.getElementsByClassName('edge');
    for (let i = 0; i < edge.length; i++) {
        edge[i].style.border = 'none';
//        edge[i].style.width = '70px';
//        edge[i].style.fontSize = '15pt';
          edge[i].style.fontSize = '2em';

        
    }

//    let blackCell = document.getElementsByClassName('dark');
//    for (let i = 0; i < blackCell.length; i++) {
//        blackCell[i].style.background = 'Sienna';
//    }
}

function fillChessBoard(){
    
//    getFugureLetters('a8', 'Л');
//    getFugureLetters('b8', 'К');
//    getFugureLetters('c8', 'С');
//    getFugureLetters('d8', 'Ф');
//    getFugureLetters('e8', 'Кр');
//    getFugureLetters('f8', 'С');
//    getFugureLetters('g8', 'К');
//    getFugureLetters('h8', 'Л');
//    getFugureLetters('a7', 'п');
//    getFugureLetters('b7', 'п');
//    getFugureLetters('c7', 'п');
//    getFugureLetters('d7', 'п');
//    getFugureLetters('e7', 'п');
//    getFugureLetters('f7', 'п');
//    getFugureLetters('g7', 'п');
//    getFugureLetters('h7', 'п');
//    
//    getFugureLetters('a1', 'Л');
//    getFugureLetters('b1', 'К');
//    getFugureLetters('c1', 'С');
//    getFugureLetters('d1', 'Ф');
//    getFugureLetters('e1', 'Кр');
//    getFugureLetters('f1', 'С');
//    getFugureLetters('g1', 'К');
//    getFugureLetters('h1', 'Л');
//    getFugureLetters('a2', 'п');
//    getFugureLetters('b2', 'п');
//    getFugureLetters('c2', 'п');
//    getFugureLetters('d2', 'п');
//    getFugureLetters('e2', 'п');
//    getFugureLetters('f2', 'п');
//    getFugureLetters('g2', 'п');
//    getFugureLetters('h2', 'п');

    figsLetter1 = ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л', ''];
    figsLetter2 = ['п', 'п', 'п', 'п', 'п', 'п', 'п', 'п', ''];
    figsLetter3 = ['Л', 'К', 'С', 'Ф', 'Кр', 'С', 'К', 'Л', ''];
    
    
    blackFigs1 = ['&#9820; ','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;'];
    posBlackFigs1 = ['a8', 'b8',  'c8', 'd8', 'e8', 'f8', 'g8', 'h8'];
    blackFigs2 = ['&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;'];
    posBlackFigs2 = ['a7', 'b7',  'c7', 'd7', 'e7', 'f7', 'g7', 'h7'];
    whiteFigs1 = ['&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;'];
    posWhiteFigs1 = ['a1', 'b1',  'c1', 'd1', 'e1', 'f1', 'g1', 'h1'];
    whiteFigs2 = ['&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;'];
    posWhiteFigs2 = ['a2', 'b2',  'c2', 'd2', 'e2', 'f2', 'g2', 'h2'];

    getFugureLetters(posBlackFigs1, figsLetter1, 'black');
    getFugureLetters(posBlackFigs2, figsLetter2, 'black');
    getFugureLetters(posWhiteFigs1, figsLetter3, 'white');
    getFugureLetters(posWhiteFigs2, figsLetter2, 'white');
    
    getFigureImages();
}

function getFugureLetters(position, figsLetter, color){
//        field = document.getElementById(field);
//        field.innerHTML = figureLetter;
        for(let i = 0; i < 8; i++){
        field = document.getElementById(position[i]);
        field.innerHTML = figsLetter[i];
        field.style.color = color;    
            
        }  
}

function getFigureImages(){
    for(let i = 0; i < 8; i++){
        field = document.getElementById(posBlackFigs1[i]);
        field.innerHTML = blackFigs1[i];
        field = document.getElementById(posBlackFigs2[i]);
        field.innerHTML = blackFigs2[i];
        field = document.getElementById(posWhiteFigs1[i]);
        field.innerHTML = whiteFigs1[i];
        field.style.color = 'black';
        field = document.getElementById(posWhiteFigs2[i]);
        field.innerHTML = whiteFigs2[i];
        field.style.color = 'black';

    }
}