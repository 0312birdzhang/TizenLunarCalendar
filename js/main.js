(function() {
	/**
	 * Back key event handler
	 */
	window.addEventListener('tizenhwkey', function(ev) {
		if (ev.keyName === "back") {
			var current = new Date();
			var year = current.getFullYear();
			var month = current.getMonth()+1;
			var day = current.getDate();
			month = month<10 ? '0'+month : month;
			day = day<10 ? '0'+day : day;
			var current_day = year+'-'+month+'-'+day;
			var selected_day = $("#today_num").html();
			// console.log("current_day:"+current_day);
			// console.log("selected_day:"+selected_day);
			if (current_day == selected_day) {
				//popup
				tau.openPopup("#quit_popup");
			} else {
				// console.log("need go back today");
				$('.today').trigger("tap");
			}
		}
		if (ev.keyName === "menu") {
			console.log("menu key clicked!")
			tau.closePopup();
		}	
	});

}());

