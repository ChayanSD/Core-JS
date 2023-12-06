var join = function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const merged = {};

    combinedArray.forEach((obj) => {
        const id = obj.id;
        if (!merged[id]) {
            merged[id] = { ...obj };
        } else {
            merged[id] = { ...merged[id], ...obj };
        }
    });

    const joinedArray = Object.values(merged);
    joinedArray.sort((a, b) => a.id - b.id);

    return joinedArray;
};


let arr1 = [
    {"id": 1, "x": 1},
    {"id": 2, "x": 9}
];
let  arr2 = [
        {"id": 3, "x": 5}
    ];

console.log(join(arr1, arr2));