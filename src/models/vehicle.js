import Unit from "./unit";
import SoldierFabric from "../fabrics/soldier-fabric";
export default class Vehicle extends Unit {

    _operators = []; //soldiers[1..3]

    constructor (health, recharge, operators) {
        super(health, recharge);
        const soldierFabric = SoldierFabric.getInstance();
        this._operators = soldierFabric.createSoldiers(operators);
        // console.log(this._operators);
        // this._operators = [{...operators}];  //  operators: Soldier[1 .. 3]; --array of Soldier objects 
    }

    makeDamage() {
        // return (0.5 * (1 + health / 100) * random(50 + experience, 100)) / 100
        //----->> redefine
    };

    atackSuccess() {

    };

    getTotalHealth() {

    };
    setRecharge(value) {
        // check ang set this.recharge
    };
    isAlive() {

    };
    incExpForOperators() {
        // inc +1 for all
        // loop through operators and increment
    }
    _checkOperator() {
       // remove soldier
    };

}