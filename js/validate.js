const validStates = [
    'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY'
];

function initValidation(formName) {
    $('#phone').usPhoneFormat({format: 'xxx-xxx-xxxx',});  
    let $form = $(formName);
    $(':input').change(function(event) {
        validateForm();
        if(!this.checkValidity()) {
            $(this).addClass("was-validated")
        }
    })
    $("#mainForm").submit(function(event) {
        $form = $("#visitorForm");
        formElement = $form.get(0);
        event.preventDefault();
        event.stopPropagation();
        validateForm();
        if (!formElement.checkValidity()) {
            $(":input").addClass("was-validated")
        }
        else {
            // my work
            $("#mainForm").addClass("hidden");
            $("#submitMessage").removeClass("hidden");
            submitForm()
        }
    })
}

function validateForm() {
    validateState("#state", "Please enter a valid two character state code, e.g. UT");
    validateCheckboxGroup("#newspaper", "you must select at least one!");
}

function validateState(id, message) {
    $element = $(id);
    let valid = false;
    // my work
    let inputState = $element.val().toUpperCase();
    for (let state of validStates) {
        if (inputState == state) {
            valid = true;
        }
    }
    setElementValidity(id, valid, message);
}

function validateCheckboxGroup(fieldName, message) {
    let valid = false;
    // my work
    $checkboxes = $("#checkboxes > li > input[type='checkbox']");
    for (let checkbox of $checkboxes) {
        if (checkbox.checked) {
            valid = true;
            break;
        }
    }
    setElementValidity(fieldName, valid, message);
    return valid;
}

function setElementValidity(fieldName, valid, message) {
    let $field = $(fieldName);
    let element = $field.get(0);
    if (valid) {
        element.setCustomValidity('');
    }
    else {
        element.setCustomValidity(message);
    }
}