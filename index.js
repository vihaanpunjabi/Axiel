import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Notes from "./Notes/Notes.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";
import Title from "./Title/Title.js";
import Play from "./Play/Play.js";
import Gameplay from "./Gameplay/Gameplay.js";
import Transition from "./Transition/Transition.js";
import VictoryDefeat from "./VictoryDefeat/VictoryDefeat.js";
import Border from "./Border/Border.js";
import Level from "./Level/Level.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Notes: new Notes({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9,
  }),
  Title: new Title({
    x: 0,
    y: 50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  Play: new Play({
    x: 0,
    y: -75,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100.49999999999967,
    visible: true,
    layerOrder: 7,
  }),
  Gameplay: new Gameplay({
    x: -75,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 6,
  }),
  Transition: new Transition({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 27000,
    visible: false,
    layerOrder: 8,
  }),
  VictoryDefeat: new VictoryDefeat({
    x: 0,
    y: -165.40000000000003,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4,
  }),
  Border: new Border({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1,
  }),
  Level: new Level({
    x: 0,
    y: -90,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 16,
    size: 95.49999999999997,
    visible: false,
    layerOrder: 3,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
