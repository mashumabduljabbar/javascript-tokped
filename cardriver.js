let car = {
  get driver(){
    return `name: ${this.name}`;
  },

  set driver(value){
    if (value.length <= 4) {
      console.log("Name is too short");
      return;
    }
    this.name = value;
  }
};

car.driver = "Park";
car.driver = "Parker";

console.log(car.driver);
