import styled from 'styled-components'
import moment from 'moment'
import Menu from '../navigation/Menu'

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
const ContainerMenu = styled.div`
  float: right;
`

function Post({ text, user, date }){
  const handleEdit = () => {
    console.log("EDITAR PUBLICACAO")
  }

  const handleDelete = () => {
    console.log("DELETAR PUBLICACAO")
  }

  return (
    <PostContainer>
      <ContainerMenu>
        <Menu
          options={[
            {
              text: 'Editar publicação',
              onClick: handleEdit
            },
            {
              text: 'Deletar publicação',
              onClick: handleDelete
            }
          ]}
        />
      </ContainerMenu>
      <StyleUsername>@{user}</StyleUsername>
      <StyledDate>{moment(date).format('LLL')}</StyledDate>
      <ContainerText>
        {text}
      </ContainerText>
    </PostContainer>
  )

}

export default Post