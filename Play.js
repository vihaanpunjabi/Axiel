/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Play extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("2", "./Play/costumes/2.svg", {
        x: 31.825654983520508,
        y: 17.544435501098633,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "IsClicked?" },
        this.whenIReceiveIsclicked
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching("mouse")) {
        this.size += (107 - this.size) / 4;
        if (this.mouse.down) {
          this.broadcast("IsClicked?");
          this.stage.vars.whatisclicked = "Play";
        }
      } else {
        this.size += (100 - this.size) / 5;
      }
      yield;
    }
  }

  *whenIReceiveIsclicked() {
    this.broadcast("1");
    yield* this.wait(0.5);
    if (this.toString(this.stage.vars.whatisclicked) === "Play") {
      this.stage.vars.whatisclicked = 0;
      this.stage.vars.game = 1;
    } else {
      if (this.toString(this.stage.vars.whatisclicked) === "Level1") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 1;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level2") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 2;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level3") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 3;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level4") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 4;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level5") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 5;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level6") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 6;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level7") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 7;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level8") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 8;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level9") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 9;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level10") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 10;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level11") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 11;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level12") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 12;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level13") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 13;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level14") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 14;
        this.broadcast("Check");
      }
      if (this.toString(this.stage.vars.whatisclicked) === "Level15") {
        this.stage.vars.whatisclicked = 0;
        this.stage.vars.game = 2;
        this.stage.vars.level = 15;
        this.broadcast("Check");
      }
    }
  }

  *whenGreenFlagClicked2() {
    yield* this.wait(0.5);
    while (true) {
      if (this.toNumber(this.stage.vars.game) === 1) {
        yield* this.wait(1.25);
        this.visible = false;
      }
      yield;
    }
  }

  *startAsClone() {
    while (true) {
      if (!(this.toNumber(this.stage.vars.game) === 0)) {
        this.deleteThisClone();
      }
      yield;
    }
  }

  *whenGreenFlagClicked3() {
    this.stage.vars.game = 0;
    this.broadcast("start");
    this.visible = true;
    this.stage.vars.whatisclicked = 0;
  }

  *whenIReceiveStart() {
    this.direction = 90;
    this.goto(0, -75);
    this.effects.clear();
    this.visible = true;
  }
}
