const people = ["mandi", "jon", "hope", "noel"];
const ages = [10, 20, 30, 40, 50, 200];

// console.log(people);

// module.exports = "hello"; //manually export file

//can also just write people, ages since same name
module.exports = {
  people: people,
  ages: ages,
};
