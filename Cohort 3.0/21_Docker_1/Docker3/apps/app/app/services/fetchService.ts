'use server';
import { db, UsersTable } from '@repo/database';
export async function FetchService() {
  try {
    const data = await db.select().from(UsersTable);
    console.log('Data in fetchService- ', data);
    return { data };
  } catch (error) {
    console.error('Error in next js fetchService, ', error);
    return { message: 'Error in next js fetchService' };
  }
}
