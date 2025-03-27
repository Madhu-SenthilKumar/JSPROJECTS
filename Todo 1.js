let itemlist=[];
let additem =() =>{
    let item=document.getElementById('todo').value;
    itemlist.push(item);
    console.log(itemlist);
    document.getElementById('todo').value="";
    getitem();
}
let getitem = () =>{
    let emptystr = "";
    let sno=0;
    itemlist.forEach(function(value,index){
        sno +=1;
        emptystr +="<tr><td>"+sno+"</td><td>"+value+"</td><td><button onclick=deleteitem("+index+")>Remove</button></td></tr>";
    })
document.getElementById('tbl').innerHTML=emptystr;
}
function deleteitem(id){
itemlist.splice(id,1);
getitem();
}
document.getElementById('btn').addEventListener('click',additem);