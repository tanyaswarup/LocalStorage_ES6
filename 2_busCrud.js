function loading()
{let initialBus =[] ;
    if(localStorage.getItem("buses")==null)
    {
        localStorage.setItem("buses",JSON.stringify(initialBus));
    }
}
loading();
//add bus
function addBus(event){
    event.preventDefault();
    let tempbus= {};
    let name= document.getElementById("addName").value;
    let source= document.getElementById("addSource").value;
    let destination= document.getElementById("addDest").value;
    let numb=document.getElementById("addNum").value;
    let passenger= document.getElementById("addPassenger").value;
    tempbus.name=name;
    tempbus.source=source;
    tempbus.destination=destination;
    tempbus.numb=Number(numb);
    tempbus.passenger=passenger;
    let showBus = JSON.parse(localStorage.getItem("buses"));
    showBus.push(tempbus);
    localStorage.setItem("buses", JSON.stringify(showBus));
    display();
    document.getElementById("addName").value="";
    document.getElementById("addSource").value="";
    document.getElementById("addDest").value="";
    document.getElementById("addNum").value="";
    document.getElementById("addPassenger").value="";
}

//display
function display(temp=undefined){
    let showBus;
    let tabledata="";
    if(temp==undefined)
        showBus= JSON.parse(localStorage.getItem("buses"));
    else
        showBus=temp;   
    showBus.forEach(function(bus,index){
    let currentdata=`<tr>
    <td>${index+1}</td>
    <td>${bus.name}</td>
    <td>${bus.source}</td>
    <td>${bus.destination}</td>
    <td>${bus.numb}</td>
    <td>${bus.passenger}</td>
    </tr>`; //the current index is passed
    //using currentdata because only using temporarydata will cause overridding and not appending. Here + is appending
    tabledata += currentdata; 
});
document.getElementById("data-row").innerHTML=tabledata;
}
display();
// search by source
function searchBySource(){
    let sname= document.getElementById("searchSource").value;
    let showBus=JSON.parse(localStorage.getItem("buses"));
    let newsource= showBus.filter(function(bus){
        return (bus.source.toLowerCase().indexOf(sname.toLowerCase())!=-1); 
        //not equal to -1 means searched value exists and the value is returned to newname 
    });
    display(newsource);
    
}
//search by destination
function searchByDestination(){
    let dname= document.getElementById("searchDestination").value;
    let showBus=JSON.parse(localStorage.getItem("buses"));
    let newdestination= showBus.filter(function(bus){
        return (bus.destination.toLowerCase().indexOf(dname.toLowerCase())!=-1); 
        //not equal to -1 means searched value exists and the value is returned to newname 
    });
    display(newdestination);
}