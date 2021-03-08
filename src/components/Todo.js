import React from 'react'
import { Checkbox, Button, Grid, Icon } from 'semantic-ui-react'

const Todo = ({ text, toDos, setToDos, toDo }) => {
  console.log('Run Todo', toDo)
  const deleteHandler = () => {
    setToDos(toDos.filter((el) => el.id !== toDo.id))
  }
  const completeHandler = () => {
    setToDos(
      toDos.map((item) => {
        if (item.id === toDo.id) {
          return {
            ...item,
            completed: !item.completed,
          }
        }
        return item
      })
    )
  }
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column verticalAlign="middle" width={8}>
          <Checkbox checked={toDo.completed} label={<label>{text}</label>} />
        </Grid.Column>
        <Grid.Column verticalAlign="right" width={8}>
          <Button color="yellow" animated size="mini">
            <Button.Content visible>Completed</Button.Content>
            <Button.Content hidden onClick={completeHandler}>
              <Icon name="check" />
            </Button.Content>
          </Button>
          <Button color="red" animated size="mini">
            <Button.Content visible>Delete</Button.Content>
            <Button.Content hidden onClick={deleteHandler}>
              <Icon name="trash alternate outline" />
            </Button.Content>
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}

export default Todo
