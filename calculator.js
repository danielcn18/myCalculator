function clearArea(){
    document.getElementById('display').value = null; 
}

function opt(myValue){
    document.getElementById('display').value += myValue;
}

function posNegative(myValue){
    document.getElementById('display').value *= myValue;
}

function percent(){
    var myValue = document.getElementById('display').value;
    document.getElementById('display').value = myValue * 0.01;
}

function solve(){
    var myValue = eval(document.getElementById('display').value);
    document.getElementById('display').value = myValue;
}
