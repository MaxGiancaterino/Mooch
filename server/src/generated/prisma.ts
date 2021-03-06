import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    groups: <T = Group[]>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payments: <T = Payment[]>(args: { where?: PaymentWhereInput, orderBy?: PaymentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    debts: <T = Debt[]>(args: { where?: DebtWhereInput, orderBy?: DebtOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    group: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    debt: <T = Debt | null>(args: { where: DebtWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    groupsConnection: <T = GroupConnection>(args: { where?: GroupWhereInput, orderBy?: GroupOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentsConnection: <T = PaymentConnection>(args: { where?: PaymentWhereInput, orderBy?: PaymentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    debtsConnection: <T = DebtConnection>(args: { where?: DebtWhereInput, orderBy?: DebtOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createGroup: <T = Group>(args: { data: GroupCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPayment: <T = Payment>(args: { data: PaymentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createDebt: <T = Debt>(args: { data: DebtCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateGroup: <T = Group | null>(args: { data: GroupUpdateInput, where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePayment: <T = Payment | null>(args: { data: PaymentUpdateInput, where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateDebt: <T = Debt | null>(args: { data: DebtUpdateInput, where: DebtWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteGroup: <T = Group | null>(args: { where: GroupWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePayment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteDebt: <T = Debt | null>(args: { where: DebtWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertGroup: <T = Group>(args: { where: GroupWhereUniqueInput, create: GroupCreateInput, update: GroupUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPayment: <T = Payment>(args: { where: PaymentWhereUniqueInput, create: PaymentCreateInput, update: PaymentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertDebt: <T = Debt>(args: { where: DebtWhereUniqueInput, create: DebtCreateInput, update: DebtUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyGroups: <T = BatchPayload>(args: { data: GroupUpdateInput, where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPayments: <T = BatchPayload>(args: { data: PaymentUpdateInput, where?: PaymentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyDebts: <T = BatchPayload>(args: { data: DebtUpdateInput, where?: DebtWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyGroups: <T = BatchPayload>(args: { where?: GroupWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPayments: <T = BatchPayload>(args: { where?: PaymentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyDebts: <T = BatchPayload>(args: { where?: DebtWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    group: <T = GroupSubscriptionPayload | null>(args: { where?: GroupSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    payment: <T = PaymentSubscriptionPayload | null>(args: { where?: PaymentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    debt: <T = DebtSubscriptionPayload | null>(args: { where?: DebtSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  Group: (where?: GroupWhereInput) => Promise<boolean>
  Payment: (where?: PaymentWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
  Debt: (where?: DebtWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateDebt {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregatePayment {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Debt implements Node {
  id: ID!
  amount: Float!
  debtor(where: UserWhereInput): User!
  creditor(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type DebtConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [DebtEdge]!
  aggregate: AggregateDebt!
}

input DebtCreateInput {
  amount: Float!
  debtor: UserCreateOneInput!
  creditor: UserCreateOneInput!
}

input DebtCreateManyInput {
  create: [DebtCreateInput!]
  connect: [DebtWhereUniqueInput!]
}

"""An edge in a connection."""
type DebtEdge {
  """The item at the end of the edge."""
  node: Debt!

  """A cursor for use in pagination."""
  cursor: String!
}

enum DebtOrderByInput {
  id_ASC
  id_DESC
  amount_ASC
  amount_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type DebtPreviousValues {
  id: ID!
  amount: Float!
}

type DebtSubscriptionPayload {
  mutation: MutationType!
  node: Debt
  updatedFields: [String!]
  previousValues: DebtPreviousValues
}

input DebtSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [DebtSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [DebtSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DebtSubscriptionWhereInput!]

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
  node: DebtWhereInput
}

input DebtUpdateDataInput {
  amount: Float
  debtor: UserUpdateOneInput
  creditor: UserUpdateOneInput
}

input DebtUpdateInput {
  amount: Float
  debtor: UserUpdateOneInput
  creditor: UserUpdateOneInput
}

input DebtUpdateManyInput {
  create: [DebtCreateInput!]
  connect: [DebtWhereUniqueInput!]
  disconnect: [DebtWhereUniqueInput!]
  delete: [DebtWhereUniqueInput!]
  update: [DebtUpdateWithWhereUniqueNestedInput!]
  upsert: [DebtUpsertWithWhereUniqueNestedInput!]
}

input DebtUpdateWithWhereUniqueNestedInput {
  where: DebtWhereUniqueInput!
  data: DebtUpdateDataInput!
}

input DebtUpsertWithWhereUniqueNestedInput {
  where: DebtWhereUniqueInput!
  update: DebtUpdateDataInput!
  create: DebtCreateInput!
}

input DebtWhereInput {
  """Logical AND on all given filters."""
  AND: [DebtWhereInput!]

  """Logical OR on all given filters."""
  OR: [DebtWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [DebtWhereInput!]
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
  amount: Float

  """All values that are not equal to given value."""
  amount_not: Float

  """All values that are contained in given list."""
  amount_in: [Float!]

  """All values that are not contained in given list."""
  amount_not_in: [Float!]

  """All values less than the given value."""
  amount_lt: Float

  """All values less than or equal the given value."""
  amount_lte: Float

  """All values greater than the given value."""
  amount_gt: Float

  """All values greater than or equal the given value."""
  amount_gte: Float
  debtor: UserWhereInput
  creditor: UserWhereInput
  _MagicalBackRelation_DebtToPayment_every: PaymentWhereInput
  _MagicalBackRelation_DebtToPayment_some: PaymentWhereInput
  _MagicalBackRelation_DebtToPayment_none: PaymentWhereInput
}

input DebtWhereUniqueInput {
  id: ID
}

type Group implements Node {
  id: ID!
  name: String!
  members(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment!]
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
  payments: PaymentCreateManyInput
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
  payments: PaymentUpdateManyInput
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
  payments_every: PaymentWhereInput
  payments_some: PaymentWhereInput
  payments_none: PaymentWhereInput
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
  createPayment(data: PaymentCreateInput!): Payment!
  createUser(data: UserCreateInput!): User!
  createDebt(data: DebtCreateInput!): Debt!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateDebt(data: DebtUpdateInput!, where: DebtWhereUniqueInput!): Debt
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deleteUser(where: UserWhereUniqueInput!): User
  deleteDebt(where: DebtWhereUniqueInput!): Debt
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertDebt(where: DebtWhereUniqueInput!, create: DebtCreateInput!, update: DebtUpdateInput!): Debt!
  updateManyGroups(data: GroupUpdateInput!, where: GroupWhereInput): BatchPayload!
  updateManyPayments(data: PaymentUpdateInput!, where: PaymentWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  updateManyDebts(data: DebtUpdateInput!, where: DebtWhereInput): BatchPayload!
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyDebts(where: DebtWhereInput): BatchPayload!
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

type Payment implements Node {
  id: ID!
  name: String!
  cost: Float!
  debts(where: DebtWhereInput, orderBy: DebtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Debt!]
  payer(where: UserWhereInput): User!
}

"""A connection to a list of items."""
type PaymentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentEdge]!
  aggregate: AggregatePayment!
}

input PaymentCreateInput {
  name: String!
  cost: Float!
  debts: DebtCreateManyInput
  payer: UserCreateOneInput!
}

input PaymentCreateManyInput {
  create: [PaymentCreateInput!]
  connect: [PaymentWhereUniqueInput!]
}

"""An edge in a connection."""
type PaymentEdge {
  """The item at the end of the edge."""
  node: Payment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  cost_ASC
  cost_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PaymentPreviousValues {
  id: ID!
  name: String!
  cost: Float!
}

type PaymentSubscriptionPayload {
  mutation: MutationType!
  node: Payment
  updatedFields: [String!]
  previousValues: PaymentPreviousValues
}

input PaymentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentSubscriptionWhereInput!]

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
  node: PaymentWhereInput
}

input PaymentUpdateDataInput {
  name: String
  cost: Float
  debts: DebtUpdateManyInput
  payer: UserUpdateOneInput
}

input PaymentUpdateInput {
  name: String
  cost: Float
  debts: DebtUpdateManyInput
  payer: UserUpdateOneInput
}

input PaymentUpdateManyInput {
  create: [PaymentCreateInput!]
  connect: [PaymentWhereUniqueInput!]
  disconnect: [PaymentWhereUniqueInput!]
  delete: [PaymentWhereUniqueInput!]
  update: [PaymentUpdateWithWhereUniqueNestedInput!]
  upsert: [PaymentUpsertWithWhereUniqueNestedInput!]
}

input PaymentUpdateWithWhereUniqueNestedInput {
  where: PaymentWhereUniqueInput!
  data: PaymentUpdateDataInput!
}

input PaymentUpsertWithWhereUniqueNestedInput {
  where: PaymentWhereUniqueInput!
  update: PaymentUpdateDataInput!
  create: PaymentCreateInput!
}

input PaymentWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentWhereInput!]
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
  cost: Float

  """All values that are not equal to given value."""
  cost_not: Float

  """All values that are contained in given list."""
  cost_in: [Float!]

  """All values that are not contained in given list."""
  cost_not_in: [Float!]

  """All values less than the given value."""
  cost_lt: Float

  """All values less than or equal the given value."""
  cost_lte: Float

  """All values greater than the given value."""
  cost_gt: Float

  """All values greater than or equal the given value."""
  cost_gte: Float
  debts_every: DebtWhereInput
  debts_some: DebtWhereInput
  debts_none: DebtWhereInput
  payer: UserWhereInput
  _MagicalBackRelation_GroupToPayment_every: GroupWhereInput
  _MagicalBackRelation_GroupToPayment_some: GroupWhereInput
  _MagicalBackRelation_GroupToPayment_none: GroupWhereInput
}

input PaymentWhereUniqueInput {
  id: ID
}

type Query {
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  debts(where: DebtWhereInput, orderBy: DebtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Debt]!
  group(where: GroupWhereUniqueInput!): Group
  payment(where: PaymentWhereUniqueInput!): Payment
  user(where: UserWhereUniqueInput!): User
  debt(where: DebtWhereUniqueInput!): Debt
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  debtsConnection(where: DebtWhereInput, orderBy: DebtOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DebtConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  debt(where: DebtSubscriptionWhereInput): DebtSubscriptionPayload
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

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
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

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  delete: Boolean
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
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
  _MagicalBackRelation_DebtToDebtor_every: DebtWhereInput
  _MagicalBackRelation_DebtToDebtor_some: DebtWhereInput
  _MagicalBackRelation_DebtToDebtor_none: DebtWhereInput
  _MagicalBackRelation_GroupToUser_every: GroupWhereInput
  _MagicalBackRelation_GroupToUser_some: GroupWhereInput
  _MagicalBackRelation_GroupToUser_none: GroupWhereInput
  _MagicalBackRelation_PaymentToUser_every: PaymentWhereInput
  _MagicalBackRelation_PaymentToUser_some: PaymentWhereInput
  _MagicalBackRelation_PaymentToUser_none: PaymentWhereInput
  _MagicalBackRelation_DebtToCreditor_every: DebtWhereInput
  _MagicalBackRelation_DebtToCreditor_some: DebtWhereInput
  _MagicalBackRelation_DebtToCreditor_none: DebtWhereInput
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

export type PaymentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'cost_ASC' |
  'cost_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type DebtOrderByInput =   'id_ASC' |
  'id_DESC' |
  'amount_ASC' |
  'amount_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface PaymentCreateManyInput {
  create?: PaymentCreateInput[] | PaymentCreateInput
  connect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
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
  payments_every?: PaymentWhereInput
  payments_some?: PaymentWhereInput
  payments_none?: PaymentWhereInput
}

export interface DebtCreateInput {
  amount: Float
  debtor: UserCreateOneInput
  creditor: UserCreateOneInput
}

export interface PaymentWhereInput {
  AND?: PaymentWhereInput[] | PaymentWhereInput
  OR?: PaymentWhereInput[] | PaymentWhereInput
  NOT?: PaymentWhereInput[] | PaymentWhereInput
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
  cost?: Float
  cost_not?: Float
  cost_in?: Float[] | Float
  cost_not_in?: Float[] | Float
  cost_lt?: Float
  cost_lte?: Float
  cost_gt?: Float
  cost_gte?: Float
  debts_every?: DebtWhereInput
  debts_some?: DebtWhereInput
  debts_none?: DebtWhereInput
  payer?: UserWhereInput
  _MagicalBackRelation_GroupToPayment_every?: GroupWhereInput
  _MagicalBackRelation_GroupToPayment_some?: GroupWhereInput
  _MagicalBackRelation_GroupToPayment_none?: GroupWhereInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  delete?: Boolean
  update?: UserUpdateDataInput
  upsert?: UserUpsertNestedInput
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput
}

export interface DebtUpdateDataInput {
  amount?: Float
  debtor?: UserUpdateOneInput
  creditor?: UserUpdateOneInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface DebtUpdateWithWhereUniqueNestedInput {
  where: DebtWhereUniqueInput
  data: DebtUpdateDataInput
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

export interface DebtUpdateManyInput {
  create?: DebtCreateInput[] | DebtCreateInput
  connect?: DebtWhereUniqueInput[] | DebtWhereUniqueInput
  disconnect?: DebtWhereUniqueInput[] | DebtWhereUniqueInput
  delete?: DebtWhereUniqueInput[] | DebtWhereUniqueInput
  update?: DebtUpdateWithWhereUniqueNestedInput[] | DebtUpdateWithWhereUniqueNestedInput
  upsert?: DebtUpsertWithWhereUniqueNestedInput[] | DebtUpsertWithWhereUniqueNestedInput
}

export interface PaymentSubscriptionWhereInput {
  AND?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  OR?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  NOT?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentWhereInput
}

export interface PaymentUpdateDataInput {
  name?: String
  cost?: Float
  debts?: DebtUpdateManyInput
  payer?: UserUpdateOneInput
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

export interface PaymentUpdateWithWhereUniqueNestedInput {
  where: PaymentWhereUniqueInput
  data: PaymentUpdateDataInput
}

export interface PaymentWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentUpdateManyInput {
  create?: PaymentCreateInput[] | PaymentCreateInput
  connect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  disconnect?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  delete?: PaymentWhereUniqueInput[] | PaymentWhereUniqueInput
  update?: PaymentUpdateWithWhereUniqueNestedInput[] | PaymentUpdateWithWhereUniqueNestedInput
  upsert?: PaymentUpsertWithWhereUniqueNestedInput[] | PaymentUpsertWithWhereUniqueNestedInput
}

export interface DebtWhereUniqueInput {
  id?: ID_Input
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
}

export interface GroupCreateInput {
  name: String
  members?: UserCreateManyInput
  payments?: PaymentCreateManyInput
}

export interface PaymentUpsertWithWhereUniqueNestedInput {
  where: PaymentWhereUniqueInput
  update: PaymentUpdateDataInput
  create: PaymentCreateInput
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
}

export interface DebtWhereInput {
  AND?: DebtWhereInput[] | DebtWhereInput
  OR?: DebtWhereInput[] | DebtWhereInput
  NOT?: DebtWhereInput[] | DebtWhereInput
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
  amount?: Float
  amount_not?: Float
  amount_in?: Float[] | Float
  amount_not_in?: Float[] | Float
  amount_lt?: Float
  amount_lte?: Float
  amount_gt?: Float
  amount_gte?: Float
  debtor?: UserWhereInput
  creditor?: UserWhereInput
  _MagicalBackRelation_DebtToPayment_every?: PaymentWhereInput
  _MagicalBackRelation_DebtToPayment_some?: PaymentWhereInput
  _MagicalBackRelation_DebtToPayment_none?: PaymentWhereInput
}

export interface UserUpdateDataInput {
  name?: String
  email?: String
  password?: String
}

export interface GroupWhereUniqueInput {
  id?: ID_Input
}

export interface PaymentCreateInput {
  name: String
  cost: Float
  debts?: DebtCreateManyInput
  payer: UserCreateOneInput
}

export interface DebtUpdateInput {
  amount?: Float
  debtor?: UserUpdateOneInput
  creditor?: UserUpdateOneInput
}

export interface DebtUpsertWithWhereUniqueNestedInput {
  where: DebtWhereUniqueInput
  update: DebtUpdateDataInput
  create: DebtCreateInput
}

export interface GroupUpdateInput {
  name?: String
  members?: UserUpdateManyInput
  payments?: PaymentUpdateManyInput
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface DebtCreateManyInput {
  create?: DebtCreateInput[] | DebtCreateInput
  connect?: DebtWhereUniqueInput[] | DebtWhereUniqueInput
}

export interface DebtSubscriptionWhereInput {
  AND?: DebtSubscriptionWhereInput[] | DebtSubscriptionWhereInput
  OR?: DebtSubscriptionWhereInput[] | DebtSubscriptionWhereInput
  NOT?: DebtSubscriptionWhereInput[] | DebtSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: DebtWhereInput
}

export interface PaymentUpdateInput {
  name?: String
  cost?: Float
  debts?: DebtUpdateManyInput
  payer?: UserUpdateOneInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
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
  _MagicalBackRelation_DebtToDebtor_every?: DebtWhereInput
  _MagicalBackRelation_DebtToDebtor_some?: DebtWhereInput
  _MagicalBackRelation_DebtToDebtor_none?: DebtWhereInput
  _MagicalBackRelation_GroupToUser_every?: GroupWhereInput
  _MagicalBackRelation_GroupToUser_some?: GroupWhereInput
  _MagicalBackRelation_GroupToUser_none?: GroupWhereInput
  _MagicalBackRelation_PaymentToUser_every?: PaymentWhereInput
  _MagicalBackRelation_PaymentToUser_some?: PaymentWhereInput
  _MagicalBackRelation_PaymentToUser_none?: PaymentWhereInput
  _MagicalBackRelation_DebtToCreditor_every?: DebtWhereInput
  _MagicalBackRelation_DebtToCreditor_some?: DebtWhereInput
  _MagicalBackRelation_DebtToCreditor_none?: DebtWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface DebtPreviousValues {
  id: ID_Output
  amount: Float
}

/*
 * A connection to a list of items.

 */
export interface GroupConnection {
  pageInfo: PageInfo
  edges: GroupEdge[]
  aggregate: AggregateGroup
}

export interface Group extends Node {
  id: ID_Output
  name: String
  members?: User[]
  payments?: Payment[]
}

export interface BatchPayload {
  count: Long
}

export interface AggregateDebt {
  count: Int
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

/*
 * An edge in a connection.

 */
export interface DebtEdge {
  node: Debt
  cursor: String
}

/*
 * A connection to a list of items.

 */
export interface DebtConnection {
  pageInfo: PageInfo
  edges: DebtEdge[]
  aggregate: AggregateDebt
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface Debt extends Node {
  id: ID_Output
  amount: Float
  debtor: User
  creditor: User
}

/*
 * An edge in a connection.

 */
export interface PaymentEdge {
  node: Payment
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface AggregateGroup {
  count: Int
}

export interface GroupSubscriptionPayload {
  mutation: MutationType
  node?: Group
  updatedFields?: String[]
  previousValues?: GroupPreviousValues
}

export interface DebtSubscriptionPayload {
  mutation: MutationType
  node?: Debt
  updatedFields?: String[]
  previousValues?: DebtPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface PaymentPreviousValues {
  id: ID_Output
  name: String
  cost: Float
}

export interface PaymentSubscriptionPayload {
  mutation: MutationType
  node?: Payment
  updatedFields?: String[]
  previousValues?: PaymentPreviousValues
}

export interface Payment extends Node {
  id: ID_Output
  name: String
  cost: Float
  debts?: Debt[]
  payer: User
}

export interface GroupPreviousValues {
  id: ID_Output
  name: String
}

export interface AggregatePayment {
  count: Int
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
export interface PaymentConnection {
  pageInfo: PageInfo
  edges: PaymentEdge[]
  aggregate: AggregatePayment
}

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](http://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string