import styled from 'styled-components'

const Subline = styled.article`
  font-size: ${props => props.theme.fontSize && props.theme.fontSize.small};
  color: ${props => props.theme.colors && props.theme.colors.grey.light};  
  ${props => props.sectionTitle && 'margin-top: -3rem'};
  ${props => props.sectionTitle && 'margin-bottom: 4rem'};
  ${props => props.sectionTitle && 'text-align: center'};
  ${props => props.date && 'margin-bottom: -15px'};
  ${props => props.date && 'line-height: -10px'};
  ${props => props.date && 'padding: 10px 0 0'};
`

export default Subline
