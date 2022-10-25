const buf1 = new Buffer("to jest test");
console.log(buf1.toString());

console.log(buf1.toString("ascii"));

const buf2 = new Buffer("232432453", "hex");
console.log(buf2.toString());
