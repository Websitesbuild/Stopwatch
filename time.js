const display = document.querySelector('.display');

let msec = 0;
let sec = 0;
let min = 0;

let timerId = null;


function start(){
    
    msec++;

    if(msec == 100){
        msec =0;
        sec++;
        if(sec==60){
            sec =0;
            min++;
        }
    }

    msString = (msec<10)?'0'+msec:msec;
    secString = (sec<10)?'0'+sec:sec;
    minString = (min<10)?'0'+min:min;

    display.innerHTML = minString+':'+secString+':'+msString;


    
}

$('button').click((e)=>{
    if(e.target.innerHTML === 'Start'){
        if(timerId != null){
            clearInterval(timerId);
        }
        timerId = setInterval(start,10)
    }
    else if(e.target.innerHTML === 'Stop'){
        clearInterval(timerId)
    }
    else if(e.target.innerHTML === 'Reset'){
        clearInterval(timerId)
        display.innerHTML = '00:00:00'
        msec =0;
        sec =0;
        min = 0;
    }
})




