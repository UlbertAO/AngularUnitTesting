describe('Test Suite', () => {
    let bool: boolean;
  
    beforeEach(() => {
        bool = false;
    });
  
    it('should return true if bool is true', () => {
      //arrange
      bool = false;
  
      //act
      bool = true;
  
      //assert
      expect(bool).toBe(true);
    });
  });
  