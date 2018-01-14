var React = require('react');
var Navigation = require('Navigation');


//This is also a stateless functional component
var Main = React.createClass({

    render:function(){
        return (
            <div>
                <Navigation/>
                <div className="row">
                    <div className="column small-centered medium-6 large-4">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
})

module.exports = Main;