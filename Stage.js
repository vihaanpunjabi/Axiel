/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("images", "./Stage/costumes/images.svg", {
        x: 304.9110093045875,
        y: 180.00023985522503,
      }),
    ];

    this.sounds = [
      new Sound(
        "music - from pixabay",
        "./Stage/sounds/music - from pixabay.mp3"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "start" }, this.whenIReceiveStart),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start" },
        this.whenIReceiveStart2
      ),
    ];

    this.vars.stage = "game";
    this.vars.whatisclicked = 0;
    this.vars.game = 0;
    this.vars.level = 15;
    this.vars.targetx = 15;
    this.vars.targety = 0;
    this.vars.horx = 25;
    this.vars.hory = 0;
    this.vars.verx = -25;
    this.vars.very = 0;
    this.vars.sprite = "Target4";
    this.vars.xVel = 7.968053016615377e-44;
    this.vars.yVel = -5.981271173247545e-46;
    this.vars.easing2 = 751;
    this.vars.page = 1;
    this.vars.levelId = 15;
    this.vars.xpos = -150;
    this.vars.speed = 3;
    this.vars.ypos = 30;
    this.vars.ypos2 = 30;
    this.vars.xpos2 = -75;
    this.vars.xpos3 = 0;
    this.vars.xpos4 = 75;
    this.vars.xpos5 = 150;
    this.vars.xpos6 = -150;
    this.vars.xpos7 = -75;
    this.vars.xpos8 = 0;
    this.vars.xpos9 = 75;
    this.vars.xpos10 = 150;
    this.vars.xpos11 = -150;
    this.vars.xpos12 = -75;
    this.vars.xpos13 = 0;
    this.vars.xpos14 = 75;
    this.vars.xpos15 = 150;
    this.vars.ypos3 = 30;
    this.vars.ypos4 = 30;
    this.vars.ypos5 = 30;
    this.vars.ypos6 = -40;
    this.vars.ypos7 = -40;
    this.vars.ypos8 = -40;
    this.vars.ypos9 = -40;
    this.vars.ypos10 = -40;
    this.vars.ypos11 = -110;
    this.vars.ypos12 = -110;
    this.vars.ypos13 = -110;
    this.vars.ypos14 = -110;
    this.vars.ypos15 = -110;
    this.vars.victoryid = "CATGB";
    this.vars.defeat = 0;
    this.vars.victory = 0;
    this.vars.touching = 0;
  }

  *whenGreenFlagClicked() {
    this.effects.clear();
    this.costume = 1;
    this.vars.stage = "menu";
  }

  *whenIReceiveStart() {
    this.vars.stage = "game";
  }

  *whenIReceiveStart2() {
    while (true) {
      yield* this.playSoundUntilDone("music - from pixabay");
      yield;
    }
  }
}
