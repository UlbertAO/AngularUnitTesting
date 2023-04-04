import { LoggerService } from "./logger.service"

describe("LoggerService",()=>{
  let service:LoggerService

  beforeEach(()=>{
    service=new LoggerService();
  })
  it("should not have any msg at starting",()=>{
    let len= service.messages.length;
    expect(len).toBe(0);
  });

  it("should log msg when log is called",()=>{
    service.log("MESSAGE");
    expect(service.messages.length).toBe(1);
  });
  
  it("should clear messages when clear is called",()=>{
    service.clear();
    expect(service.messages.length).toBe(0);
  });
})