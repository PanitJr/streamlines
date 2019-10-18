import React,{ Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { Menu, Grid,Segment } from 'semantic-ui-react'
import KpiReport from './KpiReport'
import ProjectStatusReport from './ProjectStatusReport'
import ProfitReport from './ProfitReport'

export default class Reports extends Component {
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
            as={ Link } to='/report/projectStatus'
                name='Project Status'
                active={activeItem === 'Project Status'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
            as={ Link } to='/report/kpi'
                name='KPI'
                active={activeItem === 'KPI'}
                onClick={this.handleItemClick}
            />
            <Menu.Item
            as={ Link } to='/report/profit'
                name='Profit'
                active={activeItem === 'Profit'}
                onClick={this.handleItemClick}
            />
            </Menu>
            <Segment attached='bottom'>
                <Switch>
                    <Route path="/report/projectStatus" ><ProjectStatusReport /></Route>
                    <Route path="/report/kpi"><KpiReport /></Route>
                    <Route path="/report/profit"><ProfitReport /></Route>
                </Switch>
            </Segment>
            </Grid.Column>
            <Grid.Column></Grid.Column>
        </Grid>
      )
    }
  }