const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = ()=>{
    //setting cookie for a month, after 1 month cookie will be expired automatically
    document.cookie = "CookieBy=TestingAd; max-age="+60*60*24*30;
    if(document.cookie){// se quello sopra si setta
        cookieBox.classList.add("hide"); //nascondi il box quando vengono settatu i cookie
    }else{
        alert("Cookie can't be set"); // se non vengono settati mostra errore
    }
}

let checkCookie = document.cookie.indexOf("CookieBy=TestingAd");
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");