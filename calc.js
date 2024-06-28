var screen=document.getElementById('screen');//access id

function btnClick(value){
    screen.value +=value;
}
function clearScreen(){
    screen.value=" ";
}

//errror
function back() {
    screen.value = screen.value.slice(0, -1);
}


function equal(){
    try{
        screen.value=eval(screen.value)
    }
    catch(error){
        screen.value='error'
        setTimeout(() => {
            screen.value=""
        }, 1000);
        
    }
}

