function User (name, id){
    this.name =name;
    this.id = id;
    this.human = true;
    this.hello = function(){
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 19);


console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();

User.prototype.exit = function(name){
    console.log(`Пользователь ${this.name} выходит из конструкта`)
}
ivan.exit();