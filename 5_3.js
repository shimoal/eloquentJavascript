//Historical life expectancy

//When we looked up all the people in our data set that lived more than 90 years, only the latest generation in the data came out. Let’s take a closer look at that phenomenon.

//Compute and output the average age of the people in the ancestry data set per century. A person is assigned to a century by taking their year of death, dividing it by 100, and rounding it up, as in Math.ceil(person.died / 100).

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var centuries = {}
ancestry.forEach(function(person){
	var century = Math.ceil(person.died / 100);
	if (!centuries[century])
      centuries[century] = [person];
	else
		centuries[century].push(person);
});

var average_by_century = [];

for (var century in centuries) {
  var ages_of_death = [];
  centuries[century].forEach(function(person){
    ages_of_death.push(person.died - person.born);
  });
  console.log(century+": "+average(ages_of_death));

}


