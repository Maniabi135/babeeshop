import { SideheaderModule } from './sideheader.module';

describe('SideheaderModule', () => {
  let sideheaderModule: SideheaderModule;

  beforeEach(() => {
    sideheaderModule = new SideheaderModule();
  });

  it('should create an instance', () => {
    expect(sideheaderModule).toBeTruthy();
  });
});
