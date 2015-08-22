var $ = function (id) {
    return document.getElementById(id);
}

var joinList = function () {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var isValid = true;

    //validate the first entry
    if (emailAddress1 == "") {
        $("email_address1_error").firstChild.nodeValue = "This field is required";
        isValid = false;
    } else {
        $("email_address1_error").firstChild.nodeValue = "";
    }

    //validate the second entry
    if  (emailAddress2 == ""){
        $("email_address2_error").firstChild.nodeValue = "This field is required";
        isValid = false;
    } else if (emailAddress2 != emailAddress1) {
        $("email_address2_error").firstChild.nodeValue = "This field must match the first entry";
        isValid = false;
    } else {
        $("email_address2_error").firstChild.nodeValue = "";
    }

    //validate the first name
    if (firstName == "") {
        $("first_name_error").firstChild.nodeValue = "This entry is required";
        isValid = false;
    } else {
        $("first_name_error").firstChild.nodeValue = "";
    }

    if (isValid) {
        $("email_form").submit();
    }
}

window.onload = function () {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
}