function mostFrequent(a){    
	var b = {};  
	var c = 0;  
	var d;   
	for(var e in a) {
        b[a[e]]=(b[a[e]] || 0)+1; 
        if(b[a[e]] > c) { 
                c = b[a[e]];  
                d = a[e];     
        }
	}
	return d + " ( " + c + " times )";
}