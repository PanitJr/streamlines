import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Grid } from 'semantic-ui-react'

const Line = () => (
    <Grid centered columns={16}>
            <Grid.Column ></Grid.Column>
            <Grid.Column width={14}>
    <div style={{height: 500}}>
        <ResponsiveLine
            data={[
                {
                  "id": "Project A",
                  "color": "hsl(344, 70%, 50%)",
                  "data": [
                    {
                      "x": "Jan",
                      "y": 89
                    },
                    {
                      "x": "Feb",
                      "y": 80
                    },
                    {
                      "x": "Mar",
                      "y": 100
                    },
                    {
                      "x": "Apr",
                      "y": 100
                    },
                    {
                      "x": "May",
                      "y": 100
                    },
                    {
                      "x": "Jun",
                      "y": 100
                    },
                    {
                      "x": "Jul",
                      "y": 100
                    },
                    {
                      "x": "Aug",
                      "y": 100
                    },
                    {
                      "x": "Sep",
                      "y": 100
                    },
                    {
                      "x": "Oct",
                      "y": 100
                    },
                    {
                      "x": "Nov",
                      "y": 90
                    },
                    {
                      "x": "Dec",
                      "y": 90
                    }
                  ]
                },
                {
                    "id": "Project B",
                    "color": "hsl(344, 70%, 50%)",
                    "data": [
                      {
                        "x": "Jan",
                        "y": 100
                      },
                      {
                        "x": "Feb",
                        "y": 90
                      },
                      {
                        "x": "Mar",
                        "y": 90
                      },
                      {
                        "x": "Apr",
                        "y": 90
                      },
                      {
                        "x": "May",
                        "y": 90
                      },
                      {
                        "x": "Jun",
                        "y": 90
                      },
                      {
                        "x": "Jul",
                        "y": 90
                      },
                      {
                        "x": "Aug",
                        "y": 90
                      },
                      {
                        "x": "Sep",
                        "y": 90
                      },
                      {
                        "x": "Oct",
                        "y": 90
                      },
                      {
                        "x": "Nov",
                        "y": 100
                      },
                      {
                        "x": "Dec",
                        "y": 100
                      }
                    ]
                  }
              ]}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', stacked: false, min: '0', max: '100' }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            colors={{ scheme: 'nivo' }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    </div>
    <div className="Title">Line</div>
    </Grid.Column>
    <Grid.Column ></Grid.Column>
    </Grid>
    
)

export default Line