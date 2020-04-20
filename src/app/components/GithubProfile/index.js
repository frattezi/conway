import React from 'react'
import { Block } from 'styled-loaders-react'
import { useForm } from 'react-hook-form'
import { useGithub } from 'app/redux/github'

import { Container } from './styled'

const GithubProfile = () => {
  const { register, handleSubmit, errors } = useForm()
  const { actions, state } = useGithub()

  const onSubmit = (data) => {
    actions.fetchGithubProfile(data)
  }

  return (
    <Container>
      {state.response.isLoading && <Block />}

      {state.response.data && (
        <code>{state.response.data.name}</code>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name='username'
          placeholder='Put a github user here'
          ref={register({ required: true })}
        />

        {errors.username && <p>This field is required</p>}

        <input type='submit' />
      </form>
    </Container>
  )
}

export default GithubProfile
