
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Broker
 * 
 */
export type Broker = $Result.DefaultSelection<Prisma.$BrokerPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model LoanRequest
 * 
 */
export type LoanRequest = $Result.DefaultSelection<Prisma.$LoanRequestPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broker`: Exposes CRUD operations for the **Broker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brokers
    * const brokers = await prisma.broker.findMany()
    * ```
    */
  get broker(): Prisma.BrokerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loanRequest`: Exposes CRUD operations for the **LoanRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoanRequests
    * const loanRequests = await prisma.loanRequest.findMany()
    * ```
    */
  get loanRequest(): Prisma.LoanRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    Broker: 'Broker',
    Invitation: 'Invitation',
    LoanRequest: 'LoanRequest',
    Document: 'Document',
    Agent: 'Agent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "broker" | "invitation" | "loanRequest" | "document" | "agent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Broker: {
        payload: Prisma.$BrokerPayload<ExtArgs>
        fields: Prisma.BrokerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrokerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrokerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          findFirst: {
            args: Prisma.BrokerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrokerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          findMany: {
            args: Prisma.BrokerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>[]
          }
          create: {
            args: Prisma.BrokerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          createMany: {
            args: Prisma.BrokerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrokerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>[]
          }
          delete: {
            args: Prisma.BrokerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          update: {
            args: Prisma.BrokerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          deleteMany: {
            args: Prisma.BrokerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrokerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrokerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>[]
          }
          upsert: {
            args: Prisma.BrokerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          aggregate: {
            args: Prisma.BrokerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroker>
          }
          groupBy: {
            args: Prisma.BrokerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrokerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrokerCountArgs<ExtArgs>
            result: $Utils.Optional<BrokerCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      LoanRequest: {
        payload: Prisma.$LoanRequestPayload<ExtArgs>
        fields: Prisma.LoanRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoanRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoanRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          findFirst: {
            args: Prisma.LoanRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoanRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          findMany: {
            args: Prisma.LoanRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>[]
          }
          create: {
            args: Prisma.LoanRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          createMany: {
            args: Prisma.LoanRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoanRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>[]
          }
          delete: {
            args: Prisma.LoanRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          update: {
            args: Prisma.LoanRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          deleteMany: {
            args: Prisma.LoanRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoanRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoanRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>[]
          }
          upsert: {
            args: Prisma.LoanRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoanRequestPayload>
          }
          aggregate: {
            args: Prisma.LoanRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoanRequest>
          }
          groupBy: {
            args: Prisma.LoanRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoanRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoanRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LoanRequestCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    broker?: BrokerOmit
    invitation?: InvitationOmit
    loanRequest?: LoanRequestOmit
    document?: DocumentOmit
    agent?: AgentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    loanRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequests?: boolean | UserCountOutputTypeCountLoanRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLoanRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanRequestWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    invitations: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    invitations?: boolean | RoleCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Count Type BrokerCountOutputType
   */

  export type BrokerCountOutputType = {
    users: number
    roles: number
    customRoles: number
    invitations: number
  }

  export type BrokerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BrokerCountOutputTypeCountUsersArgs
    roles?: boolean | BrokerCountOutputTypeCountRolesArgs
    customRoles?: boolean | BrokerCountOutputTypeCountCustomRolesArgs
    invitations?: boolean | BrokerCountOutputTypeCountInvitationsArgs
  }

  // Custom InputTypes
  /**
   * BrokerCountOutputType without action
   */
  export type BrokerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrokerCountOutputType
     */
    select?: BrokerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrokerCountOutputType without action
   */
  export type BrokerCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BrokerCountOutputType without action
   */
  export type BrokerCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * BrokerCountOutputType without action
   */
  export type BrokerCountOutputTypeCountCustomRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * BrokerCountOutputType without action
   */
  export type BrokerCountOutputTypeCountInvitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Count Type LoanRequestCountOutputType
   */

  export type LoanRequestCountOutputType = {
    documents: number
  }

  export type LoanRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | LoanRequestCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * LoanRequestCountOutputType without action
   */
  export type LoanRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequestCountOutputType
     */
    select?: LoanRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoanRequestCountOutputType without action
   */
  export type LoanRequestCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    passwordHash: string | null
    roleId: string | null
    brokerId: string | null
    phoneNumber: string | null
    status: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    passwordHash: string | null
    roleId: string | null
    brokerId: string | null
    phoneNumber: string | null
    status: string | null
    isAdmin: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    passwordHash: number
    roleId: number
    brokerId: number
    phoneNumber: number
    status: number
    isAdmin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    passwordHash?: true
    roleId?: true
    brokerId?: true
    phoneNumber?: true
    status?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    passwordHash?: true
    roleId?: true
    brokerId?: true
    phoneNumber?: true
    status?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    passwordHash?: true
    roleId?: true
    brokerId?: true
    phoneNumber?: true
    status?: true
    isAdmin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    roleId: string
    brokerId: string | null
    phoneNumber: string | null
    status: string
    isAdmin: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    passwordHash?: boolean
    roleId?: boolean
    brokerId?: boolean
    phoneNumber?: boolean
    status?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | User$brokerArgs<ExtArgs>
    loanRequests?: boolean | User$loanRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    passwordHash?: boolean
    roleId?: boolean
    brokerId?: boolean
    phoneNumber?: boolean
    status?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | User$brokerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    passwordHash?: boolean
    roleId?: boolean
    brokerId?: boolean
    phoneNumber?: boolean
    status?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | User$brokerArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    passwordHash?: boolean
    roleId?: boolean
    brokerId?: boolean
    phoneNumber?: boolean
    status?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "firstName" | "lastName" | "passwordHash" | "roleId" | "brokerId" | "phoneNumber" | "status" | "isAdmin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | User$brokerArgs<ExtArgs>
    loanRequests?: boolean | User$loanRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | User$brokerArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | User$brokerArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      broker: Prisma.$BrokerPayload<ExtArgs> | null
      loanRequests: Prisma.$LoanRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      firstName: string
      lastName: string
      passwordHash: string
      roleId: string
      brokerId: string | null
      phoneNumber: string | null
      status: string
      isAdmin: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    broker<T extends User$brokerArgs<ExtArgs> = {}>(args?: Subset<T, User$brokerArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    loanRequests<T extends User$loanRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$loanRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly brokerId: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.broker
   */
  export type User$brokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    where?: BrokerWhereInput
  }

  /**
   * User.loanRequests
   */
  export type User$loanRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    where?: LoanRequestWhereInput
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    cursor?: LoanRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    brokerId: string | null
    scope: string | null
    isCustom: boolean | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    brokerId: string | null
    scope: string | null
    isCustom: boolean | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    brokerId: number
    scope: number
    isCustom: number
    description: number
    permissions: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    brokerId?: true
    scope?: true
    isCustom?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    brokerId?: true
    scope?: true
    isCustom?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    brokerId?: true
    scope?: true
    isCustom?: true
    description?: true
    permissions?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    brokerId: string | null
    scope: string
    isCustom: boolean
    description: string | null
    permissions: string[]
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brokerId?: boolean
    scope?: boolean
    isCustom?: boolean
    description?: boolean
    permissions?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    broker?: boolean | Role$brokerArgs<ExtArgs>
    invitations?: boolean | Role$invitationsArgs<ExtArgs>
    brokerCustom?: boolean | Role$brokerCustomArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brokerId?: boolean
    scope?: boolean
    isCustom?: boolean
    description?: boolean
    permissions?: boolean
    broker?: boolean | Role$brokerArgs<ExtArgs>
    brokerCustom?: boolean | Role$brokerCustomArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    brokerId?: boolean
    scope?: boolean
    isCustom?: boolean
    description?: boolean
    permissions?: boolean
    broker?: boolean | Role$brokerArgs<ExtArgs>
    brokerCustom?: boolean | Role$brokerCustomArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    brokerId?: boolean
    scope?: boolean
    isCustom?: boolean
    description?: boolean
    permissions?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "brokerId" | "scope" | "isCustom" | "description" | "permissions", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    broker?: boolean | Role$brokerArgs<ExtArgs>
    invitations?: boolean | Role$invitationsArgs<ExtArgs>
    brokerCustom?: boolean | Role$brokerCustomArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broker?: boolean | Role$brokerArgs<ExtArgs>
    brokerCustom?: boolean | Role$brokerCustomArgs<ExtArgs>
  }
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    broker?: boolean | Role$brokerArgs<ExtArgs>
    brokerCustom?: boolean | Role$brokerCustomArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      broker: Prisma.$BrokerPayload<ExtArgs> | null
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
      brokerCustom: Prisma.$BrokerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      brokerId: string | null
      scope: string
      isCustom: boolean
      description: string | null
      permissions: string[]
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    broker<T extends Role$brokerArgs<ExtArgs> = {}>(args?: Subset<T, Role$brokerArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invitations<T extends Role$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Role$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    brokerCustom<T extends Role$brokerCustomArgs<ExtArgs> = {}>(args?: Subset<T, Role$brokerCustomArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly brokerId: FieldRef<"Role", 'String'>
    readonly scope: FieldRef<"Role", 'String'>
    readonly isCustom: FieldRef<"Role", 'Boolean'>
    readonly description: FieldRef<"Role", 'String'>
    readonly permissions: FieldRef<"Role", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.broker
   */
  export type Role$brokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    where?: BrokerWhereInput
  }

  /**
   * Role.invitations
   */
  export type Role$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Role.brokerCustom
   */
  export type Role$brokerCustomArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    where?: BrokerWhereInput
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Broker
   */

  export type AggregateBroker = {
    _count: BrokerCountAggregateOutputType | null
    _min: BrokerMinAggregateOutputType | null
    _max: BrokerMaxAggregateOutputType | null
  }

  export type BrokerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrokerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrokerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrokerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrokerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrokerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrokerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Broker to aggregate.
     */
    where?: BrokerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brokers to fetch.
     */
    orderBy?: BrokerOrderByWithRelationInput | BrokerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrokerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brokers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brokers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brokers
    **/
    _count?: true | BrokerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrokerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrokerMaxAggregateInputType
  }

  export type GetBrokerAggregateType<T extends BrokerAggregateArgs> = {
        [P in keyof T & keyof AggregateBroker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroker[P]>
      : GetScalarType<T[P], AggregateBroker[P]>
  }




  export type BrokerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrokerWhereInput
    orderBy?: BrokerOrderByWithAggregationInput | BrokerOrderByWithAggregationInput[]
    by: BrokerScalarFieldEnum[] | BrokerScalarFieldEnum
    having?: BrokerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrokerCountAggregateInputType | true
    _min?: BrokerMinAggregateInputType
    _max?: BrokerMaxAggregateInputType
  }

  export type BrokerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    address: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    _count: BrokerCountAggregateOutputType | null
    _min: BrokerMinAggregateOutputType | null
    _max: BrokerMaxAggregateOutputType | null
  }

  type GetBrokerGroupByPayload<T extends BrokerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrokerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrokerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrokerGroupByOutputType[P]>
            : GetScalarType<T[P], BrokerGroupByOutputType[P]>
        }
      >
    >


  export type BrokerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Broker$usersArgs<ExtArgs>
    roles?: boolean | Broker$rolesArgs<ExtArgs>
    customRoles?: boolean | Broker$customRolesArgs<ExtArgs>
    invitations?: boolean | Broker$invitationsArgs<ExtArgs>
    _count?: boolean | BrokerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["broker"]>

  export type BrokerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["broker"]>

  export type BrokerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["broker"]>

  export type BrokerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrokerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "address" | "website" | "createdAt" | "updatedAt", ExtArgs["result"]["broker"]>
  export type BrokerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Broker$usersArgs<ExtArgs>
    roles?: boolean | Broker$rolesArgs<ExtArgs>
    customRoles?: boolean | Broker$customRolesArgs<ExtArgs>
    invitations?: boolean | Broker$invitationsArgs<ExtArgs>
    _count?: boolean | BrokerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrokerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrokerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrokerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Broker"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      roles: Prisma.$RolePayload<ExtArgs>[]
      customRoles: Prisma.$RolePayload<ExtArgs>[]
      invitations: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      address: string | null
      website: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["broker"]>
    composites: {}
  }

  type BrokerGetPayload<S extends boolean | null | undefined | BrokerDefaultArgs> = $Result.GetResult<Prisma.$BrokerPayload, S>

  type BrokerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrokerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrokerCountAggregateInputType | true
    }

  export interface BrokerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Broker'], meta: { name: 'Broker' } }
    /**
     * Find zero or one Broker that matches the filter.
     * @param {BrokerFindUniqueArgs} args - Arguments to find a Broker
     * @example
     * // Get one Broker
     * const broker = await prisma.broker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrokerFindUniqueArgs>(args: SelectSubset<T, BrokerFindUniqueArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Broker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrokerFindUniqueOrThrowArgs} args - Arguments to find a Broker
     * @example
     * // Get one Broker
     * const broker = await prisma.broker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrokerFindUniqueOrThrowArgs>(args: SelectSubset<T, BrokerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Broker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerFindFirstArgs} args - Arguments to find a Broker
     * @example
     * // Get one Broker
     * const broker = await prisma.broker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrokerFindFirstArgs>(args?: SelectSubset<T, BrokerFindFirstArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Broker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerFindFirstOrThrowArgs} args - Arguments to find a Broker
     * @example
     * // Get one Broker
     * const broker = await prisma.broker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrokerFindFirstOrThrowArgs>(args?: SelectSubset<T, BrokerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brokers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brokers
     * const brokers = await prisma.broker.findMany()
     * 
     * // Get first 10 Brokers
     * const brokers = await prisma.broker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brokerWithIdOnly = await prisma.broker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrokerFindManyArgs>(args?: SelectSubset<T, BrokerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Broker.
     * @param {BrokerCreateArgs} args - Arguments to create a Broker.
     * @example
     * // Create one Broker
     * const Broker = await prisma.broker.create({
     *   data: {
     *     // ... data to create a Broker
     *   }
     * })
     * 
     */
    create<T extends BrokerCreateArgs>(args: SelectSubset<T, BrokerCreateArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brokers.
     * @param {BrokerCreateManyArgs} args - Arguments to create many Brokers.
     * @example
     * // Create many Brokers
     * const broker = await prisma.broker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrokerCreateManyArgs>(args?: SelectSubset<T, BrokerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brokers and returns the data saved in the database.
     * @param {BrokerCreateManyAndReturnArgs} args - Arguments to create many Brokers.
     * @example
     * // Create many Brokers
     * const broker = await prisma.broker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brokers and only return the `id`
     * const brokerWithIdOnly = await prisma.broker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrokerCreateManyAndReturnArgs>(args?: SelectSubset<T, BrokerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Broker.
     * @param {BrokerDeleteArgs} args - Arguments to delete one Broker.
     * @example
     * // Delete one Broker
     * const Broker = await prisma.broker.delete({
     *   where: {
     *     // ... filter to delete one Broker
     *   }
     * })
     * 
     */
    delete<T extends BrokerDeleteArgs>(args: SelectSubset<T, BrokerDeleteArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Broker.
     * @param {BrokerUpdateArgs} args - Arguments to update one Broker.
     * @example
     * // Update one Broker
     * const broker = await prisma.broker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrokerUpdateArgs>(args: SelectSubset<T, BrokerUpdateArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brokers.
     * @param {BrokerDeleteManyArgs} args - Arguments to filter Brokers to delete.
     * @example
     * // Delete a few Brokers
     * const { count } = await prisma.broker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrokerDeleteManyArgs>(args?: SelectSubset<T, BrokerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brokers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brokers
     * const broker = await prisma.broker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrokerUpdateManyArgs>(args: SelectSubset<T, BrokerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brokers and returns the data updated in the database.
     * @param {BrokerUpdateManyAndReturnArgs} args - Arguments to update many Brokers.
     * @example
     * // Update many Brokers
     * const broker = await prisma.broker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brokers and only return the `id`
     * const brokerWithIdOnly = await prisma.broker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrokerUpdateManyAndReturnArgs>(args: SelectSubset<T, BrokerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Broker.
     * @param {BrokerUpsertArgs} args - Arguments to update or create a Broker.
     * @example
     * // Update or create a Broker
     * const broker = await prisma.broker.upsert({
     *   create: {
     *     // ... data to create a Broker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Broker we want to update
     *   }
     * })
     */
    upsert<T extends BrokerUpsertArgs>(args: SelectSubset<T, BrokerUpsertArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brokers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerCountArgs} args - Arguments to filter Brokers to count.
     * @example
     * // Count the number of Brokers
     * const count = await prisma.broker.count({
     *   where: {
     *     // ... the filter for the Brokers we want to count
     *   }
     * })
    **/
    count<T extends BrokerCountArgs>(
      args?: Subset<T, BrokerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrokerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Broker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrokerAggregateArgs>(args: Subset<T, BrokerAggregateArgs>): Prisma.PrismaPromise<GetBrokerAggregateType<T>>

    /**
     * Group by Broker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrokerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrokerGroupByArgs['orderBy'] }
        : { orderBy?: BrokerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrokerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrokerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Broker model
   */
  readonly fields: BrokerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Broker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrokerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Broker$usersArgs<ExtArgs> = {}>(args?: Subset<T, Broker$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends Broker$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Broker$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customRoles<T extends Broker$customRolesArgs<ExtArgs> = {}>(args?: Subset<T, Broker$customRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitations<T extends Broker$invitationsArgs<ExtArgs> = {}>(args?: Subset<T, Broker$invitationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Broker model
   */
  interface BrokerFieldRefs {
    readonly id: FieldRef<"Broker", 'String'>
    readonly name: FieldRef<"Broker", 'String'>
    readonly email: FieldRef<"Broker", 'String'>
    readonly phone: FieldRef<"Broker", 'String'>
    readonly address: FieldRef<"Broker", 'String'>
    readonly website: FieldRef<"Broker", 'String'>
    readonly createdAt: FieldRef<"Broker", 'DateTime'>
    readonly updatedAt: FieldRef<"Broker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Broker findUnique
   */
  export type BrokerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * Filter, which Broker to fetch.
     */
    where: BrokerWhereUniqueInput
  }

  /**
   * Broker findUniqueOrThrow
   */
  export type BrokerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * Filter, which Broker to fetch.
     */
    where: BrokerWhereUniqueInput
  }

  /**
   * Broker findFirst
   */
  export type BrokerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * Filter, which Broker to fetch.
     */
    where?: BrokerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brokers to fetch.
     */
    orderBy?: BrokerOrderByWithRelationInput | BrokerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brokers.
     */
    cursor?: BrokerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brokers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brokers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brokers.
     */
    distinct?: BrokerScalarFieldEnum | BrokerScalarFieldEnum[]
  }

  /**
   * Broker findFirstOrThrow
   */
  export type BrokerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * Filter, which Broker to fetch.
     */
    where?: BrokerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brokers to fetch.
     */
    orderBy?: BrokerOrderByWithRelationInput | BrokerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brokers.
     */
    cursor?: BrokerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brokers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brokers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brokers.
     */
    distinct?: BrokerScalarFieldEnum | BrokerScalarFieldEnum[]
  }

  /**
   * Broker findMany
   */
  export type BrokerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * Filter, which Brokers to fetch.
     */
    where?: BrokerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brokers to fetch.
     */
    orderBy?: BrokerOrderByWithRelationInput | BrokerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brokers.
     */
    cursor?: BrokerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brokers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brokers.
     */
    skip?: number
    distinct?: BrokerScalarFieldEnum | BrokerScalarFieldEnum[]
  }

  /**
   * Broker create
   */
  export type BrokerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * The data needed to create a Broker.
     */
    data: XOR<BrokerCreateInput, BrokerUncheckedCreateInput>
  }

  /**
   * Broker createMany
   */
  export type BrokerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brokers.
     */
    data: BrokerCreateManyInput | BrokerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Broker createManyAndReturn
   */
  export type BrokerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * The data used to create many Brokers.
     */
    data: BrokerCreateManyInput | BrokerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Broker update
   */
  export type BrokerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * The data needed to update a Broker.
     */
    data: XOR<BrokerUpdateInput, BrokerUncheckedUpdateInput>
    /**
     * Choose, which Broker to update.
     */
    where: BrokerWhereUniqueInput
  }

  /**
   * Broker updateMany
   */
  export type BrokerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brokers.
     */
    data: XOR<BrokerUpdateManyMutationInput, BrokerUncheckedUpdateManyInput>
    /**
     * Filter which Brokers to update
     */
    where?: BrokerWhereInput
    /**
     * Limit how many Brokers to update.
     */
    limit?: number
  }

  /**
   * Broker updateManyAndReturn
   */
  export type BrokerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * The data used to update Brokers.
     */
    data: XOR<BrokerUpdateManyMutationInput, BrokerUncheckedUpdateManyInput>
    /**
     * Filter which Brokers to update
     */
    where?: BrokerWhereInput
    /**
     * Limit how many Brokers to update.
     */
    limit?: number
  }

  /**
   * Broker upsert
   */
  export type BrokerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * The filter to search for the Broker to update in case it exists.
     */
    where: BrokerWhereUniqueInput
    /**
     * In case the Broker found by the `where` argument doesn't exist, create a new Broker with this data.
     */
    create: XOR<BrokerCreateInput, BrokerUncheckedCreateInput>
    /**
     * In case the Broker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrokerUpdateInput, BrokerUncheckedUpdateInput>
  }

  /**
   * Broker delete
   */
  export type BrokerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    /**
     * Filter which Broker to delete.
     */
    where: BrokerWhereUniqueInput
  }

  /**
   * Broker deleteMany
   */
  export type BrokerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brokers to delete
     */
    where?: BrokerWhereInput
    /**
     * Limit how many Brokers to delete.
     */
    limit?: number
  }

  /**
   * Broker.users
   */
  export type Broker$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Broker.roles
   */
  export type Broker$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Broker.customRoles
   */
  export type Broker$customRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Broker.invitations
   */
  export type Broker$invitationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Broker without action
   */
  export type BrokerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    email: string | null
    roleId: string | null
    brokerId: string | null
    token: string | null
    message: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    email: string | null
    roleId: string | null
    brokerId: string | null
    token: string | null
    message: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    email: number
    roleId: number
    brokerId: number
    token: number
    message: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type InvitationMinAggregateInputType = {
    id?: true
    email?: true
    roleId?: true
    brokerId?: true
    token?: true
    message?: true
    expiresAt?: true
    createdAt?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    email?: true
    roleId?: true
    brokerId?: true
    token?: true
    message?: true
    expiresAt?: true
    createdAt?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    email?: true
    roleId?: true
    brokerId?: true
    token?: true
    message?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    email: string
    roleId: string
    brokerId: string | null
    token: string
    message: string | null
    expiresAt: Date
    createdAt: Date
    _count: InvitationCountAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    roleId?: boolean
    brokerId?: boolean
    token?: boolean
    message?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | Invitation$brokerArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    roleId?: boolean
    brokerId?: boolean
    token?: boolean
    message?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | Invitation$brokerArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    roleId?: boolean
    brokerId?: boolean
    token?: boolean
    message?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | Invitation$brokerArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    email?: boolean
    roleId?: boolean
    brokerId?: boolean
    token?: boolean
    message?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "roleId" | "brokerId" | "token" | "message" | "expiresAt" | "createdAt", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | Invitation$brokerArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | Invitation$brokerArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    broker?: boolean | Invitation$brokerArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      broker: Prisma.$BrokerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      roleId: string
      brokerId: string | null
      token: string
      message: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    broker<T extends Invitation$brokerArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$brokerArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly email: FieldRef<"Invitation", 'String'>
    readonly roleId: FieldRef<"Invitation", 'String'>
    readonly brokerId: FieldRef<"Invitation", 'String'>
    readonly token: FieldRef<"Invitation", 'String'>
    readonly message: FieldRef<"Invitation", 'String'>
    readonly expiresAt: FieldRef<"Invitation", 'DateTime'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation.broker
   */
  export type Invitation$brokerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrokerInclude<ExtArgs> | null
    where?: BrokerWhereInput
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model LoanRequest
   */

  export type AggregateLoanRequest = {
    _count: LoanRequestCountAggregateOutputType | null
    _min: LoanRequestMinAggregateOutputType | null
    _max: LoanRequestMaxAggregateOutputType | null
  }

  export type LoanRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LoanRequestCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LoanRequestMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LoanRequestCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LoanRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanRequest to aggregate.
     */
    where?: LoanRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanRequests to fetch.
     */
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoanRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoanRequests
    **/
    _count?: true | LoanRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoanRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoanRequestMaxAggregateInputType
  }

  export type GetLoanRequestAggregateType<T extends LoanRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLoanRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoanRequest[P]>
      : GetScalarType<T[P], AggregateLoanRequest[P]>
  }




  export type LoanRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoanRequestWhereInput
    orderBy?: LoanRequestOrderByWithAggregationInput | LoanRequestOrderByWithAggregationInput[]
    by: LoanRequestScalarFieldEnum[] | LoanRequestScalarFieldEnum
    having?: LoanRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoanRequestCountAggregateInputType | true
    _min?: LoanRequestMinAggregateInputType
    _max?: LoanRequestMaxAggregateInputType
  }

  export type LoanRequestGroupByOutputType = {
    id: string
    userId: string
    title: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: LoanRequestCountAggregateOutputType | null
    _min: LoanRequestMinAggregateOutputType | null
    _max: LoanRequestMaxAggregateOutputType | null
  }

  type GetLoanRequestGroupByPayload<T extends LoanRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoanRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoanRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoanRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LoanRequestGroupByOutputType[P]>
        }
      >
    >


  export type LoanRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | LoanRequest$documentsArgs<ExtArgs>
    _count?: boolean | LoanRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanRequest"]>

  export type LoanRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanRequest"]>

  export type LoanRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loanRequest"]>

  export type LoanRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LoanRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["loanRequest"]>
  export type LoanRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    documents?: boolean | LoanRequest$documentsArgs<ExtArgs>
    _count?: boolean | LoanRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoanRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LoanRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LoanRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoanRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      documents: Prisma.$DocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["loanRequest"]>
    composites: {}
  }

  type LoanRequestGetPayload<S extends boolean | null | undefined | LoanRequestDefaultArgs> = $Result.GetResult<Prisma.$LoanRequestPayload, S>

  type LoanRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoanRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoanRequestCountAggregateInputType | true
    }

  export interface LoanRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoanRequest'], meta: { name: 'LoanRequest' } }
    /**
     * Find zero or one LoanRequest that matches the filter.
     * @param {LoanRequestFindUniqueArgs} args - Arguments to find a LoanRequest
     * @example
     * // Get one LoanRequest
     * const loanRequest = await prisma.loanRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoanRequestFindUniqueArgs>(args: SelectSubset<T, LoanRequestFindUniqueArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoanRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoanRequestFindUniqueOrThrowArgs} args - Arguments to find a LoanRequest
     * @example
     * // Get one LoanRequest
     * const loanRequest = await prisma.loanRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoanRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LoanRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestFindFirstArgs} args - Arguments to find a LoanRequest
     * @example
     * // Get one LoanRequest
     * const loanRequest = await prisma.loanRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoanRequestFindFirstArgs>(args?: SelectSubset<T, LoanRequestFindFirstArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoanRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestFindFirstOrThrowArgs} args - Arguments to find a LoanRequest
     * @example
     * // Get one LoanRequest
     * const loanRequest = await prisma.loanRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoanRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LoanRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoanRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoanRequests
     * const loanRequests = await prisma.loanRequest.findMany()
     * 
     * // Get first 10 LoanRequests
     * const loanRequests = await prisma.loanRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loanRequestWithIdOnly = await prisma.loanRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoanRequestFindManyArgs>(args?: SelectSubset<T, LoanRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoanRequest.
     * @param {LoanRequestCreateArgs} args - Arguments to create a LoanRequest.
     * @example
     * // Create one LoanRequest
     * const LoanRequest = await prisma.loanRequest.create({
     *   data: {
     *     // ... data to create a LoanRequest
     *   }
     * })
     * 
     */
    create<T extends LoanRequestCreateArgs>(args: SelectSubset<T, LoanRequestCreateArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoanRequests.
     * @param {LoanRequestCreateManyArgs} args - Arguments to create many LoanRequests.
     * @example
     * // Create many LoanRequests
     * const loanRequest = await prisma.loanRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoanRequestCreateManyArgs>(args?: SelectSubset<T, LoanRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoanRequests and returns the data saved in the database.
     * @param {LoanRequestCreateManyAndReturnArgs} args - Arguments to create many LoanRequests.
     * @example
     * // Create many LoanRequests
     * const loanRequest = await prisma.loanRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoanRequests and only return the `id`
     * const loanRequestWithIdOnly = await prisma.loanRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoanRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, LoanRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoanRequest.
     * @param {LoanRequestDeleteArgs} args - Arguments to delete one LoanRequest.
     * @example
     * // Delete one LoanRequest
     * const LoanRequest = await prisma.loanRequest.delete({
     *   where: {
     *     // ... filter to delete one LoanRequest
     *   }
     * })
     * 
     */
    delete<T extends LoanRequestDeleteArgs>(args: SelectSubset<T, LoanRequestDeleteArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoanRequest.
     * @param {LoanRequestUpdateArgs} args - Arguments to update one LoanRequest.
     * @example
     * // Update one LoanRequest
     * const loanRequest = await prisma.loanRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoanRequestUpdateArgs>(args: SelectSubset<T, LoanRequestUpdateArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoanRequests.
     * @param {LoanRequestDeleteManyArgs} args - Arguments to filter LoanRequests to delete.
     * @example
     * // Delete a few LoanRequests
     * const { count } = await prisma.loanRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoanRequestDeleteManyArgs>(args?: SelectSubset<T, LoanRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoanRequests
     * const loanRequest = await prisma.loanRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoanRequestUpdateManyArgs>(args: SelectSubset<T, LoanRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoanRequests and returns the data updated in the database.
     * @param {LoanRequestUpdateManyAndReturnArgs} args - Arguments to update many LoanRequests.
     * @example
     * // Update many LoanRequests
     * const loanRequest = await prisma.loanRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoanRequests and only return the `id`
     * const loanRequestWithIdOnly = await prisma.loanRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoanRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, LoanRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoanRequest.
     * @param {LoanRequestUpsertArgs} args - Arguments to update or create a LoanRequest.
     * @example
     * // Update or create a LoanRequest
     * const loanRequest = await prisma.loanRequest.upsert({
     *   create: {
     *     // ... data to create a LoanRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoanRequest we want to update
     *   }
     * })
     */
    upsert<T extends LoanRequestUpsertArgs>(args: SelectSubset<T, LoanRequestUpsertArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoanRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestCountArgs} args - Arguments to filter LoanRequests to count.
     * @example
     * // Count the number of LoanRequests
     * const count = await prisma.loanRequest.count({
     *   where: {
     *     // ... the filter for the LoanRequests we want to count
     *   }
     * })
    **/
    count<T extends LoanRequestCountArgs>(
      args?: Subset<T, LoanRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoanRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoanRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoanRequestAggregateArgs>(args: Subset<T, LoanRequestAggregateArgs>): Prisma.PrismaPromise<GetLoanRequestAggregateType<T>>

    /**
     * Group by LoanRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoanRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoanRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoanRequestGroupByArgs['orderBy'] }
        : { orderBy?: LoanRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoanRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoanRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoanRequest model
   */
  readonly fields: LoanRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoanRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoanRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends LoanRequest$documentsArgs<ExtArgs> = {}>(args?: Subset<T, LoanRequest$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoanRequest model
   */
  interface LoanRequestFieldRefs {
    readonly id: FieldRef<"LoanRequest", 'String'>
    readonly userId: FieldRef<"LoanRequest", 'String'>
    readonly title: FieldRef<"LoanRequest", 'String'>
    readonly status: FieldRef<"LoanRequest", 'String'>
    readonly createdAt: FieldRef<"LoanRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"LoanRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LoanRequest findUnique
   */
  export type LoanRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequest to fetch.
     */
    where: LoanRequestWhereUniqueInput
  }

  /**
   * LoanRequest findUniqueOrThrow
   */
  export type LoanRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequest to fetch.
     */
    where: LoanRequestWhereUniqueInput
  }

  /**
   * LoanRequest findFirst
   */
  export type LoanRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequest to fetch.
     */
    where?: LoanRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanRequests to fetch.
     */
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanRequests.
     */
    cursor?: LoanRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanRequests.
     */
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * LoanRequest findFirstOrThrow
   */
  export type LoanRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequest to fetch.
     */
    where?: LoanRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanRequests to fetch.
     */
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoanRequests.
     */
    cursor?: LoanRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoanRequests.
     */
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * LoanRequest findMany
   */
  export type LoanRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter, which LoanRequests to fetch.
     */
    where?: LoanRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoanRequests to fetch.
     */
    orderBy?: LoanRequestOrderByWithRelationInput | LoanRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoanRequests.
     */
    cursor?: LoanRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoanRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoanRequests.
     */
    skip?: number
    distinct?: LoanRequestScalarFieldEnum | LoanRequestScalarFieldEnum[]
  }

  /**
   * LoanRequest create
   */
  export type LoanRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a LoanRequest.
     */
    data: XOR<LoanRequestCreateInput, LoanRequestUncheckedCreateInput>
  }

  /**
   * LoanRequest createMany
   */
  export type LoanRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoanRequests.
     */
    data: LoanRequestCreateManyInput | LoanRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoanRequest createManyAndReturn
   */
  export type LoanRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * The data used to create many LoanRequests.
     */
    data: LoanRequestCreateManyInput | LoanRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanRequest update
   */
  export type LoanRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a LoanRequest.
     */
    data: XOR<LoanRequestUpdateInput, LoanRequestUncheckedUpdateInput>
    /**
     * Choose, which LoanRequest to update.
     */
    where: LoanRequestWhereUniqueInput
  }

  /**
   * LoanRequest updateMany
   */
  export type LoanRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoanRequests.
     */
    data: XOR<LoanRequestUpdateManyMutationInput, LoanRequestUncheckedUpdateManyInput>
    /**
     * Filter which LoanRequests to update
     */
    where?: LoanRequestWhereInput
    /**
     * Limit how many LoanRequests to update.
     */
    limit?: number
  }

  /**
   * LoanRequest updateManyAndReturn
   */
  export type LoanRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * The data used to update LoanRequests.
     */
    data: XOR<LoanRequestUpdateManyMutationInput, LoanRequestUncheckedUpdateManyInput>
    /**
     * Filter which LoanRequests to update
     */
    where?: LoanRequestWhereInput
    /**
     * Limit how many LoanRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoanRequest upsert
   */
  export type LoanRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the LoanRequest to update in case it exists.
     */
    where: LoanRequestWhereUniqueInput
    /**
     * In case the LoanRequest found by the `where` argument doesn't exist, create a new LoanRequest with this data.
     */
    create: XOR<LoanRequestCreateInput, LoanRequestUncheckedCreateInput>
    /**
     * In case the LoanRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoanRequestUpdateInput, LoanRequestUncheckedUpdateInput>
  }

  /**
   * LoanRequest delete
   */
  export type LoanRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
    /**
     * Filter which LoanRequest to delete.
     */
    where: LoanRequestWhereUniqueInput
  }

  /**
   * LoanRequest deleteMany
   */
  export type LoanRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoanRequests to delete
     */
    where?: LoanRequestWhereInput
    /**
     * Limit how many LoanRequests to delete.
     */
    limit?: number
  }

  /**
   * LoanRequest.documents
   */
  export type LoanRequest$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    cursor?: DocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * LoanRequest without action
   */
  export type LoanRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoanRequest
     */
    select?: LoanRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoanRequest
     */
    omit?: LoanRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoanRequestInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentMinAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    status: string | null
    loanRequestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    category: string | null
    status: string | null
    loanRequestId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    name: number
    category: number
    status: number
    versions: number
    comments: number
    loanRequestId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DocumentMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    loanRequestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    loanRequestId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    status?: true
    versions?: true
    comments?: true
    loanRequestId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: string
    name: string
    category: string
    status: string
    versions: JsonValue[]
    comments: JsonValue[]
    loanRequestId: string
    createdAt: Date
    updatedAt: Date
    _count: DocumentCountAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    versions?: boolean
    comments?: boolean
    loanRequestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    versions?: boolean
    comments?: boolean
    loanRequestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    versions?: boolean
    comments?: boolean
    loanRequestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    status?: boolean
    versions?: boolean
    comments?: boolean
    loanRequestId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "status" | "versions" | "comments" | "loanRequestId" | "createdAt" | "updatedAt", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    loanRequest?: boolean | LoanRequestDefaultArgs<ExtArgs>
  }

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      loanRequest: Prisma.$LoanRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      category: string
      status: string
      versions: Prisma.JsonValue[]
      comments: Prisma.JsonValue[]
      loanRequestId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    loanRequest<T extends LoanRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LoanRequestDefaultArgs<ExtArgs>>): Prisma__LoanRequestClient<$Result.GetResult<Prisma.$LoanRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'String'>
    readonly name: FieldRef<"Document", 'String'>
    readonly category: FieldRef<"Document", 'String'>
    readonly status: FieldRef<"Document", 'String'>
    readonly versions: FieldRef<"Document", 'Json[]'>
    readonly comments: FieldRef<"Document", 'Json[]'>
    readonly loanRequestId: FieldRef<"Document", 'String'>
    readonly createdAt: FieldRef<"Document", 'DateTime'>
    readonly updatedAt: FieldRef<"Document", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    brokerId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    invitationSentAt: Date | null
    firstName: string | null
    lastName: string | null
  }

  export type AgentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    brokerId: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    invitationSentAt: Date | null
    firstName: string | null
    lastName: string | null
  }

  export type AgentCountAggregateOutputType = {
    id: number
    userId: number
    brokerId: number
    status: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    invitationSentAt: number
    firstName: number
    lastName: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    id?: true
    userId?: true
    brokerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    invitationSentAt?: true
    firstName?: true
    lastName?: true
  }

  export type AgentMaxAggregateInputType = {
    id?: true
    userId?: true
    brokerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    invitationSentAt?: true
    firstName?: true
    lastName?: true
  }

  export type AgentCountAggregateInputType = {
    id?: true
    userId?: true
    brokerId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    invitationSentAt?: true
    firstName?: true
    lastName?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    id: string
    userId: string | null
    brokerId: string
    status: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string
    invitationSentAt: Date | null
    firstName: string | null
    lastName: string | null
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brokerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    invitationSentAt?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brokerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    invitationSentAt?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    brokerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    invitationSentAt?: boolean
    firstName?: boolean
    lastName?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    id?: boolean
    userId?: boolean
    brokerId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    invitationSentAt?: boolean
    firstName?: boolean
    lastName?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "brokerId" | "status" | "createdAt" | "updatedAt" | "email" | "name" | "invitationSentAt" | "firstName" | "lastName", ExtArgs["result"]["agent"]>

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      brokerId: string
      status: string
      createdAt: Date
      updatedAt: Date
      email: string
      name: string
      invitationSentAt: Date | null
      firstName: string | null
      lastName: string | null
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentWithIdOnly = await prisma.agent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `id`
     * const agentWithIdOnly = await prisma.agent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly id: FieldRef<"Agent", 'String'>
    readonly userId: FieldRef<"Agent", 'String'>
    readonly brokerId: FieldRef<"Agent", 'String'>
    readonly status: FieldRef<"Agent", 'String'>
    readonly createdAt: FieldRef<"Agent", 'DateTime'>
    readonly updatedAt: FieldRef<"Agent", 'DateTime'>
    readonly email: FieldRef<"Agent", 'String'>
    readonly name: FieldRef<"Agent", 'String'>
    readonly invitationSentAt: FieldRef<"Agent", 'DateTime'>
    readonly firstName: FieldRef<"Agent", 'String'>
    readonly lastName: FieldRef<"Agent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    passwordHash: 'passwordHash',
    roleId: 'roleId',
    brokerId: 'brokerId',
    phoneNumber: 'phoneNumber',
    status: 'status',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    brokerId: 'brokerId',
    scope: 'scope',
    isCustom: 'isCustom',
    description: 'description',
    permissions: 'permissions'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const BrokerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrokerScalarFieldEnum = (typeof BrokerScalarFieldEnum)[keyof typeof BrokerScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    email: 'email',
    roleId: 'roleId',
    brokerId: 'brokerId',
    token: 'token',
    message: 'message',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const LoanRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LoanRequestScalarFieldEnum = (typeof LoanRequestScalarFieldEnum)[keyof typeof LoanRequestScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    status: 'status',
    versions: 'versions',
    comments: 'comments',
    loanRequestId: 'loanRequestId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    brokerId: 'brokerId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name',
    invitationSentAt: 'invitationSentAt',
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    brokerId?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    broker?: XOR<BrokerNullableScalarRelationFilter, BrokerWhereInput> | null
    loanRequests?: LoanRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    broker?: BrokerOrderByWithRelationInput
    loanRequests?: LoanRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    brokerId?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    broker?: XOR<BrokerNullableScalarRelationFilter, BrokerWhereInput> | null
    loanRequests?: LoanRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    status?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    roleId?: StringWithAggregatesFilter<"User"> | string
    brokerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: StringWithAggregatesFilter<"User"> | string
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    brokerId?: StringNullableFilter<"Role"> | string | null
    scope?: StringFilter<"Role"> | string
    isCustom?: BoolFilter<"Role"> | boolean
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: StringNullableListFilter<"Role">
    users?: UserListRelationFilter
    broker?: XOR<BrokerNullableScalarRelationFilter, BrokerWhereInput> | null
    invitations?: InvitationListRelationFilter
    brokerCustom?: XOR<BrokerNullableScalarRelationFilter, BrokerWhereInput> | null
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    brokerId?: SortOrderInput | SortOrder
    scope?: SortOrder
    isCustom?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrder
    users?: UserOrderByRelationAggregateInput
    broker?: BrokerOrderByWithRelationInput
    invitations?: InvitationOrderByRelationAggregateInput
    brokerCustom?: BrokerOrderByWithRelationInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    brokerId?: StringNullableFilter<"Role"> | string | null
    scope?: StringFilter<"Role"> | string
    isCustom?: BoolFilter<"Role"> | boolean
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: StringNullableListFilter<"Role">
    users?: UserListRelationFilter
    broker?: XOR<BrokerNullableScalarRelationFilter, BrokerWhereInput> | null
    invitations?: InvitationListRelationFilter
    brokerCustom?: XOR<BrokerNullableScalarRelationFilter, BrokerWhereInput> | null
  }, "id">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    brokerId?: SortOrderInput | SortOrder
    scope?: SortOrder
    isCustom?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    brokerId?: StringNullableWithAggregatesFilter<"Role"> | string | null
    scope?: StringWithAggregatesFilter<"Role"> | string
    isCustom?: BoolWithAggregatesFilter<"Role"> | boolean
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    permissions?: StringNullableListFilter<"Role">
  }

  export type BrokerWhereInput = {
    AND?: BrokerWhereInput | BrokerWhereInput[]
    OR?: BrokerWhereInput[]
    NOT?: BrokerWhereInput | BrokerWhereInput[]
    id?: StringFilter<"Broker"> | string
    name?: StringFilter<"Broker"> | string
    email?: StringNullableFilter<"Broker"> | string | null
    phone?: StringNullableFilter<"Broker"> | string | null
    address?: StringNullableFilter<"Broker"> | string | null
    website?: StringNullableFilter<"Broker"> | string | null
    createdAt?: DateTimeFilter<"Broker"> | Date | string
    updatedAt?: DateTimeFilter<"Broker"> | Date | string
    users?: UserListRelationFilter
    roles?: RoleListRelationFilter
    customRoles?: RoleListRelationFilter
    invitations?: InvitationListRelationFilter
  }

  export type BrokerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    roles?: RoleOrderByRelationAggregateInput
    customRoles?: RoleOrderByRelationAggregateInput
    invitations?: InvitationOrderByRelationAggregateInput
  }

  export type BrokerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrokerWhereInput | BrokerWhereInput[]
    OR?: BrokerWhereInput[]
    NOT?: BrokerWhereInput | BrokerWhereInput[]
    name?: StringFilter<"Broker"> | string
    email?: StringNullableFilter<"Broker"> | string | null
    phone?: StringNullableFilter<"Broker"> | string | null
    address?: StringNullableFilter<"Broker"> | string | null
    website?: StringNullableFilter<"Broker"> | string | null
    createdAt?: DateTimeFilter<"Broker"> | Date | string
    updatedAt?: DateTimeFilter<"Broker"> | Date | string
    users?: UserListRelationFilter
    roles?: RoleListRelationFilter
    customRoles?: RoleListRelationFilter
    invitations?: InvitationListRelationFilter
  }, "id">

  export type BrokerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrokerCountOrderByAggregateInput
    _max?: BrokerMaxOrderByAggregateInput
    _min?: BrokerMinOrderByAggregateInput
  }

  export type BrokerScalarWhereWithAggregatesInput = {
    AND?: BrokerScalarWhereWithAggregatesInput | BrokerScalarWhereWithAggregatesInput[]
    OR?: BrokerScalarWhereWithAggregatesInput[]
    NOT?: BrokerScalarWhereWithAggregatesInput | BrokerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Broker"> | string
    name?: StringWithAggregatesFilter<"Broker"> | string
    email?: StringNullableWithAggregatesFilter<"Broker"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Broker"> | string | null
    address?: StringNullableWithAggregatesFilter<"Broker"> | string | null
    website?: StringNullableWithAggregatesFilter<"Broker"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Broker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Broker"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    roleId?: StringFilter<"Invitation"> | string
    brokerId?: StringNullableFilter<"Invitation"> | string | null
    token?: StringFilter<"Invitation"> | string
    message?: StringNullableFilter<"Invitation"> | string | null
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    broker?: XOR<BrokerNullableScalarRelationFilter, BrokerWhereInput> | null
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrderInput | SortOrder
    token?: SortOrder
    message?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    broker?: BrokerOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    email?: StringFilter<"Invitation"> | string
    roleId?: StringFilter<"Invitation"> | string
    brokerId?: StringNullableFilter<"Invitation"> | string | null
    message?: StringNullableFilter<"Invitation"> | string | null
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    broker?: XOR<BrokerNullableScalarRelationFilter, BrokerWhereInput> | null
  }, "id" | "token">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrderInput | SortOrder
    token?: SortOrder
    message?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    email?: StringWithAggregatesFilter<"Invitation"> | string
    roleId?: StringWithAggregatesFilter<"Invitation"> | string
    brokerId?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    token?: StringWithAggregatesFilter<"Invitation"> | string
    message?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
  }

  export type LoanRequestWhereInput = {
    AND?: LoanRequestWhereInput | LoanRequestWhereInput[]
    OR?: LoanRequestWhereInput[]
    NOT?: LoanRequestWhereInput | LoanRequestWhereInput[]
    id?: StringFilter<"LoanRequest"> | string
    userId?: StringFilter<"LoanRequest"> | string
    title?: StringFilter<"LoanRequest"> | string
    status?: StringFilter<"LoanRequest"> | string
    createdAt?: DateTimeFilter<"LoanRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LoanRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
  }

  export type LoanRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    documents?: DocumentOrderByRelationAggregateInput
  }

  export type LoanRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoanRequestWhereInput | LoanRequestWhereInput[]
    OR?: LoanRequestWhereInput[]
    NOT?: LoanRequestWhereInput | LoanRequestWhereInput[]
    userId?: StringFilter<"LoanRequest"> | string
    title?: StringFilter<"LoanRequest"> | string
    status?: StringFilter<"LoanRequest"> | string
    createdAt?: DateTimeFilter<"LoanRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LoanRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    documents?: DocumentListRelationFilter
  }, "id">

  export type LoanRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LoanRequestCountOrderByAggregateInput
    _max?: LoanRequestMaxOrderByAggregateInput
    _min?: LoanRequestMinOrderByAggregateInput
  }

  export type LoanRequestScalarWhereWithAggregatesInput = {
    AND?: LoanRequestScalarWhereWithAggregatesInput | LoanRequestScalarWhereWithAggregatesInput[]
    OR?: LoanRequestScalarWhereWithAggregatesInput[]
    NOT?: LoanRequestScalarWhereWithAggregatesInput | LoanRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoanRequest"> | string
    userId?: StringWithAggregatesFilter<"LoanRequest"> | string
    title?: StringWithAggregatesFilter<"LoanRequest"> | string
    status?: StringWithAggregatesFilter<"LoanRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LoanRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LoanRequest"> | Date | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    category?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    versions?: JsonNullableListFilter<"Document">
    comments?: JsonNullableListFilter<"Document">
    loanRequestId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    loanRequest?: XOR<LoanRequestScalarRelationFilter, LoanRequestWhereInput>
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    versions?: SortOrder
    comments?: SortOrder
    loanRequestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    loanRequest?: LoanRequestOrderByWithRelationInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    name?: StringFilter<"Document"> | string
    category?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    versions?: JsonNullableListFilter<"Document">
    comments?: JsonNullableListFilter<"Document">
    loanRequestId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
    loanRequest?: XOR<LoanRequestScalarRelationFilter, LoanRequestWhereInput>
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    versions?: SortOrder
    comments?: SortOrder
    loanRequestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Document"> | string
    name?: StringWithAggregatesFilter<"Document"> | string
    category?: StringWithAggregatesFilter<"Document"> | string
    status?: StringWithAggregatesFilter<"Document"> | string
    versions?: JsonNullableListFilter<"Document">
    comments?: JsonNullableListFilter<"Document">
    loanRequestId?: StringWithAggregatesFilter<"Document"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Document"> | Date | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    id?: StringFilter<"Agent"> | string
    userId?: StringNullableFilter<"Agent"> | string | null
    brokerId?: StringFilter<"Agent"> | string
    status?: StringFilter<"Agent"> | string
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    email?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    invitationSentAt?: DateTimeNullableFilter<"Agent"> | Date | string | null
    firstName?: StringNullableFilter<"Agent"> | string | null
    lastName?: StringNullableFilter<"Agent"> | string | null
  }

  export type AgentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    brokerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    invitationSentAt?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    userId?: StringNullableFilter<"Agent"> | string | null
    brokerId?: StringFilter<"Agent"> | string
    status?: StringFilter<"Agent"> | string
    createdAt?: DateTimeFilter<"Agent"> | Date | string
    updatedAt?: DateTimeFilter<"Agent"> | Date | string
    email?: StringFilter<"Agent"> | string
    name?: StringFilter<"Agent"> | string
    invitationSentAt?: DateTimeNullableFilter<"Agent"> | Date | string | null
    firstName?: StringNullableFilter<"Agent"> | string | null
    lastName?: StringNullableFilter<"Agent"> | string | null
  }, "id">

  export type AgentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    brokerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    invitationSentAt?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agent"> | string
    userId?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    brokerId?: StringWithAggregatesFilter<"Agent"> | string
    status?: StringWithAggregatesFilter<"Agent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agent"> | Date | string
    email?: StringWithAggregatesFilter<"Agent"> | string
    name?: StringWithAggregatesFilter<"Agent"> | string
    invitationSentAt?: DateTimeNullableWithAggregatesFilter<"Agent"> | Date | string | null
    firstName?: StringNullableWithAggregatesFilter<"Agent"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"Agent"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    broker?: BrokerCreateNestedOneWithoutUsersInput
    loanRequests?: LoanRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    roleId: string
    brokerId?: string | null
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    broker?: BrokerUpdateOneWithoutUsersNestedInput
    loanRequests?: LoanRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    roleId: string
    brokerId?: string | null
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    users?: UserCreateNestedManyWithoutRoleInput
    broker?: BrokerCreateNestedOneWithoutRolesInput
    invitations?: InvitationCreateNestedManyWithoutRoleInput
    brokerCustom?: BrokerCreateNestedOneWithoutCustomRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    brokerId?: string | null
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    users?: UserUpdateManyWithoutRoleNestedInput
    broker?: BrokerUpdateOneWithoutRolesNestedInput
    invitations?: InvitationUpdateManyWithoutRoleNestedInput
    brokerCustom?: BrokerUpdateOneWithoutCustomRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    brokerId?: string | null
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
  }

  export type BrokerCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBrokerInput
    roles?: RoleCreateNestedManyWithoutBrokerInput
    customRoles?: RoleCreateNestedManyWithoutBrokerCustomInput
    invitations?: InvitationCreateNestedManyWithoutBrokerInput
  }

  export type BrokerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBrokerInput
    roles?: RoleUncheckedCreateNestedManyWithoutBrokerInput
    customRoles?: RoleUncheckedCreateNestedManyWithoutBrokerCustomInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutBrokerInput
  }

  export type BrokerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBrokerNestedInput
    roles?: RoleUpdateManyWithoutBrokerNestedInput
    customRoles?: RoleUpdateManyWithoutBrokerCustomNestedInput
    invitations?: InvitationUpdateManyWithoutBrokerNestedInput
  }

  export type BrokerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBrokerNestedInput
    roles?: RoleUncheckedUpdateManyWithoutBrokerNestedInput
    customRoles?: RoleUncheckedUpdateManyWithoutBrokerCustomNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutBrokerNestedInput
  }

  export type BrokerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrokerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    email: string
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutInvitationsInput
    broker?: BrokerCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    email: string
    roleId: string
    brokerId?: string | null
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutInvitationsNestedInput
    broker?: BrokerUpdateOneWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateManyInput = {
    id?: string
    email: string
    roleId: string
    brokerId?: string | null
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanRequestCreateInput = {
    id?: string
    title: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLoanRequestsInput
    documents?: DocumentCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoanRequestsNestedInput
    documents?: DocumentUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestCreateManyInput = {
    id?: string
    userId: string
    title: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateInput = {
    id?: string
    name: string
    category: string
    status?: string
    versions?: DocumentCreateversionsInput | InputJsonValue[]
    comments?: DocumentCreatecommentsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequest: LoanRequestCreateNestedOneWithoutDocumentsInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: string
    name: string
    category: string
    status?: string
    versions?: DocumentCreateversionsInput | InputJsonValue[]
    comments?: DocumentCreatecommentsInput | InputJsonValue[]
    loanRequestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    versions?: DocumentUpdateversionsInput | InputJsonValue[]
    comments?: DocumentUpdatecommentsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequest?: LoanRequestUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    versions?: DocumentUpdateversionsInput | InputJsonValue[]
    comments?: DocumentUpdatecommentsInput | InputJsonValue[]
    loanRequestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyInput = {
    id?: string
    name: string
    category: string
    status?: string
    versions?: DocumentCreateversionsInput | InputJsonValue[]
    comments?: DocumentCreatecommentsInput | InputJsonValue[]
    loanRequestId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    versions?: DocumentUpdateversionsInput | InputJsonValue[]
    comments?: DocumentUpdatecommentsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    versions?: DocumentUpdateversionsInput | InputJsonValue[]
    comments?: DocumentUpdatecommentsInput | InputJsonValue[]
    loanRequestId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentCreateInput = {
    id?: string
    userId?: string | null
    brokerId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    invitationSentAt?: Date | string | null
    firstName?: string | null
    lastName?: string | null
  }

  export type AgentUncheckedCreateInput = {
    id?: string
    userId?: string | null
    brokerId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    invitationSentAt?: Date | string | null
    firstName?: string | null
    lastName?: string | null
  }

  export type AgentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    brokerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    invitationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    brokerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    invitationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentCreateManyInput = {
    id?: string
    userId?: string | null
    brokerId: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name: string
    invitationSentAt?: Date | string | null
    firstName?: string | null
    lastName?: string | null
  }

  export type AgentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    brokerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    invitationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AgentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    brokerId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    invitationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type BrokerNullableScalarRelationFilter = {
    is?: BrokerWhereInput | null
    isNot?: BrokerWhereInput | null
  }

  export type LoanRequestListRelationFilter = {
    every?: LoanRequestWhereInput
    some?: LoanRequestWhereInput
    none?: LoanRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LoanRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    passwordHash?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrder
    phoneNumber?: SortOrder
    status?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brokerId?: SortOrder
    scope?: SortOrder
    isCustom?: SortOrder
    description?: SortOrder
    permissions?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brokerId?: SortOrder
    scope?: SortOrder
    isCustom?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    brokerId?: SortOrder
    scope?: SortOrder
    isCustom?: SortOrder
    description?: SortOrder
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrokerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrokerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrokerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrder
    token?: SortOrder
    message?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrder
    token?: SortOrder
    message?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    roleId?: SortOrder
    brokerId?: SortOrder
    token?: SortOrder
    message?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type DocumentListRelationFilter = {
    every?: DocumentWhereInput
    some?: DocumentWhereInput
    none?: DocumentWhereInput
  }

  export type DocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoanRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LoanRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableListFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type LoanRequestScalarRelationFilter = {
    is?: LoanRequestWhereInput
    isNot?: LoanRequestWhereInput
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    versions?: SortOrder
    comments?: SortOrder
    loanRequestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    loanRequestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    status?: SortOrder
    loanRequestId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AgentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brokerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    invitationSentAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brokerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    invitationSentAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    brokerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    invitationSentAt?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type BrokerCreateNestedOneWithoutUsersInput = {
    create?: XOR<BrokerCreateWithoutUsersInput, BrokerUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BrokerCreateOrConnectWithoutUsersInput
    connect?: BrokerWhereUniqueInput
  }

  export type LoanRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanRequestCreateWithoutUserInput, LoanRequestUncheckedCreateWithoutUserInput> | LoanRequestCreateWithoutUserInput[] | LoanRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutUserInput | LoanRequestCreateOrConnectWithoutUserInput[]
    createMany?: LoanRequestCreateManyUserInputEnvelope
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
  }

  export type LoanRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LoanRequestCreateWithoutUserInput, LoanRequestUncheckedCreateWithoutUserInput> | LoanRequestCreateWithoutUserInput[] | LoanRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutUserInput | LoanRequestCreateOrConnectWithoutUserInput[]
    createMany?: LoanRequestCreateManyUserInputEnvelope
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type BrokerUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BrokerCreateWithoutUsersInput, BrokerUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BrokerCreateOrConnectWithoutUsersInput
    upsert?: BrokerUpsertWithoutUsersInput
    disconnect?: BrokerWhereInput | boolean
    delete?: BrokerWhereInput | boolean
    connect?: BrokerWhereUniqueInput
    update?: XOR<XOR<BrokerUpdateToOneWithWhereWithoutUsersInput, BrokerUpdateWithoutUsersInput>, BrokerUncheckedUpdateWithoutUsersInput>
  }

  export type LoanRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanRequestCreateWithoutUserInput, LoanRequestUncheckedCreateWithoutUserInput> | LoanRequestCreateWithoutUserInput[] | LoanRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutUserInput | LoanRequestCreateOrConnectWithoutUserInput[]
    upsert?: LoanRequestUpsertWithWhereUniqueWithoutUserInput | LoanRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanRequestCreateManyUserInputEnvelope
    set?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    disconnect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    delete?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    update?: LoanRequestUpdateWithWhereUniqueWithoutUserInput | LoanRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanRequestUpdateManyWithWhereWithoutUserInput | LoanRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
  }

  export type LoanRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LoanRequestCreateWithoutUserInput, LoanRequestUncheckedCreateWithoutUserInput> | LoanRequestCreateWithoutUserInput[] | LoanRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LoanRequestCreateOrConnectWithoutUserInput | LoanRequestCreateOrConnectWithoutUserInput[]
    upsert?: LoanRequestUpsertWithWhereUniqueWithoutUserInput | LoanRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LoanRequestCreateManyUserInputEnvelope
    set?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    disconnect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    delete?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    connect?: LoanRequestWhereUniqueInput | LoanRequestWhereUniqueInput[]
    update?: LoanRequestUpdateWithWhereUniqueWithoutUserInput | LoanRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LoanRequestUpdateManyWithWhereWithoutUserInput | LoanRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
  }

  export type RoleCreatepermissionsInput = {
    set: string[]
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type BrokerCreateNestedOneWithoutRolesInput = {
    create?: XOR<BrokerCreateWithoutRolesInput, BrokerUncheckedCreateWithoutRolesInput>
    connectOrCreate?: BrokerCreateOrConnectWithoutRolesInput
    connect?: BrokerWhereUniqueInput
  }

  export type InvitationCreateNestedManyWithoutRoleInput = {
    create?: XOR<InvitationCreateWithoutRoleInput, InvitationUncheckedCreateWithoutRoleInput> | InvitationCreateWithoutRoleInput[] | InvitationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutRoleInput | InvitationCreateOrConnectWithoutRoleInput[]
    createMany?: InvitationCreateManyRoleInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type BrokerCreateNestedOneWithoutCustomRolesInput = {
    create?: XOR<BrokerCreateWithoutCustomRolesInput, BrokerUncheckedCreateWithoutCustomRolesInput>
    connectOrCreate?: BrokerCreateOrConnectWithoutCustomRolesInput
    connect?: BrokerWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<InvitationCreateWithoutRoleInput, InvitationUncheckedCreateWithoutRoleInput> | InvitationCreateWithoutRoleInput[] | InvitationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutRoleInput | InvitationCreateOrConnectWithoutRoleInput[]
    createMany?: InvitationCreateManyRoleInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type RoleUpdatepermissionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type BrokerUpdateOneWithoutRolesNestedInput = {
    create?: XOR<BrokerCreateWithoutRolesInput, BrokerUncheckedCreateWithoutRolesInput>
    connectOrCreate?: BrokerCreateOrConnectWithoutRolesInput
    upsert?: BrokerUpsertWithoutRolesInput
    disconnect?: BrokerWhereInput | boolean
    delete?: BrokerWhereInput | boolean
    connect?: BrokerWhereUniqueInput
    update?: XOR<XOR<BrokerUpdateToOneWithWhereWithoutRolesInput, BrokerUpdateWithoutRolesInput>, BrokerUncheckedUpdateWithoutRolesInput>
  }

  export type InvitationUpdateManyWithoutRoleNestedInput = {
    create?: XOR<InvitationCreateWithoutRoleInput, InvitationUncheckedCreateWithoutRoleInput> | InvitationCreateWithoutRoleInput[] | InvitationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutRoleInput | InvitationCreateOrConnectWithoutRoleInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutRoleInput | InvitationUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: InvitationCreateManyRoleInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutRoleInput | InvitationUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutRoleInput | InvitationUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type BrokerUpdateOneWithoutCustomRolesNestedInput = {
    create?: XOR<BrokerCreateWithoutCustomRolesInput, BrokerUncheckedCreateWithoutCustomRolesInput>
    connectOrCreate?: BrokerCreateOrConnectWithoutCustomRolesInput
    upsert?: BrokerUpsertWithoutCustomRolesInput
    disconnect?: BrokerWhereInput | boolean
    delete?: BrokerWhereInput | boolean
    connect?: BrokerWhereUniqueInput
    update?: XOR<XOR<BrokerUpdateToOneWithWhereWithoutCustomRolesInput, BrokerUpdateWithoutCustomRolesInput>, BrokerUncheckedUpdateWithoutCustomRolesInput>
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<InvitationCreateWithoutRoleInput, InvitationUncheckedCreateWithoutRoleInput> | InvitationCreateWithoutRoleInput[] | InvitationUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutRoleInput | InvitationCreateOrConnectWithoutRoleInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutRoleInput | InvitationUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: InvitationCreateManyRoleInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutRoleInput | InvitationUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutRoleInput | InvitationUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutBrokerInput = {
    create?: XOR<UserCreateWithoutBrokerInput, UserUncheckedCreateWithoutBrokerInput> | UserCreateWithoutBrokerInput[] | UserUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBrokerInput | UserCreateOrConnectWithoutBrokerInput[]
    createMany?: UserCreateManyBrokerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutBrokerInput = {
    create?: XOR<RoleCreateWithoutBrokerInput, RoleUncheckedCreateWithoutBrokerInput> | RoleCreateWithoutBrokerInput[] | RoleUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutBrokerInput | RoleCreateOrConnectWithoutBrokerInput[]
    createMany?: RoleCreateManyBrokerInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutBrokerCustomInput = {
    create?: XOR<RoleCreateWithoutBrokerCustomInput, RoleUncheckedCreateWithoutBrokerCustomInput> | RoleCreateWithoutBrokerCustomInput[] | RoleUncheckedCreateWithoutBrokerCustomInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutBrokerCustomInput | RoleCreateOrConnectWithoutBrokerCustomInput[]
    createMany?: RoleCreateManyBrokerCustomInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutBrokerInput = {
    create?: XOR<InvitationCreateWithoutBrokerInput, InvitationUncheckedCreateWithoutBrokerInput> | InvitationCreateWithoutBrokerInput[] | InvitationUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutBrokerInput | InvitationCreateOrConnectWithoutBrokerInput[]
    createMany?: InvitationCreateManyBrokerInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBrokerInput = {
    create?: XOR<UserCreateWithoutBrokerInput, UserUncheckedCreateWithoutBrokerInput> | UserCreateWithoutBrokerInput[] | UserUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBrokerInput | UserCreateOrConnectWithoutBrokerInput[]
    createMany?: UserCreateManyBrokerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutBrokerInput = {
    create?: XOR<RoleCreateWithoutBrokerInput, RoleUncheckedCreateWithoutBrokerInput> | RoleCreateWithoutBrokerInput[] | RoleUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutBrokerInput | RoleCreateOrConnectWithoutBrokerInput[]
    createMany?: RoleCreateManyBrokerInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutBrokerCustomInput = {
    create?: XOR<RoleCreateWithoutBrokerCustomInput, RoleUncheckedCreateWithoutBrokerCustomInput> | RoleCreateWithoutBrokerCustomInput[] | RoleUncheckedCreateWithoutBrokerCustomInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutBrokerCustomInput | RoleCreateOrConnectWithoutBrokerCustomInput[]
    createMany?: RoleCreateManyBrokerCustomInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutBrokerInput = {
    create?: XOR<InvitationCreateWithoutBrokerInput, InvitationUncheckedCreateWithoutBrokerInput> | InvitationCreateWithoutBrokerInput[] | InvitationUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutBrokerInput | InvitationCreateOrConnectWithoutBrokerInput[]
    createMany?: InvitationCreateManyBrokerInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<UserCreateWithoutBrokerInput, UserUncheckedCreateWithoutBrokerInput> | UserCreateWithoutBrokerInput[] | UserUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBrokerInput | UserCreateOrConnectWithoutBrokerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBrokerInput | UserUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: UserCreateManyBrokerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBrokerInput | UserUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBrokerInput | UserUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<RoleCreateWithoutBrokerInput, RoleUncheckedCreateWithoutBrokerInput> | RoleCreateWithoutBrokerInput[] | RoleUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutBrokerInput | RoleCreateOrConnectWithoutBrokerInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutBrokerInput | RoleUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: RoleCreateManyBrokerInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutBrokerInput | RoleUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutBrokerInput | RoleUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutBrokerCustomNestedInput = {
    create?: XOR<RoleCreateWithoutBrokerCustomInput, RoleUncheckedCreateWithoutBrokerCustomInput> | RoleCreateWithoutBrokerCustomInput[] | RoleUncheckedCreateWithoutBrokerCustomInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutBrokerCustomInput | RoleCreateOrConnectWithoutBrokerCustomInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutBrokerCustomInput | RoleUpsertWithWhereUniqueWithoutBrokerCustomInput[]
    createMany?: RoleCreateManyBrokerCustomInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutBrokerCustomInput | RoleUpdateWithWhereUniqueWithoutBrokerCustomInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutBrokerCustomInput | RoleUpdateManyWithWhereWithoutBrokerCustomInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<InvitationCreateWithoutBrokerInput, InvitationUncheckedCreateWithoutBrokerInput> | InvitationCreateWithoutBrokerInput[] | InvitationUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutBrokerInput | InvitationCreateOrConnectWithoutBrokerInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutBrokerInput | InvitationUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: InvitationCreateManyBrokerInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutBrokerInput | InvitationUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutBrokerInput | InvitationUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<UserCreateWithoutBrokerInput, UserUncheckedCreateWithoutBrokerInput> | UserCreateWithoutBrokerInput[] | UserUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBrokerInput | UserCreateOrConnectWithoutBrokerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBrokerInput | UserUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: UserCreateManyBrokerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBrokerInput | UserUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBrokerInput | UserUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<RoleCreateWithoutBrokerInput, RoleUncheckedCreateWithoutBrokerInput> | RoleCreateWithoutBrokerInput[] | RoleUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutBrokerInput | RoleCreateOrConnectWithoutBrokerInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutBrokerInput | RoleUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: RoleCreateManyBrokerInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutBrokerInput | RoleUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutBrokerInput | RoleUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutBrokerCustomNestedInput = {
    create?: XOR<RoleCreateWithoutBrokerCustomInput, RoleUncheckedCreateWithoutBrokerCustomInput> | RoleCreateWithoutBrokerCustomInput[] | RoleUncheckedCreateWithoutBrokerCustomInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutBrokerCustomInput | RoleCreateOrConnectWithoutBrokerCustomInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutBrokerCustomInput | RoleUpsertWithWhereUniqueWithoutBrokerCustomInput[]
    createMany?: RoleCreateManyBrokerCustomInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutBrokerCustomInput | RoleUpdateWithWhereUniqueWithoutBrokerCustomInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutBrokerCustomInput | RoleUpdateManyWithWhereWithoutBrokerCustomInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutBrokerNestedInput = {
    create?: XOR<InvitationCreateWithoutBrokerInput, InvitationUncheckedCreateWithoutBrokerInput> | InvitationCreateWithoutBrokerInput[] | InvitationUncheckedCreateWithoutBrokerInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutBrokerInput | InvitationCreateOrConnectWithoutBrokerInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutBrokerInput | InvitationUpsertWithWhereUniqueWithoutBrokerInput[]
    createMany?: InvitationCreateManyBrokerInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutBrokerInput | InvitationUpdateWithWhereUniqueWithoutBrokerInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutBrokerInput | InvitationUpdateManyWithWhereWithoutBrokerInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<RoleCreateWithoutInvitationsInput, RoleUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutInvitationsInput
    connect?: RoleWhereUniqueInput
  }

  export type BrokerCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<BrokerCreateWithoutInvitationsInput, BrokerUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: BrokerCreateOrConnectWithoutInvitationsInput
    connect?: BrokerWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<RoleCreateWithoutInvitationsInput, RoleUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutInvitationsInput
    upsert?: RoleUpsertWithoutInvitationsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutInvitationsInput, RoleUpdateWithoutInvitationsInput>, RoleUncheckedUpdateWithoutInvitationsInput>
  }

  export type BrokerUpdateOneWithoutInvitationsNestedInput = {
    create?: XOR<BrokerCreateWithoutInvitationsInput, BrokerUncheckedCreateWithoutInvitationsInput>
    connectOrCreate?: BrokerCreateOrConnectWithoutInvitationsInput
    upsert?: BrokerUpsertWithoutInvitationsInput
    disconnect?: BrokerWhereInput | boolean
    delete?: BrokerWhereInput | boolean
    connect?: BrokerWhereUniqueInput
    update?: XOR<XOR<BrokerUpdateToOneWithWhereWithoutInvitationsInput, BrokerUpdateWithoutInvitationsInput>, BrokerUncheckedUpdateWithoutInvitationsInput>
  }

  export type UserCreateNestedOneWithoutLoanRequestsInput = {
    create?: XOR<UserCreateWithoutLoanRequestsInput, UserUncheckedCreateWithoutLoanRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoanRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type DocumentCreateNestedManyWithoutLoanRequestInput = {
    create?: XOR<DocumentCreateWithoutLoanRequestInput, DocumentUncheckedCreateWithoutLoanRequestInput> | DocumentCreateWithoutLoanRequestInput[] | DocumentUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutLoanRequestInput | DocumentCreateOrConnectWithoutLoanRequestInput[]
    createMany?: DocumentCreateManyLoanRequestInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type DocumentUncheckedCreateNestedManyWithoutLoanRequestInput = {
    create?: XOR<DocumentCreateWithoutLoanRequestInput, DocumentUncheckedCreateWithoutLoanRequestInput> | DocumentCreateWithoutLoanRequestInput[] | DocumentUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutLoanRequestInput | DocumentCreateOrConnectWithoutLoanRequestInput[]
    createMany?: DocumentCreateManyLoanRequestInputEnvelope
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutLoanRequestsNestedInput = {
    create?: XOR<UserCreateWithoutLoanRequestsInput, UserUncheckedCreateWithoutLoanRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLoanRequestsInput
    upsert?: UserUpsertWithoutLoanRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLoanRequestsInput, UserUpdateWithoutLoanRequestsInput>, UserUncheckedUpdateWithoutLoanRequestsInput>
  }

  export type DocumentUpdateManyWithoutLoanRequestNestedInput = {
    create?: XOR<DocumentCreateWithoutLoanRequestInput, DocumentUncheckedCreateWithoutLoanRequestInput> | DocumentCreateWithoutLoanRequestInput[] | DocumentUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutLoanRequestInput | DocumentCreateOrConnectWithoutLoanRequestInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutLoanRequestInput | DocumentUpsertWithWhereUniqueWithoutLoanRequestInput[]
    createMany?: DocumentCreateManyLoanRequestInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutLoanRequestInput | DocumentUpdateWithWhereUniqueWithoutLoanRequestInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutLoanRequestInput | DocumentUpdateManyWithWhereWithoutLoanRequestInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentUncheckedUpdateManyWithoutLoanRequestNestedInput = {
    create?: XOR<DocumentCreateWithoutLoanRequestInput, DocumentUncheckedCreateWithoutLoanRequestInput> | DocumentCreateWithoutLoanRequestInput[] | DocumentUncheckedCreateWithoutLoanRequestInput[]
    connectOrCreate?: DocumentCreateOrConnectWithoutLoanRequestInput | DocumentCreateOrConnectWithoutLoanRequestInput[]
    upsert?: DocumentUpsertWithWhereUniqueWithoutLoanRequestInput | DocumentUpsertWithWhereUniqueWithoutLoanRequestInput[]
    createMany?: DocumentCreateManyLoanRequestInputEnvelope
    set?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    disconnect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    delete?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    connect?: DocumentWhereUniqueInput | DocumentWhereUniqueInput[]
    update?: DocumentUpdateWithWhereUniqueWithoutLoanRequestInput | DocumentUpdateWithWhereUniqueWithoutLoanRequestInput[]
    updateMany?: DocumentUpdateManyWithWhereWithoutLoanRequestInput | DocumentUpdateManyWithWhereWithoutLoanRequestInput[]
    deleteMany?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
  }

  export type DocumentCreateversionsInput = {
    set: InputJsonValue[]
  }

  export type DocumentCreatecommentsInput = {
    set: InputJsonValue[]
  }

  export type LoanRequestCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<LoanRequestCreateWithoutDocumentsInput, LoanRequestUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LoanRequestCreateOrConnectWithoutDocumentsInput
    connect?: LoanRequestWhereUniqueInput
  }

  export type DocumentUpdateversionsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type DocumentUpdatecommentsInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type LoanRequestUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<LoanRequestCreateWithoutDocumentsInput, LoanRequestUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: LoanRequestCreateOrConnectWithoutDocumentsInput
    upsert?: LoanRequestUpsertWithoutDocumentsInput
    connect?: LoanRequestWhereUniqueInput
    update?: XOR<XOR<LoanRequestUpdateToOneWithWhereWithoutDocumentsInput, LoanRequestUpdateWithoutDocumentsInput>, LoanRequestUncheckedUpdateWithoutDocumentsInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    broker?: BrokerCreateNestedOneWithoutRolesInput
    invitations?: InvitationCreateNestedManyWithoutRoleInput
    brokerCustom?: BrokerCreateNestedOneWithoutCustomRolesInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    brokerId?: string | null
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    invitations?: InvitationUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type BrokerCreateWithoutUsersInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutBrokerInput
    customRoles?: RoleCreateNestedManyWithoutBrokerCustomInput
    invitations?: InvitationCreateNestedManyWithoutBrokerInput
  }

  export type BrokerUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutBrokerInput
    customRoles?: RoleUncheckedCreateNestedManyWithoutBrokerCustomInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutBrokerInput
  }

  export type BrokerCreateOrConnectWithoutUsersInput = {
    where: BrokerWhereUniqueInput
    create: XOR<BrokerCreateWithoutUsersInput, BrokerUncheckedCreateWithoutUsersInput>
  }

  export type LoanRequestCreateWithoutUserInput = {
    id?: string
    title: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DocumentUncheckedCreateNestedManyWithoutLoanRequestInput
  }

  export type LoanRequestCreateOrConnectWithoutUserInput = {
    where: LoanRequestWhereUniqueInput
    create: XOR<LoanRequestCreateWithoutUserInput, LoanRequestUncheckedCreateWithoutUserInput>
  }

  export type LoanRequestCreateManyUserInputEnvelope = {
    data: LoanRequestCreateManyUserInput | LoanRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    broker?: BrokerUpdateOneWithoutRolesNestedInput
    invitations?: InvitationUpdateManyWithoutRoleNestedInput
    brokerCustom?: BrokerUpdateOneWithoutCustomRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    invitations?: InvitationUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type BrokerUpsertWithoutUsersInput = {
    update: XOR<BrokerUpdateWithoutUsersInput, BrokerUncheckedUpdateWithoutUsersInput>
    create: XOR<BrokerCreateWithoutUsersInput, BrokerUncheckedCreateWithoutUsersInput>
    where?: BrokerWhereInput
  }

  export type BrokerUpdateToOneWithWhereWithoutUsersInput = {
    where?: BrokerWhereInput
    data: XOR<BrokerUpdateWithoutUsersInput, BrokerUncheckedUpdateWithoutUsersInput>
  }

  export type BrokerUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutBrokerNestedInput
    customRoles?: RoleUpdateManyWithoutBrokerCustomNestedInput
    invitations?: InvitationUpdateManyWithoutBrokerNestedInput
  }

  export type BrokerUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutBrokerNestedInput
    customRoles?: RoleUncheckedUpdateManyWithoutBrokerCustomNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutBrokerNestedInput
  }

  export type LoanRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: LoanRequestWhereUniqueInput
    update: XOR<LoanRequestUpdateWithoutUserInput, LoanRequestUncheckedUpdateWithoutUserInput>
    create: XOR<LoanRequestCreateWithoutUserInput, LoanRequestUncheckedCreateWithoutUserInput>
  }

  export type LoanRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: LoanRequestWhereUniqueInput
    data: XOR<LoanRequestUpdateWithoutUserInput, LoanRequestUncheckedUpdateWithoutUserInput>
  }

  export type LoanRequestUpdateManyWithWhereWithoutUserInput = {
    where: LoanRequestScalarWhereInput
    data: XOR<LoanRequestUpdateManyMutationInput, LoanRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type LoanRequestScalarWhereInput = {
    AND?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
    OR?: LoanRequestScalarWhereInput[]
    NOT?: LoanRequestScalarWhereInput | LoanRequestScalarWhereInput[]
    id?: StringFilter<"LoanRequest"> | string
    userId?: StringFilter<"LoanRequest"> | string
    title?: StringFilter<"LoanRequest"> | string
    status?: StringFilter<"LoanRequest"> | string
    createdAt?: DateTimeFilter<"LoanRequest"> | Date | string
    updatedAt?: DateTimeFilter<"LoanRequest"> | Date | string
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    broker?: BrokerCreateNestedOneWithoutUsersInput
    loanRequests?: LoanRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    brokerId?: string | null
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type BrokerCreateWithoutRolesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBrokerInput
    customRoles?: RoleCreateNestedManyWithoutBrokerCustomInput
    invitations?: InvitationCreateNestedManyWithoutBrokerInput
  }

  export type BrokerUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBrokerInput
    customRoles?: RoleUncheckedCreateNestedManyWithoutBrokerCustomInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutBrokerInput
  }

  export type BrokerCreateOrConnectWithoutRolesInput = {
    where: BrokerWhereUniqueInput
    create: XOR<BrokerCreateWithoutRolesInput, BrokerUncheckedCreateWithoutRolesInput>
  }

  export type InvitationCreateWithoutRoleInput = {
    id?: string
    email: string
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    broker?: BrokerCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutRoleInput = {
    id?: string
    email: string
    brokerId?: string | null
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutRoleInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutRoleInput, InvitationUncheckedCreateWithoutRoleInput>
  }

  export type InvitationCreateManyRoleInputEnvelope = {
    data: InvitationCreateManyRoleInput | InvitationCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type BrokerCreateWithoutCustomRolesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBrokerInput
    roles?: RoleCreateNestedManyWithoutBrokerInput
    invitations?: InvitationCreateNestedManyWithoutBrokerInput
  }

  export type BrokerUncheckedCreateWithoutCustomRolesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBrokerInput
    roles?: RoleUncheckedCreateNestedManyWithoutBrokerInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutBrokerInput
  }

  export type BrokerCreateOrConnectWithoutCustomRolesInput = {
    where: BrokerWhereUniqueInput
    create: XOR<BrokerCreateWithoutCustomRolesInput, BrokerUncheckedCreateWithoutCustomRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    roleId?: StringFilter<"User"> | string
    brokerId?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    status?: StringFilter<"User"> | string
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type BrokerUpsertWithoutRolesInput = {
    update: XOR<BrokerUpdateWithoutRolesInput, BrokerUncheckedUpdateWithoutRolesInput>
    create: XOR<BrokerCreateWithoutRolesInput, BrokerUncheckedCreateWithoutRolesInput>
    where?: BrokerWhereInput
  }

  export type BrokerUpdateToOneWithWhereWithoutRolesInput = {
    where?: BrokerWhereInput
    data: XOR<BrokerUpdateWithoutRolesInput, BrokerUncheckedUpdateWithoutRolesInput>
  }

  export type BrokerUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBrokerNestedInput
    customRoles?: RoleUpdateManyWithoutBrokerCustomNestedInput
    invitations?: InvitationUpdateManyWithoutBrokerNestedInput
  }

  export type BrokerUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBrokerNestedInput
    customRoles?: RoleUncheckedUpdateManyWithoutBrokerCustomNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutBrokerNestedInput
  }

  export type InvitationUpsertWithWhereUniqueWithoutRoleInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutRoleInput, InvitationUncheckedUpdateWithoutRoleInput>
    create: XOR<InvitationCreateWithoutRoleInput, InvitationUncheckedCreateWithoutRoleInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutRoleInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutRoleInput, InvitationUncheckedUpdateWithoutRoleInput>
  }

  export type InvitationUpdateManyWithWhereWithoutRoleInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutRoleInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: StringFilter<"Invitation"> | string
    email?: StringFilter<"Invitation"> | string
    roleId?: StringFilter<"Invitation"> | string
    brokerId?: StringNullableFilter<"Invitation"> | string | null
    token?: StringFilter<"Invitation"> | string
    message?: StringNullableFilter<"Invitation"> | string | null
    expiresAt?: DateTimeFilter<"Invitation"> | Date | string
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
  }

  export type BrokerUpsertWithoutCustomRolesInput = {
    update: XOR<BrokerUpdateWithoutCustomRolesInput, BrokerUncheckedUpdateWithoutCustomRolesInput>
    create: XOR<BrokerCreateWithoutCustomRolesInput, BrokerUncheckedCreateWithoutCustomRolesInput>
    where?: BrokerWhereInput
  }

  export type BrokerUpdateToOneWithWhereWithoutCustomRolesInput = {
    where?: BrokerWhereInput
    data: XOR<BrokerUpdateWithoutCustomRolesInput, BrokerUncheckedUpdateWithoutCustomRolesInput>
  }

  export type BrokerUpdateWithoutCustomRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBrokerNestedInput
    roles?: RoleUpdateManyWithoutBrokerNestedInput
    invitations?: InvitationUpdateManyWithoutBrokerNestedInput
  }

  export type BrokerUncheckedUpdateWithoutCustomRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBrokerNestedInput
    roles?: RoleUncheckedUpdateManyWithoutBrokerNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutBrokerNestedInput
  }

  export type UserCreateWithoutBrokerInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    loanRequests?: LoanRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBrokerInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    roleId: string
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    loanRequests?: LoanRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBrokerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBrokerInput, UserUncheckedCreateWithoutBrokerInput>
  }

  export type UserCreateManyBrokerInputEnvelope = {
    data: UserCreateManyBrokerInput | UserCreateManyBrokerInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutBrokerInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    users?: UserCreateNestedManyWithoutRoleInput
    invitations?: InvitationCreateNestedManyWithoutRoleInput
    brokerCustom?: BrokerCreateNestedOneWithoutCustomRolesInput
  }

  export type RoleUncheckedCreateWithoutBrokerInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutBrokerInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutBrokerInput, RoleUncheckedCreateWithoutBrokerInput>
  }

  export type RoleCreateManyBrokerInputEnvelope = {
    data: RoleCreateManyBrokerInput | RoleCreateManyBrokerInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutBrokerCustomInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    users?: UserCreateNestedManyWithoutRoleInput
    broker?: BrokerCreateNestedOneWithoutRolesInput
    invitations?: InvitationCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutBrokerCustomInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    invitations?: InvitationUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutBrokerCustomInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutBrokerCustomInput, RoleUncheckedCreateWithoutBrokerCustomInput>
  }

  export type RoleCreateManyBrokerCustomInputEnvelope = {
    data: RoleCreateManyBrokerCustomInput | RoleCreateManyBrokerCustomInput[]
    skipDuplicates?: boolean
  }

  export type InvitationCreateWithoutBrokerInput = {
    id?: string
    email: string
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutInvitationsInput
  }

  export type InvitationUncheckedCreateWithoutBrokerInput = {
    id?: string
    email: string
    roleId: string
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type InvitationCreateOrConnectWithoutBrokerInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutBrokerInput, InvitationUncheckedCreateWithoutBrokerInput>
  }

  export type InvitationCreateManyBrokerInputEnvelope = {
    data: InvitationCreateManyBrokerInput | InvitationCreateManyBrokerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutBrokerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBrokerInput, UserUncheckedUpdateWithoutBrokerInput>
    create: XOR<UserCreateWithoutBrokerInput, UserUncheckedCreateWithoutBrokerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBrokerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBrokerInput, UserUncheckedUpdateWithoutBrokerInput>
  }

  export type UserUpdateManyWithWhereWithoutBrokerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBrokerInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutBrokerInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutBrokerInput, RoleUncheckedUpdateWithoutBrokerInput>
    create: XOR<RoleCreateWithoutBrokerInput, RoleUncheckedCreateWithoutBrokerInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutBrokerInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutBrokerInput, RoleUncheckedUpdateWithoutBrokerInput>
  }

  export type RoleUpdateManyWithWhereWithoutBrokerInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutBrokerInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    brokerId?: StringNullableFilter<"Role"> | string | null
    scope?: StringFilter<"Role"> | string
    isCustom?: BoolFilter<"Role"> | boolean
    description?: StringNullableFilter<"Role"> | string | null
    permissions?: StringNullableListFilter<"Role">
  }

  export type RoleUpsertWithWhereUniqueWithoutBrokerCustomInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutBrokerCustomInput, RoleUncheckedUpdateWithoutBrokerCustomInput>
    create: XOR<RoleCreateWithoutBrokerCustomInput, RoleUncheckedCreateWithoutBrokerCustomInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutBrokerCustomInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutBrokerCustomInput, RoleUncheckedUpdateWithoutBrokerCustomInput>
  }

  export type RoleUpdateManyWithWhereWithoutBrokerCustomInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutBrokerCustomInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutBrokerInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutBrokerInput, InvitationUncheckedUpdateWithoutBrokerInput>
    create: XOR<InvitationCreateWithoutBrokerInput, InvitationUncheckedCreateWithoutBrokerInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutBrokerInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutBrokerInput, InvitationUncheckedUpdateWithoutBrokerInput>
  }

  export type InvitationUpdateManyWithWhereWithoutBrokerInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutBrokerInput>
  }

  export type RoleCreateWithoutInvitationsInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    users?: UserCreateNestedManyWithoutRoleInput
    broker?: BrokerCreateNestedOneWithoutRolesInput
    brokerCustom?: BrokerCreateNestedOneWithoutCustomRolesInput
  }

  export type RoleUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    brokerId?: string | null
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutInvitationsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutInvitationsInput, RoleUncheckedCreateWithoutInvitationsInput>
  }

  export type BrokerCreateWithoutInvitationsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutBrokerInput
    roles?: RoleCreateNestedManyWithoutBrokerInput
    customRoles?: RoleCreateNestedManyWithoutBrokerCustomInput
  }

  export type BrokerUncheckedCreateWithoutInvitationsInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    address?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutBrokerInput
    roles?: RoleUncheckedCreateNestedManyWithoutBrokerInput
    customRoles?: RoleUncheckedCreateNestedManyWithoutBrokerCustomInput
  }

  export type BrokerCreateOrConnectWithoutInvitationsInput = {
    where: BrokerWhereUniqueInput
    create: XOR<BrokerCreateWithoutInvitationsInput, BrokerUncheckedCreateWithoutInvitationsInput>
  }

  export type RoleUpsertWithoutInvitationsInput = {
    update: XOR<RoleUpdateWithoutInvitationsInput, RoleUncheckedUpdateWithoutInvitationsInput>
    create: XOR<RoleCreateWithoutInvitationsInput, RoleUncheckedCreateWithoutInvitationsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutInvitationsInput, RoleUncheckedUpdateWithoutInvitationsInput>
  }

  export type RoleUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    users?: UserUpdateManyWithoutRoleNestedInput
    broker?: BrokerUpdateOneWithoutRolesNestedInput
    brokerCustom?: BrokerUpdateOneWithoutCustomRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type BrokerUpsertWithoutInvitationsInput = {
    update: XOR<BrokerUpdateWithoutInvitationsInput, BrokerUncheckedUpdateWithoutInvitationsInput>
    create: XOR<BrokerCreateWithoutInvitationsInput, BrokerUncheckedCreateWithoutInvitationsInput>
    where?: BrokerWhereInput
  }

  export type BrokerUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: BrokerWhereInput
    data: XOR<BrokerUpdateWithoutInvitationsInput, BrokerUncheckedUpdateWithoutInvitationsInput>
  }

  export type BrokerUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutBrokerNestedInput
    roles?: RoleUpdateManyWithoutBrokerNestedInput
    customRoles?: RoleUpdateManyWithoutBrokerCustomNestedInput
  }

  export type BrokerUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutBrokerNestedInput
    roles?: RoleUncheckedUpdateManyWithoutBrokerNestedInput
    customRoles?: RoleUncheckedUpdateManyWithoutBrokerCustomNestedInput
  }

  export type UserCreateWithoutLoanRequestsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    broker?: BrokerCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutLoanRequestsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    roleId: string
    brokerId?: string | null
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutLoanRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLoanRequestsInput, UserUncheckedCreateWithoutLoanRequestsInput>
  }

  export type DocumentCreateWithoutLoanRequestInput = {
    id?: string
    name: string
    category: string
    status?: string
    versions?: DocumentCreateversionsInput | InputJsonValue[]
    comments?: DocumentCreatecommentsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUncheckedCreateWithoutLoanRequestInput = {
    id?: string
    name: string
    category: string
    status?: string
    versions?: DocumentCreateversionsInput | InputJsonValue[]
    comments?: DocumentCreatecommentsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentCreateOrConnectWithoutLoanRequestInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutLoanRequestInput, DocumentUncheckedCreateWithoutLoanRequestInput>
  }

  export type DocumentCreateManyLoanRequestInputEnvelope = {
    data: DocumentCreateManyLoanRequestInput | DocumentCreateManyLoanRequestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutLoanRequestsInput = {
    update: XOR<UserUpdateWithoutLoanRequestsInput, UserUncheckedUpdateWithoutLoanRequestsInput>
    create: XOR<UserCreateWithoutLoanRequestsInput, UserUncheckedCreateWithoutLoanRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLoanRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLoanRequestsInput, UserUncheckedUpdateWithoutLoanRequestsInput>
  }

  export type UserUpdateWithoutLoanRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    broker?: BrokerUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutLoanRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUpsertWithWhereUniqueWithoutLoanRequestInput = {
    where: DocumentWhereUniqueInput
    update: XOR<DocumentUpdateWithoutLoanRequestInput, DocumentUncheckedUpdateWithoutLoanRequestInput>
    create: XOR<DocumentCreateWithoutLoanRequestInput, DocumentUncheckedCreateWithoutLoanRequestInput>
  }

  export type DocumentUpdateWithWhereUniqueWithoutLoanRequestInput = {
    where: DocumentWhereUniqueInput
    data: XOR<DocumentUpdateWithoutLoanRequestInput, DocumentUncheckedUpdateWithoutLoanRequestInput>
  }

  export type DocumentUpdateManyWithWhereWithoutLoanRequestInput = {
    where: DocumentScalarWhereInput
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyWithoutLoanRequestInput>
  }

  export type DocumentScalarWhereInput = {
    AND?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    OR?: DocumentScalarWhereInput[]
    NOT?: DocumentScalarWhereInput | DocumentScalarWhereInput[]
    id?: StringFilter<"Document"> | string
    name?: StringFilter<"Document"> | string
    category?: StringFilter<"Document"> | string
    status?: StringFilter<"Document"> | string
    versions?: JsonNullableListFilter<"Document">
    comments?: JsonNullableListFilter<"Document">
    loanRequestId?: StringFilter<"Document"> | string
    createdAt?: DateTimeFilter<"Document"> | Date | string
    updatedAt?: DateTimeFilter<"Document"> | Date | string
  }

  export type LoanRequestCreateWithoutDocumentsInput = {
    id?: string
    title: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutLoanRequestsInput
  }

  export type LoanRequestUncheckedCreateWithoutDocumentsInput = {
    id?: string
    userId: string
    title: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanRequestCreateOrConnectWithoutDocumentsInput = {
    where: LoanRequestWhereUniqueInput
    create: XOR<LoanRequestCreateWithoutDocumentsInput, LoanRequestUncheckedCreateWithoutDocumentsInput>
  }

  export type LoanRequestUpsertWithoutDocumentsInput = {
    update: XOR<LoanRequestUpdateWithoutDocumentsInput, LoanRequestUncheckedUpdateWithoutDocumentsInput>
    create: XOR<LoanRequestCreateWithoutDocumentsInput, LoanRequestUncheckedCreateWithoutDocumentsInput>
    where?: LoanRequestWhereInput
  }

  export type LoanRequestUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: LoanRequestWhereInput
    data: XOR<LoanRequestUpdateWithoutDocumentsInput, LoanRequestUncheckedUpdateWithoutDocumentsInput>
  }

  export type LoanRequestUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLoanRequestsNestedInput
  }

  export type LoanRequestUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LoanRequestCreateManyUserInput = {
    id?: string
    title: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LoanRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DocumentUncheckedUpdateManyWithoutLoanRequestNestedInput
  }

  export type LoanRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    brokerId?: string | null
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvitationCreateManyRoleInput = {
    id?: string
    email: string
    brokerId?: string | null
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broker?: BrokerUpdateOneWithoutUsersNestedInput
    loanRequests?: LoanRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    broker?: BrokerUpdateOneWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    brokerId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBrokerInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    passwordHash: string
    roleId: string
    phoneNumber?: string | null
    status?: string
    isAdmin?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateManyBrokerInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
  }

  export type RoleCreateManyBrokerCustomInput = {
    id?: string
    name: string
    scope?: string
    isCustom?: boolean
    description?: string | null
    permissions?: RoleCreatepermissionsInput | string[]
  }

  export type InvitationCreateManyBrokerInput = {
    id?: string
    email: string
    roleId: string
    token: string
    message?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    loanRequests?: LoanRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loanRequests?: LoanRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    users?: UserUpdateManyWithoutRoleNestedInput
    invitations?: InvitationUpdateManyWithoutRoleNestedInput
    brokerCustom?: BrokerUpdateOneWithoutCustomRolesNestedInput
  }

  export type RoleUncheckedUpdateWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
  }

  export type RoleUpdateWithoutBrokerCustomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    users?: UserUpdateManyWithoutRoleNestedInput
    broker?: BrokerUpdateOneWithoutRolesNestedInput
    invitations?: InvitationUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutBrokerCustomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    invitations?: InvitationUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutBrokerCustomInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    isCustom?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: RoleUpdatepermissionsInput | string[]
  }

  export type InvitationUpdateWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutInvitationsNestedInput
  }

  export type InvitationUncheckedUpdateWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationUncheckedUpdateManyWithoutBrokerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentCreateManyLoanRequestInput = {
    id?: string
    name: string
    category: string
    status?: string
    versions?: DocumentCreateversionsInput | InputJsonValue[]
    comments?: DocumentCreatecommentsInput | InputJsonValue[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DocumentUpdateWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    versions?: DocumentUpdateversionsInput | InputJsonValue[]
    comments?: DocumentUpdatecommentsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    versions?: DocumentUpdateversionsInput | InputJsonValue[]
    comments?: DocumentUpdatecommentsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentUncheckedUpdateManyWithoutLoanRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    versions?: DocumentUpdateversionsInput | InputJsonValue[]
    comments?: DocumentUpdatecommentsInput | InputJsonValue[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}