export function countTo100() {
    // console.log('connected');
    let count = 0;
    

    for(let i = 1; i <= 52; i++){

        let str = i.toString();
        let array = str.split('');
        count = i;

        if(array.find(num => num == '3') && array.find(num => num == '5')){
            console.log('FizzBuzz!');
        }else if(array.find(num => num == '3' && count % 3 !== 0)){
            console.log('Fizz!');
        }else if(array.find(num => num == '5' && count % 5 !== 0)){
            console.log('Buzz!');
        }else{
            if (count % 3 == 0 && count % 5 == 0 && array.find(num => num !== '3') && array.find(num => num !== '5')){
                console.log('FizzBuzz!');
            }else if(count % 3 == 0){
                console.log('Fizz!');
            }else if (count % 5 == 0){
                console.log('Buzz!');
            }else{
                console.log(count + '!');
            }
        }
    }
}