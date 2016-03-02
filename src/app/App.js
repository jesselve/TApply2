/**
 * Created by jesse on 2016-03-01.
 */
import { React } from 'reactuate'
import { Link } from 'react-router'
import AppBar from '../../node_modules/material-ui/lib/app-bar'
import LeftNav from '../../node_modules/material-ui/lib/left-nav'
import IconButton from '../../node_modules/material-ui/lib/icon-button';
import IconMenu from '../../node_modules/material-ui/lib/menus/icon-menu';
import MoreVertIcon from '../../node_modules/material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from '../../node_modules/material-ui/lib/menus/menu-item';
import Tabs from '../../node_modules/material-ui/lib/tabs/tabs';
import Tab from '../../node_modules/material-ui/lib/tabs/tab';
const Logo = require('../../images/temagami-logo.png')
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();

class App extends React.Component {

    constructor(){
        super();
        this.state = {open: false};
    }

    handleToggle = () => {
        this.setState({open: !this.state.open});
    }

    handleClose = () => {
        if(this.state.open){
            this.setState({open: false})
        }
    };

    render() {
        return (
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header>
                    <AppBar
                        style={{backgroundColor:"white", minWidth:"800px"}}
                        title={
                            <img className="temagami-logo-image"
                                src="images/temagami-logo.png"
                                 style={{zIndex:"999"}}/>
                            }
                        iconClassNameLeft="icon"
                        onLeftIconButtonTouchTap={this.handleToggle}
                        onRequestChange={this.handleToggle}
                        children = {
                            <div>
                                <nav style={{float:"left"}}>
                                    <Link
                                        to="/calculator"
                                        className="mdl-navigation__link mdl-typography--text-uppercase"
                                        style={{paddingRight:"2em"}}>Savings Calculator</Link>
                                    <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Register</a>
                                </nav>

                                <IconMenu
                                    style={{display:"inline", float:"right"}}
                                    iconButtonElement={
                                    <IconButton><MoreVertIcon /></IconButton>
                                    }
                                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                                    >
                                    <MenuItem primaryText="Refresh" />
                                    <MenuItem primaryText="Help" />
                                    <MenuItem primaryText="Sign out" />
                                </IconMenu>
                            </div>
                        }
                    />
                </header>


                <div className="temagami-header mdl-layout__header mdl-layout__header--waterfall"
                     onClick={this.handleClose} >
                    <div aria-expanded="false" role="button" tabIndex="0" className="mdl-layout__drawer-button"><i className="material-icons">&#xE5D2;</i></div>
                    <div className="mdl-layout__header-row">
                        <span className="temagami-title mdl-layout-title">
                            <img className="temagami-logo-image" src="images/temagami-logo.png" />
                        </span>
                        <div className="temagami-header-spacer mdl-layout-spacer"></div>
                        <div className="temagami-search-box mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right mdl-textfield--full-width">
                            <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search-field">
                                <i className="material-icons">search</i>
                            </label>
                            <div className="mdl-textfield__expandable-holder">
                                <input className="mdl-textfield__input" type="text" id="search-field" />
                            </div>
                        </div>
                        <div className="temagami-navigation-container">
                            <nav className="temagami-navigation mdl-navigation">
                                <Link to="/calculator" className="mdl-navigation__link mdl-typography--text-uppercase">Savings Calculator</Link>
                                <a className="mdl-navigation__link mdl-typography--text-uppercase" href="">Register</a>
                            </nav>
                        </div>
                        <span className="temagami-mobile-title mdl-layout-title">
                            <img className="temagami-logo-image" src="images/temagami-logo.png" />
                        </span>
                        <button className="temagami-more-button mdl-button mdl-js-button mdl-button--icon mdl-js-ripple-effect" id="more-button">
                            <i className="material-icons">more_vert</i>
                        </button>
                        <ul className="mdl-menu mdl-js-menu mdl-menu--bottom-right mdl-js-ripple-effect">
                            <li className="mdl-menu__item">Login</li>
                            <li className="mdl-menu__item">Logout</li>
                            <li className="mdl-menu__item">Settings</li>
                            <li className="mdl-menu__item">http://temagami.co</li>
                        </ul>
                    </div>
                </div>

                <LeftNav ref="leftNav" open={this.state.open} className="temagami-drawer mdl-layout__drawer" style={{top:'65px'}}>
                    <nav className="mdl-navigation">
                        <a className="mdl-navigation__link" href="">Login/Logout</a>
                        <a className="mdl-navigation__link" href="">Savings Calculator</a>
                        <a className="mdl-navigation__link" href="">Register</a>
                        <div className="temagami-drawer-separator"></div>
                        <span className="mdl-navigation__link">Applicant View</span>
                        <a className="mdl-navigation__link" href="">New Application</a>
                        <a className="mdl-navigation__link" href="">Applications In Progress</a>
                        <span className="mdl-navigation__link">Applicant Rep View</span>
                        <a className="mdl-navigation__link" href="">New Application</a>
                        <a className="mdl-navigation__link" href="">Applications In Progress</a>
                        <a className="mdl-navigation__link" href="">Saved Models</a>
                        <a className="mdl-navigation__link" href="">Customer List</a>
                    </nav>
                </LeftNav>

                <div className="temagami-content mdl-layout__content"
                     onClick={this.handleClose}>
                    {this.props.children}
                </div>

            </div>
        )
    }
}

export default App;