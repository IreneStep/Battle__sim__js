import Squad from "../models/squad";
import SoldierFabric from "./soldier-fabric";
import VehicleFabric from "./vehicle-fabric"

let instance = null;


export default class SquadFabric {
    
    constructor (instance) {
        if (instance) {
            return instance;
        } 
        else instance = this;
    }

    static getInstance () {
        return new SquadFabric;
    }

    createSquad(data) {
        let units;
        const soldierFabric = SoldierFabric.getInstance();
        const vehicleFabric = VehicleFabric.getInstance();

        if (data.type === 'soldiers'){
            units = soldierFabric.createSoldiers(data.units);
        }
        else if (data.type === 'vehicles'){
            units = vehicleFabric.createVehicles(data.units);
        }
        return new Squad(units, data.type);
    };

    createSquads(arrData) { 
        return arrData.map(squad => this.createSquad(squad));
    }
}
