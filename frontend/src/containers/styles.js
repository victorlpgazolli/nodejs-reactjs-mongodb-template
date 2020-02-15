
import styled from 'styled-components';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const formDefault = styled.form`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: ${props => props.width ?? "300px"};
`;

const styles = {
    formDefault
}
export default styles