import React from 'react'
import { Container, Grid, Card, Icon, Item, Dropdown } from 'semantic-ui-react'
import Todo from './Todo'

const sortOptions = [
  {
    key: 'All',
    text: 'All',
    value: 'all',
  },
  {
    key: 'Completed',
    text: 'Completed',
    value: 'completed',
  },
  {
    key: 'Uncompleted',
    text: 'Uncompleted',
    value: 'uncompleted',
  },
]

const TodoList = ({ toDos, setToDos, setStatus, filteredTodos }) => {
  const statusHandler = (e, data) => {
    setStatus(data.value)
  }
  //   console.log('Run TodoLists', toDos)
  return (
    <Container>
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={16}>
            <Card fluid>
              <Card.Content extra>
                <Grid>
                  <Grid.Row>
                    <Grid.Column verticalAlign="middle" width={8}>
                      <div style={{ color: 'black', fontWeight: '600' }}>
                        <Icon name="pencil alternate" />
                        Kelvin's Task lists
                      </div>
                    </Grid.Column>
                    <Grid.Column textAlign="right" width={8}>
                      <Dropdown
                        style={{ color: 'black' }}
                        inline
                        options={sortOptions}
                        defaultValue={sortOptions[0].value}
                        onChange={statusHandler}
                      ></Dropdown>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
              <Card.Content>
                <Item.Group divided>
                  {filteredTodos.map((toDo) => (
                    <Todo
                      setToDos={setToDos}
                      toDo={toDo}
                      toDos={toDos}
                      key={toDo.id}
                      text={toDo.text}
                    />
                  ))}
                </Item.Group>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default TodoList
