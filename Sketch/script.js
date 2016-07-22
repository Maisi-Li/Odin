var CONTAINER_WIDTH = 800;
var rowNum = 10;
var colNum = 10;


$(document).ready(function(){
	drawGrid(rowNum, colNum);
    addPlaceHolderToForm();
    resetCanvas();
    
    defaultSketch();
});

$('form').submit(function(){

    if(!formCheck())
        return false;
    
    drawGrid(rowNum, colNum); 
    resetCanvas();
    

    switch($('input[type="radio"]:checked').val()) {
        case 'option1':
            defaultSketch();
            break;
        case 'option2':
            randomColor();
            break;
        case 'option3':
            trail();
            break;
        default:
            defaultSketch();
    }
     
    
    
    return false;// prevent refresh
});


// draw the grid
function drawGrid(rowNum, colNum) {
    var size = $("#box").width()/colNum;
    $('#box').empty(); 
    for(var i = 0; i < rowNum; i++) { 	
        for(var j = 0; j < colNum; j++) {
            $('<div class="grid"></div>').appendTo('#box');
        }   
    $('<div class="row"></div>').appendTo('#box');
    }
    
    $('.grid').css({'width':size, 'height':size});
    $('.grid').css('background-color', 'black');
};

function addPlaceHolderToForm(){
    $('input[name = gridRow]').attr('placeholder', 10);
	$('input[name = gridCol]').attr('placeholder', 10);
};

function resetCanvas(){
    $('#reset').click(function(){
        $('.grid').css('background-color', 'black');
    });
};


/****************************************/

function defaultSketch(){
    $('.grid').hover(function(){
        $(this).css('background-color', '#E37222');
    });
};

function randomColor(){
    $('.grid').hover(function(){
        var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        $(this).css('background-color', newColor);
    });
};

function trail(){
    $('.grid').mouseenter(function(){
        // var $temp = $('<div class="temp_grid"></div>');
        // $temp.appendTo($(this));
        $(this).addClass('temp_grid');
    });
    
    $('.grid').mouseleave(function(){
        // var $temp = $('<div class="temp_grid"></div>');
        // $temp.appendTo($(this));
        $(this).removeClass('temp_grid',10000);
    });
};

function formCheck(){
    var row = $('input[name = gridRow]').val();
    var col = $('input[name = gridCol]').val();
    // console.log(typeof(row));
    var $error = $('<small class="text-muted">Numer of grids should be less than 128. </small>');
    if(row < 0 || row > 128) {
        $error.insertAfter('input[name = gridRow]').fadeOut(3000);
        // console.log($error);
        return false;
    }
    if(col < 0 || col > 128) {
        $error.insertAfter('input[name = gridCol]').fadeOut(3000);
        return false;
    }
    
    // If row is not empty
    if(row.trim()) {
       rowNum = row; 
    }
    
    if(col.trim()) {
        colNum = col;
    }
    
    return true;
};

