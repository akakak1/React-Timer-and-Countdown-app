var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

    getInitialState:function(){
        return {
            count:0,
            timerStatus:'stopped'
        }
    },

    handleStatusChange:function(newTimerStatus){
        console.log('New Status', newTimerStatus);
    },

    render:function(){
        
        var {count, timerStatus} = this.state;
        
        return (
            <div>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
            
            
        )
    }
})


module.exports = Timer;