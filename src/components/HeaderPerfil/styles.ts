import styled from 'styled-components';

export const Container = styled.div``;

export const Headers = styled.header`
  padding: 34px 0;
  background: #28262E;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 75px;
  }

  > a {
    margin-right: 5%;
    color: #0DD8E5;

    &:hover {
      opacity: 0.5 !important;
    }
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;

    &:hover {
      opacity: 0.5 !important;
    }

  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;

    span {
      color: #999591;
    }

    strong {
      color: #0DD8E5;
    }

    a {
      text-decoration: none;
      
      &:hover {
        opacity: 0.5 !important;
      }
    }
  }
`;

export const Opcoes = styled.div`
display: flex;
align-items: center;
margin-left: auto;

div {
  display: flex;
  flex-direction: column;
  margin-left: 65px;
  line-height: 24px;

  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;

  span {
    color: #999591;
  }

  strong {
    color: #0DD8E5;
  }

  a {
    text-decoration: none;
    
    &:hover {
      opacity: 0.5 !important;
    }
  }
}
`;
