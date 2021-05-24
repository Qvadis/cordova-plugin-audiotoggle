var exec = require('cordova/exec');

exports.BLUETOOTH = 'bluetooth';
exports.INCALL = 'incall';
exports.SPEAKER = 'speaker';
exports.EARPIECE = 'earpiece';
exports.NORMAL = 'normal';
exports.RINGTONE = 'ringtone';

exports.setAudioMode = function (mode) {
	cordova.exec(null, null, 'AudioTogglePlugin', 'setAudioMode', [mode]);
};

exports.displayIOSAudioRoutingComponent = function () {
  cordova.exec(null, null, 'AudioTogglePlugin', 'displayIOSAudioRoutingComponent');
};

exports.hasAudioRoutingOptions = function (callback) {
  cordova.exec(callback, null, 'AudioTogglePlugin', 'checkAudioRoutingOptions');
};

exports.setBluetoothScoOn = function (toggle) {
	cordova.exec(null, null, 'AudioTogglePlugin', 'setBluetoothScoOn', [toggle]);
};

exports.setSpeakerphoneOn = function (toggle) {
	cordova.exec(null, null, 'AudioTogglePlugin', 'setSpeakerphoneOn', [toggle]);
};

exports.getOutputDevices = function (callback) {
	cordova.exec(callback, null, 'AudioTogglePlugin', 'getOutputDevices', []);
};

exports.on = function (eventName, callback) {
   cordova.exec(callback, null, 'AudioTogglePlugin', 'registerListener', [eventName]);
};

exports.getAudioMode = function (callback) {
  cordova.exec(callback, null, 'AudioTogglePlugin', 'getAudioMode', []);
};

exports.getAudioSystem = function (callback) {
  cordova.exec(callback, null, 'AudioTogglePlugin', 'getAudioSystem', []);
};

exports.isBluetoothScoOn = function (callback) {
	cordova.exec(callback, null, 'AudioTogglePlugin', 'isBluetoothScoOn', []);
};

exports.isSpeakerphoneOn = function (callback) {
	cordova.exec(callback, null, 'AudioTogglePlugin', 'isSpeakerphoneOn', []);
};

exports.hasBuiltInEarpiece = function(successCb, errorCb) {
	cordova.exec(successCb, errorCb, 'AudioTogglePlugin', 'hasBuiltInEarpiece');
};

exports.hasBuiltInSpeaker = function(successCb, errorCb) {
	cordova.exec(successCb, errorCb, 'AudioTogglePlugin', 'hasBuiltInSpeaker');
};