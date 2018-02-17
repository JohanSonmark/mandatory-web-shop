

function validateName(){
    let name = document.getElementById("commentFirstName").value;
    let lastname = document.getElementById("commentLastName").value;


    if(name.length === 0 || lastname.length === 0)
    {
        producePrompt("Både för och efternamn tack!", "commentFirstNamePrompt", "red");
        return false;
    }


    producePrompt("Välkommen " + name + " " + lastname + "!", "commentFirstNamePrompt", "green");
    return true;
}

function validateEmail(){
    let email = document.getElementById("commentEmail").value;

    if(email.indexOf("@") === -1) {
        producePrompt("Fullstädig Email Address!", "commentEmailPrompt", "red");
        return false;
    }

    producePrompt("Godkänd Email Address.", "commentEmailPrompt", "green");
    return true;
}

function validatePhone(){
    let phone = document.getElementById("commentPhoneNumber").value;

    if(phone.length === 0)
    {
        producePrompt("Tele-nr är ett krav!", "commentPhoneNumberPrompt", "red");
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/))
    {
        producePrompt("Ett nummer är 10 sifror!", "commentPhoneNumberPrompt", "red");
        return false;
    }


    producePrompt("Godkänd Phone Number.", "commentPhoneNumberPrompt", "GREEN");
    return true;
}

function validateAddress(){
    let address = document.getElementById("commentStreetAddress").value;

    if(address.length === 0){
        producePrompt("Address är ett krav!", "commentAddressPrompt", "red");
        return false;
    }

    producePrompt("Godkänd Address.", "commentAddressPrompt", "Green");
    return true;
}

function validateZipCode(){
    let zipcode = document.getElementById("commentZipCode").value;

    if(zipcode.length === 0){
        producePrompt("Zip Code är ett krav!", "commentZipPrompt", "red");
        return false;
    }

    if(zipcode.match(/^[a-zA-Z]+$/)){
        producePrompt("Ändast sifror!", "commentZipPrompt", "red")
        return false;
    }

    producePrompt("Godkänd Zip Code.", "commentZipPrompt", "Green");
    return true;
}

function validateCity(){
    let city = document.getElementById("commentCity").value;

    if(city.length === 0){
        producePrompt("Vilen stad är ett krav!", "commentCityPrompt", "red");
        return false;
    }

    producePrompt("Godkänd Stad.", "commentCityPrompt", "green");
    return true;
}

function validateCommentForm(){

    if(!validateName() || !validateEmail() || !validatePhone() || !validateAddress() || !validateZipCode() || !validateCity())
    {
        jsShow("commentPrompt");
        producePrompt("Måste fylla i fromeläret innan du kan skicka!", "commentPrompt", "red");
        setTimeout(function(){jsHide("commentPrompt");}, 2000);
    }
    else{
        jsShow("commentPrompt");
        producePrompt("Formeläret är skickat.", "commentPrompt", "green");
        setTimeout(function(){jsHide("commentPrompt");}, 2000)
    }
}

function jsShow(id){
    document.getElementById(id).style.display = "block";
}

function jsHide(id){
    document.getElementById(id).style.display = "none";
}

function producePrompt(message, promptLocation, color){
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
}