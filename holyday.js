let inputYear = document.getElementById("year").value;
inputYear = Number(inputYear);

if(typeof inputYear === "number"){
    document.getElementById("ወንጌላዊBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let year_remainder = (inputYear + 5500) % 4;
        switch(year_remainder){
            case 1:
                document.getElementById("ወንጌላዊpara").textContent = "ማቴዎስ";
                break
            case 2:
                document.getElementById("ወንጌላዊpara").textContent = "ማርቆስ";
                break
            case 3:
                document.getElementById("ወንጌላዊpara").textContent = "ሉቃስ";
                break
            case 0:
                document.getElementById("ወንጌላዊpara").textContent = "ዮሐንስ";
                break
        }
    


    }
    document.getElementById("ባሕትBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let fourth_year_remainder = Math.floor((inputYear + 5500) / 4);
        let newDay = (inputYear + 5500 + fourth_year_remainder) % 7;
        switch(newDay){
            case 0:
                document.getElementById("ባሕትpara").textContent = "ሰኞ ";
                break
            case 1:
                document.getElementById("ባሕትpara").textContent = "ማክሰኞ ";
                break
            case 2:
                document.getElementById("ባሕትpara").textContent = "ረቡዕ ";
                break
            case 3:
                document.getElementById("ባሕትpara").textContent = "ሐሙስ ";
                break
            case 4:
                document.getElementById("ባሕትpara").textContent = "ዐርብ ";
                break
            case 5:
                document.getElementById("ባሕትpara").textContent = "ቅዳሜ ";
                break
            case 6:
                document.getElementById("ባሕትpara").textContent = "እሑድ ";
                break
        }
    }
    document.getElementById("አበቀቴBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        document.getElementById("አበቀቴpara").textContent = 30 - metqRemainder;;
    }
    document.getElementById("መጥቅዕBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        document.getElementById("መጥቅዕpara").textContent = metqRemainder;
    }
    document.getElementById("ጾመ_ነነዌBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder)) / 30);
            let daY = (addholydayofmetqe + metqRemainder) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder) % 30;
            daY = String(daY);
            document.getElementById("ጾመ_ነነዌpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder)) / 30);
            let daY = (addholydayofmetqe + metqRemainder) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder) % 30;
            daY = String(daY);
            document.getElementById("ጾመ_ነነዌpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ዓርባ_ጾምBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 14)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 14) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 14) % 30;
            daY = String(daY);
            document.getElementById("ዓርባ_ጾምpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 14)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 14) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 14) % 30;
            daY = String(daY);
            document.getElementById("ዓርባ_ጾምpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ደብረ_ዘይትBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 41)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 41) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 41) % 30;
            daY = String(daY);
            document.getElementById("ደብረ_ዘይትpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 41)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 41) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 41) % 30;
            daY = String(daY);
            document.getElementById("ደብረ_ዘይትpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ሆሳዕናBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 62)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 62) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 62) % 30;
            daY = String(daY);
            document.getElementById("ሆሳዕናpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 62)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 62) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 62) % 30;
            daY = String(daY);
            document.getElementById("ሆሳዕናpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ስቅለትBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 67)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 67) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 67) % 30;
            daY = String(daY);
            document.getElementById("ስቅለትpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 67)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 67) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 67) % 30;
            daY = String(daY);
            document.getElementById("ስቅለትpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ትነሣዔBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 69)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 69) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 69) % 30;
            daY = String(daY);
            document.getElementById("ትነሣዔpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 69)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 69) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 69) % 30;
            daY = String(daY);
            document.getElementById("ትነሣዔpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ርክበ_ካህናትBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 93)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 93) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 93) % 30;
            daY = String(daY);
            document.getElementById("ርክበ_ካህናትpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 93)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 93) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 93) % 30;
            daY = String(daY);
            document.getElementById("ርክበ_ካህናትpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ዕርገትBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 108)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 108) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 108) % 30;
            daY = String(daY);
            document.getElementById("ዕርገትpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 108)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 108) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 108) % 30;
            daY = String(daY);
            document.getElementById("ዕርገትpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ጰራቅሊጦስBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 118)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 118) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 118) % 30;
            daY = String(daY);
            document.getElementById("ጰራቅሊጦስpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 118)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 118) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 118) % 30;
            daY = String(daY);
            document.getElementById("ጰራቅሊጦስpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ጾመ_ሐዋርያትBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 119)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 119) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 119) % 30;
            daY = String(daY);
            document.getElementById("ጾመ_ሐዋርያትpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 119)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 119) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 119) % 30;
            daY = String(daY);
            document.getElementById("ጾመ_ሐዋርያትpara").textContent = arrayLess[montH] + daY;
        }
    }
    document.getElementById("ጾመ_ድኅነትBtn").onclick = function(){
        let inputYear = document.getElementById("year").value;
        inputYear = Number(inputYear);
        let metqRemainder;
        let medeb = (inputYear + 5500) % 19 === 0 ? metqRemainder = 12 : metqRemainder = ((((((inputYear + 5500) % 19) - 1) * 19) % 30) === 0? 30 : (((((inputYear + 5500) % 19) - 1) * 19) % 30));;
        if(metqRemainder > 14){
            let holydayofmetqe = `መስከረም ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + metqRemainder - 1) % 7;
            let arrayLess = ["ጥር ", "የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 121)) / 30);
            let daY = (addholydayofmetqe + metqRemainder  + 121) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 121) % 30;
            daY = String(daY);
            document.getElementById("ጾመ_ድኅነትpara").textContent = arrayLess[montH] + daY;  
        }
        else{
            let holydayofmetqe = `ጥቅምት ${metqRemainder}`;
            let addholydayofmetqe = (inputYear + 5500 + 30 + metqRemainder - 1) % 7;
            let arrayLess = ["የካቲት ", "መጋቢት ", "ሚያዝያ ", "ግንቦት ", "ሰኔ "];
            let montH = Math.floor(((addholydayofmetqe + metqRemainder + 121)) / 30);
            let daY = (addholydayofmetqe + metqRemainder + 121) % 30 === 0 ? 30 : (addholydayofmetqe + metqRemainder  + 121) % 30;
            daY = String(daY);
            document.getElementById("ጾመ_ድኅነትpara").textContent = arrayLess[montH] + daY;
        }
    }
}
