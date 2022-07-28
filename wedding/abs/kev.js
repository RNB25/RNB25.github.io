const scriptURL = 'https://script.google.com/macros/s/AKfycbyIQ1WlmLJWsftxXvSZ40YIilGm7DrfKvCerSp2rHYNmy8FtghFe7g7npJCD9FrIKby/exec'
const form = document.forms['Google-sheet']

function printError(Id,Msg){
    document.getElementById(Id).innerHTML = Msg;
}

function validateForm(){
    var fname = document.Form.fname.value;
    var lname = document.Form.lname.value;
    var email = document.Form.email.value;
    var phone = document.Form.phone.value;
    var p8s = document.Form.p8s.value;
    var dmlocal = document.Form.dmlocal.value;
    var address = document.Form.address.value;
    var message = document.Form.message.value;

    var fnameErr = lnameErr = emailErr = phoneErr = p8sErr = datetimelocalErr = addressErr = messageErr = true;

    if(fname = ""){
        printError("fnameErr", "please enter your first name");
        var elem = document.getElementById("fname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(fname) === false) {
            printError("fnameErr", "please enter a valid first name");
            var elem = document.getElementById("fname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("fnameErr", "");
            fname = false;
            var elem = document.getElementById("fname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }

    if(lname = ""){
        printError("lnameErr", "please enter your last name");
        var elem = document.getElementById("lname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(lname) === false) {
            printError("lnameErr", "please enter a valid last name");
            var elem = document.getElementById("lname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("lnameErr", "");
            lname = false;
            var elem = document.getElementById("lname");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }

    if(email = ""){
        printError("emailErr", "please enter your email address");
        var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "please enter a valid email address");
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("emailErr", "");
            email = false;
            var elem = document.getElementById("email");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }

    if(phone = ""){
        printError("phoneErr", "please enter your phone number");
        var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(phone) === false) {
            printError("phoneErr", "please enter a valid 10 digit phone number");
            var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("phoneErr", "");
            phone = false;
            var elem = document.getElementById("phone");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }

    if(address = ""){
        printError("addressErr", "please enter your address");
        var elem = document.getElementById("address");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(address) === false) {
            printError("addressErr", "please enter a address");
            var elem = document.getElementById("address");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("addressErr", "");
            address = false;
            var elem = document.getElementById("address");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }

    if(message = ""){
        printError("messageErr", "please enter your message");
        var elem = document.getElementById("message");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
    }else{
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(message) === false) {
            printError("messageErr", "please enter a message");
            var elem = document.getElementById("message");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }else{
            printError("messageErr", "");
            message = false;
            var elem = document.getElementById("message");
            elem.classList.add("input-2");
            elem.classList.remove("input-1");
        }
    }


    if(p8s = "Select"){
        printError("p8sErr", "please select your paket");
        var elem = document.getElementById("p8s");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else{
        printError("p8sErr", "");
        p8sErr = false;
        var elem = document.getElementById("p8s");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    if(dmlocal = ""){
        printError("datetimelocalErr", "please select your date and time");
        var elem = document.getElementById("dmlocal");
            elem.classList.add("input-4");
            elem.classList.remove("input-3");
    }else{
        printError("datetimelocalErr", "");
        datetimelocalErr = false;
        var elem = document.getElementById("dmlocal");
        elem.classList.add("input-3");
        elem.classList.remove("input-4");
    }

    if((fnameErr || lnameErr || emailErr || phoneErr || p8sErr || datetimelocalErr || addressErr || messageErr) == true){
        return false;
    }
    location.href="homepage";
    return true;

    };
