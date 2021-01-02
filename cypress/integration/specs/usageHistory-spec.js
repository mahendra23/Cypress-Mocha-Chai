import usageHistoryPage from '../pages/usageHistoryPage';

describe('Usage History page Tests', () => {

    beforeEach(() => {
        usageHistoryPage.navigateToUsageHistoryPage();
    });

    it('Check number of pages', () => {
        usageHistoryPage.getNumberOfPages().should('have.length', 5);
    });;
})