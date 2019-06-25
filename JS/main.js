var lowNumber = parseInt(prompt('Insert lowest number'));
var highNumber = parseInt(prompt('Insert highest number'));
var endIter = parseInt(prompt('Insert when to end iteration'));
document.write('<h1>Computer Guessing Game</h1><br>');
document.write('<h2>Computer will guess for ' + endIter + ', between the numbers ' + lowNumber + ' and ' + highNumber + '.</h2>');
var i;
var counter = 0; 
while (i != endIter) {
    counter += 1
    var i = Math.floor(Math.random() * (highNumber - lowNumber + 1) + lowNumber);
    console.log(i);
    if (i === endIter) {
        document.write('<p>It took the computer ' + counter + ' tries to guess ' + endIter + '.</p>')
    }
};
