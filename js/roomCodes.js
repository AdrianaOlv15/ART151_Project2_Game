function StartSetDoorsAndItems(){
    // Setting up all doors
    sessionStorage.setItem("door1", "unlocked");    sessionStorage.setItem("door2", "locked");
    sessionStorage.setItem("door3", "locked");      sessionStorage.setItem("door4", "unlocked");
    sessionStorage.setItem("door5", "locked");    sessionStorage.setItem("door6", "unlocked");
    sessionStorage.setItem("door7", "locked");      sessionStorage.setItem("door8", "locked");
    sessionStorage.setItem("door9", "locked");      sessionStorage.setItem("door10", "locked");
    sessionStorage.setItem("doorExit", "locked");

    sessionStorage.setItem("item1_tag", "missing"); sessionStorage.setItem("item11_tag", "missing");
    sessionStorage.setItem("item2_tag", "missing"); sessionStorage.setItem("item12_tag", "missing");
    sessionStorage.setItem("item3_tag", "missing"); sessionStorage.setItem("item13_tag", "missing");
    sessionStorage.setItem("item4_tag", "missing"); sessionStorage.setItem("item14_tag", "missing");
    sessionStorage.setItem("item5_tag", "missing"); sessionStorage.setItem("item15_tag", "missing");
    sessionStorage.setItem("item6_tag", "missing"); sessionStorage.setItem("item16_tag", "missing");
    sessionStorage.setItem("item7_tag", "missing"); sessionStorage.setItem("item10_tag", "missing");
    sessionStorage.setItem("item8_tag", "missing"); sessionStorage.setItem("item9_tag", "missing");

    window.location.replace('pages/room1.html')
}

function printGameStatus(){
    console.log("Doors - - - - - - - - - ")
    console.log("Door 1    = " + sessionStorage.getItem("door1"))
    console.log("Door 2    = " + sessionStorage.getItem("door2"))
    console.log("Door 3    = " + sessionStorage.getItem("door3"))
    console.log("Door 4    = " + sessionStorage.getItem("door4"))
    console.log("Door 5    = " + sessionStorage.getItem("door5"))
    console.log("Door 6    = " + sessionStorage.getItem("door6"))
    console.log("Door 7    = " + sessionStorage.getItem("door7"))
    console.log("Door 8    = " + sessionStorage.getItem("door8"))
    console.log("Door 9    = " + sessionStorage.getItem("door9"))
    console.log("Door 10   = " + sessionStorage.getItem("door10"))
    console.log("Door Exit = " + sessionStorage.getItem("door11"))
    console.log("Items - - - - - - - - - ")
    console.log("item 1  = " + sessionStorage.getItem("item1_tag"))
    console.log("item 2  = " + sessionStorage.getItem("item2_tag"))
    console.log("item 3  = " + sessionStorage.getItem("item3_tag"))
    console.log("item 4  = " + sessionStorage.getItem("item4_tag"))
    console.log("item 5  = " + sessionStorage.getItem("item5_tag"))
    console.log("item 6  = " + sessionStorage.getItem("item6_tag"))
    console.log("item 7  = " + sessionStorage.getItem("item7_tag"))
    console.log("item 8  = " + sessionStorage.getItem("item8_tag"))
    console.log("item 9  = " + sessionStorage.getItem("item9_tag"))
    console.log("item 10 = " + sessionStorage.getItem("item10_tag"))
    console.log("item 11 = " + sessionStorage.getItem("item11_tag"))
    console.log("item 12 = " + sessionStorage.getItem("item12_tag"))
    console.log("item 13 = " + sessionStorage.getItem("item13_tag"))
    console.log("item 14 = " + sessionStorage.getItem("item14_tag"))
    console.log("key  15 = " + sessionStorage.getItem("item15_tag"))
    console.log("child 16 = " + sessionStorage.getItem("item16_tag"))
}

