using CatalogService as Prod from './catalog';

annotate CatalogService.Books with @(UI: {
    HeaderInfo     : {
        TypeName      : '{i18n>Cat.TypeName}',
        TypeNamePlural: '{i18n>Cat.TypeNamePlural}',
        Title         : {
            $Type: 'UI.DataField',
            Value: title
        }
    },
    LineItem       : [
        {
            $Type: 'UI.DataField',
            Value: ID
        },
        {
            $Type: 'UI.DataField',
            Value: title
        },
        {
            $Type: 'UI.DataField',
            Value: descr
        },
        {
            $Type: 'UI.DataField',
            Value: price
        }
    ]
});

annotate CatalogService.Books with {
    ID    @(Common: {Label: '{i18n>Cat.BookID}'});
    title @(Common.Label: '{i18n>Cat.BookTitle}');
    price @(Common.Label: '{i18n>Cat.BookPrice}');
    descr @(Common.Label: '{i18n>Cat.BookDescr}');
}
