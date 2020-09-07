// this will extract the time and date when the article was published at.

import React, { Component } from 'react'
import { Text,View } from 'native-base'
import moment from 'moment';

class Time extends Component {
    constructor(props){
        super(props)
        this.date= props.time;
    }
    render() {
        const time= moment(this.date || moment.now() ).fromNow();
        return (
            <View>
                <Text note style={{marginHorizontal:10}}>
                    {time}
                  </Text>
            </View>
        )
    }
}


export default Time;