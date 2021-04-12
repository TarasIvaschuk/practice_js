const partition = require("./partition.js");
test("Partition 1 array", () => {
    expect(partition([0, 7, 5, 10, 5, 3, 8, 0, 4]).toString()).toBe(
        [[0, 3, 0, 4, 5, 7, 8, 5, 10], 3].toString()
    );
});
test("Partition 2 array", () => {
    expect(partition([1]).toString()).toBe([[1], 0].toString());
});
test("Partition 3 array", () => {
    expect(partition([0, 0]).toString()).toBe([[0, 0], 0].toString());
});
test("Partition 3 array", () => {
    expect(partition([6, 1, 10, 2]).toString()).toBe([[1, 2, 10, 6], 1].toString());
});
