import Army from "../models/army";
import SquadFabric from "../fabrics/squad-fabric"
import StrategyFabric from "./strategy-fabric";

let instance = null;

export default class ArmyFabric {
    
    constructor (instance) {
        if (instance) {
            return instance;
        } 
        else instance = this;
    }

    static getInstance () {
        return new ArmyFabric;
    }

    createArmy(data) {
        let squads;
        let strategy;
        const squadFabric = SquadFabric.getInstance();
        const strategyFabric = StrategyFabric.getInstance();
        strategy = strategyFabric.getStrategy(data.strategy);
        squads = squadFabric.createSquads(data.squads);
        return new Army(data.name, squads, strategy);
    };

    createArmies(arrData) { 
        return arrData.map(army => this.createArmy(army));
    }   
}
