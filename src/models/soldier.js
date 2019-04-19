import Unit from "./unit";

export default class Soldier extends Unit {

    _experience = 0;

    set experience (val) {
        if (val > 50) {
            this._experience = 50;
        } 
        if (val < 0) {
            this._experience = 0;
        } 
        else {
            this._experience = val;
        }
    };

    get experience () {
        return this._experience;
    };

    attackSuccess() {
        //numb

        // var random = 1;
        // var success = 0.5 * (1 + this.health /100) * random*(50 + this._experience, 100) / 100
        // return success;
    };
    makeDamage() {
        // numb
        // makeDamage() -----> redefine!!
        let damage = 0.05 + this._experience;
        console.log(damage, "damage dealt");
        return damage;
    };
    damageReceive() {
        // hz
        // number
     };
     
}