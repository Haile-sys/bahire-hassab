function time(){
    const date = new Date();
    let hours = date.getHours();
    const meridiem = hours > 12 ? 'PM' : 'AM';
    hours = (hours - 12) + 6;
    hours = hours.toString().padStart(2, "0");
    const minut = date.getMinutes().toString().padStart(2, "0");
    const sicond = date.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").textContent = `${hours}:${minut}:${sicond} ${meridiem}`
}

time();
setInterval(time, 1000)