function get_item_bt_ID(identifier){ // gets item buttons id from screen
    if (identifier == 1){ buttonID = 'item1_bt'; }
    else if (identifier == 2){ buttonID = 'item2_bt';} 
    else if (identifier == 3){ buttonID = 'item3_bt'; }
    else if (identifier == 4){ buttonID = 'item4_bt'; }
    else if (identifier == 5){ buttonID = 'item5_bt'; }
    else if (identifier == 6){ buttonID = 'item6_bt'; }
    else if (identifier == 7){ buttonID = 'item7_bt'; }
    else if (identifier == 8){ buttonID = 'item8_bt'; }
    else if (identifier == 9){ buttonID = 'item9_bt'; }
    else if (identifier == 10){ buttonID = 'item10_bt'; }
    else if (identifier == 11){ buttonID = 'item11_bt'; }
    else if (identifier == 12){ buttonID = 'item12_bt'; }
    else if (identifier == 13){ buttonID = 'item13_bt'; }
    else if (identifier == 14){ buttonID = 'item14_bt'; }
    else if (identifier == 15){ buttonID = 'item15_bt'; }
    else if (identifier == 16){ buttonID = 'item16_bt'; }
    
    return buttonID;
}

function get_item_tag_ID(identifier){ // gets tags ID from inventory from screen
    if (identifier == 1){ tagID = "1.1"}
    else if (identifier == 2){ tagID = "1.2"}
    else if (identifier == 3){ tagID = "1.3"}
    else if (identifier == 4){ tagID = "1.4"}
    else if (identifier == 5){ tagID = "1.5"}
    else if (identifier == 6){ tagID = "1.6"}
    else if (identifier == 7){ tagID = "1.7"}
    else if (identifier == 8){ tagID = "1.8"}
    else if (identifier == 9){ tagID = "1.9"}
    else if (identifier == 10){ tagID = "1.10"}
    else if (identifier == 11){ tagID = "1.11"}
    else if (identifier == 12){ tagID = "1.12"}
    else if (identifier == 13){ tagID = "1.13"}
    else if (identifier == 14){ tagID = "1.14"}
    else if (identifier == 15){ tagID = "1.15"}
    else if (identifier == 16){ tagID = "1.16"}

    return tagID;
}

function get_item_in_sessionStorage(identifier){ // gets tags ID from inventory from screen
    if (identifier == 1){ buttonID = 'item1_tag'; }
    else if (identifier == 2){ buttonID = 'item2_tag';} 
    else if (identifier == 3){ buttonID = 'item3_tag'; }
    else if (identifier == 4){ buttonID = 'item4_tag'; }
    else if (identifier == 5){ buttonID = 'item5_tag'; }
    else if (identifier == 6){ buttonID = 'item6_tag'; }
    else if (identifier == 7){ buttonID = 'item7_tag'; }
    else if (identifier == 8){ buttonID = 'item8_tag'; }
    else if (identifier == 9){ buttonID = 'item9_tag'; }
    else if (identifier == 10){ buttonID = 'item10_tag'; }
    else if (identifier == 11){ buttonID = 'item11_tag'; }
    else if (identifier == 12){ buttonID = 'item12_tag'; }
    else if (identifier == 13){ buttonID = 'item13_tag'; }
    else if (identifier == 14){ buttonID = 'item14_tag'; }
    else if (identifier == 15){ buttonID = 'item15_tag'; }
    else if (identifier == 16){ buttonID = 'item16_tag'; }

    return buttonID;
}

function get_door_ID(){
    if      (identifier == 1){ ID = 'door1_ID'; }
    else if (identifier == 2){ ID = 'door2_ID';} 
    else if (identifier == 3){ ID = 'door3_ID'; }
    else if (identifier == 4){ ID = 'door4_ID'; }
    else if (identifier == 5){ ID = 'door5_ID'; }
    else if (identifier == 6){ ID = 'door6_ID'; }
    else if (identifier == 7){ ID = 'door7_ID'; }
    else if (identifier == 8){ ID = 'door8_ID'; }
    else if (identifier == 9){ ID = 'door9_ID'; }
    else if (identifier == 10){ ID = 'door10_ID'; }
    else if (identifier == 10){ ID = 'doorExit_ID'; }
    
    return ID;
}

