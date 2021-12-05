const sql = require("mssql");

const config = {
    database:'SampleDataLab',
    server:'AHMED\\SQLEXPRESS'
}

async function con() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("select * from Customer");
        return products.data;
    } catch (error) {
        console.log(error);
    }
}

con().then(result=>{
    console.log(result);
})