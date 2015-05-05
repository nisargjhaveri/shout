module.exports = function(network, chan, cmd, args) {
	if (cmd != "back") {
		return;
	}
	var irc = network.irc;
	irc.back();
};
