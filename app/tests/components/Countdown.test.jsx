var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  var countdown = TestUtils.renderIntoDocument(<Countdown/>);

  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and countdown', () => {
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');
    });

    it('should decrease count variable', (done) => {
      countdown.handleSetCountdown(10);

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('should never decrease count variable less than zero', (done) => {
      countdown.handleSetCountdown(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });

  describe('handleStatusChange', () => {
    it('should pause countdown on paused status', (done) => {
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should reset count on stopped', (done) => {
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
