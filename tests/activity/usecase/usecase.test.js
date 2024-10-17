import { expect } from 'chai';
import usecase from '../../../activity/usecase/usecase.js';

describe('#usecase', () => {
  describe('#allActivity', () => {
    it('should cover a success return', () => {
      const size = 10;
      const result = usecase.allActivity(size);
      expect(result).to.be.not.empty;
      expect(result).to.be.an('array');
      expect(result.length).to.equal(2);
    });
    it('should cover an error return', () => {
      const size = '5';

      try {
        const result = usecase.allActivity(size);
        expect(result).to.be.undefined;
      } catch (e) {
        expect(e.message).to.be.not.null;
        expect(e.message).to.be.a('string');
      }
    });
  });

  describe('#oneActivity', () => {
    let id;
    beforeEach(() => {
      id = 1;
    });
    afterEach(() => {
      id = null;
    });

    it('should cover a success return', () => {
      const result = usecase.oneActivity(id);
      expect(result).to.be.not.empty;
      expect(result).to.be.an('object');
    });
    it('should cover an error return', () => {
      id = 10;
      
      try {
        const result = usecase.oneActivity(id);
        expect(result).to.be.undefined;
      } catch (e) {
        expect(e.message).to.be.not.null;
        expect(e.message).to.be.a('string');
      }
    });
  })
});
