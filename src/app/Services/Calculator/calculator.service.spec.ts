import { LoggerService } from "../Logger/logger.service";
import { CalculatorService } from "./calculator.service";

describe('CalculatorService', () => {
  let loggerService:LoggerService;
  let calculator:CalculatorService;
  beforeEach(()=>{
    // loggerService = new LoggerService();
    loggerService=jasmine.createSpyObj(LoggerService,['log'])
    calculator = new CalculatorService(loggerService);

    // spyOn(loggerService,"log").and.callThrough();
    // spyOn(loggerService,"log");
    
  });

  it('should add two numbers', () => {
    console.log('calling add');
    
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('calling subtract');

    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
});