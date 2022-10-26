/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";
import Icon from "../GlobalComponents/Icon";
import TrainerCard from "./TrainerCard";
import Container from "../GlobalComponents/Container";
import TrainerOneBg from "../Image/self2.jpg";
import TrainerTwoBg from "../Image/self1.jpg";
import TrainerThreeBg from "../Image/self3.jpeg";

const Trainers = () => (
  <section css={styles} className="trainers" id="trainers">
    <h2>
      EXPERT <span>TRAINERS</span>
    </h2>
    <Icon />
    <p>
    A professional fitness coach is a professional in the field of fitness and exercise{" "}
      <br />
      including professional sports club's fitness trainers, aerobics and yoga instructors .
    </p>
    <Container>
      <TrainerCard
        title="Strength Trainer"
        name="Abhishek Singh (owner)"
        desc="Strength training — also known as weight or resistance training — is a physical activity designed to improve muscular strength and fitness of a human being."
        img={TrainerOneBg}
      />
      <TrainerCard
        title="Muscle Trainer"
        name="Somnath Sheal"
        desc="Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities,strength training, and stretching. They work with people of all ages and skill levels."
        img={TrainerTwoBg}
      />
      <TrainerCard
        title="Power Trainer"
        name="Tarun Gill"
        desc="Power training typically involves exercises which apply the maximum amount of force as fast as possible; on the basis that strength + speed = power."
        img={TrainerThreeBg}
      />
    </Container>
  </section>
);

const styles = css`
  width: 100%;
  padding: 120px 0;
  text-align: center;
  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 16px;
    line-height: 1.7;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0 30px;
      br {
        display: none;
      }
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Trainers;
