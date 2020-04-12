import styled from "styled-components";

const SimpleTitle = styled.h3`font-size: ${props => props.theme && props.theme.fontSize && props.theme.fontSize.small}; text-transform: capitalize; font-weight: bold; color: ${props => props.theme && props.theme.colors && props.theme.colors.grey.dark}; padding: 0; margin: 0;`;

export default SimpleTitle;
