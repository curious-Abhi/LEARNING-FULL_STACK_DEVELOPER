
const dcount=document.getElementById("decreaseBtn");
const rcount=document.getElementById("resetBtn");
const icount=document.getElementById("increaseBtn");
const countlabel=document.getElementById("counter");
let count=0;


dcount.onclick = function(){
   count--;
   countlabel.textContent=count;
}
rcount.onclick = function(){
   count=0;
   countlabel.textContent=count;
}
icount.onclick = function(){
   count++;
   countlabel.textContent=count;
}