import mbtiTypeScore from "../lib/scoreCalculation/mbtiTypeScore";
import zodiacSignTypeScore from "./scoreCalculation/zodiacSignTypeScore";
import constellationTypeScore from "./scoreCalculation/ConstellationTypeScore";

const me = {
  name: "홍길동",
  gender: "male",
  blood: "B",
  mbti: "ENTJ",
  born: 19990319,
};

const you = {
  name: "춘향이",
  gender: "female",
  blood: "A",
  mbti: "INTJ",
  born: 19990319,
};

const run = async () => {
  // await mbtiTypeScore(me, you);
  // const score = await zodiacSignTypeScore(me, you);
  const score = await constellationTypeScore(me, you);
  console.log(score);
};

run();
