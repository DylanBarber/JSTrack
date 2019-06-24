var lowNumber = parseInt(prompt('Insert lowest number'));
var highNumber = parseInt(prompt('Insert highest number'));
var endIter = parseInt(prompt('Insert when to end iteration'));
if (endIter <= highNumber && endIter >= lowNumber && lowNumber < highNumber) {
    document.write('<p>Console will end iteration at: ' + endIter + '</p><br>');
    var i;
    var counter = 0; 
    while (i != endIter) {
    counter += 1
    var i = Math.floor(Math.random() * (highNumber - lowNumber + 1) + lowNumber);
    console.log(i);
    if (i === endIter) {
        document.write('<p>Desired number reached at iteration: ' + counter + '</p><br>')
        document.write('<b><p>You can check the iterations that were ran in the console</p></b><br>')
        document.write('<b><p>Reload your webpage to run the program again</p></b>')
    }
    };
} else {
    console.log('Your selected end of iteration number is not within range or your selected range is incorrect')
}
