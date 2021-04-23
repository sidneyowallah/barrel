/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateUserInput = {
  id?: string | null;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  dob?: string | null;
  address?: string | null;
  state?: string | null;
  profileImg?: string | null;
  favorites?: Array<string | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  role: string;
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  address?: ModelStringInput | null;
  state?: ModelStringInput | null;
  profileImg?: ModelStringInput | null;
  favorites?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  role?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  dob?: string | null;
  address?: string | null;
  state?: string | null;
  profileImg?: string | null;
  favorites?: Array<string | null> | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  role?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  firstName?: ModelStringInput | null;
  lastName?: ModelStringInput | null;
  email?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  dob?: ModelStringInput | null;
  address?: ModelStringInput | null;
  state?: ModelStringInput | null;
  profileImg?: ModelStringInput | null;
  favorites?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  role?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  dob: string | null;
  address: string | null;
  state: string | null;
  profileImg: string | null;
  favorites: Array<string | null> | null;
  createdAt: string;
  updatedAt: string | null;
  role: string;
  owner: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  dob: string | null;
  address: string | null;
  state: string | null;
  profileImg: string | null;
  favorites: Array<string | null> | null;
  createdAt: string;
  updatedAt: string | null;
  role: string;
  owner: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  dob: string | null;
  address: string | null;
  state: string | null;
  profileImg: string | null;
  favorites: Array<string | null> | null;
  createdAt: string;
  updatedAt: string | null;
  role: string;
  owner: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  dob: string | null;
  address: string | null;
  state: string | null;
  profileImg: string | null;
  favorites: Array<string | null> | null;
  createdAt: string;
  updatedAt: string | null;
  role: string;
  owner: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    phone: string | null;
    dob: string | null;
    address: string | null;
    state: string | null;
    profileImg: string | null;
    favorites: Array<string | null> | null;
    createdAt: string;
    updatedAt: string | null;
    role: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  dob: string | null;
  address: string | null;
  state: string | null;
  profileImg: string | null;
  favorites: Array<string | null> | null;
  createdAt: string;
  updatedAt: string | null;
  role: string;
  owner: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  dob: string | null;
  address: string | null;
  state: string | null;
  profileImg: string | null;
  favorites: Array<string | null> | null;
  createdAt: string;
  updatedAt: string | null;
  role: string;
  owner: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  dob: string | null;
  address: string | null;
  state: string | null;
  profileImg: string | null;
  favorites: Array<string | null> | null;
  createdAt: string;
  updatedAt: string | null;
  role: string;
  owner: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          email
          phone
          dob
          address
          state
          profileImg
          favorites
          createdAt
          updatedAt
          role
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          email
          phone
          dob
          address
          state
          profileImg
          favorites
          createdAt
          updatedAt
          role
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          username
          firstName
          lastName
          email
          phone
          dob
          address
          state
          profileImg
          favorites
          createdAt
          updatedAt
          role
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          firstName
          lastName
          email
          phone
          dob
          address
          state
          profileImg
          favorites
          createdAt
          updatedAt
          role
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            firstName
            lastName
            email
            phone
            dob
            address
            state
            profileImg
            favorites
            createdAt
            updatedAt
            role
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateUserListener: Observable<
    SubscriptionResponse<OnCreateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser($owner: String!) {
        onCreateUser(owner: $owner) {
          __typename
          id
          username
          firstName
          lastName
          email
          phone
          dob
          address
          state
          profileImg
          favorites
          createdAt
          updatedAt
          role
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateUserSubscription>>;

  OnUpdateUserListener: Observable<
    SubscriptionResponse<OnUpdateUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser($owner: String!) {
        onUpdateUser(owner: $owner) {
          __typename
          id
          username
          firstName
          lastName
          email
          phone
          dob
          address
          state
          profileImg
          favorites
          createdAt
          updatedAt
          role
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateUserSubscription>>;

  OnDeleteUserListener: Observable<
    SubscriptionResponse<OnDeleteUserSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser($owner: String!) {
        onDeleteUser(owner: $owner) {
          __typename
          id
          username
          firstName
          lastName
          email
          phone
          dob
          address
          state
          profileImg
          favorites
          createdAt
          updatedAt
          role
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteUserSubscription>>;
}
