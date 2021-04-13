import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`

  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin: 56px auto 0;

  width: 100%;

  form {
    /* margin: 80px 0; */
    margin-right: 120px;

    width: 481px;
    text-align: center;
    display: flex;
    flex-direction: column;

    h1 {
      color: #232324;
      margin-bottom: 24px;
      font-size: 20px;
      text-align: left;
    }

    a {
      color: #565656;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#565656')};
      }
    }
  }
`;

// 
export const Section = styled.section`
  margin-top: 48px;

  > strong {
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;
    font-size: 20px;
    line-height: 26px;
    color: #999591;
    border-bottom: 1px solid #3e3b47;
  }

  > p {
    color: #999591;
  }
`;
// Listagem
export const Listings = styled.div`
  flex: 1;
  margin-top: 70px;

  h1 {
    font-size: 36px;
  }

  p {
    display: flex;
    color: #000;
    margin-left: 45px;

    span {
      display: flex;
      align-items: center;
      width: 180px;
    }

  }
`;
// Registros
export const Records = styled.div`
  

  > strong {
    font-size: 20px;
    font-weight: 400;
    color: #999591;
  }

  div {
    display: flex;
    align-items: center;
    position: relative;
    padding: 18px 11px;
    border-radius: 10px;
    margin-bottom: 8px;
    background: #F2F2F2;

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
    }

    span {
      display: flex;
      align-items: center;
      margin-right: auto;
      color: #999591;
    }

    svg {
      margin-right: 17px;
      color: #666360;
      cursor: pointer;
    }
    svg:hover {
      color: #000;
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
  display: flex;
  margin: 8px 0px;
  padding: 17px 0px;
  background: #0DD8E5;
  border-radius: 10px;
  color: #FFF;
  text-decoration: none;
  justify-content: center;
  
  &:hover {
    background: ${shade(0.2, '#0DD8E5')};
  }
}
`;
