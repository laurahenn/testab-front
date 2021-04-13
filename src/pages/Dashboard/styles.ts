import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`

  h1 {
    max-width: 1120px;
    margin: 64px auto;
    display: flex;
    font-size: 36px;
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

// 
export const Section = styled.section``;

// Listagem
export const Listings = styled.div`
  flex: 1;
  margin-right: 35px;

  h1 {
    font-size: 36px;
  }

  span {
    font-family: Roboto Slab;
    font-size: 20px;
    line-height: 26px;

    color: #666360;
  }
`;

// Registros
export const Records = styled.div`
  margin-bottom: 57px;
  padding: 30px;
  border-radius: 10px;
  background: #F2F2F2;
  
  align-items: center;
  position: relative;
  
`;

export const Details = styled.div`

  border-bottom: 1px solid #3e3b47;
  margin-bottom: 20px;
  padding: 10px 0px;
  
  display: flex;
  align-items: center;
  
  font-family: Roboto Slab;
  font-size: 20px;
  line-height: 26px;
  color: #666360;

  p {  
    align-items: center;
    margin-right: auto;
  }
  span {
    margin: 0px;
  }
`;

export const Options = styled.div`

  border-top: 1px solid #3e3b47;
  margin-top: 20px;
  padding: 10px 0px;
  
  display: flex;
  align-items: center;
  
  font-family: Roboto Slab;
  font-size: 20px;
  line-height: 26px;
  color: #666360;

  span {
    margin: 0px;
  }

  a {

    align-items: center;
    margin-right: auto;

    padding: 10px 44px;
    background: #0DD8E5;
    border-radius: 10px;
    color: #FFF;
    text-decoration: none;

    &:hover {
      background: ${shade(0.2, '#0DD8E5')};
    }
  }

`;
export const RecordsDetails = styled.div`

  height: 88px;
  margin-bottom: 20px;
  padding: 25px;  
  background: #3E3B47;
  border-radius: 10px;

  div {
    display: flex;
    align-items: center;

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      display: flex;
      align-items: center;
      margin-right: auto;
      color: #FFFFFF;
    }

    svg {
      margin-right: 17px;
      color: #0DD8E5;
    }

    a {
      padding: 10px 44px;
      background: #0DD8E5;
      border-radius: 10px;
      color: #FFF;
      text-decoration: none;

      &:hover {
        background: ${shade(0.2, '#0DD8E5')};
      }
    }

  }


`;

// Menu
export const Menu = styled.div`
  width: 390px;
  height: 100%;
  background: #F2F2F2;
  border-radius: 10px;
  padding: 40px 25px;

  align-items: center;
  text-align: center;

  a {
    padding: 11px 17px;
    background: #0DD8E5;
    border-radius: 10px;
    color: #FFF;
    text-decoration: none;

    &:hover {
      background: ${shade(0.2, '#0DD8E5')};
    }
  }

`;

export const Info = styled.div`
  
  background: #3E3B47;
  border-radius: 10px;
  padding: 11px 0px;
  margin: 0px;
  margin-bottom: 26px;
  
  align-items: center;
  text-align: center;

  p {
    font-family: Roboto Slab;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
  }
  span {
    font-family: Roboto Slab;
    font-size: 30px;
    line-height: 40px;
    color: #0DD8E5;
  }

`;
