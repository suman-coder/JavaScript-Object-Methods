/*JavaScript Object Methods*/

/* Object.seal(obj):
- Sealing an object prevents the addition or deletion of properties.
- Existing properties can still be modified.
- Does not automatically freeze nested objects. 
*/
const student = {
    name: "Alice",
    age: 24,
    designation: "Engineer",
    location: "US",
    working: true
};

Object.seal(student);
console.log("Original object", student); // Output- Original object {name: 'Alice', age: 24, designation: 'Engineer', location: 'US', working: true}
student.name = "John";
console.log("Modified object", student);  // Output- Modified object {name: 'John', age: 24, designation: 'Engineer', location: 'US', working: true}
console.log("Modified name in student object:", student.name); // Output- Modified name in student object: John

/* Object.freeze(obj):
- Freezing an object goes a step further, making it entirely immutable.
- No additions, modifications, or deletions of properties are allowed.
- Nested objects are automatically frozen.
*/
const user = {
    name: "Tim",
    state: "MH",
    profile: "Executive Engineer",
    country: "India",
    language: "English",
    married: true
};

Object.freeze(user); //
console.log("Original object", user); // Output- Original object {name: 'Tim', state: 'MH', profile: 'Executive Engineer', country: 'India', language: 'English', married: true}
student.name = "Harry";
student.state = "UK";
console.log("Modified object", user);  // Output- Modified object {name: 'Tim', state: 'MH', profile: 'Executive Engineer', country: 'India', language: 'English', married: true}
console.log("Modified name and state in user object", user.name, user.state); // Output- Modified name and state in user object: Tim MH