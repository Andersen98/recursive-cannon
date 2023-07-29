"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // code/joystick-helper.ts
  function getJoystickInvertedAngle({ x_, y_ }) {
    var y = -y_;
    var x = x_;
    var result = 0;
    if (y < 0) {
      result = 180 / Math.PI * (Math.PI + Math.atan2(-y, -x));
    } else {
      result = 180 / Math.PI * Math.atan2(y, x);
    }
    return result;
  }
  __name(getJoystickInvertedAngle, "getJoystickInvertedAngle");
})();
//# sourceMappingURL=joystick-helper.js.map
