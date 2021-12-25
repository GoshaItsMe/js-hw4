var one = prompt('Введите первое число');
var two = prompt('Введите второе число');
var three = prompt('Введите третье число');

if(one > two && one > three || three > one && three > two) {
    alert(two + ' is middle num');
}else if(two > one && two > three || one > two && one > three) {
    alert(three + 'is middle num');
}else if(two > one && two > three || three > one && three > two) {
    alert(one + 'is middle num');
}else{
    alert('not correct');
}
