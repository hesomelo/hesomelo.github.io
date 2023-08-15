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

    let exist = document.getElementById("showTextButton");
    if(exist){
        exist.addEventListener("click", function(){
            b(a);
            a=!a;
        });
    }
    else{
        console.log("no button");
    }
});



let go_back = ()=>{

        console.log("click")
        window.location = ('index.html') 
        // window.location.href = ('https://careerkarma.com')
        console.log(window.location)
}

document.addEventListener("DOMContentLoaded", function(){
    let exist = document.getElementById("return()_but")
    if(exist){
        exist.addEventListener("click", function(){
            go_back();
        })
    }
})




