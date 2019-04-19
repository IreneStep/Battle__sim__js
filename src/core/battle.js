import SoldierFabric from "../fabrics/soldier-fabric";
import SquadFabric from "../fabrics/squad-fabric";
import Squad from "../models/squad";
import BaseUnit from "../models/base-unit";

export class Battle {
  armies = [];

  constructor(armies) {
    this.armies = armies;
  }
  
  start() {
    console.log('Round 1');

  }
}
