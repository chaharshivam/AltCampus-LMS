import React from 'react';
import Completed from '../components/Assignments/Completed';
import Pending from '../components/Assignments/Pending';
// import Pending from '';

function Assignments() {
    return (
        <div className="assignments flex-between">
            <Completed />
            <Pending />
        </div>
    );
}

export default Assignments;