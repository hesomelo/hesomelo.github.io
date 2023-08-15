if(1){
    console.log("Hello we loaded in");
}

let a = true;

let b = (c) => {
    if(c){
        document.getElementById("displayText").style.display = "block";
        console.log("Even")
    }
    else{
        document.getElementById("displayText").style.display = "none";
        console.log("odd")
    }
    console.log(c);
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("showTextButton").addEventListener("click", function() {
        b(a);
        a = !a;
    });
});




