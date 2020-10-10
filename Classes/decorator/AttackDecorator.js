module.exports = class AttackDecorator {
  // Välja helt själv eller ska jag overrida och ge attacker??

  // ta bort damage då jag inte använder det?? 

  static necromancerAtk = [
    { name: "Poison nova"},
    { name: "Corpse explosion"},
    { name: "Bone spear"},
    {name: "Summon undead"}
  ];

  static wizardAtk = [
    { name: "Frost bolt"},
    { name: "Fire blast"},
    { name: "Pyroblast"},
    {name: "Incinerate"}
  ];

  static barbarianAtk = [
    { name: "Bash"},
    { name: "Frenzy"},
    { name: "Whirlwind"},
    {name: "Ancients call"}
  ];

  static assasinAtk = [
    { name: "Jab"},
    { name: "Poison"},
    { name: "Impale"},
    {name: "Death from above"}
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
        return (object.attacks = this.assasinAtk);
      case "Barbarian":
        return (object.attacks = this.barbarianAtk);
      case "Wizard":
        return (object.attacks = this.wizardAtk);
      case "Necromancer":
        return (object.attacks = this.wizardAtk);
    }
  }
};