function get_door_in_sessionStorage(){
    if      (identifier == 1){ ID = 'door1'; }
    else if (identifier == 2){ ID = 'door2';} 
    else if (identifier == 3){ ID = 'door3'; }
    else if (identifier == 4){ ID = 'door4'; }
    else if (identifier == 5){ ID = 'door5'; }
    else if (identifier == 6){ ID = 'door6'; }
    else if (identifier == 7){ ID = 'door7'; }
    else if (identifier == 8){ ID = 'door8'; }
    else if (identifier == 9){ ID = 'door9'; }
    else if (identifier == 10){ ID = 'door10'; }
    else if (identifier == 10){ ID = 'doorExit'; }
    
    return ID;
}

function getItemName(number){
    let name;
    if (number == 1) {name = "Dragon Ball (★★★★)"}
    if (number == 2) {name = "Tin foil"}
    if (number == 3) {name = "Dragon Ball (★★)"}
    if (number == 4) {name = "Book: The Adventures of Ugo"}
    if (number == 5) {name = "Resurrection Stone"}
    if (number == 6) {name = "Elder Wand"}
    if (number == 7) {name = "Heaven Scroll"}
    if (number == 8) {name = "Yellow Paint"}
    if (number == 9) {name = "Earth Scroll"}
    if (number == 10) {name = "10"}
    if (number == 11) {name = "Blue Paint"}
    if (number == 12) {name = "12"}
    if (number == 13) {name = "Minerva’s Pen"}
    if (number == 14) {name = "Invisibility Cloak"}
    if (number == 15) {name = "Key"}
    if (number == 16) {name = "Child"}
    return name;
}

function getItemNameByTag(number){
    let name;
    if (number == "item1_tag") {name = "Dragon Ball (★★★★)"}
    if (number == "item2_tag") {name = "Tin foil"}
    if (number == "item3_tag") {name = "Dragon Ball (★★)"}
    if (number == "item4_tag") {name = "Book: The Adventures of Ugo"}
    if (number == "item5_tag") {name = "Resurrection Stone"}
    if (number == "item6_tag") {name = "Elder Wand"}
    if (number == "item7_tag") {name = "Heaven Scroll"}
    if (number == "item8_tag") {name = "Yellow Paint"}
    if (number == "item9_tag") {name = "Earth Scroll"}
    if (number == "item10_tag") {name = "10"}
    if (number == "item11_tag") {name = "Blue Paint"}
    if (number == "item12_tag") {name = "12"}
    if (number == "item13_tag") {name = "Minerva’s Pen"}
    if (number == "item14_tag") {name = "Invisibility Cloak"}
    if (number == "item15_tag") {name = "KEY"}
    if (number == "item16_tag") {name = "Child"}
    return name;
}


// put item from room to inventory
function item_to_inventory(identifier){
    
    curr_bt_ID = get_item_bt_ID(identifier)  // get the button ID
    curr_tg_ID = get_item_tag_ID(identifier) // get the tag ID
    
    curr_bt = document.getElementById(curr_bt_ID) // get the button item using ID
    curr_tg = document.getElementById(curr_tg_ID) // get the tag item using ID

    // make item dissappear from "items in room"
    curr_bt.style.background = 'black'
    curr_bt.style.borderWidth = '0px'
    curr_bt.innerText = " "
    
    // make item appear in "inventory"
    curr_tg.style.background = 'white'
    curr_tg.style.borderColor = 'white'
    curr_tg.style.color = 'black'
    curr_tg.style.border = 'solid'
    curr_tg.innerHTML = getItemName(identifier);

    // save in session - item1_bt = in inventory!
    item = get_item_in_sessionStorage(identifier)
    sessionStorage.setItem(item, "in_inventory")

    // message
    console.log(item + " added to inventory!")
}

