import { getRole } from "../../utils.js";
import { Ban } from "../models/Ban.js";
import { Protection } from "../models/Protection.js";

/**
 * Minecraft Bedrock Anti Crasher
 * @license MIT
 * @author Smell of curry
 * @version 1.0.0
 * --------------------------------------------------------------------------
 * This anti crasher works by testing if a player has reached a location
 * Horion's crasher teleports the player to 30 Million so we just test for
 * That location and if they are there we kick the player (USES: player.json)
 * --------------------------------------------------------------------------
 */

/**
 * This is the distance where if you go past it will ban you
 */
const DISTANCE = 320000;

new Protection(
  "crasher",
  "Protection against type 1 crasher",
  "textures/ui/servers.png",
  true
).forEachPlayer((player) => {
  if (getRole(player) == "admin") return;
  if (
    Math.abs(player.location.x) > DISTANCE ||
    Math.abs(player.location.y) > DISTANCE ||
    Math.abs(player.location.z) > DISTANCE
  ) {
    new Ban(player, null, "Crasher detected");
  }
});
