$(document).ready(function () {
    //    $("#existsModal").modal('show');
              
    LoadCountries();

    $("#ddlCity").change(function () {
        $(".lblError").hide();
    });

    $("#ddlCountry").change(function () {
         $(".lblError").hide();
        if ($(this).val() == '3') {
            $.ajax({
                url: 'NewsLetterInformation.aspx/GetStates',
                // data: JSON.stringify({ cityId: $(this).val() }),
                contentType: 'application/json; charset=utf-8',
                datatype: 'json',
                type: 'post',
                success: function (response) {
                    if (response.d[0] == '1') {

                        var items = $.parseJSON(response.d[1]);
                        $("#ddlCity").empty();
                        $.each(items, function (i) {
                            $("#ddlCity").append($('<option></option>').val(items[i].ItemID).html(items[i].Description));
                        });
                        $('#cmb_selectCity').removeAttr('hidden');
                        $('#cmb_selectCity').show();

                    }
                }
            });
        }
        else
            $('#cmb_selectCity').hide();
    });

    $(".lblError").parent().keyup(function () {
        $(".lblError").hide();
    });

    $("#chkTerms").click(function () {
         $("#lblTerms").hide();
        return;
    });


    $("#btnSend").click(function (e) {
        e.preventDefault();
        $(".lblError").hide();
        var name = $("#txtName").val();
        var lastName = $("#txtLastName").val();
        var email = $("#txtEmail").val();
        var countryId = $("#ddlCountry").val();
        var stateId = 0;

        if (name == '') {
            $("#lblName").removeAttr('hidden');
            $("#lblName").show();
            return;
        }
        else if (lastName == '') {
            $("#lblLastName").removeAttr('hidden');
            $("#lblLastName").show();
            return;
        }
        else if (email == '') {
            $("#lblEmail").removeAttr('hidden');
            $("#lblEmail").show();
            return;
        }
        else if (countryId == '-1') {
            $("#lblCountry").removeAttr('hidden');
            $("#lblCountry").show();
            return;
        }

        if (countryId == 3) {
            stateId = $("#ddlCity").val();
            if (stateId == '-1') {
                $("#lblState").removeAttr('hidden');
                $("#lblState").show();
                return;
            }
        }
        if (!$("#chkTerms").is(':checked')) {
             $("#lblTerms").removeAttr('hidden');
            $("#lblTerms").show();
            return;
        }

        $.ajax({
            url: 'NewsLetterInformation.aspx/SaveInfo',
            data: JSON.stringify({ name: name, lastName: lastName, email: email, countryId: countryId, stateId: stateId }),
            contentType: 'application/json; charset=utf-8',
            datatype: 'json',
            type: 'post',
            success: function (response) {
                var data = response.d.split('|');
                if (data[1] == '1') {
                    //$("#welcomeModal").modal('show');
                    new bootstrap.Modal('#welcomeModal').show()
                }
                else
                    //$("#existsModal").modal('show');
                    new bootstrap.Modal('#existsModal').show()
            }
        });

    });
    $("#btnClose").click(function () {
        $("#welcomeModal").modal('hide');
        window.location.href = "../ediciones.html";
    });            
});



function buildCountries (responsedata) {
    var data = responsedata.d.split('|');
    if (data[0] == '1') {

        var items = $.parseJSON(data[1]);
        $("#ddlCountry").empty();
        $.each(items, function (i) {
            $("#ddlCountry").append($('<option></option>').val(items[i].ItemID).html(items[i].Description));
        });
    }
}


function LoadCountries() {
    $.ajax({
        url: 'NewsLetterInformation.aspx/GetCountries',
        // data: JSON.stringify({ stateID: $(this).val() }),
        contentType: 'application/json; charset=utf-8',
        datatype: 'json',
        type: 'post',
        success: function (response) {
            buildCountries(response)
            },
        error: function (response) {
            buildCountries(countriesjson)
            //alert(response.text);
        }
    });

}