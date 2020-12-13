//renders table from global 'visitors' object array
function renderTable(containerId, visitors) {
    $("#vistorsTable").empty();
    let data = [["Name", "Address", "Phone", "Email", "Actions"]];
    for (i = 0; i < visitors.length; i++) {
        let v = visitors[i]
        let actions = `<a href="#" onClick="confirmDelete(${v.id})">delete</a>`;
        actions += `<span class="smallTab">`;
        actions += `</span><a href="#" onClick="editVisitor(${v.id})">edit</a>`;
        data.push([v.fullName, v.fullAddress, v.phone, v.email, actions]);
    }
    let table = $("<table/>")
    table.attr("id", id);
    let tbody=$("<tbody/>");
    $.each(data, function(rowIdx, r) {
        let row = $("<tr/>");
        $.each(r, function(colIdx, c) { 
            let txt = "<span class='glyphicon glyphicon-edit'></span>"+ c;
            row.append($("<t"+(rowIdx == 0 ?  "h" : "d")+"/>").html(txt));
        });
        tbody.append(row);
    });
    table.append(tbody);
    return $('#' + containerId).append(table);
}

function show(showElement) {
    let articleElements = [
        $("#mainHome"),
        $("#mainWings"),
        $("#mainBreadsticks"),
        $("#mainTruffles"),
        $("#mainRice"),
        $("#mainForm"),
        $("#submitMessage"),
        $("#mainVisitors")
    ]
    articleElements.forEach(el => el.addClass("hidden"));
    showElement.removeClass("hidden");
}

//clears values on inputs so next time form is loaded they don't have old contents
function clearForm() {
    $("#first-name").val("");
    $("#last-name").val("");
    $("#address").val("");
    $("#city").val("");
    $("#state").val("");
    $("#zip").val("");
    $("#phone").val("");
    $("#email").val("");
    $("#internet").prop('checked', false);
    $("#friend").prop('checked', false);
    $("#newspaper").prop('checked', false);
    $("#comment").val("");
}

function confirmDelete(id) {
    v = findVisitor(id);
    if (confirm(`Are you sure you would like to delete ${v.fullName}?`)) {
        modelDeleteVisitor(id);
        renderTable("vistorsTable", getVisitors());
    }
}