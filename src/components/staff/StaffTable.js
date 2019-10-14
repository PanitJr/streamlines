import React from 'react'
import { Header, Image, Table, Grid} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class StaffTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: [],
      };
    }
  
    componentDidMount() {
      fetch("http://localhost:8080/staff/list")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
    
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <Grid centered >
            
          <Table basic='very' celled collapsing >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Login</Table.HeaderCell>
              <Table.HeaderCell>Staff Name</Table.HeaderCell>
              <Table.HeaderCell>Nickname</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Division</Table.HeaderCell>
              <Table.HeaderCell>Contact</Table.HeaderCell>
              <Table.HeaderCell>Start Date</Table.HeaderCell>
              <Table.HeaderCell>Birth Date</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        
          <Table.Body>
          {items.map(item => (
            <Table.Row key={item.id}> 
              <Table.Cell>{item.username}</Table.Cell>
              <Table.Cell as={ Link } to='/'>
                <Header as='h4' image>
                  <Image src={item.photo} rounded size='mini' />
                  <Header.Content>
                    {item.firstName} {item.lastName}
                    <Header.Subheader>{item.role.name}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{item.nickname}</Table.Cell>
              <Table.Cell>{item.title.name}</Table.Cell>
              <Table.Cell>{item.division}</Table.Cell>
              <Table.Cell>
                <ul>{item.contacts.map(contact => (
                  <li key={contact.id}>{contact.type.name}: {contact.number}</li>))}
                </ul>
              </Table.Cell>
              <Table.Cell>{item.startDate}</Table.Cell>
              <Table.Cell>{item.birthDate}</Table.Cell>
            </Table.Row>
            ))}
          </Table.Body>
        </Table>
        </Grid>
        );
      }
    }
  }

export default StaffTable

