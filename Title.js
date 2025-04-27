/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Title extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1 (1)", "./Title/costumes/1 (1).svg", {
        x: 96.81594848632812,
        y: 35.81024932861328,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceiveStart() {
    this.direction = 90;
    this.goto(0, 50);
    this.effects.clear();
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.toNumber(this.stage.vars.game) === 1) {
        yield* this.wait(0.5);
        this.visible = false;
      }
      yield;
    }
  }
}
