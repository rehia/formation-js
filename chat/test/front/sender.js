'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
chai.use(require('sinon-chai')); // stp!

const Sender = require('../../app/front/sender');

describe('sender behavior', () => {
  it('should send message to all users', () => {
    const socket = {
      emit: sinon.spy()
    };
    const sender = new Sender(socket);

    sender.sendMessageToAllUsers('hello everyone !');

    expect(socket.emit).to.have.been.calledWith(
      'chat message',
      '{"message":"hello everyone !"}'
    );
  });
});
