import { v4 as uuidv4 } from 'uuid';
import asta from "/src/assets/images/asta.png";
import deku from "/src/assets/images/deku.jpg";
import gintoki from "/src/assets/images/gintoki.jpg";
import goku from "/src/assets/images/goku.jpg";
import ichigo from "/src/assets/images/ichigo.jpg";
import luffy from "/src/assets/images/luffy.jpg";
import naruto from "/src/assets/images/naruto.jpg";
import natsu from "/src/assets/images/natsu.jpg";
import rimuru from "/src/assets/images/rimuru.jpeg";
import saitama from "/src/assets/images/saitama.jpg";

const characters = [
  {
    name: "Asta",
    src: asta,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Deku",
    src: deku,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Gintoki",
    src: gintoki,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Goku",
    src: goku,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Ichigo",
    src: ichigo,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Luffy",
    src: luffy,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Naruto",
    src: naruto,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Natsu",
    src: natsu,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Rimuru",
    src: rimuru,
    id: uuidv4(),
    checked: false
  },
  {
    name: "Saitama",
    src: saitama,
    id: uuidv4(),
    checked: false
  },
];

export default characters;