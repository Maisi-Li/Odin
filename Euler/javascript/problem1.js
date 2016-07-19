var multiple3And5 = function(){
    var n = document.getElementById("value1").value;
    
    if(isInt(n)) {
        var sum = 0;
        for(var i = 0; i < n; i++) {
            if(i%3 == 0) sum+= i;
            else if(i %5 == 0) sum+=i;
        }
        
        document.getElementById("result1").innerHTML = sum;
    }
    else
        alert("Number should be an integer that larger than 0 and less than 1000");
};

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10)) &&
         value > 0 &&
         value <= 1000;
}

