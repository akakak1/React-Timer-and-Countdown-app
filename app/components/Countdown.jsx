var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({

    getInitialState: function(){
        return {
            count:0,
            countdownStatus:'stopped'
        }
    },

    componentDidUpdate:function(prevProps, prevStates){
        if(this.state.countdownStatus != prevStates.countdownStatus) {
            switch(this.state.countdownStatus) {
                case 'started': this.startTimer();
                    break;
                case 'stopped': 
                    this.setState({ count: 0 });
                case 'paused':
                    clearInterval(this.timer);
                    this.timer= undefined;
                    break;
            }
        }
    },


    // SOME METHODS
    // componentWillUpdate:function(nextProps, nextState){

    // },

    // componentWillMount:function(){
    //     console.log('Component will mount');
    // },

    // componentDidMount:function(){
    //     console.log('Component did mount')
    // },

    componentWillUnmount:function(){
        // console.log('Component will unmount');
        clearInterval(this.timer);
        this.timer = undefined;
    },

    startTimer:function(){
        this.timer = setInterval(()=> {
            var newCount = this.state.count - 1 ;  //Would I be able to access 'this' if this was not an arrow function
            this.setState({
                count: newCount >= 0 ? newCount : 0
            })

            if(newCount === 0) {              //No need to countdown once count reaches 0 
                this.setState({
                    countdownStatus:'stopped'
                })
            }

        },1000)
    },

    handleStatusChange: function(newStatus){
        this.setState({ countdownStatus: newStatus })
    },

    handleSetCountdown: function(seconds){
        this.setState({
            count:seconds,
            countdownStatus:'started'
        })
    },

    render:function(){
        var {count, countdownStatus} = this.state;

        var renderControlArea = ()=> {
            if(countdownStatus!= 'stopped'){
               return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
            } else {
               return <CountdownForm onSetCountdown={this.handleSetCountdown}/>  // use arrow function othesewise you wont be able be access this.handleSetCountdown
            }
        }

        return(
            <div>
                <Clock totalSeconds={count} />
                {renderControlArea()}
            </div>
        )
    }
})


module.exports = Countdown;