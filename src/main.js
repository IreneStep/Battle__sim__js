import fs from 'fs';
import {Battle} from "./core/battle";
import Soldier from './models/soldier';
import SoldierFabric from './fabrics/soldier-fabric';
import ArmyFabric from './fabrics/army-fabric';
import SquadFabric from './fabrics/squad-fabric';



export class Application {
  async init() {
    let json = JSON.parse(fs.readFileSync(__dirname + '/../data/data.json'));

    const armyFabric = ArmyFabric.getInstance();
    const armies = armyFabric.createArmies(json.armies);

    console.log(armies);
    
    const battle = new Battle(armies);
    battle.start();
  }

}
