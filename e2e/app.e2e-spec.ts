import { QuantitativeDecisionAnalysisToolboxPage } from './app.po';

describe('quantitative-decision-analysis-toolbox App', function() {
  let page: QuantitativeDecisionAnalysisToolboxPage;

  beforeEach(() => {
    page = new QuantitativeDecisionAnalysisToolboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
