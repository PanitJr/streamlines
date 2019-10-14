import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class NevBarMenu extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={12}>
        <Menu.Item 
        as={ Link } to='/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
        as={ Link } to='/customer'
          name='Customer'
          active={activeItem === 'Customer'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
        as={ Link } to='/service'
          name='Service'
          active={activeItem === 'Service'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
        as={ Link } to='/pm'
          name='PM'
          active={activeItem === 'PM'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
        as={ Link } to='/operation'
          name='Operation'
          active={activeItem === 'Operation'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        as={ Link } to='/report'
          name='Report'
          active={activeItem === 'Report'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
        as={ Link } to='/staff'
          name='Staff'
          active={activeItem === 'Staff'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}