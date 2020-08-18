import React from 'react';
import Main from './main';
import Menu from './menu';

class Content extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Menu />
                <Main />
            </div>
        );
    }
}

export default Content;