function select_unselect_item_in_inventory(identifier){
    
    curr_tg_ID = get_item_tag_ID(identifier)        // get item tag ID
    curr_tg = document.getElementById(curr_tg_ID)   // get the item using the ID
    curr_val = curr_tg.value                        // get the curr value 

    console.log("tag: " + curr_tg_ID + " clicked!")
    
    if (curr_val == 0 && check_inventory(identifier)){
        curr_tg.value = 1
        curr_tg.style.background = 'blue'
        curr_tg.style.color = 'white'
        sessionStorage.setItem(curr_tg_ID, true)
        console.log("tag: " + curr_tg_ID + " selected")
        console.log("new value: " + curr_tg.value)

    } else if (curr_val == 1 && check_inventory(identifier)){
        curr_tg.value = 0
        curr_tg.style.background = 'white'
        curr_tg.style.color = 'black'
        sessionStorage.setItem(curr_tg_ID, false)
        console.log("tag: " + curr_tg_ID + " unselected")
        console.log("new value: " + curr_tg.value)

        if(identifier == 15){
            item_bt.style.background = 'yellow'
        }
        if(identifier == 16){
            item_bt.style.background = 'cyan'
        }

    }
}

function check_inventory(identifier){

    item = get_item_in_sessionStorage(identifier);
    
    if (sessionStorage.getItem(item) == "in_inventory"){
        console.log("item found in inventory")
        return true
    } else {
        console.log("item NOT found in inventory")
        return false
    }
}

function identify_door(from, to){
    let door = "none"    
    if ( (from == "1" && to ==  "2") || (from == "2" && to ==  "1")){       // door:1
        door = "door1"
    } else if (from == "2" && to ==  "8" || (from == "8" && to ==  "2")){  // door:2
        door = "door2"
    } else if (from == "8" && to ==  "9" || (from == "9" && to ==  "8")){  // door:3
        door = "door3"
    } else if (from == "8" && to ==  "10" || (from == "10" && to ==  "8")){  // door:4
        door = "door4"
    } else if (from == "10" && to ==  "11" || (from == "11" && to ==  "10")){  // door:5
        door = "door5"
    } else if (from == "2" && to ==  "3" || (from == "3" && to ==  "2")){  // door:6
        door = "door6"
    } else if (from == "2" && to ==  "4" || (from == "4" && to ==  "2")){  // door:7
        door = "door7"
    } else if (from == "4" && to ==  "6" || (from == "6" && to ==  "4")){  // door:8
        door = "door8"
    } else if (from == "4" && to ==  "5" || (from == "5" && to ==  "4")){  // door:9
        door = "door9"
    } else if (from == "6" && to ==  "7" || (from == "7" && to ==  "6")){  // door:10
        door = "door10"
    } else if (from == "1" && to ==  "exit"){  // door:exit
        door = "doorExit"
    }  
    return door  
}



