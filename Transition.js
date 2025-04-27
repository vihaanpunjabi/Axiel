/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Transition extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("shutter3", "./Transition/costumes/shutter3.svg", {
        x: 434.885498046875,
        y: 434.885498046875,
      }),
      new Costume("Blank", "./Transition/costumes/Blank.svg", { x: 0, y: 0 }),
      new Costume("Screen", "./Transition/costumes/Screen.svg", {
        x: 240,
        y: 180,
      }),
    ];

    this.sounds = [new Sound("pop", "./Transition/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "1" }, this.whenIReceive1),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenIReceive1() {
    this.effects.clear();
    this.effects.fisheye = 0;
    this.costume = "Blank";
    this.size = 1000;
    this.costume = "shutter3";
    this.moveAhead();
    this.visible = true;
    this.goto(0, 0);
    while (!(this.compare(101, this.size) > 0)) {
      if (this.compare(this.size, 100) > 0) {
        this.costume = "Blank";
      } else {
        this.costume = "Screen";
      }
      this.size += (0 - this.size) / 6.5;
      this.costume = "shutter3";
      yield;
    }
    for (let i = 0; i < 15; i++) {
      this.effects.fisheye -= 5.5;
      yield;
    }
    yield* this.wait(1);
    for (let i = 0; i < 15; i++) {
      this.effects.fisheye += 5.5;
      yield;
    }
    this.stage.vars.easing2 = 1;
    for (let i = 0; i < 75; i++) {
      if (this.compare(this.size, 100) > 0) {
        this.costume = "Blank";
      } else {
        this.costume = "Screen";
      }
      this.size += this.toNumber(this.stage.vars.easing2);
      this.costume = "shutter3";
      this.stage.vars.easing2 += 10;
      yield;
    }
    this.deleteThisClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    this.deleteThisClone();
  }
}
