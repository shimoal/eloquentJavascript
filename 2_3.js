/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board */

var board = "";
var size = 17;

for (var row=0; row < size; row++){
	
	for (var column = 0; column < size; column++){
		if ((column%2=== 0&&row%2===0) || (column%2!==0&&row%2!==0))
			board += " ";
		else
			board += "#";
	}
	board += "\n";
	
}

console.log(board);
