const data = [
  {
    name: "Kamal",
    child: [
      {
        name: "Saad",
        child: [
          {
            name: "Humza",
            child: [
              { name: "Rafay", child: [{ name: "Sameer", child: [] }] },
              { name: "Rafeeq", child: [{ name: "Raza", child: [] }] },
            ],
          },
        ],
      },
      {
        name: "Ahmed",
        child: [
          {
            name: "Ali",
            child: [
              { name: "Muneeb", child: [{ name: "Amman", child: [] }] },
              { name: "Umair", child: [{ name: "Usman", child: [] }] },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "R1",
    child: [
      {
        name: "R2",
        child: [
          {
            name: "R3",
            child: [{ name: "R4", child: [{ name: "R5", child: [] }] }],
          },
        ],
      },
    ],
  },
];

function printParentsChilds(data) {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].child.length === 0) {
      return [];
    } else {
      const tempArr = [];
      for (let j = 0; j < data[i].child.length; j++) {
        tempArr.push(`${data[i].name}-${data[i].child[j].name}`);
      }
      arr.push(...tempArr);
      arr.push(...printParentsChilds(data[i].child));
    }
  }
  return arr;
}
console.log(printParentsChilds(data));
