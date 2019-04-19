// все 3 стратегии реализует targetSquad
import Strategy from "../models/strategy";

export default class StrongestStrategy extends Strategy{  
    
    constructor() {
        super()
    }

    targetSquad () {
        //выбрали самого сильного
    }
    
}