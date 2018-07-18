import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    groups: <T = Group[]>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    group: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    groupsConnection: <T = GroupConnection>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createGroup: <T = Group>(args: { data: GroupCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGroup: <T = Group | null>(args: { data: GroupUpdateInput, where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGroup: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGroup: <T = Group>(args: { where: GroupWhereUniqueInput, create: GroupCreateInput, update: GroupUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGroups: <T = BatchPayload>(args: { data: GroupUpdateInput, where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGroups: <T = BatchPayload>(args: { where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    group: <T = GroupSubscriptionPayload | null>(args: { where?: GroupSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Group: (where?: GroupWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateGroup {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Group implements Node {
  id: ID!
  name: String!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type GroupConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  name: String!
  members: UserCreateManyInput
}

"""An edge in a connection."""
type GroupEdge {
  """The item at the end of the edge."""
  node: Group!

  """A cursor for use in pagination."""
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GroupPreviousValues {
  id: ID!
  name: String!
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
}

input GroupUpdateInput {
  name: String
  members: UserUpdateManyInput
}

input GroupWhereInput {
  """Logical AND on all given filters."""
  AND: [GroupWhereInput!]

  """Logical OR on all given filters."""
  OR: [GroupWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [GroupWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  members_every: UserWhereInput
  members_some: UserWhereInput
  members_none: UserWhereInput
}

input GroupWhereUniqueInput {
  id: ID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createGroup(data: GroupCreateInput!): Group!
  createUser(data: UserCreateInput!): User!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteUser(where: UserWhereUniqueInput!): User
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyGroups(data: GroupUpdateInput!, where: GroupWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  group(where: GroupWhereUniqueInput!): Group
  user(where: UserWhereUniqueInput!): User
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  name: String
  email: String
  password: String
}

input UserUpdateInput {
  name: String
  email: String
  password: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  _MagicalBackRelation_GroupToUser_every: GroupWhereInput
  _MagicalBackRelation_GroupToUser_some: GroupWhereInput
  _MagicalBackRelation_GroupToUser_none: GroupWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type GroupOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface GroupWhereUniqueInput {
  id?: ID_Input
}

export interface GroupCreateInput {
  name: String
  members?: UserCreateManyInput
}

export interface UserUpdateDataInput {
  name?: String
  email?: String
  password?: String
}

export interface GroupWhereInput {
  AND?: GroupWhereInput[] | GroupWhereInput
  OR?: GroupWhereInput[] | GroupWhereInput
  NOT?: GroupWhereInput[] | GroupWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  members_every?: UserWhereInput
  members_some?: UserWhereInput
  members_none?: UserWhereInput
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface GroupSubscriptionWhereInput {
  AND?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  OR?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  NOT?: GroupSubscriptionWhereInput[] | GroupSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: GroupWhereInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  _MagicalBackRelation_GroupToUser_every?: GroupWhereInput
  _MagicalBackRelation_GroupToUser_some?: GroupWhereInput
  _MagicalBackRelation_GroupToUser_none?: GroupWhereInput
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
}

export interface GroupUpdateInput {
  name?: String
  members?: UserUpdateManyInput
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
}

export interface GroupSubscriptionPayload {
  mutation: MutationType
  node?: Group
  updatedFields?: String[]
  previousValues?: GroupPreviousValues
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface GroupPreviousValues {
  id: ID_Output
  name: String
}

export interface Group extends Node {
  id: ID_Output
  name: String
  members?: User[]
}

export interface AggregateGroup {
  count: Int
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * An edge in a connection.

 */
export interface GroupEdge {
  node: Group
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface GroupConnection {
  pageInfo: PageInfo
  edges: GroupEdge[]
  aggregate: AggregateGroup
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number