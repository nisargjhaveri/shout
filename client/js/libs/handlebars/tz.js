Handlebars.registerHelper(
	"tz", function(time) {
		if (time) {
			var utc = moment.utc(time, "DD/MM HH:mm:ss").toDate();
			return moment(utc).format("DD/MM HH:mm");
		} else {
			return "";
		}
	}
);
