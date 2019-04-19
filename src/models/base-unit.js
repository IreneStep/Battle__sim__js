export default class BaseUnit {
    
    constructor () {
        // super();

    };

    makeDamage() {
        // numb
        throw new Error('makeDamage() from BaseUnit should be defined');
    };
    isAlive() {
        // bool
        throw new Error('isAlive() from BaseUnit should be defined'); 
    };
    atackSuccess() {
        // numb
        throw new Error('atackSuccess() from BaseUnit should be defined'); 
    };
    damageReceive() {
        // numb
        throw new Error('damageReceive() from BaseUnit should be defined'); 
    };
    getPower() {
        // power - sum of damage and life
        throw new Error('getPower() from BaseUnit should be defined'); 
    }
    
}