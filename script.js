var menuCheck = 0;

function hamMenu(){
    var menu = document.querySelectorAll(".navbtn");
    if (menuCheck == 0){
        console.log("hello");
        for(i=0; i < menu.length; i++){
            menu[i].style.display = "flex";
        }
        
        menuCheck++;
    }
    else if(menuCheck == 1){
        for(i=0; i < menu.length; i++){
            menu[i].style.display = "none";
        }
        menuCheck--;
    }
    
}