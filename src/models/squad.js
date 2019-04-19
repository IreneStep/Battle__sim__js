import BaseUnit from "./base-unit";

export default class Squad extends BaseUnit {
    
    _units = [];
    // _units = this._units;

    constructor (units, type) {
        super();
        this._units = units; 
        this._type = type;
        // console.log('SQUAD' , this._units);
        // console.log('TYPE' , this._type);
    };
    makeDamage() {
        // throw new Error('makeDamage error');
        // console.log('SQUAD MAKE DMG', this._units);
    };
    isAlive = () => {
        // throw new Error('isALive error');
    };
    atackSuccess = () => {
        throw new Error('attackSuccess() from Squad should be defined');
    };
    damageReceive = () => {
        throw new Error('damageReceive() from Squad should be defined');
    };
    incrementExpforUnits = () => {
         // loop through operators and increment
    };
    startRechargeforUnits = () => {
        // loop through operators and recharge
    };

}

//exp for units, start recharge for units