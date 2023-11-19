function display(val){
    document.getElementById("screen").value+=val;
}
function result(){
    var p = document.getElementById("screen").value;
    var q = eval(p);
    document.getElementById("screen").value=q;
}
function clrscr(){
    document.getElementById("screen").value="";
}