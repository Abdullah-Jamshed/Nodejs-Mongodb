// Virtuals are document properties that you can get and set but that do not get persisted to MongoDB.
// The getters are useful for formatting or combining fields, while setters are useful for de-composing a
// single value into multiple values for storage.

// define a schema
const personSchema = new Schema({
  name: {
    first: String,
    last: String,
  },
});

// compile our model
const Person = mongoose.model("Person", personSchema);

// create a document
const axl = new Person({
  name: { first: "Axl", last: "Rose" },
});

//Suppose you want to print out the person's full name. You could do it yourself:

console.log(axl.name.first + " " + axl.name.last); // Axl Rose

//But concatenating the first and last name every time can get cumbersome.
//And what if you want to do some extra processing on the name, like removing diacritics?
// A virtual property getter lets you define a fullName property that won't get persisted to MongoDB.

personSchema.virtual("fullName").get(function () {
  return this.name.first + " " + this.name.last;
});
//Now, mongoose will call your getter function every time you access the fullName property:

console.log(axl.fullName); // Axl Rose
