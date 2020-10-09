module.exports = class AttackDecorator {

    necromancerAtk = [
        { name: "Poison nova", damage: 10 },
        { name: "Corpse explosion", damage: 15 },
        { name: "Bone spear", damage: 20 },
      ];

      wizardAtk = [
        { name: "Frost bolt", damage: 10 },
        { name: "Fire blast", damage: 15 },
        { name: "Pyroblast", damage: 20 },
      ];

      barbarianAtk = [
        { name: "Bash", damage: 5 },
        { name: "Frenzy", damage: 10 },
        { name: "Whirlwind", damage: 15 },
      ];

      assasinAtk = [
        { name: "Jab", damage: 5 },
        { name: "Poison", damage: 10 },
        { name: "Impale", damage: 15 },
      ];



    constructor(){
        throw new Error('AttackDecorator is a static class')
    }

    static teachAttacks(object){
        if(!object.class){
            throw new Error('You need a specific class to  learn attacks')
        }
    }


}