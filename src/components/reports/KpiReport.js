import React from 'react'
import { Header } from 'semantic-ui-react'
import Sla from '../charts/line/Sla';
import CustomerStat from '../charts/line/CustomerStat';

const KpiReport = () => (
  <div>
    <Header as='h1'>KPI</Header>
    <Sla />
    <div class="ui divider"></div>
    <Header as='h3'>Customer Stat</Header>
    <div class="ui divider"></div>
    <CustomerStat />
  </div>
)

export default KpiReport