/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import GymTitle from "./GymTitle";
import GymSubtitle from "./GymSubtitle";
import GymProgramCard from "./GymProgramCard";
import Container from "../GlobalComponents/Container";

const GymProgram = () => (
  <div css={styles} className="gymProgram">
    <GymTitle />
    <Icon />
    <GymSubtitle />
    <Container>
      <GymProgramCard
        title="Basic Fitness"
        desc="Physical fitness is generally achieved through proper nutrition, moderate-vigorous physical exercise, and sufficient rest."
      />
      <GymProgramCard
        title="Advanced Muscle Course"
        desc="The following workouts are only for some of the most advanced bodybuilders.Only serious bodybuilders with experience can withstand these hardcore workouts."
      />
      <GymProgramCard
        title="New Gym Training"
        desc="The ultimate gym guide for beginners, that covers everything from what to pack in your gym bag, right up to your very own beginner’s workout."
      />
      <GymProgramCard
        title="Yoga Training"
        desc="Yoga can support the healing process and help the person experience symptoms with more centeredness and less distress."
      />
      <GymProgramCard
        title="HIIT"
        desc="HIIT(High-Intensity Interval Training), is a training technique in which you give all-out, one hundred percent effort through quick, intense bursts of exercise."
      />
      <GymProgramCard
        title="ZUMBA"
        desc="ZUMBA is a fusion of Latin and International music - dance themes that create a dynamic, exciting, effective fitness system!"
      />
    </Container>
  </div>
);

const styles = css`
  width: 100%;
  min-height: 100vh;
  text-align: center;
  padding: 120px 0;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px 0;
  }
  @media (max-width: 700px) {
    .container {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
  @media (min-width: 701px) and (max-width: 1100px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default GymProgram;
