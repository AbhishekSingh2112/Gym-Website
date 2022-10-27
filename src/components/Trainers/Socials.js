/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React from "react";

const Socials = () => (
  <div css={styles} className="socials">
    <a href="https://www.facebook.com/groups/424007314313685"  target = "_blank" > 
    <i className="fab fa-facebook-f"></i></a>
    <a href="https://wa.me/919088451572"  target = "_blank" >
    <i className="fab fa-whatsapp"></i></a>
  </div>
);

const styles = css`
  display: flex;
  align-items: center;
  i {
    margin-right: 18px;
    transition: color 600ms ease-in-out;
    cursor: pointer;
    &:hover {
      color: #ed563b;
    }
  }
`;

export default Socials;
