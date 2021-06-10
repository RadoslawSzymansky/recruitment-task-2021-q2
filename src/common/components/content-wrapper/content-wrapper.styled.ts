import styled from 'styled-components';

const StyledSpinner = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.dark};
  background: linear-gradient(to right, ${({ theme }) => theme.colors.dark} 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
  animation: load 1.4s infinite linear;
  transform: translateZ(0);

  :before {
    width: 50%;
    height: 50%;
    background: ${({ theme }) => theme.colors.dark};
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  :after {
    background: #fff;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  @-webkit-keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const StyledErrorOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
`;

const StyledRefresh = styled.p`
  :hover {
    cursor: pointer;
  }
`;

export { StyledSpinner, StyledErrorOverlay, StyledRefresh };
