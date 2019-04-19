import Soldier from "../models/soldier"

let instance = null;

export default class SoldierFabric {
    
    constructor (instance) {
        if (instance) {
            return instance;
        } 
        else instance = this;
    }

    static getInstance() {
        return new SoldierFabric;
    }

    createSoldier(data) {
        // принимаем объект, на его основе возвращаем экземпляр класа Soldier
        return new Soldier(data.recharge, data.health);
    };

    createSoldiers(arrData) { // arrData - массив солдат
        return arrData.map(soldier => this.createSoldier(soldier));
    }
}