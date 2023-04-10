import React, { Component } from 'react';


class title extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className='flex justify-center items-center h-[72px]'>
                <hr class={`w-1/3 h-1 ${this.props.colorTwo} border-0 mx-1 mt-[15px]`} />
                <div className='flex items-center mx-1'>
                    <p className={`text-6xl ${this.props.color} font-medium mx-1`}>&#123;</p>
                    <h1 className='text-4xl mx-1 text-white font-medium mt-[10px]'>{this.props.title}</h1>
                    <p className={`text-6xl ${this.props.color} font-medium mx-1`}>&#125;</p>
                </div>
                <hr class={`w-1/3 h-1 ${this.props.colorTwo} border-0 mx-1 mt-[15px]`} />
            </div>
        );
    }
}

export default title;