const blood = [
    "A", "B", "O", "AB"
]

const group = [];
const scoreList = [];
const gender = ["male", "female"];
let score = '0';

for (let i = 0; i < blood.length; i++) {
    for (let j = 0; j < blood.length; j++){
        for (let k = 0; k < gender.length; k++) {
            for (let l = 0; l < gender.length; l++) {
                if (group.includes(`${blood[j]}#${gender[l]}#${blood[i]}#${gender[k]}#reference#notes#`) === false) {
                    group.push((`${blood[i]}#${gender[k]}#${blood[j]}#${gender[l]}#reference#notes#`))
                }                
            }
        }
    }
}

for (let i = 0; i < group.length; i++) {
    console.log(group[i])
}