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

////////////////////////////////
//YELL AT THE NINJA TURTLES
////////////////////////////////

const yellAtTheNinjaTurtles = () => {
    const ninjaTurtles = ['Michaelangelo','Leonardo','Raphael','Donatello'];
    for(let turtle of ninjaTurtles){
        console.log(turtle.toUpperCase());
    }
}

//yellAtTheNinjaTurtles();

////////////////////////////////
//METHODS, REVISITED
////////////////////////////////

const methodsRevisited = () => {
    const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];
    console.log('The index of Titanic');
    console.log(favMovies.indexOf("Titanic"));
    favMovies.sort();
    console.log('Sorting the array:')
    console.log(favMovies);
    favMovies.pop();
    favMovies.push('Guardians of the Galaxy');
    favMovies.reverse();
    favMovies.shift();
    favMovies.unshift('Gremlins');
    //unshift returns the length of the array
    favMovies.splice(favMovies.indexOf('Django Unchained'), 1, 'Avatar');
    const lastHalf = favMovies.slice(Math.floor(favMovies.length / 2));
    console.log('The last half of the array.');
    console.log(lastHalf);
    console.log('The finished array');
    console.log(favMovies);
    console.log('The index of Fast and Furious');
    console.log(favMovies.indexOf('Fast and Furious'));
}

//methodsRevisited();

////////////////////////////////
//WHERE IS WALDO?
////////////////////////////////

const whereIsWaldo = [
    ["Timmy", "Frank"],
    "Eggbert",
    ["Lucinda", "Jacc", "Neff", "Snoop"],
    ["Petunia", ["Baked Goods", "Waldo"]]
];

//remove Eggbert
whereIsWaldo.splice(1,1);
//console.log(whereIsWaldo);

//Change 'Neff' to 'No One'
whereIsWaldo[1][2] = 'No One';
//console.log(whereIsWaldo);

//Access and console.log 'Waldo'
//console.log(whereIsWaldo[2][1][1]);

////////////////////////////////
//EXCITED KITTEN
////////////////////////////////


const excitedKitten = () => {
    const getRandomMessage = () => {
        const kittenMessages = [
            '...human...why you taking pictures of me?...',
            '...the catnip made me do it...',
            '...why does the red dot always get away...'
        ]
        return kittenMessages[Math.floor(Math.random() * 3)]
    }
    for(let i = 1; i <= 20; i++){
        let message = 'Love me, pet me!  HSSSSSS!';
        if(!(i%2)){
            message += ` ${getRandomMessage()}`;
        }
        console.log(message);
    }
}

excitedKitten();