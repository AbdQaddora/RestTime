var option = {
    animation: true,
    delay: 5000
};

function toastShow() {
    var toastHtmlElemant = document.getElementById("toastBox");
    var toastElemant = new bootstrap.Toast(toastHtmlElemant, option);
    toastElemant.show();
}

var my_form = document.getElementById("my_form"), button = document.getElementById("my_button");
my_form.onsubmit = function () {
    return false;
}
var number = document.getElementById("floatingInput"), check = document.getElementById("flexCheckDefault"), select = document.getElementById("select");


button.onclick = function () {
    if (number.value != "" && select.value != "مكان الإقامة الحالي" && check.checked) {
        if (!isNaN(number.value)) {
            document.querySelector(".toast-body").innerHTML = "تم تأكيد حجزك بنجاح";
            toastShow();
            setTimeout(function () {
                my_form.submit();
            }, 5000);
            return false;
        } else {
            document.querySelector(".toast-body").innerHTML = "يرجى إدخال رقم هاتف صالح";
            toastShow();
        }

    } else {
        document.querySelector(".toast-body").innerHTML = "يرجى ملء كافة الحقول";
        toastShow();
    }
}


