/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Border extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("stage1", "./Border/costumes/stage1.svg", {
        x: 197.5,
        y: 148.5,
      }),
      new Costume("stage2", "./Border/costumes/stage2.svg", {
        x: 197.706455,
        y: 148.592325,
      }),
      new Costume("stage3", "./Border/costumes/stage3.svg", {
        x: 197.706455,
        y: 148.592325,
      }),
      new Costume("stage4", "./Border/costumes/stage4.svg", {
        x: 197.706455,
        y: 148.59234000000006,
      }),
      new Costume("stage5", "./Border/costumes/stage5.svg", {
        x: 197.706455,
        y: 148.59231500000013,
      }),
      new Costume("stage6", "./Border/costumes/stage6.svg", {
        x: 197.706455,
        y: 148.59231500000007,
      }),
      new Costume("stage7", "./Border/costumes/stage7.svg", {
        x: 197.706455,
        y: 148.59231500000004,
      }),
      new Costume("stage8", "./Border/costumes/stage8.svg", {
        x: 197.706455,
        y: 148.59231500000004,
      }),
      new Costume("stage9", "./Border/costumes/stage9.svg", {
        x: 197.98631,
        y: 148.59231500000007,
      }),
      new Costume("stage10", "./Border/costumes/stage10.svg", {
        x: 197.706435,
        y: 148.5923150000001,
      }),
      new Costume("stage11", "./Border/costumes/stage11.svg", {
        x: 197.706455,
        y: 148.59231500000007,
      }),
      new Costume("stage12", "./Border/costumes/stage12.svg", {
        x: 197.706455,
        y: 148.59231499999999,
      }),
      new Costume("stage13", "./Border/costumes/stage13.svg", {
        x: 197.706455,
        y: 148.59232500000002,
      }),
      new Costume("stage14", "./Border/costumes/stage14.svg", {
        x: 197.70644,
        y: 148.592345,
      }),
      new Costume("stage15", "./Border/costumes/stage15.svg", {
        x: 197.70645141601562,
        y: 148.59234619140625,
      }),
    ];

    this.sounds = [new Sound("pop", "./Border/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Victory" },
        this.whenIReceiveVictory
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Defeat" },
        this.whenIReceiveDefeat
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    this.visible = true;
    this.moveBehind();
    this.costume = "stage1";
  }

  *whenGreenFlagClicked2() {
    while (true) {
      if (this.toNumber(this.stage.vars.game) === 2) {
        this.visible = true;
        this.costume = this.stage.vars.level;
      }
      yield;
    }
  }

  *whenIReceiveVictory() {
    this.costume = "stage1";
    this.stage.vars.level = 1;
  }

  *whenIReceiveDefeat() {
    this.costume = "stage1";
    this.stage.vars.level = 1;
  }
}
