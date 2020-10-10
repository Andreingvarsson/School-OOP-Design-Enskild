module.exports = class AttackDecorator {
  // Välja helt själv eller ska jag overrida och ge attacker??

  // ta bort damage då jag inte använder det?? 

  static necromancerAtk = [
    { name: "Poison nova", damage: 10 },
    { name: "Corpse explosion", damage: 15 },
    { name: "Bone spear", damage: 20 },
  ];

  static wizardAtk = [
    { name: "Frost bolt", damage: 10 },
    { name: "Fire blast", damage: 15 },
    { name: "Pyroblast", damage: 20 },
  ];

  static barbarianAtk = [
    { name: "Bash", damage: 5 },
    { name: "Frenzy", damage: 10 },
    { name: "Whirlwind", damage: 15 },
  ];

  static assasinAtk = [
    { name: "Jab", damage: 5 },
    { name: "Poison", damage: 10 },
    { name: "Impale", damage: 15 },
  ];

  constructor() {
    throw new Error("AttackDecorator is a static class");
  }

  static teachAttacks(object) {
    if (!object.class) {
      throw new Error("You need a specific class to  learn attacks");
    }

    switch (object.class) {
      case "Assasin":
        return (object.assasinAtk = this.assasinAtk);
      case "Barbarian":
        return (object.barbarianAtk = this.barbarianAtk);
      case "Wizard":
        return (object.wizardAtk = this.wizardAtk);
      case "Necromancer":
        return (object.necromancerAtk = this.wizardAtk);
    }
  }
};
