function joinArray(a,b){
	var c = "";
	for(var d in a){
		c += (a[d] + b);
	}
	c =	c.substring(0,c.length-1);
	return c;
}