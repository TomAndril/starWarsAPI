/////////////////////////
// VALIDADOR DE NOMBRE //
/////////////////////////

function nameValidator(input) {
    $(input).blur(function () {
        if (input.val() === "" ||
            input.val().indexOf('0') >= 0 ||
            input.val().indexOf('1') >= 0 ||
            input.val().indexOf('2') >= 0 ||
            input.val().indexOf('3') >= 0 ||
            input.val().indexOf('4') >= 0 ||
            input.val().indexOf('5') >= 0 ||
            input.val().indexOf('6') >= 0 ||
            input.val().indexOf('7') >= 0 ||
            input.val().indexOf('8') >= 0 ||
            input.val().indexOf('9') >= 0) {
            $(input).addClass("is-invalid");
            submitButtonValidatorBad()
        } else {
            $(input).removeClass("is-invalid");
            $(input).addClass("is-valid")
            submitButtonValidatorGood()
        }
    });
}

////////////////////////
// VALIDADOR DE EMAIL //
////////////////////////

function emailValidator(input) {
    $(input).blur(function () {
        if (input.val() !== "" && input.val().indexOf("@") >= 0 && input.val().indexOf(".") >= 0) {
            $(input).removeClass("is-invalid");
            $(input).addClass("is-valid");
            submitButtonValidatorGood()
        } else {
            $(input).addClass("is-invalid");
            submitButtonValidatorBad()
        }
    });
}

///////////////////////////////
// VALIDADOR DE BOTON ENVIAR //
///////////////////////////////

function submitButtonValidatorGood() {
    if ($(firstNameInput).hasClass("is-valid") && $(dniInput).hasClass('is-valid') && $(emailInput).hasClass('is-valid')) {
        $(submitButton).removeAttr('disabled');
    }
}

function submitButtonValidatorBad() {
    if ($(firstNameInput).hasClass('is-invalid') || $(dniInput).hasClass('is-invalid')) {
        $(submitButton).attr('disabled', true);
    }
}

export {
    nameValidator,
    emailValidator,
    submitButtonValidatorBad,
    submitButtonValidatorGood
}