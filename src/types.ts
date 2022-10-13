import { Enchantment, ItemStack, Player, TickEvent } from "mojang-minecraft";
import { ChestGUI } from "./lib/Chest GUI/Models/ChestGUI";
import { Item } from "./lib/Chest GUI/Models/Item";
import { ItemGrabbedCallback } from "./lib/Chest GUI/Models/ItemGrabbedCallback";
import { Page } from "./lib/Chest GUI/Models/Page";
import { Command } from "./lib/Commands/Command";
import { CommandOption } from "./lib/Commands/Options";
import { BlockInventory } from "./modules/models/BlockInventory";

/**
 * The roles that are in this server
 */
export enum ROLES {
  member,
  admin,
  moderator,
  builder,
}

export interface IMsOptions {
  compactDuration?: string;
  fullDuration?: string;
  avoidDuration?: Array<string>;
}

export interface IplayerTickRegister {
  /**
   * callback to send
   */
  callback: (player: Player, event: TickEvent) => void;
  /**
   * delay in ticks
   */
  delay: number;
  /**
   * the last tick it sent a callback
   */
  lastCall: number;
}
export interface IPAGES {
  [key: string]: Page;
}

export interface ISlotChangeReturn {
  /**
   * Slot that changed
   */
  slot: number;
  /**
   * the item that was grabbed / put
   */
  item: ItemStack;
}

export interface IMappedInventoryItem {
  /**
   * a unique id for a itemStack
   */
  uid: string;
  /**
   * the item
   */
  item: ItemStack;
}

export interface ICurrentGUIS {
  [key: string]: ChestGUI;
}

export interface IEvents {
  [key: string]: any;
}

export interface IItemComponents {
  /**
   * the nametag of the item
   */
  nameTag?: string;
  /**
   * The lore of the item
   */
  lore?: string[];
  /**
   * The enchantments on this item
   */
  enchantments?: Enchantment[];
  /**
   * the db key of this itemStack
   */
  dbKey?: string;
}

export interface ISlot {
  /**
   * the Item in this slot
   */
  item: Item;
  /**
   * the that runs when item is grabbed
   */
  action: (callback: ItemGrabbedCallback) => void;
}

export interface ICmds {
  [key: string]: Command;
}

export interface ICommandInfo {
  /**
   * name of the command
   */
  name: string;
  /**
   * description of the command
   */
  description?: string;
  /**
   * other names for the command
   */
  aliases?: string[];
  /**
   * required tags to use command
   */
  tags?: string[];
  /**
   * a function that verifys this player can use this command
   */
  hasPermission?: (player: Player) => Boolean;
  /**
   * a path of all the command it runs through ["maincommand", "firstsubcommand", "second subcommand"]
   */
  path?: string[];
  /**
   * A list of permissions the sender must have to run this command
   */
  permissions?: string[];
}

export interface ISubCommandInfo {
  /**
   * name of the command
   */
  name: string;
  /**
   * description of the command
   */
  description?: string;
  /**
   * required tags to use command
   */
  tags?: string[];
  /**
   * a function that verifys this player can use this command
   */
  hasPermission?: (player: Player) => Boolean;
}

export interface ICommandOptions {
  name: string;
  type: string | Array<any>;
  description?: string;
  optional?: boolean;
  x?: CommandOption;
  y?: CommandOption;
  z?: CommandOption;
}

export interface IContainerLocation {
  [key: string]: BlockInventory;
}

export interface IBanData {
  key: string;
  player: string;
  date: number;
  length: number | null;
  expire: number | null;
  reason: string;
  by: string;
}

export interface IFreezeData {
  player: string;
  key: string;
  reason: string;
  location: {
    x: number;
    y: number;
    z: number;
    dimension: string;
  };
}

export interface IMuteData {
  player: string;
  date: number;
  length: number | null;
  expire: number | null;
  reason: string;
  by: string;
}

export interface INpcLocation {
  dimension: string;
  x: number;
  y: number;
  z: number;
}

export interface IRegionDB {
  dimensionId: string;
  from: IRegionCords;
  to: IRegionCords;
  key: string;
  permissions: IRegionPermissions;
}

export interface IRegionCords {
  x: number;
  z: number;
}

export interface IRegionPermissions {
  /**
   * if the player can use chests, defualt: true
   */
  doorsAndSwitches: Boolean;
  /**
   * if the player can use doors, default: true
   */
  openContainers: Boolean;
  /**
   * if players can fight, default: false
   */
  pvp: Boolean;
  /**
   * the entitys allowed in this region
   */
  allowedEntitys: Array<string>;
}

export interface IChangePlayerRoleData {
  /**
   * The name of the player
   */
  playerName: string;
  /**
   * The role that the player should be set to
   */
  role: keyof typeof ROLES;
}
