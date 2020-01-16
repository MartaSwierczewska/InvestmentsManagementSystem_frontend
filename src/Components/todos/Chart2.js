import React from 'react';
import {Line} from 'react-chartjs-2';
import {getDatesOfAllTodos} from "../../utils/APIUtils";

// const state = {
//     labels: ['2012-04-23', '2012-04-27', '2012-04-30','2012-05-02','2012-05-10','2012-05-17','2012-06-13','2012-06-20'],
//     datasets: [
//         {
//             label: 'Date of done todos',
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: 'rgba(75,192,192,1)',
//             borderColor: 'rgba(0,0,0,1)',
//             borderWidth: 2,
//             data: [1,2,3,4,5,6,7,8]
//         }
//     ]
// }

export default class Chart2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dates: [],
        };
    }

    componentDidMount() {
        getDatesOfAllTodos()
            .then((result) => {
                let dates = result.map((item) => {
                    return {data: item.dateTime};
                });
                this.setState({dates: [dates[0].data, dates[1].data, dates[2].data, dates[3].data, dates[4].data, dates[5].data, dates[6].data, dates[7].data, dates[8].data, dates[9].data, dates[10].data, dates[11].data, dates[12].data, dates[13].data, dates[14].data, dates[15].data, dates[16].data]});

            });
    }

    render() {
        return (
            <div>
                <Line
                    data={
                        {
                            labels: this.state.dates,
                            datasets: [
                                {
                                    fill: false,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                                }
                            ]
                        }
                    }
                    options={{
                        title: {
                            display: true,
                            text: 'Dates of done todos in 1 investment',
                            fontSize: 20
                        },
                        legend: {
                            display: false,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }

}