function move_room(from, to){
    // check which door we are using
    let door = identify_door(from, to)
    console.log("using door:  " + door + "which is: " + sessionStorage.getItem(door))

    // check if the door is unlocked
    if (sessionStorage.getItem(door) == "unlocked"){
        console.log(door + " is unlocked");
        
        // change rooms 
        if (from == "1" && to == "2"){        // door 1  
            window.location.replace('room2.html')

        } else if (from == "2" && to == "1"){
            window.location.replace('room1.html')

        } else if (from == "2" && to == "8"){ // door 2
            window.location.replace('room8.html')

        } else if (from == "8" && to == "2"){
            window.location.replace('room2.html')

        } else if (from == "8" && to == "9"){ // door 3
            window.location.replace('room9.html')

        } else if (from == "9" && to == "8"){
            window.location.replace('room8.html')

        } else if (from == "8" && to == "10"){ // door 4
            window.location.replace('room10.html')

        } else if (from == "10" && to == "8"){
            window.location.replace('room8.html')

        } else if (from == "10" && to == "11"){ // door 5
            window.location.replace('room11.html')

        } else if (from == "11" && to == "10"){
            window.location.replace('room10.html')

        } else if (from == "2" && to == "3"){ // door 6
            window.location.replace('room3.html')

        } else if (from == "3" && to == "2"){
            window.location.replace('room2.html')

        } else if (from == "2" && to == "4"){ // door 7
            window.location.replace('room4.html')

        } else if (from == "4" && to == "2"){
            window.location.replace('room2.html')

        } else if (from == "4" && to == "6"){ // door 8
            window.location.replace('room6.html')

        } else if (from == "6" && to == "4"){
            window.location.replace('room4.html')

        } else if (from == "4" && to == "5"){ // door 9
            window.location.replace('room5.html')

        } else if (from == "5" && to == "4"){
            window.location.replace('room4.html')

        } else if (from == "6" && to == "7"){  // door 10
            window.location.replace('room7.html')

        }else if (from == "7" && to == "6"){
            window.location.replace('room6.html')

        }else if (from == "1" && to == "exit"){
            window.location.replace('room12.html')

        }

    } else if (sessionStorage.getItem(door) == "locked"){
        console.log(door + " is locked");

        // check if items selected from inventory unlock the door 
        if (door == "door2") {
            if (document.getElementById("1.2").value == 1 ){
                sessionStorage.setItem("door2", "unlocked");
                sessionStorage.setItem("item2_tag", "used");
            } else {
                document.getElementById("doorText").innerHTML = "Professor Ning: I got a new office in SEO, but I can’t move in there yet. Something doesn’t feel right, do you know what this office is missing? If you help me find it, I can help you unlock this door."
            }

        } else if (door == "door3") {
            if (document.getElementById("1.1").value == 1 &&
                document.getElementById("1.3").value == 1 ){
                sessionStorage.setItem("door3", "unlocked");
                sessionStorage.setItem("item1_tag", "used");
                sessionStorage.setItem("item3_tag", "used");
            } else {
                document.getElementById("doorText").innerHTML = "Goku: This door is indestructible. I think the only way to open it is to ask Shen Long to do it. I got five of them, I’m just missing two more. Can you help me find them?"
            }

        } else if (door == "door7") {  
            if (document.getElementById("1.11").value == 1 &&
                document.getElementById("1.8").value == 1 ){
                sessionStorage.setItem("door7", "unlocked");
                sessionStorage.setItem("item11_tag", "used");
                sessionStorage.setItem("item8_tag", "used");
            } else {
                document.getElementById("doorText").innerHTML = "Da Vinci: Ahhhh! I ran out of green paint, and all I have left is the grass!!! My dear friend, I will let you pass, if you can help me out."
            }

        } else if (door == "door8") {  
            if (document.getElementById("1.9").value == 1 &&
                document.getElementById("1.7").value == 1 ){
                sessionStorage.setItem("door8", "unlocked");
                sessionStorage.setItem("item9_tag", "used");
                sessionStorage.setItem("item7_tag", "used");
            } else {
                document.getElementById("doorText").innerHTML = "Naruto: Ahhhh! I can’t believe it. Do I really need both of them to unlock this door?! It’s just like in the Chunin Exams, in order to pass my team and I needed to bring 2 things or we would be disqualified. Can you help me find them? They should be somewhere in these rooms."
            }

        } else if (door == "door9") {  
            if (document.getElementById("1.13").value == 1 &&
                document.getElementById("1.4").value == 1 ){
                sessionStorage.setItem("door9", "unlocked");
                sessionStorage.setItem("item13_tag", "used");
                sessionStorage.setItem("item4_tag", "used");
            } else {
                document.getElementById("doorText").innerHTML = "Emma (63194): Hey! Seems like this door unlocks the same way as the door in Goldy Pond! It also seems like there’s a word we need to look up in our book to use as a password. I had both items with me, but I think I left them somewhere in this castle. Can you help me find them?"
            }

        } else if (door == "door10") {  
            if (document.getElementById("1.5").value == 1 &&
                document.getElementById("1.6").value == 1 &&
                document.getElementById("1.14").value == 1 ){
                sessionStorage.setItem("door10", "unlocked");
                sessionStorage.setItem("item5_tag", "used");
                sessionStorage.setItem("item6_tag", "used");
                sessionStorage.setItem("item14_tag", "used");
            } else {
                document.getElementById("doorText").innerHTML = "Harry Potter: Seems like there’s someone trapped behind this door. I tried opening it using a spell, but it doesn’t work. Seems like we need a special key found in the depths of Hogwarts. Dumbledore warned me that the safest way to travel down there is by having all of the deathly hallows with me. I can go find it, but I’ll need you to find the things I need."
            }
        
        } else if (door == "door5") {  
            if (document.getElementById("1.12").value == 1 &&
                document.getElementById("1.10").value == 1 ){
                sessionStorage.setItem("door5", "unlocked");
                sessionStorage.setItem("item12_tag", "used");
                sessionStorage.setItem("item10_tag", "used");
            } else {
                document.getElementById("doorText").innerHTML = "door 5 text"
            }

        } else if (door == "doorExit") {  
            if (document.getElementById("1.15").value == 1){
                sessionStorage.setItem("doorExit", "unlocked");
                sessionStorage.setItem("item15_tag", "used");
            } else {
                document.getElementById("doorText").innerHTML = "You can't exit without a Key!"
            }
        } 
        document.getElementById("consoleText").innerHTML = "You can't pass. Provide the right items to move to the other room.";
        updateScreenBasedOnMemory(from);
    }
}


