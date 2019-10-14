import React,{ Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Menu, Grid, Input,Segment } from 'semantic-ui-react'
import StaffTable from './StaffTable'
import StaffForm from './StaffForm'

export default class Staff extends Component {
    state = { activeItem: 'All'}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
      return (
        <Grid centered columns={16}>
            <Grid.Column ></Grid.Column>
            <Grid.Column width={14}>
            <Menu attached='top' tabular>
            <Menu.Item
            as={ Link } to='/staff/list'
                name='All'
                active={activeItem === 'All'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
            as={ Link } to='/staff/new'
                name='New'
                active={activeItem === 'New'}
                onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder='Search users...'
              />
            </Menu.Item>
          </Menu.Menu>
            </Menu>
            <Segment attached='bottom'>
                <Switch>
                    <Route path="/staff/new" ><StaffForm /></Route>
                    <Route path="/staff/list"><StaffTable /></Route>
                </Switch>
            </Segment>
            </Grid.Column>
            <Grid.Column></Grid.Column>
        </Grid>
      )
    }
  }