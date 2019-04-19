    import Vehicle from "../models/vehicle";

    let instance = null;
    export default class VehicleFabric {
        
        constructor (instance) {
            if (instance) {
                return instance;
            } 
            else instance = this;
        }

        static getInstance () {
            return new VehicleFabric;
        }

        createVehicle(data) {
            return new Vehicle(data.recharge, data.health, data.operators);
        };
        createVehicles(arrData) { 
            return arrData.map(vehicle => this.createVehicle(vehicle));
        }   
    }
