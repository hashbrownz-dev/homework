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

//fizzbuzz();

////////////////////////////////
//WILD WILD LIFE
////////////////////////////////

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy.shift();
wolfy.unshift("Gameboy");
