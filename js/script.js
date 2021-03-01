function updateCountryView() {
    var ddCountry = document.getElementById("ddCountry");
    var divCountry = document.getElementById("divCountry");

    if (ddCountry.value == "Yes"){
        divCountry.classList.remove("invisible");
    }
    else{
        divCountry.classList.add('invisible');
    }
}

function validateForm(){
    
    var DoB = document.querySelector("#txtDoB");
    var divDoBError = document.querySelector("#divDoBError");
    var isFormValid = true;
    if(DoB.value == ''){
        //show error
        divDoBError.classList.remove("invisible");
        divDoBError.innerHTML = "The Date of Birth cannot be empty.";
        DoB.classList.add("hasError");
        isFormValid = false;
    }
    else {
        var DoBDate = new Date(DoB.value);
        var todayDate = new Date();
        
        if(DoBDate >= todayDate){
            //show error
            divDoBError.classList.remove("invisible");
            divDobError.innerHRML = "The Date of Birth must be before today.";
            DoB.classList.add("hasError");
            isFormValid = false;
        }
        else {
            divDoBError.classList.add("invisible");
            divDobError.innerHRML = "";
            DoB.classList.remove("hasError");
        }

    }

    
    //second check
    var ddCountry = document.querySelector('#ddCountry');
    if(ddCountry.value == "Yes") {
        var txtCountry = document.querySelector('#txtCountry');
        if(txtCountry.value == '') {
            document.querySelector('#divCountryError').classList.remove("invisible");
            txtCountry.classList.add("hasError");
            isFormValid = false;
        }
        else {
            document.querySelector('#divCountryError').classList.add('invisible');
            txtCountry.classList.remove("hasError");
        }
    }


    //third check
    var elements = document.getElementsByTagName("input")
    var invalidChars = ['&', '<', '>', '#', '!', '`', '"', '~'];
    for(let i = 0; i < elements.length; i++){
        for(let j = 0; j < invalidChars.length; j++){
            if(elements[i].value.indexOf(invalidChars[j]) != -1) {
                elements[i].classList.add("hasError");
                isFormValid = false;
            }
        }
    }





    return isFormValid;   
}