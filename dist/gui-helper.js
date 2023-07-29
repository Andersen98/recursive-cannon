"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

  // code/gui-helper.ts
  function addButton(txt, p, f) {
    const btn = add([
      rect(300, 80, { radius: 8 }),
      pos(p),
      area(),
      scale(1),
      anchor("center"),
      outline(4)
    ]);
    btn.add([
      text(txt),
      anchor("center"),
      color(0, 0, 0)
    ]);
    btn.onHoverUpdate(() => {
      const t = time() * 10;
      btn.color = hsl2rgb(t / 10 % 1, 0.6, 0.7);
      btn.scale = vec2(1.2);
      setCursor("pointer");
    });
    btn.onHoverEnd(() => {
      btn.scale = vec2(1);
      btn.color = rgb();
    });
    btn.onClick(f);
    return btn;
  }
  __name(addButton, "addButton");
})();
//# sourceMappingURL=gui-helper.js.map
