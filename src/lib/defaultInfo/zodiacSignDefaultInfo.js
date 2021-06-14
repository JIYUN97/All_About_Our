const zodiaSign = [
  "mouse",
  "ox",
  "tiger",
  "rabbit",
  "dragon",
  "snake",
  "horse",
  "lamb",
  "monkey",
  "rooster",
  "dog",
  "pig",
];

const group = [];
const scoreList = [];
const gender = ["male", "female"];
let score = "0";

for (let i = 0; i < zodiaSign.length; i++) {
  for (let j = 0; j < zodiaSign.length; j++) {
    for (let k = 0; k < gender.length; k++) {
      for (let l = 0; l < gender.length; l++) {
        if (
          group.includes(
            `${zodiaSign[j]}#${gender[l]}#${zodiaSign[i]}#${gender[k]}#reference#notes#`
          ) === false
        ) {
          group.push(
            `${zodiaSign[i]}#${gender[k]}#${zodiaSign[j]}#${gender[l]}#reference#notes#`
          );
        }
      }
    }
  }
}

for (let i = 0; i < group.length; i++) {
  console.log(group[i]);
}
