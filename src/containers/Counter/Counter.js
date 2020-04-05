import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            < div >
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter(1)} />
                <CounterControl label="Decrement" clicked={() => this.props.onIncrementCounter(-1)} />
                <CounterControl label="Add 5" clicked={() => this.props.onIncrementCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onIncrementCounter(-5)} />
            </div >
        );
    }
}

const mapStateToProps = globalState => {
    return {
        ctr: globalState.counter
    };
}

const mapDispatchToProps = (dispatch, value) => {
    console.log(value);
    return {
        onIncrementCounter: (value) => dispatch({
            type: 'INCREMENT',
            value: value
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);