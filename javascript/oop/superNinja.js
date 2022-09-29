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


class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const sensei = new Sensei("Jon")
console.log(sensei)
sensei.showStats()
sensei.speakWisdom()