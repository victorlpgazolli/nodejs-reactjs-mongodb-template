
import styled from 'styled-components';

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background

const buttonDefault = styled.button`
margin: 5px;
border-radius: 3px;
    background-color: #3598DC;
    border-width: 0px;
    border-bottom-width: 5px;
    border-color: #1974b0;
    height: 30px;
    cursor: pointer;
    width: 170px;
    color: white;
    font-size: 14px;
    outline: none;

    &: hover {
      transition: all 0.15s ease;
    }
    &: active {
          border-bottom-width: 0px;
      transition: all 0.15s ease;
    }
`;
const styles = {
  buttonDefault
}
export default styles