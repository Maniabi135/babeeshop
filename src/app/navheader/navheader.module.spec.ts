import { NavheaderModule } from './navheader.module';

describe('NavheaderModule', () => {
  let navheaderModule: NavheaderModule;

  beforeEach(() => {
    navheaderModule = new NavheaderModule();
  });

  it('should create an instance', () => {
    expect(navheaderModule).toBeTruthy();
  });
});
