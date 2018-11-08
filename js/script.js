let a = 0, b = 2;
if (a>=0 && b>=0) {
    alert (a-b);
}else if (a<0 && b<0) {
    alert (a*b);
}else if (a<0 && b>=0 || a>=0 && b<0) {
    alert(a+b);
}


a=Number(prompt("Введите число в диапазоне от 0 до 15: "));
switch(a){
        case 0:
            alert("a="+a);
            a=++a;
        case 1:
            alert("a="+a);
            a=++a;
        case 2:
            alert("a="+a);
            a=++a;
        case 3:
            alert("a="+a);
            a=++a;
        case 4:
            alert("a="+a);
            a=++a;
        case 5:
            alert("a="+a);
            a=++a;
        case 6:
            alert("a="+a);
            a=++a;
        case 7:
            alert("a="+a);
            a=++a;
        case 8:
            alert("a="+a);
            a=++a;
        case 9:
            alert("a="+a);
            a=++a;
        case 10:
            alert("a="+a);
            a=++a;
        case 11:
            alert("a="+a);
            a=++a;
        case 12:
            alert("a="+a);
            a=++a;
        case 13:
            alert("a="+a);
            a=++a;
        case 14:
            alert("a="+a);
            a=++a;
        case 15:
            alert("15!");
            break;
        default:
            alert("Неверное зачение a");
}

alert (null === 0); //false
alert (null == 0); //false