// setting variables
var game = "ul.game",
gameSquare = "ul.game li.blank",
nought = "ul.game li.nought",
cross = "ul.game li.cross";

// array for players
var gameResult = [nought, cross];

// to push square ID to array
var squareIDs = [];

// to reset the x value for every second click (1=noughts and 0=crosses)
var x = 0;
function resetClick() {
	x = 0;
	gameSquare.value = x;
}

function count() {
	if(x<1) {
		x += 1;
	}
	else {
		x = 0;
	}}

$( "p.reset" ).click(function() {
         location.reload(true);
});