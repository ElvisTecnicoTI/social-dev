import styled from 'styled-components'

const StyleUsername = styled.p`
  font-weight: bold;
  font-size: 18px;
`

const StyledDate = styled.p`
  font-size: 12px;
`

const ContainerText = styled.div`
  margin-top: 10px;
`
const PostContainer = styled.div`
  background-color: ${props => props.theme.white};
  padding: 20px;
  border-radius: 10px;
`

function Post(){
  return (
    <PostContainer>
      <StyleUsername>@username</StyleUsername>
      <StyledDate>01 de janeiro de 2000</StyledDate>
      <ContainerText>
        Este é um texto de teste.
      </ContainerText>
    </PostContainer>
  )

}

export default Post