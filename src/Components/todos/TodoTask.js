import React from 'react';

const Checkbox = props => (
    <input type="checkbox" {...props}/>
)

export default class TodoTask extends React.Component{

    handleCheckboxChange = event =>
        this.setState({completed: event.target.completed})

    constructor(props){
        super(props);
        this.state = {
            description: props.description,
            completed: props.completed
        };
    }

    render(){
        return(
            <div>
                <label className={"m-2"}>
                    <Checkbox
                        checked={this.state.completed}
                        onChange={this.handleCheckboxChange}
                    />
                </label>
                {this.state.description}
            </div>
        )
    }


}