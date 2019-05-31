/**
 * @file request for user
 * @author atom
 */
import {getWithForm} from '../common/request';

export interface IUser {
    name: string;
}

export async function getUserInfo(): Promise<IUser> {
    try {
        const user = await getWithForm<IUser>('/user');
        return user;
    }
    catch (error) {
        console.error(error);
    }
}
