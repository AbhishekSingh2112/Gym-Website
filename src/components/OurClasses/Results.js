/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Output from "./Output";
import ClassOneBg from "../Image/classOne.jpg";
import ClassTwoBg from "../Image/classTwo.jpg";
import ClassThreeBg from "../Image/classThree.jpg";
import ClassFourBg from "../Image/classFour.jpg";

const Results = ({ training }) => (
  <div css={styles} className="results">
    {training === "FirstClass" && (
      <Output
        title="Strength Training"
        info="Strength training can help you manage or lose weight, and it can increase your metabolism to help you burn more calories. Enhance your quality of life. Strength training may enhance your quality of life and improve your ability to do everyday activities. Strength training can also protect your joints from injury."
        img={ClassOneBg}
      />
    )}

    {training === "SecondClass" && (
      <Output
        title="YOGA"
        info="Yoga is one of the best ways to stay fit and healthy. It can be used to improve health, flexibility, strength, posture, and so much more. It is not only a rewarding physical activity, but it is also a holistic lifestyle that promotes emotional well-being and good mental health."
        img={ClassTwoBg}
      />
    )}
    {training === "ThirdClass" && (
      <Output
        title="Weight Lifting"
        info="Weight lifting can be rewarding for many reasons, and its advantages are available to people of all genders. Pursuing a regular weight-training routine can change your body and your brain,it loses fat while maintaining muscles that burn calories."
        img={ClassThreeBg}
      />
    )}

    {training === "FourthClass" && (
      <Output
        title="ZUMBA"
        info="Zumba wins on Entertainment and is a better choice for those who love to Dance.The high-and low-intensity intervals make Zumba an excellent cardio workout. Strength: Yes. Traditional Zumba workouts emphasize strengthening the core, while Zumba Toning and Zumba Step workouts incorporate weights to build muscles in the arms, legs, and glutes."
        img={ClassFourBg}
      />
    )}
  </div>
);

const styles = css`
  width: 100%;
  max-width: 60%;
  .test {
    width: 100%;
    height: 400px;
    background: red;
    &.two {
      background: blue;
    }
  }
  @media(max-width: 900px){
    max-width: 590px;
    padding: 30px 0 0 0;
  }
  @media (min-width: 901px) and (max-width: 1226px){
    max-width: 62%;
  }
`;

export default Results;
