// Define a Person object with properties and methods
var Person = {
    firstName: "shoaib",
    lastName: "akhter",
    age: 18,
    occupation: "Developer",
  
    // Method to display the full name of the person
    fullName: function() {
      return this.firstName + " " + this.lastName;
    },
  
    // Method to display the person's age
    displayAge: function() {
      return "Age: " + this.age + " years";
    },
  
    // Method to display the person's occupation
    displayOccupation: function() {
      return "Occupation: " + this.occupation;
    }
  };
  
  // Example usage
  console.log(Person.fullName());        // Output: John Doe
  console.log(Person.displayAge());      // Output: Age: 30 years
  console.log(Person.displayOccupation());// Output: Occupation: Developer
  