

function getanswer(num){
    var name = document.getElementById("result");
    result.value += num;
}

function clearAll(){
    var name = document.getElementById("result");
    result.value = "0";
}

function operators(){
    var name = document.getElementById("result");
    result.value = eval(result.value);
}