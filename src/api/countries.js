function requestCountriesList(SetResultData) {
  const APIKey = '2c024ec51c8b64948acf9d59577dbd824978b37eb93528af2517ca97e05f2e1a';
  fetch(`https://allsportsapi.com/api/football/?met=Countries&APIkey=${APIKey}`)
    .then((res) => res.json())
    .then((results) => {
      const { result } = results;
      return SetResultData(result);
    });
}

export default requestCountriesList;
