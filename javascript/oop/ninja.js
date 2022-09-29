class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Hello ${this.name}`);
    };
    
    showStats() {
        console.log(
            `Name: ${this.name}
            Health: ${this.health}
            Speed: ${this.speed}
            Strength: ${this.strength}`
            )
    };

    drinkSake() {
        this.health += 10;
        console.log(`${this.name}'s health +10: ${this.health}`)
    };
}


const ninja = new Ninja("Snake Eyes");
console.log(ninja);
ninja.sayName();
ninja.showStats();
ninja.drinkSake();