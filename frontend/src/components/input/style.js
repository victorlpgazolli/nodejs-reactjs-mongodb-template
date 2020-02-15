
import styled from 'styled-components';

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background

const inputDefault = styled.input`
justify-content: center;
align-items: center;
width: 150px;
outline: none;
padding: 3px;
font-size: 18px;
margin: 5px;
padding-left: 10px;
padding-right: 10px;
border-width: 0px;
border-bottom-width: 2px;
border-bottom-color: ${props => props.showError ? "red" : "#c8ccd4"};
transition: all 0.15s ease;
background-color: transparent;
font-weight: 500;
border-radius:2px;

&: hover {
  background-color: rgba(34,50,84,0.03);
  transition: all 0.15s ease;
}
&: focus {
  background-color: rgba(34,50,84,0.03);
  border-bottom-color: ${props => props.hasErrors ? "red" : "rgb(0, 119, 255)"};
  transition: all 0.15s ease;
}
`;
const styles = {
  inputDefault
}
export default styles