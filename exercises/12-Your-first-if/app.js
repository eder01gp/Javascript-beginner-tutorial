var total = prompt('How many km are left to go?');
var returne;

if (total>100) returne= "We Still have a bit of drivinf left to go";
else if (total>50) returne= "We'll be there in 5 minutes";
else if (total>0) returne= "I'm parking. I'll see you right now";
else returne= "Wrong number";

console.log(returne);