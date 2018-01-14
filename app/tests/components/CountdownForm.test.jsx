var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');


describe('CountdownForm', ()=> {
    it('should exist', ()=> {
        expect(CountdownForm).toExist();
    })

    describe('onSetCountdown', ()=> {
        it('should call onSetCountdown if valid seconds entered', ()=> {
            var spy = expect.createSpy();
            var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
            var $el = $(ReactDOM.findDOMNode(countdownForm));

            countdownForm.refs.seconds.value= '109';  // NOTE: should be string
            TestUtils.Simulate.submit($el.find('form')[0])  //are we passing raw dom object ?? does submit() take raw js dom object ?? 
            expect(spy).toHaveBeenCalledWith(109)
        })

        it('should not call onSetCountdown if invalid seconds entered', ()=> {
            var spy = expect.createSpy();
            var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
            var $el = $(ReactDOM.findDOMNode(countdownForm));

            countdownForm.refs.seconds.value= '109b';  // NOTE: should be string
            TestUtils.Simulate.submit($el.find('form')[0])  //are we passing raw dom object ?? does submit() take raw js dom object ?? 
            expect(spy).toNotHaveBeenCalled();
        })
    })
})