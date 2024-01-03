const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {

  test ("return an array" , () => {
    const inputArray = [1,2,3,4,5]
    const result = shuffle(inputArray)
    expect(Array.isArray(result)).toBe(true)
   });

   test("return an array of the same length as the argument sent in " , () => {
    const inputArray = [1,2,3,4,5]
    const result = shuffle(inputArray)
    expect(result.length).toEqual(inputArray.length)
   });

   test("Items have been shuffled around" , () => {
    const inputArray = [1,2,3,4,5]
    const result = shuffle(inputArray)
    expect(result).not.toEqual(inputArray.length)
   });


});

