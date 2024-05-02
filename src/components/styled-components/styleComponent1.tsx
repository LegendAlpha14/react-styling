import styled, { css } from 'styled-components'


const Button = styled.button<any>`

background: transparent;
border-radius: 3px;
border: 2px solid #BF4F74;
color: #BF4F74;
margin: 0 1em;
padding: 0.25em 1em;

&:hover{
    color:blue
}


${props => props.$primary && css`
background: #BF4F74;
color: white;
`}
`

const Container = styled.div`
  text-align: center;
`


export default function StyledComponent1() {

    return (

        <Container>

            <Button onClick={() => { console.log("buton Clicked !!") }}>Click ME</Button>
            <Button $primary>Click ME</Button>

        </Container>
    )
}   