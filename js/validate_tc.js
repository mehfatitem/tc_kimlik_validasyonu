function isValidTcNo(tcNo){
	var tcNo = $("#tc_no").val().trim();
	var sum = parseInt(tcNo[0]) + parseInt(tcNo[2]) +  parseInt(tcNo[4]) + parseInt(tcNo[6]) + parseInt(tcNo[8]);
	sum = sum * 7;
	var sum2 = parseInt(tcNo[1])+parseInt(tcNo[3])+parseInt(tcNo[5])+parseInt(tcNo[7]);
	sum -= sum2;
	var tenthVal = sum % 10;
	var sum3 = 0;
	for(var i=0;i<10;i++){
		sum3 += parseInt(tcNo[i]);
	}	
	var eleventhVal = sum3 % 10;
	if(tenthVal === parseInt(tcNo[9]) && eleventhVal === parseInt(tcNo[10]))
		return true;
	else
		return false;
}

$(document).ready(function() {
	$("#tc_no").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A, Command+A
            (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
             // Allow: home, end, left, right, down, up
            (e.keyCode >= 35 && e.keyCode <= 40)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
    	}
    	this.value = this.value.replace(/^0+/, '');
	});
	$("#confirm_button").click(function() {
		var tcNo = $("#tc_no").val().trim();
		if(tcNo.length === 0){
			$("#result").html("Lütfen TC kimlik numaranızı giriniz!");
			return false;
		} else if(tcNo.length < 11){
			$("#result").html("TC kimlik numaranız 11 haneli olmalıdır!");
			return false;
		}
		if(isValidTcNo(tcNo))
			$("#result").html("<label style='color:black;font-weight:bold;'>"+ tcNo + "</label>" + " geçerli bir TC kimlik numarasıdır.");
		else
			$("#result").html("<label style='color:black;font-weight:bold;'>"+ tcNo + "</label>" + " geçerli bir TC kimlik numarası değildir!");
	});
});