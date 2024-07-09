import { TInsertUsers, TSelectUsers, usersTable } from "../drizzle/schema";
import db from "../drizzle/db";
import { eq } from "drizzle-orm";

export const getAllUsersService = async (): Promise<TSelectUsers[] | null> => {
    return await db.query.usersTable.findMany();
}

export const createUserService = async (user: TInsertUsers) => {
    await db.insert(usersTable).values(user);
    return "User created successfully";
}

export const getUserByIdService = async (id: TSelectUsers["user_id"]): Promise<TSelectUsers[]> => {
    return await db.select().from(usersTable).where(eq(usersTable.user_id, id));
}

export const updateUserService = async (id: number, user: TInsertUsers) => {
    await db.update(usersTable).set(user).where(eq(usersTable.user_id, id));
    return "User updated successfully 🎉";
}

export const deleteUserService = async (id: number) => {
    await db.delete(usersTable).where(eq(usersTable.user_id, id));
    return "User deleted successfully 🎉";
}

export const getMoreUsersInfoService = async () => {
    return await db.query.usersTable.findMany({
        columns: {
            full_name: true,
            contact_phone: true
        },
        with: {
            authOnUsers: {
                columns: {
                    id: true
                },
                with: {
                    user: {
                        columns: {
                            full_name: true,
                            email: true
                        }
                    }
                }
            }
        }
    });
}
