class ToyotaCar {

    //if we do onot define this JS automatically creates object

    constructor()
    {
        console.log("Creating object");
    }
    start()
    {
        console.log("car start");
    }

    stop()
    {
        console.log("car stop");
    }

    setBrand(brand)
    {
        this.brandName = brand;
    }

}

let fortuner = new ToyotaCar();
fortuner.setBrand("Toyota");
let lexus = new ToyotaCar();
