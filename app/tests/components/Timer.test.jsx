var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  var timer = TestUtils.renderIntoDocument(<Timer/>);

  it('should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {
    it('should start timer on started status', (done) => {
      timer.handleStatusChange('started');

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        expect(timer.state.timerStatus).toBe('started');
        done();
      }, 1001);
    });

    it('should pause timer on paused status', (done) => {
      timer.setState({ count: 5 });
      timer.handleStatusChange('started');
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.count).toBe(5);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset timer on stopped', (done) => {
      timer.setState({ count: 10 });
      timer.handleStatusChange('stopped');

      setTimeout(() => {
        expect(timer.state.count).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        expect(timer.timer).toBe(undefined);
        done();
      }, 1001);
    });
  });
});
