const insert = (num) =>{
    let number = document.getElementById('result').innerHTML;

    if(number == 'Digite os valores...'){
        number = ''
    }

    const operations = ['+', '-', '*', '/'];
    const lastCaract = number.charAt(number.length -1);

    if(operations.includes(lastCaract) && operations.includes(num)){
        return;
    }

    document.getElementById('result').innerHTML = number + num;
}

const clean = () =>{
    document.getElementById('result').innerHTML = ''
}

const back = () =>{
    const result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length - 1);
}

const calculate = () =>{
    const result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }else{
        document.getElementById('result').innerHTML = 'Digite os valores...'
    }
}

