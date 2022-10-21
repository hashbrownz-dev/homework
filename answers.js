////////////////////////////////
//EASY GOING
////////////////////////////////

const easyGoing = () => {
    for(let i = 1; i <= 20; i++){
        console.log(i);
    }
}

//easyGoing();

////////////////////////////////
//GET EVEN
////////////////////////////////

const getEven = () => {
    for(let i = 0; i <= 200; i += 2){
        console.log(i);
    }
}

//getEven();

////////////////////////////////
//FIZZ BUZZ
////////////////////////////////

const fizzbuzz = () => {
    for(let i = 1; i <= 100; i++){
        let output = '';
        if(!(i % 3)) output += 'Fizz';
        if(!(i % 5)) output += 'Buzz';
        output ? console.log(output) : console.log(i);
    }
}

fizzbuzz();