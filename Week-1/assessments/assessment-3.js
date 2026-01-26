//Assessment-3:Write a program that prints all the male people's first name given a complex object.

const assessment = (peopleData) => {
  console.log("------------------------------");
  console.log("Name of Male Candidates Below");
  console.log("------------------------------");
  peopleData.data
    .filter((person) => person.personalInfo.gender === "male")
    .forEach((element, index) => {
      console.log(index + 1, element.personalInfo.firstName);
    });
  console.log("------------------------------");
};

module.exports = assessment;
