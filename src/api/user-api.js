// @flow
import mockUsers from './mock-users.json';
import type { APIUser } from '../types/entities';

export async function getUsers(): Promise<Array<APIUser>> {
  // mock version
  return Promise.resolve(mockUsers.users);
}

// eslint-disable-next-line no-unused-vars
export async function updateUser(user: APIUser): Promise<{ status: number }> {
  // mock version
  return Promise.resolve({ status: 200 });
}
