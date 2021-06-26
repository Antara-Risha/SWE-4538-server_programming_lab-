const Hellofunc = require("./helloWorld");

//setInterval
setInterval(() => {
    Hellofunc.Hello();
},1000);

setTimeout(() => {
    console.log(Hellofunc.name);
}, 
5000);