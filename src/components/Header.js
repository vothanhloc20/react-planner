import React, { Component } from 'react'
import { Menu, Segment, Button, Dropdown } from 'semantic-ui-react'

export default class Header extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const languageOptions = [
      {
        key: 'vn',
        text: 'Vietnamese',
        value: 'vn',
        flag: 'vn',
      },
      {
        key: 'uk',
        text: 'English',
        value: 'uk',
        flag: 'uk',
      },
    ]
    return (
      <Segment inverted basic>
        <Menu inverted secondary size="mini">
          <Menu.Item>
            <div className="header_name">Planner App</div>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
              name="home"
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="about"
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="Contact us"
              active={activeItem === 'contact us'}
              onClick={this.handleItemClick}
            />
            <Menu.Item>
              <Button color="twitter">Sign In</Button>
            </Menu.Item>

            <Menu.Item>
              <Dropdown
                button
                className="icon"
                floating
                labeled
                icon="world"
                options={languageOptions}
                search
                text="Select Language"
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
