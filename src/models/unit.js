import BaseUnit from "./base-unit";

export default class Unit extends BaseUnit {

    constructor (health, recharge, power) {
        super();
        this.setHealth = health;
        this.setRecharge = recharge;
        this.timeRecharge = recharge;
        this.power = power;
    }

    // makeDamage = () => {

    // };
    // atackSuccess = () => {

    // };
    // damageReceive = (damage) => {

    // };

    isAlive() {
        if (this.health > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    setRecharge(value) {
        if(value < 100) {
            this.recharge = 100;
        } 
        if(value > 2000) {
            this.recharge = 2000;
        } 
        else {
            this.recharge = value;
        }
    };
    isRecharged() {
        // bool
    };
    startRecharge() {

    };
    timeRecharge () {
        //Date.now() + startrecharge
    };
    getHealth() {
        return this.health;
    };
    setHealh(health) {
        if (health < 0) {
            this.health = 0;
        }
        if (heath > 100) {
            this.health = 100;
        }
        else {
            this.health = health;
        }
    };
    getPower() {
        // кто самый сильный
    }
    
}