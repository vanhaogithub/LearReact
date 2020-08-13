import React from 'react';
//import ListUser from '../../common/listUser';
class Array extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        let ListUser = ["Hao", "Hoang"]
        let listItem = ListUser.map(
            (user, index) => <li>{index.toString() + "-" + user}</li>
        );
        return (
            <ul>
                {listItem}
            </ul>
        );
    }
}

export default Array;