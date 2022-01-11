export function divisible(num) {

    if(num % 3 == 0 && num % 5 == 0){
        return 'FizzBuzz!'
    }else if(num % 3 == 0){
        return 'Fizz!';
    }else if(num % 5 == 0){
        return 'Buzz!';
    }else{
        return (num + '!');
    }
}

export function containBoth(num){
    let str = num.toString();

    let array = str.split('');

    if(array.find(num => num == '3') && array.find(num => num == '5')){
        return 'FizzBuzz!';
    }else{
        return 'Nope!';
    }
}

export function contain3(num){
    let str = num.toString();

    let array = str.split('');

    if(array.find(num => num == '3')){
        return 'Fizz!';
    }else{
        return 'Nope!';
    }
}

export function contain5(num){
    let str = num.toString();

    let array = str.split('');

    if(array.find(num => num == '5')){
        return 'Buzz!';
    }else{
        return 'Nope!';
    }
}

export function contain(num){
    let str = num.toString();

    let array = str.split('');

    if(array.find(num => num == '3') && array.find(num => num == '5')){
        return 'FizzBuzz!';
    }else if(array.find(num => num == '3')){
        return 'Fizz!';
    }else if(array.find(num => num == '5')){
        return 'Buzz!';
    }else{
        return 'Nope!';
    }

}