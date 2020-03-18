import {IUser} from '../../modules/user.interface';
import {makeTypedFactory, TypedRecord} from 'typed-immutable-record';

export interface IUserState {
  users: IUser[];
  selectedUser: IUser;
}

export interface IUserStateRecord extends TypedRecord<IUserStateRecord>, IUserState {}

export const defaultUserState: IUserState = {
  users: null,
  selectedUser: null
};

export const UserStateFactory = makeTypedFactory<IUserState, IUserStateRecord>(defaultUserState);
