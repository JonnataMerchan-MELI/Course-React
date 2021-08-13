import React from 'react';
import { Item } from './StyledLeagues';

const DetailLeague = (props) => {
  const { name, logo } = props;
  return (
    <>
      <Item>
        <h1>{name}</h1>
        <img src={logo} alt='' />
      </Item>
    </>
  );
};

export default DetailLeague;
