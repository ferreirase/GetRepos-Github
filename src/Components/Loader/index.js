import styled from 'styled-components';

const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  top: 250px;
  border: 16px solid #eee;
  border-radius: 50%;
  border-top: 15px solid #7165c1;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