function updateScreenBasedOnMemory(roomNum){

    console.log("updating screen using room num = " + roomNum);
    
    // update door colors:
    doorsMem = ["door1", "door2", "door3", "door4", "door5", "door6", 
                "door7", "door8", "door9", "door10", "doorExit"];

    doorsScreen = ["door1_ID", "door2_ID", "door3_ID", "door4_ID", 
                   "door5_ID", "door6_ID", "door7_ID", "door8_ID", 
                   "door9_ID", "door10_ID", "doorExit_ID"]; 

    for (var i = 0; i < doorsMem.length; i++){
        //console.log("IN MEM: " + doorsMem[i] + " _is_ "+ sessionStorage.getItem(doorsMem[i]));
        //console.log("FOUND in this room/screen? " + foundInThisRoom(doorsScreen[i], roomNum));
        
        if (sessionStorage.getItem(doorsMem[i]) == "unlocked" && foundInThisRoom(doorsScreen[i], roomNum)){
            // all purple doors that have been unlocked need to be green
            //console.log(">>" + doorsMem[i] + "should change to green")
            document.getElementById(doorsScreen[i]).className = "label green";
        }
    }
    // update items in room:
    itemsMem = ["item1_tag", "item2_tag", "item3_tag", "item4_tag", "item5_tag", "item6_tag",
                "item7_tag", "item8_tag", "item9_tag", "item10_tag", "item11_tag", "item12_tag",
                "item13_tag", "item14_tag", "item15_tag", "item16_tag"];

    BtnsScreen = ["item1_bt", "item2_bt", "item3_bt", "item4_bt", "item5_bt",
                  "item6_bt", "item7_bt", "item8_bt", "item9_bt", "item10_bt",
                  "item11_bt", "item12_bt", "item13_bt", "item14_bt", "item15_bt",
                  "item16_bt"]


    TagsScreen = ["1.1", "1.2", "1.3", "1.4", "1.5", "1.6", "1.7", "1.8", "1.9", "1.10",
                   "1.11", "1.12", "1.13", "1.14", "1.15", "1.16"]

    console.log("checking items now...")
    for (var i = 0; i < itemsMem.length; i++){

        // all items that have been used or are in the inventory  shouldn't be showing up in room items
        if ((sessionStorage.getItem(itemsMem[i]) == "used" || sessionStorage.getItem(itemsMem[i]) == "in_inventory") && foundInThisRoom(BtnsScreen[i], roomNum)){
            item_bt = document.getElementById(BtnsScreen[i])
            item_bt.style.background = 'black'
            item_bt.style.borderWidth = '0px'
            item_bt.innerText = " "
        }

        if (sessionStorage.getItem(itemsMem[i]) == "in_inventory"){
            item_bt = document.getElementById(TagsScreen[i]);            
            item_bt.style.background = 'white'
            item_bt.style.color = 'black'
            item_bt.style.border = 'solid'
            item_bt.innerHTML = getItemNameByTag(itemsMem[i]);

            if(itemsMem[i] == "item15_tag"){
                item_bt.style.background = 'yellow'
            }
            if(itemsMem[i] == "item16_tag"){
                item_bt.style.background = 'cyan'
            }
        }

        // all items that have been used should show as "used!" 
        if (sessionStorage.getItem(itemsMem[i]) == "used"){
            item_bt = document.getElementById(TagsScreen[i])
            item_bt.style.background = 'black'
            item_bt.style.borderWidth = '0px'
            item_bt.innerText = " "
        }
    }
}


