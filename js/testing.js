function hoverChange_color(){
    console.log("works!")

}

function myFunction(){
    console.log("Button Clicked!")
    document.body.style.backgroundColor = 'blue'

}

function changePage(){
    
    let rand_val = Math.floor(Math.random()*5)+1;
    let into_rooms = 0;
    console.log("random val generated = ", rand_val);
    window.location.replace('./pages/roomWinter.html')

    // switch(rand_val) {
    //     case 1:
    //         console.log("changing to Cave Room!")
    //         if (into_rooms == 0){
    //             window.location.replace('./pages/roomCave.html')
    //             into_rooms = 1
    //         } else {
    //             window.location.replace('./roomCave.html')
    //         }
        
    //     case 2:
    //         console.log("changing to Lava Room!")
    //         if (into_rooms == 0){
    //             window.location.replace('./pages/roomLava.html')
    //             into_rooms = 1
    //         } else {
    //             window.location.replace('./roomLava.html')
    //         }
        
    //     case 3:
    //         console.log("changing to Slide Room!")
    //         if (into_rooms == 0){
    //             window.location.replace('./pages/roomSlide.html')
    //             into_rooms = 1
    //         } else {
    //             window.location.replace('./roomSlide.html')
    //         }
            
    //     case 4:
    //         console.log("changing to Underwater Room!")
    //         if (into_rooms == 0){
    //             window.location.replace('./pages/roomUnderWater.html')
    //             into_rooms = 1
    //         } else {
    //             window.location.replace('./roomUnderWater.html')
    //         }
        
    //     case 5:
    //         console.log("changing to Winter Room!")
    //         if (into_rooms == 0){
    //             window.location.replace('./pages/roomWinter.html')
    //             into_rooms = 1
    //         } else {
    //             window.location.replace('./roomWinter.html')
    //         }
    // }
    console.log("changing pages!")
}

console.log(window.document.body.style)