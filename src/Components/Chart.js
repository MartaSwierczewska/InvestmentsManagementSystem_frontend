import React, {Component} from 'react';
import {Bar, Pie} from "react-chartjs-2";
import {getAllHouses, getAllPercentsOfDoneTodos} from "../utils/APIUtils";

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentDidMount() {
        getAllHouses()
            .then((result) => {
                let houseNames = result.map((item) => {
                    return {houseName: item.nameToShow};
                });

                console.log(houseNames)

                this.setState({
                    chartData: {
                        labels: [houseNames[0].houseName,houseNames[1].houseName,houseNames[2].houseName,houseNames[3].houseName]
                    }
                });
            });


        getAllPercentsOfDoneTodos()
            .then((result) => {
                var percents = result.map((item) => {
                    return {data: item};
                });

                this.setState({
                    chartData: {
                        datasets: [
                            {
                                data: [percents[0].data, percents[1].data, percents[2].data, percents[3].data],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.6)',
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(255, 206, 86, 0.6)',
                                    'rgba(75, 192, 192, 0.6)'
                                ],
                            }
                        ]
                    }
                });
            });
    }

        static
        defaultProps = {
            displayTitle: true,
            displayLegend: false,
            displayLegendPie: true,
            legendPosition: 'right',
        };

        render()
        {
            return (
                <div>
                    <Bar
                        style={{size:'50%'}}
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'All done todos in investments',
                                fontSize: 25
                            },
                            layout: {
                                padding: {
                                    left: 400,
                                    right: 400,
                                    bottom: 200
                                }
                            },
                            legend: {
                                display: this.props.displayLegend,
                                position: this.props.legendPosition
                            },
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                            }

                        }}
                    />
                    <Pie
                        data={this.state.chartData}
                        options={{
                            title: {
                                display: this.props.displayTitle,
                                text: 'All done todos in investments',
                                fontSize: 25
                            },
                            layout: {
                                padding: {
                                    left: 400,
                                    right: 400,
                                    bottom: 200
                                }
                            },
                            legend: {
                                display: this.props.displayLegendPie,
                                position: this.props.legendPosition
                            }
                        }}
                    />
                </div>
            )
        }
    }
