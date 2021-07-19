import styled from 'styled-components';

export const LoginMain = styled.main`
  display: flex; 
  flex: 1; 
  align-items: center; 
  justify-content: center;

  .logo{
    background-color: #ffffff;
    padding: 18px 14px;
    border-radius: 1000px;
    max-height: 100px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      max-height: 76px;
      padding: 9px 14px;
    }
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 12px;
  padding-left: 5px;
  gap: 5px;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  background-color: #0d1117;
  color: #FFF;

  svg{
    height: 30px;
    width: 30px;
    path{
      fill: #FFF;
    }
  }
`;