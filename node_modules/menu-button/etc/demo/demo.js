import {Component} from 'react';
import ReactDOM from 'react-dom';
import MenuButton from '../../menu-button.js';


class Demo extends Component {
    constructor({ active = false, ...props } = {}) {
        super(props);

        this.state = {
            active
        }

    }

    handleClick() {
        this.setState({ active: !this.state.active });
    }

    render() {
        const { active } = this.state;

        return (
            <div className="demowrapper">
                <MenuButton isActive={active} onClick={this.handleClick.bind(this)}/>
            </div>
        );
    }

}


ReactDOM.render(
    <div>
        <Demo active />
        <Demo />
    </div>
    , document.getElementById('app') );
