/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class VictoryDefeat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Screen", "./VictoryDefeat/costumes/Screen.svg", {
        x: 265.5,
        y: 184.5,
      }),
      new Costume("Victory", "./VictoryDefeat/costumes/Victory.svg", {
        x: 139.06565616113744,
        y: 37.52583127962086,
      }),
      new Costume(
        "Click Anywhere to go Next",
        "./VictoryDefeat/costumes/Click Anywhere to go Next.svg",
        { x: 117.50495388343563, y: 9.127308981042603 }
      ),
      new Costume(
        "Click Anywhere to go Back",
        "./VictoryDefeat/costumes/Click Anywhere to go Back.svg",
        { x: 126, y: 10 }
      ),
      new Costume("Defeat ", "./VictoryDefeat/costumes/Defeat .svg", {
        x: 135,
        y: 35.5,
      }),
    ];

    this.sounds = [new Sound("pop", "./VictoryDefeat/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
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
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
      new Trigger(Trigger.CLONE_START, this.startAsClone7),
      new Trigger(Trigger.CLONE_START, this.startAsClone8),
      new Trigger(Trigger.CLONE_START, this.startAsClone9),
    ];
  }

  *startAsClone() {
    if (this.toString(this.stage.vars.victoryid) === "Victory") {
      this.direction = 90;
      this.visible = true;
      this.costume = "Victory";
      this.goto(0, 0);
      this.effects.ghost = 100;
      for (let i = 0; i < 25; i++) {
        this.effects.ghost -= 4;
        yield;
      }
    }
  }

  *startAsClone2() {
    if (this.toString(this.stage.vars.victoryid) === "Screen") {
      this.direction = 90;
      this.visible = true;
      this.costume = "Screen";
      this.goto(0, 0);
      this.effects.ghost = 100;
      for (let i = 0; i < 25; i++) {
        this.effects.ghost -= 4;
        yield;
      }
    }
  }

  *startAsClone3() {
    if (this.toString(this.stage.vars.victoryid) === "CATGN") {
      this.goto(0, -300);
      this.costume = "Click Anywhere to go Back";
      this.visible = true;
      while (
        !(
          this.compare(Math.round(this.x), Math.round(0)) === 0 &&
          this.compare(Math.round(this.y), Math.round(-150)) === 0
        )
      ) {
        this.x += (Math.round(0) - Math.round(this.x)) / 5;
        this.y += (Math.round(-165) - Math.round(this.y)) / 5;
        yield;
      }
      this.goto(0, -165);
    }
  }

  *whenIReceiveVictory() {
    this.visible = false;
    this.stage.vars.victoryid = "Screen";
    this.createClone();
    yield* this.wait(0.05);
    this.stage.vars.victoryid = "Victory";
    this.createClone();
    yield* this.wait(0.05);
    this.stage.vars.victoryid = "CATGN";
    this.createClone();
  }

  *whenIReceiveDefeat() {
    this.visible = false;
    this.stage.vars.victoryid = "Screen";
    this.createClone();
    yield* this.wait(0.05);
    this.stage.vars.victoryid = "Defeat";
    this.createClone();
    yield* this.wait(0.05);
    this.stage.vars.victoryid = "CATGB";
    this.createClone();
  }

  *startAsClone4() {
    if (this.toString(this.stage.vars.victoryid) === "CATGB") {
      this.goto(0, -300);
      this.costume = "Click Anywhere to go Back";
      this.visible = true;
      while (
        !(
          this.compare(Math.round(this.x), Math.round(0)) === 0 &&
          this.compare(Math.round(this.y), Math.round(-150)) === 0
        )
      ) {
        this.x += (Math.round(0) - Math.round(this.x)) / 5;
        this.y += (Math.round(-165) - Math.round(this.y)) / 5;
        yield;
      }
      this.goto(0, -165);
    }
  }

  *startAsClone5() {
    if (this.toString(this.stage.vars.victoryid) === "Defeat") {
      this.direction = 90;
      this.visible = true;
      this.costume = "Defeat ";
      this.goto(0, 0);
      this.effects.ghost = 100;
      for (let i = 0; i < 25; i++) {
        this.effects.ghost -= 4;
        yield;
      }
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone6() {
    if (this.toString(this.stage.vars.victoryid) === "CATGB") {
      yield* this.wait(1);
      while (!this.mouse.down) {
        yield;
      }
      this.broadcast("IsClicked?");
      this.stage.vars.whatisclicked = "Play";
    }
  }

  *startAsClone7() {
    while (true) {
      if (
        this.toNumber(this.stage.vars.game) === 0 ||
        this.toNumber(this.stage.vars.game) === 1
      ) {
        yield* this.wait(1);
        this.deleteThisClone();
      } else {
        this.visible = true;
      }
      yield;
    }
  }

  *startAsClone8() {
    this.moveAhead();
  }

  *startAsClone9() {
    if (this.toString(this.stage.vars.victoryid) === "CATGN") {
      yield* this.wait(1);
      while (!this.mouse.down) {
        yield;
      }
      this.broadcast("IsClicked?");
      this.stage.vars.whatisclicked = "Play";
    }
  }
}
