function fizzBuzz() {  
	var a;
for (i=1;i<=100;i++){
if (i%3==0) {
	if (i%5==0) a="FizzBuzz";
	a="Fizz";
}
else if (i%5==0) a="Buzz";
else a=i;
console.log(a);
}
}

fizzBuzz();