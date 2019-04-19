import Squad from "./squad";
import ArmyFabric from "../fabrics/army-fabric";

export default class Army extends Squad {

  constructor(name, squads, strategy) {
      super()
      this.name = name;
      this.squads = squads;
      this.strategy = strategy;
  }

  isAlive() {

  }
  checkSquads() {

  }
  getTargetArmy() {
     //random, strongest, weakest
  }
  
}