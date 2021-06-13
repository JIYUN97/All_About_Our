const constellation = [
"양", "황소", "쌍둥이", "게",
"사자", "처녀", "천칭", "전갈",
"사수", "염소", "물병", "물고기"
]
// Aries 양
// Taurus 황소
// Gemini 쌍둥이
// Cancer 게자리
// Leo 사자
// Virgo 처녀
// Libra 천칭
// Scorpius 전갈
// Sagittarius 궁수
// Capricornus 염소
// Aquarius 물병
// Pisces 물고기
const group = [];
const gender = ["male", "female"];

for (let i = 0; i < constellation.length; i++) {
    for (let j = 0; j < constellation.length; j++){
        for (let k = 0; k < gender.length; k++) {
            for (let l = 0; l < gender.length; l++) {
                if (group.includes(`${constellation[j]}#${gender[l]}#${constellation[i]}#${gender[k]}#reference#notes#`) === false) {
                    group.push((`${constellation[i]}#${gender[k]}#${constellation[j]}#${gender[l]}#reference#notes#`))
                }                
            }
        }
    }
}

// console.log(group.length)

for (let i = 0; i < group.length; i++) {
    console.log(group[i])
}