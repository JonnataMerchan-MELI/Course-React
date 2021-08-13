import React, { useState, useEffect } from 'react';
import requestCountriesList from '../../api/countries';
import { Content, ContentDetailCountry } from './StyledCountries';
import DetailCountry from './DetailCountry';

const CountriesList = () => {
  const [resultData, SetResultData] = useState([]);

  useEffect(() => {
    requestCountriesList(handleResults);
  }, []);

  const handleResults = (results) => {
    SetResultData(results);
  };

  return (
    <>
      <Content>
        <ContentDetailCountry>
          {resultData.map((item) =>
            item.country_logo !== null ? (
              <DetailCountry
                name={item.country_name}
                logo={item.country_logo}
                id={item.country_key}
              ></DetailCountry>
            ) : (
              <></>
            ),
          )}
        </ContentDetailCountry>
      </Content>
    </>
  );
};

export default CountriesList;
