import { Player, world } from "mojang-minecraft";

export class PlayerLog {
  data: Map<string, any>;
  events: Object;

  constructor() {
    this.data = new Map();
    this.events = {
      playerLeave: world.events.playerLeave.subscribe((data) =>
        this.data.delete(data.playerName)
      ),
    };
  }

  /**
   * Logs a player to a value
   */
  set(player: Player, value: any): void {
    this.data.set(player.name, value);
  }

  /**
   * Gets a players value
   */
  get(player: Player): any {
    return this.data.get(player.name);
  }

  /**
   * Deletes a player from log
   */
  delete(player: Player) {
    this.data.delete(player.name);
  }

  /**
   * Clears this Player log
   */
  clear() {
    this.data.clear();
  }

  /**
   * Gets all the players in the log
   */
  playerNames(): Array<string> {
    return [...this.data.keys()];
  }
}
