'use strict';

let i = 10;
(function timer(){
    if (--i < 1){
        document.getElementsByTagName('h1')[0].innerHTML='Happy Independence Day!!';
        return;
    } 
    setTimeout(function(){
        document.getElementsByTagName('h1')[0].innerHTML ='The remaining time is  '+ i + ' secs';
        timer();
    }, 1000);
})();