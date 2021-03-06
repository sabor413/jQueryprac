﻿$(document).ready(function () {
    $("#join_list").click(function () {
        var emailAddress1 = $("#email_address1").val();
        var emailAddress2 = $("#email_address2").val();
        var isValid = true;

        // validate the first email address
        if (emailAddress1 == "") {
            $("#email_address1").next().text("This field id required.");
            isValid = false;
        } else {
            $("#email_address1").next().text("");
        }

        // validate the second email address
        if (emailAddress2 == "") {
            $("#email_address2").next().text("This field id required.");
            isValid = false;
        } else if (emailAddress1 != emailAddress2) {
            $("#email_address2").next().text("This entry must equal the first entry.");
        } else {
            $("#email_address2").next().text("");
        }

        // validate the first name address
        if ($("#first_name").val() == "") {
            $("#first_name").next().text("This field id required.");
            isValid = false;
        } else {
            $("#first_name").next().text("");
        }

        // submit the form if all entries are valid
        if (isValid) {
            $("#email_form").submit();
        }
    }); // end click
    $("#email_address1").focus();
}); // end ready