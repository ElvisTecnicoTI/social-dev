import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { joiResolver } from '@hookform/resolvers/joi'
import axios from 'axios'

import ControlledTextarea from '../inputs/ControlledTextarea'
import { createPostSchema } from '../../../modules/post/post.schema'
import Button from '../inputs/Button'

const EditPost = ({ id, text, onSave }) => {

  const { control, handleSubmit, formState: { isValid } } = useForm({
    resolver: joiResolver(createPostSchema),
    mode: 'all'
  })
  const [ removeLoading, setRemoveLoading ] = useState(false) //Loading states for edit post button


  const handleSaveEdit = async (data) => {
    try {
      setRemoveLoading(true) //Loading activated
      const response = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`, {
        id,
        text: data.text
      })

      if (response.status === 200) {

        setRemoveLoading(false) //Loading deactivated
        onSave()

      }
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <form onSubmit={handleSubmit(handleSaveEdit)}>
      <ControlledTextarea
        placeholder="Digite sua mensagem"
        rows="4"
        control={control}
        name="text"
        maxLength="256"
        defaultValue={text}
      />
      <Button Loading={removeLoading} disabled={!isValid}>Salvar alterações</Button>
    </form>
  )
}

export default EditPost