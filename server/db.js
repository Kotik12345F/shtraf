import postgres from "postgres"

const sql = postgres({
    host: "192.168.147.50",
    port: 5432,
    username: "On1on",
    password: "1234",
    db: 'basement'
})

export default sql
