import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
        this is my EditExpensePage and the id is {props.match.params.id}
        </div>
    );
}

export default EditExpensePage;