const functions = {
    // helloWorld: () => {
    //     console.log("helloworld")        
    // }
}

export class Hatchery {
    constructor(){
        this.dragonlist = {};
        this.counter = 0
    }

    add() {
        
    }
}

export class Dragon {
    constructor(key, name, atk, def, spd, hp, isFemale) {
        this.key = key;
        this.name = name
        this.atk= atk;
        this.def = def;
        this.spd = spd;
        this.hp = hp;
        this.isFemale = isFemale
    }
    
    haveSex(dragon) {
        if (dragon.isFemale === !this.isFemale){
            // if(dragon.isFemale === true) {
            //     return ``
            // }
        }
        return "The two dragons had fun but nothing happened"
    }

}

export default functions