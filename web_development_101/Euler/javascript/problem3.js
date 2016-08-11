var LargestPrime = function(){
    var n = document.getElementById("value3").value;
    
    if(!isInt(n))
        alert("Number should be an integer that larger than 0 and less than 1000");
    
    var max = -1;
    for(var i = 0; i <= Math.sqrt(n); i++) {
        if(n%i == 0)
            max = i;
    }
        
    document.getElementById("result3").innerHTML = "Result is: " + max;
        
};

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10)) &&
         value > 0 &&
         value <= 1000;
}