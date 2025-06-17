import { moo } from "./moo.js";
import { say } from "cowsay";

let name = "tux"
const cs = say({text: moo(name)});

console.log(cs)
