import React from 'react';
import { ItemCountry } from './StyledCountries';
import history from '../../Utils/history';

const DetailCountry = (props) => {
  const { name, logo, id } = props;

  const redirect = () => {
    history.push({
      pathname: '/Leagues',
      state: { idCountry: id },
    });
  };

  return (
    <>
      <ItemCountry onClick={() => redirect()}>
        <h1>{name}</h1>
        <img src={logo} alt='' />
      </ItemCountry>
    </>
  );
};

export default DetailCountry;
