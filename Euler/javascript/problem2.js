var evenFibonacci = function(){
    var n = document.getElementById("value2").value;
    
    if(!isInt(n))
        alert("Number should be an integer that larger than 0 and less than 4 million");
    
    var sum = 0;
    var v1 = 0;
    var v2 = 1;
    while(v2 < n) {
        var temp = v1 + v2;
        if(temp%2 == 0) sum+= temp;
        v1 = v2;
        v2 = temp;
    }
        
    document.getElementById("result2").innerHTML = "Result is: " + sum;
        
};

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10)) &&
         value > 0 &&
         value <= 4000000;
}