import React from 'react'
import { Container, Grid, Input, Button, Form } from 'semantic-ui-react'

const FormInput = ({ setInputText, inputText, toDos, setToDos }) => {
  const inputTextHandler = (event) => {
    setInputText(event.target.value)
  }
  const submitTextHandler = (event) => {
    event.preventDefault()
    setToDos([
      ...toDos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000 + Math.random,
      },
    ])
    setInputText('')
  }
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Grid.Column textAlign="center" width={16}>
            <Form>
              <Form.Field>
                <Input
                  value={inputText}
                  action
                  fluid
                  placeholder="What do you need to do today?"
                  type="text"
                  onChange={inputTextHandler}
                >
                  <input />
                  <Button onClick={submitTextHandler} color="youtube">
                    Add
                  </Button>
                </Input>
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default FormInput
