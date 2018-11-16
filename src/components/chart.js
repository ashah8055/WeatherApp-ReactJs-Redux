import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={100} width={160} data={props.data} >
                <SparklinesLine color={props.color}></SparklinesLine>
                <SparklinesSpots />
            </Sparklines>
            <div>{average(props.data)}{props.units}</div>
        </div>
    );
}