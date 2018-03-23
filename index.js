/**
 *
 * Created by ypj on 18-3-23.
 */

const Btn = document.getElementsByTagName("input");
const arr = ['./img/1.jpg','./img/2.jpg','./img/3.jpg','./img/4.jpg','./img/5.jpg','./img/6.jpg','./img/7.jpg','./img/8.jpg','./img/9.jpg','./img/10.jpg','./img/11.jpg','./img/12.jpg'];
const Bod = document.body;
var i=0;
var timer = null;
Btn[0].onclick = function () {
    clearInterval(timer);//参数可以是NULL undefined
    timer = setInterval(function () {
        Bod.background = arr[i];
        i++;
        i%=arr.length;
    },1000);
}
Btn[1].onclick = function () {
    clearInterval(timer);
}

