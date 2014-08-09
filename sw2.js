var coe = function(num){

	for (var count = 0 ; count<=num; count++){
		var div3 = count%3===0;
		var div5 = count%5===0;
		if (count=div3 && count=div5){
			console.log("ComputerEngineering");
		}
		else if (count=div3){
			console.log("Computer");
		}
		else if (count=div5){
			console.log("Engineering");
		}
		else {
			return count;
		}
	}
}
coe(100);