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



var number = document.getElementById("floatingInput"), check = document.getElementById("flexCheckDefault"),
 selectPlace = document.getElementById("selectPlace") , selectDoctor = document.getElementById("selectDoctor") , selectSession = document.getElementById("selectSession");
button.onclick = function () {
    toastHide();
    if (number.value != "" && selectPlace.value != "مكان الإقامة الحالي" && selectDoctor.value != "الطبيب المسؤول عن الجلسة" && selectSession.value != "زمن الجلسة" && check.checked) {
        if (numberValidation(number.value)) {
            emptyInput();   
            button.setAttribute("data-bs-dismiss", "modal");
            button.setAttribute("data-bs-target", "#staticBackdrop");
            button.click();
            document.querySelector(".toast-body").innerHTML = "تم تأكيد حجزك بنجاح";
            number.style = "border-color: rgb(206, 212, 218) ";
            toastShow();
            // setTimeout(function () {
            //     my_form.submit();
            // }, 5000);
            // return false;
        } else {
            emptyInput();
            var errorText = document.querySelector("#errorText");
            errorText.style = " display: block !important;";
            number.style = "border-color: #dc3545;";
        }

    } else {
        emptyInput();
        console.log("1");
    }
}

function emptyInput() {
    if (number.value == "") {
        number.style = "border-color: #dc3545;";
    } else {
        number.style = "border-color: #ffffff00;";
    }

    if (selectPlace.value == "مكان الإقامة الحالي") {
        selectPlace.style = "border-color: #dc3545;";
    } else {
        selectPlace.style = "border-color: #198754;";
    }

    if (selectDoctor.value == "الطبيب المسؤول عن الجلسة") {
        selectDoctor.style = "border-color: #dc3545;";
    } else {
        selectDoctor.style = "border-color: #198754;";
    }

    if (selectSession.value == "زمن الجلسة") {
        selectSession.style = "border-color: #dc3545;";
    } else {
        selectSession.style = "border-color: #198754;";
    }


    if (!check.checked) {
        check.style = "border-color: #dc3545;";
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

// For move active class
function moveActive(id){
    var array = document.querySelectorAll(".nav-link");
    array.forEach(element => {
        element.classList.remove("active");
    });
    document.querySelector("#nav" + id).classList.add("active");
}



