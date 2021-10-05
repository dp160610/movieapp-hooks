import React from "react";
import PropTypes from "prop-types";
//styled
import { Wrapper, Image } from "./Actor.styles";

const Actor = ({ name, character, imgUrl }) => (
  <Wrapper>
    <Image src={imgUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string
};
export default Actor;
