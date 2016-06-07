var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', () => {
    var countdown = TestUtils.renderIntoDocument(<Countdown/>);
    var seconds = 10;

    it('should set state to started and countdown', () => {
      countdown.handleSetCountdown(seconds);

      expect(countdown.state.count).toBe(seconds);
      expect(countdown.state.countdownStatus).toBe('started');
    });

    it('should decrease count variable', (done) => {
      countdown.handleSetCountdown(seconds);

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
});
