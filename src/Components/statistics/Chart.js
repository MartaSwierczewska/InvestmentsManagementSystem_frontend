import React, {Component} from 'react';
import {Bar, Line, Pie} from "react-chartjs-2";
import "/home/ania/WebstormProjects/DocumentsGraph_front/src/App.css";
import {getAllHouses, getAllPercentsOfDoneTodos, getImage} from "../../utils/APIUtils";
import ItemCard from "../ItemCard";

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels:[],
            chartData:{
                // labels: [],
                datasets:[{label:'ile jest zrobionych', data: [],}],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ],
            }
        }
    }

    componentDidMount() {
        getAllHouses()
            .then((result) =>{
                var houseNames = result.map((item)=>{
                    return {houseName:item.name};
                });
                this.setState({labels:houseNames})
            });

        getAllPercentsOfDoneTodos()
            .then((result) =>{
                var percents = result.map((item)=>{
                    return {data:item};
                });
                this.setState({data:percents})
            });

        console.log(this.state.labels)
    }

    getChartData(){
        // //ajax calls here
        // this.setState({
        //     chartData: {
        //         labels: this.state.labels,
        //
        //         datasets: [
        //             {
        //                 data: [this.state.data
        //                     // getAllPercentsOfDoneTodos().then((result) =>{
        //                     //     let percents = result.map((item) =>
        //                     //     item.value,
        //                     //     );
        //                     // this.setState({percents: percents})
        //                     // })
        //                 ],
        //                 backgroundColor: [
        //                     'rgba(255, 99, 132, 0.6)',
        //                     'rgba(54, 162, 235, 0.6)',
        //                     'rgba(255, 206, 86, 0.6)',
        //                     'rgba(75, 192, 192, 0.6)'
        //                 ],
        //             }
        //         ]
        //     }
        // })
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: false,
        legendPosition:'right',
    };

    render() {
        return (
            <div>
                <Bar
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
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        }
                    }}
                />
            </div>
        )
    }
}

export default Chart;