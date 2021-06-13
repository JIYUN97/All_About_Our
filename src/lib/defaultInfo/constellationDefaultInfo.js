const constellation = [
"Aries", "Taurus", "Gemini", "Cancer",
"Leo", "Virgo", "Libra", "Scorpio",
"Sagittarius", "Capricorn", "Aquarius", "Pisces"
]

const group = []

const gender = ["male", "female"]
const check = []
let score = '0'

for (let i = 0; i < constellation.length; i++) {
    for (let j = 0; j < constellation.length; j++){
        for (let k = 0; k < gender.length; k++) {
            for (let l = 0; l < gender.length; l++) {
                if (group.includes(`${constellation[j]}#${gender[l]}#${constellation[i]}#${gender[k]}#reference#notes`)===false) {
                    group.push((`${constellation[i]}#${gender[k]}#${constellation[j]}#${gender[l]}#reference#notes#${score}`))
                }                
            }
        }
    }
}

console.log(group.length)
// console.log(check.length)

for (let i = 0; i < group.length; i++) {
    console.log(group[i])
}