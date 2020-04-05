import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render() {
        return (
            < div >
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter(1)} />
                <CounterControl label="Decrement" clicked={() => this.props.onIncrementCounter(-1)} />
                <CounterControl label="Add 5" clicked={() => this.props.onIncrementCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() => this.props.onIncrementCounter(-5)} />
                <hr />
                <button onClick={this.props.onStoreResult}>Store Result</button>
                <ul>
                    {this.props.storedResults.map((item) => {
                        return (<li key={item.id} onClick={() => {
                            this.props.onDeleteResult(item.id)
                        }}>{item.value}</li>)
                    })}

                </ul>
            </div >
        );
    }
}

const mapStateToProps = globalState => {
    return {
        ctr: globalState.counter,
        storedResults: globalState.results
    };
}

const mapDispatchToProps = (dispatch, value) => {
    return {
        onIncrementCounter: (value) => dispatch({
            type: actionTypes.INCREMENT,
            value: value
        }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);