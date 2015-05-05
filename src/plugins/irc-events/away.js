var _ = require("lodash");
var Msg = require("../../models/msg");

module.exports = function(irc, network) {
	var client = this;
	irc.on("away", function(data) {
		var from = data.nick;
		if (from == irc.me) {
			var lobby = network.channels[0];
			var msg = new Msg({
				type: Msg.Type.WHOIS,
				text: data.message
			});
			lobby.messages.push(msg);
			client.emit("msg", {
				chan: lobby.id,
				msg: msg
			});
		}
	});
};
