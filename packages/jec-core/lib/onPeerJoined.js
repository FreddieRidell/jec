"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onPeerJoined(_, peer) {
	var peerId = escape(peer.id.toString("ascii"));

	this.setState({
		network: (0, _defineProperty3.default)({}, peerId, true)
	});
}

exports.default = onPeerJoined;