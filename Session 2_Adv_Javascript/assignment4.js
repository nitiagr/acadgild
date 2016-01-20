function outerFunc() {
	function innerFunc() {
		alert("Inside Inner Function");
	}
	innerFunc();
}
outerFunc();