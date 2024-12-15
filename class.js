class Animal {
    constructor(name) {
      this.name = name;
    }
    walk() {
        console.log(`${this.name} run!`);
    }
  }
  
  class Rabbit extends Animal {
      constructor() {
        // вызов конструктора родительского класса Animal с аргументом "Rabbit"
        super("Rabbit");
      }
      walk() {
        // вызов метода родительского класса walk()
        super.walk();
        console.log(`${this.name} jump!`);
      }
  }
  new Rabbit("White Rabbit").walk();