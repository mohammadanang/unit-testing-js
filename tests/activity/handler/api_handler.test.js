import { expect } from 'chai';
import sinon from 'sinon';
import usecase from '../../../activity/usecase/usecase.js';
import api_handler from '../../../activity/handler/api_handler.js';

describe('#activity', () => {
  describe('#getActivity', () => {
    let stubAllActivity, req, res;
    beforeEach(() => {
      const activities = [{
        id: 1,
        description: 'Reading a book',
      }];
      stubAllActivity = sinon.stub(usecase, 'allActivity');

      stubAllActivity.returns(activities);
      req = {
        query: {
          size: '5'
        }
      };
      res = {
        status: sinon.stub().callsFake(() => {
          return {
            json: sinon.stub().returns({
              code: 200,
              status: 'success',
              message: 'success',
              data: activities,
            })
          };
        })
      };
    });
    afterEach(() => {
      stubAllActivity.restore();
      req = null;
      res = null;
    });

    it('should cover a success return', () => {
      const result = api_handler.getActivity(req, res);
      expect(result.data).to.be.not.null;
      expect(stubAllActivity.calledOnce).to.be.true;
      expect(result.status).to.equal('success');
    });
    it('should cover an error return', () => {
      stubAllActivity.throws(new Error());
      res = {
        status: sinon.stub().callsFake(() => {
          return {
            json: sinon.stub().returns({
              code: 500,
              status: 'error',
              message: 'failed',
            })
          };
        })
      };
      const result = api_handler.getActivity(req, res);
      expect(result.code).to.equal(500);
      expect(result.data).to.be.undefined;
      expect(stubAllActivity.calledOnce).to.be.true;
    });
  });
});
