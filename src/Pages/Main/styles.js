import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from{
    transform: rotate(0deg);
  }

  to{
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  // a propriedade disabled é diretamente proporcional À propriedade loading
  disabled: props.loading,
}))`
  background: #7159c1;
  border-radius: 4px;
  border: 0;
  margin-left: 10px;
  padding: 0 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  /**o símbolo & quer dizer que estou me referindo apenas à esse componente
  se ele estiver disabled, recebe essas configurações
  */
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /**adiciona uma borda em todos os li, menos no primeiro */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
