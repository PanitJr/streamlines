import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { generateCountriesData } from '@nivo/generators'
import { colors } from '../../../constants/commonConstants'
import { Grid } from 'semantic-ui-react'
import './Bar.css';

const Bar = () => (
    <Grid centered columns={16}>
            <Grid.Column ></Grid.Column>
            <Grid.Column width={14}>
    <div style={{height: 500}}>
        <ResponsiveBar
            margin={{
                top: 1.5,
                right: 1,
                bottom: 1.5,
                left: 1.5,
            }}
            padding={0.2}
            data={generateCountriesData(['rock', 'jazz', 'hip-hop', 'reggae', 'folk'], { size: 9 })}
            indexBy="country"
            enableGridX={true}
            enableGridY={true}
            keys={['rock', 'jazz', 'hip-hop', 'reggae', 'folk']}
            colors={colors}
            axisBottom={null}
            axisLeft={null}
            borderWidth={3}
            borderColor="#000"
            enableLabel={true}
            labelSkipHeight={24}
            isInteractive={false}
            animate={true}
        />
    </div>
    <div className="Title">BAR</div>
    </Grid.Column>
    <Grid.Column ></Grid.Column>
    </Grid>
    
)

export default Bar