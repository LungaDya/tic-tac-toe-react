import React from "react";
import { ButtonWrapper } from "./Button.styled";

function Button(props) {
    
  return <ButtonWrapper {...props}>{props.childern}</ButtonWrapper>;
}

export default Button;
