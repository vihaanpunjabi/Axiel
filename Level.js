/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Level extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("1", "./Level/costumes/1.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("2", "./Level/costumes/2.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("3", "./Level/costumes/3.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("4", "./Level/costumes/4.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("5", "./Level/costumes/5.svg", {
        x: 26.54392999999999,
        y: 26.543915000000027,
      }),
      new Costume("6", "./Level/costumes/6.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("7", "./Level/costumes/7.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("8", "./Level/costumes/8.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("9", "./Level/costumes/9.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("10", "./Level/costumes/10.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("11", "./Level/costumes/11.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("12", "./Level/costumes/12.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("13", "./Level/costumes/13.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("14", "./Level/costumes/14.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("15", "./Level/costumes/15.svg", {
        x: 26.54392999999999,
        y: 26.543925,
      }),
      new Costume("Levels", "./Level/costumes/Levels.svg", { x: 62, y: 18.5 }),
    ];

    this.sounds = [new Sound("pop", "./Level/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "IsClicked?" },
        this.whenIReceiveIsclicked
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
      new Trigger(Trigger.CLONE_START, this.startAsClone7),
      new Trigger(Trigger.CLONE_START, this.startAsClone8),
      new Trigger(Trigger.CLONE_START, this.startAsClone9),
      new Trigger(Trigger.CLONE_START, this.startAsClone10),
      new Trigger(Trigger.CLONE_START, this.startAsClone11),
      new Trigger(Trigger.CLONE_START, this.startAsClone12),
      new Trigger(Trigger.CLONE_START, this.startAsClone13),
      new Trigger(Trigger.CLONE_START, this.startAsClone14),
      new Trigger(Trigger.CLONE_START, this.startAsClone15),
      new Trigger(Trigger.CLONE_START, this.startAsClone16),
      new Trigger(Trigger.CLONE_START, this.startAsClone17),
      new Trigger(Trigger.CLONE_START, this.startAsClone18),
      new Trigger(Trigger.CLONE_START, this.startAsClone19),
      new Trigger(Trigger.CLONE_START, this.startAsClone20),
      new Trigger(Trigger.CLONE_START, this.startAsClone21),
      new Trigger(Trigger.CLONE_START, this.startAsClone22),
      new Trigger(Trigger.CLONE_START, this.startAsClone23),
      new Trigger(Trigger.CLONE_START, this.startAsClone24),
      new Trigger(Trigger.CLONE_START, this.startAsClone25),
      new Trigger(Trigger.CLONE_START, this.startAsClone26),
      new Trigger(Trigger.CLONE_START, this.startAsClone27),
      new Trigger(Trigger.CLONE_START, this.startAsClone28),
      new Trigger(Trigger.CLONE_START, this.startAsClone29),
      new Trigger(Trigger.CLONE_START, this.startAsClone30),
      new Trigger(Trigger.CLONE_START, this.startAsClone31),
      new Trigger(Trigger.CLONE_START, this.startAsClone32),
      new Trigger(Trigger.CLONE_START, this.startAsClone33),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone34),
    ];
  }

  *cloneAllLevels(page) {
    this.stage.vars.page = page;
    if (this.toNumber(this.stage.vars.page) === 1) {
      this.stage.vars.levelId = "Levels";
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 1;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 2;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 3;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 4;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 5;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 6;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 7;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 8;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 9;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 10;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 11;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 12;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 13;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 14;
      this.createClone();
      yield* this.wait(0.05);
      this.stage.vars.levelId = 15;
      this.createClone();
    } else {
      null;
    }
  }

  *startAsClone() {
    if (this.toNumber(this.stage.vars.levelId) === 1) {
      this.visible = true;
      this.costume = 1;
      this.goto(300, 90);
      this.stage.vars.ypos = 30;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos = -150;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos),
        this.toNumber(this.stage.vars.ypos)
      );
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveIsclicked() {
    while (true) {
      if (this.toNumber(this.stage.vars.game) === 1) {
        yield* this.wait(2.5);
        yield* this.cloneAllLevels(1);
        return;
      } else {
        null;
      }
      yield;
    }
  }

  *startAsClone2() {
    if (this.toNumber(this.stage.vars.levelId) === 2) {
      this.visible = true;
      this.costume = 2;
      this.goto(300, 90);
      this.stage.vars.ypos2 = 30;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos2 = -75;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos2))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos2))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos2)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos2)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos2),
        this.toNumber(this.stage.vars.ypos2)
      );
    }
  }

  *startAsClone3() {
    if (this.toNumber(this.stage.vars.levelId) === 3) {
      this.visible = true;
      this.costume = 3;
      this.goto(300, 90);
      this.stage.vars.ypos3 = 30;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos3 = 0;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos3))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos3))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos3)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos3)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos3),
        this.toNumber(this.stage.vars.ypos3)
      );
    }
  }

  *startAsClone4() {
    if (this.toNumber(this.stage.vars.levelId) === 4) {
      this.visible = true;
      this.costume = 4;
      this.goto(300, 90);
      this.stage.vars.ypos4 = 30;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos4 = 75;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos4))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos4))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos4)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos4)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos4),
        this.toNumber(this.stage.vars.ypos4)
      );
    }
  }

  *startAsClone5() {
    if (this.toNumber(this.stage.vars.levelId) === 5) {
      this.visible = true;
      this.costume = 5;
      this.goto(300, 90);
      this.stage.vars.ypos5 = 30;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos5 = 150;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos5))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos5))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos5)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos5)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos5),
        this.toNumber(this.stage.vars.ypos5)
      );
    }
  }

  *startAsClone6() {
    if (this.toNumber(this.stage.vars.levelId) === 6) {
      this.visible = true;
      this.costume = 6;
      this.goto(300, 0);
      this.stage.vars.ypos6 = -40;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos6 = -150;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos6))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos6))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos6)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos6)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos6),
        this.toNumber(this.stage.vars.ypos6)
      );
    }
  }

  *startAsClone7() {
    if (this.toNumber(this.stage.vars.levelId) === 7) {
      this.visible = true;
      this.costume = 7;
      this.goto(300, 0);
      this.stage.vars.ypos7 = -40;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos7 = -75;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos7))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos7))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos7)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos7)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos7),
        this.toNumber(this.stage.vars.ypos7)
      );
    }
  }

  *startAsClone8() {
    if (this.toNumber(this.stage.vars.levelId) === 8) {
      this.visible = true;
      this.costume = 8;
      this.goto(300, 0);
      this.stage.vars.ypos8 = -40;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos8 = 0;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos8))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos8))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos8)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos8)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos8),
        this.toNumber(this.stage.vars.ypos8)
      );
    }
  }

  *startAsClone9() {
    if (this.toNumber(this.stage.vars.levelId) === 9) {
      this.visible = true;
      this.costume = 9;
      this.goto(300, 0);
      this.stage.vars.ypos9 = -40;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos9 = 75;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos9))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos9))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos9)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos9)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos9),
        this.toNumber(this.stage.vars.ypos9)
      );
    }
  }

  *startAsClone10() {
    if (this.toNumber(this.stage.vars.levelId) === 10) {
      this.visible = true;
      this.costume = 10;
      this.goto(300, 0);
      this.stage.vars.ypos10 = -40;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos10 = 150;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos10))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos10))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos10)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos10)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos10),
        this.toNumber(this.stage.vars.ypos10)
      );
    }
  }

  *startAsClone11() {
    if (this.toNumber(this.stage.vars.levelId) === 11) {
      this.visible = true;
      this.costume = 11;
      this.goto(300, -90);
      this.stage.vars.ypos11 = -110;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos11 = -150;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos11))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos11))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos11)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos11)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos11),
        this.toNumber(this.stage.vars.ypos11)
      );
    }
  }

  *startAsClone12() {
    if (this.toNumber(this.stage.vars.levelId) === 12) {
      this.visible = true;
      this.costume = 12;
      this.goto(300, -90);
      this.stage.vars.ypos12 = -110;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos12 = -75;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos12))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos12))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos12)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos12)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos12),
        this.toNumber(this.stage.vars.ypos12)
      );
    }
  }

  *startAsClone13() {
    if (this.toNumber(this.stage.vars.levelId) === 13) {
      this.visible = true;
      this.costume = 13;
      this.goto(300, -90);
      this.stage.vars.ypos13 = -110;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos13 = 0;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos13))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos13))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos13)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos13)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos13),
        this.toNumber(this.stage.vars.ypos13)
      );
    }
  }

  *startAsClone14() {
    if (this.toNumber(this.stage.vars.levelId) === 14) {
      this.visible = true;
      this.costume = 14;
      this.goto(300, -90);
      this.stage.vars.ypos14 = -110;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos14 = 75;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos14))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos14))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos14)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos14)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos14),
        this.toNumber(this.stage.vars.ypos14)
      );
    }
  }

  *startAsClone15() {
    if (this.toNumber(this.stage.vars.levelId) === 15) {
      this.visible = true;
      this.costume = 15;
      this.goto(300, -90);
      this.stage.vars.ypos15 = -110;
      this.stage.vars.speed = 5;
      this.stage.vars.xpos15 = 150;
      while (
        !(
          this.compare(
            Math.round(this.x),
            Math.round(this.toNumber(this.stage.vars.xpos15))
          ) === 0 &&
          this.compare(
            Math.round(this.y),
            Math.round(this.toNumber(this.stage.vars.ypos15))
          ) === 0
        )
      ) {
        this.x +=
          (Math.round(this.toNumber(this.stage.vars.xpos15)) -
            Math.round(this.x)) /
          this.toNumber(this.stage.vars.speed);
        this.y +=
          (Math.round(this.toNumber(this.stage.vars.ypos15)) -
            Math.round(this.y)) /
          this.toNumber(this.stage.vars.speed);
        yield;
      }
      this.goto(
        this.toNumber(this.stage.vars.xpos15),
        this.toNumber(this.stage.vars.ypos15)
      );
    }
  }

  *startAsClone16() {
    this.size = 80;
  }

  *startAsClone17() {
    while (true) {
      if (
        this.touching("mouse") &&
        !(this.toString(this.stage.vars.levelId) === "Levels")
      ) {
        this.size += (105 - this.size) / 3;
      } else {
        this.size += (95 - this.size) / 4;
      }
      yield;
    }
  }

  *startAsClone18() {
    if (this.toNumber(this.stage.vars.levelId) === 1) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level1";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone19() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.game) === 0 ||
        this.toNumber(this.stage.vars.game) === 2 ||
        this.toNumber(this.stage.vars.game) === 3
      ) {
        this.deleteThisClone();
      } else {
        this.visible = true;
      }
      yield;
    }
  }

  *startAsClone20() {
    if (this.toNumber(this.stage.vars.levelId) === 2) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level2";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone21() {
    if (this.toNumber(this.stage.vars.levelId) === 3) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level3";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone22() {
    if (this.toNumber(this.stage.vars.levelId) === 4) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level4";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone23() {
    if (this.toNumber(this.stage.vars.levelId) === 5) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level5";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone24() {
    if (this.toNumber(this.stage.vars.levelId) === 6) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level6";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone25() {
    if (this.toNumber(this.stage.vars.levelId) === 7) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level7";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone26() {
    if (this.toNumber(this.stage.vars.levelId) === 8) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level8";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone27() {
    if (this.toNumber(this.stage.vars.levelId) === 9) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level9";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone28() {
    if (this.toNumber(this.stage.vars.levelId) === 10) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level10";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone29() {
    if (this.toNumber(this.stage.vars.levelId) === 11) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level11";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone30() {
    if (this.toNumber(this.stage.vars.levelId) === 12) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level12";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone31() {
    if (this.toNumber(this.stage.vars.levelId) === 13) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level13";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone32() {
    if (this.toNumber(this.stage.vars.levelId) === 14) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level14";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *startAsClone33() {
    if (this.toNumber(this.stage.vars.levelId) === 15) {
      while (true) {
        if (this.touching("mouse") && this.mouse.down) {
          this.stage.vars.whatisclicked = "Level15";
          this.broadcast("IsClicked?");
        } else {
          null;
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.stage.vars.speed = 3;
      yield;
    }
  }

  *startAsClone34() {
    if (this.toString(this.stage.vars.levelId) === "Levels") {
      this.visible = true;
      this.goto(0, 100);
    }
  }
}
