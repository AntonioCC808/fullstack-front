// Function to validate form fields
function checker() {
    // Event listener for the form with id "name"
    document.getElementById("form-client").addEventListener("submit", function (event) {
        // Get the value of the "nombre" input field
        let nombreValor = document.getElementById("nombre").value;
        // Get the value of the "apellidos" input field
        let apellidosValor = document.getElementById("apellidos").value;


        // Check if the "nombre" field is empty
        if (nombreValor.trim() === "") {
            // If empty set the label color to red
            document.getElementById("nombre-id").style.color = "red";
            event.preventDefault(); // Prevent the form from being submitted
        } else {
            // If not empty, reset the label color
            document.getElementById("nombre-id").style.color = "";
        }

         // Check if the "apellidos" field is empty
         if (apellidosValor.trim() === "") {
            // If empty set the label color to red
            document.getElementById("apellidos-id").style.color = "red";
            event.preventDefault(); // Prevent the form from being submitted
        } else {
            // If not empty, reset the border color
            document.getElementById("apellidos-id").style.color = "";
        }
    });
};


// Function to validate form fields with jquery
$(function checker_jquery() {
    $("#form-client").submit(function (event) {
        if ($("#nombre").val() === ""){
            event.preventDefault();
            $("#nombre-id").css("color", "red");
        } else {
            // If not empty, reset the border color
            $("#nombre-id").css("color", "");
        }
        if ($("#apellidos").val() === ""){
            event.preventDefault();
            $("#apellidos-id").css("color", "red");
        } else {
            // If not empty, reset the border color
            $("#apellidos-id").css("color", "");
        }
    });
});

function check_availabilty(size_code){
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/checksize",
        data: {
            size: size_code
        },
        success: function (result) {
        $("#resultado_tamano").text(result);
        }
    });
}

$(function a() {
    $("#size").on('change', function() {
        console.log(this.value);
        check_availabilty(this.value)
    });
});

