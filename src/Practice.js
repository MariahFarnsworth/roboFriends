import React, {Component} from 'react';

class Practice extends Component{
    render(){
        return(
            <div>
                <h2 className="garamond f2 light-purple tc">This component was built on {this.props.date}</h2>
            </div>
        )
    }
}

export default Practice;