import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, storeResult, deleteResult } from '../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

//import * as actionTypes from '../../store/actions/actions';

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
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
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
        ctr: globalState.ctr.counter,
        storedResults: globalState.res.results
    };
}

const mapDispatchToProps = (dispatch, value) => {
    return {
        // onIncrementCounter: (value) => dispatch({
        //     type: actionTypes.INCREMENT,
        //     value: value
        // }),
        onIncrementCounter: (value) => dispatch(increment(value)),
        onStoreResult: (result) => dispatch(storeResult(result)),
        onDeleteResult: (id) => dispatch(deleteResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);