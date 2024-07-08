import { sql } from "drizzle-orm";
import db from "../drizzle/db";
import { TInsertAuthOnUsers, TSelectAuthOnUsers,authOnUsersTable } from "../drizzle/schema";


// export {userExists} from "./auth.service";
export const createUserService = async (user: TInsertAuthOnUsers): Promise<string | null> => {
    await db.insert(authOnUsersTable).values(user)
    return "User Registered successfully 🎉";
}

export const loginUserService = async(user:TSelectAuthOnUsers) => {
    const {username,password} = user
    return await db.query.authOnUsersTable.findFirst({
        columns:{
            username:true,
            role:true,
            password:true
        }, where:sql`${authOnUsersTable.username} = ${username}`,
        with:{
            user:{
                columns:{
                  user_id:true,
                  email:true,
                  full_name:true,
                  contact_phone:true
            }
        }

        }
    })
}