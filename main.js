var Clicks= 0;
function updatescore(){
    Clicks = Clicks + 1;
    document.getElementById("Clicks").innerHTML="Clicks: "+Clicks;
}
function save(){
    localStorage.setItem("save2", Clicks);
}