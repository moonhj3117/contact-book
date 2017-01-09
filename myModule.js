var myModuel = {
  name: "Kim",
  age : 23,
  aboutMe : function(){
    console.log("Hi, my name is " + this.name + " and I'm " + this.age + " year's odl");
  }
};

module.exports = myModuel;
