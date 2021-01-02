import chandamamaStoriesPage from '../pages/chandamamaStoriesPage';

describe('Chandamama Stories page Tests', () => {

    before(() => {
        chandamamaStoriesPage.navigateToChandamamaStoriesPage()
    });

    it('Check page title', () => {
        chandamamaStoriesPage.getPageTitle().should('have.text', 'Chandamama Stories');
    });

    it('Read stories in english test', () => {
        const hyperlinkText = "English";
        chandamamaStoriesPage.clickHyperlinks(hyperlinkText);
        chandamamaStoriesPage.getPageTitle().should('have.text', 'Chandamama Stories English');
    });
})