function secretMessage(){
    if (sessionStorage.getItem("item16_tag") == "in_inventory"){
        document.getElementById("secretEnd").innerHTML = "Furthermore, you saved the child that was trapped. Such a noble action, just like a knight would do"
    } else {
        document.getElementById("secretEnd").innerHTML = "Seems like you didn't unlock all of the doors. I wonder what else you could've find..."
    }
}

function foundInThisRoom(whateverID, roomNum){
    room1PossibleIDs = ["door1_ID","doorExit_ID","item1_bt", "item2_bt"];
    room2PossibleIDs = ["door1_ID","door2_ID","door6_ID","door7_ID","item3_bt"];
    room3PossibleIDs = ["door6_ID","item12_bt","item11_bt"];
    room4PossibleIDs = ["door7_ID","door8_ID","door9_ID"];
    room5PossibleIDs = ["door9_ID","item14_bt", "item15_bt"];
    room6PossibleIDs = ["door8_ID","door10_ID","item13_bt"];
    room7PossibleIDs = ["door10_ID","item15_bt","item16_bt"];
    room8PossibleIDs = ["door2_ID","door3_ID","door4_ID","item4_bt","item5_bt"];
    room9PossibleIDs = ["door3_ID","item10_bt","item9_bt"];
    room10PossibleIDs = ["door4_ID","door5_ID","item6_bt"];
    room11PossibleIDs = ["door5_ID","item8_bt","item7_bt"];

    if (roomNum == 1){
        for (var i = 0; i < room1PossibleIDs.length; i++){
            if (room1PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 2){
        for (var i = 0; i < room2PossibleIDs.length; i++){
            if (room2PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 3){
        for (var i = 0; i < room3PossibleIDs.length; i++){
            if (room3PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 4){
        for (var i = 0; i < room4PossibleIDs.length; i++){
            if (room4PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 5){
        for (var i = 0; i < room5PossibleIDs.length; i++){
            if (room5PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 6){
        for (var i = 0; i < room6PossibleIDs.length; i++){
            if (room6PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 7){
        for (var i = 0; i < room7PossibleIDs.length; i++){
            if (room7PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 8){
        for (var i = 0; i < room8PossibleIDs.length; i++){
            if (room8PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 9){
        for (var i = 0; i < room9PossibleIDs.length; i++){
            if (room9PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 10){
        for (var i = 0; i < room10PossibleIDs.length; i++){
            if (room10PossibleIDs[i] == whateverID){return true;}
        }
    }
    if (roomNum == 11){
        for (var i = 0; i < room11PossibleIDs.length; i++){
            if (room11PossibleIDs[i] == whateverID){return true;}
        }
    }
    return false;
}
