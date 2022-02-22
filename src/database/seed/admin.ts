import { hash } from "bcrypt"
import { v4 as uuidV4 } from "uuid"
import createConnection from "../index"

async function create() {
    
    const connection = await createConnection()

    const id = uuidV4()

    const password = await hash("admin", 8)

    await connection.query(
        `INSERT INTO users(id, name, email, password, age, location, gender, phone, admin, created_at, updated_at) VALUES('${id}', 'Misael Lopes', 'mecl.ely2gmail.com', '${password}', 21, 'Lobito, Benguela', 'M', 938782078, true, 'now()', 'now()')`
    )

    await connection.close()
}

create().then(() => console.log("Admin User Created Successful!"))