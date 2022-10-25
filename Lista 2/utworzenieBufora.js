var bufer = new Buffer("Bufor");
console.log(bufer.toString());

var bufer2 = new Buffer("Bufor");
console.log(bufer.toJSON());

var bufer3 = new Buffer("Bufor");
console.log(bufer3[0]);

var bufer4 = new Buffer("Bufor");
bufer4.write("test");
console.log(bufer4.toString());
