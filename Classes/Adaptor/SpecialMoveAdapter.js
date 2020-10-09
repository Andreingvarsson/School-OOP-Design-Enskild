module.exports = class SpecialMoveAdapter {
    constructor(){

    }

    static translateQuoteList = {
        Assasin: 'sneak',
        Barbarian: 'destroy',
        Necromancer: 'undead',
        Wizard: 'pyre'
    }

    static saySomething(object){
        let className = object.constructor.name;
        try{
            return object[this.translateQuoteList[className]]();
        }catch(e){
            throw new Error('Could not adopt this type of object')
        }
    }
}