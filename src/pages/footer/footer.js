import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import "./footer.scss";
configure({ adapter: new Adapter() });

class Footer extends Component {
    render() {
        return (
            <footer>
                <p>&copy; All Rights Reserved.</p>
            </footer>
        );
    }
}

export default Footer;
