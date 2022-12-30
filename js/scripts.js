// input 

let first = parseInt(prompt('Scrivi il primo numero'));

console.log('First Number:', first);

let second = parseInt(prompt('Scrivi il secondo numero'));

console.log('Second Number:', second);

let third = parseInt(prompt('Scrivi il third numero'));

console.log('Third Number:', third);

let fourth = parseInt(prompt('Scrivi il fourth numero'));

console.log('Fourth Number:', fourth);


// variabili "max" e "min"

let max = first;

let min = first;

// calcoliamo maggiore e minore

if (second > max) {

    max = second;

} else if (second < min) {

    min = second;

}

if (third > max) {

    max = third;

} else if (third < min) {

    min = third;

}

if (fourth > max) {

    max = fourth;

} else if (fourth < min) {

    min = fourth;

}

// stampa in console

console.log('Num Maggiore:', max);

console.log('Num Minore:', min);
