//! Sin Segregacion de interfaces

// interface Bird {
//     fly()  : void;
//     eat()  : void;
//     run()  : void;
//     swim() : void;
// }

// class Tucan implements Bird {
//     public fly() {}
//     public eat() {}
//     public run() {}
//     public swim() {}
// }

// class Humminbird implements Bird {
//     public fly() {}
//     public eat() {}
//     public run() {}
//     public swim() {}
// }

// class Ostrich implements Bird {
//     public fly() {
//         throw Error ('Ostriches cannot fly');
//     }
//     public eat() {}
//     public run() {}
//     public swim() {}
// }

// class Penguin implements Bird {
//     public fly() {
//         throw Error ('Penguins cannot fly');
//     }
//     public eat() {}
//     public run() {}
//     public swim() {}
// }

//. Con segregacion de interfaces

interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): number;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}


class Tucan implements Bird, FlyingBird {
    public fly() { return 100; }
    public eat() {}
}

class Humminbird implements Bird, FlyingBird {
    public fly() { return 200; }
    public eat() {}
}

class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
}

class Penguin implements Bird, SwimmerBird {
    public eat() {}
    public swim() {}
}


