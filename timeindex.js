function time(){
    const date = new Date();
    let hours = date.getHours();
    let meridiem;
    if(hours < 7){
        hours += 6; 
        meridiem = "ከሌሊቱ ";
    }
    else if(hours > 6 && hours < 19){
        hours -= 6;
        if(hours < 6){
            meridiem = "ከጠዋቱ "
        }
        else{
            meridiem = "ከቀኑ ";
        }
    }
    else{
        hours -= 18;
        meridiem = "ከሌሊቱ ";
    }
    hours = hours.toString().padStart(2, "0");
    let minut = date.getMinutes().toString().padStart(2, "0");
    let sicond = date.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").textContent = ` ${meridiem} ${hours}:${minut}:${sicond}`;
}

time();
setInterval(time, 1000)
