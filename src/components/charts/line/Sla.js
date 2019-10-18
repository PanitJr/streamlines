import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { Grid, Header, Form, Label,Select } from 'semantic-ui-react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class Sla extends React.Component {
    constructor(props) {
        super(props);
        this.countryOptions= [
            { key: 'af', value: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', text: 'Angola' },
            { key: 'ai', value: 'ai', text: 'Anguilla' },
            { key: 'ag', value: 'ag', text: 'Antigua' },
            { key: 'ar', value: 'ar', text: 'Argentina' },
            { key: 'am', value: 'am', text: 'Armenia' },
            { key: 'aw', value: 'aw', text: 'Aruba' },
            { key: 'au', value: 'au', text: 'Australia' },
            { key: 'at', value: 'at', text: 'Austria' },
            { key: 'az', value: 'az', text: 'Azerbaijan' },
            { key: 'bs', value: 'bs', text: 'Bahamas' },
            { key: 'bh', value: 'bh', text: 'Bahrain' },
            { key: 'bd', value: 'bd', text: 'Bangladesh' },
            { key: 'bb', value: 'bb', text: 'Barbados' },
            { key: 'by', value: 'by', text: 'Belarus' },
            { key: 'be', value: 'be', text: 'Belgium' },
            { key: 'bz', value: 'bz', text: 'Belize' },
            { key: 'bj', value: 'bj', text: 'Benin' },
          ]
        this.state = {
            date: new Date()
        };
    }
    handleChange = date => {
        this.setState({
            date: date
        });
    };
    render() {
        return (
            <Grid columns={14}>
                <Grid.Row left >
                    <Grid.Column ></Grid.Column>
                    <Grid.Column ><Header as='h3'>SLA</Header></Grid.Column>
                    <Grid.Column width={4}>
                        <Grid.Row><Label pointing='below'>Start Date</Label></Grid.Row>
                        <Grid.Row>
                            <Form>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleChange}
                                    showTimeSelect
                                    dateFormat="Pp"
                                />
                            </Form>
                        </Grid.Row></Grid.Column>
                    <Grid.Column width={4}>
                        <Grid.Row><Label pointing='below'>End Date</Label></Grid.Row>
                        <Grid.Row>
                            <Form>
                                <DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleChange}
                                    showTimeSelect
                                    dateFormat="Pp"
                                />
                            </Form>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column >
                    <Grid.Row><Label pointing='below'>Project</Label></Grid.Row>
                    <Grid.Row><Select placeholder='Select your country' options={this.countryOptions} />
                    </Grid.Row>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row >
                <Grid.Column ></Grid.Column>
                    <Grid.Column centered width={14}>
                        <div style={{ height: 500 }}>
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

                    </Grid.Column>
                </Grid.Row>
                <Grid.Column ></Grid.Column>
            </Grid>

        )
    }

}