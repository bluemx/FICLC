$(function(){
		
	$("#TbxNwsEmail").keyup(function(){
		$("#NwsErrorMessage").hide();
	});

	$("#BtnNwsSend").click(function(e){
	
		e.preventDefault();
		
		var lang = "es";
		
		if(Cookies.get('bluelang') != null)
		{
			lang = Cookies.get('bluelang');
		}
		
		if($("#TbxNwsEmail").val().trim() == "")
		{
			if(lang == "es")
			{
				$("#NwsErrorMessage").html("Ingresa un correo electrónico");	
			}
			else{
				$("#NwsErrorMessage").html("Enter an email");
			}
			$("#NwsErrorMessage").show();
			return false;
		}
		
		if(!isValidEmail($("#TbxNwsEmail").val().trim()))
		{
			if(lang == "es")
			{
				$("#NwsErrorMessage").html("El formato del correo no es válido");
			}
			else{
				$("#NwsErrorMessage").html("The email format is not valid");
			}
			$("#NwsErrorMessage").show();
			return false;
		}
		
		if(!$("#ChkBxNwsTerms").is(":checked"))
		{
			if(lang == "es")
			{
				$("#NwsErrorChkMessage").html("Por favor acepta el Aviso de Privacidad");
			}
			else{
				$("#NwsErrorChkMessage").html("Please accept the Privacy Policy");
			}
			$("#NwsErrorChkMessage").show();
			return false;
		}
		
		$("#BtnSubmit").prop("disabled", true);
		
		var tid = "nNnzWHp5Yd9wVdj5f2DBXWxwVEGFCFk5hFG2u3Ug";
		tid = btoa(tid);
		
		var lang = "es";
		
		if(Cookies.get('bluelang') != null)
		{
			lang = Cookies.get('bluelang');
		}
		
		$.ajax({
			url: 'https://ficloscabos.org/Gateway/api/AddNewsLetter',
			data: JSON.stringify({ TokenID: tid, Email: $("#TbxNwsEmail").val().trim(), Lang: lang }),
			contentType: "application/json; charset=utf-8",
			datatype: 'json',
			type: 'post',
			success: function (response)
			{
			 
				if(response.ResultID > 0)
				{
					$("#popup_message_nws").html("<div><img src='https://bluepureloyalty.com/app/images/mail/002-success.png' /></div><span>" + response.Description + "</span><br />");
					$("#NewsletterPopupMessage").show();
					$("#BtnSubmit").prop("disabled", false);
				}
				else
				{
					$("#popup_message_nws").html("<div><img src='https://bluepureloyalty.com/app/images/mail/001-warning.png' /></div><span>" + response.Description + "</span><br />");
					$("#NewsletterPopupMessage").show();
					$("#BtnSubmit").prop("disabled", false);
				}
			}
		});
		
	});
	
	$(".CloseNewsletterPopupMessage").click(function(){
		$("#NewsletterPopupMessage").hide();
		$("#TbxNwsEmail").val("");
		$("#ChkBxNwsTerms").prop("checked", false);
	});
	
	$("#ChkBxNwsTerms").click(function(){
	
		$("#NwsErrorChkMessage").hide();
		
	});
		
	//$("#NewsletterPopupMessage").show();
	
	function isValidEmail(email) {
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(email);
	}
	
});