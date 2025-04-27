/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Gameplay extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("Target", "./Gameplay/costumes/Target.svg", {
        x: 22.25881004333496,
        y: 21.35027503967285,
      }),
      new Costume("Horizontal", "./Gameplay/costumes/Horizontal.svg", {
        x: 25.050559997558594,
        y: 12.224345207214355,
      }),
      new Costume("Vertical", "./Gameplay/costumes/Vertical.svg", {
        x: 12.224345207214355,
        y: 25.050559997558594,
      }),
      new Costume(
        "Blank (ForCoding)",
        "./Gameplay/costumes/Blank (ForCoding).svg",
        { x: 0, y: 0 }
      ),
    ];

    this.sounds = [
      new Sound(
        "Egzod, Maestro Chives, Neoni - Royalty [NCS Release]",
        "./Gameplay/sounds/Egzod, Maestro Chives, Neoni - Royalty [NCS Release].mp3"
      ),
      new Sound("C Bass", "./Gameplay/sounds/C Bass.wav"),
      new Sound(
        "Egzod, Maestro Chives, Neoni - Royalty [NCS Release]2",
        "./Gameplay/sounds/Egzod, Maestro Chives, Neoni - Royalty [NCS Release]2.wav"
      ),
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed),
      new Trigger(Trigger.CLONE_START, this.startAsClone6),
      new Trigger(Trigger.CLONE_START, this.startAsClone7),
      new Trigger(Trigger.KEY_PRESSED, { key: "r" }, this.whenKeyRPressed2),
      new Trigger(Trigger.CLONE_START, this.startAsClone8),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Defeat" },
        this.whenIReceiveDefeat
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Victory" },
        this.whenIReceiveVictory
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone9),
      new Trigger(Trigger.CLONE_START, this.startAsClone10),
      new Trigger(Trigger.CLONE_START, this.startAsClone11),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.CLONE_START, this.startAsClone12),
      new Trigger(Trigger.CLONE_START, this.startAsClone13),
      new Trigger(Trigger.CLONE_START, this.startAsClone14),
      new Trigger(Trigger.BROADCAST, { name: "Check" }, this.whenIReceiveCheck),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Check" },
        this.whenIReceiveCheck2
      ),
    ];
  }

  *movementHor() {
    if (this.keyPressed("right arrow")) {
      this.stage.vars.xVel += 2;
    }
    if (this.keyPressed("left arrow")) {
      this.stage.vars.xVel -= 2;
    }
    if (this.keyPressed("d")) {
      this.stage.vars.xVel += 2;
    }
    if (this.keyPressed("a")) {
      this.stage.vars.xVel -= 2;
    }
    this.stage.vars.xVel = this.toNumber(this.stage.vars.xVel) * 0.8;
    this.x += this.toNumber(this.stage.vars.xVel);
  }

  *levelHorizontalVertical(_, hx, hy, vx, vy) {
    this.stage.vars.level = _;
    this.stage.vars.targetx = _;
    this.stage.vars.targety = undefined;
    this.stage.vars.horx = hx;
    this.stage.vars.hory = hy;
    this.stage.vars.horx = hx;
    this.stage.vars.hory = hy;
    this.stage.vars.verx = vx;
    this.stage.vars.very = vy;
    yield* this.wait(0.5);
    yield* this.clone("Hor");
    yield* this.wait(0.05);
    yield* this.clone("Ver");
    yield* this.wait(0.05);
    yield* this.clone("Target");
  }

  *clone(sprite) {
    this.stage.vars.sprite = sprite;
    this.createClone();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    if (this.toString(this.stage.vars.sprite) === "Target") {
      this.visible = false;
      this.stage.vars.touching = 0;
      if (this.toNumber(this.stage.vars.level) === 1) {
        yield* this.clone("Target1");
        yield* this.wait(0.05);
        yield* this.clone("Target2");
        this.deleteThisClone();
      } else {
        if (this.toNumber(this.stage.vars.level) === 2) {
          yield* this.clone("Target1");
          yield* this.wait(0.05);
          yield* this.clone("Target2");
          this.deleteThisClone();
        } else {
          if (this.toNumber(this.stage.vars.level) === 3) {
            yield* this.clone("Target1");
            yield* this.wait(0.05);
            yield* this.clone("Target2");
            this.deleteThisClone();
          } else {
            if (this.toNumber(this.stage.vars.level) === 4) {
              yield* this.clone("Target1");
              yield* this.wait(0.05);
              yield* this.clone("Target2");
              yield* this.wait(0.05);
              yield* this.clone("Target3");
              yield* this.wait(0.05);
              yield* this.clone("Target4");
              yield* this.wait(0.05);
              yield* this.clone("Target5");
              this.deleteThisClone();
            } else {
              if (this.toNumber(this.stage.vars.level) === 5) {
                yield* this.clone("Target1");
                yield* this.wait(0.05);
                yield* this.clone("Target2");
                yield* this.wait(0.05);
                yield* this.clone("Target3");
                yield* this.wait(0.05);
                yield* this.clone("Target4");
                this.deleteThisClone();
              } else {
                if (this.toNumber(this.stage.vars.level) === 6) {
                  yield* this.clone("Target1");
                  yield* this.wait(0.05);
                  yield* this.clone("Target2");
                  yield* this.wait(0.05);
                  yield* this.clone("Target3");
                  this.deleteThisClone();
                } else {
                  if (this.toNumber(this.stage.vars.level) === 7) {
                    yield* this.clone("Target1");
                    yield* this.wait(0.05);
                    yield* this.clone("Target2");
                    yield* this.wait(0.05);
                    yield* this.clone("Target3");
                    yield* this.wait(0.05);
                    yield* this.clone("Target4");
                    this.deleteThisClone();
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 8) {
                      yield* this.clone("Target1");
                      yield* this.wait(0.05);
                      yield* this.clone("Target2");
                      yield* this.wait(0.05);
                      yield* this.clone("Target3");
                      yield* this.wait(0.05);
                      yield* this.clone("Target4");
                      this.deleteThisClone();
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 9) {
                        yield* this.clone("Target1");
                        yield* this.wait(0.05);
                        yield* this.clone("Target2");
                        yield* this.wait(0.05);
                        yield* this.clone("Target3");
                        yield* this.wait(0.05);
                        yield* this.clone("Target4");
                        this.deleteThisClone();
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 10) {
                          yield* this.clone("Target2");
                          yield* this.wait(0.05);
                          yield* this.clone("Target3");
                          yield* this.wait(0.05);
                          yield* this.clone("Target4");
                          this.deleteThisClone();
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 11) {
                            yield* this.clone("Target1");
                            yield* this.wait(0.05);
                            yield* this.clone("Target2");
                            yield* this.wait(0.05);
                            yield* this.clone("Target3");
                            yield* this.wait(0.05);
                            yield* this.clone("Target4");
                            this.deleteThisClone();
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 12) {
                              yield* this.clone("Target1");
                              yield* this.wait(0.05);
                              yield* this.clone("Target2");
                              this.deleteThisClone();
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 13) {
                                yield* this.clone("Target1");
                                yield* this.wait(0.05);
                                yield* this.clone("Target2");
                                yield* this.wait(0.05);
                                yield* this.clone("Target3");
                                yield* this.wait(0.05);
                                yield* this.clone("Target4");
                                this.deleteThisClone();
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 14
                                ) {
                                  yield* this.clone("Target1");
                                  yield* this.wait(0.05);
                                  yield* this.clone("Target2");
                                  this.deleteThisClone();
                                } else {
                                  if (
                                    this.toNumber(this.stage.vars.level) === 15
                                  ) {
                                    yield* this.clone("Target1");
                                    yield* this.wait(0.05);
                                    yield* this.clone("Target2");
                                    yield* this.wait(0.05);
                                    yield* this.clone("Target3");
                                    yield* this.wait(0.05);
                                    yield* this.clone("Target4");
                                    this.deleteThisClone();
                                  } else {
                                    null;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *startAsClone2() {
    if (this.toString(this.stage.vars.sprite) === "Ver") {
      this.goto(
        this.toNumber(this.stage.vars.verx),
        this.toNumber(this.stage.vars.very)
      );
      this.costume = "Vertical";
      this.visible = true;
      while (true) {
        yield* this.movementVer();
        yield;
      }
    }
  }

  *startAsClone3() {
    if (this.toString(this.stage.vars.sprite) === "Hor") {
      this.goto(
        this.toNumber(this.stage.vars.horx),
        this.toNumber(this.stage.vars.hory)
      );
      this.costume = "Horizontal";
      this.visible = true;
      while (true) {
        yield* this.movementHor();
        yield;
      }
    }
  }

  *movementVer() {
    if (this.keyPressed("up arrow")) {
      this.stage.vars.yVel += 2;
    }
    if (this.keyPressed("down arrow")) {
      this.stage.vars.yVel -= 2;
    }
    if (this.keyPressed("w")) {
      this.stage.vars.yVel += 2;
    }
    if (this.keyPressed("s")) {
      this.stage.vars.yVel -= 2;
    }
    this.stage.vars.yVel = this.toNumber(this.stage.vars.yVel) * 0.8;
    this.y += this.toNumber(this.stage.vars.yVel);
  }

  *startAsClone4() {
    if (this.toString(this.stage.vars.sprite) === "Hor") {
      while (true) {
        if (this.touching(Color.rgb(110, 30, 78))) {
          this.y += this.toNumber(this.stage.vars.yVel);
        } else {
          this.y += 0;
        }
        yield;
      }
    }
  }

  *startAsClone5() {
    if (this.toString(this.stage.vars.sprite) === "Ver") {
      while (true) {
        if (this.touching(Color.rgb(63, 49, 138))) {
          this.x += this.toNumber(this.stage.vars.xVel);
        } else {
          this.x += 0;
        }
        yield;
      }
    }
  }

  *whenKeyRPressed() {
    while (!(this.toNumber(this.stage.vars.game) === 2)) {
      yield;
    }
    this.stage.vars.touching = 0;
    this.stage.vars.victory = 0;
    this.stage.vars.defeat = 0;
    if (this.toNumber(this.stage.vars.level) === 1) {
      yield* this.levelHorizontalVertical(this.stage.vars.level, 0, 0, 50, 0);
    } else {
      if (this.toNumber(this.stage.vars.level) === 2) {
        yield* this.levelHorizontalVertical(
          this.stage.vars.level,
          -25,
          0,
          25,
          0
        );
      } else {
        if (this.toNumber(this.stage.vars.level) === 3) {
          yield* this.levelHorizontalVertical(
            this.stage.vars.level,
            -50,
            50,
            50,
            -50
          );
        } else {
          if (this.toNumber(this.stage.vars.level) === 4) {
            yield* this.levelHorizontalVertical(
              this.stage.vars.level,
              100,
              0,
              -100,
              50
            );
          } else {
            if (this.toNumber(this.stage.vars.level) === 5) {
              yield* this.levelHorizontalVertical(
                this.stage.vars.level,
                0,
                0,
                50,
                100
              );
            } else {
              if (this.toNumber(this.stage.vars.level) === 6) {
                yield* this.levelHorizontalVertical(
                  this.stage.vars.level,
                  -100,
                  50,
                  -100,
                  -50
                );
              } else {
                if (this.toNumber(this.stage.vars.level) === 7) {
                  yield* this.levelHorizontalVertical(
                    this.stage.vars.level,
                    100,
                    -50,
                    -75,
                    0
                  );
                } else {
                  if (this.toNumber(this.stage.vars.level) === 8) {
                    yield* this.levelHorizontalVertical(
                      this.stage.vars.level,
                      -50,
                      -50,
                      90,
                      0
                    );
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 9) {
                      yield* this.levelHorizontalVertical(
                        this.stage.vars.level,
                        125,
                        100,
                        125,
                        0
                      );
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 10) {
                        yield* this.levelHorizontalVertical(
                          this.stage.vars.level,
                          -100,
                          0,
                          100,
                          0
                        );
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 11) {
                          yield* this.levelHorizontalVertical(
                            this.stage.vars.level,
                            0,
                            -75,
                            0,
                            75
                          );
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 12) {
                            yield* this.levelHorizontalVertical(
                              this.stage.vars.level,
                              25,
                              0,
                              -25,
                              0
                            );
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 13) {
                              yield* this.levelHorizontalVertical(
                                this.stage.vars.level,
                                25,
                                0,
                                -25,
                                0
                              );
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 14) {
                                yield* this.levelHorizontalVertical(
                                  this.stage.vars.level,
                                  25,
                                  0,
                                  -25,
                                  0
                                );
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 15
                                ) {
                                  yield* this.levelHorizontalVertical(
                                    this.stage.vars.level,
                                    25,
                                    0,
                                    -25,
                                    0
                                  );
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *startAsClone6() {
    if (this.toString(this.stage.vars.sprite) === "Target1") {
      if (this.toNumber(this.stage.vars.level) === 1) {
        this.goto(-100, 0);
        this.costume = "Target";
        this.visible = true;
        while (true) {
          if (
            this.touching(Color.rgb(110, 30, 78)) ||
            this.touching(Color.rgb(63, 49, 138))
          ) {
            this.stage.vars.touching++;
            this.deleteThisClone();
          }
          yield;
        }
      } else {
        if (this.toNumber(this.stage.vars.level) === 2) {
          this.goto(75, 0);
          this.costume = "Target";
          this.visible = true;
          while (true) {
            if (
              this.touching(Color.rgb(110, 30, 78)) ||
              this.touching(Color.rgb(63, 49, 138))
            ) {
              this.stage.vars.touching++;
              this.deleteThisClone();
            }
            yield;
          }
        } else {
          if (this.toNumber(this.stage.vars.level) === 3) {
            this.goto(-100, 100);
            this.costume = "Target";
            this.visible = true;
            while (true) {
              if (
                this.touching(Color.rgb(110, 30, 78)) ||
                this.touching(Color.rgb(63, 49, 138))
              ) {
                this.stage.vars.touching++;
                this.deleteThisClone();
              }
              yield;
            }
          } else {
            if (this.toNumber(this.stage.vars.level) === 4) {
              this.goto(-100, 0);
              this.costume = "Target";
              this.visible = true;
              while (true) {
                if (
                  this.touching(Color.rgb(110, 30, 78)) ||
                  this.touching(Color.rgb(63, 49, 138))
                ) {
                  this.stage.vars.touching++;
                  this.deleteThisClone();
                }
                yield;
              }
            } else {
              if (this.toNumber(this.stage.vars.level) === 5) {
                this.goto(-125, 125);
                this.costume = "Target";
                this.visible = true;
                while (true) {
                  if (
                    this.touching(Color.rgb(110, 30, 78)) ||
                    this.touching(Color.rgb(63, 49, 138))
                  ) {
                    this.stage.vars.touching++;
                    this.deleteThisClone();
                  }
                  yield;
                }
              } else {
                if (this.toNumber(this.stage.vars.level) === 6) {
                  this.goto(-100, 0);
                  this.costume = "Target";
                  this.visible = true;
                  while (true) {
                    if (
                      this.touching(Color.rgb(110, 30, 78)) ||
                      this.touching(Color.rgb(63, 49, 138))
                    ) {
                      this.stage.vars.touching++;
                      this.deleteThisClone();
                    }
                    yield;
                  }
                } else {
                  if (this.toNumber(this.stage.vars.level) === 7) {
                    this.goto(-175, 100);
                    this.costume = "Target";
                    this.visible = true;
                    while (true) {
                      if (
                        this.touching(Color.rgb(110, 30, 78)) ||
                        this.touching(Color.rgb(63, 49, 138))
                      ) {
                        this.stage.vars.touching++;
                        this.deleteThisClone();
                      }
                      yield;
                    }
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 8) {
                      this.goto(-177.5, -100);
                      this.costume = "Target";
                      this.visible = true;
                      while (true) {
                        if (
                          this.touching(Color.rgb(110, 30, 78)) ||
                          this.touching(Color.rgb(63, 49, 138))
                        ) {
                          this.stage.vars.touching++;
                          this.deleteThisClone();
                        }
                        yield;
                      }
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 9) {
                        this.goto(-100, 100);
                        this.costume = "Target";
                        this.visible = true;
                        while (true) {
                          if (
                            this.touching(Color.rgb(110, 30, 78)) ||
                            this.touching(Color.rgb(63, 49, 138))
                          ) {
                            this.stage.vars.touching++;
                            this.deleteThisClone();
                          }
                          yield;
                        }
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 10) {
                          this.visible = false;
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 11) {
                            this.goto(0, 115);
                            this.costume = "Target";
                            this.visible = true;
                            while (true) {
                              if (
                                this.touching(Color.rgb(110, 30, 78)) ||
                                this.touching(Color.rgb(63, 49, 138))
                              ) {
                                this.stage.vars.touching++;
                                this.deleteThisClone();
                              }
                              yield;
                            }
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 12) {
                              this.goto(-140, 60);
                              this.costume = "Target";
                              this.visible = true;
                              while (true) {
                                if (
                                  this.touching(Color.rgb(110, 30, 78)) ||
                                  this.touching(Color.rgb(63, 49, 138))
                                ) {
                                  this.stage.vars.touching++;
                                  this.deleteThisClone();
                                }
                                yield;
                              }
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 13) {
                                this.goto(-140, 60);
                                this.costume = "Target";
                                this.visible = true;
                                while (true) {
                                  if (
                                    this.touching(Color.rgb(110, 30, 78)) ||
                                    this.touching(Color.rgb(63, 49, 138))
                                  ) {
                                    this.stage.vars.touching++;
                                    this.deleteThisClone();
                                  }
                                  yield;
                                }
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 14
                                ) {
                                  this.goto(0, 115);
                                  this.costume = "Target";
                                  this.visible = true;
                                  while (true) {
                                    if (
                                      this.touching(Color.rgb(110, 30, 78)) ||
                                      this.touching(Color.rgb(63, 49, 138))
                                    ) {
                                      this.stage.vars.touching++;
                                      this.deleteThisClone();
                                    }
                                    yield;
                                  }
                                } else {
                                  if (
                                    this.toNumber(this.stage.vars.level) === 15
                                  ) {
                                    this.goto(0, 115);
                                    this.costume = "Target";
                                    this.visible = true;
                                    while (true) {
                                      if (
                                        this.touching(Color.rgb(110, 30, 78)) ||
                                        this.touching(Color.rgb(63, 49, 138))
                                      ) {
                                        this.stage.vars.touching++;
                                        this.deleteThisClone();
                                      }
                                      yield;
                                    }
                                  } else {
                                    null;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *startAsClone7() {
    if (this.toString(this.stage.vars.sprite) === "Target2") {
      if (this.toNumber(this.stage.vars.level) === 1) {
        this.goto(50, 100);
        this.costume = "Target";
        this.visible = true;
        while (true) {
          if (
            this.touching(Color.rgb(110, 30, 78)) ||
            this.touching(Color.rgb(63, 49, 138))
          ) {
            this.stage.vars.touching++;
            this.deleteThisClone();
          }
          yield;
        }
      } else {
        if (this.toNumber(this.stage.vars.level) === 2) {
          this.goto(-75, 0);
          this.costume = "Target";
          this.visible = true;
          while (true) {
            if (
              this.touching(Color.rgb(110, 30, 78)) ||
              this.touching(Color.rgb(63, 49, 138))
            ) {
              this.stage.vars.touching++;
              this.deleteThisClone();
            }
            yield;
          }
        } else {
          if (this.toNumber(this.stage.vars.level) === 3) {
            this.goto(100, -100);
            this.costume = "Target";
            this.visible = true;
            while (true) {
              if (
                this.touching(Color.rgb(110, 30, 78)) ||
                this.touching(Color.rgb(63, 49, 138))
              ) {
                this.stage.vars.touching++;
                this.deleteThisClone();
              }
              yield;
            }
          } else {
            if (this.toNumber(this.stage.vars.level) === 4) {
              this.goto(0, 0);
              this.costume = "Target";
              this.visible = true;
              while (true) {
                if (
                  this.touching(Color.rgb(110, 30, 78)) ||
                  this.touching(Color.rgb(63, 49, 138))
                ) {
                  this.stage.vars.touching++;
                  this.deleteThisClone();
                }
                yield;
              }
            } else {
              if (this.toNumber(this.stage.vars.level) === 5) {
                this.goto(-25, -125);
                this.costume = "Target";
                this.visible = true;
                while (true) {
                  if (
                    this.touching(Color.rgb(110, 30, 78)) ||
                    this.touching(Color.rgb(63, 49, 138))
                  ) {
                    this.stage.vars.touching++;
                    this.deleteThisClone();
                  }
                  yield;
                }
              } else {
                if (this.toNumber(this.stage.vars.level) === 6) {
                  this.goto(0, 125);
                  this.costume = "Target";
                  this.visible = true;
                  while (true) {
                    if (
                      this.touching(Color.rgb(110, 30, 78)) ||
                      this.touching(Color.rgb(63, 49, 138))
                    ) {
                      this.stage.vars.touching++;
                      this.deleteThisClone();
                    }
                    yield;
                  }
                } else {
                  if (this.toNumber(this.stage.vars.level) === 7) {
                    this.goto(-75, 50);
                    this.costume = "Target";
                    this.visible = true;
                    while (true) {
                      if (
                        this.touching(Color.rgb(110, 30, 78)) ||
                        this.touching(Color.rgb(63, 49, 138))
                      ) {
                        this.stage.vars.touching++;
                        this.deleteThisClone();
                      }
                      yield;
                    }
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 8) {
                      this.goto(-95, 20);
                      this.costume = "Target";
                      this.visible = true;
                      while (true) {
                        if (
                          this.touching(Color.rgb(110, 30, 78)) ||
                          this.touching(Color.rgb(63, 49, 138))
                        ) {
                          this.stage.vars.touching++;
                          this.deleteThisClone();
                        }
                        yield;
                      }
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 9) {
                        this.goto(-100, -100);
                        this.costume = "Target";
                        this.visible = true;
                        while (true) {
                          if (
                            this.touching(Color.rgb(110, 30, 78)) ||
                            this.touching(Color.rgb(63, 49, 138))
                          ) {
                            this.stage.vars.touching++;
                            this.deleteThisClone();
                          }
                          yield;
                        }
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 10) {
                          this.goto(-155, 0);
                          this.costume = "Target";
                          this.visible = true;
                          while (true) {
                            if (
                              this.touching(Color.rgb(110, 30, 78)) ||
                              this.touching(Color.rgb(63, 49, 138))
                            ) {
                              this.stage.vars.touching++;
                              this.deleteThisClone();
                            }
                            yield;
                          }
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 11) {
                            this.goto(-155, 0);
                            this.costume = "Target";
                            this.visible = true;
                            while (true) {
                              if (
                                this.touching(Color.rgb(110, 30, 78)) ||
                                this.touching(Color.rgb(63, 49, 138))
                              ) {
                                this.stage.vars.touching++;
                                this.deleteThisClone();
                              }
                              yield;
                            }
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 12) {
                              this.goto(140, -60);
                              this.costume = "Target";
                              this.visible = true;
                              while (true) {
                                if (
                                  this.touching(Color.rgb(110, 30, 78)) ||
                                  this.touching(Color.rgb(63, 49, 138))
                                ) {
                                  this.stage.vars.touching++;
                                  this.deleteThisClone();
                                }
                                yield;
                              }
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 13) {
                                this.goto(140, -60);
                                this.costume = "Target";
                                this.visible = true;
                                while (true) {
                                  if (
                                    this.touching(Color.rgb(110, 30, 78)) ||
                                    this.touching(Color.rgb(63, 49, 138))
                                  ) {
                                    this.stage.vars.touching++;
                                    this.deleteThisClone();
                                  }
                                  yield;
                                }
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 14
                                ) {
                                  this.goto(0, -115);
                                  this.costume = "Target";
                                  this.visible = true;
                                  while (true) {
                                    if (
                                      this.touching(Color.rgb(110, 30, 78)) ||
                                      this.touching(Color.rgb(63, 49, 138))
                                    ) {
                                      this.stage.vars.touching++;
                                      this.deleteThisClone();
                                    }
                                    yield;
                                  }
                                } else {
                                  if (
                                    this.toNumber(this.stage.vars.level) === 15
                                  ) {
                                    this.goto(0, -115);
                                    this.costume = "Target";
                                    this.visible = true;
                                    while (true) {
                                      if (
                                        this.touching(Color.rgb(110, 30, 78)) ||
                                        this.touching(Color.rgb(63, 49, 138))
                                      ) {
                                        this.stage.vars.touching++;
                                        this.deleteThisClone();
                                      }
                                      yield;
                                    }
                                  } else {
                                    null;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *whenKeyRPressed2() {
    this.deleteThisClone();
  }

  *startAsClone8() {
    if (this.toString(this.stage.vars.sprite) === "Hor") {
      while (true) {
        if (this.touching(this.sprites["Border"].andClones())) {
          this.broadcast("Defeat");
          return;
        }
        yield;
      }
    }
  }

  *whenIReceiveDefeat() {
    this.stage.vars.defeat = 1;
  }

  *whenIReceiveVictory() {
    this.stage.vars.victory = 1;
  }

  *startAsClone9() {
    this.effects.clear();
    while (true) {
      if (this.toNumber(this.stage.vars.defeat) === 1) {
        /* TODO: Implement stop other scripts in sprite */ null;
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += 10;
          yield;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *startAsClone10() {
    this.effects.clear();
    while (true) {
      if (this.toNumber(this.stage.vars.victory) === 1) {
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += 10;
          yield;
        }
        this.deleteThisClone();
      }
      yield;
    }
  }

  *startAsClone11() {
    if (this.toString(this.stage.vars.sprite) === "Ver") {
      while (true) {
        if (this.touching(this.sprites["Border"].andClones())) {
          this.broadcast("Defeat");
          return;
        }
        yield;
      }
    }
  }

  *whenGreenFlagClicked2() {
    this.stage.vars.touching = 0;
  }

  *startAsClone12() {
    if (this.toString(this.stage.vars.sprite) === "Target3") {
      if (this.toNumber(this.stage.vars.level) === 1) {
        this.visible = false;
      } else {
        if (this.toNumber(this.stage.vars.level) === 2) {
          this.visible = false;
        } else {
          if (this.toNumber(this.stage.vars.level) === 3) {
            this.visible = false;
          } else {
            if (this.toNumber(this.stage.vars.level) === 4) {
              this.goto(-50, -50);
              this.costume = "Target";
              this.visible = true;
              while (true) {
                if (
                  this.touching(Color.rgb(110, 30, 78)) ||
                  this.touching(Color.rgb(63, 49, 138))
                ) {
                  this.stage.vars.touching++;
                  this.deleteThisClone();
                }
                yield;
              }
            } else {
              if (this.toNumber(this.stage.vars.level) === 5) {
                this.goto(100, 50);
                this.costume = "Target";
                this.visible = true;
                while (true) {
                  if (
                    this.touching(Color.rgb(110, 30, 78)) ||
                    this.touching(Color.rgb(63, 49, 138))
                  ) {
                    this.stage.vars.touching++;
                    this.deleteThisClone();
                  }
                  yield;
                }
              } else {
                if (this.toNumber(this.stage.vars.level) === 6) {
                  this.goto(100, 0);
                  this.costume = "Target";
                  this.visible = true;
                  while (true) {
                    if (
                      this.touching(Color.rgb(110, 30, 78)) ||
                      this.touching(Color.rgb(63, 49, 138))
                    ) {
                      this.stage.vars.touching++;
                      this.deleteThisClone();
                    }
                    yield;
                  }
                } else {
                  if (this.toNumber(this.stage.vars.level) === 7) {
                    this.goto(125, -125);
                    this.costume = "Target";
                    this.visible = true;
                    while (true) {
                      if (
                        this.touching(Color.rgb(110, 30, 78)) ||
                        this.touching(Color.rgb(63, 49, 138))
                      ) {
                        this.stage.vars.touching++;
                        this.deleteThisClone();
                      }
                      yield;
                    }
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 8) {
                      this.goto(25, -125);
                      this.costume = "Target";
                      this.visible = true;
                      while (true) {
                        if (
                          this.touching(Color.rgb(110, 30, 78)) ||
                          this.touching(Color.rgb(63, 49, 138))
                        ) {
                          this.stage.vars.touching++;
                          this.deleteThisClone();
                        }
                        yield;
                      }
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 9) {
                        this.goto(0, 0);
                        this.costume = "Target";
                        this.visible = true;
                        while (true) {
                          if (
                            this.touching(Color.rgb(110, 30, 78)) ||
                            this.touching(Color.rgb(63, 49, 138))
                          ) {
                            this.stage.vars.touching++;
                            this.deleteThisClone();
                          }
                          yield;
                        }
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 10) {
                          this.goto(0, -115);
                          this.costume = "Target";
                          this.visible = true;
                          while (true) {
                            if (
                              this.touching(Color.rgb(110, 30, 78)) ||
                              this.touching(Color.rgb(63, 49, 138))
                            ) {
                              this.stage.vars.touching++;
                              this.deleteThisClone();
                            }
                            yield;
                          }
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 11) {
                            this.goto(0, -115);
                            this.costume = "Target";
                            this.visible = true;
                            while (true) {
                              if (
                                this.touching(Color.rgb(110, 30, 78)) ||
                                this.touching(Color.rgb(63, 49, 138))
                              ) {
                                this.stage.vars.touching++;
                                this.deleteThisClone();
                              }
                              yield;
                            }
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 12) {
                              this.visible = false;
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 13) {
                                this.goto(0, -115);
                                this.costume = "Target";
                                this.visible = true;
                                while (true) {
                                  if (
                                    this.touching(Color.rgb(110, 30, 78)) ||
                                    this.touching(Color.rgb(63, 49, 138))
                                  ) {
                                    this.stage.vars.touching++;
                                    this.deleteThisClone();
                                  }
                                  yield;
                                }
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 14
                                ) {
                                  this.visible = false;
                                } else {
                                  if (
                                    this.toNumber(this.stage.vars.level) === 15
                                  ) {
                                    this.goto(-150, 0);
                                    this.costume = "Target";
                                    this.visible = true;
                                    while (true) {
                                      if (
                                        this.touching(Color.rgb(110, 30, 78)) ||
                                        this.touching(Color.rgb(63, 49, 138))
                                      ) {
                                        this.stage.vars.touching++;
                                        this.deleteThisClone();
                                      }
                                      yield;
                                    }
                                  } else {
                                    null;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *startAsClone13() {
    if (this.toString(this.stage.vars.sprite) === "Target4") {
      if (this.toNumber(this.stage.vars.level) === 1) {
        this.visible = false;
      } else {
        if (this.toNumber(this.stage.vars.level) === 2) {
          this.visible = false;
        } else {
          if (this.toNumber(this.stage.vars.level) === 3) {
            this.visible = false;
          } else {
            if (this.toNumber(this.stage.vars.level) === 4) {
              this.goto(150, -100);
              this.costume = "Target";
              this.visible = true;
              while (true) {
                if (
                  this.touching(Color.rgb(110, 30, 78)) ||
                  this.touching(Color.rgb(63, 49, 138))
                ) {
                  this.stage.vars.touching++;
                  this.deleteThisClone();
                }
                yield;
              }
            } else {
              if (this.toNumber(this.stage.vars.level) === 5) {
                this.goto(-50, 50);
                this.costume = "Target";
                this.visible = true;
                while (true) {
                  if (
                    this.touching(Color.rgb(110, 30, 78)) ||
                    this.touching(Color.rgb(63, 49, 138))
                  ) {
                    this.stage.vars.touching++;
                    this.deleteThisClone();
                  }
                  yield;
                }
              } else {
                if (this.toNumber(this.stage.vars.level) === 6) {
                  this.visible = false;
                } else {
                  if (this.toNumber(this.stage.vars.level) === 7) {
                    this.goto(100, 75);
                    this.costume = "Target";
                    this.visible = true;
                    while (true) {
                      if (
                        this.touching(Color.rgb(110, 30, 78)) ||
                        this.touching(Color.rgb(63, 49, 138))
                      ) {
                        this.stage.vars.touching++;
                        this.deleteThisClone();
                      }
                      yield;
                    }
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 8) {
                      this.goto(165, -75);
                      this.costume = "Target";
                      this.visible = true;
                      while (true) {
                        if (
                          this.touching(Color.rgb(110, 30, 78)) ||
                          this.touching(Color.rgb(63, 49, 138))
                        ) {
                          this.stage.vars.touching++;
                          this.deleteThisClone();
                        }
                        yield;
                      }
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 9) {
                        this.goto(155, -130);
                        this.costume = "Target";
                        this.visible = true;
                        while (true) {
                          if (
                            this.touching(Color.rgb(110, 30, 78)) ||
                            this.touching(Color.rgb(63, 49, 138))
                          ) {
                            this.stage.vars.touching++;
                            this.deleteThisClone();
                          }
                          yield;
                        }
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 10) {
                          this.goto(155, 0);
                          this.costume = "Target";
                          this.visible = true;
                          while (true) {
                            if (
                              this.touching(Color.rgb(110, 30, 78)) ||
                              this.touching(Color.rgb(63, 49, 138))
                            ) {
                              this.stage.vars.touching++;
                              this.deleteThisClone();
                            }
                            yield;
                          }
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 11) {
                            this.goto(155, 0);
                            this.costume = "Target";
                            this.visible = true;
                            while (true) {
                              if (
                                this.touching(Color.rgb(110, 30, 78)) ||
                                this.touching(Color.rgb(63, 49, 138))
                              ) {
                                this.stage.vars.touching++;
                                this.deleteThisClone();
                              }
                              yield;
                            }
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 12) {
                              this.visible = false;
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 13) {
                                this.goto(0, 115);
                                this.costume = "Target";
                                this.visible = true;
                                while (true) {
                                  if (
                                    this.touching(Color.rgb(110, 30, 78)) ||
                                    this.touching(Color.rgb(63, 49, 138))
                                  ) {
                                    this.stage.vars.touching++;
                                    this.deleteThisClone();
                                  }
                                  yield;
                                }
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 14
                                ) {
                                  this.visible = false;
                                } else {
                                  if (
                                    this.toNumber(this.stage.vars.level) === 15
                                  ) {
                                    this.goto(150, 0);
                                    this.costume = "Target";
                                    this.visible = true;
                                    while (true) {
                                      if (
                                        this.touching(Color.rgb(110, 30, 78)) ||
                                        this.touching(Color.rgb(63, 49, 138))
                                      ) {
                                        this.stage.vars.touching++;
                                        this.deleteThisClone();
                                      }
                                      yield;
                                    }
                                  } else {
                                    null;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *startAsClone14() {
    if (this.toString(this.stage.vars.sprite) === "Target5") {
      if (this.toNumber(this.stage.vars.level) === 1) {
        this.visible = false;
      } else {
        if (this.toNumber(this.stage.vars.level) === 2) {
          this.visible = false;
        } else {
          if (this.toNumber(this.stage.vars.level) === 3) {
            this.visible = false;
          } else {
            if (this.toNumber(this.stage.vars.level) === 4) {
              this.goto(100, 100);
              this.costume = "Target";
              this.visible = true;
              while (true) {
                if (
                  this.touching(Color.rgb(110, 30, 78)) ||
                  this.touching(Color.rgb(63, 49, 138))
                ) {
                  this.stage.vars.touching++;
                  this.deleteThisClone();
                }
                yield;
              }
            } else {
              if (this.toNumber(this.stage.vars.level) === 5) {
                this.visible = false;
              } else {
                if (this.toNumber(this.stage.vars.level) === 6) {
                  this.visible = false;
                } else {
                  if (this.toNumber(this.stage.vars.level) === 7) {
                    this.visible = false;
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 8) {
                      this.visible = false;
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 9) {
                        this.visible = false;
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 10) {
                          this.visible = false;
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 11) {
                            this.visible = false;
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 12) {
                              this.visible = false;
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 13) {
                                this.visible = false;
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 14
                                ) {
                                  this.visible = false;
                                } else {
                                  if (
                                    this.toNumber(this.stage.vars.level) === 15
                                  ) {
                                    this.visible = false;
                                  } else {
                                    null;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveCheck() {
    this.stage.vars.touching = 0;
    this.stage.vars.victory = 0;
    this.stage.vars.defeat = 0;
    while (!(this.toNumber(this.stage.vars.game) === 2)) {
      yield;
    }
    this.stage.vars.touching = 0;
    this.stage.vars.victory = 0;
    this.stage.vars.defeat = 0;
    if (this.toNumber(this.stage.vars.level) === 1) {
      yield* this.levelHorizontalVertical(this.stage.vars.level, 0, 0, 50, 0);
    } else {
      if (this.toNumber(this.stage.vars.level) === 2) {
        yield* this.levelHorizontalVertical(
          this.stage.vars.level,
          -25,
          0,
          25,
          0
        );
      } else {
        if (this.toNumber(this.stage.vars.level) === 3) {
          yield* this.levelHorizontalVertical(
            this.stage.vars.level,
            -50,
            50,
            50,
            -50
          );
        } else {
          if (this.toNumber(this.stage.vars.level) === 4) {
            yield* this.levelHorizontalVertical(
              this.stage.vars.level,
              100,
              0,
              -100,
              50
            );
          } else {
            if (this.toNumber(this.stage.vars.level) === 5) {
              yield* this.levelHorizontalVertical(
                this.stage.vars.level,
                0,
                0,
                50,
                100
              );
            } else {
              if (this.toNumber(this.stage.vars.level) === 6) {
                yield* this.levelHorizontalVertical(
                  this.stage.vars.level,
                  -100,
                  50,
                  -100,
                  -50
                );
              } else {
                if (this.toNumber(this.stage.vars.level) === 7) {
                  yield* this.levelHorizontalVertical(
                    this.stage.vars.level,
                    50,
                    -50,
                    -75,
                    -50
                  );
                } else {
                  if (this.toNumber(this.stage.vars.level) === 8) {
                    yield* this.levelHorizontalVertical(
                      this.stage.vars.level,
                      -50,
                      -50,
                      90,
                      0
                    );
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 9) {
                      yield* this.levelHorizontalVertical(
                        this.stage.vars.level,
                        125,
                        100,
                        125,
                        0
                      );
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 10) {
                        yield* this.levelHorizontalVertical(
                          this.stage.vars.level,
                          -100,
                          0,
                          100,
                          0
                        );
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 11) {
                          yield* this.levelHorizontalVertical(
                            this.stage.vars.level,
                            0,
                            -75,
                            0,
                            75
                          );
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 12) {
                            yield* this.levelHorizontalVertical(
                              this.stage.vars.level,
                              25,
                              0,
                              -25,
                              0
                            );
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 13) {
                              yield* this.levelHorizontalVertical(
                                this.stage.vars.level,
                                25,
                                0,
                                -25,
                                0
                              );
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 14) {
                                yield* this.levelHorizontalVertical(
                                  this.stage.vars.level,
                                  25,
                                  0,
                                  -25,
                                  0
                                );
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 15
                                ) {
                                  yield* this.levelHorizontalVertical(
                                    this.stage.vars.level,
                                    25,
                                    0,
                                    -25,
                                    0
                                  );
                                } else {
                                  null;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *whenIReceiveCheck2() {
    yield* this.wait(1);
    this.stage.vars.touching = 0;
    while (true) {
      if (this.toNumber(this.stage.vars.level) === 1) {
        while (!(this.toNumber(this.stage.vars.touching) === 2)) {
          yield;
        }
        this.stage.vars.touching = 0;
        this.broadcast("Victory");
      } else {
        if (this.toNumber(this.stage.vars.level) === 2) {
          while (!(this.toNumber(this.stage.vars.touching) === 2)) {
            yield;
          }
          this.stage.vars.touching = 0;
          this.broadcast("Victory");
        } else {
          if (this.toNumber(this.stage.vars.level) === 3) {
            while (!(this.toNumber(this.stage.vars.touching) === 2)) {
              yield;
            }
            this.stage.vars.touching = 0;
            this.broadcast("Victory");
          } else {
            if (this.toNumber(this.stage.vars.level) === 4) {
              while (!(this.toNumber(this.stage.vars.touching) === 5)) {
                yield;
              }
              this.stage.vars.touching = 0;
              this.broadcast("Victory");
            } else {
              if (this.toNumber(this.stage.vars.level) === 5) {
                while (!(this.toNumber(this.stage.vars.touching) === 4)) {
                  yield;
                }
                this.stage.vars.touching = 0;
                this.broadcast("Victory");
              } else {
                if (this.toNumber(this.stage.vars.level) === 6) {
                  while (!(this.toNumber(this.stage.vars.touching) === 3)) {
                    yield;
                  }
                  this.stage.vars.touching = 0;
                  this.broadcast("Victory");
                } else {
                  if (this.toNumber(this.stage.vars.level) === 7) {
                    while (!(this.toNumber(this.stage.vars.touching) === 4)) {
                      yield;
                    }
                    this.stage.vars.touching = 0;
                    this.broadcast("Victory");
                  } else {
                    if (this.toNumber(this.stage.vars.level) === 8) {
                      while (!(this.toNumber(this.stage.vars.touching) === 4)) {
                        yield;
                      }
                      this.stage.vars.touching = 0;
                      this.broadcast("Victory");
                    } else {
                      if (this.toNumber(this.stage.vars.level) === 9) {
                        while (
                          !(this.toNumber(this.stage.vars.touching) === 5)
                        ) {
                          yield;
                        }
                        this.stage.vars.touching = 0;
                        this.broadcast("Victory");
                      } else {
                        if (this.toNumber(this.stage.vars.level) === 10) {
                          while (
                            !(this.toNumber(this.stage.vars.touching) === 3)
                          ) {
                            yield;
                          }
                          this.stage.vars.touching = 0;
                          this.broadcast("Victory");
                        } else {
                          if (this.toNumber(this.stage.vars.level) === 11) {
                            while (
                              !(this.toNumber(this.stage.vars.touching) === 4)
                            ) {
                              yield;
                            }
                            this.stage.vars.touching = 0;
                            this.broadcast("Victory");
                          } else {
                            if (this.toNumber(this.stage.vars.level) === 12) {
                              while (
                                !(this.toNumber(this.stage.vars.touching) === 2)
                              ) {
                                yield;
                              }
                              this.stage.vars.touching = 0;
                              this.broadcast("Victory");
                            } else {
                              if (this.toNumber(this.stage.vars.level) === 13) {
                                while (
                                  !(
                                    this.toNumber(this.stage.vars.touching) ===
                                    4
                                  )
                                ) {
                                  yield;
                                }
                                this.stage.vars.touching = 0;
                                this.broadcast("Victory");
                              } else {
                                if (
                                  this.toNumber(this.stage.vars.level) === 14
                                ) {
                                  while (
                                    !(
                                      this.toNumber(
                                        this.stage.vars.touching
                                      ) === 2
                                    )
                                  ) {
                                    yield;
                                  }
                                  this.stage.vars.touching = 0;
                                  this.broadcast("Victory");
                                } else {
                                  if (
                                    this.toNumber(this.stage.vars.level) === 15
                                  ) {
                                    while (
                                      !(
                                        this.toNumber(
                                          this.stage.vars.touching
                                        ) === 4
                                      )
                                    ) {
                                      yield;
                                    }
                                    this.stage.vars.touching = 0;
                                    this.broadcast("Victory");
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      yield;
    }
  }
}
