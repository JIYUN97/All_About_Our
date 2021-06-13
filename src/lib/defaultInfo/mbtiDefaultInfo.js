const mbti = [
    "INTJ", "INTP", "ENTJ", "ENTP",
    "INFJ", "INFP", "ENFJ", "ENFP",
    "ISTJ", "ISFJ", "ESTJ", "ESFJ",
    "ISTP", "ISFP", "ESTP", "ESFP"
]

const group = [];
const scoreList = [];
const gender = ["male", "female"];
let score = '0';

for (let i = 0; i < mbti.length; i++) {
    for (let j = 0; j < mbti.length; j++){
        for (let k = 0; k < gender.length; k++) {
            for (let l = 0; l < gender.length; l++) {
                score = '0'
                // default score
                if (mbti[i] === "INFP" && mbti[j] === "INFP" || mbti[j] === "INFP" && mbti[i] === "INFP" ) { score = '80' }
                if (mbti[i] === "INFP" && mbti[j] === "ENFP" || mbti[j] === "INFP" && mbti[i] === "ENFP" ) { score = '80' }
                if (mbti[i] === "INFP" && mbti[j] === "INFJ" || mbti[j] === "INFP" && mbti[i] === "INFJ" ) { score = '80' }
                if (mbti[i] === "INFP" && mbti[j] === "ENFJ" || mbti[j] === "INFP" && mbti[i] === "ENFJ" ) { score = '100' }
                if (mbti[i] === "INFP" && mbti[j] === "INTJ" || mbti[j] === "INFP" && mbti[i] === "INTJ" ) { score = '80' }
                if (mbti[i] === "INFP" && mbti[j] === "ENTJ" || mbti[j] === "INFP" && mbti[i] === "ENTJ" ) { score = '100' }
                if (mbti[i] === "INFP" && mbti[j] === "INTP" || mbti[j] === "INFP" && mbti[i] === "INTP" ) { score = '80' }
                if (mbti[i] === "INFP" && mbti[j] === "ENTP" || mbti[j] === "INFP" && mbti[i] === "ENTP" ) { score = '80' }
                if (mbti[i] === "INFP" && mbti[j] === "ISFP" || mbti[j] === "INFP" && mbti[i] === "ISFP" ) { score = '20' }
                if (mbti[i] === "INFP" && mbti[j] === "ESFP" || mbti[j] === "INFP" && mbti[i] === "ESFP" ) { score = '20' }
                if (mbti[i] === "INFP" && mbti[j] === "ISTP" || mbti[j] === "INFP" && mbti[i] === "ISTP" ) { score = '20' }
                if (mbti[i] === "INFP" && mbti[j] === "ESTP" || mbti[j] === "INFP" && mbti[i] === "ESTP" ) { score = '20' }
                if (mbti[i] === "INFP" && mbti[j] === "ISFJ" || mbti[j] === "INFP" && mbti[i] === "ISFJ" ) { score = '20' }
                if (mbti[i] === "INFP" && mbti[j] === "ESFJ" || mbti[j] === "INFP" && mbti[i] === "ESFJ" ) { score = '20' }
                if (mbti[i] === "INFP" && mbti[j] === "ISTJ" || mbti[j] === "INFP" && mbti[i] === "ISTJ" ) { score = '20' }
                if (mbti[i] === "INFP" && mbti[j] === "ESTJ" || mbti[j] === "INFP" && mbti[i] === "ESTJ" ) { score = '20' }

                if (mbti[i] === "ENFP" && mbti[j] === "ENFP" || mbti[j] === "ENFP" && mbti[i] === "ENFP" ) { score = '80' }
                if (mbti[i] === "ENFP" && mbti[j] === "INFJ" || mbti[j] === "ENFP" && mbti[i] === "INFJ" ) { score = '100' }
                if (mbti[i] === "ENFP" && mbti[j] === "ENFJ" || mbti[j] === "ENFP" && mbti[i] === "ENFJ" ) { score = '80' }
                if (mbti[i] === "ENFP" && mbti[j] === "INTJ" || mbti[j] === "ENFP" && mbti[i] === "INTJ" ) { score = '100' }
                if (mbti[i] === "ENFP" && mbti[j] === "ENTJ" || mbti[j] === "ENFP" && mbti[i] === "ENTJ" ) { score = '80' }
                if (mbti[i] === "ENFP" && mbti[j] === "INTP" || mbti[j] === "ENFP" && mbti[i] === "INTP" ) { score = '80' }
                if (mbti[i] === "ENFP" && mbti[j] === "ENTP" || mbti[j] === "ENFP" && mbti[i] === "ENTP" ) { score = '80' }
                if (mbti[i] === "ENFP" && mbti[j] === "ISFP" || mbti[j] === "ENFP" && mbti[i] === "ISFP" ) { score = '20' }
                if (mbti[i] === "ENFP" && mbti[j] === "ESFP" || mbti[j] === "ENFP" && mbti[i] === "ESFP" ) { score = '20' }
                if (mbti[i] === "ENFP" && mbti[j] === "ISTP" || mbti[j] === "ENFP" && mbti[i] === "ISTP" ) { score = '20' }
                if (mbti[i] === "ENFP" && mbti[j] === "ESTP" || mbti[j] === "ENFP" && mbti[i] === "ESTP" ) { score = '20' }
                if (mbti[i] === "ENFP" && mbti[j] === "ISFJ" || mbti[j] === "ENFP" && mbti[i] === "ISFJ" ) { score = '20' }
                if (mbti[i] === "ENFP" && mbti[j] === "ESFJ" || mbti[j] === "ENFP" && mbti[i] === "ESFJ" ) { score = '20' }
                if (mbti[i] === "ENFP" && mbti[j] === "ISTJ" || mbti[j] === "ENFP" && mbti[i] === "ISTJ" ) { score = '20' }
                if (mbti[i] === "ENFP" && mbti[j] === "ESTJ" || mbti[j] === "ENFP" && mbti[i] === "ESTJ" ) { score = '20' }

                if (mbti[i] === "INFJ" && mbti[j] === "INFJ" || mbti[j] === "INFJ" && mbti[i] === "INFJ" ) { score = '80' }
                if (mbti[i] === "INFJ" && mbti[j] === "ENFJ" || mbti[j] === "INFJ" && mbti[i] === "ENFJ" ) { score = '80' }
                if (mbti[i] === "INFJ" && mbti[j] === "INTJ" || mbti[j] === "INFJ" && mbti[i] === "INTJ" ) { score = '80' }
                if (mbti[i] === "INFJ" && mbti[j] === "ENTJ" || mbti[j] === "INFJ" && mbti[i] === "ENTJ" ) { score = '80' }
                if (mbti[i] === "INFJ" && mbti[j] === "INTP" || mbti[j] === "INFJ" && mbti[i] === "INTP" ) { score = '80' }
                if (mbti[i] === "INFJ" && mbti[j] === "ENTP" || mbti[j] === "INFJ" && mbti[i] === "ENTP" ) { score = '100' }
                if (mbti[i] === "INFJ" && mbti[j] === "ISFP" || mbti[j] === "INFJ" && mbti[i] === "ISFP" ) { score = '20' }
                if (mbti[i] === "INFJ" && mbti[j] === "ESFP" || mbti[j] === "INFJ" && mbti[i] === "ESFP" ) { score = '20' }
                if (mbti[i] === "INFJ" && mbti[j] === "ISTP" || mbti[j] === "INFJ" && mbti[i] === "ISTP" ) { score = '20' }
                if (mbti[i] === "INFJ" && mbti[j] === "ESTP" || mbti[j] === "INFJ" && mbti[i] === "ESTP" ) { score = '20' }
                if (mbti[i] === "INFJ" && mbti[j] === "ISFJ" || mbti[j] === "INFJ" && mbti[i] === "ISFJ" ) { score = '20' }
                if (mbti[i] === "INFJ" && mbti[j] === "ESFJ" || mbti[j] === "INFJ" && mbti[i] === "ESFJ" ) { score = '20' }
                if (mbti[i] === "INFJ" && mbti[j] === "ISTJ" || mbti[j] === "INFJ" && mbti[i] === "ISTJ" ) { score = '20' }
                if (mbti[i] === "INFJ" && mbti[j] === "ESTJ" || mbti[j] === "INFJ" && mbti[i] === "ESTJ" ) { score = '20' }

                if (mbti[i] === "ENFJ" && mbti[j] === "ENFJ" || mbti[j] === "ENFJ" && mbti[i] === "ENFJ" ) { score = '80' }
                if (mbti[i] === "ENFJ" && mbti[j] === "INTJ" || mbti[j] === "ENFJ" && mbti[i] === "INTJ" ) { score = '80' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ENTJ" || mbti[j] === "ENFJ" && mbti[i] === "ENTJ" ) { score = '80' }
                if (mbti[i] === "ENFJ" && mbti[j] === "INTP" || mbti[j] === "ENFJ" && mbti[i] === "INTP" ) { score = '80' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ENTP" || mbti[j] === "ENFJ" && mbti[i] === "ENTP" ) { score = '80' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ISFP" || mbti[j] === "ENFJ" && mbti[i] === "ISFP" ) { score = '100' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ESFP" || mbti[j] === "ENFJ" && mbti[i] === "ESFP" ) { score = '20' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ISTP" || mbti[j] === "ENFJ" && mbti[i] === "ISTP" ) { score = '20' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ESTP" || mbti[j] === "ENFJ" && mbti[i] === "ESTP" ) { score = '20' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ISFJ" || mbti[j] === "ENFJ" && mbti[i] === "ISFJ" ) { score = '20' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ESFJ" || mbti[j] === "ENFJ" && mbti[i] === "ESFJ" ) { score = '20' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ISTJ" || mbti[j] === "ENFJ" && mbti[i] === "ISTJ" ) { score = '20' }
                if (mbti[i] === "ENFJ" && mbti[j] === "ESTJ" || mbti[j] === "ENFJ" && mbti[i] === "ESTJ" ) { score = '20' }

                if (mbti[i] === "INTJ" && mbti[j] === "INTJ" || mbti[j] === "INTJ" && mbti[i] === "INTJ" ) { score = '80' }
                if (mbti[i] === "INTJ" && mbti[j] === "ENTJ" || mbti[j] === "INTJ" && mbti[i] === "ENTJ" ) { score = '80' }
                if (mbti[i] === "INTJ" && mbti[j] === "INTP" || mbti[j] === "INTJ" && mbti[i] === "INTP" ) { score = '80' }
                if (mbti[i] === "INTJ" && mbti[j] === "ENTP" || mbti[j] === "INTJ" && mbti[i] === "ENTP" ) { score = '100' }
                if (mbti[i] === "INTJ" && mbti[j] === "ISFP" || mbti[j] === "INTJ" && mbti[i] === "ISFP" ) { score = '60' }
                if (mbti[i] === "INTJ" && mbti[j] === "ESFP" || mbti[j] === "INTJ" && mbti[i] === "ESFP" ) { score = '60' }
                if (mbti[i] === "INTJ" && mbti[j] === "ISTP" || mbti[j] === "INTJ" && mbti[i] === "ISTP" ) { score = '60' }
                if (mbti[i] === "INTJ" && mbti[j] === "ESTP" || mbti[j] === "INTJ" && mbti[i] === "ESTP" ) { score = '60' }
                if (mbti[i] === "INTJ" && mbti[j] === "ISFJ" || mbti[j] === "INTJ" && mbti[i] === "ISFJ" ) { score = '40' }
                if (mbti[i] === "INTJ" && mbti[j] === "ESFJ" || mbti[j] === "INTJ" && mbti[i] === "ESFJ" ) { score = '40' }
                if (mbti[i] === "INTJ" && mbti[j] === "ISTJ" || mbti[j] === "INTJ" && mbti[i] === "ISTJ" ) { score = '40' }
                if (mbti[i] === "INTJ" && mbti[j] === "ESTJ" || mbti[j] === "INTJ" && mbti[i] === "ESTJ" ) { score = '40' }

                if (mbti[i] === "ENTJ" && mbti[j] === "ENTJ" || mbti[j] === "ENTJ" && mbti[i] === "ENTJ" ) { score = '80' }
                if (mbti[i] === "ENTJ" && mbti[j] === "INTP" || mbti[j] === "ENTJ" && mbti[i] === "INTP" ) { score = '100' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ENTP" || mbti[j] === "ENTJ" && mbti[i] === "ENTP" ) { score = '80' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ISFP" || mbti[j] === "ENTJ" && mbti[i] === "ISFP" ) { score = '60' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ESFP" || mbti[j] === "ENTJ" && mbti[i] === "ESFP" ) { score = '60' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ISTP" || mbti[j] === "ENTJ" && mbti[i] === "ISTP" ) { score = '60' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ESTP" || mbti[j] === "ENTJ" && mbti[i] === "ESTP" ) { score = '60' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ISFJ" || mbti[j] === "ENTJ" && mbti[i] === "ISFJ" ) { score = '60' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ESFJ" || mbti[j] === "ENTJ" && mbti[i] === "ESFJ" ) { score = '60' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ISTJ" || mbti[j] === "ENTJ" && mbti[i] === "ISTJ" ) { score = '60' }
                if (mbti[i] === "ENTJ" && mbti[j] === "ESTJ" || mbti[j] === "ENTJ" && mbti[i] === "ESTJ" ) { score = '60' }

                if (mbti[i] === "INTP" && mbti[j] === "INTP" || mbti[j] === "INTP" && mbti[i] === "INTP" ) { score = '80' }
                if (mbti[i] === "INTP" && mbti[j] === "ENTP" || mbti[j] === "INTP" && mbti[i] === "ENTP" ) { score = '80' }
                if (mbti[i] === "INTP" && mbti[j] === "ISFP" || mbti[j] === "INTP" && mbti[i] === "ISFP" ) { score = '60' }
                if (mbti[i] === "INTP" && mbti[j] === "ESFP" || mbti[j] === "INTP" && mbti[i] === "ESFP" ) { score = '60' }
                if (mbti[i] === "INTP" && mbti[j] === "ISTP" || mbti[j] === "INTP" && mbti[i] === "ISTP" ) { score = '60' }
                if (mbti[i] === "INTP" && mbti[j] === "ESTP" || mbti[j] === "INTP" && mbti[i] === "ESTP" ) { score = '60' }
                if (mbti[i] === "INTP" && mbti[j] === "ISFJ" || mbti[j] === "INTP" && mbti[i] === "ISFJ" ) { score = '40' }
                if (mbti[i] === "INTP" && mbti[j] === "ESFJ" || mbti[j] === "INTP" && mbti[i] === "ESFJ" ) { score = '40' }
                if (mbti[i] === "INTP" && mbti[j] === "ISTJ" || mbti[j] === "INTP" && mbti[i] === "ISTJ" ) { score = '40' }
                if (mbti[i] === "INTP" && mbti[j] === "ESTJ" || mbti[j] === "INTP" && mbti[i] === "ESTJ" ) { score = '100' }

                if (mbti[i] === "ENTP" && mbti[j] === "ENTP" || mbti[j] === "ENTP" && mbti[i] === "ENTP" ) { score = '80' }
                if (mbti[i] === "ENTP" && mbti[j] === "ISFP" || mbti[j] === "ENTP" && mbti[i] === "ESFP" ) { score = '60' }
                if (mbti[i] === "ENTP" && mbti[j] === "ESFP" || mbti[j] === "ENTP" && mbti[i] === "ESFP" ) { score = '60' }
                if (mbti[i] === "ENTP" && mbti[j] === "ISTP" || mbti[j] === "ENTP" && mbti[i] === "ISTP" ) { score = '60' }
                if (mbti[i] === "ENTP" && mbti[j] === "ESTP" || mbti[j] === "ENTP" && mbti[i] === "ESTP" ) { score = '60' }
                if (mbti[i] === "ENTP" && mbti[j] === "ISFJ" || mbti[j] === "ENTP" && mbti[i] === "ISFJ" ) { score = '40' }
                if (mbti[i] === "ENTP" && mbti[j] === "ESFJ" || mbti[j] === "ENTP" && mbti[i] === "ESFJ" ) { score = '40' }
                if (mbti[i] === "ENTP" && mbti[j] === "ISTJ" || mbti[j] === "ENTP" && mbti[i] === "ISTJ" ) { score = '40' }
                if (mbti[i] === "ENTP" && mbti[j] === "ESTJ" || mbti[j] === "ENTP" && mbti[i] === "ESTJ" ) { score = '40' }

                if (mbti[i] === "ISFP" && mbti[j] === "ISFP" || mbti[j] === "ISFP" && mbti[i] === "ISFP" ) { score = '40' }
                if (mbti[i] === "ISFP" && mbti[j] === "ESFP" || mbti[j] === "ISFP" && mbti[i] === "ESFP" ) { score = '40' }
                if (mbti[i] === "ISFP" && mbti[j] === "ISTP" || mbti[j] === "ISFP" && mbti[i] === "ISTP" ) { score = '40' }
                if (mbti[i] === "ISFP" && mbti[j] === "ESTP" || mbti[j] === "ISFP" && mbti[i] === "ESTP" ) { score = '40' }
                if (mbti[i] === "ISFP" && mbti[j] === "ISFJ" || mbti[j] === "ISFP" && mbti[i] === "ISFJ" ) { score = '60' }
                if (mbti[i] === "ISFP" && mbti[j] === "ESFJ" || mbti[j] === "ISFP" && mbti[i] === "ESFJ" ) { score = '100' }
                if (mbti[i] === "ISFP" && mbti[j] === "ISTJ" || mbti[j] === "ISFP" && mbti[i] === "ISTJ" ) { score = '60' }
                if (mbti[i] === "ISFP" && mbti[j] === "ESTJ" || mbti[j] === "ISFP" && mbti[i] === "ESTJ" ) { score = '100' }

                if (mbti[i] === "ESFP" && mbti[j] === "ESFP" || mbti[j] === "ESFP" && mbti[i] === "ESFP" ) { score = '40' }
                if (mbti[i] === "ESFP" && mbti[j] === "ISTP" || mbti[j] === "ESFP" && mbti[i] === "ISTP" ) { score = '40' }
                if (mbti[i] === "ESFP" && mbti[j] === "ESTP" || mbti[j] === "ESFP" && mbti[i] === "ESTP" ) { score = '40' }
                if (mbti[i] === "ESFP" && mbti[j] === "ISFJ" || mbti[j] === "ESFP" && mbti[i] === "ISFJ" ) { score = '100' }
                if (mbti[i] === "ESFP" && mbti[j] === "ESFJ" || mbti[j] === "ESFP" && mbti[i] === "ESFJ" ) { score = '60' }
                if (mbti[i] === "ESFP" && mbti[j] === "ISTJ" || mbti[j] === "ESFP" && mbti[i] === "ISTJ" ) { score = '100' }
                if (mbti[i] === "ESFP" && mbti[j] === "ESTJ" || mbti[j] === "ESFP" && mbti[i] === "ESTJ" ) { score = '60' }

                if (mbti[i] === "ISTP" && mbti[j] === "ISTP" || mbti[j] === "ISTP" && mbti[i] === "ISTP" ) { score = '40' }
                if (mbti[i] === "ISTP" && mbti[j] === "ESTP" || mbti[j] === "ISTP" && mbti[i] === "ESTP" ) { score = '40' }
                if (mbti[i] === "ISTP" && mbti[j] === "ISFJ" || mbti[j] === "ISTP" && mbti[i] === "ISFJ" ) { score = '60' }
                if (mbti[i] === "ISTP" && mbti[j] === "ESFJ" || mbti[j] === "ISTP" && mbti[i] === "ESFJ" ) { score = '100' }
                if (mbti[i] === "ISTP" && mbti[j] === "ISTJ" || mbti[j] === "ISTP" && mbti[i] === "ISTJ" ) { score = '60' }
                if (mbti[i] === "ISTP" && mbti[j] === "ESTJ" || mbti[j] === "ISTP" && mbti[i] === "ESTJ" ) { score = '100' }

                if (mbti[i] === "ESTP" && mbti[j] === "ESTP" || mbti[j] === "ESTP" && mbti[i] === "ESTP" ) { score = '40' }
                if (mbti[i] === "ESTP" && mbti[j] === "ISFJ" || mbti[j] === "ESTP" && mbti[i] === "ISFJ" ) { score = '100' }
                if (mbti[i] === "ESTP" && mbti[j] === "ESFJ" || mbti[j] === "ESTP" && mbti[i] === "ESFJ" ) { score = '60' }
                if (mbti[i] === "ESTP" && mbti[j] === "ISTJ" || mbti[j] === "ESTP" && mbti[i] === "ISTJ" ) { score = '100' }
                if (mbti[i] === "ESTP" && mbti[j] === "ESTJ" || mbti[j] === "ESTP" && mbti[i] === "ESTJ" ) { score = '60' }

                if (mbti[i] === "ISFJ" && mbti[j] === "ISFJ" || mbti[j] === "ISFJ" && mbti[i] === "ISFJ" ) { score = '80' }
                if (mbti[i] === "ISFJ" && mbti[j] === "ESFJ" || mbti[j] === "ISFJ" && mbti[i] === "ESFJ" ) { score = '80' }
                if (mbti[i] === "ISFJ" && mbti[j] === "ISTJ" || mbti[j] === "ISFJ" && mbti[i] === "ISTJ" ) { score = '80' }
                if (mbti[i] === "ISFJ" && mbti[j] === "ESTJ" || mbti[j] === "ISFJ" && mbti[i] === "ESTJ" ) { score = '80' }

                if (mbti[i] === "ESFJ" && mbti[j] === "ESFJ" || mbti[j] === "ESFJ" && mbti[i] === "ESFJ" ) { score = '80' }
                if (mbti[i] === "ESFJ" && mbti[j] === "ISTJ" || mbti[j] === "ESFJ" && mbti[i] === "ISTJ" ) { score = '80' }
                if (mbti[i] === "ESFJ" && mbti[j] === "ESTJ" || mbti[j] === "ESFJ" && mbti[i] === "ESTJ" ) { score = '80' }

                if (mbti[i] === "ISTJ" && mbti[j] === "ISTJ" || mbti[j] === "ISTJ" && mbti[i] === "ISTJ" ) { score = '80' }
                if (mbti[i] === "ISTJ" && mbti[j] === "ESTJ" || mbti[j] === "ISTJ" && mbti[i] === "ESTJ" ) { score = '80' }

                if (mbti[i] === "ESTJ" && mbti[j] === "ESTJ" || mbti[j] === "ESTJ" && mbti[i] === "ESTJ" ) { score = '80' }

                if (group.includes(`${mbti[j]}#${gender[l]}#${mbti[i]}#${gender[k]}#reference#notes`) === false) {
                    group.push(`${mbti[i]}#${gender[k]}#${mbti[j]}#${gender[l]}#reference#notes`)
                    scoreList.push(score)
                }
                }
            }            
        }
    }

for (let i = 0; i < group.length; i++) {
    console.log(`${group[i]}#${scoreList[i]}`)
}
// console.log(group.length)
// console.log(scoreList.length)