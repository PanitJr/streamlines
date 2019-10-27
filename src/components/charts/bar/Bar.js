import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { Grid } from 'semantic-ui-react'
import './Bar.css';

const Bar = () => (
    <Grid centered columns={16}>
            <Grid.Column ></Grid.Column>
            <Grid.Column width={14}>
    <div style={{height: 500}}>
    <ResponsiveBar
        data={[
            {
              "country": "AD",
              "hot dog": 96,
              "hot dogColor": "hsl(134, 70%, 50%)",
              "burger": 17,
              "burgerColor": "hsl(30, 70%, 50%)",
              "sandwich": 158,
              "sandwichColor": "hsl(346, 70%, 50%)",
              "kebab": 61,
              "kebabColor": "hsl(75, 70%, 50%)",
              "fries": 196,
              "friesColor": "hsl(15, 70%, 50%)",
              "donut": 39,
              "donutColor": "hsl(223, 70%, 50%)"
            },
            {
              "country": "AE",
              "hot dog": 122,
              "hot dogColor": "hsl(54, 70%, 50%)",
              "burger": 74,
              "burgerColor": "hsl(100, 70%, 50%)",
              "sandwich": 91,
              "sandwichColor": "hsl(293, 70%, 50%)",
              "kebab": 125,
              "kebabColor": "hsl(13, 70%, 50%)",
              "fries": 0,
              "friesColor": "hsl(182, 70%, 50%)",
              "donut": 115,
              "donutColor": "hsl(345, 70%, 50%)"
            },
            {
              "country": "AF",
              "hot dog": 104,
              "hot dogColor": "hsl(187, 70%, 50%)",
              "burger": 184,
              "burgerColor": "hsl(18, 70%, 50%)",
              "sandwich": 157,
              "sandwichColor": "hsl(85, 70%, 50%)",
              "kebab": 153,
              "kebabColor": "hsl(0, 70%, 50%)",
              "fries": 113,
              "friesColor": "hsl(341, 70%, 50%)",
              "donut": 19,
              "donutColor": "hsl(333, 70%, 50%)"
            },
            {
              "country": "AG",
              "hot dog": 50,
              "hot dogColor": "hsl(326, 70%, 50%)",
              "burger": 23,
              "burgerColor": "hsl(356, 70%, 50%)",
              "sandwich": 32,
              "sandwichColor": "hsl(164, 70%, 50%)",
              "kebab": 190,
              "kebabColor": "hsl(214, 70%, 50%)",
              "fries": 196,
              "friesColor": "hsl(276, 70%, 50%)",
              "donut": 2,
              "donutColor": "hsl(290, 70%, 50%)"
            },
            {
              "country": "AI",
              "hot dog": 71,
              "hot dogColor": "hsl(92, 70%, 50%)",
              "burger": 98,
              "burgerColor": "hsl(316, 70%, 50%)",
              "sandwich": 35,
              "sandwichColor": "hsl(152, 70%, 50%)",
              "kebab": 158,
              "kebabColor": "hsl(165, 70%, 50%)",
              "fries": 148,
              "friesColor": "hsl(27, 70%, 50%)",
              "donut": 81,
              "donutColor": "hsl(7, 70%, 50%)"
            },
            {
              "country": "AL",
              "hot dog": 170,
              "hot dogColor": "hsl(356, 70%, 50%)",
              "burger": 187,
              "burgerColor": "hsl(95, 70%, 50%)",
              "sandwich": 125,
              "sandwichColor": "hsl(117, 70%, 50%)",
              "kebab": 72,
              "kebabColor": "hsl(175, 70%, 50%)",
              "fries": 74,
              "friesColor": "hsl(229, 70%, 50%)",
              "donut": 36,
              "donutColor": "hsl(296, 70%, 50%)"
            },
            {
              "country": "AM",
              "hot dog": 155,
              "hot dogColor": "hsl(182, 70%, 50%)",
              "burger": 37,
              "burgerColor": "hsl(255, 70%, 50%)",
              "sandwich": 166,
              "sandwichColor": "hsl(28, 70%, 50%)",
              "kebab": 32,
              "kebabColor": "hsl(40, 70%, 50%)",
              "fries": 52,
              "friesColor": "hsl(190, 70%, 50%)",
              "donut": 9,
              "donutColor": "hsl(293, 70%, 50%)"
            }
          ]}
        keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'fries'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
    />
    </div>
    <div className="Title">BAR</div>
    </Grid.Column>
    <Grid.Column ></Grid.Column>
    </Grid>
    
)

export default Bar