import basePage from './basePage';

const usageHistoryPage = {
    url: 'usage-history',
    pages: 'page-item',

    navigateToUsageHistoryPage() {
      basePage.goto(this.url)
    },

    getNumberOfPages() {
        return cy.get(this.pages);
    }
}
export default usageHistoryPage;