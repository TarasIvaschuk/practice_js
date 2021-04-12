const phones = [
    {
        title: "Iphone 7",
        company: "Apple"
    },
    {
        title: "Galaxy 8",
        company: "Samsung"
    },
    {
        title: "Iphone 11",
        company: "Apple"
    },
    {
        title: "Galaxy 10",
        company: "Samsung"
    },
    {
        title: "Galaxy 11",
        company: "Samsung"
    },
    {
        title: "Htc phone",
        company: "HTC"
    }
];
function getUniqie(arr) {
    // return [...new Set(arr.map((ob) => ob.company))];
    return [
        ...arr.reduce((previous, current) => {
            previous.add(current.company);
            return previous;
        }, new Set())
    ];
}

console.log(getUniqie(phones));
