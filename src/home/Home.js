/**
 * Created by jesse on 2016-03-01.
 */
import { React, Route, Application,
    connect, bindActionCreators } from 'reactuate'
import counter from '../counter'
import counterAsync from '../counter/async'
import RaisedButton from '../../node_modules/material-ui/lib/raised-button'


class HomePage extends React.Component {
    handleIncrement() {
        this.props.actions.IncrementCounter()
    }
    handleIncrementDelayed() {
        this.props.actions.IncrementCounterDelayed()
    }
    render() {
        return (

            <div className="temagami-content mdl-layout__content">
                <a name="top"></a>
                <div className="temagami-hero-section mdl-typography--text-center">
                    <div className="logo-font temagami-slogan">SaveOnEnergy</div>
                    <div className="logo-font temagami-sub-slogan">Receive funding for your energy retrofit projects.</div>
                </div>

                <div className="temagami-customized-section" style={{backgroundColor: '#eee'}}>
                    <div className="temagami-customized-section-text">
                        <div className="mdl-typography--font-light mdl-typography--display-1-color-contrast">Calculate your savings</div>
                        <p className="mdl-typography--font-light">
                            Take a few minutes to estimate your savings the potential payback time for your retrofit project.
                        </p>
                    </div>
                </div>

                <h5>Counter example</h5>
                {this.props.counter}
                <RaisedButton onClick={() => this.handleIncrement()} label="INCREMENT"></RaisedButton>
                <RaisedButton onClick={() => this.handleIncrementDelayed()} label="INCREMENT WITH DELAY"></RaisedButton>
            </div>)
    }
}

HomePage = connect(state => ({counter: state.counter.counter}),
    dispatch => ({actions:
        bindActionCreators({...counter.actions, ...counterAsync.actions}, dispatch)}))(HomePage)

export default HomePage