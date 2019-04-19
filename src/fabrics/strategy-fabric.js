import RandomStrategy from "../strategies/random-strategy";
import StrongestStrategy from "../strategies/strongest-strategy";
import WeakestStrategy from "../strategies/weakest-strategy";

let instance = null;
export default class StrategyFabric {
    
    constructor (instance) {
        if (instance) {
            return instance;
        } 
        else instance = this;
    }

    static getInstance () {
        return new StrategyFabric;
    }

    getStrategy(type) {
        // console.log(type);


        if (type === 'strongest') {
            return new StrongestStrategy();
        }
        else if (type === 'weakest') {
            return  new WeakestStrategy();
        }
        else if (type === 'random') {
            return  new RandomStrategy();
        }

    };
   
}
