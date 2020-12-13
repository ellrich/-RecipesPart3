$(document).ready(function(){
    initValidation("#visitorForm");
    $("#navHome").click(function() {
        show($("#mainHome"));
    })
    $("#navWings").click(function() {
        show($("#mainWings"));
    });
    $("#navBreadsticks").click(function() {
        show($("#mainBreadsticks"));
    });
    $("#navTruffles").click(function() {
        show($("#mainTruffles"));
    });
    $("#navRice").click(function() {
        show($("#mainRice"));
    });
    $("#navVisitor").click(function() {
        show($("#mainVisitors"));
    });
    $("#btnNewVistor").click(function() {
        clearForm();
        show($("#mainForm"));
    });
    $("#navVisitor").click(loadVisitors());
    $("visitorForm").submit(submitForm());
    $("")
})
 
function loadVisitors() {
    //showVisitors();
    renderTable("vistorsTable", getVisitors());
    showTable();
 }
 
function submitForm() {
    //called on form submit. Gets contents of form, creates visitor object, 
    firstName = $("#first-name").val();
    lastName = $("#last-name").val();
    address = $("#address").val();
    city = $("#city").val();
    state = $("#state").val();
    zip = $("#zip").val();
    phone = $("#phone").val();
    email = $("#email").val();
    internet = $("#internet").is(":checked");
    friends = $("#friend").is(":checked");
    newsPaper = $("#newspaper").is(":checked");
    comment = $("#comment").val();
    id = firstName + lastName;
    let visitor = new Visitor(id, firstName, lastName, address, city, state, zip, phone, email, internet, friends, newsPaper, comment)
    modelAddVisitor(visitor);
    renderTable("vistorsTable", getVisitors());
}
submitForm();
 
function addVisitor(visitor) {
    //called on 'click' of 'New Visitor' button 
    clearForm();
    showForm();
}
 
function deleteVisitor(id) {
    //called on 'click' of 'delete' icon in visitor list 
    modelDeleteVisitor(id);
    renderTable("vistorsTable", getVisitors());
    showTable();
}