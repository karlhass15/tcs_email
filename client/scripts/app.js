
$(document).ready(function(){
    $("#contactForm").submit(function(event){
        event.preventDefault();
        var values = {};

        //$.each($(this).serializeArray(), function(i, field){
        //    //do I need to change field.value????????
        //    values[field.name] = field.value;
        //});
    });

    $("#contactForm").submit(addContact);
});

function addContact(){
    event.preventDefault();
    var values = {};

    $.each($(this).serializeArray(), function(i, field){
        values[field.name] = field.value;

    });
    $(this).find("input[type=text]").val("");
    $(this).find("textarea").val("");

    $.ajax({
        type: "POST",
        url: "/contact",
        data: values,
        success: function(data){
        }
    });
}

