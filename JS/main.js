var lowNumber = parseInt(prompt('Insert lowest number'));
var highNumber = parseInt(prompt('Insert highest number'));
var endIter = parseInt(prompt('Insert when to end iteration'));
console.log('End iteration at: ' + endIter);
var i;
var counter = 0; 
while (i != endIter) {
    counter += 1
    var i = Math.floor(Math.random() * (highNumber - lowNumber + 1) + lowNumber);
    console.log(i);
    if (i === endIter) {
        console.log('End of iterations reached at iteration: ' + counter)
    }
};
