"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.show = show;
exports.hide = hide;
exports.destroy = destroy;

var _actionTypes = require("./actionTypes");

function show(modal) {
  var props =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return {
    type: _actionTypes.SHOW,
    payload: {
      modal: modal,
      props: props
    }
  };
}

function hide(modal) {
  return {
    type: _actionTypes.HIDE,
    payload: {
      modal: modal
    }
  };
}

function destroy(modal) {
  return {
    type: _actionTypes.DESTROY,
    payload: {
      modal: modal
    }
  };
}
