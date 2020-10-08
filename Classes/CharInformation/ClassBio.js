module.exports = class ClassBio {

    // Singleton möjligtvis om inte GameBoard ??

    constructor(){

    }

    static getAssasinBio(){
        let bio = `The ASSASIN:\nSkilled with daggers, swords and poisons. She is a trained and versatile assasin.\n`;
       console.log(bio);
    };

    static getBarbarianBio(){
        let bio = `The BARBARIAN:\nHe is unequaled in close-quarters combat and mastery of weapons.\n`
       console.log(bio);
    };

    static getWizardBio(){
        let bio = `The WIZARD:\nShe has mastered the elemental magicks - fire, lightning and ice.\n`
        console.log(bio);
    }
    ;
    static getNecromancerBio(){
        let bio = `The NECROMANCER:\nSummoning undead minions and cursing his enemies are his specialities.\n`;
        console.log(bio);
    };

    static getAllBios(){
        this.getAssasinBio();
        this.getBarbarianBio();
        this.getWizardBio();
        this.getNecromancerBio();
    }
}