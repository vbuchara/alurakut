import styled from 'styled-components';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

export const Box = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 8px; 

  padding: 16px;

  // CSS Pré-Pronto 
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }

  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.secondaryText};
  }

  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.secondaryText};
  }

  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.theme.colors.secondaryText};
    margin-bottom: 20px;
  }

  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }

  input {
    width: 100%;
    background-color: ${props => props.theme.colors.inputBackground};
    font-size: 14px;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }

  textarea{
    width: 100%;
    background-color: ${props => props.theme.colors.inputBackground};
    font-size: 14px;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    outline: 0px;
    resize: none;

    ::placeholder {
      color: #333333;
      opacity: 1;
    }

    &:focus, &:hover{
      box-shadow: 0px 0px 5px #33333357;
    }
  }

  button {
    border: 0;
    padding: 8px 12px;
    color: ${props => props.theme.colors.button};
    border-radius: 10000px;
    background-color: ${props => props.theme.colors.background};
    font-size: 14px;

    &.isActive, &.submit {
      color: ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.button};
    }
  }

  img {
    border-radius: 8px;
  }

  .themeToggle{
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-size: 12px;
      color: #2E7BB4;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

export const FormOptionsButtons = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 16px;
`;

export const ProfileRelationsBoxWrapper = styled(Box)`
  ul {
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr 1fr; 
    max-height: 220px;
    list-style: none;
  }
  img {
    object-fit: cover;
    background-position: center center;
    width: 100%;
    height: 100%;
    position: relative;
  }
  ul li a {
    display: inline-block;
    height: 102px;
    width: 100%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    span {
      color: #FFFFFF;
      font-size: 10px;
      position: absolute;
      left: 0;
      bottom: 10px;
      z-index: 2;
      padding: 0 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-indeX: 1;
      background-image: linear-gradient(0deg,#00000073,transparent);
    }
  }
  a.redirect{
    font-size: 14px;
    font-weight: 700;
    color: #2E7BB4;
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
  }
`;

export const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;

  .profile-area{
    display: none;
    
    @media(min-width: 860px){
      display: block;
    }
  }

  @media(min-width: 860px){
    max-width: 1100px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea relationsArea";
    grid-template-columns: 160px 1fr 312px;
  }
`;