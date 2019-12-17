import React from 'react';

const Checkbox = props => (
    <input type="checkbox" {...props}/>
)

export default class TodoTask extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            numer: props.numer,
            description: props.description,
            completed: props.completed || false
        };
    }

    render(){
        return(
            <div>
                <label>
                    <Checkbox
                        checked={this.state.completed}
                        onChange={this.props.onChange}
                    />
                </label>
                {this.state.description}
            </div>
        )
    }
}