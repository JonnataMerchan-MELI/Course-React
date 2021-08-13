import styled from 'styled-components';

export const Content = styled.div`
  padding-top: 80px;
  width: 100%;
  background: white;
`;

export const ContentDetailCountry = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`;

export const ItemCountry = styled.div`
  margin: 20px 30px;
  padding: 0px 10px;
  background: #eaebee 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 20px #72839c6e;
  border-radius: 16px;
  opacity: 1;
  min-width: 180px;
  height: 180px;

  & h1 {
    font-size: 25px;
    font-family: 'Montserrat';
    font-weight: 700;
    color: #72839c;
    text-align: center;
  }
  & img {
    margin: 20px auto;
    width: 88px;
    height: 88px;
    display: block;
  }
  &:hover {
    box-shadow: 0px 6px 33px rgb(43 64 87 / 70%);
  }
`;
