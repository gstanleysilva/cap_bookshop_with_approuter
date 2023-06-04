module.exports = (srv) => {

    srv.on('get_books_procedure', async () => {

        try {
            const hdbext = require('@sap/hdbext');

            //Getting the credentials from HANA DB
            const db = await cds.connect.to('db');
            const credentials = db.options.credentials;

            //Creating instance of HDBEXT Promisfied
            const dbClass = require('sap-hdbext-promisfied');
            let dbConn = new dbClass(await dbClass.createConnection(credentials));

            //Executing Procedure on HANA Cloud
            const sp = await dbConn.loadProcedurePromisified(hdbext, null, 'get_books_procedure');
            const output = await dbConn.callProcedurePromisified(sp, [])

            return output.results;
        } catch (error) {
            return console.error(error);            
        }

    });

}