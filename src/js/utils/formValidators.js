/////////////////////////
// VALIDADOR DE NOMBRE //
/////////////////////////

function nameValidator(input) {
    $(input).blur(function () {
        if ($(input).val() === "" ||
            $(input).val().indexOf('0') >= 0 ||
            $(input).val().indexOf('1') >= 0 ||
            $(input).val().indexOf('2') >= 0 ||
            $(input).val().indexOf('3') >= 0 ||
            $(input).val().indexOf('4') >= 0 ||
            $(input).val().indexOf('5') >= 0 ||
            $(input).val().indexOf('6') >= 0 ||
            $(input).val().indexOf('7') >= 0 ||
            $(input).val().indexOf('8') >= 0 ||
            $(input).val().indexOf('9') >= 0) {
            $(input).addClass("is-invalid");
        } else {
            $(input).removeClass("is-invalid");
            $(input).addClass("is-valid")
        }
    });
}

////////////////////////
// VALIDADOR DE EMAIL //
////////////////////////

function emailValidator(input) {
    $(input).blur(function () {
        if ($(input) !== "" && $(input).val().indexOf('@') >= 0 && $(input).val().indexOf('.') >= 0) {
            $(input).removeClass("is-invalid");
            $(input).addClass("is-valid");
        } else {
            $(input).addClass("is-invalid");
            $(input).removeClass("is-valid");
        }
    });
}

//////////////////////////////
// VALIDADOR DE COMENTARIOS //
//////////////////////////////

function commentValidator(input) {
    $(input).blur(function () {
        if ($(input).val() !== '') {
            $(input).removeClass("is-invalid");
            $(input).addClass("is-valid");
        } else {
            $(input).addClass("is-invalid");
            $(input).removeClass("is-valid");
        }
    });
}

export {
    nameValidator,
    emailValidator,
    commentValidator
}