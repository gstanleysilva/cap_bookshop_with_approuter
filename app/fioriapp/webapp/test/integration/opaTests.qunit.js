sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/myhanaproj/bookshop/fioriapp/test/integration/FirstJourney',
		'sap/myhanaproj/bookshop/fioriapp/test/integration/pages/BooksList',
		'sap/myhanaproj/bookshop/fioriapp/test/integration/pages/BooksObjectPage',
		'sap/myhanaproj/bookshop/fioriapp/test/integration/pages/Books_textsObjectPage'
    ],
    function(JourneyRunner, opaJourney, BooksList, BooksObjectPage, Books_textsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/myhanaproj/bookshop/fioriapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBooksList: BooksList,
					onTheBooksObjectPage: BooksObjectPage,
					onTheBooks_textsObjectPage: Books_textsObjectPage
                }
            },
            opaJourney.run
        );
    }
);