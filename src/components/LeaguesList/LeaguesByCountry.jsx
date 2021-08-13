/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import requestLeaguesList from '../../api/leagues';
import { Content, ContentDetail } from './StyledLeagues';
import DetailLeague from './DetailLeague';
const LeaguesByCountry = (props) => {
  const [resultData, SetResultData] = useState([]);
  const idCountry = props.location.state.idCountry;

  useEffect(() => {
    requestLeaguesList(handleResults, idCountry);
  }, []);

  const handleResults = (results) => {
    SetResultData(results);
  };

  return (
    <>
      <Content>
        <ContentDetail>
          {resultData.map((item) => (
            <DetailLeague
              name={item.league_name}
              logo={item.league_logo}
              key={item.league_key}
            ></DetailLeague>
          ))}
        </ContentDetail>
      </Content>
    </>
  );
};

export default LeaguesByCountry;
