import basePage from './basePage';

const chandamamaStoriesPage = {
    url: 'chandamama-stories',
    title: 'h1',

    /**
     * Wrapper to navigate to chandamama stories page
     */
    navigateToChandamamaStoriesPage() {
        basePage.goto(this.url);
    },

    /**
     * Wrapper to get page title
     */
    getPageTitle() {
        return cy.get(this.title);
    },

    /**
     * Click on hyperlink by it's hyperlink text
     * 
     * @param {*} hyperlinkText 
     */
    clickHyperlinks(hyperlinkText) {
        cy.get('a').contains(hyperlinkText).click();
    },
}
export default chandamamaStoriesPage;