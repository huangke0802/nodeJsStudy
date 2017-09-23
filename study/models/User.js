function User(id, name, age){
    this.id = id;
    this.name = name;
    this.age = age;
    this.enter = function(){
        console.log(this.name + "进入图书管");
    }
}

module.exports = User;
