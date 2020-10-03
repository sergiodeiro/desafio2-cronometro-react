import styled,{createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background:#121214;
    font-family: sans-serif;
  }

  * {
    padding: 5px;
    margin: 0px;
    box-sizing: border-box;
  }
`

export const Section = styled.div`
    background: transparent;
    max-width: 600px;
    width: 90%;
    height: 500px;
    margin: 30px auto;
`

export const Container = styled.div`
    width: 100%;
    background: #737380;
    margin: 30px auto;
    position: relative;
`

export const DivTitle = styled.div`
    text-align: center;
` 

export const Title = styled.h2`
    color: ${props => props.color};
    border-bottom: ${props => props.border ? "2px solid" : null};
    border-top: ${props => props.borderTop ? "2px solid" : null};
    margin-top: ${props => props.marginTop ? props.marginTop : null};
` 

export const DivTime = styled.div`
    padding: 60px 0px;
    text-align: center;
`

export const Link = styled.a`
  cursor: pointer;
`

export const Div = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
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