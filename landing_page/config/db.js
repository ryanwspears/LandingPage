import { createPool } from "mysql"

const pool = createPool({
   host: "sql9.freemysqlhosting.net",
   user: "sql9599618",
   password: "kDxni7zmit",
   port: 3306,
   database: "sql9599618",
})

pool.getConnection((err) => {
   if (err) {
      console.log("Error connecting to DB...")
   }
   else {
      console.log("Connected to DB...")
   }
})

export default pool