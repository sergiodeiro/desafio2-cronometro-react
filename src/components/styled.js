import styled from 'styled-components'

export const Div = styled.div``

export const Buttons = styled.button`
  background: ${props =>props.backColor};
  margin-top: 30px;
  margin-left: 5px;
  border: 2px solid ${props => props.borderColor};
  padding: 12px 20px;
  font-size: 16px;
  text-transform: uppercase;
  width: 150px;
  transition: background 1s;
  cursor: pointer;
  border-radius: 13px;

  &:hover {
    border: 2px solid ${props => props.hoverColor};
    background: ${props =>props.hoverBack};
  }

  &:focus {
    border: 2px solid ${props => props.hoverColor};
    background: ${props =>props.hoverBack};
  }
`
export const Span = styled.span`
  background:#8257e6;
  color: #fff;
  display: inline-block;
  font-family: monospace;
  font-size: 22px;
  padding: 20px;
  border-radius: 5px;
  width: 70px;
  font-style: oblique;
`

export const Title = styled.h2`
    color: ${props => props.color};
    border-bottom: ${props => props.border ? "2px solid" : null};
    border-top: ${props => props.borderTop ? "2px solid" : null};
` 

export const DivTitle = styled.div`
    text-align: center;
` 