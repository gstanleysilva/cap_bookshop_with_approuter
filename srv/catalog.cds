using {sap.myhanaproj.bookshop as my} from '../db/schema';

service CatalogService @(requires: 'authenticated-user') {
    entity Books@(restrict : [
     { grant : [ 'READ' ], to : [ 'General' ] },
     { grant : [ '*' ], to : [ 'Admin' ] }
     ]) as projection on my.Books;

    entity Authors as projection on my.Authors;

    function get_books_procedure() returns array of Books;
}