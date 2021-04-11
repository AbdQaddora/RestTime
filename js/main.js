// var
var option = {
    animation: true,
    delay: 3000
};
var toastHtmlElemant = document.getElementById("toastBox");
var toastElemant = new bootstrap.Toast(toastHtmlElemant, option);


// show and hide toast
function toastShow() {
    toastElemant.show();
}
function toastHide() {
    toastElemant.hide();
}


// form submit

var my_form = document.getElementById("my_form"), button = document.getElementById("my_button");
my_form.onsubmit = function () {
    return false;
}



var number = document.getElementById("floatingInput"), check = document.getElementById("flexCheckDefault"), select = document.getElementById("select");
button.onclick = function () {
    toastHide();
    if (number.value != "" && select.value != "مكان الإقامة الحالي" && check.checked) {
        if (numberValidation(number.value)) {
            emptyInput();   
            console.log(select.value);
            button.setAttribute("data-bs-dismiss", "modal");
            button.click();
            document.querySelector(".toast-body").innerHTML = "تم تأكيد حجزك بنجاح";
            number.style = "border-color: rgb(206, 212, 218) ";
            toastShow();
            setTimeout(function () {
                my_form.submit();
            }, 5000);
            return false;
        } else {
            emptyInput();
            number.style = "border: 2px solid red;";
            document.querySelector(".toast-body").innerHTML = "يرجى إدخال رقم هاتف سعودي صالح";
            toastShow();
        }

    } else {
        emptyInput();
        console.log("1");
    }
}

function emptyInput() {
    if (number.value == "") {
        number.style = "border: 2px solid red;";
    } else {
        number.style = "border-color: rgb(206, 212, 218) ";
    }

    if (select.value == "مكان الإقامة الحالي") {
        select.style = "border: 2px solid red;";
    } else {
        select.style = "border-color: rgb(206, 212, 218) ";
    }


    if (!check.checked) {
        check.style = "border: 2px solid red;";
    } else {
        check.style = "border: rgb(206, 212, 218)";
    }
}

function numberValidation(input) {
    var str = input;
    str = str.replace(/ /g, '');
    var patt = new RegExp(/^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/);
    var res = patt.test(str);
    return res;
}




