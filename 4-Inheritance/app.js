class Person {
    eat()
    {
        console.log("Eat");
    }

    sleep()
    {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(branch)
    {
        super(); //invoke parent class constructor before creating child class
        this.branch = branch;
    }
    work()
    {
        console.log("work...");
        super.sleep();
    }
}


let sam = new Engineer("CSE");
sam.eat();
sam.work();
//sam.sleep();