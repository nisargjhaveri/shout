module.exports = function(network, chan, cmd, args) {
	if (cmd != "away") {
		return;
	}
	var irc = network.irc;
	msg = args.join(" ");
	irc.away(msg);
};
