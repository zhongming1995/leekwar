type Nullable<T> = T | null | undefined
export namespace kotlinx.atomicfu {
    function atomic$ref$<T>(initial: T, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicRef<T>;
    function atomic$boolean$(initial: boolean, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicBoolean;
    function atomic$int$(initial: number, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicInt;
    function atomic$long$(initial: kotlin.Long, trace: kotlinx.atomicfu.TraceBase): kotlinx.atomicfu.AtomicLong;
}
export namespace hagice {
    class CocosStorage extends hagice.H5DataStorage {
        constructor(key: Nullable<string>);
    }
}
export namespace hagice {
    abstract class DataStorage {
        constructor();
        abstract setValue(name: string, value: string): void;
        abstract getValue(name: string): Nullable<string>;
    }
}
export namespace hagice {
    class ECResult<T> {
        constructor(errorCode: hagice.ErrorCode, data: Nullable<T>);
        readonly errorCode: hagice.ErrorCode;
        readonly data: Nullable<T>;
        readonly Companion: {
            success<T>(data: T): hagice.ECResult<T>;
            failure<T>(errorCode: hagice.ErrorCode): hagice.ECResult<T>;
        };
    }
}
export namespace hagice {
    class ErrorCode {
        constructor(code: string, message: string);
        readonly code: string;
        readonly message: string;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        toString(): string;
        readonly Companion: {
            readonly Success: hagice.ErrorCode;
        };
    }
}
export namespace hagice {
    class H5DataStorage extends hagice.DataStorage {
        constructor(storage: Storage, key: Nullable<string>);
        setValue(name: string, value: string): void;
        getValue(name: string): Nullable<string>;
        readonly Companion: {
            smartFindStorage(): Storage;
            tryGetCocosStorage(): Nullable<Storage>;
            tryGetBrowserStorage(): Nullable<Storage>;
        };
    }
}
export namespace hagice {
    class Int64 {
        private constructor();
        toString(): string;
        plus(other: hagice.Int64): hagice.Int64;
        minus(other: hagice.Int64): hagice.Int64;
        div(other: hagice.Int64): hagice.Int64;
        times(other: hagice.Int64): hagice.Int64;
        shl(bitCount: number): hagice.Int64;
        shr(bitCount: number): hagice.Int64;
        and(other: hagice.Int64): hagice.Int64;
        or(other: hagice.Int64): hagice.Int64;
        xor(other: hagice.Int64): hagice.Int64;
        rem(other: hagice.Int64): hagice.Int64;
        mod(other: hagice.Int64): hagice.Int64;
        toInt(): number;
        toDouble(): number;
        toFloat(): number;
        toShort(): number;
        toByte(): number;
        toStringWithRadix(radix: number): string;
        equals(other: Nullable<any>): boolean;
        hashCode(): number;
        readonly Companion: {
            readonly Zero: hagice.Int64;
        };
    }
    const Int64_Zero: hagice.Int64;
    function int64(any: any): hagice.Int64;
}
export namespace hagice {
    class MemoryDataStorage extends hagice.DataStorage {
        constructor();
        setValue(name: string, value: string): void;
        getValue(name: string): Nullable<string>;
    }
}
export namespace hagice.client {
    class Client {
        constructor();
        connection: Nullable<hagice.net.Connection>;
        status: hagice.client.ClientStatus;
        roleModule: hagice.client.role.RoleModule;
        connect(inetEndpoint: hagice.net.InetEndpoint, options: any): Promise<any>;
        touchServer(): void;
        init(): void;
        start(): Promise<any>;
        addLoadJob(loadJob: hagice.client.LoadJob): void;
        allLoadingJob(): Array<hagice.client.LoadJob>;
        _onStarted(): void;
        _onPreInit(): void;
        _onPostInit(): void;
        _addModules(): void;
        addModule(module: hagice.client.ClientModule): void;
        removeModule(module: hagice.client.ClientModule): boolean;
        stepFrame(): void;
        registerMessageHandler(messageHandler: hagice.client.MessageHandler): void;
        removeMessageHandler(messageHandler: hagice.client.MessageHandler): boolean;
        getMessageHandler(type: number, id: number): Nullable<hagice.client.MessageHandler>;
        lazyLogin(tokenData: string, configJson: any): Promise<any>;
        _onRoleEntered(): void;
        _onMessageReceived(connection: hagice.net.Connection, message: hagice.net.ReadableMessage): void;
        _onConnectionClosed(connection: hagice.net.Connection, error: Nullable<Error>): void;
        _onConnectionOpened(connection: hagice.net.Connection): void;
        _onConnectionOpenFail(connection: hagice.net.Connection, error: Error): void;
        _onServerWarn(title: string, message: string): void;
        _onServerError(title: string, message: string): void;
    }
}
export namespace hagice.client {
    abstract class ClientModule {
        constructor();
        client: Nullable<hagice.client.Client>;
        init(): void;
        loadData(): Promise<any>;
        start(): Promise<any>;
        stop(): void;
    }
}
export namespace hagice.client {
    class ClientStatus {
        private constructor();
        readonly name: string;
        readonly None: {
        } & hagice.client.ClientStatus;
        readonly Inited: {
        } & hagice.client.ClientStatus;
        readonly Connected: {
        } & hagice.client.ClientStatus;
        readonly RoleEntered: {
        } & hagice.client.ClientStatus;
        readonly Running: {
        } & hagice.client.ClientStatus;
        readonly Stopped: {
        } & hagice.client.ClientStatus;
        readonly Error: {
        } & hagice.client.ClientStatus;
        toString(): string;
    }
}
export namespace hagice.client {
    class LoadJob {
        constructor(textSupplier: () => string, action: () => Promise<Nullable<any>>);
        readonly promise: Promise<Nullable<any>>;
        readonly isSuccess: boolean;
        readonly isFailure: boolean;
        readonly isDone: boolean;
        readonly text: string;
    }
}
export namespace hagice.client {
    abstract class MessageHandler {
        constructor(type: number, rangeFirstId: number);
        readonly type: number;
        readonly rangeFirstId: number;
        readonly range: number;
        abstract handle(role: Nullable<hagice.client.role.Role>, message: hagice.net.ReadableMessage): void;
    }
}
export namespace hagice.client {
    class ResponseWaiter {
        private constructor();
        readonly type: number;
        readonly id: number;
        readonly promise: Promise<hagice.net.ReadableMessage>;
    }
}
export namespace hagice.client {
    const MessageRangeSize: number;
}
export namespace hagice.client.role {
    class Role {
        constructor();
        name: string;
        index: number;
        roleUid: hagice.Int64;
        userUid: hagice.Int64;
        readFrom(message: hagice.net.ReadableMessage): void;
    }
}
export namespace hagice.client.role {
    class RoleInfo {
        constructor();
        name: string;
        index: number;
        roleUid: hagice.Int64;
        userUid: hagice.Int64;
    }
}
export namespace hagice.client.role {
    class RoleModule extends hagice.client.ClientModule {
        constructor();
        readonly roleSupplier: () => hagice.client.role.Role;
        role: Nullable<hagice.client.role.Role>;
        roleInfoSupplier: () => hagice.client.role.RoleInfo;
        listRoles(): Promise<Array<hagice.client.role.RoleInfo>>;
        roleEnter(roleUid: hagice.Int64): void;
    }
}
export namespace hagice.io {
    abstract class ByteBuf {
        constructor();
        abstract capacity: number;
        abstract readonly maxCapacity: number;
        abstract order: hagice.io.ByteOrder;
        abstract readerIndex: number;
        abstract writerIndex: number;
        abstract setIndex(readerIndex: number, writerIndex: number): void;
        abstract readonly readableBytes: number;
        abstract readonly writableBytes: number;
        abstract readonly maxWritableBytes: number;
        abstract clear(): void;
        abstract markReaderIndex(): hagice.io.ByteBuf;
        abstract resetReaderIndex(): hagice.io.ByteBuf;
        abstract markWriterIndex(): hagice.io.ByteBuf;
        abstract resetWriterIndex(): hagice.io.ByteBuf;
        abstract ensureWritable(minWritableBytes: number): hagice.io.ByteBuf;
        abstract getByte(index: number): number;
        abstract getBoolean(index: number): boolean;
        abstract getShort(index: number): number;
        abstract getInt(index: number): number;
        abstract getInt64(index: number): hagice.Int64;
        abstract getFloat(index: number): number;
        abstract getDouble(index: number): number;
        abstract getUTF8(index: number, byteLength: number): string;
        abstract getBytes(index: number, bytes: Int8Array, startIndex: number, length: number): void;
        abstract readByte(): number;
        abstract readBoolean(): boolean;
        abstract readShort(): number;
        abstract readInt(): number;
        abstract readInt64(): hagice.Int64;
        abstract readFloat(): number;
        abstract readDouble(): number;
        abstract readUTF8(byteLength: number): string;
        abstract readBytes(bytes: Int8Array, startIndex: number, length: number): void;
        abstract setByte(index: number, value: number): void;
        abstract setBoolean(index: number, value: boolean): void;
        abstract setShort(index: number, value: number): void;
        abstract setInt(index: number, value: number): void;
        abstract setInt64(index: number, value: hagice.Int64): void;
        abstract setFloat(index: number, value: number): void;
        abstract setDouble(index: number, value: number): void;
        abstract setUTF8(index: number, value: string): number;
        abstract setBytes(index: number, value: Int8Array, startIndex: number, length: number): number;
        abstract writeByte(value: number): void;
        abstract writeBoolean(value: boolean): void;
        abstract writeShort(value: number): void;
        abstract writeInt(value: number): void;
        abstract writeInt64(value: hagice.Int64): void;
        abstract writeFloat(value: number): void;
        abstract writeDouble(value: number): void;
        abstract writeUTF8(value: string): number;
        abstract writeBytes(value: Int8Array, startIndex: number, length: number): number;
    }
}
export namespace hagice.io {
    abstract class ByteBufAllocator {
        constructor();
        abstract buffer(initialCapacity: number, maxCapacity: number): hagice.io.ByteBuf;
        abstract wrap(bytes: Int8Array): hagice.io.ByteBuf;
        readonly Companion: {
            readonly Default: hagice.io.ByteBufAllocator;
        };
    }
}
export namespace hagice.io {
    class ByteOrder {
        private constructor();
        readonly BigEndian: {
        } & hagice.io.ByteOrder;
        readonly LittleEndian: {
        } & hagice.io.ByteOrder;
        readonly Companion: {
            readonly nativeOrder: hagice.io.ByteOrder;
        };
    }
}
export namespace hagice.io {
    abstract class DataReader {
        constructor();
        abstract readByte(): number;
        abstract readShort(): number;
        abstract readInt(): number;
        abstract readInt64(): hagice.Int64;
        abstract readFloat(): number;
        abstract readDouble(): number;
        abstract readBoolean(): boolean;
        abstract readUTF8(): string;
        abstract readBytes(): Int8Array;
        readShorts(): Int16Array;
        readInts(): Int32Array;
        readInt64s(): Array<hagice.Int64>;
        readFloats(): Float32Array;
        readDoubles(): Float64Array;
        readBooleans(): any /*BooleanArray*/;
        readUTF8s(): Array<string>;
        readErrorCode(): hagice.ErrorCode;
        readJson(): any;
    }
}
export namespace hagice.io {
    abstract class DataWriter {
        constructor();
        abstract writeByte(value: number): void;
        abstract writeBoolean(value: boolean): void;
        abstract writeShort(value: number): void;
        abstract writeInt(value: number): void;
        abstract writeInt64(value: hagice.Int64): void;
        abstract writeFloat(value: number): void;
        abstract writeDouble(value: number): void;
        abstract writeUTF8(value: string): void;
        abstract writeBytes(value: Int8Array, startIndex: number, length: number): void;
        writeBooleans(array: any /*BooleanArray*/): void;
        writeShorts(array: Int16Array): void;
        writeInts(array: Int32Array): void;
        writeInt64s(array: Array<hagice.Int64>): void;
        writeFloats(array: Float32Array): void;
        writeDoubles(array: Float64Array): void;
        writeUTF8s(array: Array<string>): void;
        writeErrorCode(errorCode: hagice.ErrorCode): void;
        writeJson(json: any): void;
    }
}
export namespace hagice.logger {
    class Logger {
        constructor(name: string);
        readonly name: string;
        readonly nameTag: string;
        readonly level: number;
        readonly isDebugEnabled: boolean;
        readonly isInfoEnabled: boolean;
        readonly isWarnEnabled: boolean;
        readonly isErrorEnabled: boolean;
        debug(message: string, obj: Nullable<any>): void;
        info(message: string, obj: Nullable<any>): void;
        warn(message: string, obj: Nullable<any>): void;
        error(message: string, obj: Nullable<any>): void;
        readonly Companion: {
            readonly LEVEL_DEBUG: number;
            readonly LEVEL_INFO: number;
            readonly LEVEL_WARN: number;
            readonly LEVEL_ERROR: number;
            defaultlevel: number;
            readonly TAG_DEBUG: string;
            readonly TAG_INFO: string;
            readonly TAG_WARN: string;
            readonly TAG_ERROR: string;
            getLogger(name: string): hagice.logger.Logger;
        };
    }
}
export namespace hagice.net {
    abstract class Connection {
        constructor(handler: hagice.net.ConnectionHandler);
        readonly closedPromise: Promise<any>;
        readonly connectedPromise: Promise<any>;
        type: string;
        status: hagice.net.ConnectionStatus;
        readonly isClosed: boolean;
        readonly isConnecting: boolean;
        readonly isConnected: boolean;
        close(error: Nullable<Error>): void;
        abstract close0(error: Nullable<Error>): void;
        send(message: hagice.net.WritableMessage): Promise<any>;
        write(type: number, id: number, action: (p0: hagice.net.WritableMessage) => void): void;
    }
    function createConnection(inetEndpoint: hagice.net.InetEndpoint, handler: hagice.net.ConnectionHandler, options: any): hagice.net.Connection;
}
export namespace hagice.net {
    abstract class ConnectionHandler {
        constructor();
        abstract onMessageReceived(connection: hagice.net.Connection, message: hagice.net.ReadableMessage): void;
        abstract onConnectionClosed(connection: hagice.net.Connection, error: Nullable<Error>): void;
        abstract onConnectionOpened(connection: hagice.net.Connection): void;
        abstract onConnectionOpenFail(connection: hagice.net.Connection, error: Error): void;
    }
}
export namespace hagice.net {
    class ConnectionStatus {
        private constructor();
        readonly Connecting: {
        } & hagice.net.ConnectionStatus;
        readonly Connected: {
        } & hagice.net.ConnectionStatus;
        readonly Closed: {
        } & hagice.net.ConnectionStatus;
    }
}
export namespace hagice.net {
    abstract class HttpConnection extends hagice.net.Connection {
        constructor(handler: hagice.net.ConnectionHandler);
        connectionId: string;
        abstract touch(): void;
    }
}
export namespace hagice.net {
    class InetEndpoint {
        constructor(type: string, hostname: string, port: number, data: any, adviseLocales: Array<string>, candidates: Array<hagice.net.InetEndpointCandidate>);
        readonly type: string;
        readonly hostname: string;
        readonly port: number;
        readonly data: any;
        readonly adviseLocales: Array<string>;
        readonly candidates: Array<hagice.net.InetEndpointCandidate>;
        readonly Companion: {
            from(json: any): hagice.net.InetEndpoint;
        };
    }
}
export namespace hagice.net {
    class InetEndpointCandidate {
        constructor(type: string, hostname: string, port: number, data: any, adviseLocales: Array<string>);
        readonly type: string;
        readonly hostname: string;
        readonly port: number;
        readonly data: any;
        readonly adviseLocales: Array<string>;
        readonly Companion: {
            from(json: any): hagice.net.InetEndpointCandidate;
        };
    }
}
export namespace hagice.net {
    class MessageConsts {
        constructor();
        readonly Companion: {
            readonly Tags: Int8Array;
            readonly HeaderSize: number;
            readonly HeaderIndex_SerialNo: number;
            readonly HeaderIndex_Type: number;
            readonly HeaderIndex_Id: number;
            readonly HeaderIndex_RecordLength: number;
            readonly HeaderIndex_BodyLength: number;
            readonly HeaderIndex_EncryptType: number;
            readonly HeaderIndex_EncryptAttachment: number;
            readonly HeaderIndex_ExtraFirst: number;
            readonly HeaderIndex_ExtraLast: number;
            readonly Type_Internal: number;
            readonly InternalMessageId_DateTest: number;
            readonly InternalMessageId_Ping: number;
        };
    }
}
export namespace hagice.net {
    abstract class ReadableMessage extends hagice.io.DataReader {
        constructor();
        readonly type: number;
        readonly id: number;
        readonly byteCount: number;
        readonly Companion: {
            tryParse(byteBuf: hagice.io.ByteBuf): Nullable<hagice.net.ReadableMessage>;
        };
    }
}
export namespace hagice.net {
    abstract class WritableMessage extends hagice.io.DataWriter {
        constructor();
        readonly type: number;
        readonly id: number;
        readonly byteCount: number;
        readonly sealed: boolean;
        abstract seal(): void;
    }
    function createWritableMessage(type: number, id: number): hagice.net.WritableMessage;
}
export namespace hagice.platform {
    class AppServer {
        constructor(id: hagice.Int64, name: string, endpoints: Array<hagice.net.InetEndpoint>, data: any, aliases: Array<hagice.platform.AppServiceAlias>, zoneId: hagice.Int64, visible: boolean);
        readonly id: hagice.Int64;
        readonly name: string;
        readonly endpoints: Array<hagice.net.InetEndpoint>;
        readonly data: any;
        readonly aliases: Array<hagice.platform.AppServiceAlias>;
        readonly zoneId: hagice.Int64;
        readonly visible: boolean;
        readonly Companion: {
            from(json: any): hagice.platform.AppServer;
        };
    }
}
export namespace hagice.platform {
    class AppServerList {
        constructor(servers: Array<hagice.platform.AppServer>);
        readonly servers: Array<hagice.platform.AppServer>;
        readonly Companion: {
            from(data: any): hagice.platform.AppServerList;
        };
    }
}
export namespace hagice.platform {
    class AppServerStatus {
        private constructor();
        readonly None: {
        } & hagice.platform.AppServerStatus;
        readonly Starting: {
        } & hagice.platform.AppServerStatus;
        readonly Normal: {
        } & hagice.platform.AppServerStatus;
        readonly Stopping: {
        } & hagice.platform.AppServerStatus;
        readonly Offline: {
        } & hagice.platform.AppServerStatus;
    }
}
export namespace hagice.platform {
    class AppServiceAlias {
        constructor(id: hagice.Int64, name: string, visible: boolean, data: any, zoneId: hagice.Int64);
        readonly id: hagice.Int64;
        readonly name: string;
        readonly visible: boolean;
        readonly data: any;
        readonly zoneId: hagice.Int64;
        readonly Companion: {
            from(json: any): hagice.platform.AppServiceAlias;
        };
    }
}
export namespace hagice.platform {
    class LoginData {
        constructor();
        isNewUser: boolean;
        appId: hagice.Int64;
        userUid: hagice.Int64;
        tokenData: string;
        readonly Companion: {
            from(data: any): hagice.platform.LoginData;
        };
    }
}
export namespace hagice.platform {
    abstract class Platform {
        constructor();
        locale: Nullable<string>;
        user: hagice.platform.PlatformUserServices;
        app: hagice.platform.PlatformAppServices;
        abstract accessService(path: string, parameters: any): Promise<hagice.platform.PlatformResponse<any>>;
    }
}
export namespace hagice.platform {
    abstract class PlatformAppServices {
        constructor();
        abstract serverList(appId: hagice.Int64, parameters: any): Promise<hagice.platform.PlatformResponse<hagice.platform.AppServerList>>;
    }
}
export namespace hagice.platform {
    class PlatformResponse<T> {
        constructor(errorCode: hagice.ErrorCode, data: Nullable<T>);
        readonly errorCode: hagice.ErrorCode;
        readonly data: Nullable<T>;
        readonly Companion: {
        };
    }
}
export namespace hagice.platform {
    abstract class PlatformUserServices {
        constructor();
        abstract deviceLogin(deviceId: string, parameters: any): Promise<hagice.platform.PlatformResponse<hagice.platform.LoginData>>;
        abstract login(bindingId: string, bindingType: string, password: string, parameters: any): Promise<hagice.platform.PlatformResponse<hagice.platform.LoginData>>;
        abstract register(username: string, password: string, parameters: any): Promise<hagice.platform.PlatformResponse<hagice.platform.LoginData>>;
        abstract accessLoginService(path: string, parameters: any): Promise<hagice.platform.PlatformResponse<hagice.platform.LoginData>>;
    }
}
export namespace hagice.platform {
    function createPlatform(url: string, options: any): hagice.platform.Platform;
}
export namespace hagice.stat {
    abstract class StatClient {
        constructor();
        abstract triggerIfFirstTime(category: string, templateId: string, parameters: any): void;
        abstract trigger(category: string, templateId: string, parameters: any): void;
        abstract triggerDelta(category: string, templateId: string, delta: number, parameters: any): void;
    }
}
export namespace hagice.stat {
    function createStatClient(url: string, storage: hagice.DataStorage): hagice.stat.StatClient;
}
export as namespace hagice_client_js;