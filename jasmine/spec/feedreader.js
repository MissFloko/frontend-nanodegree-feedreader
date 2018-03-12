/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(() => {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // each feedshould have an url
        it('have urls', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');  //make sure the url of the feed is not empty
           });
        });


        // each feed should have a name
        it('have names', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');  //make sure the name of the feed is not empty
            });
        });

    });

    // test suite about the hamburger menu
    describe('The menu', () => {

         //the class 'menu-hidden' on the body element is what's keeping to menu hidden
        it('menu hidden by default', () => {
           expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        it('menu to change visibily on click', () => {
            //click one : menu is shown 
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //click two : menu is hidden again
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

    })
    

    // test suite about new feed selection
    describe('New Feed Selection', () => {

        it('see changes in the feeds', (done) => {
            // compare the title before leoadFeed() and after
            var title = $('.header-title').text();
            loadFeed(0, () => {
                expect($('.header-title').text()).not.toBe(title);
                done();
            });
        });
    })


     // test suite about new feed entries
    describe('Initial Entries', () => {

        // test run when loadFeed() is done
        beforeEach((done) => {
            loadFeed(0, done);
        });
    
        it('at least one entry', () => {
            //the container .feed should have children
            const entries = $('.feed').children();
            expect(entries.length).not.toBe(0);
        });
    })

})();
