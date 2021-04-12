const quicksort = require("./quicksort.js");
// test("Sort 1 array", () => {
//     expect(quicksort([0, 7, 5, 10, 5, 3, 8, 0, 4])).toBe(3);
// });
test("Sort 1 array", () => {
    expect(quicksort([1]).toString()).toBe([1].toString());
});
test("Sort 2 array", () => {
    expect(quicksort([0, 0]).toString()).toBe([0, 0].toString());
});
test("Sort 3 array", () => {
    expect(quicksort([0, 1, 2]).toString()).toBe([0, 1, 2].toString());
});
test("Sort 4 array", () => {
    expect(quicksort([6, 1, 10, 2]).toString()).toBe([1, 2, 6, 10].toString());
});
test("Sort 4 array", () => {
    expect(quicksort([3, 2, -3, 6, 1, 10, 9, 0, 2]).toString()).toBe(
        [-3, 0, 1, 2, 2, 3, 6, 9, 10].toString()
    );
});
