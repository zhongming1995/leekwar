(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['hagice-client-js'] = factory(typeof this['hagice-client-js'] === 'undefined' ? {} : this['hagice-client-js']);
}(this, function (_) {
  'use strict';
  CoroutineSingletons.prototype = Object.create(Enum.prototype);
  CoroutineSingletons.prototype.constructor = CoroutineSingletons;
  Default.prototype = Object.create(Random.prototype);
  Default.prototype.constructor = Default;
  XorWowRandom.prototype = Object.create(Random.prototype);
  XorWowRandom.prototype.constructor = XorWowRandom;
  Error_0.prototype = Object.create(Error.prototype);
  Error_0.prototype.constructor = Error_0;
  NotImplementedError.prototype = Object.create(Error_0.prototype);
  NotImplementedError.prototype.constructor = NotImplementedError;
  AbstractMutableCollection.prototype = Object.create(AbstractCollection.prototype);
  AbstractMutableCollection.prototype.constructor = AbstractMutableCollection;
  AbstractMutableList.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableList.prototype.constructor = AbstractMutableList;
  AbstractMutableSet.prototype = Object.create(AbstractMutableCollection.prototype);
  AbstractMutableSet.prototype.constructor = AbstractMutableSet;
  AbstractEntrySet.prototype = Object.create(AbstractMutableSet.prototype);
  AbstractEntrySet.prototype.constructor = AbstractEntrySet;
  _no_name_provided__2.prototype = Object.create(AbstractMutableSet.prototype);
  _no_name_provided__2.prototype.constructor = _no_name_provided__2;
  AbstractMutableMap.prototype = Object.create(AbstractMap.prototype);
  AbstractMutableMap.prototype.constructor = AbstractMutableMap;
  ArrayList.prototype = Object.create(AbstractMutableList.prototype);
  ArrayList.prototype.constructor = ArrayList;
  EntrySet.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet.prototype.constructor = EntrySet;
  HashMap.prototype = Object.create(AbstractMutableMap.prototype);
  HashMap.prototype.constructor = HashMap;
  HashSet.prototype = Object.create(AbstractMutableSet.prototype);
  HashSet.prototype.constructor = HashSet;
  ChainEntry.prototype = Object.create(SimpleEntry.prototype);
  ChainEntry.prototype.constructor = ChainEntry;
  EntrySet_0.prototype = Object.create(AbstractEntrySet.prototype);
  EntrySet_0.prototype.constructor = EntrySet_0;
  LinkedHashMap.prototype = Object.create(HashMap.prototype);
  LinkedHashMap.prototype.constructor = LinkedHashMap;
  NodeJsOutput_0.prototype = Object.create(BaseOutput.prototype);
  NodeJsOutput_0.prototype.constructor = NodeJsOutput_0;
  BufferedOutput_0.prototype = Object.create(BaseOutput.prototype);
  BufferedOutput_0.prototype.constructor = BufferedOutput_0;
  BufferedOutputToConsoleLog_0.prototype = Object.create(BufferedOutput_0.prototype);
  BufferedOutputToConsoleLog_0.prototype.constructor = BufferedOutputToConsoleLog_0;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  IllegalStateException.prototype = Object.create(RuntimeException.prototype);
  IllegalStateException.prototype.constructor = IllegalStateException;
  CancellationException.prototype = Object.create(IllegalStateException.prototype);
  CancellationException.prototype.constructor = CancellationException;
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  CharacterCodingException.prototype = Object.create(Exception.prototype);
  CharacterCodingException.prototype.constructor = CharacterCodingException;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  _no_name_provided__1_0.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__1_0.prototype.constructor = _no_name_provided__1_0;
  IllegalArgumentException.prototype = Object.create(RuntimeException.prototype);
  IllegalArgumentException.prototype.constructor = IllegalArgumentException;
  NoSuchElementException.prototype = Object.create(RuntimeException.prototype);
  NoSuchElementException.prototype.constructor = NoSuchElementException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  IndexOutOfBoundsException.prototype = Object.create(RuntimeException.prototype);
  IndexOutOfBoundsException.prototype.constructor = IndexOutOfBoundsException;
  NumberFormatException.prototype = Object.create(IllegalArgumentException.prototype);
  NumberFormatException.prototype.constructor = NumberFormatException;
  NullPointerException.prototype = Object.create(RuntimeException.prototype);
  NullPointerException.prototype.constructor = NullPointerException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  UninitializedPropertyAccessException.prototype = Object.create(RuntimeException.prototype);
  UninitializedPropertyAccessException.prototype.constructor = UninitializedPropertyAccessException;
  None.prototype = Object.create(TraceBase.prototype);
  None.prototype.constructor = None;
  CancelHandler.prototype = Object.create(CancelHandlerBase.prototype);
  CancelHandler.prototype.constructor = CancelHandler;
  DisposeOnCancel.prototype = Object.create(CancelHandler.prototype);
  DisposeOnCancel.prototype.constructor = DisposeOnCancel;
  DispatchedTask.prototype = Object.create(SchedulerTask.prototype);
  DispatchedTask.prototype.constructor = DispatchedTask;
  CancellableContinuationImpl.prototype = Object.create(DispatchedTask.prototype);
  CancellableContinuationImpl.prototype.constructor = CancellableContinuationImpl;
  BeforeResumeCancelHandler.prototype = Object.create(CancelHandler.prototype);
  BeforeResumeCancelHandler.prototype.constructor = BeforeResumeCancelHandler;
  InvokeOnCancel.prototype = Object.create(CancelHandler.prototype);
  InvokeOnCancel.prototype.constructor = InvokeOnCancel;
  CancelledContinuation.prototype = Object.create(CompletedExceptionally.prototype);
  CancelledContinuation.prototype.constructor = CancelledContinuation;
  Key_1.prototype = Object.create(AbstractCoroutineContextKey.prototype);
  Key_1.prototype.constructor = Key_1;
  CoroutineDispatcher.prototype = Object.create(AbstractCoroutineContextElement.prototype);
  CoroutineDispatcher.prototype.constructor = CoroutineDispatcher;
  EventLoop.prototype = Object.create(CoroutineDispatcher.prototype);
  EventLoop.prototype.constructor = EventLoop;
  CompletionHandlerException.prototype = Object.create(RuntimeException.prototype);
  CompletionHandlerException.prototype.constructor = CompletionHandlerException;
  CoroutinesInternalError.prototype = Object.create(Error_0.prototype);
  CoroutinesInternalError.prototype.constructor = CoroutinesInternalError;
  LinkedListHead.prototype = Object.create(LinkedListNode.prototype);
  LinkedListHead.prototype.constructor = LinkedListHead;
  NodeList_0.prototype = Object.create(LinkedListHead.prototype);
  NodeList_0.prototype.constructor = NodeList_0;
  CompletionHandlerBase.prototype = Object.create(LinkedListNode.prototype);
  CompletionHandlerBase.prototype.constructor = CompletionHandlerBase;
  JobNode.prototype = Object.create(CompletionHandlerBase.prototype);
  JobNode.prototype.constructor = JobNode;
  ChildCompletion.prototype = Object.create(JobNode.prototype);
  ChildCompletion.prototype.constructor = ChildCompletion;
  JobCancellingNode.prototype = Object.create(JobNode.prototype);
  JobCancellingNode.prototype.constructor = JobCancellingNode;
  ChildHandleNode.prototype = Object.create(JobCancellingNode.prototype);
  ChildHandleNode.prototype.constructor = ChildHandleNode;
  InvokeOnCancelling.prototype = Object.create(JobCancellingNode.prototype);
  InvokeOnCancelling.prototype.constructor = InvokeOnCancelling;
  InvokeOnCompletion.prototype = Object.create(JobNode.prototype);
  InvokeOnCompletion.prototype.constructor = InvokeOnCompletion;
  ResumeOnCompletion.prototype = Object.create(JobNode.prototype);
  ResumeOnCompletion.prototype.constructor = ResumeOnCompletion;
  ChildContinuation.prototype = Object.create(JobCancellingNode.prototype);
  ChildContinuation.prototype.constructor = ChildContinuation;
  JobImpl.prototype = Object.create(JobSupport.prototype);
  JobImpl.prototype.constructor = JobImpl;
  TimeoutCancellationException.prototype = Object.create(CancellationException.prototype);
  TimeoutCancellationException.prototype.constructor = TimeoutCancellationException;
  DispatchedContinuation.prototype = Object.create(DispatchedTask.prototype);
  DispatchedContinuation.prototype.constructor = DispatchedContinuation;
  UnconfinedEventLoop.prototype = Object.create(EventLoop.prototype);
  UnconfinedEventLoop.prototype.constructor = UnconfinedEventLoop;
  JobCancellationException.prototype = Object.create(CancellationException.prototype);
  JobCancellationException.prototype.constructor = JobCancellationException;
  H5DataStorage.prototype = Object.create(DataStorage.prototype);
  H5DataStorage.prototype.constructor = H5DataStorage;
  CocosStorage.prototype = Object.create(H5DataStorage.prototype);
  CocosStorage.prototype.constructor = CocosStorage;
  MemoryDataStorage.prototype = Object.create(DataStorage.prototype);
  MemoryDataStorage.prototype.constructor = MemoryDataStorage;
  BasicMessageHandler.prototype = Object.create(MessageHandler.prototype);
  BasicMessageHandler.prototype.constructor = BasicMessageHandler;
  _no_name_provided__29.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__29.prototype.constructor = _no_name_provided__29;
  _no_name_provided__30.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__30.prototype.constructor = _no_name_provided__30;
  _no_name_provided__31.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__31.prototype.constructor = _no_name_provided__31;
  _no_name_provided__32.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__32.prototype.constructor = _no_name_provided__32;
  _no_name_provided__33.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__33.prototype.constructor = _no_name_provided__33;
  $start0COROUTINE$0.prototype = Object.create(CoroutineImpl_0.prototype);
  $start0COROUTINE$0.prototype.constructor = $start0COROUTINE$0;
  $waitLoadJobsDoneCOROUTINE$1.prototype = Object.create(CoroutineImpl_0.prototype);
  $waitLoadJobsDoneCOROUTINE$1.prototype.constructor = $waitLoadJobsDoneCOROUTINE$1;
  $loadModulesDataCOROUTINE$2.prototype = Object.create(CoroutineImpl_0.prototype);
  $loadModulesDataCOROUTINE$2.prototype.constructor = $loadModulesDataCOROUTINE$2;
  $startModulesCOROUTINE$3.prototype = Object.create(CoroutineImpl_0.prototype);
  $startModulesCOROUTINE$3.prototype.constructor = $startModulesCOROUTINE$3;
  $lazyLogin0COROUTINE$4.prototype = Object.create(CoroutineImpl_0.prototype);
  $lazyLogin0COROUTINE$4.prototype.constructor = $lazyLogin0COROUTINE$4;
  ClientConnectionHandler.prototype = Object.create(ConnectionHandler.prototype);
  ClientConnectionHandler.prototype.constructor = ClientConnectionHandler;
  None_0.prototype = Object.create(ClientStatus.prototype);
  None_0.prototype.constructor = None_0;
  Inited.prototype = Object.create(ClientStatus.prototype);
  Inited.prototype.constructor = Inited;
  Connected.prototype = Object.create(ClientStatus.prototype);
  Connected.prototype.constructor = Connected;
  RoleEntered.prototype = Object.create(ClientStatus.prototype);
  RoleEntered.prototype.constructor = RoleEntered;
  Running.prototype = Object.create(ClientStatus.prototype);
  Running.prototype.constructor = Running;
  Stopped.prototype = Object.create(ClientStatus.prototype);
  Stopped.prototype.constructor = Stopped;
  Error_1.prototype = Object.create(ClientStatus.prototype);
  Error_1.prototype.constructor = Error_1;
  RoleModule.prototype = Object.create(ClientModule.prototype);
  RoleModule.prototype.constructor = RoleModule;
  BigEndian.prototype = Object.create(ByteOrder.prototype);
  BigEndian.prototype.constructor = BigEndian;
  LittleEndian.prototype = Object.create(ByteOrder.prototype);
  LittleEndian.prototype.constructor = LittleEndian;
  ByteBufAllocatorImpl.prototype = Object.create(ByteBufAllocator.prototype);
  ByteBufAllocatorImpl.prototype.constructor = ByteBufAllocatorImpl;
  ByteBufImpl.prototype = Object.create(ByteBuf.prototype);
  ByteBufImpl.prototype.constructor = ByteBufImpl;
  Connecting.prototype = Object.create(ConnectionStatus.prototype);
  Connecting.prototype.constructor = Connecting;
  Connected_0.prototype = Object.create(ConnectionStatus.prototype);
  Connected_0.prototype.constructor = Connected_0;
  Closed.prototype = Object.create(ConnectionStatus.prototype);
  Closed.prototype.constructor = Closed;
  DataType.prototype = Object.create(Enum.prototype);
  DataType.prototype.constructor = DataType;
  HttpConnection.prototype = Object.create(Connection.prototype);
  HttpConnection.prototype.constructor = HttpConnection;
  ReadableMessage.prototype = Object.create(DataReader.prototype);
  ReadableMessage.prototype.constructor = ReadableMessage;
  WritableMessage.prototype = Object.create(DataWriter.prototype);
  WritableMessage.prototype.constructor = WritableMessage;
  _no_name_provided__44.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__44.prototype.constructor = _no_name_provided__44;
  HttpConnectionImpl.prototype = Object.create(HttpConnection.prototype);
  HttpConnectionImpl.prototype.constructor = HttpConnectionImpl;
  ReadableMessageImpl.prototype = Object.create(ReadableMessage.prototype);
  ReadableMessageImpl.prototype.constructor = ReadableMessageImpl;
  WritableMessageImpl.prototype = Object.create(WritableMessage.prototype);
  WritableMessageImpl.prototype.constructor = WritableMessageImpl;
  None_1.prototype = Object.create(AppServerStatus.prototype);
  None_1.prototype.constructor = None_1;
  Starting.prototype = Object.create(AppServerStatus.prototype);
  Starting.prototype.constructor = Starting;
  Normal.prototype = Object.create(AppServerStatus.prototype);
  Normal.prototype.constructor = Normal;
  Stopping.prototype = Object.create(AppServerStatus.prototype);
  Stopping.prototype.constructor = Stopping;
  Offline.prototype = Object.create(AppServerStatus.prototype);
  Offline.prototype.constructor = Offline;
  _no_name_provided__49.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__49.prototype.constructor = _no_name_provided__49;
  PlatformAppServicesImpl.prototype = Object.create(PlatformAppServices.prototype);
  PlatformAppServicesImpl.prototype.constructor = PlatformAppServicesImpl;
  _no_name_provided__50.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__50.prototype.constructor = _no_name_provided__50;
  _no_name_provided__51.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__51.prototype.constructor = _no_name_provided__51;
  PlatformImpl.prototype = Object.create(Platform.prototype);
  PlatformImpl.prototype.constructor = PlatformImpl;
  _no_name_provided__52.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__52.prototype.constructor = _no_name_provided__52;
  _no_name_provided__53.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__53.prototype.constructor = _no_name_provided__53;
  _no_name_provided__54.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__54.prototype.constructor = _no_name_provided__54;
  _no_name_provided__55.prototype = Object.create(CoroutineImpl_0.prototype);
  _no_name_provided__55.prototype.constructor = _no_name_provided__55;
  PlatformUserServicesImpl.prototype = Object.create(PlatformUserServices.prototype);
  PlatformUserServicesImpl.prototype.constructor = PlatformUserServicesImpl;
  StatClientImpl.prototype = Object.create(StatClient.prototype);
  StatClientImpl.prototype.constructor = StatClientImpl;
  function indexOf(_this_, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this_.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this_[index] == null) {
            return index;
          }}
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this_.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals_0(element, _this_[index_0])) {
            return index_0;
          }}
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function joinToString(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var indexedObject = _this_;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$break: while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform) {
    return joinTo_0(_this_, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinToString$default_0(_this_, separator, prefix, postfix, limit, truncated, transform, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      separator = ', ';
    if (!(($mask0 & 2) === 0))
      prefix = '';
    if (!(($mask0 & 4) === 0))
      postfix = '';
    if (!(($mask0 & 8) === 0))
      limit = -1;
    if (!(($mask0 & 16) === 0))
      truncated = '...';
    if (!(($mask0 & 32) === 0))
      transform = null;
    return joinToString_0(_this_, separator, prefix, postfix, limit, truncated, transform);
  }
  function joinTo_0(_this_, buffer, separator, prefix, postfix, limit, truncated, transform) {
    buffer.append_v1o70a_k$(prefix);
    Unit_getInstance();
    var count = 0;
    var tmp0_iterator = _this_.iterator_0_k$();
    $l$break: while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.append_v1o70a_k$(separator);
        Unit_getInstance();
      } else {
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$break;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.append_v1o70a_k$(truncated);
      Unit_getInstance();
    }buffer.append_v1o70a_k$(postfix);
    Unit_getInstance();
    return buffer;
  }
  function _no_name_provided_(this$0) {
    this._this$0 = this$0;
  }
  _no_name_provided_.prototype.invoke_2bq_k$ = function (it) {
    return it === this._this$0 ? '(this Collection)' : toString_0(it);
  };
  _no_name_provided_.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_2bq_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided_.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractCollection() {
  }
  AbstractCollection.prototype.contains_2bq_k$ = function (element) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = this.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = equals_0(element_2, element);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$0 = true;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = false;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.containsAll_dxd4eo_k$ = function (elements) {
    var tmp$ret$0;
    $l$block_2: {
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = elements.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.contains_2bq_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractCollection.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractCollection.prototype.toString = function () {
    return joinToString$default_0(this, ', ', '[', ']', 0, null, _no_name_provided_$factory(this), 24, null);
  };
  AbstractCollection.prototype.toArray = function () {
    return copyToArrayImpl_0(this);
  };
  AbstractCollection.$metadata$ = {
    simpleName: 'AbstractCollection',
    kind: 'class',
    interfaces: [Collection]
  };
  function _no_name_provided_$factory(this$0) {
    var i = new _no_name_provided_(this$0);
    return function (p1) {
      return i.invoke_2bq_k$(p1);
    };
  }
  function Companion_0() {
    Companion_instance = this;
  }
  Companion_0.prototype.checkElementIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkPositionIndex_rvwcgf_k$ = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', size: ' + size);
    }};
  Companion_0.prototype.checkRangeIndexes_zd700_k$ = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$_0('' + 'fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$('' + 'fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }};
  Companion_0.prototype.orderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 1;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var e = tmp0_iterator.next_0_k$();
      var tmp = imul(31, hashCode_1);
      var tmp1_safe_receiver = e;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_0.prototype.orderedEquals_tuq55s_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var otherIterator = other.iterator_0_k$();
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var elem = tmp0_iterator.next_0_k$();
      var elemOther = otherIterator.next_0_k$();
      if (!equals_0(elem, elemOther)) {
        return false;
      }}
    return true;
  };
  Companion_0.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion_0();
    return Companion_instance;
  }
  function toString($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp0_firstOrNull_0 = $this._get_entries__0_k$();
      var tmp0_iterator_1 = tmp0_firstOrNull_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = equals_0(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function Companion_1() {
    Companion_instance_0 = this;
  }
  Companion_1.prototype.entryHashCode_4vm2wp_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp2_safe_receiver_4 = e._get_key__0_k$();
        var tmp3_elvis_lhs_3 = tmp2_safe_receiver_4 == null ? null : hashCode(tmp2_safe_receiver_4);
        var tmp = tmp3_elvis_lhs_3 == null ? 0 : tmp3_elvis_lhs_3;
        var tmp0_safe_receiver_6 = e._get_value__0_k$();
        var tmp1_elvis_lhs_5 = tmp0_safe_receiver_6 == null ? null : hashCode(tmp0_safe_receiver_6);
        tmp$ret$0 = tmp ^ (tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5);
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_1.prototype.entryToString_4vm2wp_k$ = function (e) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = '' + e._get_key__0_k$() + '=' + e._get_value__0_k$();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_1.prototype.entryEquals_caydzc_k$ = function (e, other) {
    if (!(!(other == null) ? isInterface(other, Entry) : false))
      return false;
    else {
    }
    return equals_0(e._get_key__0_k$(), other._get_key__0_k$()) ? equals_0(e._get_value__0_k$(), other._get_value__0_k$()) : false;
  };
  Companion_1.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_1();
    return Companion_instance_0;
  }
  function _no_name_provided__0(this$0) {
    this._this$0_0 = this$0;
  }
  _no_name_provided__0.prototype.invoke_4v0zae_k$ = function (it) {
    return this._this$0_0.toString_4v0zae_k$(it);
  };
  _no_name_provided__0.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_4v0zae_k$((!(p1 == null) ? isInterface(p1, Entry) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__0.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMap() {
    Companion_getInstance_0();
    this.__keys = null;
    this.__values = null;
  }
  AbstractMap.prototype.containsKey_2bw_k$ = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  AbstractMap.prototype.containsEntry_7gsh9e_k$ = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    else {
    }
    var key = entry._get_key__0_k$();
    var value = entry._get_value__0_k$();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = (isInterface(this, Map_0) ? this : THROW_CCE()).get_2bw_k$(key);
      break $l$block;
    }
    var ourValue = tmp$ret$0;
    if (!equals_0(value, ourValue)) {
      return false;
    }var tmp;
    if (ourValue == null) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = (isInterface(this, Map_0) ? this : THROW_CCE()).containsKey_2bw_k$(key);
        break $l$block_0;
      }
      tmp = !tmp$ret$1;
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    } else {
    }
    return true;
  };
  AbstractMap.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    else {
    }
    if (!(this._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block_2: {
      var tmp0_all_0 = other._get_entries__0_k$();
      var tmp;
      if (isInterface(tmp0_all_0, Collection)) {
        tmp = tmp0_all_0.isEmpty_0_k$();
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_2;
      } else {
      }
      var tmp0_iterator_1 = tmp0_all_0.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = this.containsEntry_7gsh9e_k$(element_2);
          break $l$block_0;
        }
        if (!tmp$ret$1) {
          tmp$ret$0 = false;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$0 = true;
      break $l$block_2;
    }
    return tmp$ret$0;
  };
  AbstractMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  AbstractMap.prototype.hashCode = function () {
    return hashCode(this._get_entries__0_k$());
  };
  AbstractMap.prototype.isEmpty_0_k$ = function () {
    return this._get_size__0_k$() === 0;
  };
  AbstractMap.prototype._get_size__0_k$ = function () {
    return this._get_entries__0_k$()._get_size__0_k$();
  };
  AbstractMap.prototype.toString = function () {
    var tmp = this._get_entries__0_k$();
    return joinToString$default_0(tmp, ', ', '{', '}', 0, null, _no_name_provided_$factory_0(this), 24, null);
  };
  AbstractMap.prototype.toString_4v0zae_k$ = function (entry) {
    return toString(this, entry._get_key__0_k$()) + '=' + toString(this, entry._get_value__0_k$());
  };
  AbstractMap.$metadata$ = {
    simpleName: 'AbstractMap',
    kind: 'class',
    interfaces: [Map_0]
  };
  function _no_name_provided_$factory_0(this$0) {
    var i = new _no_name_provided__0(this$0);
    return function (p1) {
      return i.invoke_4v0zae_k$(p1);
    };
  }
  function Companion_2() {
    Companion_instance_1 = this;
  }
  Companion_2.prototype.unorderedHashCode_dxd51x_k$ = function (c) {
    var hashCode_1 = 0;
    var tmp0_iterator = c.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var element = tmp0_iterator.next_0_k$();
      var tmp = hashCode_1;
      var tmp1_safe_receiver = element;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : hashCode(tmp1_safe_receiver);
      hashCode_1 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_1;
  };
  Companion_2.prototype.setEquals_qlktm2_k$ = function (c, other) {
    if (!(c._get_size__0_k$() === other._get_size__0_k$()))
      return false;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = c.containsAll_dxd4eo_k$(other);
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_2.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_2();
    return Companion_instance_1;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function _get_lastIndex_(_this_) {
    return _this_._get_size__0_k$() - 1 | 0;
  }
  function EmptyList() {
    EmptyList_instance = this;
    this._serialVersionUID = new Long(-1478467534, -1720727600);
  }
  EmptyList.prototype.equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.isEmpty_0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  EmptyList.prototype.hashCode = function () {
    return 1;
  };
  EmptyList.prototype.toString = function () {
    return '[]';
  };
  EmptyList.prototype._get_size__0_k$ = function () {
    return 0;
  };
  EmptyList.prototype.isEmpty_0_k$ = function () {
    return true;
  };
  EmptyList.prototype.containsAll_lwol4p_k$ = function (elements) {
    return elements.isEmpty_0_k$();
  };
  EmptyList.prototype.containsAll_dxd4eo_k$ = function (elements) {
    return this.containsAll_lwol4p_k$(elements);
  };
  EmptyList.prototype.get_ha5a7z_k$ = function (index) {
    throw IndexOutOfBoundsException_init_$Create$_0('' + "Empty list doesn't contain element at index " + index + '.');
  };
  EmptyList.prototype.iterator_0_k$ = function () {
    return EmptyIterator_getInstance();
  };
  EmptyList.$metadata$ = {
    simpleName: 'EmptyList',
    kind: 'object',
    interfaces: [List, Serializable, RandomAccess]
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function EmptyIterator() {
    EmptyIterator_instance = this;
  }
  EmptyIterator.prototype.hasNext_0_k$ = function () {
    return false;
  };
  EmptyIterator.prototype.next_0_k$ = function () {
    throw NoSuchElementException_init_$Create$();
  };
  EmptyIterator.$metadata$ = {
    simpleName: 'EmptyIterator',
    kind: 'object',
    interfaces: [ListIterator]
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    if (EmptyIterator_instance == null)
      new EmptyIterator();
    return EmptyIterator_instance;
  }
  function collectionSizeOrDefault(_this_, default_0) {
    var tmp;
    if (isInterface(_this_, Collection)) {
      tmp = _this_._get_size__0_k$();
    } else {
      {
        tmp = default_0;
      }
    }
    return tmp;
  }
  function Continuation() {
  }
  Continuation.$metadata$ = {
    simpleName: 'Continuation',
    kind: 'interface',
    interfaces: []
  };
  function startCoroutine(_this_, completion) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_resume_0 = intercepted(createCoroutineUnintercepted(_this_, completion));
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_1 = Companion_getInstance_3();
        tmp$ret$0 = _Result___init__impl_(Unit_getInstance());
        break $l$block;
      }
      tmp$ret$1 = tmp0_resume_0.resumeWith_bnunh2_k$(tmp$ret$0);
      break $l$block_0;
    }
  }
  function Key() {
    Key_instance = this;
  }
  Key.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance;
  function Key_getInstance() {
    if (Key_instance == null)
      new Key();
    return Key_instance;
  }
  function ContinuationInterceptor() {
  }
  ContinuationInterceptor.prototype.releaseInterceptedContinuation_h7c6yl_k$ = function (continuation) {
  };
  ContinuationInterceptor.prototype.get_9uvjra_k$ = function (key) {
    if (key instanceof AbstractCoroutineContextKey) {
      var tmp;
      if (key.isSubKey_djuxjq_k$(this._get_key__0_k$())) {
        var tmp_0 = key.tryCast_k332zt_k$(this);
        tmp = (!(tmp_0 == null) ? isInterface(tmp_0, Element_0) : false) ? tmp_0 : null;
      } else {
        tmp = null;
      }
      return tmp;
    } else {
    }
    var tmp_1;
    if (Key_getInstance() === key) {
      tmp_1 = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp_1 = null;
    }
    return tmp_1;
  };
  ContinuationInterceptor.$metadata$ = {
    simpleName: 'ContinuationInterceptor',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function Key_0() {
  }
  Key_0.$metadata$ = {
    simpleName: 'Key',
    kind: 'interface',
    interfaces: []
  };
  function Element_0() {
  }
  Element_0.prototype.get_9uvjra_k$ = function (key) {
    var tmp;
    if (equals_0(this._get_key__0_k$(), key)) {
      tmp = isInterface(this, Element_0) ? this : THROW_CCE();
    } else {
      tmp = null;
    }
    return tmp;
  };
  Element_0.$metadata$ = {
    simpleName: 'Element',
    kind: 'interface',
    interfaces: [CoroutineContext]
  };
  function CoroutineContext() {
  }
  CoroutineContext.$metadata$ = {
    simpleName: 'CoroutineContext',
    kind: 'interface',
    interfaces: []
  };
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this._serialVersionUID_0 = new Long(0, 0);
  }
  EmptyCoroutineContext.prototype.get_9uvjra_k$ = function (key) {
    return null;
  };
  EmptyCoroutineContext.prototype.hashCode = function () {
    return 0;
  };
  EmptyCoroutineContext.prototype.toString = function () {
    return 'EmptyCoroutineContext';
  };
  EmptyCoroutineContext.$metadata$ = {
    simpleName: 'EmptyCoroutineContext',
    kind: 'object',
    interfaces: [CoroutineContext, Serializable]
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function AbstractCoroutineContextKey(baseKey, safeCast) {
    this._safeCast = safeCast;
    var tmp = this;
    var tmp_0;
    if (baseKey instanceof AbstractCoroutineContextKey) {
      tmp_0 = baseKey._topmostKey;
    } else {
      {
        tmp_0 = baseKey;
      }
    }
    tmp._topmostKey = tmp_0;
  }
  AbstractCoroutineContextKey.prototype.tryCast_k332zt_k$ = function (element) {
    return this._safeCast(element);
  };
  AbstractCoroutineContextKey.prototype.isSubKey_djuxjq_k$ = function (key) {
    return key === this ? true : this._topmostKey === key;
  };
  AbstractCoroutineContextKey.$metadata$ = {
    simpleName: 'AbstractCoroutineContextKey',
    kind: 'class',
    interfaces: [Key_0]
  };
  function AbstractCoroutineContextElement(key) {
    this._key = key;
  }
  AbstractCoroutineContextElement.prototype._get_key__0_k$ = function () {
    return this._key;
  };
  AbstractCoroutineContextElement.$metadata$ = {
    simpleName: 'AbstractCoroutineContextElement',
    kind: 'class',
    interfaces: [Element_0]
  };
  function _get_COROUTINE_SUSPENDED_() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_getInstance();
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  CoroutineSingletons.$metadata$ = {
    simpleName: 'CoroutineSingletons',
    kind: 'class',
    interfaces: []
  };
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function Default() {
    Default_instance = this;
    Random.call(this);
    this._defaultRandom = defaultPlatformRandom();
  }
  Default.prototype.nextBits_ha5a7z_k$ = function (bitCount) {
    return this._defaultRandom.nextBits_ha5a7z_k$(bitCount);
  };
  Default.prototype.nextInt_0_k$ = function () {
    return this._defaultRandom.nextInt_0_k$();
  };
  Default.$metadata$ = {
    simpleName: 'Default',
    kind: 'object',
    interfaces: [Serializable]
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Random() {
    Default_getInstance();
  }
  Random.prototype.nextInt_0_k$ = function () {
    return this.nextBits_ha5a7z_k$(32);
  };
  Random.$metadata$ = {
    simpleName: 'Random',
    kind: 'class',
    interfaces: []
  };
  function Random_0(seed) {
    return XorWowRandom_init_$Create$(seed, seed >> 31);
  }
  function takeUpperBits(_this_, bitCount) {
    return _this_ >>> (32 - bitCount | 0) & (-bitCount | 0) >> 31;
  }
  function XorWowRandom_init_$Init$(seed1, seed2, $this) {
    XorWowRandom.call($this, seed1, seed2, 0, 0, ~seed1, seed1 << 10 ^ seed2 >>> 4);
    return $this;
  }
  function XorWowRandom_init_$Create$(seed1, seed2) {
    return XorWowRandom_init_$Init$(seed1, seed2, Object.create(XorWowRandom.prototype));
  }
  function Companion_3() {
    Companion_instance_2 = this;
    this._serialVersionUID_1 = new Long(0, 0);
  }
  Companion_3.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_3();
    return Companion_instance_2;
  }
  function XorWowRandom(x, y, z, w, v, addend) {
    Companion_getInstance_2();
    Random.call(this);
    this._x = x;
    this._y = y;
    this._z = z;
    this._w = w;
    this._v = v;
    this._addend = addend;
    {
      var tmp0_require_0 = !((this._x | this._y | this._z | this._w | this._v) === 0);
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Initial state must have at least one non-zero element.';
          break $l$block;
        }
        var message_2 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_2));
      }}
    {
      {
      }
      var inductionVariable = 0;
      if (inductionVariable < 64)
        do {
          var index_3 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          {
            this.nextInt_0_k$();
            Unit_getInstance();
          }
        }
         while (inductionVariable < 64);
    }
  }
  XorWowRandom.prototype.nextInt_0_k$ = function () {
    var t = this._x;
    t = t ^ t >>> 2;
    this._x = this._y;
    this._y = this._z;
    this._z = this._w;
    var v0 = this._v;
    this._w = v0;
    t = t ^ t << 1 ^ v0 ^ v0 << 4;
    this._v = t;
    var tmp0_this = this;
    tmp0_this._addend = tmp0_this._addend + 362437 | 0;
    return t + this._addend | 0;
  };
  XorWowRandom.prototype.nextBits_ha5a7z_k$ = function (bitCount) {
    return takeUpperBits(this.nextInt_0_k$(), bitCount);
  };
  XorWowRandom.$metadata$ = {
    simpleName: 'XorWowRandom',
    kind: 'class',
    interfaces: [Serializable]
  };
  function KClassifier() {
  }
  KClassifier.$metadata$ = {
    simpleName: 'KClassifier',
    kind: 'interface',
    interfaces: []
  };
  function appendElement(_this_, element, transform) {
    if (!(transform == null)) {
      _this_.append_v1o70a_k$(transform(element));
      Unit_getInstance();
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this_.append_v1o70a_k$(element);
        Unit_getInstance();
      } else {
        if (element instanceof Char) {
          _this_.append_wi8o78_k$(element);
          Unit_getInstance();
        } else {
          {
            _this_.append_v1o70a_k$(toString_0(element));
            Unit_getInstance();
          }
        }
      }
    }
  }
  function equals(_this_, other, ignoreCase) {
    if (_this_.equals(other))
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this_);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (thisUpper.equals(otherUpper)) {
      tmp = true;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$1;
          $l$block_0: {
            var tmp$ret$0;
            $l$block: {
              var tmp0_asDynamic_0 = thisUpper.toString();
              tmp$ret$0 = tmp0_asDynamic_0;
              break $l$block;
            }
            var tmp1_unsafeCast_0 = tmp$ret$0.toLowerCase();
            tmp$ret$1 = tmp1_unsafeCast_0;
            break $l$block_0;
          }
          tmp$ret$2 = tmp$ret$1;
          break $l$block_1;
        }
        tmp$ret$3 = charSequenceGet(tmp$ret$2, 0);
        break $l$block_2;
      }
      var tmp_0 = tmp$ret$3;
      var tmp$ret$7;
      $l$block_6: {
        var tmp$ret$6;
        $l$block_5: {
          var tmp$ret$5;
          $l$block_4: {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_asDynamic_0 = otherUpper.toString();
              tmp$ret$4 = tmp2_asDynamic_0;
              break $l$block_3;
            }
            var tmp3_unsafeCast_0 = tmp$ret$4.toLowerCase();
            tmp$ret$5 = tmp3_unsafeCast_0;
            break $l$block_4;
          }
          tmp$ret$6 = tmp$ret$5;
          break $l$block_5;
        }
        tmp$ret$7 = charSequenceGet(tmp$ret$6, 0);
        break $l$block_6;
      }
      tmp = tmp_0.equals(tmp$ret$7);
    }
    return tmp;
  }
  function toLongOrNull(_this_) {
    return toLongOrNull_0(_this_, 10);
  }
  function toLongOrNull_0(_this_, radix) {
    checkRadix(radix);
    Unit_getInstance();
    var length = _this_.length;
    if (length === 0)
      return null;
    var start;
    var isNegative_0;
    var limit;
    var firstChar = charSequenceGet(_this_, 0);
    if (firstChar.compareTo_wi8o78_k$(new Char(48)) < 0) {
      if (length === 1)
        return null;
      start = 1;
      if (firstChar.equals(new Char(45))) {
        isNegative_0 = true;
        Companion_getInstance_6();
        limit = new Long(0, -2147483648);
      } else if (firstChar.equals(new Char(43))) {
        isNegative_0 = false;
        Companion_getInstance_6();
        limit = (new Long(-1, 2147483647)).unaryMinus_0_k$();
      } else
        return null;
    } else {
      start = 0;
      isNegative_0 = false;
      Companion_getInstance_6();
      limit = (new Long(-1, 2147483647)).unaryMinus_0_k$();
    }
    var tmp$ret$0;
    $l$block: {
      Companion_getInstance_6();
      var tmp0_div_0 = (new Long(-1, 2147483647)).unaryMinus_0_k$();
      tmp$ret$0 = tmp0_div_0.div_wiekkq_k$(new Long(36, 0));
      break $l$block;
    }
    var limitForMaxRadix = tmp$ret$0;
    var limitBeforeMul = limitForMaxRadix;
    var result = new Long(0, 0);
    var inductionVariable = start;
    if (inductionVariable < length)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var digit = digitOf(charSequenceGet(_this_, i), radix);
        if (digit < 0)
          return null;
        if (result.compareTo_wiekkq_k$(limitBeforeMul) < 0) {
          if (limitBeforeMul.equals(limitForMaxRadix)) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = limit.div_wiekkq_k$(toLong_0(radix));
              break $l$block_0;
            }
            limitBeforeMul = tmp$ret$1;
            if (result.compareTo_wiekkq_k$(limitBeforeMul) < 0) {
              return null;
            }} else {
            return null;
          }
        }var tmp$ret$2;
        $l$block_1: {
          var tmp1_times_0 = result;
          tmp$ret$2 = tmp1_times_0.times_wiekkq_k$(toLong_0(radix));
          break $l$block_1;
        }
        result = tmp$ret$2;
        var tmp = result;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = limit.plus_wiekkq_k$(toLong_0(digit));
          break $l$block_2;
        }
        if (tmp.compareTo_wiekkq_k$(tmp$ret$3) < 0)
          return null;
        else {
        }
        var tmp$ret$4;
        $l$block_3: {
          var tmp2_minus_0 = result;
          tmp$ret$4 = tmp2_minus_0.minus_wiekkq_k$(toLong_0(digit));
          break $l$block_3;
        }
        result = tmp$ret$4;
      }
       while (inductionVariable < length);
    return isNegative_0 ? result : result.unaryMinus_0_k$();
  }
  function numberFormatError(input) {
    throw NumberFormatException_init_$Create$('' + "Invalid number format: '" + input + "'");
  }
  function regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this_) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(charSequenceGet(_this_, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function _get_lastIndex__0(_this_) {
    return charSequenceLength(_this_) - 1 | 0;
  }
  function Lazy() {
  }
  Lazy.$metadata$ = {
    simpleName: 'Lazy',
    kind: 'interface',
    interfaces: []
  };
  function UnsafeLazyImpl(initializer) {
    this._initializer = initializer;
    this.__value = UNINITIALIZED_VALUE_getInstance();
  }
  UnsafeLazyImpl.prototype._get_value__0_k$ = function () {
    if (this.__value === UNINITIALIZED_VALUE_getInstance()) {
      this.__value = ensureNotNull(this._initializer)();
      this._initializer = null;
    }var tmp = this.__value;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  UnsafeLazyImpl.prototype.isInitialized_0_k$ = function () {
    return !(this.__value === UNINITIALIZED_VALUE_getInstance());
  };
  UnsafeLazyImpl.prototype.toString = function () {
    return this.isInitialized_0_k$() ? toString_0(this._get_value__0_k$()) : 'Lazy value not initialized yet.';
  };
  UnsafeLazyImpl.$metadata$ = {
    simpleName: 'UnsafeLazyImpl',
    kind: 'class',
    interfaces: [Lazy, Serializable]
  };
  function UNINITIALIZED_VALUE() {
    UNINITIALIZED_VALUE_instance = this;
  }
  UNINITIALIZED_VALUE.$metadata$ = {
    simpleName: 'UNINITIALIZED_VALUE',
    kind: 'object',
    interfaces: []
  };
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    if (UNINITIALIZED_VALUE_instance == null)
      new UNINITIALIZED_VALUE();
    return UNINITIALIZED_VALUE_instance;
  }
  function _Result___init__impl_(value) {
    return value;
  }
  function _Result___get_value__impl_(this_0) {
    return this_0;
  }
  function _Result___get_isFailure__impl_(this_0) {
    var tmp = _Result___get_value__impl_(this_0);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl(this_0) {
    var tmp0_subject = _Result___get_value__impl_(this_0);
    var tmp;
    if (tmp0_subject instanceof Failure) {
      tmp = _Result___get_value__impl_(this_0)._exception;
    } else {
      {
        tmp = null;
      }
    }
    return tmp;
  }
  function Companion_4() {
    Companion_instance_3 = this;
  }
  Companion_4.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_4();
    return Companion_instance_3;
  }
  function Failure(exception) {
    this._exception = exception;
  }
  Failure.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals_0(this._exception, other._exception);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Failure.prototype.hashCode = function () {
    return hashCode(this._exception);
  };
  Failure.prototype.toString = function () {
    return '' + 'Failure(' + this._exception + ')';
  };
  Failure.$metadata$ = {
    simpleName: 'Failure',
    kind: 'class',
    interfaces: [Serializable]
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function throwOnFailure(_this_) {
    var tmp = _Result___get_value__impl_(_this_);
    if (tmp instanceof Failure)
      throw _Result___get_value__impl_(_this_)._exception;
    else {
    }
  }
  function NotImplementedError_init_$Init$(message, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      message = 'An operation is not implemented.';
    NotImplementedError.call($this, message);
    return $this;
  }
  function NotImplementedError_init_$Create$(message, $mask0, $marker) {
    var tmp = NotImplementedError_init_$Init$(message, $mask0, $marker, Object.create(NotImplementedError.prototype));
    captureStack(tmp, NotImplementedError_init_$Create$);
    return tmp;
  }
  function NotImplementedError(message) {
    Error_init_$Init$(message, this);
    captureStack(this, NotImplementedError);
  }
  NotImplementedError.$metadata$ = {
    simpleName: 'NotImplementedError',
    kind: 'class',
    interfaces: []
  };
  function _UShort___init__impl_(data) {
    return data;
  }
  function _UShort___get_data__impl_(this_0) {
    return this_0;
  }
  function CharSequence() {
  }
  CharSequence.$metadata$ = {
    simpleName: 'CharSequence',
    kind: 'interface',
    interfaces: []
  };
  function Comparable() {
  }
  Comparable.$metadata$ = {
    simpleName: 'Comparable',
    kind: 'interface',
    interfaces: []
  };
  function Iterator() {
  }
  Iterator.$metadata$ = {
    simpleName: 'Iterator',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterator() {
  }
  MutableIterator.$metadata$ = {
    simpleName: 'MutableIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function ListIterator() {
  }
  ListIterator.$metadata$ = {
    simpleName: 'ListIterator',
    kind: 'interface',
    interfaces: [Iterator]
  };
  function Number_0() {
  }
  Number_0.$metadata$ = {
    simpleName: 'Number',
    kind: 'class',
    interfaces: []
  };
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = {
    simpleName: 'Unit',
    kind: 'object',
    interfaces: []
  };
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function arrayCopy_0(source, destination, destinationOffset, startIndex, endIndex) {
    Companion_getInstance().checkRangeIndexes_zd700_k$(startIndex, endIndex, source.length);
    var rangeSize = endIndex - startIndex | 0;
    Companion_getInstance().checkRangeIndexes_zd700_k$(destinationOffset, destinationOffset + rangeSize | 0, destination.length);
    if (ArrayBuffer.isView(destination) && ArrayBuffer.isView(source)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = source;
        break $l$block;
      }
      var subrange = tmp$ret$0.subarray(startIndex, endIndex);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = destination;
        break $l$block_0;
      }
      tmp$ret$1.set(subrange, destinationOffset);
    } else {
      if (!(source === destination) ? true : destinationOffset <= startIndex) {
        var inductionVariable = 0;
        if (inductionVariable < rangeSize)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            destination[destinationOffset + index | 0] = source[startIndex + index | 0];
          }
           while (inductionVariable < rangeSize);
      } else {
        var inductionVariable_0 = rangeSize - 1 | 0;
        if (0 <= inductionVariable_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + -1 | 0;
            destination[destinationOffset + index_0 | 0] = source[startIndex + index_0 | 0];
          }
           while (0 <= inductionVariable_0);
      }
    }
  }
  function copyToArray_0(collection) {
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = collection;
      break $l$block;
    }
    if (tmp$ret$0.toArray !== undefined) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = collection;
          break $l$block_0;
        }
        var tmp0_unsafeCast_0 = tmp$ret$1.toArray();
        tmp$ret$2 = tmp0_unsafeCast_0;
        break $l$block_1;
      }
      tmp = tmp$ret$2;
    } else {
      {
        var tmp$ret$4;
        $l$block_3: {
          var tmp1_unsafeCast_0 = copyToArrayImpl_0(collection);
          var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = tmp1_unsafeCast_0;
            break $l$block_2;
          }
          tmp$ret$4 = tmp$ret$3;
          break $l$block_3;
        }
        tmp = tmp$ret$4;
      }
    }
    return tmp;
  }
  function copyToArrayImpl_0(collection) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    var array = tmp$ret$0;
    var iterator = collection.iterator_0_k$();
    while (iterator.hasNext_0_k$()) {
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = array;
        break $l$block_0;
      }
      tmp$ret$1.push(iterator.next_0_k$());
    }
    return array;
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  AbstractMutableCollection.prototype.remove_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    var iterator = this.iterator_0_k$();
    while (iterator.hasNext_0_k$()) {
      if (equals_0(iterator.next_0_k$(), element)) {
        iterator.remove_sv8swh_k$();
        return true;
      }}
    return false;
  };
  AbstractMutableCollection.prototype.toJSON = function () {
    return this.toArray();
  };
  AbstractMutableCollection.prototype.checkIsMutable_sv8swh_k$ = function () {
  };
  AbstractMutableCollection.$metadata$ = {
    simpleName: 'AbstractMutableCollection',
    kind: 'class',
    interfaces: [MutableCollection]
  };
  function IteratorImpl($outer) {
    this._$this = $outer;
    this._index = 0;
    this._last = -1;
  }
  IteratorImpl.prototype.hasNext_0_k$ = function () {
    return this._index < this._$this._get_size__0_k$();
  };
  IteratorImpl.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp0_this = this;
    var tmp1 = tmp0_this._index;
    tmp0_this._index = tmp1 + 1 | 0;
    tmp._last = tmp1;
    return this._$this.get_ha5a7z_k$(this._last);
  };
  IteratorImpl.prototype.remove_sv8swh_k$ = function () {
    {
      var tmp0_check_0 = !(this._last === -1);
      {
      }
      if (!tmp0_check_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'Call next() or previous() before removing element from the iterator.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalStateException_init_$Create$(toString_1(message_1));
      }}
    this._$this.removeAt_ha5a7z_k$(this._last);
    Unit_getInstance();
    this._index = this._last;
    this._last = -1;
  };
  IteratorImpl.$metadata$ = {
    simpleName: 'IteratorImpl',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this._modCount = 0;
  }
  AbstractMutableList.prototype._set_modCount__majfzk_k$ = function (_set___) {
    this._modCount = _set___;
  };
  AbstractMutableList.prototype._get_modCount__0_k$ = function () {
    return this._modCount;
  };
  AbstractMutableList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    this.add_vz2mgm_k$(this._get_size__0_k$(), element);
    return true;
  };
  AbstractMutableList.prototype.iterator_0_k$ = function () {
    return new IteratorImpl(this);
  };
  AbstractMutableList.prototype.contains_2bq_k$ = function (element) {
    return this.indexOf_2bq_k$(element) >= 0;
  };
  AbstractMutableList.prototype.indexOf_2bq_k$ = function (element) {
    var inductionVariable = 0;
    var last = _get_lastIndex_(this);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this.get_ha5a7z_k$(index), element)) {
          return index;
        }}
       while (!(index === last));
    return -1;
  };
  AbstractMutableList.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    else {
    }
    return Companion_getInstance().orderedEquals_tuq55s_k$(this, other);
  };
  AbstractMutableList.prototype.hashCode = function () {
    return Companion_getInstance().orderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableList.$metadata$ = {
    simpleName: 'AbstractMutableList',
    kind: 'class',
    interfaces: [MutableList]
  };
  function _no_name_provided__1($entryIterator) {
    this._$entryIterator = $entryIterator;
  }
  _no_name_provided__1.prototype.hasNext_0_k$ = function () {
    return this._$entryIterator.hasNext_0_k$();
  };
  _no_name_provided__1.prototype.next_0_k$ = function () {
    return this._$entryIterator.next_0_k$()._get_key__0_k$();
  };
  _no_name_provided__1.prototype.remove_sv8swh_k$ = function () {
    return this._$entryIterator.remove_sv8swh_k$();
  };
  _no_name_provided__1.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function SimpleEntry(key, value) {
    this._key_0 = key;
    this.__value_0 = value;
  }
  SimpleEntry.prototype._get_key__0_k$ = function () {
    return this._key_0;
  };
  SimpleEntry.prototype._get_value__0_k$ = function () {
    return this.__value_0;
  };
  SimpleEntry.prototype.setValue_2c7_k$ = function (newValue) {
    var oldValue = this.__value_0;
    this.__value_0 = newValue;
    return oldValue;
  };
  SimpleEntry.prototype.hashCode = function () {
    return Companion_getInstance_0().entryHashCode_4vm2wp_k$(this);
  };
  SimpleEntry.prototype.toString = function () {
    return Companion_getInstance_0().entryToString_4vm2wp_k$(this);
  };
  SimpleEntry.prototype.equals = function (other) {
    return Companion_getInstance_0().entryEquals_caydzc_k$(this, other);
  };
  SimpleEntry.$metadata$ = {
    simpleName: 'SimpleEntry',
    kind: 'class',
    interfaces: [MutableEntry]
  };
  function AbstractEntrySet() {
    AbstractMutableSet.call(this);
  }
  AbstractEntrySet.prototype.contains_2bq_k$ = function (element) {
    return this.containsEntry_4v0zae_k$(element);
  };
  AbstractEntrySet.$metadata$ = {
    simpleName: 'AbstractEntrySet',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__2(this$0) {
    this._this$0_1 = this$0;
    AbstractMutableSet.call(this);
  }
  _no_name_provided__2.prototype.add_2bw_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on keys');
  };
  _no_name_provided__2.prototype.add_2bq_k$ = function (element) {
    return this.add_2bw_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__2.prototype.contains_2bw_k$ = function (element) {
    return this._this$0_1.containsKey_2bw_k$(element);
  };
  _no_name_provided__2.prototype.contains_2bq_k$ = function (element) {
    if (!(element == null ? true : isObject(element)))
      return false;
    else {
    }
    return this.contains_2bw_k$((element == null ? true : isObject(element)) ? element : THROW_CCE());
  };
  _no_name_provided__2.prototype.iterator_0_k$ = function () {
    var entryIterator = this._this$0_1._get_entries__0_k$().iterator_0_k$();
    return new _no_name_provided__1(entryIterator);
  };
  _no_name_provided__2.prototype._get_size__0_k$ = function () {
    return this._this$0_1._get_size__0_k$();
  };
  _no_name_provided__2.prototype.checkIsMutable_sv8swh_k$ = function () {
    return this._this$0_1.checkIsMutable_sv8swh_k$();
  };
  _no_name_provided__2.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.__keys_0 = null;
    this.__values_0 = null;
  }
  AbstractMutableMap.prototype._get_keys__0_k$ = function () {
    if (this.__keys_0 == null) {
      var tmp = this;
      tmp.__keys_0 = new _no_name_provided__2(this);
    }return ensureNotNull(this.__keys_0);
  };
  AbstractMutableMap.prototype.remove_2bw_k$ = function (key) {
    this.checkIsMutable_sv8swh_k$();
    var iter = this._get_entries__0_k$().iterator_0_k$();
    while (iter.hasNext_0_k$()) {
      var entry = iter.next_0_k$();
      var k = entry._get_key__0_k$();
      if (equals_0(key, k)) {
        var value = entry._get_value__0_k$();
        iter.remove_sv8swh_k$();
        return value;
      }}
    return null;
  };
  AbstractMutableMap.prototype.checkIsMutable_sv8swh_k$ = function () {
  };
  AbstractMutableMap.$metadata$ = {
    simpleName: 'AbstractMutableMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  AbstractMutableSet.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    else {
    }
    return Companion_getInstance_1().setEquals_qlktm2_k$(this, other);
  };
  AbstractMutableSet.prototype.hashCode = function () {
    return Companion_getInstance_1().unorderedHashCode_dxd51x_k$(this);
  };
  AbstractMutableSet.$metadata$ = {
    simpleName: 'AbstractMutableSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function ArrayList_init_$Init$($this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(Object.create(ArrayList.prototype));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, Object.create(ArrayList.prototype));
  }
  function rangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkElementIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function insertionRangeCheck($this, index) {
    var tmp$ret$0;
    $l$block: {
      {
      }
      {
        Companion_getInstance().checkPositionIndex_rvwcgf_k$(index, $this._get_size__0_k$());
      }
      tmp$ret$0 = index;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function ArrayList(array) {
    AbstractMutableList.call(this);
    this._array = array;
    this._isReadOnly = false;
  }
  ArrayList.prototype._get_size__0_k$ = function () {
    return this._array.length;
  };
  ArrayList.prototype.get_ha5a7z_k$ = function (index) {
    var tmp = this._array[rangeCheck(this, index)];
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  ArrayList.prototype.add_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.push(element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    return true;
  };
  ArrayList.prototype.add_vz2mgm_k$ = function (index, element) {
    this.checkIsMutable_sv8swh_k$();
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._array;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0.splice(insertionRangeCheck(this, index), 0, element);
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.removeAt_ha5a7z_k$ = function (index) {
    this.checkIsMutable_sv8swh_k$();
    rangeCheck(this, index);
    Unit_getInstance();
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
    var tmp;
    if (index === _get_lastIndex_(this)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_asDynamic_0 = this._array;
        tmp$ret$0 = tmp0_asDynamic_0;
        break $l$block;
      }
      tmp = tmp$ret$0.pop();
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_asDynamic_0 = this._array;
        tmp$ret$1 = tmp1_asDynamic_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1.splice(index, 1)[0];
    }
    return tmp;
  };
  ArrayList.prototype.remove_2bq_k$ = function (element) {
    this.checkIsMutable_sv8swh_k$();
    var inductionVariable = 0;
    var last = this._array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals_0(this._array[index], element)) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = this._array;
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }
          tmp$ret$0.splice(index, 1);
          var tmp1_this = this;
          var tmp2 = tmp1_this._get_modCount__0_k$();
          tmp1_this._set_modCount__majfzk_k$(tmp2 + 1 | 0);
          Unit_getInstance();
          return true;
        }}
       while (inductionVariable <= last);
    return false;
  };
  ArrayList.prototype.clear_sv8swh_k$ = function () {
    this.checkIsMutable_sv8swh_k$();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = [];
      break $l$block;
    }
    tmp._array = tmp$ret$0;
    var tmp0_this = this;
    var tmp1 = tmp0_this._get_modCount__0_k$();
    tmp0_this._set_modCount__majfzk_k$(tmp1 + 1 | 0);
    Unit_getInstance();
  };
  ArrayList.prototype.indexOf_2bq_k$ = function (element) {
    return indexOf(this._array, element);
  };
  ArrayList.prototype.toString = function () {
    return arrayToString(this._array);
  };
  ArrayList.prototype.toArray_0_k$ = function () {
    return [].slice.call(this._array);
  };
  ArrayList.prototype.toArray = function () {
    return this.toArray_0_k$();
  };
  ArrayList.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly)
      throw UnsupportedOperationException_init_$Create$();
  };
  ArrayList.$metadata$ = {
    simpleName: 'ArrayList',
    kind: 'class',
    interfaces: [MutableList, RandomAccess]
  };
  function HashCode() {
    HashCode_instance = this;
  }
  HashCode.prototype.equals_rvz98i_k$ = function (value1, value2) {
    return equals_0(value1, value2);
  };
  HashCode.prototype.getHashCode_wi7j7l_k$ = function (value) {
    var tmp0_safe_receiver = value;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  HashCode.$metadata$ = {
    simpleName: 'HashCode',
    kind: 'object',
    interfaces: [EqualityComparator]
  };
  var HashCode_instance;
  function HashCode_getInstance() {
    if (HashCode_instance == null)
      new HashCode();
    return HashCode_instance;
  }
  function EqualityComparator() {
  }
  EqualityComparator.$metadata$ = {
    simpleName: 'EqualityComparator',
    kind: 'interface',
    interfaces: []
  };
  function EntrySet($outer) {
    this._$this_0 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_0.containsEntry_7gsh9e_k$(element);
  };
  EntrySet.prototype.iterator_0_k$ = function () {
    return this._$this_0._internalMap.iterator_0_k$();
  };
  EntrySet.prototype._get_size__0_k$ = function () {
    return this._$this_0._get_size__0_k$();
  };
  EntrySet.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this._internalMap = internalMap;
    $this._equality = internalMap._get_equality__0_k$();
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(new InternalHashCodeMap(HashCode_getInstance()), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(Object.create(HashMap.prototype));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_0($this);
    {
      var tmp0_require_0 = initialCapacity >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Negative initial capacity: ' + initialCapacity;
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    {
      var tmp1_require_0 = loadFactor >= 0;
      {
      }
      if (!tmp1_require_0) {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = '' + 'Non-positive load factor: ' + loadFactor;
          break $l$block_0;
        }
        var message_1_0 = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1_0));
      }}
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity, loadFactor) {
    return HashMap_init_$Init$_1(initialCapacity, loadFactor, Object.create(HashMap.prototype));
  }
  HashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._internalMap.contains_2bw_k$(key);
  };
  HashMap.prototype._get_entries__0_k$ = function () {
    if (this.__entries == null) {
      this.__entries = this.createEntrySet_0_k$();
    }return ensureNotNull(this.__entries);
  };
  HashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet(this);
  };
  HashMap.prototype.get_2bw_k$ = function (key) {
    return this._internalMap.get_2bw_k$(key);
  };
  HashMap.prototype.put_1q9pf_k$ = function (key, value) {
    return this._internalMap.put_1q9pf_k$(key, value);
  };
  HashMap.prototype.remove_2bw_k$ = function (key) {
    return this._internalMap.remove_2bw_k$(key);
  };
  HashMap.prototype._get_size__0_k$ = function () {
    return this._internalMap._get_size__0_k$();
  };
  function HashMap() {
    this.__entries = null;
  }
  HashMap.$metadata$ = {
    simpleName: 'HashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function HashSet_init_$Init$(initialCapacity, loadFactor, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this._map = HashMap_init_$Create$_0(initialCapacity, loadFactor);
    return $this;
  }
  function HashSet_init_$Init$_0(initialCapacity, $this) {
    HashSet_init_$Init$(initialCapacity, 0.0, $this);
    return $this;
  }
  function HashSet_init_$Create$(initialCapacity) {
    return HashSet_init_$Init$_0(initialCapacity, Object.create(HashSet.prototype));
  }
  HashSet.prototype.add_2bq_k$ = function (element) {
    var old = this._map.put_1q9pf_k$(element, this);
    return old == null;
  };
  HashSet.prototype.contains_2bq_k$ = function (element) {
    return this._map.containsKey_2bw_k$(element);
  };
  HashSet.prototype.isEmpty_0_k$ = function () {
    return this._map.isEmpty_0_k$();
  };
  HashSet.prototype.iterator_0_k$ = function () {
    return this._map._get_keys__0_k$().iterator_0_k$();
  };
  HashSet.prototype._get_size__0_k$ = function () {
    return this._map._get_size__0_k$();
  };
  function HashSet() {
  }
  HashSet.$metadata$ = {
    simpleName: 'HashSet',
    kind: 'class',
    interfaces: [MutableSet]
  };
  function computeNext($this) {
    if ($this._chainOrEntry != null ? $this._isChain : false) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = $this._chainOrEntry;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      var chainSize = tmp$ret$0.length;
      var tmp0_this = $this;
      tmp0_this._itemIndex = tmp0_this._itemIndex + 1 | 0;
      if (tmp0_this._itemIndex < chainSize)
        return 0;
      else {
      }
    }var tmp1_this = $this;
    tmp1_this._keyIndex = tmp1_this._keyIndex + 1 | 0;
    if (tmp1_this._keyIndex < $this._keys.length) {
      $this._chainOrEntry = $this._this$0_2._backingMap[$this._keys[$this._keyIndex]];
      var tmp = $this;
      var tmp_0 = $this._chainOrEntry;
      tmp._isChain = !(tmp_0 == null) ? isArray(tmp_0) : false;
      $this._itemIndex = 0;
      return 0;
    } else {
      {
        $this._chainOrEntry = null;
        return 1;
      }
    }
  }
  function getEntry($this, key) {
    var tmp0_elvis_lhs = getChainOrEntryOrNull($this, $this._equality_0.getHashCode_wi7j7l_k$(key));
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if ($this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
        return entry;
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        return findEntryInChain(chain, $this, key);
      }
    }
  }
  function findEntryInChain(_this_, $this, key) {
    var tmp$ret$1;
    $l$block_1: {
      var indexedObject = _this_;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element_2 = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = $this._equality_0.equals_rvz98i_k$(element_2._get_key__0_k$(), key);
          break $l$block;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element_2;
          break $l$block_1;
        } else {
        }
      }
      tmp$ret$1 = null;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function getChainOrEntryOrNull($this, hashCode_1) {
    var chainOrEntry = $this._backingMap[hashCode_1];
    return chainOrEntry === undefined ? null : chainOrEntry;
  }
  function _no_name_provided__3(this$0) {
    this._this$0_2 = this$0;
    this._state = -1;
    this._keys = Object.keys(this._this$0_2._backingMap);
    this._keyIndex = -1;
    this._chainOrEntry = null;
    this._isChain = false;
    this._itemIndex = -1;
    this._lastEntry = null;
  }
  _no_name_provided__3.prototype.hasNext_0_k$ = function () {
    if (this._state === -1)
      this._state = computeNext(this);
    return this._state === 0;
  };
  _no_name_provided__3.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var tmp;
    if (this._isChain) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0[this._itemIndex];
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_unsafeCast_0 = this._chainOrEntry;
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var lastEntry = tmp;
    this._lastEntry = lastEntry;
    this._state = -1;
    return lastEntry;
  };
  _no_name_provided__3.prototype.remove_sv8swh_k$ = function () {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_checkNotNull_0 = this._lastEntry;
      {
      }
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        if (tmp0_checkNotNull_0 == null) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Required value was null.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_1(message_2_1));
        } else {
          tmp$ret$1 = tmp0_checkNotNull_0;
          break $l$block_0;
        }
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    Unit_getInstance();
    this._this$0_2.remove_2bw_k$(ensureNotNull(this._lastEntry)._get_key__0_k$());
    Unit_getInstance();
    this._lastEntry = null;
    var tmp0_this = this;
    var tmp1 = tmp0_this._itemIndex;
    tmp0_this._itemIndex = tmp1 - 1 | 0;
    Unit_getInstance();
  };
  _no_name_provided__3.$metadata$ = {
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function InternalHashCodeMap(equality) {
    this._equality_0 = equality;
    this._backingMap = this.createJsMap_0_k$();
    this._size = 0;
  }
  InternalHashCodeMap.prototype._get_equality__0_k$ = function () {
    return this._equality_0;
  };
  InternalHashCodeMap.prototype._get_size__0_k$ = function () {
    return this._size;
  };
  InternalHashCodeMap.prototype.put_1q9pf_k$ = function (key, value) {
    var hashCode_1 = this._equality_0.getHashCode_wi7j7l_k$(key);
    var chainOrEntry = getChainOrEntryOrNull(this, hashCode_1);
    if (chainOrEntry == null) {
      this._backingMap[hashCode_1] = new SimpleEntry(key, value);
    } else {
      if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
        var entry = chainOrEntry;
        if (this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
          return entry.setValue_2c7_k$(value);
        } else {
          var tmp$ret$2;
          $l$block_1: {
            var tmp0_arrayOf_0 = [entry, new SimpleEntry(key, value)];
            var tmp$ret$1;
            $l$block_0: {
              var tmp$ret$0;
              $l$block: {
                tmp$ret$0 = tmp0_arrayOf_0;
                break $l$block;
              }
              tmp$ret$1 = tmp$ret$0;
              break $l$block_0;
            }
            tmp$ret$2 = tmp$ret$1;
            break $l$block_1;
          }
          this._backingMap[hashCode_1] = tmp$ret$2;
          var tmp0_this = this;
          var tmp1 = tmp0_this._size;
          tmp0_this._size = tmp1 + 1 | 0;
          Unit_getInstance();
          return null;
        }
      } else {
        {
          var chain = chainOrEntry;
          var entry_0 = findEntryInChain(chain, this, key);
          if (!(entry_0 == null)) {
            return entry_0.setValue_2c7_k$(value);
          }var tmp$ret$3;
          $l$block_2: {
            tmp$ret$3 = chain;
            break $l$block_2;
          }
          tmp$ret$3.push(new SimpleEntry(key, value));
        }
      }
    }
    var tmp2_this = this;
    var tmp3 = tmp2_this._size;
    tmp2_this._size = tmp3 + 1 | 0;
    Unit_getInstance();
    return null;
  };
  InternalHashCodeMap.prototype.remove_2bw_k$ = function (key) {
    var hashCode_1 = this._equality_0.getHashCode_wi7j7l_k$(key);
    var tmp0_elvis_lhs = getChainOrEntryOrNull(this, hashCode_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var chainOrEntry = tmp;
    if (!(!(chainOrEntry == null) ? isArray(chainOrEntry) : false)) {
      var entry = chainOrEntry;
      if (this._equality_0.equals_rvz98i_k$(entry._get_key__0_k$(), key)) {
        jsDeleteProperty(this._backingMap, hashCode_1);
        var tmp1_this = this;
        var tmp2 = tmp1_this._size;
        tmp1_this._size = tmp2 - 1 | 0;
        Unit_getInstance();
        return entry._get_value__0_k$();
      } else {
        return null;
      }
    } else {
      {
        var chain = chainOrEntry;
        var inductionVariable = 0;
        var last = chain.length - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var entry_0 = chain[index];
            if (this._equality_0.equals_rvz98i_k$(key, entry_0._get_key__0_k$())) {
              if (chain.length === 1) {
                var tmp$ret$0;
                $l$block: {
                  tmp$ret$0 = chain;
                  break $l$block;
                }
                tmp$ret$0.length = 0;
                jsDeleteProperty(this._backingMap, hashCode_1);
              } else {
                var tmp$ret$1;
                $l$block_0: {
                  tmp$ret$1 = chain;
                  break $l$block_0;
                }
                tmp$ret$1.splice(index, 1);
              }
              var tmp4_this = this;
              var tmp5 = tmp4_this._size;
              tmp4_this._size = tmp5 - 1 | 0;
              Unit_getInstance();
              return entry_0._get_value__0_k$();
            }}
           while (inductionVariable <= last);
      }
    }
    return null;
  };
  InternalHashCodeMap.prototype.contains_2bw_k$ = function (key) {
    return !(getEntry(this, key) == null);
  };
  InternalHashCodeMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = getEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  InternalHashCodeMap.prototype.iterator_0_k$ = function () {
    return new _no_name_provided__3(this);
  };
  InternalHashCodeMap.$metadata$ = {
    simpleName: 'InternalHashCodeMap',
    kind: 'class',
    interfaces: [InternalMap]
  };
  function InternalMap() {
  }
  InternalMap.prototype.createJsMap_0_k$ = function () {
    var result = Object.create(null);
    result['foo'] = 1;
    jsDeleteProperty(result, 'foo');
    return result;
  };
  InternalMap.$metadata$ = {
    simpleName: 'InternalMap',
    kind: 'interface',
    interfaces: [MutableIterable]
  };
  function EntryIterator($outer) {
    this._$this_1 = $outer;
    this._last_0 = null;
    this._next_0 = null;
    this._next_0 = this._$this_1._$this_3._head;
  }
  EntryIterator.prototype.hasNext_0_k$ = function () {
    return !(this._next_0 === null);
  };
  EntryIterator.prototype.next_0_k$ = function () {
    if (!this.hasNext_0_k$())
      throw NoSuchElementException_init_$Create$();
    var current = ensureNotNull(this._next_0);
    this._last_0 = current;
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_takeIf_0 = current._next_1;
      {
      }
      var tmp_0;
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = !(tmp0_takeIf_0 === this._$this_1._$this_3._head);
        break $l$block;
      }
      if (tmp$ret$0) {
        tmp_0 = tmp0_takeIf_0;
      } else {
        {
          tmp_0 = null;
        }
      }
      tmp$ret$1 = tmp_0;
      break $l$block_0;
    }
    tmp._next_0 = tmp$ret$1;
    return current;
  };
  EntryIterator.prototype.remove_sv8swh_k$ = function () {
    {
      var tmp0_check_0 = !(this._last_0 == null);
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_1(message_2_1));
        }}
    }
    this._$this_1.checkIsMutable_sv8swh_k$();
    remove(ensureNotNull(this._last_0), this._$this_1._$this_3);
    this._$this_1._$this_3._map_0.remove_2bw_k$(ensureNotNull(this._last_0)._get_key__0_k$());
    Unit_getInstance();
    this._last_0 = null;
  };
  EntryIterator.$metadata$ = {
    simpleName: 'EntryIterator',
    kind: 'class',
    interfaces: [MutableIterator]
  };
  function ChainEntry($outer, key, value) {
    this._$this_2 = $outer;
    SimpleEntry.call(this, key, value);
    this._next_1 = null;
    this._prev = null;
  }
  ChainEntry.prototype.setValue_2c7_k$ = function (newValue) {
    this._$this_2.checkIsMutable_sv8swh_k$();
    return SimpleEntry.prototype.setValue_2c7_k$.call(this, newValue);
  };
  ChainEntry.$metadata$ = {
    simpleName: 'ChainEntry',
    kind: 'class',
    interfaces: []
  };
  function EntrySet_0($outer) {
    this._$this_3 = $outer;
    AbstractEntrySet.call(this);
  }
  EntrySet_0.prototype.add_qbahou_k$ = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on entries');
  };
  EntrySet_0.prototype.add_2bq_k$ = function (element) {
    return this.add_qbahou_k$((!(element == null) ? isInterface(element, MutableEntry) : false) ? element : THROW_CCE());
  };
  EntrySet_0.prototype.containsEntry_4v0zae_k$ = function (element) {
    return this._$this_3.containsEntry_7gsh9e_k$(element);
  };
  EntrySet_0.prototype.iterator_0_k$ = function () {
    return new EntryIterator(this);
  };
  EntrySet_0.prototype._get_size__0_k$ = function () {
    return this._$this_3._get_size__0_k$();
  };
  EntrySet_0.prototype.checkIsMutable_sv8swh_k$ = function () {
    return this._$this_3.checkIsMutable_sv8swh_k$();
  };
  EntrySet_0.$metadata$ = {
    simpleName: 'EntrySet',
    kind: 'class',
    interfaces: []
  };
  function addToEnd(_this_, $this) {
    {
      var tmp0_check_0 = _this_._next_1 == null ? _this_._prev == null : false;
      {
      }
      {
        {
        }
        if (!tmp0_check_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Check failed.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalStateException_init_$Create$(toString_1(message_2_1));
        }}
    }
    var _head = $this._head;
    if (_head == null) {
      $this._head = _this_;
      _this_._next_1 = _this_;
      _this_._prev = _this_;
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp1_checkNotNull_0 = _head._prev;
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          if (tmp1_checkNotNull_0 == null) {
            var tmp$ret$1;
            $l$block_0: {
              tmp$ret$1 = 'Required value was null.';
              break $l$block_0;
            }
            var message_2_1_0 = tmp$ret$1;
            throw IllegalStateException_init_$Create$(toString_1(message_2_1_0));
          } else {
            tmp$ret$2 = tmp1_checkNotNull_0;
            break $l$block_1;
          }
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      var _tail = tmp$ret$3;
      _this_._prev = _tail;
      _this_._next_1 = _head;
      _head._prev = _this_;
      _tail._next_1 = _this_;
    }
  }
  function remove(_this_, $this) {
    if (_this_._next_1 === _this_) {
      $this._head = null;
    } else {
      if ($this._head === _this_) {
        $this._head = _this_._next_1;
      }ensureNotNull(_this_._next_1)._prev = _this_._prev;
      ensureNotNull(_this_._prev)._next_1 = _this_._next_1;
    }
    _this_._next_1 = null;
    _this_._prev = null;
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    $this._map_0 = HashMap_init_$Create$();
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(Object.create(LinkedHashMap.prototype));
  }
  LinkedHashMap.prototype.containsKey_2bw_k$ = function (key) {
    return this._map_0.containsKey_2bw_k$(key);
  };
  LinkedHashMap.prototype.createEntrySet_0_k$ = function () {
    return new EntrySet_0(this);
  };
  LinkedHashMap.prototype.get_2bw_k$ = function (key) {
    var tmp0_safe_receiver = this._map_0.get_2bw_k$(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_value__0_k$();
  };
  LinkedHashMap.prototype.put_1q9pf_k$ = function (key, value) {
    this.checkIsMutable_sv8swh_k$();
    var old = this._map_0.get_2bw_k$(key);
    if (old == null) {
      var newEntry = new ChainEntry(this, key, value);
      this._map_0.put_1q9pf_k$(key, newEntry);
      Unit_getInstance();
      addToEnd(newEntry, this);
      return null;
    } else {
      return old.setValue_2c7_k$(value);
    }
  };
  LinkedHashMap.prototype.remove_2bw_k$ = function (key) {
    this.checkIsMutable_sv8swh_k$();
    var entry = this._map_0.remove_2bw_k$(key);
    if (!(entry == null)) {
      remove(entry, this);
      return entry._get_value__0_k$();
    }return null;
  };
  LinkedHashMap.prototype._get_size__0_k$ = function () {
    return this._map_0._get_size__0_k$();
  };
  LinkedHashMap.prototype.checkIsMutable_sv8swh_k$ = function () {
    if (this._isReadOnly_0)
      throw UnsupportedOperationException_init_$Create$();
  };
  function LinkedHashMap() {
    this._head = null;
    this._isReadOnly_0 = false;
  }
  LinkedHashMap.$metadata$ = {
    simpleName: 'LinkedHashMap',
    kind: 'class',
    interfaces: [MutableMap]
  };
  function RandomAccess() {
  }
  RandomAccess.$metadata$ = {
    simpleName: 'RandomAccess',
    kind: 'interface',
    interfaces: []
  };
  var output;
  function BaseOutput() {
  }
  BaseOutput.prototype.println_sv8swh_k$ = function () {
    this.print_qi8yb4_k$('\n');
  };
  BaseOutput.prototype.println_qi8yb4_k$ = function (message) {
    this.print_qi8yb4_k$(message);
    this.println_sv8swh_k$();
  };
  BaseOutput.$metadata$ = {
    simpleName: 'BaseOutput',
    kind: 'class',
    interfaces: []
  };
  function NodeJsOutput_0(outputStream) {
    BaseOutput.call(this);
    this._outputStream = outputStream;
  }
  NodeJsOutput_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var messageString = tmp$ret$0;
    this._outputStream.write(messageString);
  };
  NodeJsOutput_0.$metadata$ = {
    simpleName: 'NodeJsOutput',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutputToConsoleLog_0() {
    BufferedOutput_0.call(this);
  }
  BufferedOutputToConsoleLog_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    var s = tmp$ret$0;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_nativeLastIndexOf_0 = s;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = tmp0_nativeLastIndexOf_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1.lastIndexOf('\n', 0);
      break $l$block_1;
    }
    var i = tmp$ret$2;
    if (i >= 0) {
      var tmp0_this = this;
      var tmp = tmp0_this._get_buffer__0_k$();
      var tmp$ret$4;
      $l$block_3: {
        var tmp1_substring_0 = s;
        var tmp$ret$3;
        $l$block_2: {
          tmp$ret$3 = tmp1_substring_0;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3.substring(0, i);
        break $l$block_3;
      }
      tmp0_this._set_buffer__a4enbm_k$(tmp + tmp$ret$4);
      this.flush_sv8swh_k$();
      var tmp$ret$6;
      $l$block_5: {
        var tmp2_substring_0 = s;
        var tmp3_substring_0 = i + 1 | 0;
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = tmp2_substring_0;
          break $l$block_4;
        }
        tmp$ret$6 = tmp$ret$5.substring(tmp3_substring_0);
        break $l$block_5;
      }
      s = tmp$ret$6;
    }var tmp1_this = this;
    tmp1_this._set_buffer__a4enbm_k$(tmp1_this._get_buffer__0_k$() + s);
  };
  BufferedOutputToConsoleLog_0.prototype.flush_sv8swh_k$ = function () {
    console.log(this._get_buffer__0_k$());
    this._set_buffer__a4enbm_k$('');
  };
  BufferedOutputToConsoleLog_0.$metadata$ = {
    simpleName: 'BufferedOutputToConsoleLog',
    kind: 'class',
    interfaces: []
  };
  function BufferedOutput_0() {
    BaseOutput.call(this);
    this._buffer = '';
  }
  BufferedOutput_0.prototype._set_buffer__a4enbm_k$ = function (_set___) {
    this._buffer = _set___;
  };
  BufferedOutput_0.prototype._get_buffer__0_k$ = function () {
    return this._buffer;
  };
  BufferedOutput_0.prototype.print_qi8yb4_k$ = function (message) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._buffer;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = String(message);
      break $l$block;
    }
    tmp._buffer = tmp_0 + tmp$ret$0;
  };
  BufferedOutput_0.$metadata$ = {
    simpleName: 'BufferedOutput',
    kind: 'class',
    interfaces: []
  };
  function println(message) {
    output.println_qi8yb4_k$(message);
  }
  function output$init$() {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var isNode_2 = typeof process !== 'undefined' && process.versions && !!process.versions.node;
        tmp$ret$0 = isNode_2 ? new NodeJsOutput_0(process.stdout) : new BufferedOutputToConsoleLog_0();
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function CancellationException_init_$Init$(message, $this) {
    IllegalStateException_init_$Init$(message, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException_init_$Create$(message) {
    var tmp = CancellationException_init_$Init$(message, Object.create(CancellationException.prototype));
    captureStack(tmp, CancellationException_init_$Create$);
    return tmp;
  }
  function CancellationException_init_$Init$_0(message, cause, $this) {
    IllegalStateException_init_$Init$_0(message, cause, $this);
    CancellationException.call($this);
    return $this;
  }
  function CancellationException() {
    captureStack(this, CancellationException);
  }
  CancellationException.$metadata$ = {
    simpleName: 'CancellationException',
    kind: 'class',
    interfaces: []
  };
  function Serializable() {
  }
  Serializable.$metadata$ = {
    simpleName: 'Serializable',
    kind: 'interface',
    interfaces: []
  };
  function isNaN_0(_this_) {
    return !(_this_ === _this_);
  }
  function defaultPlatformRandom() {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Math.random() * Math.pow(2, 32) | 0;
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return Random_0(tmp$ret$0);
  }
  function _get_js_(_this_) {
    return (_this_ instanceof KClassImpl ? _this_ : THROW_CCE())._get_jClass__0_k$();
  }
  function KCallable() {
  }
  KCallable.$metadata$ = {
    simpleName: 'KCallable',
    kind: 'interface',
    interfaces: []
  };
  function KClass() {
  }
  KClass.$metadata$ = {
    simpleName: 'KClass',
    kind: 'interface',
    interfaces: [KClassifier]
  };
  function KClassImpl(jClass) {
    this._jClass = jClass;
  }
  KClassImpl.prototype._get_jClass__0_k$ = function () {
    return this._jClass;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals_0(this._get_jClass__0_k$(), other._get_jClass__0_k$());
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this._get_simpleName__0_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return '' + 'class ' + this._get_simpleName__0_k$();
  };
  KClassImpl.$metadata$ = {
    simpleName: 'KClassImpl',
    kind: 'class',
    interfaces: [KClass]
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this._givenSimpleName = givenSimpleName;
    this._isInstanceFunction = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    else {
    }
    return KClassImpl.prototype.equals.call(this, other) ? this._givenSimpleName === other._givenSimpleName : false;
  };
  PrimitiveKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._givenSimpleName;
  };
  PrimitiveKClassImpl.$metadata$ = {
    simpleName: 'PrimitiveKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this._simpleName = 'Nothing';
  }
  NothingKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName;
  };
  NothingKClassImpl.prototype._get_jClass__0_k$ = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = {
    simpleName: 'NothingKClassImpl',
    kind: 'object',
    interfaces: []
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype._get_simpleName__0_k$ = function () {
    throw IllegalStateException_init_$Create$('Unknown simpleName for ErrorKClass');
  };
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = {
    simpleName: 'ErrorKClass',
    kind: 'class',
    interfaces: [KClass]
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = jClass;
        break $l$block;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block_0;
    }
    tmp._simpleName_0 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype._get_simpleName__0_k$ = function () {
    return this._simpleName_0;
  };
  SimpleKClassImpl.$metadata$ = {
    simpleName: 'SimpleKClassImpl',
    kind: 'class',
    interfaces: []
  };
  function KFunction() {
  }
  KFunction.$metadata$ = {
    simpleName: 'KFunction',
    kind: 'interface',
    interfaces: [KCallable]
  };
  function KProperty1() {
  }
  KProperty1.$metadata$ = {
    simpleName: 'KProperty1',
    kind: 'interface',
    interfaces: [KProperty]
  };
  function KProperty() {
  }
  KProperty.$metadata$ = {
    simpleName: 'KProperty',
    kind: 'interface',
    interfaces: [KCallable]
  };
  var functionClasses;
  function _no_name_provided__4() {
  }
  _no_name_provided__4.prototype.invoke_wi7j7l_k$ = function (it) {
    return isObject(it);
  };
  _no_name_provided__4.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__4.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__5() {
  }
  _no_name_provided__5.prototype.invoke_wi7j7l_k$ = function (it) {
    return isNumber(it);
  };
  _no_name_provided__5.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__5.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__6() {
  }
  _no_name_provided__6.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  };
  _no_name_provided__6.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__6.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__7() {
  }
  _no_name_provided__7.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__7.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__7.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__8() {
  }
  _no_name_provided__8.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__8.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__8.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__9() {
  }
  _no_name_provided__9.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__9.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__9.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__10() {
  }
  _no_name_provided__10.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__10.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__10.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__11() {
  }
  _no_name_provided__11.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'number' : false;
  };
  _no_name_provided__11.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__11.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__12() {
  }
  _no_name_provided__12.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isArray(it) : false;
  };
  _no_name_provided__12.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__12.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__13() {
  }
  _no_name_provided__13.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? typeof it === 'string' : false;
  };
  _no_name_provided__13.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__13.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__14() {
  }
  _no_name_provided__14.prototype.invoke_wi7j7l_k$ = function (it) {
    return it instanceof Error;
  };
  _no_name_provided__14.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__14.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__15() {
  }
  _no_name_provided__15.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isBooleanArray(it) : false;
  };
  _no_name_provided__15.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__15.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__16() {
  }
  _no_name_provided__16.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isCharArray(it) : false;
  };
  _no_name_provided__16.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__16.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__17() {
  }
  _no_name_provided__17.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isByteArray(it) : false;
  };
  _no_name_provided__17.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__17.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__18() {
  }
  _no_name_provided__18.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isShortArray(it) : false;
  };
  _no_name_provided__18.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__18.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__19() {
  }
  _no_name_provided__19.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isIntArray(it) : false;
  };
  _no_name_provided__19.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__19.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__20() {
  }
  _no_name_provided__20.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isLongArray(it) : false;
  };
  _no_name_provided__20.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__20.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__21() {
  }
  _no_name_provided__21.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isFloatArray(it) : false;
  };
  _no_name_provided__21.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__21.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__22() {
  }
  _no_name_provided__22.prototype.invoke_wi7j7l_k$ = function (it) {
    return !(it == null) ? isDoubleArray(it) : false;
  };
  _no_name_provided__22.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__22.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__23($arity) {
    this._$arity = $arity;
  }
  _no_name_provided__23.prototype.invoke_wi7j7l_k$ = function (it) {
    var tmp;
    if (typeof it === 'function') {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = it;
        break $l$block;
      }
      tmp = tmp$ret$0.length === this._$arity;
    } else {
      tmp = false;
    }
    return tmp;
  };
  _no_name_provided__23.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__23.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function PrimitiveClasses_0() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object;
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    var tmp_0 = tmp$ret$0;
    tmp._anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', _no_name_provided_$factory_1());
    var tmp_1 = this;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0_0;
      break $l$block_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1._numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', _no_name_provided_$factory_2());
    this._nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp0_unsafeCast_0_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_0_1;
      break $l$block_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3._booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', _no_name_provided_$factory_3());
    var tmp_5 = this;
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_unsafeCast_0_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_0_2;
      break $l$block_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5._byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', _no_name_provided_$factory_4());
    var tmp_7 = this;
    var tmp$ret$4;
    $l$block_3: {
      var tmp0_unsafeCast_0_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_0_3;
      break $l$block_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7._shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', _no_name_provided_$factory_5());
    var tmp_9 = this;
    var tmp$ret$5;
    $l$block_4: {
      var tmp0_unsafeCast_0_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_0_4;
      break $l$block_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9._intClass = new PrimitiveKClassImpl(tmp_10, 'Int', _no_name_provided_$factory_6());
    var tmp_11 = this;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_unsafeCast_0_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_0_5;
      break $l$block_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11._floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', _no_name_provided_$factory_7());
    var tmp_13 = this;
    var tmp$ret$7;
    $l$block_6: {
      var tmp0_unsafeCast_0_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_0_6;
      break $l$block_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13._doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', _no_name_provided_$factory_8());
    var tmp_15 = this;
    var tmp$ret$8;
    $l$block_7: {
      var tmp0_unsafeCast_0_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_0_7;
      break $l$block_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15._arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', _no_name_provided_$factory_9());
    var tmp_17 = this;
    var tmp$ret$9;
    $l$block_8: {
      var tmp0_unsafeCast_0_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_0_8;
      break $l$block_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17._stringClass = new PrimitiveKClassImpl(tmp_18, 'String', _no_name_provided_$factory_10());
    var tmp_19 = this;
    var tmp$ret$10;
    $l$block_9: {
      var tmp0_unsafeCast_0_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_0_9;
      break $l$block_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19._throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', _no_name_provided_$factory_11());
    var tmp_21 = this;
    var tmp$ret$11;
    $l$block_10: {
      var tmp0_unsafeCast_0_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_0_10;
      break $l$block_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21._booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', _no_name_provided_$factory_12());
    var tmp_23 = this;
    var tmp$ret$12;
    $l$block_11: {
      var tmp0_unsafeCast_0_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_0_11;
      break $l$block_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23._charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', _no_name_provided_$factory_13());
    var tmp_25 = this;
    var tmp$ret$13;
    $l$block_12: {
      var tmp0_unsafeCast_0_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_0_12;
      break $l$block_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25._byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', _no_name_provided_$factory_14());
    var tmp_27 = this;
    var tmp$ret$14;
    $l$block_13: {
      var tmp0_unsafeCast_0_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_0_13;
      break $l$block_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27._shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', _no_name_provided_$factory_15());
    var tmp_29 = this;
    var tmp$ret$15;
    $l$block_14: {
      var tmp0_unsafeCast_0_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_0_14;
      break $l$block_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29._intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', _no_name_provided_$factory_16());
    var tmp_31 = this;
    var tmp$ret$16;
    $l$block_15: {
      var tmp0_unsafeCast_0_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_0_15;
      break $l$block_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31._longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', _no_name_provided_$factory_17());
    var tmp_33 = this;
    var tmp$ret$17;
    $l$block_16: {
      var tmp0_unsafeCast_0_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_0_16;
      break $l$block_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33._floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', _no_name_provided_$factory_18());
    var tmp_35 = this;
    var tmp$ret$18;
    $l$block_17: {
      var tmp0_unsafeCast_0_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_0_17;
      break $l$block_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35._doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', _no_name_provided_$factory_19());
  }
  PrimitiveClasses_0.prototype._get_anyClass__0_k$ = function () {
    return this._anyClass;
  };
  PrimitiveClasses_0.prototype._get_numberClass__0_k$ = function () {
    return this._numberClass;
  };
  PrimitiveClasses_0.prototype._get_nothingClass__0_k$ = function () {
    return this._nothingClass;
  };
  PrimitiveClasses_0.prototype._get_booleanClass__0_k$ = function () {
    return this._booleanClass;
  };
  PrimitiveClasses_0.prototype._get_byteClass__0_k$ = function () {
    return this._byteClass;
  };
  PrimitiveClasses_0.prototype._get_shortClass__0_k$ = function () {
    return this._shortClass;
  };
  PrimitiveClasses_0.prototype._get_intClass__0_k$ = function () {
    return this._intClass;
  };
  PrimitiveClasses_0.prototype._get_floatClass__0_k$ = function () {
    return this._floatClass;
  };
  PrimitiveClasses_0.prototype._get_doubleClass__0_k$ = function () {
    return this._doubleClass;
  };
  PrimitiveClasses_0.prototype._get_arrayClass__0_k$ = function () {
    return this._arrayClass;
  };
  PrimitiveClasses_0.prototype._get_stringClass__0_k$ = function () {
    return this._stringClass;
  };
  PrimitiveClasses_0.prototype._get_throwableClass__0_k$ = function () {
    return this._throwableClass;
  };
  PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$ = function () {
    return this._booleanArrayClass;
  };
  PrimitiveClasses_0.prototype._get_charArrayClass__0_k$ = function () {
    return this._charArrayClass;
  };
  PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$ = function () {
    return this._byteArrayClass;
  };
  PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$ = function () {
    return this._shortArrayClass;
  };
  PrimitiveClasses_0.prototype._get_intArrayClass__0_k$ = function () {
    return this._intArrayClass;
  };
  PrimitiveClasses_0.prototype._get_longArrayClass__0_k$ = function () {
    return this._longArrayClass;
  };
  PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$ = function () {
    return this._floatArrayClass;
  };
  PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$ = function () {
    return this._doubleArrayClass;
  };
  PrimitiveClasses_0.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = functionClasses[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      $l$block_2: {
        {
        }
        var tmp$ret$2;
        $l$block_1: {
          var tmp$ret$0;
          $l$block: {
            var tmp0_unsafeCast_0_3 = Function;
            tmp$ret$0 = tmp0_unsafeCast_0_3;
            break $l$block;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = '' + 'Function' + arity;
          var result_2 = new PrimitiveKClassImpl(tmp_0, tmp_1, _no_name_provided_$factory_20(arity));
          var tmp$ret$1;
          $l$block_0: {
            var tmp1_asDynamic_0_5 = functionClasses;
            tmp$ret$1 = tmp1_asDynamic_0_5;
            break $l$block_0;
          }
          tmp$ret$1[arity] = result_2;
          tmp$ret$2 = result_2;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses_0.$metadata$ = {
    simpleName: 'PrimitiveClasses',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(PrimitiveClasses_0.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_anyClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_numberClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_nothingClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_arrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_stringClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_throwableClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_booleanArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_charArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_byteArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_shortArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_intArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_longArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_floatArrayClass__0_k$
  });
  Object.defineProperty(PrimitiveClasses_0.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses_0.prototype._get_doubleArrayClass__0_k$
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses_0();
    return PrimitiveClasses_instance;
  }
  function _no_name_provided_$factory_1() {
    var i = new _no_name_provided__4();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_2() {
    var i = new _no_name_provided__5();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_3() {
    var i = new _no_name_provided__6();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_4() {
    var i = new _no_name_provided__7();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_5() {
    var i = new _no_name_provided__8();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_6() {
    var i = new _no_name_provided__9();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_7() {
    var i = new _no_name_provided__10();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_8() {
    var i = new _no_name_provided__11();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_9() {
    var i = new _no_name_provided__12();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_10() {
    var i = new _no_name_provided__13();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_11() {
    var i = new _no_name_provided__14();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_12() {
    var i = new _no_name_provided__15();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_13() {
    var i = new _no_name_provided__16();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_14() {
    var i = new _no_name_provided__17();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_15() {
    var i = new _no_name_provided__18();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_16() {
    var i = new _no_name_provided__19();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_17() {
    var i = new _no_name_provided__20();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_18() {
    var i = new _no_name_provided__21();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_19() {
    var i = new _no_name_provided__22();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function _no_name_provided_$factory_20($arity) {
    var i = new _no_name_provided__23($arity);
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function functionClasses$init$() {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(0), null);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getKClass_0(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = jClass;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = getKClassM_0(tmp$ret$1);
    } else {
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = jClass;
          break $l$block_1;
        }
        tmp$ret$3 = tmp$ret$2;
        break $l$block_2;
      }
      tmp = getKClass1_0(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM_0(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1_0(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_unsafeCast_0 = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0_unsafeCast_0;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }

        tmp = tmp$ret$1;
        break;
      default:var tmp$ret$3;
        $l$block_2: {
          var tmp1_unsafeCast_0 = new ErrorKClass();
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp1_unsafeCast_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1_0(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0_unsafeCast_0 = PrimitiveClasses_getInstance()._stringClass;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0_unsafeCast_0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      return tmp$ret$1;
    }var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = jClass;
      break $l$block_1;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression_0(e) {
    var tmp$ret$3;
    $l$block_2: {
      var tmp0_subject = typeof e;
      var tmp;
      switch (tmp0_subject) {
        case 'string':
          tmp = PrimitiveClasses_getInstance()._stringClass;
          break;
        case 'number':
          var tmp_0;
          var tmp$ret$0;
          $l$block: {
            var tmp0_asDynamic_0 = jsBitwiseOr(e, 0);
            tmp$ret$0 = tmp0_asDynamic_0;
            break $l$block;
          }

          if (tmp$ret$0 === e) {
            tmp_0 = PrimitiveClasses_getInstance()._intClass;
          } else {
            {
              tmp_0 = PrimitiveClasses_getInstance()._doubleClass;
            }
          }

          tmp = tmp_0;
          break;
        case 'boolean':
          tmp = PrimitiveClasses_getInstance()._booleanClass;
          break;
        case 'function':
          var tmp_1 = PrimitiveClasses_getInstance();
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = e;
            break $l$block_0;
          }

          tmp = tmp_1.functionClass(tmp$ret$1.length);
          break;
        default:var tmp_2;
          if (isBooleanArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance()._booleanArrayClass;
          } else {
            if (isCharArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance()._charArrayClass;
            } else {
              if (isByteArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance()._byteArrayClass;
              } else {
                if (isShortArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance()._shortArrayClass;
                } else {
                  if (isIntArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance()._intArrayClass;
                  } else {
                    if (isLongArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance()._longArrayClass;
                    } else {
                      if (isFloatArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance()._floatArrayClass;
                      } else {
                        if (isDoubleArray(e)) {
                          tmp_2 = PrimitiveClasses_getInstance()._doubleArrayClass;
                        } else {
                          if (isInterface(e, KClass)) {
                            tmp_2 = getKClass_0(KClass);
                          } else {
                            if (isArray(e)) {
                              tmp_2 = PrimitiveClasses_getInstance()._arrayClass;
                            } else {
                              {
                                var constructor = Object.getPrototypeOf(e).constructor;
                                var tmp_3;
                                if (constructor === Object) {
                                  tmp_3 = PrimitiveClasses_getInstance()._anyClass;
                                } else if (constructor === Error) {
                                  tmp_3 = PrimitiveClasses_getInstance()._throwableClass;
                                } else {
                                  var jsClass = constructor;
                                  tmp_3 = getKClass1_0(jsClass);
                                }
                                tmp_2 = tmp_3;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          tmp = tmp_2;
          break;
      }
      var tmp1_unsafeCast_0 = tmp;
      var tmp$ret$2;
      $l$block_1: {
        tmp$ret$2 = tmp1_unsafeCast_0;
        break $l$block_1;
      }
      tmp$ret$3 = tmp$ret$2;
      break $l$block_2;
    }
    return tmp$ret$3;
  }
  function Appendable() {
  }
  Appendable.$metadata$ = {
    simpleName: 'Appendable',
    kind: 'interface',
    interfaces: []
  };
  function CharacterCodingException(message) {
    Exception_init_$Init$_0(message, this);
    captureStack(this, CharacterCodingException);
  }
  CharacterCodingException.$metadata$ = {
    simpleName: 'CharacterCodingException',
    kind: 'class',
    interfaces: []
  };
  function StringBuilder_init_$Init$($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$() {
    return StringBuilder_init_$Init$(Object.create(StringBuilder.prototype));
  }
  function StringBuilder(content) {
    this._string = !(content === undefined) ? content : '';
  }
  StringBuilder.prototype._get_length__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._string;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    return tmp$ret$0.length;
  };
  StringBuilder.prototype.get_ha5a7z_k$ = function (index) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getOrElse_0 = this._string;
      var tmp;
      if (index >= 0 ? index <= _get_lastIndex__0(tmp0_getOrElse_0) : false) {
        tmp = charSequenceGet(tmp0_getOrElse_0, index);
      } else {
        throw IndexOutOfBoundsException_init_$Create$_0('' + 'index: ' + index + ', length: ' + this._get_length__0_k$() + '}');
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    return tmp$ret$0;
  };
  StringBuilder.prototype.append_wi8o78_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + value;
    return this;
  };
  StringBuilder.prototype.append_v1o70a_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_wi7j7l_k$ = function (value) {
    var tmp0_this = this;
    tmp0_this._string = tmp0_this._string + toString_0(value);
    return this;
  };
  StringBuilder.prototype.append_uch40_k$ = function (value) {
    var tmp0_this = this;
    var tmp = tmp0_this;
    var tmp_0 = tmp0_this._string;
    var tmp1_elvis_lhs = value;
    tmp._string = tmp_0 + (tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs);
    return this;
  };
  StringBuilder.prototype.toString = function () {
    return this._string;
  };
  StringBuilder.$metadata$ = {
    simpleName: 'StringBuilder',
    kind: 'class',
    interfaces: [Appendable, CharSequence]
  };
  function uppercaseChar(_this_) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          var tmp0_asDynamic_0 = _this_.toString();
          tmp$ret$0 = tmp0_asDynamic_0;
          break $l$block;
        }
        var tmp1_unsafeCast_0 = tmp$ret$0.toUpperCase();
        tmp$ret$1 = tmp1_unsafeCast_0;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    var uppercase = tmp$ret$2;
    return uppercase.length > 1 ? _this_ : charSequenceGet(uppercase, 0);
  }
  function checkRadix(radix) {
    if (!(2 <= radix ? radix <= 36 : false)) {
      throw IllegalArgumentException_init_$Create$('' + 'radix ' + radix + ' was not in valid range 2..36');
    }return radix;
  }
  function toLong(_this_) {
    var tmp0_elvis_lhs = toLongOrNull(_this_);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      numberFormatError(_this_);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function digitOf(char, radix) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_let_0 = (char.compareTo_wi8o78_k$(new Char(48)) >= 0 ? char.compareTo_wi8o78_k$(new Char(57)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(48)) : (char.compareTo_wi8o78_k$(new Char(65)) >= 0 ? char.compareTo_wi8o78_k$(new Char(90)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(65)) + 10 | 0 : (char.compareTo_wi8o78_k$(new Char(97)) >= 0 ? char.compareTo_wi8o78_k$(new Char(122)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(97)) + 10 | 0 : char.compareTo_wi8o78_k$(new Char(128)) < 0 ? -1 : (char.compareTo_wi8o78_k$(new Char(65313)) >= 0 ? char.compareTo_wi8o78_k$(new Char(65338)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(65313)) + 10 | 0 : (char.compareTo_wi8o78_k$(new Char(65345)) >= 0 ? char.compareTo_wi8o78_k$(new Char(65370)) <= 0 : false) ? char.minus_wi8o78_k$(new Char(65345)) + 10 | 0 : digitToIntImpl(char);
      {
      }
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_let_0 >= radix ? -1 : tmp0_let_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function decodeToString(_this_) {
    return decodeUtf8(_this_, 0, _this_.length, false);
  }
  function encodeToByteArray(_this_) {
    return encodeUtf8(_this_, 0, _this_.length, false);
  }
  function endsWith(_this_, suffix, ignoreCase) {
    if (!ignoreCase) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this_;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.endsWith(suffix);
        break $l$block_0;
      }
      return tmp$ret$1;
    } else
      return regionMatches(_this_, _this_.length - suffix.length | 0, suffix, 0, suffix.length, ignoreCase);
  }
  function endsWith$default(_this_, suffix, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return endsWith(_this_, suffix, ignoreCase);
  }
  function startsWith(_this_, prefix, ignoreCase) {
    if (!ignoreCase) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = _this_;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.startsWith(prefix, 0);
        break $l$block_0;
      }
      return tmp$ret$1;
    } else
      return regionMatches(_this_, 0, prefix, 0, prefix.length, ignoreCase);
  }
  function startsWith$default(_this_, prefix, ignoreCase, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      ignoreCase = false;
    return startsWith(_this_, prefix, ignoreCase);
  }
  function regionMatches(_this_, thisOffset, other, otherOffset, length, ignoreCase) {
    return regionMatchesImpl(_this_, thisOffset, other, otherOffset, length, ignoreCase);
  }
  var REPLACEMENT_BYTE_SEQUENCE;
  function decodeUtf8(bytes, startIndex, endIndex, throwOnMalformed) {
    {
      var tmp0_require_0 = (startIndex >= 0 ? endIndex <= bytes.length : false) ? startIndex <= endIndex : false;
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_1(message_2_1));
        }}
    }
    var byteIndex = startIndex;
    var stringBuilder = StringBuilder_init_$Create$();
    while (byteIndex < endIndex) {
      var tmp0 = byteIndex;
      byteIndex = tmp0 + 1 | 0;
      var byte = bytes[tmp0];
      if (byte >= 0) {
        stringBuilder.append_wi8o78_k$(numberToChar(byte));
        Unit_getInstance();
      } else if (byte >> 5 === -2) {
        var code = codePointFrom2(bytes, byte, byteIndex, endIndex, throwOnMalformed);
        if (code <= 0) {
          stringBuilder.append_wi8o78_k$(new Char(65533));
          Unit_getInstance();
          byteIndex = byteIndex + (-code | 0) | 0;
        } else {
          stringBuilder.append_wi8o78_k$(numberToChar(code));
          Unit_getInstance();
          byteIndex = byteIndex + 1 | 0;
        }
      } else if (byte >> 4 === -2) {
        var code_0 = codePointFrom3(bytes, byte, byteIndex, endIndex, throwOnMalformed);
        if (code_0 <= 0) {
          stringBuilder.append_wi8o78_k$(new Char(65533));
          Unit_getInstance();
          byteIndex = byteIndex + (-code_0 | 0) | 0;
        } else {
          stringBuilder.append_wi8o78_k$(numberToChar(code_0));
          Unit_getInstance();
          byteIndex = byteIndex + 2 | 0;
        }
      } else if (byte >> 3 === -2) {
        var code_1 = codePointFrom4(bytes, byte, byteIndex, endIndex, throwOnMalformed);
        if (code_1 <= 0) {
          stringBuilder.append_wi8o78_k$(new Char(65533));
          Unit_getInstance();
          byteIndex = byteIndex + (-code_1 | 0) | 0;
        } else {
          var high = (code_1 - 65536 | 0) >> 10 | 55296;
          var low = code_1 & 1023 | 56320;
          stringBuilder.append_wi8o78_k$(numberToChar(high));
          Unit_getInstance();
          stringBuilder.append_wi8o78_k$(numberToChar(low));
          Unit_getInstance();
          byteIndex = byteIndex + 3 | 0;
        }
      } else {
        malformed(0, byteIndex, throwOnMalformed);
        Unit_getInstance();
        stringBuilder.append_wi8o78_k$(new Char(65533));
        Unit_getInstance();
      }
    }
    return stringBuilder.toString();
  }
  function encodeUtf8(string, startIndex, endIndex, throwOnMalformed) {
    {
      var tmp0_require_0 = (startIndex >= 0 ? endIndex <= string.length : false) ? startIndex <= endIndex : false;
      {
      }
      {
        {
        }
        if (!tmp0_require_0) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 'Failed requirement.';
            break $l$block;
          }
          var message_2_1 = tmp$ret$0;
          throw IllegalArgumentException_init_$Create$(toString_1(message_2_1));
        }}
    }
    var bytes = new Int8Array(imul(endIndex - startIndex | 0, 3));
    var byteIndex = 0;
    var charIndex = startIndex;
    while (charIndex < endIndex) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp0 = charIndex;
        charIndex = tmp0 + 1 | 0;
        var tmp1__get_code__0 = charSequenceGet(string, tmp0);
        tmp$ret$1 = tmp1__get_code__0.toInt_0_k$();
        break $l$block_0;
      }
      var code = tmp$ret$1;
      if (code < 128) {
        var tmp1 = byteIndex;
        byteIndex = tmp1 + 1 | 0;
        bytes[tmp1] = toByte(code);
      } else if (code < 2048) {
        var tmp2 = byteIndex;
        byteIndex = tmp2 + 1 | 0;
        bytes[tmp2] = toByte(code >> 6 | 192);
        var tmp3 = byteIndex;
        byteIndex = tmp3 + 1 | 0;
        bytes[tmp3] = toByte(code & 63 | 128);
      } else if (code < 55296 ? true : code >= 57344) {
        var tmp4 = byteIndex;
        byteIndex = tmp4 + 1 | 0;
        bytes[tmp4] = toByte(code >> 12 | 224);
        var tmp5 = byteIndex;
        byteIndex = tmp5 + 1 | 0;
        bytes[tmp5] = toByte(code >> 6 & 63 | 128);
        var tmp6 = byteIndex;
        byteIndex = tmp6 + 1 | 0;
        bytes[tmp6] = toByte(code & 63 | 128);
      } else {
        var codePoint = codePointFromSurrogate(string, code, charIndex, endIndex, throwOnMalformed);
        if (codePoint <= 0) {
          var tmp7 = byteIndex;
          byteIndex = tmp7 + 1 | 0;
          bytes[tmp7] = REPLACEMENT_BYTE_SEQUENCE[0];
          var tmp8 = byteIndex;
          byteIndex = tmp8 + 1 | 0;
          bytes[tmp8] = REPLACEMENT_BYTE_SEQUENCE[1];
          var tmp9 = byteIndex;
          byteIndex = tmp9 + 1 | 0;
          bytes[tmp9] = REPLACEMENT_BYTE_SEQUENCE[2];
        } else {
          var tmp10 = byteIndex;
          byteIndex = tmp10 + 1 | 0;
          bytes[tmp10] = toByte(codePoint >> 18 | 240);
          var tmp11 = byteIndex;
          byteIndex = tmp11 + 1 | 0;
          bytes[tmp11] = toByte(codePoint >> 12 & 63 | 128);
          var tmp12 = byteIndex;
          byteIndex = tmp12 + 1 | 0;
          bytes[tmp12] = toByte(codePoint >> 6 & 63 | 128);
          var tmp13 = byteIndex;
          byteIndex = tmp13 + 1 | 0;
          bytes[tmp13] = toByte(codePoint & 63 | 128);
          var tmp14 = charIndex;
          charIndex = tmp14 + 1 | 0;
          Unit_getInstance();
        }
      }
    }
    return bytes.length === byteIndex ? bytes : copyOf(bytes, byteIndex);
  }
  function codePointFrom2(bytes, byte1, index, endIndex, throwOnMalformed) {
    if ((byte1 & 30) === 0 ? true : index >= endIndex) {
      return malformed(0, index, throwOnMalformed);
    }var byte2 = bytes[index];
    if (!((byte2 & 192) === 128)) {
      return malformed(0, index, throwOnMalformed);
    }return byte1 << 6 ^ byte2 ^ 3968;
  }
  function codePointFrom3(bytes, byte1, index, endIndex, throwOnMalformed) {
    if (index >= endIndex) {
      return malformed(0, index, throwOnMalformed);
    }var byte2 = bytes[index];
    if ((byte1 & 15) === 0) {
      if (!((byte2 & 224) === 160)) {
        return malformed(0, index, throwOnMalformed);
      }} else if ((byte1 & 15) === 13) {
      if (!((byte2 & 224) === 128)) {
        return malformed(0, index, throwOnMalformed);
      }} else if (!((byte2 & 192) === 128)) {
      return malformed(0, index, throwOnMalformed);
    }if ((index + 1 | 0) === endIndex) {
      return malformed(1, index, throwOnMalformed);
    }var byte3 = bytes[index + 1 | 0];
    if (!((byte3 & 192) === 128)) {
      return malformed(1, index, throwOnMalformed);
    }return byte1 << 12 ^ byte2 << 6 ^ byte3 ^ -123008;
  }
  function codePointFrom4(bytes, byte1, index, endIndex, throwOnMalformed) {
    if (index >= endIndex) {
      malformed(0, index, throwOnMalformed);
      Unit_getInstance();
    }var byte2 = bytes[index];
    if ((byte1 & 15) === 0) {
      if ((byte2 & 240) <= 128) {
        return malformed(0, index, throwOnMalformed);
      }} else if ((byte1 & 15) === 4) {
      if (!((byte2 & 240) === 128)) {
        return malformed(0, index, throwOnMalformed);
      }} else if ((byte1 & 15) > 4) {
      return malformed(0, index, throwOnMalformed);
    } else if (!((byte2 & 192) === 128)) {
      return malformed(0, index, throwOnMalformed);
    }if ((index + 1 | 0) === endIndex) {
      return malformed(1, index, throwOnMalformed);
    }var byte3 = bytes[index + 1 | 0];
    if (!((byte3 & 192) === 128)) {
      return malformed(1, index, throwOnMalformed);
    }if ((index + 2 | 0) === endIndex) {
      return malformed(2, index, throwOnMalformed);
    }var byte4 = bytes[index + 2 | 0];
    if (!((byte4 & 192) === 128)) {
      return malformed(2, index, throwOnMalformed);
    }return byte1 << 18 ^ byte2 << 12 ^ byte3 << 6 ^ byte4 ^ 3678080;
  }
  function malformed(size, index, throwOnMalformed) {
    if (throwOnMalformed)
      throw new CharacterCodingException('' + 'Malformed sequence starting at ' + (index - 1 | 0));
    return -size | 0;
  }
  function codePointFromSurrogate(string, high, index, endIndex, throwOnMalformed) {
    if (!(55296 <= high ? high <= 56319 : false) ? true : index >= endIndex) {
      return malformed(0, index, throwOnMalformed);
    }var tmp$ret$0;
    $l$block: {
      var tmp0__get_code__0 = charSequenceGet(string, index);
      tmp$ret$0 = tmp0__get_code__0.toInt_0_k$();
      break $l$block;
    }
    var low = tmp$ret$0;
    if (!(56320 <= low ? low <= 57343 : false)) {
      return malformed(0, index, throwOnMalformed);
    }return 65536 + ((high & 1023) << 10) | 0 | low & 1023;
  }
  function REPLACEMENT_BYTE_SEQUENCE$init$() {
    var tmp$ret$0;
    $l$block: {
      var tmp0_byteArrayOf_0 = new Int8Array([-17, -65, -67]);
      tmp$ret$0 = tmp0_byteArrayOf_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function Companion_5() {
    Companion_instance_4 = this;
    this._MIN_VALUE = new Char(0);
    this._MAX_VALUE = new Char(65535);
    this._MIN_HIGH_SURROGATE = new Char(55296);
    this._MAX_HIGH_SURROGATE = new Char(56319);
    this._MIN_LOW_SURROGATE = new Char(56320);
    this._MAX_LOW_SURROGATE = new Char(57343);
    this._MIN_SURROGATE = new Char(55296);
    this._MAX_SURROGATE = new Char(57343);
    this._SIZE_BYTES = 2;
    this._SIZE_BITS = 16;
  }
  Companion_5.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_5();
    return Companion_instance_4;
  }
  function Char(code) {
    Companion_getInstance_4();
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _UShort___get_data__impl_(code) & 65535;
      break $l$block;
    }
    tmp._value = tmp$ret$0;
  }
  Char.prototype.compareTo_wi8o78_k$ = function (other) {
    return this._value - other._value | 0;
  };
  Char.prototype.minus_wi8o78_k$ = function (other) {
    return this._value - other._value | 0;
  };
  Char.prototype.toInt_0_k$ = function () {
    return this._value;
  };
  Char.prototype.equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Char))
      return false;
    else {
    }
    return this._value === other._value;
  };
  Char.prototype.hashCode = function () {
    return this._value;
  };
  Char.prototype.toString = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = String.fromCharCode(this._value);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  };
  Char.$metadata$ = {
    simpleName: 'Char',
    kind: 'class',
    interfaces: [Comparable]
  };
  function Iterable() {
  }
  Iterable.$metadata$ = {
    simpleName: 'Iterable',
    kind: 'interface',
    interfaces: []
  };
  function List() {
  }
  List.$metadata$ = {
    simpleName: 'List',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableSet() {
  }
  MutableSet.$metadata$ = {
    simpleName: 'MutableSet',
    kind: 'interface',
    interfaces: [Set, MutableCollection]
  };
  function MutableList() {
  }
  MutableList.$metadata$ = {
    simpleName: 'MutableList',
    kind: 'interface',
    interfaces: [List, MutableCollection]
  };
  function MutableEntry() {
  }
  MutableEntry.$metadata$ = {
    simpleName: 'MutableEntry',
    kind: 'interface',
    interfaces: [Entry]
  };
  function MutableMap() {
  }
  MutableMap.$metadata$ = {
    simpleName: 'MutableMap',
    kind: 'interface',
    interfaces: [Map_0]
  };
  function Collection() {
  }
  Collection.$metadata$ = {
    simpleName: 'Collection',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Set() {
  }
  Set.$metadata$ = {
    simpleName: 'Set',
    kind: 'interface',
    interfaces: [Collection]
  };
  function MutableCollection() {
  }
  MutableCollection.$metadata$ = {
    simpleName: 'MutableCollection',
    kind: 'interface',
    interfaces: [Collection, MutableIterable]
  };
  function Entry() {
  }
  Entry.$metadata$ = {
    simpleName: 'Entry',
    kind: 'interface',
    interfaces: []
  };
  function Map_0() {
  }
  Map_0.$metadata$ = {
    simpleName: 'Map',
    kind: 'interface',
    interfaces: []
  };
  function MutableIterable() {
  }
  MutableIterable.$metadata$ = {
    simpleName: 'MutableIterable',
    kind: 'interface',
    interfaces: [Iterable]
  };
  function Companion_6() {
    Companion_instance_5 = this;
  }
  Companion_6.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_6();
    return Companion_instance_5;
  }
  function Enum(name, ordinal) {
    Companion_getInstance_5();
    this._name = name;
    this._ordinal = ordinal;
  }
  Enum.prototype._get_name__0_k$ = function () {
    return this._name;
  };
  Enum.prototype._get_ordinal__0_k$ = function () {
    return this._ordinal;
  };
  Enum.prototype.equals = function (other) {
    return this === other;
  };
  Enum.prototype.hashCode = function () {
    return identityHashCode(this);
  };
  Enum.prototype.toString = function () {
    return this._name;
  };
  Enum.$metadata$ = {
    simpleName: 'Enum',
    kind: 'class',
    interfaces: [Comparable]
  };
  function toString_0(_this_) {
    var tmp0_safe_receiver = _this_;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function booleanArray(size) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_withType_0 = fillArrayVal(Array(size), false);
        tmp0_withType_0.$type$ = 'BooleanArray';
        tmp$ret$0 = tmp0_withType_0;
        break $l$block;
      }
      var tmp1_unsafeCast_0 = tmp$ret$0;
      tmp$ret$1 = tmp1_unsafeCast_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  var buf;
  var bufFloat64;
  var bufInt32;
  var lowIndex;
  var highIndex;
  function getNumberHashCode(obj) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = jsBitwiseOr(obj, 0);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    } else {
    }
    bufFloat64[0] = obj;
    return imul(bufInt32[highIndex], 31) + bufInt32[lowIndex] | 0;
  }
  function bufFloat64$init$() {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = new Float64Array(buf);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function bufInt32$init$() {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_unsafeCast_0 = new Int32Array(buf);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function lowIndex$init$() {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        bufFloat64[0] = -1.0;
        tmp$ret$0 = !(bufInt32[0] === 0) ? 1 : 0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = a;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.charCodeAt(index);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        var tmp1_Char_0 = tmp$ret$1;
        var tmp_0;
        var tmp$ret$2;
        $l$block_1: {
          Companion_getInstance_4();
          var tmp0__get_code__0_1 = new Char(0);
          tmp$ret$2 = tmp0__get_code__0_1.toInt_0_k$();
          break $l$block_1;
        }
        if (tmp1_Char_0 < tmp$ret$2) {
          tmp_0 = true;
        } else {
          {
            var tmp$ret$3;
            $l$block_2: {
              Companion_getInstance_4();
              var tmp1__get_code__0_2 = new Char(65535);
              tmp$ret$3 = tmp1__get_code__0_2.toInt_0_k$();
              break $l$block_2;
            }
            tmp_0 = tmp1_Char_0 > tmp$ret$3;
          }
        }
        if (tmp_0) {
          throw IllegalArgumentException_init_$Create$('' + 'Invalid Char code: ' + tmp1_Char_0);
        } else {
        }
        tmp$ret$4 = numberToChar(tmp1_Char_0);
        break $l$block_3;
      }
      tmp = tmp$ret$4;
    } else {
      tmp = a.get_ha5a7z_k$(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = a;
          break $l$block;
        }
        var tmp0_unsafeCast_0 = tmp$ret$0.length;
        tmp$ret$1 = tmp0_unsafeCast_0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    } else {
      tmp = a._get_length__0_k$();
    }
    return tmp;
  }
  function arrayToString(array) {
    return joinToString$default(array, ', ', '[', ']', 0, null, _no_name_provided_$factory_21(), 24, null);
  }
  function _no_name_provided__24() {
  }
  _no_name_provided__24.prototype.invoke_wi7j7l_k$ = function (it) {
    return toString_1(it);
  };
  _no_name_provided__24.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_wi7j7l_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
  };
  _no_name_provided__24.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_21() {
    var i = new _no_name_provided__24();
    return function (p1) {
      return i.invoke_wi7j7l_k$(p1);
    };
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = o.toString();
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = obj;
          break $l$block;
        }

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          {
            tmp_0 = 0;
          }
        }

        tmp = tmp_0;
        break;
      default:tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = str;
          break $l$block;
        }
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function equals_0(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }if (obj2 == null) {
      return false;
    }if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }if (obj1 !== obj1) {
      return obj2 !== obj2;
    }if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = 1;
            break $l$block;
          }
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = 1;
            break $l$block_0;
          }
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }return obj1 === obj2;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = instance;
        break $l$block;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getContinuation() {
    throw Exception_init_$Create$_0('Implemented as intrinsic');
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function throwUninitializedPropertyAccessException(name) {
    throw UninitializedPropertyAccessException_init_$Create$('' + 'lateinit property ' + name + ' has not been initialized');
  }
  function lazy(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = dst;
      break $l$block;
    }
    var arr = tmp$ret$0;
    while (index < srcLen ? index < dstLen : false) {
      var tmp = index;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      arr[tmp] = src[tmp0];
    }
    return dst;
  }
  function Companion_7() {
    Companion_instance_6 = this;
    this._MIN_VALUE_0 = new Long(0, -2147483648);
    this._MAX_VALUE_0 = new Long(-1, 2147483647);
    this._SIZE_BYTES_0 = 8;
    this._SIZE_BITS_0 = 64;
  }
  Companion_7.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_7();
    return Companion_instance_6;
  }
  function Long(low, high) {
    Companion_getInstance_6();
    Number_0.call(this);
    this._low = low;
    this._high = high;
  }
  Long.prototype.compareTo_wiekkq_k$ = function (other) {
    return compare(this, other);
  };
  Long.prototype.plus_wiekkq_k$ = function (other) {
    return add(this, other);
  };
  Long.prototype.minus_wiekkq_k$ = function (other) {
    return subtract(this, other);
  };
  Long.prototype.times_wiekkq_k$ = function (other) {
    return multiply(this, other);
  };
  Long.prototype.div_wiekkq_k$ = function (other) {
    return divide(this, other);
  };
  Long.prototype.rem_wiekkq_k$ = function (other) {
    return modulo(this, other);
  };
  Long.prototype.inc_0_k$ = function () {
    return this.plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.dec_0_k$ = function () {
    return this.minus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.unaryMinus_0_k$ = function () {
    return this.inv_0_k$().plus_wiekkq_k$(new Long(1, 0));
  };
  Long.prototype.shl_ha5a7z_k$ = function (bitCount) {
    return shiftLeft(this, bitCount);
  };
  Long.prototype.shr_ha5a7z_k$ = function (bitCount) {
    return shiftRight(this, bitCount);
  };
  Long.prototype.and_wiekkq_k$ = function (other) {
    return new Long(this._low & other._low, this._high & other._high);
  };
  Long.prototype.or_wiekkq_k$ = function (other) {
    return new Long(this._low | other._low, this._high | other._high);
  };
  Long.prototype.xor_wiekkq_k$ = function (other) {
    return new Long(this._low ^ other._low, this._high ^ other._high);
  };
  Long.prototype.inv_0_k$ = function () {
    return new Long(~this._low, ~this._high);
  };
  Long.prototype.toByte_0_k$ = function () {
    return toByte(this._low);
  };
  Long.prototype.toShort_0_k$ = function () {
    return toShort(this._low);
  };
  Long.prototype.toInt_0_k$ = function () {
    return this._low;
  };
  Long.prototype.toFloat_0_k$ = function () {
    return this.toDouble_0_k$();
  };
  Long.prototype.toDouble_0_k$ = function () {
    return toNumber(this);
  };
  Long.prototype.valueOf = function () {
    return this.toDouble_0_k$();
  };
  Long.prototype.equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  Long.prototype.hashCode = function () {
    return hashCode_0(this);
  };
  Long.prototype.toString = function () {
    return toStringImpl(this, 10);
  };
  Long.$metadata$ = {
    simpleName: 'Long',
    kind: 'class',
    interfaces: [Comparable]
  };
  var ZERO;
  var ONE;
  var NEG_ONE;
  var MAX_VALUE;
  var MIN_VALUE;
  var TWO_PWR_24_;
  function compare(_this_, other) {
    if (equalsLong(_this_, other)) {
      return 0;
    }var thisNeg = isNegative(_this_);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this_, other)) ? -1 : 1;
  }
  function add(_this_, other) {
    var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this_, other) {
    return add(_this_, other.unaryMinus_0_k$());
  }
  function multiply(_this_, other) {
    if (isZero(_this_)) {
      return ZERO;
    } else if (isZero(other)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      return isOdd(other) ? MIN_VALUE : ZERO;
    } else if (equalsLong(other, MIN_VALUE)) {
      return isOdd(_this_) ? MIN_VALUE : ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this_), negate(other));
      } else {
        tmp = negate(multiply(negate(_this_), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this_, negate(other)));
    }if (lessThan(_this_, TWO_PWR_24_) ? lessThan(other, TWO_PWR_24_) : false) {
      return fromNumber(toNumber(_this_) * toNumber(other));
    }var a48 = _this_._high >>> 16;
    var a32 = _this_._high & 65535;
    var a16 = _this_._low >>> 16;
    var a00 = _this_._low & 65535;
    var b48 = other._high >>> 16;
    var b32 = other._high & 65535;
    var b16 = other._low >>> 16;
    var b00 = other._low & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this_, other) {
    if (isZero(other)) {
      throw Exception_init_$Create$_0('division by zero');
    } else if (isZero(_this_)) {
      return ZERO;
    }if (equalsLong(_this_, MIN_VALUE)) {
      if (equalsLong(other, ONE) ? true : equalsLong(other, NEG_ONE)) {
        return MIN_VALUE;
      } else if (equalsLong(other, MIN_VALUE)) {
        return ONE;
      } else {
        var halfThis = shiftRight(_this_, 1);
        var approx = shiftLeft(halfThis.div_wiekkq_k$(other), 1);
        if (equalsLong(approx, ZERO)) {
          return isNegative(other) ? ONE : NEG_ONE;
        } else {
          var rem = subtract(_this_, multiply(other, approx));
          return add(approx, rem.div_wiekkq_k$(other));
        }
      }
    } else if (equalsLong(other, MIN_VALUE)) {
      return ZERO;
    }if (isNegative(_this_)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this_).div_wiekkq_k$(negate(other));
      } else {
        tmp = negate(negate(_this_).div_wiekkq_k$(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this_.div_wiekkq_k$(negate(other)));
    }var res = ZERO;
    var rem_0 = _this_;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta_0 = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta_0;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = ONE;
      }res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function modulo(_this_, other) {
    return subtract(_this_, multiply(_this_.div_wiekkq_k$(other), other));
  }
  function shiftLeft(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low << numBits_0, _this_._high << numBits_0 | _this_._low >>> (32 - numBits_0 | 0));
      } else {
        return new Long(0, _this_._low << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this_, numBits) {
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this_;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this_._low >>> numBits_0 | _this_._high << (32 - numBits_0 | 0), _this_._high >> numBits_0);
      } else {
        return new Long(_this_._high >> (numBits_0 - 32 | 0), _this_._high >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this_) {
    return _this_._high * 4.294967296E9 + getLowBitsUnsigned(_this_);
  }
  function equalsLong(_this_, other) {
    return _this_._high === other._high ? _this_._low === other._low : false;
  }
  function hashCode_0(l) {
    return l._low ^ l._high;
  }
  function toStringImpl(_this_, radix) {
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$_0('' + 'radix out of range: ' + radix);
    }if (isZero(_this_)) {
      return '0';
    }if (isNegative(_this_)) {
      if (equalsLong(_this_, MIN_VALUE)) {
        var radixLong = fromInt(radix);
        var div = _this_.div_wiekkq_k$(radixLong);
        var rem = subtract(multiply(div, radixLong), _this_).toInt_0_k$();
        var tmp = toStringImpl(div, radix);
        var tmp$ret$1;
        $l$block_0: {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = rem;
            break $l$block;
          }
          var tmp0_unsafeCast_0 = tmp$ret$0.toString(radix);
          tmp$ret$1 = tmp0_unsafeCast_0;
          break $l$block_0;
        }
        return tmp + tmp$ret$1;
      } else {
        return '' + '-' + toStringImpl(negate(_this_), radix);
      }
    }var radixToPower = fromNumber(Math.pow(radix, 6.0));
    var rem_0 = _this_;
    var result = '';
    while (true) {
      var remDiv = rem_0.div_wiekkq_k$(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).toInt_0_k$();
      var tmp$ret$3;
      $l$block_2: {
        var tmp$ret$2;
        $l$block_1: {
          tmp$ret$2 = intval;
          break $l$block_1;
        }
        var tmp1_unsafeCast_0 = tmp$ret$2.toString(radix);
        tmp$ret$3 = tmp1_unsafeCast_0;
        break $l$block_2;
      }
      var digits = tmp$ret$3;
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function fromInt(value) {
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this_) {
    return _this_._high < 0;
  }
  function isZero(_this_) {
    return _this_._high === 0 ? _this_._low === 0 : false;
  }
  function isOdd(_this_) {
    return (_this_._low & 1) === 1;
  }
  function negate(_this_) {
    return _this_.unaryMinus_0_k$();
  }
  function lessThan(_this_, other) {
    return compare(_this_, other) < 0;
  }
  function fromNumber(value) {
    if (isNaN_0(value)) {
      return ZERO;
    } else if (value <= -9.223372036854776E18) {
      return MIN_VALUE;
    } else if (value + 1 >= 9.223372036854776E18) {
      return MAX_VALUE;
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      return new Long(jsBitwiseOr(value % twoPwr32, 0), jsBitwiseOr(value / twoPwr32, 0));
    }
  }
  function greaterThan(_this_, other) {
    return compare(_this_, other) > 0;
  }
  function greaterThanOrEqual(_this_, other) {
    return compare(_this_, other) >= 0;
  }
  function getLowBitsUnsigned(_this_) {
    return _this_._low >= 0 ? _this_._low : 4.294967296E9 + _this_._low;
  }
  function imul(a_local, b_local) {
    var lhs = jsBitwiseAnd(a_local, 4.29490176E9) * jsBitwiseAnd(b_local, 65535);
    var rhs = jsBitwiseAnd(a_local, 65535) * b_local;
    return jsBitwiseOr(lhs + rhs, 0);
  }
  function toByte(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toByte$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.toInt_0_k$();
    } else {
      {
        tmp = doubleToInt(a);
      }
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  function toShort(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = toShort$outlinedJsCode$(a);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function numberToLong(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a;
    } else {
      {
        tmp = fromNumber(a);
      }
    }
    return tmp;
  }
  function numberToChar(a) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_toUShort_0 = numberToInt(a);
      tmp$ret$0 = _UShort___init__impl_(toShort(tmp0_toUShort_0));
      break $l$block;
    }
    return new Char(tmp$ret$0);
  }
  function toLong_0(a) {
    return fromInt(a);
  }
  function toByte$outlinedJsCode$(a) {
    return a << 24 >> 24;
  }
  function toShort$outlinedJsCode$(a) {
    return a << 16 >> 16;
  }
  var propertyRefClassMetadataCache;
  function getPropertyCallableRef(name, paramCount, type, getter, setter) {
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = getPropertyRefClass(getter, getKPropMetadata(paramCount, setter, type));
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function getPropertyRefClass(obj, metadata) {
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    return obj;
  }
  function getKPropMetadata(paramCount, setter, type) {
    var mdata = propertyRefClassMetadataCache[paramCount][setter == null ? 0 : 1];
    if (mdata.interfaces.length == 0) {
      mdata.interfaces.push(type);
    }return mdata;
  }
  function propertyRefClassMetadataCache$init$() {
    var tmp$ret$17;
    $l$block_16: {
      var tmp$ret$4;
      $l$block_3: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = {kind: 'class', interfaces: []};
          break $l$block;
        }
        var tmp = tmp$ret$0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = {kind: 'class', interfaces: []};
          break $l$block_0;
        }
        var tmp0_arrayOf_0 = [tmp, tmp$ret$1];
        var tmp$ret$3;
        $l$block_2: {
          var tmp$ret$2;
          $l$block_1: {
            tmp$ret$2 = tmp0_arrayOf_0;
            break $l$block_1;
          }
          tmp$ret$3 = tmp$ret$2;
          break $l$block_2;
        }
        tmp$ret$4 = tmp$ret$3;
        break $l$block_3;
      }
      var tmp_0 = tmp$ret$4;
      var tmp$ret$9;
      $l$block_8: {
        var tmp$ret$5;
        $l$block_4: {
          tmp$ret$5 = {kind: 'class', interfaces: []};
          break $l$block_4;
        }
        var tmp_1 = tmp$ret$5;
        var tmp$ret$6;
        $l$block_5: {
          tmp$ret$6 = {kind: 'class', interfaces: []};
          break $l$block_5;
        }
        var tmp1_arrayOf_0 = [tmp_1, tmp$ret$6];
        var tmp$ret$8;
        $l$block_7: {
          var tmp$ret$7;
          $l$block_6: {
            tmp$ret$7 = tmp1_arrayOf_0;
            break $l$block_6;
          }
          tmp$ret$8 = tmp$ret$7;
          break $l$block_7;
        }
        tmp$ret$9 = tmp$ret$8;
        break $l$block_8;
      }
      var tmp_2 = tmp$ret$9;
      var tmp$ret$14;
      $l$block_13: {
        var tmp$ret$10;
        $l$block_9: {
          tmp$ret$10 = {kind: 'class', interfaces: []};
          break $l$block_9;
        }
        var tmp_3 = tmp$ret$10;
        var tmp$ret$11;
        $l$block_10: {
          tmp$ret$11 = {kind: 'class', interfaces: []};
          break $l$block_10;
        }
        var tmp2_arrayOf_0 = [tmp_3, tmp$ret$11];
        var tmp$ret$13;
        $l$block_12: {
          var tmp$ret$12;
          $l$block_11: {
            tmp$ret$12 = tmp2_arrayOf_0;
            break $l$block_11;
          }
          tmp$ret$13 = tmp$ret$12;
          break $l$block_12;
        }
        tmp$ret$14 = tmp$ret$13;
        break $l$block_13;
      }
      var tmp3_arrayOf_0 = [tmp_0, tmp_2, tmp$ret$14];
      var tmp$ret$16;
      $l$block_15: {
        var tmp$ret$15;
        $l$block_14: {
          tmp$ret$15 = tmp3_arrayOf_0;
          break $l$block_14;
        }
        tmp$ret$16 = tmp$ret$15;
        break $l$block_15;
      }
      tmp$ret$17 = tmp$ret$16;
      break $l$block_16;
    }
    return tmp$ret$17;
  }
  function isArrayish(o) {
    var tmp;
    if (isJsArray(o)) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block: {
        var tmp0_unsafeCast_0 = ArrayBuffer.isView(o);
        tmp$ret$0 = tmp0_unsafeCast_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = Array.isArray(obj);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface)
      return true;
    var metadata = ctor.$metadata$;
    if (!(metadata == null)) {
      var interfaces = metadata.interfaces;
      var indexedObject = interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (isInterfaceImpl(i, iface)) {
          return true;
        }}
    }var superPrototype = !(ctor.prototype == null) ? Object.getPrototypeOf(ctor.prototype) : null;
    var superConstructor = superPrototype != null ? superPrototype.constructor : null;
    return !(superConstructor == null) ? isInterfaceImpl(superConstructor, iface) : false;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = obj;
        break $l$block;
      }
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, _get_js_(getKClass_0(CharSequence)));
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return isJsArray(a) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function copyOf(_this_, newSize) {
    {
      var tmp0_require_0 = newSize >= 0;
      {
      }
      if (!tmp0_require_0) {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = '' + 'Invalid new array size: ' + newSize + '.';
          break $l$block;
        }
        var message_1 = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString_1(message_1));
      }}
    return fillFrom(_this_, new Int8Array(newSize));
  }
  function digitToIntImpl(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_.toInt_0_k$();
      break $l$block;
    }
    var ch = tmp$ret$0;
    var index = binarySearchRange(Digit_getInstance()._rangeStart, ch);
    var diff = ch - Digit_getInstance()._rangeStart[index] | 0;
    return diff < 10 ? diff : -1;
  }
  function binarySearchRange(array, needle) {
    var bottom = 0;
    var top = array.length - 1 | 0;
    var middle = -1;
    var value = 0;
    while (bottom <= top) {
      middle = (bottom + top | 0) / 2 | 0;
      value = array[middle];
      if (needle > value)
        bottom = middle + 1 | 0;
      else if (needle === value)
        return middle;
      else
        top = middle - 1 | 0;
    }
    return middle - (needle < value ? 1 : 0) | 0;
  }
  function Digit() {
    Digit_instance = this;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Int32Array([48, 1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296]);
      break $l$block;
    }
    tmp._rangeStart = tmp$ret$0;
  }
  Digit.$metadata$ = {
    simpleName: 'Digit',
    kind: 'object',
    interfaces: []
  };
  var Digit_instance;
  function Digit_getInstance() {
    if (Digit_instance == null)
      new Digit();
    return Digit_instance;
  }
  function releaseIntercepted($this) {
    var intercepted_0 = $this._intercepted_;
    if (!(intercepted_0 == null) ? !(intercepted_0 === $this) : false) {
      ensureNotNull($this._get_context__0_k$().get_9uvjra_k$(Key_getInstance())).releaseInterceptedContinuation_h7c6yl_k$(intercepted_0);
    }$this._intercepted_ = CompletedContinuation_getInstance();
  }
  function CoroutineImpl_0(resultContinuation) {
    this._resultContinuation = resultContinuation;
    this._state_0 = 0;
    this._exceptionState = 0;
    this._result = null;
    this._exception_0 = null;
    this._finallyPath = null;
    var tmp = this;
    var tmp0_safe_receiver = this._resultContinuation;
    tmp.__context = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_context__0_k$();
    this._intercepted_ = null;
  }
  CoroutineImpl_0.prototype._get_exception__0_k$ = function () {
    return this._exception_0;
  };
  CoroutineImpl_0.prototype._get_context__0_k$ = function () {
    return ensureNotNull(this.__context);
  };
  CoroutineImpl_0.prototype.intercepted_0_k$ = function () {
    var tmp2_elvis_lhs = this._intercepted_;
    var tmp;
    if (tmp2_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_safe_receiver = this._get_context__0_k$().get_9uvjra_k$(Key_getInstance());
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interceptContinuation_x4ijla_k$(this);
        var tmp0_also_0 = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
        {
        }
        {
          this._intercepted_ = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp2_elvis_lhs;
    }
    return tmp;
  };
  CoroutineImpl_0.prototype.resumeWith_jccoe6_k$ = function (result) {
    var current = this;
    var tmp$ret$0;
    $l$block: {
      var tmp;
      if (_Result___get_isFailure__impl_(result)) {
        tmp = null;
      } else {
        var tmp_0 = _Result___get_value__impl_(result);
        tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
      }
      tmp$ret$0 = tmp;
      break $l$block;
    }
    var currentResult = tmp$ret$0;
    var currentException = Result__exceptionOrNull_impl(result);
    while (true) {
      var tmp$ret$6;
      $l$block_5: {
        var tmp0_with_0 = current;
        {
        }
        if (currentException == null) {
          tmp0_with_0._result = currentResult;
        } else {
          tmp0_with_0._state_0 = tmp0_with_0._exceptionState;
          tmp0_with_0._exception_0 = currentException;
        }
        try {
          var outcome_2 = tmp0_with_0.doResume_0_k$();
          if (outcome_2 === _get_COROUTINE_SUSPENDED_())
            return Unit_getInstance();
          currentResult = outcome_2;
          currentException = null;
        } catch ($p) {
          currentResult = null;
          var tmp$ret$1;
          $l$block_0: {
            tmp$ret$1 = $p;
            break $l$block_0;
          }
          currentException = tmp$ret$1;
        }
        releaseIntercepted(tmp0_with_0);
        var completion_4 = ensureNotNull(tmp0_with_0._resultContinuation);
        var tmp_1;
        if (completion_4 instanceof CoroutineImpl_0) {
          current = completion_4;
          tmp_1 = Unit_getInstance();
        } else {
          {
            if (!(currentException == null)) {
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_resumeWithException_0_5 = ensureNotNull(currentException);
                var tmp$ret$2;
                $l$block_1: {
                  var tmp0_failure_0_1_6 = Companion_getInstance_3();
                  tmp$ret$2 = _Result___init__impl_(createFailure(tmp0_resumeWithException_0_5));
                  break $l$block_1;
                }
                tmp$ret$3 = completion_4.resumeWith_bnunh2_k$(tmp$ret$2);
                break $l$block_2;
              }
            } else {
              var tmp$ret$5;
              $l$block_4: {
                var tmp1_resume_0_7 = currentResult;
                var tmp$ret$4;
                $l$block_3: {
                  var tmp0_success_0_1_8 = Companion_getInstance_3();
                  tmp$ret$4 = _Result___init__impl_(tmp1_resume_0_7);
                  break $l$block_3;
                }
                tmp$ret$5 = completion_4.resumeWith_bnunh2_k$(tmp$ret$4);
                break $l$block_4;
              }
            }
            return Unit_getInstance();
          }
        }
        tmp$ret$6 = tmp_1;
        break $l$block_5;
      }
    }
  };
  CoroutineImpl_0.prototype.resumeWith_bnunh2_k$ = function (result) {
    return this.resumeWith_jccoe6_k$(result);
  };
  CoroutineImpl_0.$metadata$ = {
    simpleName: 'CoroutineImpl',
    kind: 'class',
    interfaces: [Continuation]
  };
  function CompletedContinuation() {
    CompletedContinuation_instance = this;
  }
  CompletedContinuation.prototype._get_context__0_k$ = function () {
    throw IllegalStateException_init_$Create$('This continuation is already complete');
  };
  CompletedContinuation.prototype.resumeWith_jccoe6_k$ = function (result) {
    {
      throw IllegalStateException_init_$Create$('This continuation is already complete');
    }
  };
  CompletedContinuation.prototype.resumeWith_bnunh2_k$ = function (result) {
    return this.resumeWith_jccoe6_k$(result);
  };
  CompletedContinuation.prototype.toString = function () {
    return 'This continuation is already complete';
  };
  CompletedContinuation.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'object',
    interfaces: [Continuation]
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    if (CompletedContinuation_instance == null)
      new CompletedContinuation();
    return CompletedContinuation_instance;
  }
  function intercepted(_this_) {
    var tmp0_safe_receiver = _this_ instanceof CoroutineImpl_0 ? _this_ : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.intercepted_0_k$();
    return tmp1_elvis_lhs == null ? _this_ : tmp1_elvis_lhs;
  }
  function createCoroutineUnintercepted(_this_, completion) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new _no_name_provided__1_0(completion, _this_);
      break $l$block;
    }
    return tmp$ret$0;
  }
  function invokeSuspendSuperType(_this_, completion) {
    throw new NotImplementedError('It is intrinsic method');
  }
  function _no_name_provided__1_0($completion, $this_createCoroutineUnintercepted) {
    this._$completion = $completion;
    this._$this_createCoroutineUnintercepted = $this_createCoroutineUnintercepted;
    CoroutineImpl_0.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  _no_name_provided__1_0.prototype.doResume_2_0_k$ = function () {
    if (this._get_exception__0_k$() != null)
      throw this._get_exception__0_k$();
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = this._$this_createCoroutineUnintercepted;
        break $l$block;
      }
      var a_22 = tmp$ret$0;
      tmp$ret$1 = typeof a_22 === 'function' ? a_22(this._$completion) : this._$this_createCoroutineUnintercepted.invoke_0_k$(this._$completion);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  _no_name_provided__1_0.prototype.doResume_0_k$ = function () {
    return this.doResume_2_0_k$();
  };
  _no_name_provided__1_0.$metadata$ = {
    simpleName: '<no name provided>_1',
    kind: 'class',
    interfaces: []
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$() {
    var tmp = Exception_init_$Init$(Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_0(message) {
    var tmp = Exception_init_$Init$_0(message, Object.create(Exception.prototype));
    captureStack(tmp, Exception_init_$Create$_0);
    return tmp;
  }
  function Exception_init_$Init$_1(message, cause, $this) {
    extendThrowable($this, message, cause);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = {
    simpleName: 'Exception',
    kind: 'class',
    interfaces: []
  };
  function Error_init_$Init$(message, $this) {
    extendThrowable($this, message, void 1);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Init$_0(message, cause, $this) {
    extendThrowable($this, message, cause);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  Error_0.$metadata$ = {
    simpleName: 'Error',
    kind: 'class',
    interfaces: []
  };
  function IllegalArgumentException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$(message) {
    var tmp = IllegalArgumentException_init_$Init$(message, Object.create(IllegalArgumentException.prototype));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  IllegalArgumentException.$metadata$ = {
    simpleName: 'IllegalArgumentException',
    kind: 'class',
    interfaces: []
  };
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(Object.create(NoSuchElementException.prototype));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  NoSuchElementException.$metadata$ = {
    simpleName: 'NoSuchElementException',
    kind: 'class',
    interfaces: []
  };
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_1(message, cause, $this) {
    Exception_init_$Init$_1(message, cause, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$(message, cause) {
    var tmp = RuntimeException_init_$Init$_1(message, cause, Object.create(RuntimeException.prototype));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = {
    simpleName: 'RuntimeException',
    kind: 'class',
    interfaces: []
  };
  function IllegalStateException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$(message) {
    var tmp = IllegalStateException_init_$Init$(message, Object.create(IllegalStateException.prototype));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, cause, $this) {
    RuntimeException_init_$Init$_1(message, cause, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  IllegalStateException.$metadata$ = {
    simpleName: 'IllegalStateException',
    kind: 'class',
    interfaces: []
  };
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = {
    simpleName: 'UnsupportedOperationException',
    kind: 'class',
    interfaces: []
  };
  function IndexOutOfBoundsException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$() {
    var tmp = IndexOutOfBoundsException_init_$Init$(Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$_0(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$_0(message, Object.create(IndexOutOfBoundsException.prototype));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  IndexOutOfBoundsException.$metadata$ = {
    simpleName: 'IndexOutOfBoundsException',
    kind: 'class',
    interfaces: []
  };
  function NumberFormatException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    NumberFormatException.call($this);
    return $this;
  }
  function NumberFormatException_init_$Create$(message) {
    var tmp = NumberFormatException_init_$Init$(message, Object.create(NumberFormatException.prototype));
    captureStack(tmp, NumberFormatException_init_$Create$);
    return tmp;
  }
  function NumberFormatException() {
    captureStack(this, NumberFormatException);
  }
  NumberFormatException.$metadata$ = {
    simpleName: 'NumberFormatException',
    kind: 'class',
    interfaces: []
  };
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(Object.create(NullPointerException.prototype));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  NullPointerException.$metadata$ = {
    simpleName: 'NullPointerException',
    kind: 'class',
    interfaces: []
  };
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = {
    simpleName: 'ClassCastException',
    kind: 'class',
    interfaces: []
  };
  function UninitializedPropertyAccessException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UninitializedPropertyAccessException.call($this);
    return $this;
  }
  function UninitializedPropertyAccessException_init_$Create$(message) {
    var tmp = UninitializedPropertyAccessException_init_$Init$(message, Object.create(UninitializedPropertyAccessException.prototype));
    captureStack(tmp, UninitializedPropertyAccessException_init_$Create$);
    return tmp;
  }
  function UninitializedPropertyAccessException() {
    captureStack(this, UninitializedPropertyAccessException);
  }
  UninitializedPropertyAccessException.$metadata$ = {
    simpleName: 'UninitializedPropertyAccessException',
    kind: 'class',
    interfaces: []
  };
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsIn$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsTypeOf$outlinedJsCode$(value_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsDeleteProperty(obj_hack, property_hack) {
    jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack);
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsBitwiseAnd(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_unsafeCast_0 = jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack);
      tmp$ret$0 = tmp0_unsafeCast_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function jsIn$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack in rhs_hack;
  }
  function jsBitwiseOr$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack | rhs_hack;
  }
  function jsTypeOf$outlinedJsCode$(value_hack) {
    return typeof value_hack;
  }
  function jsDeleteProperty$outlinedJsCode$(obj_hack, property_hack) {
    return delete obj_hack[property_hack];
  }
  function jsInstanceOf$outlinedJsCode$(obj_hack, jsClass_hack) {
    return obj_hack instanceof jsClass_hack;
  }
  function jsBitwiseAnd$outlinedJsCode$(lhs_hack, rhs_hack) {
    return lhs_hack & rhs_hack;
  }
  function toString_2(_this_, radix) {
    return toStringImpl(_this_, checkRadix(radix));
  }
  function None() {
    None_instance = this;
    TraceBase.call(this);
  }
  None.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance;
  function None_getInstance() {
    if (None_instance == null)
      new None();
    return None_instance;
  }
  function TraceBase() {
  }
  TraceBase.prototype.atomicfu$Trace$append$1 = function (event) {
  };
  TraceBase.prototype.atomicfu$Trace$append$2 = function (event1, event2) {
  };
  TraceBase.prototype.atomicfu$Trace$append$3 = function (event1, event2, event3) {
  };
  TraceBase.prototype.atomicfu$Trace$append$4 = function (event1, event2, event3, event4) {
  };
  TraceBase.$metadata$ = {
    simpleName: 'TraceBase',
    kind: 'class',
    interfaces: []
  };
  function AtomicRef(value) {
    this._value_0 = value;
  }
  AtomicRef.prototype._set_value__iav7o_k$ = function (_set___) {
    this._value_0 = _set___;
  };
  AtomicRef.prototype._get_value__0_k$ = function () {
    return this._value_0;
  };
  AtomicRef.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_0 === expect))
      return false;
    this._value_0 = update;
    return true;
  };
  AtomicRef.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_0;
    this._value_0 = value;
    return oldValue;
  };
  AtomicRef.prototype.toString = function () {
    return toString_0(this._value_0);
  };
  AtomicRef.$metadata$ = {
    simpleName: 'AtomicRef',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicRef.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicRef.prototype._get_value__0_k$,
    set: AtomicRef.prototype._set_value__iav7o_k$
  });
  function atomic(initial) {
    return atomic_3(initial, None_getInstance());
  }
  function AtomicBoolean(value) {
    this._value_1 = value;
  }
  AtomicBoolean.prototype._set_value__rpwsgn_k$ = function (_set___) {
    this._value_1 = _set___;
  };
  AtomicBoolean.prototype._get_value__0_k$ = function () {
    return this._value_1;
  };
  AtomicBoolean.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_1 === expect))
      return false;
    this._value_1 = update;
    return true;
  };
  AtomicBoolean.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_1;
    this._value_1 = value;
    return oldValue;
  };
  AtomicBoolean.prototype.toString = function () {
    return this._value_1.toString();
  };
  AtomicBoolean.$metadata$ = {
    simpleName: 'AtomicBoolean',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicBoolean.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicBoolean.prototype._get_value__0_k$,
    set: AtomicBoolean.prototype._set_value__rpwsgn_k$
  });
  function atomic_0(initial) {
    return atomic_5(initial, None_getInstance());
  }
  function AtomicInt(value) {
    this._value_2 = value;
  }
  AtomicInt.prototype._set_value__majfzk_k$ = function (_set___) {
    this._value_2 = _set___;
  };
  AtomicInt.prototype._get_value__0_k$ = function () {
    return this._value_2;
  };
  AtomicInt.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!(this._value_2 === expect))
      return false;
    this._value_2 = update;
    return true;
  };
  AtomicInt.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_2;
    this._value_2 = value;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$getAndIncrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 + 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndDecrement = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_2;
    tmp0_this._value_2 = tmp1 - 1 | 0;
    return tmp1;
  };
  AtomicInt.prototype.atomicfu$getAndAdd = function (delta_0) {
    var oldValue = this._value_2;
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta_0 | 0;
    return oldValue;
  };
  AtomicInt.prototype.atomicfu$addAndGet = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + delta_0 | 0;
    return this._value_2;
  };
  AtomicInt.prototype.atomicfu$incrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 + 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.atomicfu$decrementAndGet = function () {
    var tmp0_this = this;
    tmp0_this._value_2 = tmp0_this._value_2 - 1 | 0;
    return tmp0_this._value_2;
  };
  AtomicInt.prototype.toString = function () {
    return this._value_2.toString();
  };
  AtomicInt.$metadata$ = {
    simpleName: 'AtomicInt',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicInt.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicInt.prototype._get_value__0_k$,
    set: AtomicInt.prototype._set_value__majfzk_k$
  });
  function atomic_1(initial) {
    return atomic_7(initial, None_getInstance());
  }
  function AtomicLong(value) {
    this._value_3 = value;
  }
  AtomicLong.prototype._set_value__kdfck9_k$ = function (_set___) {
    this._value_3 = _set___;
  };
  AtomicLong.prototype._get_value__0_k$ = function () {
    return this._value_3;
  };
  AtomicLong.prototype.atomicfu$compareAndSet = function (expect, update) {
    if (!this._value_3.equals(expect))
      return false;
    this._value_3 = update;
    return true;
  };
  AtomicLong.prototype.atomicfu$getAndSet = function (value) {
    var oldValue = this._value_3;
    this._value_3 = value;
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$getAndIncrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_3;
    tmp0_this._value_3 = tmp1.inc_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndDecrement$long = function () {
    var tmp0_this = this;
    var tmp1 = tmp0_this._value_3;
    tmp0_this._value_3 = tmp1.dec_0_k$();
    return tmp1;
  };
  AtomicLong.prototype.atomicfu$getAndAdd$long = function (delta_0) {
    var oldValue = this._value_3;
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.plus_wiekkq_k$(delta_0);
    return oldValue;
  };
  AtomicLong.prototype.atomicfu$addAndGet$long = function (delta_0) {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.plus_wiekkq_k$(delta_0);
    return this._value_3;
  };
  AtomicLong.prototype.atomicfu$incrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.inc_0_k$();
    return tmp0_this._value_3;
  };
  AtomicLong.prototype.atomicfu$decrementAndGet$long = function () {
    var tmp0_this = this;
    tmp0_this._value_3 = tmp0_this._value_3.dec_0_k$();
    return tmp0_this._value_3;
  };
  AtomicLong.prototype.toString = function () {
    return this._value_3.toString();
  };
  AtomicLong.$metadata$ = {
    simpleName: 'AtomicLong',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AtomicLong.prototype, 'kotlinx$atomicfu$value', {
    configurable: true,
    get: AtomicLong.prototype._get_value__0_k$,
    set: AtomicLong.prototype._set_value__kdfck9_k$
  });
  function atomic_2(initial, trace) {
    return atomic_3(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_3(initial, trace) {
    return new AtomicRef(initial);
  }
  function atomic_4(initial, trace) {
    return atomic_5(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_5(initial, trace) {
    return new AtomicBoolean(initial);
  }
  function atomic_6(initial, trace) {
    return atomic_7(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_7(initial, trace) {
    return new AtomicInt(initial);
  }
  function atomic_8(initial, trace) {
    return atomic_9(initial, trace === void 1 ? None_getInstance() : trace);
  }
  function atomic_9(initial, trace) {
    return new AtomicLong(initial);
  }
  function CancellableContinuation() {
  }
  CancellableContinuation.$metadata$ = {
    simpleName: 'CancellableContinuation',
    kind: 'interface',
    interfaces: [Continuation]
  };
  function disposeOnCancellation(_this_, handle) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0 = new DisposeOnCancel(handle);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    return _this_.invokeOnCancellation_aip8gd_k$(tmp$ret$1);
  }
  function DisposeOnCancel(handle) {
    CancelHandler.call(this);
    this._handle = handle;
  }
  DisposeOnCancel.prototype.invoke_houul8_k$ = function (cause) {
    return this._handle.dispose_sv8swh_k$();
  };
  DisposeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  DisposeOnCancel.prototype.toString = function () {
    return '' + 'DisposeOnCancel[' + this._handle + ']';
  };
  DisposeOnCancel.$metadata$ = {
    simpleName: 'DisposeOnCancel',
    kind: 'class',
    interfaces: []
  };
  function _get_stateDebugRepresentation_($this) {
    var tmp0_subject = $this._get_state__0_k$();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (_get_isReusableMode_($this._get_resumeMode__0_k$())) {
      var tmp_0 = $this._delegate;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).isReusable_0_k$();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this._delegate;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.postponeCancellation_onfaoi_k$(cause);
  }
  function callCancelHandler($this, handler, cause) {
    var tmp;
    try {
      tmp = invokeIt(handler, cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException($this._get_context__0_k$(), new CompletionHandlerException('' + 'Exception in invokeOnCancellation handler for ' + $this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function trySuspend($this) {
    {
      var tmp0_loop_0 = $this.__decision;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_2;
          var tmp0_subject_2 = tmp1__anonymous__1;
          switch (tmp0_subject_2) {
            case 0:
              if ($this.__decision.atomicfu$compareAndSet(0, 1))
                return true;
              break;
            case 2:
              return false;
            default:throw IllegalStateException_init_$Create$('Already suspended');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function tryResume($this) {
    {
      var tmp0_loop_0 = $this.__decision;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_2;
          var tmp0_subject_2 = tmp1__anonymous__1;
          switch (tmp0_subject_2) {
            case 0:
              if ($this.__decision.atomicfu$compareAndSet(0, 2))
                return true;
              break;
            case 1:
              return false;
            default:throw IllegalStateException_init_$Create$('Already resumed');
          }
        }
      }
      Unit_getInstance();
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this._get_context__0_k$().get_9uvjra_k$(Key_getInstance_2());
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0 = new ChildContinuation($this);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var handle = parent.invokeOnCompletion$default_n4h7x8_k$(true, false, tmp$ret$1, 2, null);
    $this._parentHandle = handle;
    return handle;
  }
  function releaseClaimedReusableContinuation($this) {
    var tmp = $this._delegate;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.tryReleaseClaimedContinuation_7b8qoa_k$($this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    $this.detachChild_sv8swh_k$();
    $this.cancel_h62ekz_k$(cancellationCause);
    Unit_getInstance();
  }
  function multipleHandlersError($this, handler, state) {
    {
      var tmp0_error_0 = '' + "It's prohibited to register multiple handlers, tried to register " + handler + ', already has ' + state;
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    }
  }
  function makeCancelHandler($this, handler) {
    var tmp;
    if (handler instanceof CancelHandler) {
      tmp = handler;
    } else {
      {
        tmp = new InvokeOnCancel(handler);
      }
    }
    return tmp;
  }
  function dispatchResume($this, mode) {
    if (tryResume($this))
      return Unit_getInstance();
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      {
      }
      {
      }
      tmp = proposedUpdate;
    } else {
      if (!_get_isCancellableMode_(resumeMode) ? idempotent == null : false) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          var tmp_2;
          if (state instanceof CancelHandler) {
            tmp_2 = !(state instanceof BeforeResumeCancelHandler);
          } else {
            {
              tmp_2 = false;
            }
          }
          tmp_1 = tmp_2;
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          {
            tmp_0 = !(idempotent == null);
          }
        }
        if (tmp_0) {
          var tmp_3 = state instanceof CancelHandler ? state : null;
          tmp = CompletedContinuation_init_$Create$(proposedUpdate, tmp_3, onCancellation, idempotent, null, 16, null);
        } else {
          {
            tmp = proposedUpdate;
          }
        }
      }
    }
    return tmp;
  }
  function resumeImpl($this, proposedUpdate, resumeMode, onCancellation) {
    {
      var tmp0_loop_0 = $this.__state;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1 = tmp0_loop_0._value_0;
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
            var update_3 = resumedState($this, tmp1__anonymous__1, proposedUpdate, resumeMode, onCancellation, null);
            if (!$this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_3)) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }detachChildIfNonResuable($this);
            dispatchResume($this, resumeMode);
            return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelledContinuation) {
              if (tmp1__anonymous__1.makeResumed_0_k$()) {
                var tmp1_safe_receiver_4 = onCancellation;
                if (tmp1_safe_receiver_4 == null)
                  null;
                else {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    tmp$ret$1 = $this.callOnCancellation_5kfjg_k$(tmp1_safe_receiver_4, tmp1__anonymous__1._get_cause__0_k$());
                    break $l$block_0;
                  }
                  Unit_getInstance();
                }
                Unit_getInstance();
                return Unit_getInstance();
              }} else {
            }
          }
          alreadyResumedError($this, proposedUpdate);
        }
      }
      Unit_getInstance();
    }
  }
  function resumeImpl$default($this, proposedUpdate, resumeMode, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      onCancellation = null;
    return resumeImpl($this, proposedUpdate, resumeMode, onCancellation);
  }
  function alreadyResumedError($this, proposedUpdate) {
    {
      var tmp0_error_0 = '' + 'Already resumed, but proposed with update ' + proposedUpdate;
      throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
    }
  }
  function detachChildIfNonResuable($this) {
    if (!isReusable($this))
      $this.detachChild_sv8swh_k$();
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this._delegate = delegate;
    {
    }
    this._context = this._delegate._get_context__0_k$();
    this.__decision = atomic_1(0);
    this.__state = atomic(Active_getInstance());
    this._parentHandle = null;
  }
  CancellableContinuationImpl.prototype._get_delegate__0_k$ = function () {
    return this._delegate;
  };
  CancellableContinuationImpl.prototype._get_context__0_k$ = function () {
    return this._context;
  };
  CancellableContinuationImpl.prototype._get_state__0_k$ = function () {
    return this.__state._value_0;
  };
  CancellableContinuationImpl.prototype._get_isCompleted__0_k$ = function () {
    var tmp = this._get_state__0_k$();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  CancellableContinuationImpl.prototype.initCancellability_sv8swh_k$ = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this._get_isCompleted__0_k$()) {
      handle.dispose_sv8swh_k$();
      this._parentHandle = NonDisposableHandle_getInstance();
    }};
  CancellableContinuationImpl.prototype.takeState_0_k$ = function () {
    return this._get_state__0_k$();
  };
  CancellableContinuationImpl.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
    var tmp0_loop_0 = this.__state;
    while (true) {
      {
        var tmp1__anonymous__1 = tmp0_loop_0._value_0;
        var tmp0_subject_2 = tmp1__anonymous__1;
        if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, NotCompleted) : false) {
          throw IllegalStateException_init_$Create$('Not completed');
        } else {
          if (tmp0_subject_2 instanceof CompletedExceptionally)
            return Unit_getInstance();
          else {
            if (tmp0_subject_2 instanceof CompletedContinuation_0) {
              {
                var tmp0_check_0_3 = !tmp1__anonymous__1._get_cancelled__0_k$();
                {
                }
                if (!tmp0_check_0_3) {
                  var tmp$ret$0;
                  $l$block: {
                    tmp$ret$0 = 'Must be called at most once';
                    break $l$block;
                  }
                  var message_1_4 = tmp$ret$0;
                  throw IllegalStateException_init_$Create$(toString_1(message_1_4));
                }}
              var update_5 = tmp1__anonymous__1.copy$default_tn4acp_k$(null, null, null, null, cause, 15, null);
              if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_5)) {
                tmp1__anonymous__1.invokeHandlers_939j49_k$(this, cause);
                return Unit_getInstance();
              }} else {
              {
                if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, CompletedContinuation_init_$Create$(tmp1__anonymous__1, null, null, null, cause, 14, null))) {
                  return Unit_getInstance();
                } else {
                }
              }
            }
          }
        }
      }
    }
    return Unit_getInstance();
  };
  CancellableContinuationImpl.prototype.cancel_h62ekz_k$ = function (cause) {
    {
      var tmp0_loop_0 = this.__state;
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp1__anonymous__1 = tmp0_loop_0._value_0;
          if (!(!(tmp1__anonymous__1 == null) ? isInterface(tmp1__anonymous__1, NotCompleted) : false))
            return false;
          else {
          }
          var update_2 = new CancelledContinuation(this, cause, tmp1__anonymous__1 instanceof CancelHandler);
          if (!this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_2)) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }var tmp0_safe_receiver_3 = tmp1__anonymous__1 instanceof CancelHandler ? tmp1__anonymous__1 : null;
          if (tmp0_safe_receiver_3 == null)
            null;
          else {
            var tmp$ret$1;
            $l$block_0: {
              {
              }
              tmp$ret$1 = this.callCancelHandler_yvykkv_k$(tmp0_safe_receiver_3, cause);
              break $l$block_0;
            }
            Unit_getInstance();
          }
          Unit_getInstance();
          detachChildIfNonResuable(this);
          dispatchResume(this, this._get_resumeMode__0_k$());
          return true;
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.parentCancelled_1ti8hr_k$ = function (cause) {
    if (cancelLater(this, cause))
      return Unit_getInstance();
    this.cancel_h62ekz_k$(cause);
    Unit_getInstance();
    detachChildIfNonResuable(this);
  };
  CancellableContinuationImpl.prototype.callCancelHandler_yvykkv_k$ = function (handler, cause) {
    var tmp;
    try {
      tmp = handler.invoke(cause);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        tmp_0 = handleCoroutineException(this._get_context__0_k$(), new CompletionHandlerException('' + 'Exception in invokeOnCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.callOnCancellation_5kfjg_k$ = function (onCancellation, cause) {
    try {
      onCancellation(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineException(this._get_context__0_k$(), new CompletionHandlerException('' + 'Exception in resume onCancellation handler for ' + this, $p));
      } else {
        {
          throw $p;
        }
      }
    }
  };
  CancellableContinuationImpl.prototype.getContinuationCancellationCause_jfubq8_k$ = function (parent) {
    return parent.getCancellationException_0_k$();
  };
  CancellableContinuationImpl.prototype.getResult_0_k$ = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend(this)) {
      if (this._parentHandle == null) {
        installParentHandle(this);
        Unit_getInstance();
      }if (isReusable_0) {
        releaseClaimedReusableContinuation(this);
      }return _get_COROUTINE_SUSPENDED_();
    }if (isReusable_0) {
      releaseClaimedReusableContinuation(this);
    }var state = this._get_state__0_k$();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state._cause, this);
    else {
    }
    if (_get_isCancellableMode_(this._get_resumeMode__0_k$())) {
      var job = this._get_context__0_k$().get_9uvjra_k$(Key_getInstance_2());
      if (!(job == null) ? !job._get_isActive__0_k$() : false) {
        var cause = job.getCancellationException_0_k$();
        this.cancelCompletedResult_6goujk_k$(state, cause);
        throw recoverStackTrace(cause, this);
      }}return this.getSuccessfulResult_6jiqgr_k$(state);
  };
  CancellableContinuationImpl.prototype.resumeWith_bnunh2_k$ = function (result) {
    var tmp = toState(result, this);
    var tmp_0 = this._get_resumeMode__0_k$();
    return resumeImpl$default(this, tmp, tmp_0, null, 8, null);
  };
  CancellableContinuationImpl.prototype.invokeOnCancellation_aip8gd_k$ = function (handler) {
    var cancelHandler = makeCancelHandler(this, handler);
    {
      var tmp0_loop_0 = this.__state;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_0;
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (tmp0_subject_2 instanceof Active) {
            if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, cancelHandler))
              return Unit_getInstance();
          } else {
            if (tmp0_subject_2 instanceof CancelHandler)
              multipleHandlersError(this, handler, tmp1__anonymous__1);
            else {
              if (tmp0_subject_2 instanceof CompletedExceptionally) {
                if (!tmp1__anonymous__1.makeHandled_0_k$())
                  multipleHandlersError(this, handler, tmp1__anonymous__1);
                if (tmp1__anonymous__1 instanceof CancelledContinuation) {
                  var tmp1_safe_receiver_3 = tmp1__anonymous__1 instanceof CompletedExceptionally ? tmp1__anonymous__1 : null;
                  callCancelHandler(this, handler, tmp1_safe_receiver_3 == null ? null : tmp1_safe_receiver_3._cause);
                } else {
                }
                return Unit_getInstance();
              } else {
                if (tmp0_subject_2 instanceof CompletedContinuation_0) {
                  if (!(tmp1__anonymous__1._cancelHandler == null))
                    multipleHandlersError(this, handler, tmp1__anonymous__1);
                  if (cancelHandler instanceof BeforeResumeCancelHandler)
                    return Unit_getInstance();
                  else {
                  }
                  if (tmp1__anonymous__1._get_cancelled__0_k$()) {
                    callCancelHandler(this, handler, tmp1__anonymous__1._cancelCause);
                    return Unit_getInstance();
                  }var update_4 = tmp1__anonymous__1.copy$default_tn4acp_k$(null, cancelHandler, null, null, null, 29, null);
                  if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_4))
                    return Unit_getInstance();
                } else {
                  {
                    if (cancelHandler instanceof BeforeResumeCancelHandler)
                      return Unit_getInstance();
                    else {
                    }
                    var update_5 = CompletedContinuation_init_$Create$(tmp1__anonymous__1, cancelHandler, null, null, null, 28, null);
                    if (this.__state.atomicfu$compareAndSet(tmp1__anonymous__1, update_5))
                      return Unit_getInstance();
                  }
                }
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  CancellableContinuationImpl.prototype.detachChild_sv8swh_k$ = function () {
    var tmp0_elvis_lhs = this._parentHandle;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.dispose_sv8swh_k$();
    this._parentHandle = NonDisposableHandle_getInstance();
  };
  CancellableContinuationImpl.prototype.getSuccessfulResult_6jiqgr_k$ = function (state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof CompletedContinuation_0) {
      var tmp_0 = state._result_0;
      tmp = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
    } else {
      {
        tmp = (state == null ? true : isObject(state)) ? state : THROW_CCE();
      }
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.getExceptionalResult_wi7j7l_k$ = function (state) {
    var tmp0_safe_receiver = DispatchedTask.prototype.getExceptionalResult_wi7j7l_k$.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = recoverStackTrace(tmp0_safe_receiver, this._delegate);
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  };
  CancellableContinuationImpl.prototype.toString = function () {
    return '' + this.nameString_0_k$() + '(' + toDebugString(this._delegate) + '){' + _get_stateDebugRepresentation_(this) + '}@' + _get_hexAddress_(this);
  };
  CancellableContinuationImpl.prototype.nameString_0_k$ = function () {
    return 'CancellableContinuation';
  };
  CancellableContinuationImpl.$metadata$ = {
    simpleName: 'CancellableContinuationImpl',
    kind: 'class',
    interfaces: [CancellableContinuation, CoroutineStackFrame]
  };
  function CancelHandler() {
    CancelHandlerBase.call(this);
  }
  CancelHandler.$metadata$ = {
    simpleName: 'CancelHandler',
    kind: 'class',
    interfaces: [NotCompleted]
  };
  function Active() {
    Active_instance = this;
  }
  Active.prototype.toString = function () {
    return 'Active';
  };
  Active.$metadata$ = {
    simpleName: 'Active',
    kind: 'object',
    interfaces: [NotCompleted]
  };
  var Active_instance;
  function Active_getInstance() {
    if (Active_instance == null)
      new Active();
    return Active_instance;
  }
  function NotCompleted() {
  }
  NotCompleted.$metadata$ = {
    simpleName: 'NotCompleted',
    kind: 'interface',
    interfaces: []
  };
  function CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      cancelHandler = null;
    if (!(($mask0 & 4) === 0))
      onCancellation = null;
    if (!(($mask0 & 8) === 0))
      idempotentResume = null;
    if (!(($mask0 & 16) === 0))
      cancelCause = null;
    CompletedContinuation_0.call($this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
    return $this;
  }
  function CompletedContinuation_init_$Create$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker) {
    return CompletedContinuation_init_$Init$(result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $marker, Object.create(CompletedContinuation_0.prototype));
  }
  function CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    this._result_0 = result;
    this._cancelHandler = cancelHandler;
    this._onCancellation = onCancellation;
    this._idempotentResume = idempotentResume;
    this._cancelCause = cancelCause;
  }
  CompletedContinuation_0.prototype._get_cancelled__0_k$ = function () {
    return !(this._cancelCause == null);
  };
  CompletedContinuation_0.prototype.invokeHandlers_939j49_k$ = function (cont, cause) {
    var tmp0_safe_receiver = this._cancelHandler;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp$ret$0 = cont.callCancelHandler_yvykkv_k$(tmp0_safe_receiver, cause);
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = this._onCancellation;
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = cont.callOnCancellation_5kfjg_k$(tmp1_safe_receiver, cause);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  CompletedContinuation_0.prototype.copy_wkt0jr_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation_0(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.copy$default_tn4acp_k$ = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      result = this._result_0;
    if (!(($mask0 & 2) === 0))
      cancelHandler = this._cancelHandler;
    if (!(($mask0 & 4) === 0))
      onCancellation = this._onCancellation;
    if (!(($mask0 & 8) === 0))
      idempotentResume = this._idempotentResume;
    if (!(($mask0 & 16) === 0))
      cancelCause = this._cancelCause;
    return this.copy_wkt0jr_k$(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  CompletedContinuation_0.prototype.toString = function () {
    return '' + 'CompletedContinuation(result=' + this._result_0 + ', cancelHandler=' + this._cancelHandler + ', onCancellation=' + this._onCancellation + ', idempotentResume=' + this._idempotentResume + ', cancelCause=' + this._cancelCause + ')';
  };
  CompletedContinuation_0.prototype.hashCode = function () {
    var result = this._result_0 == null ? 0 : hashCode(this._result_0);
    result = imul(result, 31) + (this._cancelHandler == null ? 0 : hashCode(this._cancelHandler)) | 0;
    result = imul(result, 31) + (this._onCancellation == null ? 0 : hashCode(this._onCancellation)) | 0;
    result = imul(result, 31) + (this._idempotentResume == null ? 0 : hashCode(this._idempotentResume)) | 0;
    result = imul(result, 31) + (this._cancelCause == null ? 0 : hashCode(this._cancelCause)) | 0;
    return result;
  };
  CompletedContinuation_0.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation_0))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedContinuation_0 ? other : THROW_CCE();
    if (!equals_0(this._result_0, tmp0_other_with_cast._result_0))
      return false;
    if (!equals_0(this._cancelHandler, tmp0_other_with_cast._cancelHandler))
      return false;
    if (!equals_0(this._onCancellation, tmp0_other_with_cast._onCancellation))
      return false;
    if (!equals_0(this._idempotentResume, tmp0_other_with_cast._idempotentResume))
      return false;
    if (!equals_0(this._cancelCause, tmp0_other_with_cast._cancelCause))
      return false;
    return true;
  };
  CompletedContinuation_0.$metadata$ = {
    simpleName: 'CompletedContinuation',
    kind: 'class',
    interfaces: []
  };
  function BeforeResumeCancelHandler() {
  }
  BeforeResumeCancelHandler.$metadata$ = {
    simpleName: 'BeforeResumeCancelHandler',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCancel(handler) {
    CancelHandler.call(this);
    this._handler = handler;
  }
  InvokeOnCancel.prototype.invoke_houul8_k$ = function (cause) {
    this._handler(cause);
  };
  InvokeOnCancel.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  InvokeOnCancel.prototype.toString = function () {
    return '' + 'InvokeOnCancel[' + _get_classSimpleName_(this._handler) + '@' + _get_hexAddress_(this) + ']';
  };
  InvokeOnCancel.$metadata$ = {
    simpleName: 'InvokeOnCancel',
    kind: 'class',
    interfaces: []
  };
  function CompletableJob() {
  }
  CompletableJob.$metadata$ = {
    simpleName: 'CompletableJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      handled = false;
    CompletedExceptionally.call($this, cause, handled);
    return $this;
  }
  function CompletedExceptionally_init_$Create$(cause, handled, $mask0, $marker) {
    return CompletedExceptionally_init_$Init$(cause, handled, $mask0, $marker, Object.create(CompletedExceptionally.prototype));
  }
  function CompletedExceptionally(cause, handled) {
    this._cause = cause;
    this.__handled = atomic_0(handled);
  }
  CompletedExceptionally.prototype._get_cause__0_k$ = function () {
    return this._cause;
  };
  CompletedExceptionally.prototype.makeHandled_0_k$ = function () {
    return this.__handled.atomicfu$compareAndSet(false, true);
  };
  CompletedExceptionally.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '[' + this._cause + ']';
  };
  CompletedExceptionally.$metadata$ = {
    simpleName: 'CompletedExceptionally',
    kind: 'class',
    interfaces: []
  };
  function CancelledContinuation(continuation, cause, handled) {
    var tmp0_elvis_lhs = cause;
    CompletedExceptionally.call(this, tmp0_elvis_lhs == null ? CancellationException_init_$Create$('' + 'Continuation ' + continuation + ' was cancelled normally') : tmp0_elvis_lhs, handled);
    this.__resumed = atomic_0(false);
  }
  CancelledContinuation.prototype.makeResumed_0_k$ = function () {
    return this.__resumed.atomicfu$compareAndSet(false, true);
  };
  CancelledContinuation.$metadata$ = {
    simpleName: 'CancelledContinuation',
    kind: 'class',
    interfaces: []
  };
  function toState(_this_, caller) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl(_this_);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl_(_this_);
          var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = tmp0__anonymous__2;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          var tmp_1 = recoverStackTrace(exception_1, caller);
          tmp$ret$1 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState_0(_this_, onCancellation) {
    var tmp$ret$2;
    $l$block_1: {
      {
      }
      var exception_1 = Result__exceptionOrNull_impl(_this_);
      var tmp;
      if (exception_1 == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp_0 = _Result___get_value__impl_(_this_);
          var tmp0__anonymous__2 = (tmp_0 == null ? true : isObject(tmp_0)) ? tmp_0 : THROW_CCE();
          tmp$ret$0 = !(onCancellation == null) ? new CompletedWithCancellation(tmp0__anonymous__2, onCancellation) : tmp0__anonymous__2;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = CompletedExceptionally_init_$Create$(exception_1, false, 2, null);
          break $l$block_0;
        }
        tmp = tmp$ret$1;
      }
      tmp$ret$2 = tmp;
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function toState$default(_this_, onCancellation, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancellation = null;
    return toState_0(_this_, onCancellation);
  }
  function CompletedWithCancellation(result, onCancellation) {
    this._result_1 = result;
    this._onCancellation_0 = onCancellation;
  }
  CompletedWithCancellation.prototype.toString = function () {
    return '' + 'CompletedWithCancellation(result=' + this._result_1 + ', onCancellation=' + this._onCancellation_0 + ')';
  };
  CompletedWithCancellation.prototype.hashCode = function () {
    var result = this._result_1 == null ? 0 : hashCode(this._result_1);
    result = imul(result, 31) + hashCode(this._onCancellation_0) | 0;
    return result;
  };
  CompletedWithCancellation.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedWithCancellation))
      return false;
    else {
    }
    var tmp0_other_with_cast = other instanceof CompletedWithCancellation ? other : THROW_CCE();
    if (!equals_0(this._result_1, tmp0_other_with_cast._result_1))
      return false;
    if (!equals_0(this._onCancellation_0, tmp0_other_with_cast._onCancellation_0))
      return false;
    return true;
  };
  CompletedWithCancellation.$metadata$ = {
    simpleName: 'CompletedWithCancellation',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__25() {
  }
  _no_name_provided__25.prototype.invoke_k332zt_k$ = function (it) {
    return it instanceof CoroutineDispatcher ? it : null;
  };
  _no_name_provided__25.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_k332zt_k$((!(p1 == null) ? isInterface(p1, Element_0) : false) ? p1 : THROW_CCE());
  };
  _no_name_provided__25.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Key_1() {
    Key_instance_0 = this;
    var tmp = Key_getInstance();
    AbstractCoroutineContextKey.call(this, tmp, _no_name_provided_$factory_22());
  }
  Key_1.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: []
  };
  var Key_instance_0;
  function Key_getInstance_0() {
    if (Key_instance_0 == null)
      new Key_1();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance_0();
    AbstractCoroutineContextElement.call(this, Key_getInstance());
  }
  CoroutineDispatcher.prototype.isDispatchNeeded_d7pszg_k$ = function (context) {
    return true;
  };
  CoroutineDispatcher.prototype.interceptContinuation_x4ijla_k$ = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  CoroutineDispatcher.prototype.releaseInterceptedContinuation_h7c6yl_k$ = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.release_sv8swh_k$();
  };
  CoroutineDispatcher.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this);
  };
  CoroutineDispatcher.$metadata$ = {
    simpleName: 'CoroutineDispatcher',
    kind: 'class',
    interfaces: [ContinuationInterceptor]
  };
  function _no_name_provided_$factory_22() {
    var i = new _no_name_provided__25();
    return function (p1) {
      return i.invoke_k332zt_k$(p1);
    };
  }
  function handleCoroutineException(context, exception) {
    try {
      var tmp0_safe_receiver = context.get_9uvjra_k$(Key_getInstance_1());
      if (tmp0_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          tmp0_safe_receiver.handleException_ym78xn_k$(context, exception);
          return Unit_getInstance();
        }
      }
      Unit_getInstance();
    } catch ($p) {
      if ($p instanceof Error) {
        handleCoroutineExceptionImpl(context, handlerException(exception, $p));
        return Unit_getInstance();
      } else {
        {
          throw $p;
        }
      }
    }
    handleCoroutineExceptionImpl(context, exception);
  }
  function Key_2() {
    Key_instance_1 = this;
  }
  Key_2.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_1;
  function Key_getInstance_1() {
    if (Key_instance_1 == null)
      new Key_2();
    return Key_instance_1;
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    var tmp$ret$0;
    $l$block: {
      var tmp0_apply_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
      {
      }
      {
        {
        }
      }
      tmp$ret$0 = tmp0_apply_0;
      break $l$block;
    }
    return tmp$ret$0;
  }
  function CopyableThrowable() {
  }
  CopyableThrowable.$metadata$ = {
    simpleName: 'CopyableThrowable',
    kind: 'interface',
    interfaces: []
  };
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this._useCount = new Long(0, 0);
    this._shared = false;
    this._unconfinedQueue = null;
  }
  EventLoop.prototype.processUnconfinedEvent_0_k$ = function () {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.removeFirstOrNull_0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.run_sv8swh_k$();
    return true;
  };
  EventLoop.prototype.dispatchUnconfined_3yrun8_k$ = function (task) {
    var tmp0_elvis_lhs = this._unconfinedQueue;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = new ArrayQueue();
        {
        }
        {
          this._unconfinedQueue = tmp0_also_0;
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.addLast_iav7o_k$(task);
  };
  EventLoop.prototype._get_isUnconfinedLoopActive__0_k$ = function () {
    return this._useCount.compareTo_wiekkq_k$(delta(this, true)) >= 0;
  };
  EventLoop.prototype._get_isUnconfinedQueueEmpty__0_k$ = function () {
    var tmp0_safe_receiver = this._unconfinedQueue;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_isEmpty__0_k$();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  EventLoop.prototype.incrementUseCount_rpwsgn_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.plus_wiekkq_k$(delta(this, unconfined));
    if (!unconfined)
      this._shared = true;
  };
  EventLoop.prototype.decrementUseCount_rpwsgn_k$ = function (unconfined) {
    var tmp0_this = this;
    tmp0_this._useCount = tmp0_this._useCount.minus_wiekkq_k$(delta(this, unconfined));
    if (this._useCount.compareTo_wiekkq_k$(new Long(0, 0)) > 0)
      return Unit_getInstance();
    {
    }
    if (this._shared) {
      this.shutdown_sv8swh_k$();
    }};
  EventLoop.prototype.shutdown_sv8swh_k$ = function () {
  };
  EventLoop.$metadata$ = {
    simpleName: 'EventLoop',
    kind: 'class',
    interfaces: []
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this._ref = new CommonThreadLocal();
  }
  ThreadLocalEventLoop.prototype._get_eventLoop__0_k$ = function () {
    var tmp0_elvis_lhs = this._ref.get_0_k$();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_also_0 = createEventLoop();
        {
        }
        {
          ThreadLocalEventLoop_getInstance()._ref.set_iav7o_k$(tmp0_also_0);
        }
        tmp$ret$0 = tmp0_also_0;
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  ThreadLocalEventLoop.$metadata$ = {
    simpleName: 'ThreadLocalEventLoop',
    kind: 'object',
    interfaces: []
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$_1(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  CompletionHandlerException.$metadata$ = {
    simpleName: 'CompletionHandlerException',
    kind: 'class',
    interfaces: []
  };
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$_0(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  CoroutinesInternalError.$metadata$ = {
    simpleName: 'CoroutinesInternalError',
    kind: 'class',
    interfaces: []
  };
  function DisposableHandle() {
  }
  DisposableHandle.$metadata$ = {
    simpleName: 'DisposableHandle',
    kind: 'interface',
    interfaces: []
  };
  function Key_3() {
    Key_instance_2 = this;
    initializeDefaultExceptionHandlers();
  }
  Key_3.$metadata$ = {
    simpleName: 'Key',
    kind: 'object',
    interfaces: [Key_0]
  };
  var Key_instance_2;
  function Key_getInstance_2() {
    if (Key_instance_2 == null)
      new Key_3();
    return Key_instance_2;
  }
  function Job() {
  }
  Job.prototype.invokeOnCompletion$default_n4h7x8_k$ = function (onCancelling, invokeImmediately, handler, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      onCancelling = false;
    if (!(($mask0 & 2) === 0))
      invokeImmediately = true;
    return $handler == null ? this.invokeOnCompletion_431mg2_k$(onCancelling, invokeImmediately, handler) : $handler(onCancelling, invokeImmediately, handler);
  };
  Job.$metadata$ = {
    simpleName: 'Job',
    kind: 'interface',
    interfaces: [Element_0]
  };
  function ChildJob() {
  }
  ChildJob.$metadata$ = {
    simpleName: 'ChildJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ParentJob() {
  }
  ParentJob.$metadata$ = {
    simpleName: 'ParentJob',
    kind: 'interface',
    interfaces: [Job]
  };
  function ChildHandle() {
  }
  ChildHandle.$metadata$ = {
    simpleName: 'ChildHandle',
    kind: 'interface',
    interfaces: [DisposableHandle]
  };
  function NonDisposableHandle() {
    NonDisposableHandle_instance = this;
  }
  NonDisposableHandle.prototype.dispose_sv8swh_k$ = function () {
  };
  NonDisposableHandle.prototype.childCancelled_onfaoi_k$ = function (cause) {
    return false;
  };
  NonDisposableHandle.prototype.toString = function () {
    return 'NonDisposableHandle';
  };
  NonDisposableHandle.$metadata$ = {
    simpleName: 'NonDisposableHandle',
    kind: 'object',
    interfaces: [DisposableHandle, ChildHandle]
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    if (NonDisposableHandle_instance == null)
      new NonDisposableHandle();
    return NonDisposableHandle_instance;
  }
  function ensureActive(_this_) {
    var tmp0_safe_receiver = _this_.get_9uvjra_k$(Key_getInstance_2());
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
      Unit_getInstance();
    }
    Unit_getInstance();
  }
  function ensureActive_0(_this_) {
    if (!_this_._get_isActive__0_k$())
      throw _this_.getCancellationException_0_k$();
  }
  function Job_0(parent) {
    return new JobImpl(parent);
  }
  function Job$default(parent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      parent = null;
    return Job_0(parent);
  }
  var COMPLETING_ALREADY;
  var COMPLETING_WAITING_CHILDREN;
  var COMPLETING_RETRY;
  var TOO_LATE_TO_CANCEL;
  var SEALED;
  var EMPTY_NEW;
  var EMPTY_ACTIVE;
  function Empty(isActive) {
    this._isActive = isActive;
  }
  Empty.prototype._get_isActive__0_k$ = function () {
    return this._isActive;
  };
  Empty.prototype._get_list__0_k$ = function () {
    return null;
  };
  Empty.prototype.toString = function () {
    return '' + 'Empty{' + (this._isActive ? 'Active' : 'New') + '}';
  };
  Empty.$metadata$ = {
    simpleName: 'Empty',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function Incomplete() {
  }
  Incomplete.$metadata$ = {
    simpleName: 'Incomplete',
    kind: 'interface',
    interfaces: []
  };
  function NodeList_0() {
    LinkedListHead.call(this);
  }
  NodeList_0.prototype._get_isActive__0_k$ = function () {
    return true;
  };
  NodeList_0.prototype._get_list__0_k$ = function () {
    return this;
  };
  NodeList_0.prototype.getString_6wfw3l_k$ = function (state) {
    var tmp$ret$1;
    $l$block_0: {
      {
      }
      var tmp$ret$0;
      $l$block: {
        var tmp0_apply_0_1 = StringBuilder_init_$Create$();
        {
        }
        {
          tmp0_apply_0_1.append_uch40_k$('List{');
          Unit_getInstance();
          tmp0_apply_0_1.append_uch40_k$(state);
          Unit_getInstance();
          tmp0_apply_0_1.append_uch40_k$('}[');
          Unit_getInstance();
          var first_3 = true;
          {
            var cur_1_4 = this._get__next__0_k$();
            while (!equals_0(cur_1_4, this)) {
              if (cur_1_4 instanceof JobNode) {
                var tmp0__anonymous__2_5 = cur_1_4;
                if (first_3)
                  first_3 = false;
                else {
                  tmp0_apply_0_1.append_uch40_k$(', ');
                  Unit_getInstance();
                }
                tmp0_apply_0_1.append_wi7j7l_k$(tmp0__anonymous__2_5);
                Unit_getInstance();
              } else {
              }
              cur_1_4 = cur_1_4.__next;
            }
          }
          tmp0_apply_0_1.append_uch40_k$(']');
          Unit_getInstance();
        }
        tmp$ret$0 = tmp0_apply_0_1;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0.toString();
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  NodeList_0.prototype.toString = function () {
    return DEBUG ? this.getString_6wfw3l_k$('Active') : anyToString(this);
  };
  NodeList_0.$metadata$ = {
    simpleName: 'NodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function JobNode() {
    CompletionHandlerBase.call(this);
  }
  JobNode.prototype._get_job__0_k$ = function () {
    var tmp = this._job;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  JobNode.prototype._get_isActive__0_k$ = function () {
    return true;
  };
  JobNode.prototype._get_list__0_k$ = function () {
    return null;
  };
  JobNode.prototype.dispose_sv8swh_k$ = function () {
    return this._get_job__0_k$().removeNode_2kg835_k$(this);
  };
  JobNode.prototype.toString = function () {
    return '' + _get_classSimpleName_(this) + '@' + _get_hexAddress_(this) + '[job@' + _get_hexAddress_(this._get_job__0_k$()) + ']';
  };
  JobNode.$metadata$ = {
    simpleName: 'JobNode',
    kind: 'class',
    interfaces: [DisposableHandle, Incomplete]
  };
  function _set_exceptionsHolder_($this, value) {
    $this.__exceptionsHolder._value_0 = value;
  }
  function _get_exceptionsHolder_($this) {
    return $this.__exceptionsHolder._value_0;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$_0(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    {
    }
    {
    }
    {
    }
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
    var wasCancelling = false;
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        wasCancelling = state._get_isCancelling__0_k$();
        var exceptions_2 = state.sealLocked_h62ekz_k$(proposedException);
        var finalCause_3 = getFinalRootCause($this, state, exceptions_2);
        if (!(finalCause_3 == null))
          addSuppressedExceptions($this, finalCause_3, exceptions_2);
        tmp$ret$0 = finalCause_3;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var finalException = tmp$ret$1;
    var tmp;
    if (finalException == null) {
      tmp = proposedUpdate;
    } else if (finalException === proposedException) {
      tmp = proposedUpdate;
    } else {
      tmp = CompletedExceptionally_init_$Create$(finalException, false, 2, null);
    }
    var finalState = tmp;
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) ? true : $this.handleJobException_onfaoi_k$(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).makeHandled_0_k$();
        Unit_getInstance();
      }}if (!wasCancelling)
      $this.onCancelling_houul8_k$(finalException);
    $this.onCompletionInternal_qi8yb4_k$(finalState);
    var casSuccess = $this.__state_0.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    {
    }
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.isEmpty_0_k$()) {
      if (state._get_isCancelling__0_k$()) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        return tmp$ret$0;
      }return null;
    }var tmp$ret$2;
    $l$block_2: {
      var tmp0_iterator_1 = exceptions.iterator_0_k$();
      while (tmp0_iterator_1.hasNext_0_k$()) {
        var element_2 = tmp0_iterator_1.next_0_k$();
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !(element_2 instanceof CancellationException);
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp$ret$2 = element_2;
          break $l$block_2;
        } else {
        }
      }
      tmp$ret$2 = null;
      break $l$block_2;
    }
    var firstNonCancellation = tmp$ret$2;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.get_ha5a7z_k$(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$4;
      $l$block_5: {
        var tmp0_iterator_1_0 = exceptions.iterator_0_k$();
        while (tmp0_iterator_1_0.hasNext_0_k$()) {
          var element_2_0 = tmp0_iterator_1_0.next_0_k$();
          var tmp$ret$3;
          $l$block_3: {
            var tmp;
            if (!(element_2_0 === first)) {
              tmp = element_2_0 instanceof TimeoutCancellationException;
            } else {
              tmp = false;
            }
            tmp$ret$3 = tmp;
            break $l$block_3;
          }
          if (tmp$ret$3) {
            tmp$ret$4 = element_2_0;
            break $l$block_5;
          } else {
          }
        }
        tmp$ret$4 = null;
        break $l$block_5;
      }
      var detailedTimeoutException = tmp$ret$4;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    } else {
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions._get_size__0_k$() <= 1)
      return Unit_getInstance();
    var seenExceptions = identitySet(exceptions._get_size__0_k$());
    var unwrappedCause = unwrap(rootCause);
    var tmp0_iterator = exceptions.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var exception = tmp0_iterator.next_0_k$();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) ? !(unwrapped === unwrappedCause) : false) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.add_2bq_k$(unwrapped);
      } else {
        {
          tmp = false;
        }
      }
      if (tmp) {
        {
        }
      } else {
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    {
    }
    {
    }
    if (!$this.__state_0.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.onCancelling_houul8_k$(null);
    $this.onCompletionInternal_qi8yb4_k$(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this._get_parentHandle__0_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        tmp0_safe_receiver.dispose_sv8swh_k$();
        tmp$ret$0 = $this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver._cause;
    if (state instanceof JobNode) {
      try {
        state.invoke(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          $this.handleOnCompletionException_1ti8hr_k$(new CompletionHandlerException('' + 'Exception in completion handler ' + state + ' for ' + $this, $p));
        } else {
          {
            throw $p;
          }
        }
      }
    } else {
      {
        var tmp2_safe_receiver = state._get_list__0_k$();
        if (tmp2_safe_receiver == null)
          null;
        else {
          notifyCompletion(tmp2_safe_receiver, $this, cause);
          Unit_getInstance();
        }
        Unit_getInstance();
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.onCancelling_houul8_k$(cause);
    {
      var exception_1 = null;
      {
        var cur_1 = list._get__next__0_k$();
        while (!equals_0(cur_1, list)) {
          if (cur_1 instanceof JobCancellingNode) {
            var tmp0__anonymous__2_2 = cur_1;
            try {
              tmp0__anonymous__2_2.invoke(cause);
            } catch ($p) {
              if ($p instanceof Error) {
                var tmp0_safe_receiver_5_5 = exception_1;
                var tmp;
                if (tmp0_safe_receiver_5_5 == null) {
                  tmp = null;
                } else {
                  var tmp$ret$0;
                  $l$block: {
                    {
                    }
                    {
                      {
                      }
                    }
                    tmp$ret$0 = tmp0_safe_receiver_5_5;
                    break $l$block;
                  }
                  tmp = tmp$ret$0;
                }
                var tmp1_elvis_lhs_4_4 = tmp;
                if (tmp1_elvis_lhs_4_4 == null) {
                  var tmp$ret$1;
                  $l$block_0: {
                    {
                    }
                    exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
                    tmp$ret$1 = Unit_getInstance();
                    break $l$block_0;
                  }
                  Unit_getInstance();
                } else
                  tmp1_elvis_lhs_4_4;
                Unit_getInstance();
              } else {
                {
                  throw $p;
                }
              }
            }
          } else {
          }
          cur_1 = cur_1.__next;
        }
      }
      var tmp0_safe_receiver_8 = exception_1;
      if (tmp0_safe_receiver_8 == null)
        null;
      else {
        var tmp$ret$2;
        $l$block_1: {
          {
          }
          tmp$ret$2 = $this.handleOnCompletionException_1ti8hr_k$(tmp0_safe_receiver_8);
          break $l$block_1;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
    }
    cancelParent($this, cause);
    Unit_getInstance();
  }
  function cancelParent($this, cause) {
    if ($this._get_isScopedCoroutine__0_k$())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this._get_parentHandle__0_k$();
    if (parent === null ? true : parent === NonDisposableHandle_getInstance()) {
      return isCancellation;
    }return parent.childCancelled_onfaoi_k$(cause) ? true : isCancellation;
  }
  function notifyCompletion(_this_, $this, cause) {
    var exception_1 = null;
    {
      var cur_1 = _this_._get__next__0_k$();
      while (!equals_0(cur_1, _this_)) {
        if (cur_1 instanceof JobNode) {
          var tmp0__anonymous__2_2 = cur_1;
          try {
            tmp0__anonymous__2_2.invoke(cause);
          } catch ($p) {
            if ($p instanceof Error) {
              var tmp0_safe_receiver_5_5 = exception_1;
              var tmp;
              if (tmp0_safe_receiver_5_5 == null) {
                tmp = null;
              } else {
                var tmp$ret$0;
                $l$block: {
                  {
                  }
                  {
                    {
                    }
                  }
                  tmp$ret$0 = tmp0_safe_receiver_5_5;
                  break $l$block;
                }
                tmp = tmp$ret$0;
              }
              var tmp1_elvis_lhs_4_4 = tmp;
              if (tmp1_elvis_lhs_4_4 == null) {
                var tmp$ret$1;
                $l$block_0: {
                  {
                  }
                  exception_1 = new CompletionHandlerException('' + 'Exception in completion handler ' + tmp0__anonymous__2_2 + ' for ' + $this, $p);
                  tmp$ret$1 = Unit_getInstance();
                  break $l$block_0;
                }
                Unit_getInstance();
              } else
                tmp1_elvis_lhs_4_4;
              Unit_getInstance();
            } else {
              {
                throw $p;
              }
            }
          }
        } else {
        }
        cur_1 = cur_1.__next;
      }
    }
    var tmp0_safe_receiver_8 = exception_1;
    if (tmp0_safe_receiver_8 == null)
      null;
    else {
      var tmp$ret$2;
      $l$block_1: {
        {
        }
        tmp$ret$2 = $this.handleOnCompletionException_1ti8hr_k$(tmp0_safe_receiver_8);
        break $l$block_1;
      }
      Unit_getInstance();
    }
    return Unit_getInstance();
  }
  function startInternal($this, state) {
    var tmp0_subject = state;
    if (tmp0_subject instanceof Empty) {
      if (state._isActive)
        return 0;
      if (!$this.__state_0.atomicfu$compareAndSet(state, EMPTY_ACTIVE))
        return -1;
      $this.onStart_sv8swh_k$();
      return 1;
    } else {
      if (tmp0_subject instanceof InactiveNodeList) {
        if (!$this.__state_0.atomicfu$compareAndSet(state, state._list_0))
          return -1;
        $this.onStart_sv8swh_k$();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function makeNode($this, handler, onCancelling) {
    var tmp;
    if (onCancelling) {
      var tmp0_elvis_lhs = handler instanceof JobCancellingNode ? handler : null;
      tmp = tmp0_elvis_lhs == null ? new InvokeOnCancelling(handler) : tmp0_elvis_lhs;
    } else {
      var tmp1_safe_receiver = handler instanceof JobNode ? handler : null;
      var tmp_0;
      if (tmp1_safe_receiver == null) {
        tmp_0 = null;
      } else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          {
            {
            }
          }
          tmp$ret$0 = tmp1_safe_receiver;
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      }
      var tmp2_elvis_lhs = tmp_0;
      tmp = tmp2_elvis_lhs == null ? new InvokeOnCompletion(handler) : tmp2_elvis_lhs;
    }
    var node = tmp;
    node._job = $this;
    return node;
  }
  function addLastAtomic($this, expect, list, node) {
    var tmp$ret$1;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $this._get_state__0_k$() === expect;
        break $l$block;
      }
      if (!tmp$ret$0) {
        tmp$ret$1 = false;
        break $l$block_1;
      } else {
      }
      list.addLast_qdrmxw_k$(node);
      tmp$ret$1 = true;
      break $l$block_1;
    }
    return tmp$ret$1;
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList_0();
    var update = state._isActive ? list : new InactiveNodeList(list);
    $this.__state_0.atomicfu$compareAndSet(state, update);
    Unit_getInstance();
  }
  function promoteSingleToNodeList($this, state) {
    state.addOneIfEmpty_fpxpjn_k$(new NodeList_0());
    Unit_getInstance();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = state.__next;
      break $l$block;
    }
    var list = tmp$ret$0;
    $this.__state_0.atomicfu$compareAndSet(state, list);
    Unit_getInstance();
  }
  function joinInternal($this) {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = $this._get_state__0_k$();
          if (!(!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false))
            return false;
          else {
          }
          if (startInternal($this, tmp0__anonymous__1) >= 0)
            return true;
        }
      }
      Unit_getInstance();
    }
  }
  function joinSuspend($this, $cont) {
    var tmp$ret$2;
    $l$block_1: {
      var tmp0__anonymous__1_1 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
      cancellable_2_2.initCancellability_sv8swh_k$();
      {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__get_asHandler__0_4 = new ResumeOnCompletion(cancellable_2_2);
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = tmp0__get_asHandler__0_4;
            break $l$block;
          }
          tmp$ret$1 = tmp$ret$0;
          break $l$block_0;
        }
        disposeOnCancellation(cancellable_2_2, $this.invokeOnCompletion_wjzpsu_k$(tmp$ret$1));
      }
      tmp$ret$2 = cancellable_2_2.getResult_0_k$();
      break $l$block_1;
    }
    return tmp$ret$2;
  }
  function cancelMakeCompleting($this, cause) {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = $this._get_state__0_k$();
          var tmp;
          if (!(!(tmp0__anonymous__1 == null) ? isInterface(tmp0__anonymous__1, Incomplete) : false)) {
            tmp = true;
          } else {
            {
              var tmp_0;
              if (tmp0__anonymous__1 instanceof Finishing) {
                tmp_0 = tmp0__anonymous__1._get_isCompleting__0_k$();
              } else {
                {
                  tmp_0 = false;
                }
              }
              tmp = tmp_0;
            }
          }
          if (tmp) {
            return COMPLETING_ALREADY;
          } else {
          }
          var tmp_1 = createCauseException($this, cause);
          var proposedUpdate_2 = CompletedExceptionally_init_$Create$(tmp_1, false, 2, null);
          var finalState_3 = tryMakeCompleting($this, tmp0__anonymous__1, proposedUpdate_2);
          if (!(finalState_3 === COMPLETING_RETRY))
            return finalState_3;
        }
      }
      Unit_getInstance();
    }
  }
  function createCauseException($this, cause) {
    var tmp0_subject = cause;
    var tmp;
    if (tmp0_subject == null ? true : tmp0_subject instanceof Error) {
      var tmp1_elvis_lhs = cause;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_elvis_lhs_1 = null;
          tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? $this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, null, $this);
          break $l$block;
        }
        tmp_0 = tmp$ret$0;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      {
        tmp = ((!(cause == null) ? isInterface(cause, ParentJob) : false) ? cause : THROW_CCE()).getChildJobCancellationCause_0_k$();
      }
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    {
      while (true) {
        var tmp$ret$7;
        $l$block_6: {
          var tmp0__anonymous__1 = $this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof Finishing) {
            var tmp$ret$4;
            $l$block_3: {
              var tmp$ret$3;
              $l$block_2: {
                if (tmp0__anonymous__1._get_isSealed__0_k$())
                  return TOO_LATE_TO_CANCEL;
                var wasCancelling_2_4 = tmp0__anonymous__1._get_isCancelling__0_k$();
                if (!(cause == null) ? true : !wasCancelling_2_4) {
                  var tmp0_elvis_lhs_4_6 = causeExceptionCache;
                  var tmp;
                  if (tmp0_elvis_lhs_4_6 == null) {
                    var tmp$ret$0;
                    $l$block: {
                      var tmp0_also_0_5_7 = createCauseException($this, cause);
                      {
                      }
                      {
                        causeExceptionCache = tmp0_also_0_5_7;
                      }
                      tmp$ret$0 = tmp0_also_0_5_7;
                      break $l$block;
                    }
                    tmp = tmp$ret$0;
                  } else {
                    tmp = tmp0_elvis_lhs_4_6;
                  }
                  var causeException_3_5 = tmp;
                  tmp0__anonymous__1.addExceptionLocked_1ti8hr_k$(causeException_3_5);
                }var tmp$ret$2;
                $l$block_1: {
                  var tmp1_takeIf_0_6_8 = tmp0__anonymous__1._get_rootCause__0_k$();
                  {
                  }
                  var tmp_0;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = !wasCancelling_2_4;
                    break $l$block_0;
                  }
                  if (tmp$ret$1) {
                    tmp_0 = tmp1_takeIf_0_6_8;
                  } else {
                    {
                      tmp_0 = null;
                    }
                  }
                  tmp$ret$2 = tmp_0;
                  break $l$block_1;
                }
                tmp$ret$3 = tmp$ret$2;
                break $l$block_2;
              }
              tmp$ret$4 = tmp$ret$3;
              break $l$block_3;
            }
            var notifyRootCause_3 = tmp$ret$4;
            var tmp1_safe_receiver_9 = notifyRootCause_3;
            if (tmp1_safe_receiver_9 == null)
              null;
            else {
              var tmp$ret$5;
              $l$block_4: {
                {
                }
                tmp$ret$5 = notifyCancelling($this, tmp0__anonymous__1._list, tmp1_safe_receiver_9);
                break $l$block_4;
              }
              Unit_getInstance();
            }
            Unit_getInstance();
            return COMPLETING_ALREADY;
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var tmp2_elvis_lhs_11 = causeExceptionCache;
              var tmp_1;
              if (tmp2_elvis_lhs_11 == null) {
                var tmp$ret$6;
                $l$block_5: {
                  var tmp0_also_0_12 = createCauseException($this, cause);
                  {
                  }
                  {
                    causeExceptionCache = tmp0_also_0_12;
                  }
                  tmp$ret$6 = tmp0_also_0_12;
                  break $l$block_5;
                }
                tmp_1 = tmp$ret$6;
              } else {
                tmp_1 = tmp2_elvis_lhs_11;
              }
              var causeException_10 = tmp_1;
              if (tmp0__anonymous__1._get_isActive__0_k$()) {
                if (tryMakeCancelling($this, tmp0__anonymous__1, causeException_10))
                  return COMPLETING_ALREADY;
              } else {
                var finalState_13 = tryMakeCompleting($this, tmp0__anonymous__1, CompletedExceptionally_init_$Create$(causeException_10, false, 2, null));
                if (finalState_13 === COMPLETING_ALREADY) {
                  var tmp1_error_0_14 = '' + 'Cannot happen in ' + tmp0__anonymous__1;
                  throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_14));
                } else if (finalState_13 === COMPLETING_RETRY) {
                  tmp$ret$7 = Unit_getInstance();
                  break $l$block_6;
                } else
                  return finalState_13;
              }
            } else {
              return TOO_LATE_TO_CANCEL;
            }
          }
        }
      }
      Unit_getInstance();
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp1_elvis_lhs = state._get_list__0_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_subject = state;
      var tmp_0;
      if (tmp0_subject instanceof Empty) {
        tmp_0 = new NodeList_0();
      } else {
        if (tmp0_subject instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          {
            var tmp0_error_0 = '' + 'State should have list: ' + state;
            throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
          }
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    {
    }
    {
    }
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.__state_0.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return COMPLETING_ALREADY;
    else {
    }
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      {
        tmp_1 = state instanceof JobNode;
      }
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      {
        tmp_0 = false;
      }
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }return COMPLETING_RETRY;
    } else {
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return COMPLETING_RETRY;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause = null;
    var tmp$ret$3;
    $l$block_2: {
      if (finishing._get_isCompleting__0_k$())
        return COMPLETING_ALREADY;
      finishing._set_isCompleting__rpwsgn_k$(true);
      if (!(finishing === state)) {
        if (!$this.__state_0.atomicfu$compareAndSet(state, finishing))
          return COMPLETING_RETRY;
      }{
      }
      var wasCancelling_2 = finishing._get_isCancelling__0_k$();
      var tmp0_safe_receiver_3 = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
      if (tmp0_safe_receiver_3 == null)
        null;
      else {
        var tmp$ret$0;
        $l$block: {
          {
          }
          tmp$ret$0 = finishing.addExceptionLocked_1ti8hr_k$(tmp0_safe_receiver_3._cause);
          break $l$block;
        }
        Unit_getInstance();
      }
      Unit_getInstance();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_takeIf_0_4 = finishing._get_rootCause__0_k$();
        {
        }
        var tmp_0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = !wasCancelling_2;
          break $l$block_0;
        }
        if (tmp$ret$1) {
          tmp_0 = tmp0_takeIf_0_4;
        } else {
          {
            tmp_0 = null;
          }
        }
        tmp$ret$2 = tmp_0;
        break $l$block_1;
      }
      notifyRootCause = tmp$ret$2;
      tmp$ret$3 = Unit_getInstance();
      break $l$block_2;
    }
    var tmp2_safe_receiver = notifyRootCause;
    if (tmp2_safe_receiver == null)
      null;
    else {
      var tmp$ret$4;
      $l$block_3: {
        {
        }
        tmp$ret$4 = notifyCancelling($this, list, tmp2_safe_receiver);
        break $l$block_3;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var child = firstChild($this, state);
    if (!(child == null) ? tryWaitForChild($this, finishing, child, proposedUpdate) : false)
      return COMPLETING_WAITING_CHILDREN;
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function firstChild($this, state) {
    var tmp1_elvis_lhs = state instanceof ChildHandleNode ? state : null;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      var tmp0_safe_receiver = state._get_list__0_k$();
      tmp = tmp0_safe_receiver == null ? null : nextChild(tmp0_safe_receiver, $this);
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    while (true) {
      var $this_1 = $this_0;
      var state_1 = state_0;
      var child_1 = child_0;
      var proposedUpdate_1 = proposedUpdate_0;
      var tmp$ret$1;
      $l$block_0: {
        var tmp0__get_asHandler__0 = new ChildCompletion($this_1, state_1, child_1, proposedUpdate_1);
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = tmp0__get_asHandler__0;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0;
        break $l$block_0;
      }
      var handle = child_1._childJob.invokeOnCompletion$default_n4h7x8_k$(false, false, tmp$ret$1, 1, null);
      if (!(handle === NonDisposableHandle_getInstance()))
        return true;
      var tmp0_elvis_lhs = nextChild(child_1, $this_1);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var nextChild_0 = tmp;
      $this_0 = $this_1;
      state_0 = state_1;
      child_0 = nextChild_0;
      proposedUpdate_0 = proposedUpdate_1;
      continue;
    }
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    {
    }
    var waitChild = nextChild(lastChild, $this);
    if (!(waitChild == null) ? tryWaitForChild($this, state, waitChild, proposedUpdate) : false)
      return Unit_getInstance();
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.afterCompletion_qi8yb4_k$(finalState);
  }
  function nextChild(_this_, $this) {
    var cur = _this_;
    $l$break: while (true) {
      var tmp$ret$0;
      $l$block: {
        var tmp0__get_isRemoved__0 = cur;
        tmp$ret$0 = tmp0__get_isRemoved__0.__removed;
        break $l$block;
      }
      if (!tmp$ret$0) {
        break $l$break;
      }var tmp$ret$1;
      $l$block_0: {
        var tmp1__get_prevNode__0 = cur;
        tmp$ret$1 = tmp1__get_prevNode__0.__prev;
        break $l$block_0;
      }
      cur = tmp$ret$1;
    }
    while (true) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp2__get_nextNode__0 = cur;
        tmp$ret$2 = tmp2__get_nextNode__0.__next;
        break $l$block_1;
      }
      cur = tmp$ret$2;
      var tmp$ret$3;
      $l$block_2: {
        var tmp3__get_isRemoved__0 = cur;
        tmp$ret$3 = tmp3__get_isRemoved__0.__removed;
        break $l$block_2;
      }
      if (tmp$ret$3)
        continue;
      else {
      }
      if (cur instanceof ChildHandleNode)
        return cur;
      else {
      }
      if (cur instanceof NodeList_0)
        return null;
      else {
      }
    }
  }
  function stateString($this, state) {
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_isCancelling__0_k$() ? 'Cancelling' : state._get_isCompleting__0_k$() ? 'Completing' : 'Active';
    } else {
      if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
        tmp = state._get_isActive__0_k$() ? 'Active' : 'New';
      } else {
        if (tmp0_subject instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          {
            tmp = 'Completed';
          }
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    this._list = list;
    this.__isCompleting = atomic_0(isCompleting);
    this.__rootCause = atomic(rootCause);
    this.__exceptionsHolder = atomic(null);
  }
  Finishing.prototype._get_list__0_k$ = function () {
    return this._list;
  };
  Finishing.prototype._set_isCompleting__rpwsgn_k$ = function (value) {
    this.__isCompleting._value_1 = value;
  };
  Finishing.prototype._get_isCompleting__0_k$ = function () {
    return this.__isCompleting._value_1;
  };
  Finishing.prototype._set_rootCause__houul8_k$ = function (value) {
    this.__rootCause._value_0 = value;
  };
  Finishing.prototype._get_rootCause__0_k$ = function () {
    return this.__rootCause._value_0;
  };
  Finishing.prototype._get_isSealed__0_k$ = function () {
    return _get_exceptionsHolder_(this) === SEALED;
  };
  Finishing.prototype._get_isCancelling__0_k$ = function () {
    return !(this._get_rootCause__0_k$() == null);
  };
  Finishing.prototype._get_isActive__0_k$ = function () {
    return this._get_rootCause__0_k$() == null;
  };
  Finishing.prototype.sealLocked_h62ekz_k$ = function (proposedException) {
    var eh = _get_exceptionsHolder_(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_also_0 = allocateList(this);
          {
          }
          {
            tmp0_also_0.add_2bq_k$(eh);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_also_0;
          break $l$block;
        }
        tmp = tmp$ret$0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
    var list = tmp;
    var rootCause = this._get_rootCause__0_k$();
    var tmp0_safe_receiver = rootCause;
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        tmp$ret$1 = list.add_vz2mgm_k$(0, tmp0_safe_receiver);
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    if (!(proposedException == null) ? !equals_0(proposedException, rootCause) : false) {
      list.add_2bq_k$(proposedException);
      Unit_getInstance();
    }_set_exceptionsHolder_(this, SEALED);
    return list;
  };
  Finishing.prototype.addExceptionLocked_1ti8hr_k$ = function (exception) {
    var rootCause = this._get_rootCause__0_k$();
    if (rootCause == null) {
      this._set_rootCause__houul8_k$(exception);
      return Unit_getInstance();
    }if (exception === rootCause)
      return Unit_getInstance();
    var eh = _get_exceptionsHolder_(this);
    if (eh == null)
      _set_exceptionsHolder_(this, exception);
    else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_getInstance();
        var tmp$ret$0;
        $l$block: {
          var tmp0_apply_0 = allocateList(this);
          {
          }
          {
            tmp0_apply_0.add_2bq_k$(eh);
            Unit_getInstance();
            tmp0_apply_0.add_2bq_k$(exception);
            Unit_getInstance();
          }
          tmp$ret$0 = tmp0_apply_0;
          break $l$block;
        }
        _set_exceptionsHolder_(this, tmp$ret$0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).add_2bq_k$(exception);
          Unit_getInstance();
        } else {
          {
            var tmp1_error_0 = '' + 'State is ' + eh;
            throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
          }
        }
      }
    }
  };
  Finishing.prototype.toString = function () {
    return '' + 'Finishing[cancelling=' + this._get_isCancelling__0_k$() + ', completing=' + this._get_isCompleting__0_k$() + ', rootCause=' + this._get_rootCause__0_k$() + ', exceptions=' + _get_exceptionsHolder_(this) + ', list=' + this._list + ']';
  };
  Finishing.$metadata$ = {
    simpleName: 'Finishing',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this._parent = parent;
    this._state_1 = state;
    this._child = child;
    this._proposedUpdate = proposedUpdate;
  }
  ChildCompletion.prototype.invoke_houul8_k$ = function (cause) {
    continueCompleting(this._parent, this._state_1, this._child, this._proposedUpdate);
  };
  ChildCompletion.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildCompletion.$metadata$ = {
    simpleName: 'ChildCompletion',
    kind: 'class',
    interfaces: []
  };
  function JobSupport(active) {
    this.__state_0 = atomic(active ? EMPTY_ACTIVE : EMPTY_NEW);
    this.__parentHandle = atomic(null);
  }
  JobSupport.prototype._get_key__0_k$ = function () {
    return Key_getInstance_2();
  };
  JobSupport.prototype._set_parentHandle__kbopvd_k$ = function (value) {
    this.__parentHandle._value_0 = value;
  };
  JobSupport.prototype._get_parentHandle__0_k$ = function () {
    return this.__parentHandle._value_0;
  };
  JobSupport.prototype.initParentJob_64sshe_k$ = function (parent) {
    {
    }
    if (parent == null) {
      this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
      return Unit_getInstance();
    }parent.start_0_k$();
    Unit_getInstance();
    var handle = parent.attachChild_o588si_k$(this);
    this._set_parentHandle__kbopvd_k$(handle);
    if (this._get_isCompleted__0_k$()) {
      handle.dispose_sv8swh_k$();
      this._set_parentHandle__kbopvd_k$(NonDisposableHandle_getInstance());
    }};
  JobSupport.prototype._get_state__0_k$ = function () {
    {
      var tmp0_loop_0 = this.__state_0;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_0;
          if (!(tmp1__anonymous__1 instanceof OpDescriptor))
            return tmp1__anonymous__1;
          else {
          }
          tmp1__anonymous__1.perform_wi7j7l_k$(this);
          Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_isActive__0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state._get_isActive__0_k$();
    } else {
      {
        tmp = false;
      }
    }
    return tmp;
  };
  JobSupport.prototype._get_isCompleted__0_k$ = function () {
    var tmp = this._get_state__0_k$();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  JobSupport.prototype.start_0_k$ = function () {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = startInternal(this, tmp0__anonymous__1);
          if (tmp0_subject_2 === 0)
            return false;
          else if (tmp0_subject_2 === 1)
            return true;
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.onStart_sv8swh_k$ = function () {
  };
  JobSupport.prototype.getCancellationException_0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state._get_rootCause__0_k$();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.toCancellationException_ntgz4s_k$(tmp0_safe_receiver, '' + _get_classSimpleName_(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp0_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        var tmp1_error_0 = '' + 'Job is still new or active: ' + this;
        throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.toCancellationException$default_f52skm_k$(state._cause, null, 1, null);
        } else {
          {
            tmp = new JobCancellationException('' + _get_classSimpleName_(this) + ' has completed normally', null, this);
          }
        }
      }
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException_ntgz4s_k$ = function (_this__0, message) {
    var tmp0_elvis_lhs = _this__0 instanceof CancellationException ? _this__0 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_elvis_lhs_1 = message;
        tmp$ret$0 = new JobCancellationException(tmp0_elvis_lhs_1 == null ? this.cancellationExceptionMessage_0_k$() : tmp0_elvis_lhs_1, _this__0, this);
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  JobSupport.prototype.toCancellationException$default_f52skm_k$ = function (_this__0, message, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      message = null;
    return this.toCancellationException_ntgz4s_k$(_this__0, message);
  };
  JobSupport.prototype.invokeOnCompletion_wjzpsu_k$ = function (handler) {
    return this.invokeOnCompletion_431mg2_k$(false, true, handler);
  };
  JobSupport.prototype.invokeOnCompletion_431mg2_k$ = function (onCancelling, invokeImmediately, handler) {
    var node = makeNode(this, handler, onCancelling);
    {
      while (true) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof Empty) {
            if (tmp0__anonymous__1._isActive) {
              if (this.__state_0.atomicfu$compareAndSet(tmp0__anonymous__1, node))
                return node;
            } else
              promoteEmptyToNodeList(this, tmp0__anonymous__1);
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              var list_3 = tmp0__anonymous__1._get_list__0_k$();
              if (list_3 == null) {
                promoteSingleToNodeList(this, tmp0__anonymous__1 instanceof JobNode ? tmp0__anonymous__1 : THROW_CCE());
              } else {
                var rootCause_4 = null;
                var handle_5 = NonDisposableHandle_getInstance();
                var tmp;
                if (onCancelling) {
                  tmp = tmp0__anonymous__1 instanceof Finishing;
                } else {
                  tmp = false;
                }
                if (tmp) {
                  var tmp$ret$2;
                  $l$block_1: {
                    rootCause_4 = tmp0__anonymous__1._get_rootCause__0_k$();
                    var tmp_0;
                    var tmp_1;
                    if (rootCause_4 == null) {
                      tmp_1 = true;
                    } else {
                      var tmp_2;
                      var tmp$ret$0;
                      $l$block: {
                        tmp$ret$0 = handler instanceof ChildHandleNode;
                        break $l$block;
                      }
                      if (tmp$ret$0) {
                        tmp_2 = !tmp0__anonymous__1._get_isCompleting__0_k$();
                      } else {
                        {
                          tmp_2 = false;
                        }
                      }
                      tmp_1 = tmp_2;
                    }
                    if (tmp_1) {
                      if (!addLastAtomic(this, tmp0__anonymous__1, list_3, node)) {
                        tmp$ret$1 = Unit_getInstance();
                        break $l$block_0;
                      }if (rootCause_4 == null)
                        return node;
                      handle_5 = node;
                      tmp_0 = Unit_getInstance();
                    } else {
                    }
                    tmp$ret$2 = tmp_0;
                    break $l$block_1;
                  }
                } else {
                }
                if (!(rootCause_4 == null)) {
                  if (invokeImmediately)
                    invokeIt(handler, rootCause_4);
                  return handle_5;
                } else {
                  if (addLastAtomic(this, tmp0__anonymous__1, list_3, node))
                    return node;
                }
              }
            } else {
              {
                if (invokeImmediately) {
                  var tmp1_safe_receiver_6 = tmp0__anonymous__1 instanceof CompletedExceptionally ? tmp0__anonymous__1 : null;
                  invokeIt(handler, tmp1_safe_receiver_6 == null ? null : tmp1_safe_receiver_6._cause);
                }return NonDisposableHandle_getInstance();
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.join_sv8swh_k$ = function ($cont) {
    if (!joinInternal(this)) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = $cont._get_context__0_k$();
        break $l$block;
      }
      ensureActive(tmp$ret$0);
      return Unit_getInstance();
    }return joinSuspend(this, $cont);
  };
  JobSupport.prototype.removeNode_2kg835_k$ = function (node) {
    {
      while (true) {
        {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var tmp0_subject_2 = tmp0__anonymous__1;
          if (tmp0_subject_2 instanceof JobNode) {
            if (!(tmp0__anonymous__1 === node))
              return Unit_getInstance();
            if (this.__state_0.atomicfu$compareAndSet(tmp0__anonymous__1, EMPTY_ACTIVE))
              return Unit_getInstance();
          } else {
            if (!(tmp0_subject_2 == null) ? isInterface(tmp0_subject_2, Incomplete) : false) {
              if (!(tmp0__anonymous__1._get_list__0_k$() == null)) {
                node.remove_0_k$();
                Unit_getInstance();
              }return Unit_getInstance();
            } else {
              return Unit_getInstance();
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype._get_onCancelComplete__0_k$ = function () {
    return false;
  };
  JobSupport.prototype.cancellationExceptionMessage_0_k$ = function () {
    return 'Job was cancelled';
  };
  JobSupport.prototype.parentCancelled_f2sghn_k$ = function (parentJob) {
    this.cancelImpl_wi7j7l_k$(parentJob);
    Unit_getInstance();
  };
  JobSupport.prototype.childCancelled_onfaoi_k$ = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    else {
    }
    return this.cancelImpl_wi7j7l_k$(cause) ? this._get_handlesException__0_k$() : false;
  };
  JobSupport.prototype.cancelImpl_wi7j7l_k$ = function (cause) {
    var finalState = COMPLETING_ALREADY;
    if (this._get_onCancelComplete__0_k$()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === COMPLETING_WAITING_CHILDREN)
        return true;
    }if (finalState === COMPLETING_ALREADY) {
      finalState = makeCancelling(this, cause);
    }var tmp;
    if (finalState === COMPLETING_ALREADY) {
      tmp = true;
    } else if (finalState === COMPLETING_WAITING_CHILDREN) {
      tmp = true;
    } else if (finalState === TOO_LATE_TO_CANCEL) {
      tmp = false;
    } else {
      this.afterCompletion_qi8yb4_k$(finalState);
      tmp = true;
    }
    return tmp;
  };
  JobSupport.prototype.getChildJobCancellationCause_0_k$ = function () {
    var state = this._get_state__0_k$();
    var tmp0_subject = state;
    var tmp;
    if (tmp0_subject instanceof Finishing) {
      tmp = state._get_rootCause__0_k$();
    } else {
      if (tmp0_subject instanceof CompletedExceptionally) {
        tmp = state._cause;
      } else {
        if (!(tmp0_subject == null) ? isInterface(tmp0_subject, Incomplete) : false) {
          var tmp0_error_0 = '' + 'Cannot be cancelling child in this state: ' + state;
          throw IllegalStateException_init_$Create$(toString_1(tmp0_error_0));
        } else {
          {
            tmp = null;
          }
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('' + 'Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  JobSupport.prototype.makeCompleting_wi7j7l_k$ = function (proposedUpdate) {
    {
      while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0__anonymous__1 = this._get_state__0_k$();
          var finalState_2 = tryMakeCompleting(this, tmp0__anonymous__1, proposedUpdate);
          if (finalState_2 === COMPLETING_ALREADY)
            return false;
          else if (finalState_2 === COMPLETING_WAITING_CHILDREN)
            return true;
          else if (finalState_2 === COMPLETING_RETRY) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          } else {
            this.afterCompletion_qi8yb4_k$(finalState_2);
            return true;
          }
        }
      }
      Unit_getInstance();
    }
  };
  JobSupport.prototype.attachChild_o588si_k$ = function (child) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0__get_asHandler__0 = new ChildHandleNode(child);
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = tmp0__get_asHandler__0;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0;
      break $l$block_0;
    }
    var tmp = this.invokeOnCompletion$default_n4h7x8_k$(true, false, tmp$ret$1, 2, null);
    return isInterface(tmp, ChildHandle) ? tmp : THROW_CCE();
  };
  JobSupport.prototype.handleOnCompletionException_1ti8hr_k$ = function (exception) {
    throw exception;
  };
  JobSupport.prototype.onCancelling_houul8_k$ = function (cause) {
  };
  JobSupport.prototype._get_isScopedCoroutine__0_k$ = function () {
    return false;
  };
  JobSupport.prototype._get_handlesException__0_k$ = function () {
    return true;
  };
  JobSupport.prototype.handleJobException_onfaoi_k$ = function (exception) {
    return false;
  };
  JobSupport.prototype.onCompletionInternal_qi8yb4_k$ = function (state) {
  };
  JobSupport.prototype.afterCompletion_qi8yb4_k$ = function (state) {
  };
  JobSupport.prototype.toString = function () {
    return '' + this.toDebugString_0_k$() + '@' + _get_hexAddress_(this);
  };
  JobSupport.prototype.toDebugString_0_k$ = function () {
    return '' + this.nameString_0_k$() + '{' + stateString(this, this._get_state__0_k$()) + '}';
  };
  JobSupport.prototype.nameString_0_k$ = function () {
    return _get_classSimpleName_(this);
  };
  JobSupport.$metadata$ = {
    simpleName: 'JobSupport',
    kind: 'class',
    interfaces: [Job, ChildJob, ParentJob, SelectClause0]
  };
  function boxIncomplete(_this_) {
    var tmp;
    if (!(_this_ == null) ? isInterface(_this_, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this_);
    } else {
      {
        tmp = _this_;
      }
    }
    return tmp;
  }
  function JobCancellingNode() {
    JobNode.call(this);
  }
  JobCancellingNode.$metadata$ = {
    simpleName: 'JobCancellingNode',
    kind: 'class',
    interfaces: []
  };
  function InactiveNodeList(list) {
    this._list_0 = list;
  }
  InactiveNodeList.prototype._get_list__0_k$ = function () {
    return this._list_0;
  };
  InactiveNodeList.prototype._get_isActive__0_k$ = function () {
    return false;
  };
  InactiveNodeList.prototype.toString = function () {
    return DEBUG ? this._list_0.getString_6wfw3l_k$('New') : anyToString(this);
  };
  InactiveNodeList.$metadata$ = {
    simpleName: 'InactiveNodeList',
    kind: 'class',
    interfaces: [Incomplete]
  };
  function ChildHandleNode(childJob) {
    JobCancellingNode.call(this);
    this._childJob = childJob;
  }
  ChildHandleNode.prototype.invoke_houul8_k$ = function (cause) {
    return this._childJob.parentCancelled_f2sghn_k$(this._get_job__0_k$());
  };
  ChildHandleNode.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildHandleNode.prototype.childCancelled_onfaoi_k$ = function (cause) {
    return this._get_job__0_k$().childCancelled_onfaoi_k$(cause);
  };
  ChildHandleNode.$metadata$ = {
    simpleName: 'ChildHandleNode',
    kind: 'class',
    interfaces: [ChildHandle]
  };
  function InvokeOnCancelling(handler) {
    JobCancellingNode.call(this);
    this._handler_0 = handler;
    this.__invoked = atomic_1(0);
  }
  InvokeOnCancelling.prototype.invoke_houul8_k$ = function (cause) {
    if (this.__invoked.atomicfu$compareAndSet(0, 1))
      this._handler_0(cause);
  };
  InvokeOnCancelling.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  InvokeOnCancelling.$metadata$ = {
    simpleName: 'InvokeOnCancelling',
    kind: 'class',
    interfaces: []
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this._handler_1 = handler;
  }
  InvokeOnCompletion.prototype.invoke_houul8_k$ = function (cause) {
    return this._handler_1(cause);
  };
  InvokeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  InvokeOnCompletion.$metadata$ = {
    simpleName: 'InvokeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this._continuation = continuation;
  }
  ResumeOnCompletion.prototype.invoke_houul8_k$ = function (cause) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_resume_0 = this._continuation;
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_1 = Companion_getInstance_3();
        tmp$ret$0 = _Result___init__impl_(Unit_getInstance());
        break $l$block;
      }
      tmp$ret$1 = tmp0_resume_0.resumeWith_bnunh2_k$(tmp$ret$0);
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ResumeOnCompletion.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ResumeOnCompletion.$metadata$ = {
    simpleName: 'ResumeOnCompletion',
    kind: 'class',
    interfaces: []
  };
  function IncompleteStateBox(state) {
    this._state_2 = state;
  }
  IncompleteStateBox.$metadata$ = {
    simpleName: 'IncompleteStateBox',
    kind: 'class',
    interfaces: []
  };
  function ChildContinuation(child) {
    JobCancellingNode.call(this);
    this._child_0 = child;
  }
  ChildContinuation.prototype.invoke_houul8_k$ = function (cause) {
    this._child_0.parentCancelled_1ti8hr_k$(this._child_0.getContinuationCancellationCause_jfubq8_k$(this._get_job__0_k$()));
  };
  ChildContinuation.prototype.invoke = function (cause) {
    return this.invoke_houul8_k$(cause);
  };
  ChildContinuation.$metadata$ = {
    simpleName: 'ChildContinuation',
    kind: 'class',
    interfaces: []
  };
  function handlesException($this) {
    var tmp = $this._get_parentHandle__0_k$();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver._get_job__0_k$();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob._get_handlesException__0_k$())
        return true;
      var tmp_1 = parentJob._get_parentHandle__0_k$();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver._get_job__0_k$();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.initParentJob_64sshe_k$(parent);
    this._handlesException = handlesException(this);
  }
  JobImpl.prototype._get_onCancelComplete__0_k$ = function () {
    return true;
  };
  JobImpl.prototype._get_handlesException__0_k$ = function () {
    return this._handlesException;
  };
  JobImpl.prototype.complete_0_k$ = function () {
    return this.makeCompleting_wi7j7l_k$(Unit_getInstance());
  };
  JobImpl.$metadata$ = {
    simpleName: 'JobImpl',
    kind: 'class',
    interfaces: [CompletableJob]
  };
  function TimeoutCancellationException() {
  }
  TimeoutCancellationException.$metadata$ = {
    simpleName: 'TimeoutCancellationException',
    kind: 'class',
    interfaces: [CopyableThrowable]
  };
  function ensureCapacity($this) {
    var currentSize = $this._elements.length;
    var newCapacity = currentSize << 1;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
      break $l$block;
    }
    var newElements = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_copyInto_0 = $this._elements;
      var tmp1_copyInto_0 = $this._head_0;
      var tmp2_copyInto_0 = tmp0_copyInto_0.length;
      arrayCopy_0(tmp0_copyInto_0, newElements, 0, tmp1_copyInto_0, tmp2_copyInto_0);
      tmp$ret$1 = newElements;
      break $l$block_0;
    }
    Unit_getInstance();
    var tmp$ret$2;
    $l$block_1: {
      var tmp3_copyInto_0 = $this._elements;
      var tmp4_copyInto_0 = $this._elements.length - $this._head_0 | 0;
      var tmp5_copyInto_0 = $this._head_0;
      arrayCopy_0(tmp3_copyInto_0, newElements, tmp4_copyInto_0, 0, tmp5_copyInto_0);
      tmp$ret$2 = newElements;
      break $l$block_1;
    }
    Unit_getInstance();
    $this._elements = newElements;
    $this._head_0 = 0;
    $this._tail = currentSize;
  }
  function ArrayQueue() {
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(16), null);
      break $l$block;
    }
    tmp._elements = tmp$ret$0;
    this._head_0 = 0;
    this._tail = 0;
  }
  ArrayQueue.prototype._get_isEmpty__0_k$ = function () {
    return this._head_0 === this._tail;
  };
  ArrayQueue.prototype.addLast_iav7o_k$ = function (element) {
    this._elements[this._tail] = element;
    this._tail = (this._tail + 1 | 0) & (this._elements.length - 1 | 0);
    if (this._tail === this._head_0)
      ensureCapacity(this);
  };
  ArrayQueue.prototype.removeFirstOrNull_0_k$ = function () {
    if (this._head_0 === this._tail)
      return null;
    var element = this._elements[this._head_0];
    this._elements[this._head_0] = null;
    this._head_0 = (this._head_0 + 1 | 0) & (this._elements.length - 1 | 0);
    return isObject(element) ? element : THROW_CCE();
  };
  ArrayQueue.$metadata$ = {
    simpleName: 'ArrayQueue',
    kind: 'class',
    interfaces: []
  };
  function OpDescriptor() {
  }
  OpDescriptor.$metadata$ = {
    simpleName: 'OpDescriptor',
    kind: 'class',
    interfaces: []
  };
  var UNDEFINED;
  var REUSABLE_CLAIMED;
  function _get_reusableCancellableContinuation_($this) {
    var tmp = $this.__reusableCancellableContinuation._value_0;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this._dispatcher = dispatcher;
    this._continuation_0 = continuation;
    this.__state_1 = UNDEFINED;
    this._countOrElement = threadContextElements(this._get_context__0_k$());
    this.__reusableCancellableContinuation = atomic(null);
  }
  DispatchedContinuation.prototype._get_context__0_k$ = function () {
    return this._continuation_0._get_context__0_k$();
  };
  DispatchedContinuation.prototype.isReusable_0_k$ = function () {
    return !(this.__reusableCancellableContinuation._value_0 == null);
  };
  DispatchedContinuation.prototype.awaitReusability_sv8swh_k$ = function () {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_0;
          if (!(tmp1__anonymous__1 === REUSABLE_CLAIMED))
            return Unit_getInstance();
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.release_sv8swh_k$ = function () {
    this.awaitReusability_sv8swh_k$();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation_(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.detachChild_sv8swh_k$();
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  DispatchedContinuation.prototype.tryReleaseClaimedContinuation_7b8qoa_k$ = function (continuation) {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_0;
          if (tmp1__anonymous__1 === REUSABLE_CLAIMED) {
            if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(REUSABLE_CLAIMED, continuation))
              return null;
          } else {
            if (tmp1__anonymous__1 instanceof Error) {
              {
                var tmp0_require_0_2 = this.__reusableCancellableContinuation.atomicfu$compareAndSet(tmp1__anonymous__1, null);
                {
                }
                {
                  {
                  }
                  if (!tmp0_require_0_2) {
                    var tmp$ret$0;
                    $l$block: {
                      tmp$ret$0 = 'Failed requirement.';
                      break $l$block;
                    }
                    var message_2_1_3 = tmp$ret$0;
                    throw IllegalArgumentException_init_$Create$(toString_1(message_2_1_3));
                  }}
              }
              return tmp1__anonymous__1;
            } else {
              {
                var tmp1_error_0_4 = '' + 'Inconsistent state ' + tmp1__anonymous__1;
                throw IllegalStateException_init_$Create$(toString_1(tmp1_error_0_4));
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.postponeCancellation_onfaoi_k$ = function (cause) {
    {
      var tmp0_loop_0 = this.__reusableCancellableContinuation;
      while (true) {
        {
          var tmp1__anonymous__1 = tmp0_loop_0._value_0;
          var tmp0_subject_2 = tmp1__anonymous__1;
          if (equals_0(tmp0_subject_2, REUSABLE_CLAIMED)) {
            if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(REUSABLE_CLAIMED, cause))
              return true;
          } else {
            if (tmp0_subject_2 instanceof Error)
              return true;
            else {
              {
                if (this.__reusableCancellableContinuation.atomicfu$compareAndSet(tmp1__anonymous__1, null))
                  return false;
              }
            }
          }
        }
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.takeState_0_k$ = function () {
    var state = this.__state_1;
    {
    }
    this.__state_1 = UNDEFINED;
    return state;
  };
  DispatchedContinuation.prototype._get_delegate__0_k$ = function () {
    return this;
  };
  DispatchedContinuation.prototype.resumeWith_bnunh2_k$ = function (result) {
    var context = this._continuation_0._get_context__0_k$();
    var state = toState$default(result, null, 1, null);
    if (this._dispatcher.isDispatchNeeded_d7pszg_k$(context)) {
      this.__state_1 = state;
      this._set_resumeMode__majfzk_k$(0);
      this._dispatcher.dispatch_7n0ou3_k$(context, this);
    } else {
      var tmp$ret$0;
      $l$block_1: {
        var tmp0_executeUnconfined_0 = 0;
        {
        }
        var eventLoop_2 = ThreadLocalEventLoop_getInstance()._get_eventLoop__0_k$();
        if (false ? eventLoop_2._get_isUnconfinedQueueEmpty__0_k$() : false) {
          tmp$ret$0 = false;
          break $l$block_1;
        }var tmp;
        if (eventLoop_2._get_isUnconfinedLoopActive__0_k$()) {
          this.__state_1 = state;
          this._set_resumeMode__majfzk_k$(tmp0_executeUnconfined_0);
          eventLoop_2.dispatchUnconfined_3yrun8_k$(this);
          tmp = true;
        } else {
          {
            eventLoop_2.incrementUseCount_rpwsgn_k$(true);
            try {
              {
                var tmp$ret$1;
                $l$block_0: {
                  var tmp0_withCoroutineContext_0_4 = this._get_context__0_k$();
                  var tmp1_withCoroutineContext_0_5 = this._countOrElement;
                  tmp$ret$1 = this._continuation_0.resumeWith_bnunh2_k$(result);
                  break $l$block_0;
                }
              }
              $l$break: while (true) {
                if (!eventLoop_2.processUnconfinedEvent_0_k$())
                  break $l$break;
              }
            } catch ($p) {
              if ($p instanceof Error) {
                this.handleFatalException_amk5yv_k$($p, null);
              } else {
                {
                  throw $p;
                }
              }
            }
            finally {
              eventLoop_2.decrementUseCount_rpwsgn_k$(true);
            }
          }
          tmp = false;
        }
        tmp$ret$0 = tmp;
        break $l$block_1;
      }
      Unit_getInstance();
    }
  };
  DispatchedContinuation.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
    if (takenState instanceof CompletedWithCancellation) {
      takenState._onCancellation_0(cause);
    } else {
    }
  };
  DispatchedContinuation.prototype.toString = function () {
    return '' + 'DispatchedContinuation[' + this._dispatcher + ', ' + toDebugString(this._continuation_0) + ']';
  };
  DispatchedContinuation.$metadata$ = {
    simpleName: 'DispatchedContinuation',
    kind: 'class',
    interfaces: [CoroutineStackFrame, Continuation]
  };
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this._resumeMode = resumeMode;
  }
  DispatchedTask.prototype._set_resumeMode__majfzk_k$ = function (_set___) {
    this._resumeMode = _set___;
  };
  DispatchedTask.prototype._get_resumeMode__0_k$ = function () {
    return this._resumeMode;
  };
  DispatchedTask.prototype.cancelCompletedResult_6goujk_k$ = function (takenState, cause) {
  };
  DispatchedTask.prototype.getSuccessfulResult_6jiqgr_k$ = function (state) {
    return (state == null ? true : isObject(state)) ? state : THROW_CCE();
  };
  DispatchedTask.prototype.getExceptionalResult_wi7j7l_k$ = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver._cause;
  };
  DispatchedTask.prototype.run_sv8swh_k$ = function () {
    {
    }
    var taskContext = _get_taskContext_(this);
    var fatalException = null;
    try {
      var tmp = this._get_delegate__0_k$();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate._continuation_0;
      var tmp$ret$5;
      $l$block_4: {
        var tmp0_withContinuationContext_0 = delegate._countOrElement;
        var context_2 = continuation._get_context__0_k$();
        var state_3 = this.takeState_0_k$();
        var exception_4 = this.getExceptionalResult_wi7j7l_k$(state_3);
        var job_5 = (exception_4 == null ? _get_isCancellableMode_(this._resumeMode) : false) ? context_2.get_9uvjra_k$(Key_getInstance_2()) : null;
        var tmp_0;
        if (!(job_5 == null) ? !job_5._get_isActive__0_k$() : false) {
          var cause_6 = job_5.getCancellationException_0_k$();
          this.cancelCompletedResult_6goujk_k$(state_3, cause_6);
          var tmp$ret$0;
          $l$block: {
            var tmp0_failure_0_7 = Companion_getInstance_3();
            var tmp1_failure_0_8 = recoverStackTrace(cause_6, continuation);
            tmp$ret$0 = _Result___init__impl_(createFailure(tmp1_failure_0_8));
            break $l$block;
          }
          tmp_0 = continuation.resumeWith_bnunh2_k$(tmp$ret$0);
        } else {
          var tmp_1;
          if (!(exception_4 == null)) {
            var tmp$ret$2;
            $l$block_1: {
              var tmp$ret$1;
              $l$block_0: {
                var tmp0_failure_0_1_9 = Companion_getInstance_3();
                tmp$ret$1 = _Result___init__impl_(createFailure(exception_4));
                break $l$block_0;
              }
              tmp$ret$2 = continuation.resumeWith_bnunh2_k$(tmp$ret$1);
              break $l$block_1;
            }
            tmp_1 = tmp$ret$2;
          } else {
            var tmp$ret$4;
            $l$block_3: {
              var tmp2_resume_0_10 = this.getSuccessfulResult_6jiqgr_k$(state_3);
              var tmp$ret$3;
              $l$block_2: {
                var tmp0_success_0_1_11 = Companion_getInstance_3();
                tmp$ret$3 = _Result___init__impl_(tmp2_resume_0_10);
                break $l$block_2;
              }
              tmp$ret$4 = continuation.resumeWith_bnunh2_k$(tmp$ret$3);
              break $l$block_3;
            }
            tmp_1 = tmp$ret$4;
          }
          tmp_0 = tmp_1;
        }
        tmp$ret$5 = tmp_0;
        break $l$block_4;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        fatalException = $p;
      } else {
        {
          throw $p;
        }
      }
    }
    finally {
      var tmp$ret$8;
      $l$block_7: {
        var tmp_2;
        try {
          var tmp$ret$6;
          $l$block_5: {
            var tmp0_success_0_1 = Companion_getInstance_3();
            var tmp1_success_0_2 = Unit_getInstance();
            tmp$ret$6 = _Result___init__impl_(Unit_getInstance());
            break $l$block_5;
          }
          tmp_2 = tmp$ret$6;
        } catch ($p_0) {
          var tmp_3;
          if ($p_0 instanceof Error) {
            var tmp$ret$7;
            $l$block_6: {
              var tmp2_failure_0_4 = Companion_getInstance_3();
              tmp$ret$7 = _Result___init__impl_(createFailure($p_0));
              break $l$block_6;
            }
            tmp_3 = tmp$ret$7;
          } else {
            {
              throw $p_0;
            }
          }
          tmp_2 = tmp_3;
        }
        tmp$ret$8 = tmp_2;
        break $l$block_7;
      }
      var result = tmp$ret$8;
      this.handleFatalException_amk5yv_k$(fatalException, Result__exceptionOrNull_impl(result));
    }
  };
  DispatchedTask.prototype.handleFatalException_amk5yv_k$ = function (exception, finallyException) {
    if (exception === null ? finallyException === null : false)
      return Unit_getInstance();
    if (!(exception === null) ? !(finallyException === null) : false) {
      {
      }
    }var tmp0_elvis_lhs = exception;
    var cause = tmp0_elvis_lhs == null ? finallyException : tmp0_elvis_lhs;
    var reason = new CoroutinesInternalError('' + 'Fatal exception in coroutines machinery for ' + this + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", ensureNotNull(cause));
    handleCoroutineException(this._get_delegate__0_k$()._get_context__0_k$(), reason);
  };
  DispatchedTask.$metadata$ = {
    simpleName: 'DispatchedTask',
    kind: 'class',
    interfaces: []
  };
  function _get_isReusableMode_(_this_) {
    return _this_ === 2;
  }
  function _get_isCancellableMode_(_this_) {
    return _this_ === 1 ? true : _this_ === 2;
  }
  function dispatch(_this_, mode) {
    {
    }
    var delegate = _this_._get_delegate__0_k$();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = _get_isCancellableMode_(mode) === _get_isCancellableMode_(_this_._resumeMode);
    } else {
      {
        tmp = false;
      }
    }
    if (tmp) {
      var dispatcher = delegate._dispatcher;
      var context = delegate._get_context__0_k$();
      if (dispatcher.isDispatchNeeded_d7pszg_k$(context)) {
        dispatcher.dispatch_7n0ou3_k$(context, _this_);
      } else {
        resumeUnconfined(_this_);
      }
    } else {
      {
        resume(_this_, delegate, undispatched);
      }
    }
  }
  function resumeUnconfined(_this_) {
    var eventLoop = ThreadLocalEventLoop_getInstance()._get_eventLoop__0_k$();
    if (eventLoop._get_isUnconfinedLoopActive__0_k$()) {
      eventLoop.dispatchUnconfined_3yrun8_k$(_this_);
    } else {
      {
        eventLoop.incrementUseCount_rpwsgn_k$(true);
        try {
          {
            resume(_this_, _this_._get_delegate__0_k$(), true);
          }
          $l$break: while (true) {
            if (!eventLoop.processUnconfinedEvent_0_k$())
              break $l$break;
          }
        } catch ($p) {
          if ($p instanceof Error) {
            _this_.handleFatalException_amk5yv_k$($p, null);
          } else {
            {
              throw $p;
            }
          }
        }
        finally {
          eventLoop.decrementUseCount_rpwsgn_k$(true);
        }
      }
    }
  }
  function resume(_this_, delegate, undispatched) {
    var state = _this_.takeState_0_k$();
    var exception = _this_.getExceptionalResult_wi7j7l_k$(state);
    var tmp;
    if (!(exception == null)) {
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0 = Companion_getInstance_3();
        tmp$ret$0 = _Result___init__impl_(createFailure(exception));
        break $l$block;
      }
      tmp = tmp$ret$0;
    } else {
      var tmp$ret$1;
      $l$block_0: {
        var tmp1_success_0 = Companion_getInstance_3();
        var tmp2_success_0 = _this_.getSuccessfulResult_6jiqgr_k$(state);
        tmp$ret$1 = _Result___init__impl_(tmp2_success_0);
        break $l$block_0;
      }
      tmp = tmp$ret$1;
    }
    var result = tmp;
    if (undispatched) {
      var tmp3_resumeUndispatchedWith_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_withContinuationContext_0_1 = tmp3_resumeUndispatchedWith_0._continuation_0;
        var tmp1_withContinuationContext_0_2 = tmp3_resumeUndispatchedWith_0._countOrElement;
        tmp$ret$2 = tmp3_resumeUndispatchedWith_0._continuation_0.resumeWith_bnunh2_k$(result);
        break $l$block_1;
      }
    } else
      delegate.resumeWith_bnunh2_k$(result);
  }
  function Symbol(symbol) {
    this._symbol = symbol;
  }
  Symbol.prototype.toString = function () {
    return '' + '<' + this._symbol + '>';
  };
  Symbol.$metadata$ = {
    simpleName: 'Symbol',
    kind: 'class',
    interfaces: []
  };
  function SelectClause0() {
  }
  SelectClause0.$metadata$ = {
    simpleName: 'SelectClause0',
    kind: 'interface',
    interfaces: []
  };
  function CompletionHandlerBase() {
    LinkedListNode.call(this);
  }
  CompletionHandlerBase.$metadata$ = {
    simpleName: 'CompletionHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function invokeIt(_this_, cause) {
    var tmp0_subject = typeof _this_;
    if (tmp0_subject === 'function')
      _this_(cause);
    else {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      tmp$ret$0.invoke(cause);
    }
  }
  function CancelHandlerBase() {
  }
  CancelHandlerBase.$metadata$ = {
    simpleName: 'CancelHandlerBase',
    kind: 'class',
    interfaces: []
  };
  function toDebugString(_this_) {
    return toString_1(_this_);
  }
  function initializeDefaultExceptionHandlers() {
  }
  function handleCoroutineExceptionImpl(context, exception) {
    console.error(exception);
  }
  var counter;
  var DEBUG;
  function _get_classSimpleName_(_this_) {
    var tmp0_elvis_lhs = getKClassFromExpression_0(_this_)._get_simpleName__0_k$();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function _get_hexAddress_(_this_) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = _this_;
      break $l$block;
    }
    var result = tmp$ret$0.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = _this_;
        break $l$block_0;
      }
      tmp$ret$1.__debug_counter = result;
    }return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  UnconfinedEventLoop.prototype.dispatch_7n0ou3_k$ = function (context, block) {
    unsupported();
  };
  UnconfinedEventLoop.$metadata$ = {
    simpleName: 'UnconfinedEventLoop',
    kind: 'class',
    interfaces: []
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$_0('runBlocking event loop is not supported');
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    this._job_0 = job;
    captureStack(this, JobCancellationException);
  }
  JobCancellationException.prototype.toString = function () {
    return '' + CancellationException.prototype.toString.call(this) + '; job=' + this._job_0;
  };
  JobCancellationException.prototype.equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        {
          tmp_2 = false;
        }
      }
      if (tmp_2) {
        tmp_1 = equals_0(other._job_0, this._job_0);
      } else {
        {
          tmp_1 = false;
        }
      }
      if (tmp_1) {
        tmp_0 = equals_0(other.cause, this.cause);
      } else {
        {
          tmp_0 = false;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  JobCancellationException.prototype.hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this._job_0) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  JobCancellationException.$metadata$ = {
    simpleName: 'JobCancellationException',
    kind: 'class',
    interfaces: []
  };
  function await_0(_this_, $cont) {
    var tmp$ret$0;
    $l$block: {
      var tmp0__anonymous__1_1 = $cont;
      var cancellable_2_2 = new CancellableContinuationImpl(intercepted(tmp0__anonymous__1_1), 1);
      cancellable_2_2.initCancellability_sv8swh_k$();
      {
        var tmp = _no_name_provided_$factory_23(cancellable_2_2);
        _this_.then(tmp, _no_name_provided_$factory_24(cancellable_2_2));
        Unit_getInstance();
      }
      tmp$ret$0 = cancellable_2_2.getResult_0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  }
  function _no_name_provided__26($cancellable_2_2) {
    this._$cancellable_2_2 = $cancellable_2_2;
  }
  _no_name_provided__26.prototype.invoke_iav7o_k$ = function (it) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_success_0_1_5 = Companion_getInstance_3();
        tmp$ret$0 = _Result___init__impl_(it);
        break $l$block;
      }
      tmp$ret$1 = this._$cancellable_2_2.resumeWith_bnunh2_k$(tmp$ret$0);
      break $l$block_0;
    }
  };
  _no_name_provided__26.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_iav7o_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__26.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__27($cancellable_2_2) {
    this._$cancellable_2_2_0 = $cancellable_2_2;
  }
  _no_name_provided__27.prototype.invoke_1ti8hr_k$ = function (it) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        var tmp0_failure_0_1_7 = Companion_getInstance_3();
        tmp$ret$0 = _Result___init__impl_(createFailure(it));
        break $l$block;
      }
      tmp$ret$1 = this._$cancellable_2_2_0.resumeWith_bnunh2_k$(tmp$ret$0);
      break $l$block_0;
    }
  };
  _no_name_provided__27.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_1ti8hr_k$(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__27.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_23($cancellable_2_2) {
    var i = new _no_name_provided__26($cancellable_2_2);
    return function (p1) {
      i.invoke_iav7o_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_24($cancellable_2_2) {
    var i = new _no_name_provided__27($cancellable_2_2);
    return function (p1) {
      i.invoke_1ti8hr_k$(p1);
      return Unit_getInstance();
    };
  }
  function Runnable() {
  }
  Runnable.$metadata$ = {
    simpleName: 'Runnable',
    kind: 'interface',
    interfaces: []
  };
  function SchedulerTask() {
  }
  SchedulerTask.$metadata$ = {
    simpleName: 'SchedulerTask',
    kind: 'class',
    interfaces: [Runnable]
  };
  function _get_taskContext_(_this_) {
    return Unit_getInstance();
  }
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function LinkedListHead() {
    LinkedListNode.call(this);
  }
  LinkedListHead.$metadata$ = {
    simpleName: 'LinkedListHead',
    kind: 'class',
    interfaces: []
  };
  function LinkedListNode() {
    this.__next = this;
    this.__prev = this;
    this.__removed = false;
  }
  LinkedListNode.prototype._get__next__0_k$ = function () {
    return this.__next;
  };
  LinkedListNode.prototype.addLast_qdrmxw_k$ = function (node) {
    var prev = this.__prev;
    node.__next = this;
    node.__prev = prev;
    prev.__next = node;
    this.__prev = node;
  };
  LinkedListNode.prototype.remove_0_k$ = function () {
    return this.removeImpl_0_k$();
  };
  LinkedListNode.prototype.removeImpl_0_k$ = function () {
    if (this.__removed)
      return false;
    var prev = this.__prev;
    var next = this.__next;
    prev.__next = next;
    next.__prev = prev;
    this.__removed = true;
    return true;
  };
  LinkedListNode.prototype.addOneIfEmpty_fpxpjn_k$ = function (node) {
    if (!(this.__next === this))
      return false;
    this.addLast_qdrmxw_k$(node);
    return true;
  };
  LinkedListNode.$metadata$ = {
    simpleName: 'LinkedListNode',
    kind: 'class',
    interfaces: []
  };
  function unwrap(exception) {
    return exception;
  }
  function CoroutineStackFrame() {
  }
  CoroutineStackFrame.$metadata$ = {
    simpleName: 'CoroutineStackFrame',
    kind: 'interface',
    interfaces: []
  };
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this._value_4 = null;
  }
  CommonThreadLocal.prototype.get_0_k$ = function () {
    var tmp = this._value_4;
    return (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
  };
  CommonThreadLocal.prototype.set_iav7o_k$ = function (value) {
    this._value_4 = value;
  };
  CommonThreadLocal.$metadata$ = {
    simpleName: 'CommonThreadLocal',
    kind: 'class',
    interfaces: []
  };
  function asKPromise(_this_) {
    return _this_ instanceof Promise ? _this_ : THROW_CCE();
  }
  function asJSPromise(_this_) {
    return isObject(_this_) ? _this_ : THROW_CCE();
  }
  function asByteArray(_this_) {
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = _this_;
        break $l$block;
      }
      var tmp0_unsafeCast_0 = tmp$ret$0;
      tmp$ret$1 = tmp0_unsafeCast_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  }
  function CocosStorage_init_$Init$(key, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      key = null;
    CocosStorage.call($this, key);
    return $this;
  }
  function CocosStorage_init_$Create$(key, $mask0, $marker) {
    return CocosStorage_init_$Init$(key, $mask0, $marker, Object.create(CocosStorage.prototype));
  }
  function CocosStorage(key) {
    var key_0 = key === void 1 ? null : key;
    var tmp0_elvis_lhs = Companion_getInstance_9().tryGetCocosStorage();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw Exception_init_$Create$_0('current env seems not a valid cocos env');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    H5DataStorage.call(this, tmp, key_0);
  }
  CocosStorage.$metadata$ = {
    simpleName: 'CocosStorage',
    kind: 'class',
    interfaces: []
  };
  function DataStorage() {
  }
  DataStorage.$metadata$ = {
    simpleName: 'DataStorage',
    kind: 'class',
    interfaces: []
  };
  function ECResult_init_$Init$(errorCode, data, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      data = null;
    ECResult.call($this, errorCode, data);
    return $this;
  }
  function ECResult_init_$Create$(errorCode, data, $mask0, $marker) {
    return ECResult_init_$Init$(errorCode, data, $mask0, $marker, Object.create(ECResult.prototype));
  }
  function Companion_8() {
    Companion_instance_7 = this;
  }
  Companion_8.prototype.success = function (data) {
    return new ECResult(Companion_getInstance_8()._Success, data);
  };
  Companion_8.prototype.failure = function (errorCode) {
    return ECResult_init_$Create$(errorCode, null, 2, null);
  };
  Companion_8.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_8();
    return Companion_instance_7;
  }
  function ECResult(errorCode, data) {
    Companion_getInstance_7();
    var data_0 = data === void 1 ? null : data;
    this._errorCode = errorCode;
    this._data = data_0;
  }
  ECResult.prototype._get_errorCode__0_k$ = function () {
    return this._errorCode;
  };
  ECResult.prototype._get_data__0_k$ = function () {
    return this._data;
  };
  ECResult.$metadata$ = {
    simpleName: 'ECResult',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ECResult.prototype, 'errorCode', {
    configurable: true,
    get: ECResult.prototype._get_errorCode__0_k$
  });
  Object.defineProperty(ECResult.prototype, 'data', {
    configurable: true,
    get: ECResult.prototype._get_data__0_k$
  });
  function ErrorCode_init_$Init$(code, message, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      message = '';
    ErrorCode.call($this, code, message);
    return $this;
  }
  function ErrorCode_init_$Create$(code, message, $mask0, $marker) {
    return ErrorCode_init_$Init$(code, message, $mask0, $marker, Object.create(ErrorCode.prototype));
  }
  function Companion_9() {
    Companion_instance_8 = this;
    var tmp = this;
    tmp._Success = ErrorCode_init_$Create$('Success', null, 2, null);
  }
  Companion_9.prototype._get_Success__0_k$ = function () {
    return this._Success;
  };
  Companion_9.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_9.prototype, 'Success', {
    configurable: true,
    get: Companion_9.prototype._get_Success__0_k$
  });
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_9();
    return Companion_instance_8;
  }
  function ErrorCode(code, message) {
    Companion_getInstance_8();
    var message_0 = message === void 1 ? '' : message;
    this._code = code;
    this._message = message_0;
  }
  ErrorCode.prototype._get_code__0_k$ = function () {
    return this._code;
  };
  ErrorCode.prototype._get_message__0_k$ = function () {
    return this._message;
  };
  ErrorCode.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals_0(_get_js_(getKClassFromExpression_0(this)), _get_js_(getKClassFromExpression_0(other))))
      return false;
    if (other instanceof ErrorCode)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!(this._code === other._code))
      return false;
    return true;
  };
  ErrorCode.prototype.hashCode = function () {
    return getStringHashCode(this._code);
  };
  ErrorCode.prototype.toString = function () {
    return '' + "ErrorCode(code='" + this._code + "', message='" + this._message + "')";
  };
  ErrorCode.$metadata$ = {
    simpleName: 'ErrorCode',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ErrorCode.prototype, 'code', {
    configurable: true,
    get: ErrorCode.prototype._get_code__0_k$
  });
  Object.defineProperty(ErrorCode.prototype, 'message', {
    configurable: true,
    get: ErrorCode.prototype._get_message__0_k$
  });
  function _get_isSuccess_(_this_) {
    return _this_._code === Companion_getInstance_8()._Success._code;
  }
  function _get_isFailure_(_this_) {
    return !(_this_._code === Companion_getInstance_8()._Success._code);
  }
  function ofErrorHttpCode(_this_, status, statusText) {
    return new ErrorCode('Http.InvalidStatus', '' + statusText);
  }
  function ofError(_this_, e) {
    return new ErrorCode('UnknownError', e.toString());
  }
  function H5DataStorage_init_$Init$(storage, key, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      storage = Companion_getInstance_9().smartFindStorage();
    if (!(($mask0 & 2) === 0))
      key = null;
    H5DataStorage.call($this, storage, key);
    return $this;
  }
  function H5DataStorage_init_$Create$(storage, key, $mask0, $marker) {
    return H5DataStorage_init_$Init$(storage, key, $mask0, $marker, Object.create(H5DataStorage.prototype));
  }
  function Companion_10() {
    Companion_instance_9 = this;
  }
  Companion_10.prototype.smartFindStorage = function () {
    var storage = null;
    if (storage == null) {
      storage = this.tryGetCocosStorage();
    }if (storage == null) {
      storage = this.tryGetBrowserStorage();
    }var tmp0_elvis_lhs = storage;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw Exception_init_$Create$_0("can't find any instance of IHtml5Storage");
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  Companion_10.prototype.tryGetCocosStorage = function () {
    var tmp;
    try {
      var tmp_0 = cc.sys.localStorage;
      var storage = (!(tmp_0 == null) ? isObject(tmp_0) : false) ? tmp_0 : THROW_CCE();
      tmp = storage;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  Companion_10.prototype.tryGetBrowserStorage = function () {
    var tmp;
    try {
      var tmp_0 = localStorage;
      var storage = (!(tmp_0 == null) ? isObject(tmp_0) : false) ? tmp_0 : THROW_CCE();
      tmp = storage;
    } catch ($p) {
      var tmp_1;
      if ($p instanceof Error) {
        tmp_1 = null;
      } else {
        {
          throw $p;
        }
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  Companion_10.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_10();
    return Companion_instance_9;
  }
  function H5DataStorage(storage, key) {
    Companion_getInstance_9();
    var storage_0 = storage === void 1 ? Companion_getInstance_9().smartFindStorage() : storage;
    var key_0 = key === void 1 ? null : key;
    DataStorage.call(this);
    this._storage = storage_0;
    var tmp = this;
    var tmp0_elvis_lhs = key_0;
    tmp._key_1 = tmp0_elvis_lhs == null ? 'hagice.default' : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = storage_0.getItem(this._key_1);
    var data = tmp1_elvis_lhs == null ? '{}' : tmp1_elvis_lhs;
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = data;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty_0) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      data = '{}';
    } else {
    }
    this._json = JSON.parse(data);
  }
  H5DataStorage.prototype.setValue = function (name, value) {
    this._json[name] = value;
    this._storage.setItem(this._key_1, JSON.stringify(this._json));
  };
  H5DataStorage.prototype.getValue = function (name) {
    var tmp0_safe_receiver = this._json[name];
    return tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
  };
  H5DataStorage.$metadata$ = {
    simpleName: 'H5DataStorage',
    kind: 'class',
    interfaces: []
  };
  function Companion_11() {
    Companion_instance_10 = this;
  }
  Companion_11.prototype.from_q2jafu_k$ = function (promise_0) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = promise_0;
      break $l$block;
    }
    var tmp0_elvis_lhs = tmp$ret$0['_hPromise'];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var hPromise = tmp;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = hPromise;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  Companion_11.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_11();
    return Companion_instance_10;
  }
  function _no_name_provided__28(this$0) {
    this._this$0_3 = this$0;
  }
  _no_name_provided__28.prototype.invoke_h3emdu_k$ = function (resolve, reject) {
    this._this$0_3._resolve = resolve;
    this._this$0_3._reject = reject;
  };
  _no_name_provided__28.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'function' : false) ? p1 : THROW_CCE();
    this.invoke_h3emdu_k$(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__28.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function HPromise() {
    Companion_getInstance_10();
    var tmp = this;
    tmp._promise = new Promise(_no_name_provided_$factory_25(this));
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = this._promise;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    tmp$ret$0['_hPromise'] = this;
  }
  HPromise.prototype._get_reject__0_k$ = function () {
    var tmp = this._reject;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('reject');
    }
  };
  HPromise.prototype._get_resolve__0_k$ = function () {
    var tmp = this._resolve;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('resolve');
    }
  };
  HPromise.$metadata$ = {
    simpleName: 'HPromise',
    kind: 'class',
    interfaces: []
  };
  function await_1(_this_, $cont) {
    return await_0(_this_._promise, $cont);
  }
  function _no_name_provided_$factory_25(this$0) {
    var i = new _no_name_provided__28(this$0);
    return function (p1, p2) {
      i.invoke_h3emdu_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function Companion_12() {
    Companion_instance_11 = this;
    this._Zero = new Int64(new Long(0, 0));
  }
  Companion_12.prototype._get_Zero__0_k$ = function () {
    return this._Zero;
  };
  Companion_12.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_12.prototype, 'Zero', {
    configurable: true,
    get: Companion_12.prototype._get_Zero__0_k$
  });
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_12();
    return Companion_instance_11;
  }
  function Int64(value) {
    Companion_getInstance_11();
    this._value_5 = value;
  }
  Int64.prototype._get_value__0_k$ = function () {
    return this._value_5;
  };
  Int64.prototype.toString = function () {
    return this._value_5.toString();
  };
  Int64.prototype.plus = function (other) {
    return new Int64(this._value_5.plus_wiekkq_k$(other._value_5));
  };
  Int64.prototype.minus = function (other) {
    return new Int64(this._value_5.minus_wiekkq_k$(other._value_5));
  };
  Int64.prototype.div = function (other) {
    return new Int64(this._value_5.div_wiekkq_k$(other._value_5));
  };
  Int64.prototype.times = function (other) {
    return new Int64(this._value_5.times_wiekkq_k$(other._value_5));
  };
  Int64.prototype.shl = function (bitCount) {
    return new Int64(this._value_5.shl_ha5a7z_k$(bitCount));
  };
  Int64.prototype.shr = function (bitCount) {
    return new Int64(this._value_5.shr_ha5a7z_k$(bitCount));
  };
  Int64.prototype.and = function (other) {
    return new Int64(this._value_5.and_wiekkq_k$(other._value_5));
  };
  Int64.prototype.or = function (other) {
    return new Int64(this._value_5.or_wiekkq_k$(other._value_5));
  };
  Int64.prototype.xor = function (other) {
    return new Int64(this._value_5.xor_wiekkq_k$(other._value_5));
  };
  Int64.prototype.rem = function (other) {
    return new Int64(this._value_5.rem_wiekkq_k$(other._value_5));
  };
  Int64.prototype.mod = function (other) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_mod_0 = this._value_5;
      var tmp1_mod_0 = other._value_5;
      var r_1 = tmp0_mod_0.rem_wiekkq_k$(tmp1_mod_0);
      tmp$ret$0 = r_1.plus_wiekkq_k$(tmp1_mod_0.and_wiekkq_k$(r_1.xor_wiekkq_k$(tmp1_mod_0).and_wiekkq_k$(r_1.or_wiekkq_k$(r_1.unaryMinus_0_k$())).shr_ha5a7z_k$(63)));
      break $l$block;
    }
    return new Int64(tmp$ret$0);
  };
  Int64.prototype.toInt = function () {
    return this._value_5.toInt_0_k$();
  };
  Int64.prototype.toDouble = function () {
    return this._value_5.toDouble_0_k$();
  };
  Int64.prototype.toFloat = function () {
    return this._value_5.toFloat_0_k$();
  };
  Int64.prototype.toShort = function () {
    return this._value_5.toShort_0_k$();
  };
  Int64.prototype.toByte = function () {
    return this._value_5.toByte_0_k$();
  };
  Int64.prototype.toStringWithRadix = function (radix) {
    return toString_2(this._value_5, radix);
  };
  Int64.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !equals_0(_get_js_(getKClassFromExpression_0(this)), _get_js_(getKClassFromExpression_0(other))))
      return false;
    if (other instanceof Int64)
      other;
    else
      THROW_CCE();
    Unit_getInstance();
    if (!this._value_5.equals(other._value_5))
      return false;
    return true;
  };
  Int64.prototype.hashCode = function () {
    return this._value_5.hashCode();
  };
  Int64.$metadata$ = {
    simpleName: 'Int64',
    kind: 'class',
    interfaces: []
  };
  function _get_Int64_Zero_() {
    return Companion_getInstance_11()._Zero;
  }
  function int64(any) {
    return of(Companion_getInstance_11(), any);
  }
  function of(_this_, any) {
    var tmp;
    if (typeof any === 'string') {
      tmp = toInt64(toLong(any));
    } else {
      {
        tmp = toInt64(numberToLong(isNumber(any) ? any : THROW_CCE()));
      }
    }
    return tmp;
  }
  function toInt64(_this_) {
    return new Int64(_this_);
  }
  function MemoryDataStorage() {
    DataStorage.call(this);
    this._map_1 = {};
  }
  MemoryDataStorage.prototype.setValue = function (name, value) {
    this._map_1[name] = value;
  };
  MemoryDataStorage.prototype.getValue = function (name) {
    return this._map_1[name];
  };
  MemoryDataStorage.$metadata$ = {
    simpleName: 'MemoryDataStorage',
    kind: 'class',
    interfaces: []
  };
  function handleWarnMessage($this, role, message) {
    var title = message.readUTF8();
    var message_0 = message.readUTF8();
    $this._client._onServerWarn(title, message_0);
  }
  function handleErrorMessage($this, role, message) {
    var title = message.readUTF8();
    var message_0 = message.readUTF8();
    $this._client._onServerError(title, message_0);
  }
  function BasicMessageHandler(client) {
    MessageHandler.call(this, FrameworkMessage_Basic_getInstance()._type, FrameworkMessage_Basic_getInstance()._rangeFirstId);
    this._client = client;
  }
  BasicMessageHandler.prototype.handle = function (role, message) {
    var id = message._get_id__0_k$();
    var tmp0_subject = id;
    if (tmp0_subject === ErrorMessage_getInstance()._responseId_0) {
      handleErrorMessage(this, role, message);
    } else if (tmp0_subject === WarnMessage_getInstance()._responseId) {
      handleWarnMessage(this, role, message);
    }};
  BasicMessageHandler.$metadata$ = {
    simpleName: 'BasicMessageHandler',
    kind: 'class',
    interfaces: []
  };
  function _set_status_($this, _set___) {
    $this._status = _set___;
  }
  function start0($this, $cont) {
    var tmp = new $start0COROUTINE$0($this, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  }
  function waitLoadJobsDone($this, $cont) {
    var tmp = new $waitLoadJobsDoneCOROUTINE$1($this, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  }
  function loadModulesData($this, $cont) {
    var tmp = new $loadModulesDataCOROUTINE$2($this, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  }
  function initModules($this) {
    var tmp0_iterator = $this._modules.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var moduleEntry = tmp0_iterator.next_0_k$();
      moduleEntry._module.init();
    }
  }
  function startModules($this, $cont) {
    var tmp = new $startModulesCOROUTINE$3($this, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  }
  function checkStatusIs($this, status) {
    if (!equals_0(status, $this._status)) {
      throw IllegalStateException_init_$Create$('' + 'client status error,expect[' + status + '],but current is[' + $this._status + ']');
    }}
  function newWaiter($this, type, id) {
    var waiter = new ResponseWaiter(type, id);
    $this._responseWaiters.add_2bq_k$(waiter);
    Unit_getInstance();
    return waiter;
  }
  function onConnected($this, $cont) {
  }
  function checkAutoTouchServer($this) {
    var now = Date.now();
    if (now - $this._lastTouchTime >= $this._touchInterval) {
      $this._lastTouchTime = now;
      $this.touchServer();
    }}
  function processReceivedMessages($this) {
    var tmp0_iterator = $this._receivedMessages.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var message = tmp0_iterator.next_0_k$();
      processReceivedMessage($this, message);
    }
    $this._receivedMessages.clear_sv8swh_k$();
  }
  function processReceivedMessage($this, message) {
    var type = message._get_type__0_k$();
    var id = message._get_id__0_k$();
    try {
      var iterator = $this._responseWaiters.iterator_0_k$();
      var waiter = null;
      $l$break: while (iterator.hasNext_0_k$()) {
        var w = iterator.next_0_k$();
        if (w._type_1 === type ? w._id === id : false) {
          waiter = w;
          iterator.remove_sv8swh_k$();
          break $l$break;
        }}
      if (!(waiter == null)) {
        _get_hPromise_(waiter)._get_resolve__0_k$()(message);
      } else {
        var messageHandler = $this.getMessageHandler(type, id);
        if (messageHandler == null) {
          var tmp$ret$0;
          $l$block: {
            var tmp0_info_0 = $this._logger;
            var tmp1_info_0 = '' + 'message[' + type + '-' + id + '] have no handler setup';
            if (!tmp0_info_0._get_isInfoEnabled__0_k$()) {
              tmp$ret$0 = Unit_getInstance();
              break $l$block;
            }var tmp = console;
            var tmp_0 = (new Date(Date.now())).toDateString();
            Companion_getInstance_15();
            tmp.info(tmp_0, tmp0_info_0._nameTag, '[INFO]', tmp1_info_0, null);
          }
        } else {
          messageHandler.handle($this._roleModule._role, message);
        }
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp$ret$1;
        $l$block_0: {
          var tmp2_error_0 = $this._logger;
          var tmp3_error_0 = '' + 'processReceivedMessage fail,message is [' + type + '-' + id + '] ';
          if (!tmp2_error_0._get_isErrorEnabled__0_k$()) {
            tmp$ret$1 = Unit_getInstance();
            break $l$block_0;
          }var tmp_1 = console;
          var tmp_2 = (new Date(Date.now())).toDateString();
          Companion_getInstance_15();
          tmp_1.error(tmp_2, tmp2_error_0._nameTag, '[ERROR]', tmp3_error_0, $p);
        }
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function lazyLogin0($this, tokenData, configJson, $cont) {
    var tmp = new $lazyLogin0COROUTINE$4($this, tokenData, configJson, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  }
  function _no_name_provided__29(this$0, $inetEndpoint, $options, resultContinuation) {
    this._this$0_4 = this$0;
    this._$inetEndpoint = $inetEndpoint;
    this._$options = $options;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__29.prototype.invoke_sv8swh_k$ = function ($cont) {
    var tmp = this.create_s8oglw_k$($cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__29.prototype.invoke_0_k$ = function ($cont) {
    this.invoke_sv8swh_k$($cont);
    return Unit_getInstance();
  };
  _no_name_provided__29.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 3;
            this._this$0_4._connection = createConnection_0(this._$inetEndpoint, this._this$0_4._connectionHandler, this._$options);
            this._state_0 = 1;
            suspendResult = await_0(asKPromise(ensureNotNull(this._this$0_4._connection)._connectedPromise), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            Unit_getInstance();
            this._this$0_4._status = Connected_getInstance();
            this._state_0 = 2;
            suspendResult = onConnected(this._this$0_4, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            return Unit_getInstance();
          case 3:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 3) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__29.prototype.create_s8oglw_k$ = function (completion) {
    var i = new _no_name_provided__29(this._this$0_4, this._$inetEndpoint, this._$options, completion);
    return i;
  };
  _no_name_provided__29.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function _no_name_provided__30(this$0, resultContinuation) {
    this._this$0_5 = this$0;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__30.prototype.invoke_sv8swh_k$ = function ($cont) {
    var tmp = this.create_s8oglw_k$($cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__30.prototype.invoke_0_k$ = function ($cont) {
    this.invoke_sv8swh_k$($cont);
    return Unit_getInstance();
  };
  _no_name_provided__30.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = start0(this._this$0_5, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._this$0_5._onStarted();
            Unit_getInstance();
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__30.prototype.create_s8oglw_k$ = function (completion) {
    var i = new _no_name_provided__30(this._this$0_5, completion);
    return i;
  };
  _no_name_provided__30.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function _no_name_provided__31($moduleEntry, resultContinuation) {
    this._$moduleEntry = $moduleEntry;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__31.prototype.invoke_0_k$ = function ($cont) {
    var tmp = this.create_s8oglw_k$($cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__31.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = await_0(asKPromise(this._$moduleEntry._module.loadData()), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__31.prototype.create_s8oglw_k$ = function (completion) {
    var i = new _no_name_provided__31(this._$moduleEntry, completion);
    return i;
  };
  _no_name_provided__31.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function _no_name_provided__32($moduleEntry, resultContinuation) {
    this._$moduleEntry_0 = $moduleEntry;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__32.prototype.invoke_0_k$ = function ($cont) {
    var tmp = this.create_s8oglw_k$($cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__32.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = await_0(asKPromise(this._$moduleEntry_0._module.start()), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__32.prototype.create_s8oglw_k$ = function (completion) {
    var i = new _no_name_provided__32(this._$moduleEntry_0, completion);
    return i;
  };
  _no_name_provided__32.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function _no_name_provided__33(this$0, $tokenData, $configJson, resultContinuation) {
    this._this$0_6 = this$0;
    this._$tokenData = $tokenData;
    this._$configJson = $configJson;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__33.prototype.invoke_sv8swh_k$ = function ($cont) {
    var tmp = this.create_s8oglw_k$($cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__33.prototype.invoke_0_k$ = function ($cont) {
    this.invoke_sv8swh_k$($cont);
    return Unit_getInstance();
  };
  _no_name_provided__33.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._state_0 = 1;
            suspendResult = lazyLogin0(this._this$0_6, this._$tokenData, this._$configJson, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__33.prototype.create_s8oglw_k$ = function (completion) {
    var i = new _no_name_provided__33(this._this$0_6, this._$tokenData, this._$configJson, completion);
    return i;
  };
  _no_name_provided__33.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function _no_name_provided__34($tokenData, $configJson) {
    this._$tokenData_0 = $tokenData;
    this._$configJson_0 = $configJson;
  }
  _no_name_provided__34.prototype.invoke_v48du5_k$ = function ($this$write) {
    $this$write.writeUTF8(this._$tokenData_0);
    $this$write.writeUTF8(JSON.stringify(this._$configJson_0));
  };
  _no_name_provided__34.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_v48du5_k$(p1 instanceof WritableMessage ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__34.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function $start0COROUTINE$0(_this_, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this_ = _this_;
  }
  $start0COROUTINE$0.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 4;
            initModules(this.__this_);
            this._state_0 = 1;
            suspendResult = loadModulesData(this.__this_, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            this._state_0 = 2;
            suspendResult = startModules(this.__this_, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 2:
            this._state_0 = 3;
            suspendResult = waitLoadJobsDone(this.__this_, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 4) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $start0COROUTINE$0.$metadata$ = {
    simpleName: '$start0COROUTINE$0',
    kind: 'class',
    interfaces: []
  };
  function $waitLoadJobsDoneCOROUTINE$1(_this_, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__0 = _this_;
  }
  $waitLoadJobsDoneCOROUTINE$1.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this.__this__0._loadJobsSealed = true;
            var tmp_0 = this;
            var tmp_1 = this;
            var tmp0_map_0 = ensureNotNull(this.__this__0._loadJobs);
            var tmp0_mapTo_0_1 = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map_0, 10));
            var tmp0_iterator_1_2 = tmp0_map_0.iterator_0_k$();
            while (tmp0_iterator_1_2.hasNext_0_k$()) {
              var item_2_3 = tmp0_iterator_1_2.next_0_k$();
              tmp0_mapTo_0_1.add_2bq_k$(asKPromise(item_2_3._promise_0));
              Unit_getInstance();
            }

            tmp_1._tmp1_toTypedArray_00 = tmp0_mapTo_0_1;
            tmp_0._promiseArray1 = copyToArray_0(this._tmp1_toTypedArray_00);
            this._state_0 = 1;
            suspendResult = await_0(Promise.all(this._promiseArray1), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            Unit_getInstance();
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $waitLoadJobsDoneCOROUTINE$1.$metadata$ = {
    simpleName: '$waitLoadJobsDoneCOROUTINE$1',
    kind: 'class',
    interfaces: []
  };
  function $loadModulesDataCOROUTINE$2(_this_, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__1 = _this_;
  }
  $loadModulesDataCOROUTINE$2.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            var tmp_0 = this;
            tmp_0._promiseList0 = ArrayList_init_$Create$();
            var tmp0_iterator = this.__this__1._modules.iterator_0_k$();
            while (tmp0_iterator.hasNext_0_k$()) {
              var moduleEntry = tmp0_iterator.next_0_k$();
              var promise_0 = promise(_no_name_provided_$factory_29(moduleEntry, null));
              this._promiseList0.add_2bq_k$(promise_0);
              Unit_getInstance();
            }

            var tmp_1 = this;
            var tmp_2 = Promise;
            tmp_1._allPromise1 = tmp_2.all(copyToArray_0(this._promiseList0));
            this._state_0 = 1;
            suspendResult = await_0(this._allPromise1, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            Unit_getInstance();
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $loadModulesDataCOROUTINE$2.$metadata$ = {
    simpleName: '$loadModulesDataCOROUTINE$2',
    kind: 'class',
    interfaces: []
  };
  function $startModulesCOROUTINE$3(_this_, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__2 = _this_;
  }
  $startModulesCOROUTINE$3.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            var tmp_0 = this;
            tmp_0._promiseList0_0 = ArrayList_init_$Create$();
            var tmp0_iterator = this.__this__2._modules.iterator_0_k$();
            while (tmp0_iterator.hasNext_0_k$()) {
              var moduleEntry = tmp0_iterator.next_0_k$();
              var promise_0 = promise(_no_name_provided_$factory_30(moduleEntry, null));
              this._promiseList0_0.add_2bq_k$(promise_0);
              Unit_getInstance();
            }

            var tmp_1 = this;
            var tmp_2 = Promise;
            tmp_1._allPromise1_0 = tmp_2.all(copyToArray_0(this._promiseList0_0));
            this._state_0 = 1;
            suspendResult = await_0(this._allPromise1_0, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            Unit_getInstance();
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $startModulesCOROUTINE$3.$metadata$ = {
    simpleName: '$startModulesCOROUTINE$3',
    kind: 'class',
    interfaces: []
  };
  function $lazyLogin0COROUTINE$4(_this_, tokenData, configJson, resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
    this.__this__3 = _this_;
    this._tokenData = tokenData;
    this._configJson = configJson;
  }
  $lazyLogin0COROUTINE$4.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            var tmp_0 = this;
            var tmp0_elvis_lhs = this._configJson;
            tmp_0._configJson0 = tmp0_elvis_lhs == null ? {} : tmp0_elvis_lhs;
            this._connection1 = ensureNotNull(this.__this__3._connection);
            this._waiter2 = newWaiter(this.__this__3, FrameworkMessage_Basic_getInstance()._type, LazyLogin_getInstance()._responseId_1);
            var tmp_1 = FrameworkMessage_Basic_getInstance()._type;
            var tmp_2 = LazyLogin_getInstance()._requestId;
            this._connection1.write(tmp_1, tmp_2, _no_name_provided_$factory_31(this._tokenData, this._configJson0));
            this._state_0 = 1;
            suspendResult = await_1(_get_hPromise_(this._waiter2), this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            var resp = suspendResult;
            var errorCode = resp.readErrorCode();
            if (_get_isFailure_(errorCode)) {
              throw Exception_init_$Create$_0(errorCode.toString());
            }
            var role = this.__this__3._roleModule._roleSupplier();
            role.readFrom(resp);
            this.__this__3._roleModule._roleEntered_jwxfho_k$(role);
            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  $lazyLogin0COROUTINE$4.$metadata$ = {
    simpleName: '$lazyLogin0COROUTINE$4',
    kind: 'class',
    interfaces: []
  };
  function Client() {
    this._logger = getLogger(Companion_getInstance_15(), getKClass_0(Client));
    this._connection = null;
    this._connectionHandler = new ClientConnectionHandler(this);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._responseWaiters = tmp$ret$0;
    var tmp_0 = this;
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = ArrayList_init_$Create$();
      break $l$block_0;
    }
    tmp_0._receivedMessages = tmp$ret$1;
    this._messageHandlers = [];
    var tmp_1 = this;
    var tmp$ret$2;
    $l$block_1: {
      tmp$ret$2 = ArrayList_init_$Create$();
      break $l$block_1;
    }
    tmp_1._modules = tmp$ret$2;
    this._status = None_getInstance_0();
    var tmp_2 = this;
    var tmp$ret$3;
    $l$block_2: {
      tmp$ret$3 = ArrayList_init_$Create$();
      break $l$block_2;
    }
    tmp_2._loadJobs = tmp$ret$3;
    this._loadJobsSealed = false;
    this._roleModule = new RoleModule();
    this._lastTouchTime = Date.now();
    this._touchInterval = 5000;
    this._basicMessageHandler = new BasicMessageHandler(this);
  }
  Client.prototype._get_logger__0_k$ = function () {
    return this._logger;
  };
  Client.prototype._set_connection__yyou5v_k$ = function (_set___) {
    this._connection = _set___;
  };
  Client.prototype._get_connection__0_k$ = function () {
    return this._connection;
  };
  Client.prototype._get_status__0_k$ = function () {
    return this._status;
  };
  Client.prototype._set_roleModule__c2d94o_k$ = function (_set___) {
    this._roleModule = _set___;
  };
  Client.prototype._get_roleModule__0_k$ = function () {
    return this._roleModule;
  };
  Client.prototype.connect = function (inetEndpoint, options) {
    return this.connect_figg30_k$(inetEndpoint, options === void 1 ? {} : options);
  };
  Client.prototype.connect_figg30_k$ = function (inetEndpoint, options) {
    this.init();
    return asJSPromise(promise(_no_name_provided_$factory_26(this, inetEndpoint, options, null)));
  };
  Client.prototype.connect$default_nv8296_k$ = function (inetEndpoint, options, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      options = {};
    return this.connect_figg30_k$(inetEndpoint, options);
  };
  Client.prototype.touchServer = function () {
    var connection = this._connection;
    if (connection instanceof HttpConnection) {
      connection.touch();
    } else {
    }
  };
  Client.prototype.init = function () {
    if (!equals_0(this._status, None_getInstance_0())) {
      return Unit_getInstance();
    }this.registerMessageHandler(this._basicMessageHandler);
    this._onPreInit();
    this._addModules();
    this._onPostInit();
    this._status = Inited_getInstance();
  };
  Client.prototype.start = function () {
    checkStatusIs(this, RoleEntered_getInstance());
    return asJSPromise(promise(_no_name_provided_$factory_27(this, null)));
  };
  Client.prototype.addLoadJob = function (loadJob) {
    if (this._loadJobsSealed) {
      throw Exception_init_$Create$_0("can't add loadJob after all module started");
    }if (loadJob._managed) {
      return Unit_getInstance();
    }loadJob._managed = true;
    ensureNotNull(this._loadJobs).add_2bq_k$(loadJob);
    Unit_getInstance();
  };
  Client.prototype.allLoadingJob = function () {
    var tmp$ret$3;
    $l$block_2: {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_filter_0 = this._loadJobs;
        var tmp$ret$1;
        $l$block_0: {
          var tmp0_filterTo_0_1 = ArrayList_init_$Create$();
          var tmp0_iterator_1_2 = tmp0_filter_0.iterator_0_k$();
          while (tmp0_iterator_1_2.hasNext_0_k$()) {
            var element_2_3 = tmp0_iterator_1_2.next_0_k$();
            var tmp$ret$0;
            $l$block: {
              tmp$ret$0 = !element_2_3._get_isDone__0_k$();
              break $l$block;
            }
            if (tmp$ret$0) {
              tmp0_filterTo_0_1.add_2bq_k$(element_2_3);
              Unit_getInstance();
            } else {
            }
          }
          tmp$ret$1 = tmp0_filterTo_0_1;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1;
        break $l$block_1;
      }
      var tmp1_toTypedArray_0 = tmp$ret$2;
      tmp$ret$3 = copyToArray_0(tmp1_toTypedArray_0);
      break $l$block_2;
    }
    return tmp$ret$3;
  };
  Client.prototype._onStarted = function () {
  };
  Client.prototype._onPreInit = function () {
  };
  Client.prototype._onPostInit = function () {
  };
  Client.prototype._addModules = function () {
    this.addModule(this._roleModule);
  };
  Client.prototype.addModule = function (module_0) {
    checkStatusIs(this, None_getInstance_0());
    var tmp$ret$2;
    $l$block_2: {
      var tmp0_find_0 = this._modules;
      var tmp$ret$1;
      $l$block_1: {
        var tmp0_iterator_1_1 = tmp0_find_0.iterator_0_k$();
        while (tmp0_iterator_1_1.hasNext_0_k$()) {
          var element_2_2 = tmp0_iterator_1_1.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = equals_0(element_2_2._module, module_0);
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element_2_2;
            break $l$block_1;
          } else {
          }
        }
        tmp$ret$1 = null;
        break $l$block_1;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_2;
    }
    var existed = tmp$ret$2;
    if (!(existed == null)) {
      throw Exception_init_$Create$_0('' + 'module ' + module_0 + ' already exist');
    }this._modules.add_2bq_k$(new ClientModuleEntry(module_0));
    Unit_getInstance();
    module_0.onAddTo_a09de3_k$(this);
  };
  Client.prototype.removeModule = function (module_0) {
    var tmp$ret$2;
    $l$block_2: {
      var tmp0_find_0 = this._modules;
      var tmp$ret$1;
      $l$block_1: {
        var tmp0_iterator_1_1 = tmp0_find_0.iterator_0_k$();
        while (tmp0_iterator_1_1.hasNext_0_k$()) {
          var element_2_2 = tmp0_iterator_1_1.next_0_k$();
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = equals_0(element_2_2._module, module_0);
            break $l$block;
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element_2_2;
            break $l$block_1;
          } else {
          }
        }
        tmp$ret$1 = null;
        break $l$block_1;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_2;
    }
    var existed = tmp$ret$2;
    if (!(existed == null)) {
      this._modules.remove_2bq_k$(existed);
      Unit_getInstance();
    }return !(existed == null);
  };
  Client.prototype.stepFrame = function () {
    try {
      checkAutoTouchServer(this);
      processReceivedMessages(this);
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_error_0 = this._logger;
          if (!tmp0_error_0._get_isErrorEnabled__0_k$()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }var tmp = console;
          var tmp_0 = (new Date(Date.now())).toDateString();
          Companion_getInstance_15();
          tmp.error(tmp_0, tmp0_error_0._nameTag, '[ERROR]', '[stepFrame]error', $p);
        }
      } else {
        {
          throw $p;
        }
      }
    }
  };
  Client.prototype.registerMessageHandler = function (messageHandler) {
    var type = messageHandler._type_0;
    var range = messageHandler._range;
    var map = this._messageHandlers[type];
    if (map == null) {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = LinkedHashMap_init_$Create$();
        break $l$block;
      }
      map = tmp$ret$0;
      this._messageHandlers[type] = map;
    }if (map.containsKey_2bw_k$(range)) {
      throw Exception_init_$Create$_0('' + 'message handler[type=' + type + ',range=' + range + '] already exist!');
    }{
      var tmp0_set_0 = map;
      tmp0_set_0.put_1q9pf_k$(range, messageHandler);
      Unit_getInstance();
    }
  };
  Client.prototype.removeMessageHandler = function (messageHandler) {
    var type = messageHandler._type_0;
    var range = messageHandler._range;
    var map = this._messageHandlers[type];
    var tmp;
    if (map == null) {
      tmp = false;
    } else {
      var removed = map.remove_2bw_k$(range);
      tmp = !(removed == null);
    }
    return tmp;
  };
  Client.prototype.getMessageHandler = function (type, id) {
    var map = this._messageHandlers[type];
    var range = id / 10000 | 0;
    var tmp;
    if (map == null) {
      tmp = null;
    } else {
      tmp = map.get_2bw_k$(range);
    }
    return tmp;
  };
  Client.prototype.lazyLogin = function (tokenData, configJson) {
    return this.lazyLogin_pqcwxr_k$(tokenData, configJson === void 1 ? {} : configJson);
  };
  Client.prototype.lazyLogin_pqcwxr_k$ = function (tokenData, configJson) {
    checkStatusIs(this, Connected_getInstance());
    return asJSPromise(promise(_no_name_provided_$factory_28(this, tokenData, configJson, null)));
  };
  Client.prototype.lazyLogin$default_y3a76r_k$ = function (tokenData, configJson, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      configJson = {};
    return this.lazyLogin_pqcwxr_k$(tokenData, configJson);
  };
  Client.prototype._onRoleEntered = function () {
    this._status = RoleEntered_getInstance();
  };
  Client.prototype._onMessageReceived = function (connection, message) {
    this._receivedMessages.add_2bq_k$(message);
    Unit_getInstance();
  };
  Client.prototype._onConnectionClosed = function (connection, error) {
  };
  Client.prototype._onConnectionOpened = function (connection) {
  };
  Client.prototype._onConnectionOpenFail = function (connection, error) {
  };
  Client.prototype._onServerWarn = function (title, message) {
  };
  Client.prototype._onServerError = function (title, message) {
    var tmp0_safe_receiver = this._connection;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.close_houul8_k$(Exception_init_$Create$_0(message));
      Unit_getInstance();
    }
    Unit_getInstance();
  };
  Client.$metadata$ = {
    simpleName: 'Client',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Client.prototype, 'connection', {
    configurable: true,
    get: Client.prototype._get_connection__0_k$,
    set: Client.prototype._set_connection__yyou5v_k$
  });
  Object.defineProperty(Client.prototype, 'status', {
    configurable: true,
    get: Client.prototype._get_status__0_k$
  });
  Object.defineProperty(Client.prototype, 'roleModule', {
    configurable: true,
    get: Client.prototype._get_roleModule__0_k$,
    set: Client.prototype._set_roleModule__c2d94o_k$
  });
  function ClientModuleEntry(module_0) {
    this._module = module_0;
  }
  ClientModuleEntry.$metadata$ = {
    simpleName: 'ClientModuleEntry',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_26(this$0, $inetEndpoint, $options, resultContinuation) {
    var i = new _no_name_provided__29(this$0, $inetEndpoint, $options, resultContinuation);
    var l = function ($cont) {
      return i.invoke_sv8swh_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function _no_name_provided_$factory_27(this$0, resultContinuation) {
    var i = new _no_name_provided__30(this$0, resultContinuation);
    var l = function ($cont) {
      return i.invoke_sv8swh_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function _no_name_provided_$factory_28(this$0, $tokenData, $configJson, resultContinuation) {
    var i = new _no_name_provided__33(this$0, $tokenData, $configJson, resultContinuation);
    var l = function ($cont) {
      return i.invoke_sv8swh_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function _no_name_provided_$factory_29($moduleEntry, resultContinuation) {
    var i = new _no_name_provided__31($moduleEntry, resultContinuation);
    var l = function ($cont) {
      return i.invoke_0_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function _no_name_provided_$factory_30($moduleEntry, resultContinuation) {
    var i = new _no_name_provided__32($moduleEntry, resultContinuation);
    var l = function ($cont) {
      return i.invoke_0_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function _no_name_provided_$factory_31($tokenData, $configJson) {
    var i = new _no_name_provided__34($tokenData, $configJson);
    return function (p1) {
      i.invoke_v48du5_k$(p1);
      return Unit_getInstance();
    };
  }
  function ClientConnectionHandler(client) {
    ConnectionHandler.call(this);
    this._client_0 = client;
  }
  ClientConnectionHandler.prototype.onMessageReceived = function (connection, message) {
    this._client_0._onMessageReceived(connection, message);
  };
  ClientConnectionHandler.prototype.onConnectionClosed = function (connection, error) {
    this._client_0._onConnectionClosed(connection, error);
  };
  ClientConnectionHandler.prototype.onConnectionOpened = function (connection) {
    this._client_0._onConnectionOpened(connection);
  };
  ClientConnectionHandler.prototype.onConnectionOpenFail = function (connection, error) {
    this._client_0._onConnectionOpenFail(connection, error);
  };
  ClientConnectionHandler.$metadata$ = {
    simpleName: 'ClientConnectionHandler',
    kind: 'class',
    interfaces: []
  };
  function _set_client_($this, _set___) {
    $this._client_1 = _set___;
  }
  function ClientModule() {
    this._client_1 = null;
  }
  ClientModule.prototype._get_client__0_k$ = function () {
    return this._client_1;
  };
  ClientModule.prototype.onAddTo_a09de3_k$ = function (client) {
    this._client_1 = client;
  };
  ClientModule.prototype.init = function () {
  };
  ClientModule.prototype.loadData = function () {
    return asJSPromise(Promise.resolve(Unit_getInstance()));
  };
  ClientModule.prototype.start = function () {
    return asJSPromise(Promise.resolve(Unit_getInstance()));
  };
  ClientModule.prototype.stop = function () {
  };
  ClientModule.$metadata$ = {
    simpleName: 'ClientModule',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ClientModule.prototype, 'client', {
    configurable: true,
    get: ClientModule.prototype._get_client__0_k$
  });
  function None_0() {
    None_instance_0 = this;
    ClientStatus.call(this, 'None');
  }
  None_0.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance_0;
  function None_getInstance_0() {
    if (None_instance_0 == null)
      new None_0();
    return None_instance_0;
  }
  function Inited() {
    Inited_instance = this;
    ClientStatus.call(this, 'Inited');
  }
  Inited.$metadata$ = {
    simpleName: 'Inited',
    kind: 'object',
    interfaces: []
  };
  var Inited_instance;
  function Inited_getInstance() {
    if (Inited_instance == null)
      new Inited();
    return Inited_instance;
  }
  function Connected() {
    Connected_instance = this;
    ClientStatus.call(this, 'Connected');
  }
  Connected.$metadata$ = {
    simpleName: 'Connected',
    kind: 'object',
    interfaces: []
  };
  var Connected_instance;
  function Connected_getInstance() {
    if (Connected_instance == null)
      new Connected();
    return Connected_instance;
  }
  function RoleEntered() {
    RoleEntered_instance = this;
    ClientStatus.call(this, 'RoleEntered');
  }
  RoleEntered.$metadata$ = {
    simpleName: 'RoleEntered',
    kind: 'object',
    interfaces: []
  };
  var RoleEntered_instance;
  function RoleEntered_getInstance() {
    if (RoleEntered_instance == null)
      new RoleEntered();
    return RoleEntered_instance;
  }
  function Running() {
    Running_instance = this;
    ClientStatus.call(this, 'Running');
  }
  Running.$metadata$ = {
    simpleName: 'Running',
    kind: 'object',
    interfaces: []
  };
  var Running_instance;
  function Running_getInstance() {
    if (Running_instance == null)
      new Running();
    return Running_instance;
  }
  function Stopped() {
    Stopped_instance = this;
    ClientStatus.call(this, 'Stopped');
  }
  Stopped.$metadata$ = {
    simpleName: 'Stopped',
    kind: 'object',
    interfaces: []
  };
  var Stopped_instance;
  function Stopped_getInstance() {
    if (Stopped_instance == null)
      new Stopped();
    return Stopped_instance;
  }
  function Error_1() {
    Error_instance = this;
    ClientStatus.call(this, 'Error');
  }
  Error_1.$metadata$ = {
    simpleName: 'Error',
    kind: 'object',
    interfaces: []
  };
  var Error_instance;
  function Error_getInstance() {
    if (Error_instance == null)
      new Error_1();
    return Error_instance;
  }
  function ClientStatus(name) {
    this._name_0 = name;
  }
  ClientStatus.prototype._get_name__0_k$ = function () {
    return this._name_0;
  };
  ClientStatus.prototype.toString = function () {
    return this._name_0;
  };
  ClientStatus.$metadata$ = {
    simpleName: 'ClientStatus',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ClientStatus.prototype, 'name', {
    configurable: true,
    get: ClientStatus.prototype._get_name__0_k$
  });
  function FrameworkMessage() {
    FrameworkMessage_instance = this;
    this._MessageType = 0;
  }
  FrameworkMessage.$metadata$ = {
    simpleName: 'FrameworkMessage',
    kind: 'object',
    interfaces: []
  };
  var FrameworkMessage_instance;
  function FrameworkMessage_getInstance() {
    if (FrameworkMessage_instance == null)
      new FrameworkMessage();
    return FrameworkMessage_instance;
  }
  function WarnMessage() {
    WarnMessage_instance = this;
    this._responseId = 1;
  }
  WarnMessage.$metadata$ = {
    simpleName: 'WarnMessage',
    kind: 'object',
    interfaces: [ResponseDeclaration]
  };
  var WarnMessage_instance;
  function WarnMessage_getInstance() {
    if (WarnMessage_instance == null)
      new WarnMessage();
    return WarnMessage_instance;
  }
  function ErrorMessage() {
    ErrorMessage_instance = this;
    this._responseId_0 = 2;
  }
  ErrorMessage.$metadata$ = {
    simpleName: 'ErrorMessage',
    kind: 'object',
    interfaces: [ResponseDeclaration]
  };
  var ErrorMessage_instance;
  function ErrorMessage_getInstance() {
    if (ErrorMessage_instance == null)
      new ErrorMessage();
    return ErrorMessage_instance;
  }
  function LazyLogin() {
    LazyLogin_instance = this;
    this._requestId = 51;
    this._responseId_1 = 51;
  }
  LazyLogin.$metadata$ = {
    simpleName: 'LazyLogin',
    kind: 'object',
    interfaces: [ReqAndRespDeclaration]
  };
  var LazyLogin_instance;
  function LazyLogin_getInstance() {
    if (LazyLogin_instance == null)
      new LazyLogin();
    return LazyLogin_instance;
  }
  function FrameworkMessage_Basic() {
    FrameworkMessage_Basic_instance = this;
    this._type = FrameworkMessage_getInstance()._MessageType;
    this._rangeFirstId = 1;
  }
  FrameworkMessage_Basic.$metadata$ = {
    simpleName: 'FrameworkMessage_Basic',
    kind: 'object',
    interfaces: [MessageRangeDeclaration]
  };
  var FrameworkMessage_Basic_instance;
  function FrameworkMessage_Basic_getInstance() {
    if (FrameworkMessage_Basic_instance == null)
      new FrameworkMessage_Basic();
    return FrameworkMessage_Basic_instance;
  }
  function _onRejected($this, error) {
    $this._doneType = 2;
  }
  function _onFulfilled($this, any) {
    $this._doneType = 1;
  }
  function _no_name_provided__35($boundThis) {
    this._$boundThis = $boundThis;
  }
  _no_name_provided__35.prototype.invoke_qi8yb4_k$ = function (p0) {
    return _onFulfilled(this._$boundThis, p0);
  };
  _no_name_provided__35.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_qi8yb4_k$((p1 == null ? true : isObject(p1)) ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__35.prototype._get_name__0_k$ = function () {
    return '_onFulfilled';
  };
  _no_name_provided__35.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__36($boundThis) {
    this._$boundThis_0 = $boundThis;
  }
  _no_name_provided__36.prototype.invoke_1ti8hr_k$ = function (p0) {
    return _onRejected(this._$boundThis_0, p0);
  };
  _no_name_provided__36.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_1ti8hr_k$(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__36.prototype._get_name__0_k$ = function () {
    return '_onRejected';
  };
  _no_name_provided__36.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function LoadJob(textSupplier, action) {
    this._textSupplier = textSupplier;
    this._managed = false;
    this._promise_0 = action();
    this._doneType = 0;
    var tmp = asKPromise(this._promise_0);
    var tmp_0 = _no_name_provided_$factory_32(this);
    tmp.then(tmp_0, _no_name_provided_$factory_33(this));
    Unit_getInstance();
  }
  LoadJob.prototype._set_managed__rpwsgn_k$ = function (_set___) {
    this._managed = _set___;
  };
  LoadJob.prototype._get_managed__0_k$ = function () {
    return this._managed;
  };
  LoadJob.prototype._get_promise__0_k$ = function () {
    return this._promise_0;
  };
  LoadJob.prototype._get_isSuccess__0_k$ = function () {
    return this._doneType === 1;
  };
  LoadJob.prototype._get_isFailure__0_k$ = function () {
    return this._doneType === 2;
  };
  LoadJob.prototype._get_isDone__0_k$ = function () {
    return !(this._doneType === 0);
  };
  LoadJob.prototype._get_text__0_k$ = function () {
    return this._textSupplier();
  };
  LoadJob.$metadata$ = {
    simpleName: 'LoadJob',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(LoadJob.prototype, 'promise', {
    configurable: true,
    get: LoadJob.prototype._get_promise__0_k$
  });
  Object.defineProperty(LoadJob.prototype, 'isSuccess', {
    configurable: true,
    get: LoadJob.prototype._get_isSuccess__0_k$
  });
  Object.defineProperty(LoadJob.prototype, 'isFailure', {
    configurable: true,
    get: LoadJob.prototype._get_isFailure__0_k$
  });
  Object.defineProperty(LoadJob.prototype, 'isDone', {
    configurable: true,
    get: LoadJob.prototype._get_isDone__0_k$
  });
  Object.defineProperty(LoadJob.prototype, 'text', {
    configurable: true,
    get: LoadJob.prototype._get_text__0_k$
  });
  function _no_name_provided_$factory_32($boundThis) {
    var i = new _no_name_provided__35($boundThis);
    var l = function (p1) {
      i.invoke_qi8yb4_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = i._get_name__0_k$();
    return l;
  }
  function _no_name_provided_$factory_33($boundThis) {
    var i = new _no_name_provided__36($boundThis);
    var l = function (p1) {
      i.invoke_1ti8hr_k$(p1);
      return Unit_getInstance();
    };
    l.callableName = i._get_name__0_k$();
    return l;
  }
  function MessageHandler(type, rangeFirstId) {
    this._type_0 = type;
    this._rangeFirstId_0 = rangeFirstId;
    this._range = this._rangeFirstId_0 / 10000 | 0;
  }
  MessageHandler.prototype._get_type__0_k$ = function () {
    return this._type_0;
  };
  MessageHandler.prototype._get_rangeFirstId__0_k$ = function () {
    return this._rangeFirstId_0;
  };
  MessageHandler.prototype._get_range__0_k$ = function () {
    return this._range;
  };
  MessageHandler.$metadata$ = {
    simpleName: 'MessageHandler',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(MessageHandler.prototype, 'type', {
    configurable: true,
    get: MessageHandler.prototype._get_type__0_k$
  });
  Object.defineProperty(MessageHandler.prototype, 'rangeFirstId', {
    configurable: true,
    get: MessageHandler.prototype._get_rangeFirstId__0_k$
  });
  Object.defineProperty(MessageHandler.prototype, 'range', {
    configurable: true,
    get: MessageHandler.prototype._get_range__0_k$
  });
  function MessageRangeDeclaration() {
  }
  MessageRangeDeclaration.$metadata$ = {
    simpleName: 'MessageRangeDeclaration',
    kind: 'interface',
    interfaces: []
  };
  function ReqAndRespDeclaration() {
  }
  ReqAndRespDeclaration.$metadata$ = {
    simpleName: 'ReqAndRespDeclaration',
    kind: 'interface',
    interfaces: [RequestDeclaration, ResponseDeclaration]
  };
  function RequestDeclaration() {
  }
  RequestDeclaration.$metadata$ = {
    simpleName: 'RequestDeclaration',
    kind: 'interface',
    interfaces: []
  };
  function ResponseDeclaration() {
  }
  ResponseDeclaration.$metadata$ = {
    simpleName: 'ResponseDeclaration',
    kind: 'interface',
    interfaces: []
  };
  function ResponseWaiter(type, id) {
    this._type_1 = type;
    this._id = id;
    this._promise_1 = asJSPromise((new HPromise())._promise);
  }
  ResponseWaiter.prototype._get_type__0_k$ = function () {
    return this._type_1;
  };
  ResponseWaiter.prototype._get_id__0_k$ = function () {
    return this._id;
  };
  ResponseWaiter.prototype._get_promise__0_k$ = function () {
    return this._promise_1;
  };
  ResponseWaiter.$metadata$ = {
    simpleName: 'ResponseWaiter',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ResponseWaiter.prototype, 'type', {
    configurable: true,
    get: ResponseWaiter.prototype._get_type__0_k$
  });
  Object.defineProperty(ResponseWaiter.prototype, 'id', {
    configurable: true,
    get: ResponseWaiter.prototype._get_id__0_k$
  });
  Object.defineProperty(ResponseWaiter.prototype, 'promise', {
    configurable: true,
    get: ResponseWaiter.prototype._get_promise__0_k$
  });
  function _get_hPromise_(_this_) {
    return ensureNotNull(Companion_getInstance_10().from_q2jafu_k$(_this_._promise_1));
  }
  function _get_MessageRangeSize_() {
    return MessageRangeSize;
  }
  var MessageRangeSize;
  function Role() {
    this._name_1 = '';
    this._index_0 = 0;
    this._roleUid = Companion_getInstance_11()._Zero;
    this._userUid = Companion_getInstance_11()._Zero;
  }
  Role.prototype._set_name__a4enbm_k$ = function (_set___) {
    this._name_1 = _set___;
  };
  Role.prototype._get_name__0_k$ = function () {
    return this._name_1;
  };
  Role.prototype._set_index__majfzk_k$ = function (_set___) {
    this._index_0 = _set___;
  };
  Role.prototype._get_index__0_k$ = function () {
    return this._index_0;
  };
  Role.prototype._set_roleUid__zbub8q_k$ = function (_set___) {
    this._roleUid = _set___;
  };
  Role.prototype._get_roleUid__0_k$ = function () {
    return this._roleUid;
  };
  Role.prototype._set_userUid__zbub8q_k$ = function (_set___) {
    this._userUid = _set___;
  };
  Role.prototype._get_userUid__0_k$ = function () {
    return this._userUid;
  };
  Role.prototype.readFrom = function (message) {
    this._userUid = message.readInt64();
    this._roleUid = message.readInt64();
    this._index_0 = message.readInt();
    this._name_1 = message.readUTF8();
  };
  Role.$metadata$ = {
    simpleName: 'Role',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Role.prototype, 'name', {
    configurable: true,
    get: Role.prototype._get_name__0_k$,
    set: Role.prototype._set_name__a4enbm_k$
  });
  Object.defineProperty(Role.prototype, 'index', {
    configurable: true,
    get: Role.prototype._get_index__0_k$,
    set: Role.prototype._set_index__majfzk_k$
  });
  Object.defineProperty(Role.prototype, 'roleUid', {
    configurable: true,
    get: Role.prototype._get_roleUid__0_k$,
    set: Role.prototype._set_roleUid__zbub8q_k$
  });
  Object.defineProperty(Role.prototype, 'userUid', {
    configurable: true,
    get: Role.prototype._get_userUid__0_k$,
    set: Role.prototype._set_userUid__zbub8q_k$
  });
  function RoleInfo() {
    this._name_2 = '';
    this._index_1 = 0;
    this._roleUid_0 = Companion_getInstance_11()._Zero;
    this._userUid_0 = Companion_getInstance_11()._Zero;
  }
  RoleInfo.prototype._set_name__a4enbm_k$ = function (_set___) {
    this._name_2 = _set___;
  };
  RoleInfo.prototype._get_name__0_k$ = function () {
    return this._name_2;
  };
  RoleInfo.prototype._set_index__majfzk_k$ = function (_set___) {
    this._index_1 = _set___;
  };
  RoleInfo.prototype._get_index__0_k$ = function () {
    return this._index_1;
  };
  RoleInfo.prototype._set_roleUid__zbub8q_k$ = function (_set___) {
    this._roleUid_0 = _set___;
  };
  RoleInfo.prototype._get_roleUid__0_k$ = function () {
    return this._roleUid_0;
  };
  RoleInfo.prototype._set_userUid__zbub8q_k$ = function (_set___) {
    this._userUid_0 = _set___;
  };
  RoleInfo.prototype._get_userUid__0_k$ = function () {
    return this._userUid_0;
  };
  RoleInfo.$metadata$ = {
    simpleName: 'RoleInfo',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(RoleInfo.prototype, 'name', {
    configurable: true,
    get: RoleInfo.prototype._get_name__0_k$,
    set: RoleInfo.prototype._set_name__a4enbm_k$
  });
  Object.defineProperty(RoleInfo.prototype, 'index', {
    configurable: true,
    get: RoleInfo.prototype._get_index__0_k$,
    set: RoleInfo.prototype._set_index__majfzk_k$
  });
  Object.defineProperty(RoleInfo.prototype, 'roleUid', {
    configurable: true,
    get: RoleInfo.prototype._get_roleUid__0_k$,
    set: RoleInfo.prototype._set_roleUid__zbub8q_k$
  });
  Object.defineProperty(RoleInfo.prototype, 'userUid', {
    configurable: true,
    get: RoleInfo.prototype._get_userUid__0_k$,
    set: RoleInfo.prototype._set_userUid__zbub8q_k$
  });
  function _no_name_provided__37() {
  }
  _no_name_provided__37.prototype.invoke_0_k$ = function () {
    return new Role();
  };
  _no_name_provided__37.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__38() {
  }
  _no_name_provided__38.prototype.invoke_0_k$ = function () {
    return new RoleInfo();
  };
  _no_name_provided__38.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function RoleModule() {
    ClientModule.call(this);
    var tmp = this;
    tmp._roleSupplier = _no_name_provided_$factory_34();
    this._role = null;
    var tmp_0 = this;
    tmp_0._roleInfoSupplier = _no_name_provided_$factory_35();
  }
  RoleModule.prototype._get_roleSupplier__0_k$ = function () {
    return this._roleSupplier;
  };
  RoleModule.prototype._set_role__ius1nz_k$ = function (_set___) {
    this._role = _set___;
  };
  RoleModule.prototype._get_role__0_k$ = function () {
    return this._role;
  };
  RoleModule.prototype._set_roleInfoSupplier__a9f2k5_k$ = function (_set___) {
    this._roleInfoSupplier = _set___;
  };
  RoleModule.prototype._get_roleInfoSupplier__0_k$ = function () {
    return this._roleInfoSupplier;
  };
  RoleModule.prototype.listRoles = function () {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  RoleModule.prototype.roleEnter = function (roleUid) {
    {
      throw NotImplementedError_init_$Create$(null, 1, null);
    }
  };
  RoleModule.prototype._roleEntered_jwxfho_k$ = function (role) {
    this._role = role;
    ensureNotNull(this._get_client__0_k$())._onRoleEntered();
  };
  RoleModule.$metadata$ = {
    simpleName: 'RoleModule',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(RoleModule.prototype, 'roleSupplier', {
    configurable: true,
    get: RoleModule.prototype._get_roleSupplier__0_k$
  });
  Object.defineProperty(RoleModule.prototype, 'role', {
    configurable: true,
    get: RoleModule.prototype._get_role__0_k$,
    set: RoleModule.prototype._set_role__ius1nz_k$
  });
  Object.defineProperty(RoleModule.prototype, 'roleInfoSupplier', {
    configurable: true,
    get: RoleModule.prototype._get_roleInfoSupplier__0_k$,
    set: RoleModule.prototype._set_roleInfoSupplier__a9f2k5_k$
  });
  function _no_name_provided_$factory_34() {
    var i = new _no_name_provided__37();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function _no_name_provided_$factory_35() {
    var i = new _no_name_provided__38();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function promise(function_0) {
    var p1 = new Promise(_no_name_provided_$factory_36(function_0));
    return p1;
  }
  function await_2(_this_, $cont) {
    var job = Job$default(null, 1, null);
    _this_.onloadend = _no_name_provided_$factory_37(job);
    return job.join_sv8swh_k$($cont);
  }
  function fromBits(_this_, low, high) {
    return toLong_0(high).and_wiekkq_k$(new Long(-1, 0)).shl_ha5a7z_k$(32).plus_wiekkq_k$(toLong_0(low).and_wiekkq_k$(new Long(-1, 0)));
  }
  function _no_name_provided__39($reject, $resolve) {
    this._$reject = $reject;
    this._$resolve = $resolve;
  }
  _no_name_provided__39.prototype._get_context__0_k$ = function () {
    return EmptyCoroutineContext_getInstance();
  };
  _no_name_provided__39.prototype.resumeWith_lbesfg_k$ = function (result) {
    if (_Result___get_isFailure__impl_(result)) {
      console.error('error catch', Result__exceptionOrNull_impl(result));
      var tmp0_elvis_lhs = Result__exceptionOrNull_impl(result);
      this._$reject(tmp0_elvis_lhs == null ? Exception_init_$Create$() : tmp0_elvis_lhs);
    } else {
      var tmp$ret$0;
      $l$block: {
        throwOnFailure(result);
        var tmp = _Result___get_value__impl_(result);
        tmp$ret$0 = (tmp == null ? true : isObject(tmp)) ? tmp : THROW_CCE();
        break $l$block;
      }
      this._$resolve(tmp$ret$0);
    }
  };
  _no_name_provided__39.prototype.resumeWith_bnunh2_k$ = function (result) {
    return this.resumeWith_lbesfg_k$(result);
  };
  _no_name_provided__39.$metadata$ = {
    kind: 'class',
    interfaces: [Continuation]
  };
  function _no_name_provided__40($function) {
    this._$function = $function;
  }
  _no_name_provided__40.prototype.invoke_hjiqc4_k$ = function (resolve, reject) {
    startCoroutine(this._$function, new _no_name_provided__39(reject, resolve));
  };
  _no_name_provided__40.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'function' : false) ? p1 : THROW_CCE();
    this.invoke_hjiqc4_k$(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__40.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__41($job) {
    this._$job = $job;
  }
  _no_name_provided__41.prototype.invoke_5tgw3j_k$ = function (it) {
    return this._$job.complete_0_k$();
  };
  _no_name_provided__41.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_5tgw3j_k$(p1 instanceof Event ? p1 : THROW_CCE());
  };
  _no_name_provided__41.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_36($function) {
    var i = new _no_name_provided__40($function);
    return function (p1, p2) {
      i.invoke_hjiqc4_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_37($job) {
    var i = new _no_name_provided__41($job);
    return function (p1) {
      return i.invoke_5tgw3j_k$(p1);
    };
  }
  function ByteBuf() {
  }
  ByteBuf.prototype.getBytes = function (index, bytes, startIndex, length) {
    return this.getBytes_46tb3l_k$(index, bytes, startIndex === void 1 ? 0 : startIndex, length === void 1 ? -1 : length);
  };
  ByteBuf.prototype.getBytes$default_r1okrz_k$ = function (index, bytes, startIndex, length, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      startIndex = 0;
    if (!(($mask0 & 8) === 0))
      length = -1;
    return $handler == null ? this.getBytes_46tb3l_k$(index, bytes, startIndex, length) : $handler(index, bytes, startIndex, length);
  };
  ByteBuf.prototype.readBytes = function (bytes, startIndex, length) {
    return this.readBytes_ysdrhq_k$(bytes, startIndex === void 1 ? 0 : startIndex, length === void 1 ? -1 : length);
  };
  ByteBuf.prototype.readBytes$default_ffc7am_k$ = function (bytes, startIndex, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      length = -1;
    return $handler == null ? this.readBytes_ysdrhq_k$(bytes, startIndex, length) : $handler(bytes, startIndex, length);
  };
  ByteBuf.prototype.setBytes = function (index, value, startIndex, length) {
    return this.setBytes_9piif6_k$(index, value, startIndex === void 1 ? 0 : startIndex, length === void 1 ? -1 : length);
  };
  ByteBuf.prototype.setBytes$default_esd280_k$ = function (index, value, startIndex, length, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      startIndex = 0;
    if (!(($mask0 & 8) === 0))
      length = -1;
    return $handler == null ? this.setBytes_9piif6_k$(index, value, startIndex, length) : $handler(index, value, startIndex, length);
  };
  ByteBuf.prototype.writeBytes = function (value, startIndex, length) {
    return this.writeBytes_irqg4d_k$(value, startIndex === void 1 ? 0 : startIndex, length === void 1 ? -1 : length);
  };
  ByteBuf.prototype.writeBytes$default_82dsjl_k$ = function (value, startIndex, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      length = -1;
    return $handler == null ? this.writeBytes_irqg4d_k$(value, startIndex, length) : $handler(value, startIndex, length);
  };
  ByteBuf.$metadata$ = {
    simpleName: 'ByteBuf',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ByteBuf.prototype, 'capacity', {
    configurable: true,
    get: ByteBuf.prototype._get_capacity__0_k$,
    set: ByteBuf.prototype._set_capacity__majfzk_k$
  });
  Object.defineProperty(ByteBuf.prototype, 'maxCapacity', {
    configurable: true,
    get: ByteBuf.prototype._get_maxCapacity__0_k$
  });
  Object.defineProperty(ByteBuf.prototype, 'order', {
    configurable: true,
    get: ByteBuf.prototype._get_order__0_k$,
    set: ByteBuf.prototype._set_order__qd3jy9_k$
  });
  Object.defineProperty(ByteBuf.prototype, 'readerIndex', {
    configurable: true,
    get: ByteBuf.prototype._get_readerIndex__0_k$,
    set: ByteBuf.prototype._set_readerIndex__majfzk_k$
  });
  Object.defineProperty(ByteBuf.prototype, 'writerIndex', {
    configurable: true,
    get: ByteBuf.prototype._get_writerIndex__0_k$,
    set: ByteBuf.prototype._set_writerIndex__majfzk_k$
  });
  Object.defineProperty(ByteBuf.prototype, 'readableBytes', {
    configurable: true,
    get: ByteBuf.prototype._get_readableBytes__0_k$
  });
  Object.defineProperty(ByteBuf.prototype, 'writableBytes', {
    configurable: true,
    get: ByteBuf.prototype._get_writableBytes__0_k$
  });
  Object.defineProperty(ByteBuf.prototype, 'maxWritableBytes', {
    configurable: true,
    get: ByteBuf.prototype._get_maxWritableBytes__0_k$
  });
  function _no_name_provided__42() {
  }
  _no_name_provided__42.prototype.invoke_0_k$ = function () {
    return new ByteBufAllocatorImpl();
  };
  _no_name_provided__42.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function Companion_13() {
    Companion_instance_12 = this;
    var tmp = this;
    tmp._Default$delegate = lazy(_no_name_provided_$factory_38());
  }
  Companion_13.prototype._get_Default__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = Default$factory();
      tmp$ret$0 = this._Default$delegate._get_value__0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_13.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_13.prototype, 'Default', {
    configurable: true,
    get: Companion_13.prototype._get_Default__0_k$
  });
  var Companion_instance_12;
  function Companion_getInstance_12() {
    if (Companion_instance_12 == null)
      new Companion_13();
    return Companion_instance_12;
  }
  function ByteBufAllocator() {
    Companion_getInstance_12();
  }
  ByteBufAllocator.prototype.buffer = function (initialCapacity, maxCapacity) {
    return this.buffer_27zxwg_k$(initialCapacity === void 1 ? -1 : initialCapacity, maxCapacity === void 1 ? -1 : maxCapacity);
  };
  ByteBufAllocator.prototype.buffer$default_1mz7xa_k$ = function (initialCapacity, maxCapacity, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      initialCapacity = -1;
    if (!(($mask0 & 2) === 0))
      maxCapacity = -1;
    return $handler == null ? this.buffer_27zxwg_k$(initialCapacity, maxCapacity) : $handler(initialCapacity, maxCapacity);
  };
  ByteBufAllocator.$metadata$ = {
    simpleName: 'ByteBufAllocator',
    kind: 'class',
    interfaces: []
  };
  function Default$factory() {
    return getPropertyCallableRef('Default', 1, KProperty1, function (receiver) {
      return receiver._get_Default__0_k$();
    }, null);
  }
  function _no_name_provided_$factory_38() {
    var i = new _no_name_provided__42();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function _no_name_provided__43() {
  }
  _no_name_provided__43.prototype.invoke_0_k$ = function () {
    var ab = new ArrayBuffer(2);
    var dv = new DataView(ab);
    var i16Array = new Int16Array(ab);
    dv.setInt8(0, 0);
    dv.setInt8(1, 1);
    var tmp$ret$1;
    $l$block_0: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = i16Array;
        break $l$block;
      }
      tmp$ret$1 = tmp$ret$0[0];
      break $l$block_0;
    }
    var i16 = tmp$ret$1;
    var tmp;
    if (i16 === 1) {
      tmp = BigEndian_getInstance();
    } else {
      tmp = LittleEndian_getInstance();
    }
    return tmp;
  };
  _no_name_provided__43.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function BigEndian() {
    BigEndian_instance = this;
    ByteOrder.call(this);
  }
  BigEndian.$metadata$ = {
    simpleName: 'BigEndian',
    kind: 'object',
    interfaces: []
  };
  var BigEndian_instance;
  function BigEndian_getInstance() {
    if (BigEndian_instance == null)
      new BigEndian();
    return BigEndian_instance;
  }
  function LittleEndian() {
    LittleEndian_instance = this;
    ByteOrder.call(this);
  }
  LittleEndian.$metadata$ = {
    simpleName: 'LittleEndian',
    kind: 'object',
    interfaces: []
  };
  var LittleEndian_instance;
  function LittleEndian_getInstance() {
    if (LittleEndian_instance == null)
      new LittleEndian();
    return LittleEndian_instance;
  }
  function Companion_14() {
    Companion_instance_13 = this;
    var tmp = this;
    tmp._nativeOrder$delegate = lazy(_no_name_provided_$factory_39());
  }
  Companion_14.prototype._get_nativeOrder__0_k$ = function () {
    var tmp$ret$0;
    $l$block: {
      var tmp0_getValue_0 = nativeOrder$factory();
      tmp$ret$0 = this._nativeOrder$delegate._get_value__0_k$();
      break $l$block;
    }
    return tmp$ret$0;
  };
  Companion_14.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_14.prototype, 'nativeOrder', {
    configurable: true,
    get: Companion_14.prototype._get_nativeOrder__0_k$
  });
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_14();
    return Companion_instance_13;
  }
  function ByteOrder() {
    Companion_getInstance_13();
  }
  ByteOrder.$metadata$ = {
    simpleName: 'ByteOrder',
    kind: 'class',
    interfaces: []
  };
  function nativeOrder$factory() {
    return getPropertyCallableRef('nativeOrder', 1, KProperty1, function (receiver) {
      return receiver._get_nativeOrder__0_k$();
    }, null);
  }
  function _no_name_provided_$factory_39() {
    var i = new _no_name_provided__43();
    return function () {
      return i.invoke_0_k$();
    };
  }
  function DataReader() {
  }
  DataReader.prototype.readShorts = function () {
    var len = this.readInt();
    var array = new Int16Array(len);
    var inductionVariable = 0;
    if (inductionVariable < len)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = this.readShort();
      }
       while (inductionVariable < len);
    return array;
  };
  DataReader.prototype.readInts = function () {
    var len = this.readInt();
    var array = new Int32Array(len);
    var inductionVariable = 0;
    if (inductionVariable < len)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = this.readInt();
      }
       while (inductionVariable < len);
    return array;
  };
  DataReader.prototype.readInt64s = function () {
    var len = this.readInt();
    var tmp = 0;
    var tmp_0 = len;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
      break $l$block;
    }
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = this.readInt64();
        break $l$block_0;
      }
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var array = tmp_1;
    return array;
  };
  DataReader.prototype.readFloats = function () {
    var len = this.readInt();
    var array = new Float32Array(len);
    var inductionVariable = 0;
    if (inductionVariable < len)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = this.readFloat();
      }
       while (inductionVariable < len);
    return array;
  };
  DataReader.prototype.readDoubles = function () {
    var len = this.readInt();
    var array = new Float64Array(len);
    var inductionVariable = 0;
    if (inductionVariable < len)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = this.readDouble();
      }
       while (inductionVariable < len);
    return array;
  };
  DataReader.prototype.readBooleans = function () {
    var len = this.readInt();
    var array = booleanArray(len);
    var inductionVariable = 0;
    if (inductionVariable < len)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = this.readBoolean();
      }
       while (inductionVariable < len);
    return array;
  };
  DataReader.prototype.readUTF8s = function () {
    var len = this.readInt();
    var tmp = 0;
    var tmp_0 = len;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = fillArrayVal(Array(tmp_0), null);
      break $l$block;
    }
    var tmp_1 = tmp$ret$0;
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = this.readUTF8();
        break $l$block_0;
      }
      tmp_1[tmp_2] = tmp$ret$1;
      tmp = tmp + 1 | 0;
    }
    var array = tmp_1;
    return array;
  };
  DataReader.prototype.readErrorCode = function () {
    return new ErrorCode(this.readUTF8(), this.readUTF8());
  };
  DataReader.prototype.readJson = function () {
    return JSON.parse(this.readUTF8());
  };
  DataReader.$metadata$ = {
    simpleName: 'DataReader',
    kind: 'class',
    interfaces: []
  };
  function DataWriter() {
  }
  DataWriter.prototype.writeBytes = function (value, startIndex, length) {
    return this.writeBytes_ysdrhq_k$(value, startIndex === void 1 ? 0 : startIndex, length === void 1 ? -1 : length);
  };
  DataWriter.prototype.writeBytes$default_ffc7am_k$ = function (value, startIndex, length, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      startIndex = 0;
    if (!(($mask0 & 4) === 0))
      length = -1;
    return $handler == null ? this.writeBytes_ysdrhq_k$(value, startIndex, length) : $handler(value, startIndex, length);
  };
  DataWriter.prototype.writeBooleans = function (array) {
    this.writeInt(array.length);
    var indexedObject = array;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.writeBoolean(value);
    }
  };
  DataWriter.prototype.writeShorts = function (array) {
    this.writeInt(array.length);
    var indexedObject = array;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.writeShort(value);
    }
  };
  DataWriter.prototype.writeInts = function (array) {
    this.writeInt(array.length);
    var indexedObject = array;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.writeInt(value);
    }
  };
  DataWriter.prototype.writeInt64s = function (array) {
    this.writeInt(array.length);
    var indexedObject = array;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.writeInt64(value);
    }
  };
  DataWriter.prototype.writeFloats = function (array) {
    this.writeInt(array.length);
    var indexedObject = array;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.writeFloat(value);
    }
  };
  DataWriter.prototype.writeDoubles = function (array) {
    this.writeInt(array.length);
    var indexedObject = array;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.writeDouble(value);
    }
  };
  DataWriter.prototype.writeUTF8s = function (array) {
    this.writeInt(array.length);
    var indexedObject = array;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var value = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.writeUTF8(value);
    }
  };
  DataWriter.prototype.writeErrorCode = function (errorCode) {
    this.writeUTF8(errorCode._code);
    this.writeUTF8(errorCode._message);
  };
  DataWriter.prototype.writeJson = function (json) {
    this.writeUTF8(JSON.stringify(json));
  };
  DataWriter.$metadata$ = {
    simpleName: 'DataWriter',
    kind: 'class',
    interfaces: []
  };
  function Companion_15() {
    Companion_instance_14 = this;
    this._DefaultInitCapacity = 128;
    this._DefaultMaxCapacity = 524288;
  }
  Companion_15.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_15();
    return Companion_instance_14;
  }
  function ByteBufAllocatorImpl() {
    Companion_getInstance_14();
    ByteBufAllocator.call(this);
  }
  ByteBufAllocatorImpl.prototype.buffer = function (initialCapacity, maxCapacity) {
    var initialCapacity_0 = initialCapacity;
    var maxCapacity_0 = maxCapacity;
    if (initialCapacity_0 < 0) {
      Companion_getInstance_14();
      initialCapacity_0 = 128;
    }if (maxCapacity_0 < 0) {
      Companion_getInstance_14();
      maxCapacity_0 = 524288;
    }return new ByteBufImpl(new DataView(new ArrayBuffer(initialCapacity_0)), initialCapacity_0, maxCapacity_0);
  };
  ByteBufAllocatorImpl.prototype.buffer_27zxwg_k$ = function (initialCapacity, maxCapacity) {
    return this.buffer(initialCapacity, maxCapacity);
  };
  ByteBufAllocatorImpl.prototype.wrap = function (bytes) {
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = bytes;
      break $l$block;
    }
    var bytesInt8Array = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_also_0 = new ByteBufImpl(new DataView(bytesInt8Array.buffer, bytesInt8Array.byteOffset, bytesInt8Array.length), bytes.length, bytes.length);
      {
      }
      {
        tmp0_also_0.setIndex(0, bytes.length);
      }
      tmp$ret$1 = tmp0_also_0;
      break $l$block_0;
    }
    return tmp$ret$1;
  };
  ByteBufAllocatorImpl.$metadata$ = {
    simpleName: 'ByteBufAllocatorImpl',
    kind: 'class',
    interfaces: []
  };
  function _get_isLittleEndian_($this) {
    return equals_0($this._order, LittleEndian_getInstance());
  }
  function checkGrowCapacity($this, cap) {
    if (cap >= $this._view.byteLength) {
      var newCap = imul(cap, 4) / 3 | 0;
      var minGrowCap = 128;
      if ((newCap - cap | 0) < minGrowCap) {
        newCap = cap + minGrowCap | 0;
      }var tmp$ret$0;
      $l$block: {
        var tmp0_min_0 = newCap;
        var tmp1_min_0 = $this._maxCapacity;
        tmp$ret$0 = Math.min(tmp0_min_0, tmp1_min_0);
        break $l$block;
      }
      newCap = tmp$ret$0;
      var oldData = new Int8Array($this._view.buffer, $this._view.byteOffset, $this._view.byteLength);
      var newData = new Int8Array(newCap);
      newData.set(oldData);
      $this._view = new DataView(newData.buffer);
    }}
  function ensureCapacity0($this, expectMinCapacity) {
    if (expectMinCapacity > $this._maxCapacity) {
      throw IndexOutOfBoundsException_init_$Create$_0('expectMinCapacity > maxCapacity');
    }if (expectMinCapacity > $this._capacity) {
      $this._set_capacity__majfzk_k$(expectMinCapacity);
    }}
  function ByteBufImpl(view, capacity, maxCapacity) {
    ByteBuf.call(this);
    this._view = view;
    this._maxCapacity = maxCapacity;
    this._capacity = capacity;
    this._order = Companion_getInstance_13()._get_nativeOrder__0_k$();
    this._readerIndex = 0;
    this._writerIndex = 0;
    this._markedReaderIndex = 0;
    this._markedWriterIndex = 0;
    this._order = BigEndian_getInstance();
  }
  ByteBufImpl.prototype._get_maxCapacity__0_k$ = function () {
    return this._maxCapacity;
  };
  ByteBufImpl.prototype._set_capacity__majfzk_k$ = function (value) {
    if (value === this._capacity) {
      return Unit_getInstance();
    }if (value > this._maxCapacity) {
      throw IndexOutOfBoundsException_init_$Create$_0('capacity > maxCapacity');
    }this._capacity = value;
    checkGrowCapacity(this, value);
  };
  ByteBufImpl.prototype._get_capacity__0_k$ = function () {
    return this._capacity;
  };
  ByteBufImpl.prototype._set_order__qd3jy9_k$ = function (_set___) {
    this._order = _set___;
  };
  ByteBufImpl.prototype._get_order__0_k$ = function () {
    return this._order;
  };
  ByteBufImpl.prototype._set_readerIndex__majfzk_k$ = function (_set___) {
    this._readerIndex = _set___;
  };
  ByteBufImpl.prototype._get_readerIndex__0_k$ = function () {
    return this._readerIndex;
  };
  ByteBufImpl.prototype._set_writerIndex__majfzk_k$ = function (_set___) {
    this._writerIndex = _set___;
  };
  ByteBufImpl.prototype._get_writerIndex__0_k$ = function () {
    return this._writerIndex;
  };
  ByteBufImpl.prototype.setIndex = function (readerIndex, writerIndex) {
    if (readerIndex < 0) {
      throw IndexOutOfBoundsException_init_$Create$();
    }if (writerIndex < writerIndex) {
      throw IndexOutOfBoundsException_init_$Create$();
    }if (writerIndex > this._capacity) {
      throw IndexOutOfBoundsException_init_$Create$();
    }this._readerIndex = readerIndex;
    this._writerIndex = writerIndex;
  };
  ByteBufImpl.prototype._get_readableBytes__0_k$ = function () {
    return this._writerIndex - this._readerIndex | 0;
  };
  ByteBufImpl.prototype._get_writableBytes__0_k$ = function () {
    return this._capacity - this._writerIndex | 0;
  };
  ByteBufImpl.prototype._get_maxWritableBytes__0_k$ = function () {
    return this._maxCapacity - this._writerIndex | 0;
  };
  ByteBufImpl.prototype.clear = function () {
    this.setIndex(0, 0);
  };
  ByteBufImpl.prototype.markReaderIndex = function () {
    this._markedReaderIndex = this._readerIndex;
    return this;
  };
  ByteBufImpl.prototype.resetReaderIndex = function () {
    this._readerIndex = this._markedReaderIndex;
    return this;
  };
  ByteBufImpl.prototype.markWriterIndex = function () {
    this._markedWriterIndex = this._writerIndex;
    return this;
  };
  ByteBufImpl.prototype.resetWriterIndex = function () {
    this._writerIndex = this._markedWriterIndex;
    return this;
  };
  ByteBufImpl.prototype.ensureWritable = function (minWritableBytes) {
    ensureCapacity0(this, this._writerIndex + minWritableBytes | 0);
    return this;
  };
  ByteBufImpl.prototype.getByte = function (index) {
    return this._view.getInt8(index);
  };
  ByteBufImpl.prototype.getBoolean = function (index) {
    var b0 = 0;
    return !(this._view.getInt8(index) === b0);
  };
  ByteBufImpl.prototype.getShort = function (index) {
    return this._view.getInt16(index, _get_isLittleEndian_(this));
  };
  ByteBufImpl.prototype.getInt = function (index) {
    return this._view.getInt32(index, _get_isLittleEndian_(this));
  };
  ByteBufImpl.prototype.getInt64 = function (index) {
    var i1 = this._view.getInt32(index, _get_isLittleEndian_(this));
    var i2 = this._view.getInt32(index + 4 | 0, _get_isLittleEndian_(this));
    var tmp;
    if (_get_isLittleEndian_(this)) {
      tmp = toInt64(fromBits(Companion_getInstance_6(), i1, i2));
    } else {
      tmp = toInt64(fromBits(Companion_getInstance_6(), i2, i1));
    }
    return tmp;
  };
  ByteBufImpl.prototype.getFloat = function (index) {
    return this._view.getFloat32(index, _get_isLittleEndian_(this));
  };
  ByteBufImpl.prototype.getDouble = function (index) {
    return this._view.getFloat64(index, _get_isLittleEndian_(this));
  };
  ByteBufImpl.prototype.getUTF8 = function (index, byteLength) {
    var data = new Int8Array(this._view.buffer, this._view.byteOffset + index | 0, byteLength);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = data;
      break $l$block;
    }
    var tmp = tmp$ret$0;
    return decodeToString((!(tmp == null) ? isByteArray(tmp) : false) ? tmp : THROW_CCE());
  };
  ByteBufImpl.prototype.getBytes = function (index, bytes, startIndex, length) {
    var abIndex = this._view.byteOffset + index | 0;
    var length_0 = length;
    if (length_0 < 0) {
      length_0 = bytes.length - startIndex | 0;
    }var subInt8Array = new Int8Array(this._view.buffer, abIndex, length_0);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = bytes;
      break $l$block;
    }
    var bytesInt8Array = tmp$ret$0;
    var destView = new Int8Array(bytesInt8Array.buffer, bytesInt8Array.byteOffset + startIndex | 0, length_0);
    destView.set(subInt8Array);
  };
  ByteBufImpl.prototype.getBytes_46tb3l_k$ = function (index, bytes, startIndex, length) {
    return this.getBytes(index, bytes, startIndex, length);
  };
  ByteBufImpl.prototype.readByte = function () {
    {
      if ((1 + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('readable bytes not enough: 1');
      }}
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + 1 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    return this.getByte(tmp$ret$0);
  };
  ByteBufImpl.prototype.readBoolean = function () {
    {
      if ((1 + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('readable bytes not enough: 1');
      }}
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + 1 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    return this.getBoolean(tmp$ret$0);
  };
  ByteBufImpl.prototype.readShort = function () {
    {
      if ((2 + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('readable bytes not enough: 2');
      }}
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + 2 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    return this.getShort(tmp$ret$0);
  };
  ByteBufImpl.prototype.readInt = function () {
    {
      if ((4 + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('readable bytes not enough: 4');
      }}
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + 4 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    return this.getInt(tmp$ret$0);
  };
  ByteBufImpl.prototype.readInt64 = function () {
    {
      if ((8 + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('readable bytes not enough: 8');
      }}
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + 8 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    return this.getInt64(tmp$ret$0);
  };
  ByteBufImpl.prototype.readFloat = function () {
    {
      if ((4 + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('readable bytes not enough: 4');
      }}
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + 4 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    return this.getFloat(tmp$ret$0);
  };
  ByteBufImpl.prototype.readDouble = function () {
    {
      if ((8 + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('readable bytes not enough: 8');
      }}
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + 8 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    return this.getDouble(tmp$ret$0);
  };
  ByteBufImpl.prototype.readUTF8 = function (byteLength) {
    {
      if ((byteLength + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('' + 'readable bytes not enough: ' + byteLength);
      }}
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + byteLength | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    return this.getUTF8(tmp$ret$0, byteLength);
  };
  ByteBufImpl.prototype.readBytes = function (bytes, startIndex, length) {
    var length_0 = length;
    if (length_0 < 0) {
      length_0 = bytes.length - startIndex | 0;
    }{
      var tmp0_checkReadableBytes_0 = length_0;
      if ((tmp0_checkReadableBytes_0 + this._readerIndex | 0) > this._writerIndex) {
        throw IndexOutOfBoundsException_init_$Create$_0('' + 'readable bytes not enough: ' + tmp0_checkReadableBytes_0);
      }}
    var tmp$ret$0;
    $l$block: {
      var tmp1_getAndIncReaderIndex_0 = length_0;
      var ri_1 = this._readerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._readerIndex = tmp0_this_2._readerIndex + tmp1_getAndIncReaderIndex_0 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.getBytes(tmp$ret$0, bytes, startIndex, length_0);
  };
  ByteBufImpl.prototype.readBytes_ysdrhq_k$ = function (bytes, startIndex, length) {
    return this.readBytes(bytes, startIndex, length);
  };
  ByteBufImpl.prototype.setByte = function (index, value) {
    ensureCapacity0(this, index + 1 | 0);
    this._view.setInt8(index, value);
  };
  ByteBufImpl.prototype.setBoolean = function (index, value) {
    ensureCapacity0(this, index + 1 | 0);
    var tmp = this._view;
    var tmp_0;
    if (value) {
      tmp_0 = 1;
    } else {
      tmp_0 = 0;
    }
    tmp.setInt8(index, tmp_0);
  };
  ByteBufImpl.prototype.setShort = function (index, value) {
    ensureCapacity0(this, index + 2 | 0);
    this._view.setInt16(index, value, _get_isLittleEndian_(this));
  };
  ByteBufImpl.prototype.setInt = function (index, value) {
    ensureCapacity0(this, index + 4 | 0);
    this._view.setInt32(index, value, _get_isLittleEndian_(this));
  };
  ByteBufImpl.prototype.setInt64 = function (index, value) {
    ensureCapacity0(this, index + 8 | 0);
    var tmp$ret$0;
    $l$block: {
      var tmp0_asDynamic_0 = value._value_5;
      tmp$ret$0 = tmp0_asDynamic_0;
      break $l$block;
    }
    var nativeLong = tmp$ret$0;
    var low = nativeLong._low;
    var high = nativeLong._high;
    if (_get_isLittleEndian_(this)) {
      this.setInt(index, low);
      this.setInt(index + 4 | 0, high);
    } else {
      this.setInt(index, high);
      this.setInt(index + 4 | 0, low);
    }
  };
  ByteBufImpl.prototype.setFloat = function (index, value) {
    ensureCapacity0(this, index + 4 | 0);
    this._view.setFloat32(index, value, _get_isLittleEndian_(this));
  };
  ByteBufImpl.prototype.setDouble = function (index, value) {
    ensureCapacity0(this, index + 8 | 0);
    this._view.setFloat64(index, value, _get_isLittleEndian_(this));
  };
  ByteBufImpl.prototype.setUTF8 = function (index, value) {
    var data = encodeToByteArray(value);
    ensureCapacity0(this, index + data.length | 0);
    var abIndex = this._view.byteOffset + index | 0;
    var subView = new Int8Array(this._view.buffer, abIndex, data.length);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = data;
      break $l$block;
    }
    var dataInt8Array = tmp$ret$0;
    subView.set(dataInt8Array);
    return data.length;
  };
  ByteBufImpl.prototype.setBytes = function (index, value, startIndex, length) {
    var length_0 = length;
    if (length_0 < 0) {
      length_0 = value.length - startIndex | 0;
    }ensureCapacity0(this, index + length_0 | 0);
    var abIndex = this._view.byteOffset + index | 0;
    var subView = new Int8Array(this._view.buffer, abIndex, value.length);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = value;
      break $l$block;
    }
    var dataInt8Array = tmp$ret$0;
    dataInt8Array = new Int8Array(dataInt8Array.buffer, dataInt8Array.byteOffset + startIndex | 0, length_0);
    subView.set(dataInt8Array);
    return length_0;
  };
  ByteBufImpl.prototype.setBytes_9piif6_k$ = function (index, value, startIndex, length) {
    return this.setBytes(index, value, startIndex, length);
  };
  ByteBufImpl.prototype.writeByte = function (value) {
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._writerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._writerIndex = tmp0_this_2._writerIndex + 1 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.setByte(tmp$ret$0, value);
  };
  ByteBufImpl.prototype.writeBoolean = function (value) {
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._writerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._writerIndex = tmp0_this_2._writerIndex + 1 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.setBoolean(tmp$ret$0, value);
  };
  ByteBufImpl.prototype.writeShort = function (value) {
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._writerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._writerIndex = tmp0_this_2._writerIndex + 2 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.setShort(tmp$ret$0, value);
  };
  ByteBufImpl.prototype.writeInt = function (value) {
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._writerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._writerIndex = tmp0_this_2._writerIndex + 4 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.setInt(tmp$ret$0, value);
  };
  ByteBufImpl.prototype.writeInt64 = function (value) {
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._writerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._writerIndex = tmp0_this_2._writerIndex + 8 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.setInt64(tmp$ret$0, value);
  };
  ByteBufImpl.prototype.writeFloat = function (value) {
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._writerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._writerIndex = tmp0_this_2._writerIndex + 4 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.setFloat(tmp$ret$0, value);
  };
  ByteBufImpl.prototype.writeDouble = function (value) {
    var tmp$ret$0;
    $l$block: {
      var ri_1 = this._writerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._writerIndex = tmp0_this_2._writerIndex + 8 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.setDouble(tmp$ret$0, value);
  };
  ByteBufImpl.prototype.writeUTF8 = function (value) {
    var dataLength = this.setUTF8(this._writerIndex, value);
    var tmp0_this = this;
    tmp0_this._writerIndex = tmp0_this._writerIndex + dataLength | 0;
    return dataLength;
  };
  ByteBufImpl.prototype.writeBytes = function (value, startIndex, length) {
    var length_0 = length;
    if (length_0 < 0) {
      length_0 = value.length - startIndex | 0;
    }var tmp$ret$0;
    $l$block: {
      var tmp0_getAndIncWriterIndex_0 = length_0;
      var ri_1 = this._writerIndex;
      var tmp0_this_2 = this;
      tmp0_this_2._writerIndex = tmp0_this_2._writerIndex + tmp0_getAndIncWriterIndex_0 | 0;
      tmp$ret$0 = ri_1;
      break $l$block;
    }
    this.setBytes(tmp$ret$0, value, startIndex, length_0);
    Unit_getInstance();
    return length_0;
  };
  ByteBufImpl.prototype.writeBytes_irqg4d_k$ = function (value, startIndex, length) {
    return this.writeBytes(value, startIndex, length);
  };
  ByteBufImpl.prototype.copyDataTo_s6vhqs_k$ = function (dest, destOffset) {
    var ab = this._view.buffer;
    var index = this._view.byteOffset + this._readerIndex | 0;
    var length = this._get_readableBytes__0_k$();
    var data = new Int8Array(ab, index, length);
    dest.set(data, destOffset);
  };
  ByteBufImpl.$metadata$ = {
    simpleName: 'ByteBufImpl',
    kind: 'class',
    interfaces: []
  };
  function Companion_16() {
    Companion_instance_15 = this;
    this._LEVEL_DEBUG = 1;
    this._LEVEL_INFO = 2;
    this._LEVEL_WARN = 3;
    this._LEVEL_ERROR = 4;
    this._defaultlevel = 1;
    this._TAG_DEBUG = '[DEBUG]';
    this._TAG_INFO = '[INFO]';
    this._TAG_WARN = '[WARN]';
    this._TAG_ERROR = '[ERROR]';
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = LinkedHashMap_init_$Create$();
      break $l$block;
    }
    tmp._loggers = tmp$ret$0;
  }
  Companion_16.prototype._get_LEVEL_DEBUG__0_k$ = function () {
    return this._LEVEL_DEBUG;
  };
  Companion_16.prototype._get_LEVEL_INFO__0_k$ = function () {
    return this._LEVEL_INFO;
  };
  Companion_16.prototype._get_LEVEL_WARN__0_k$ = function () {
    return this._LEVEL_WARN;
  };
  Companion_16.prototype._get_LEVEL_ERROR__0_k$ = function () {
    return this._LEVEL_ERROR;
  };
  Companion_16.prototype._set_defaultlevel__majfzk_k$ = function (_set___) {
    this._defaultlevel = _set___;
  };
  Companion_16.prototype._get_defaultlevel__0_k$ = function () {
    return this._defaultlevel;
  };
  Companion_16.prototype._get_TAG_DEBUG__0_k$ = function () {
    return this._TAG_DEBUG;
  };
  Companion_16.prototype._get_TAG_INFO__0_k$ = function () {
    return this._TAG_INFO;
  };
  Companion_16.prototype._get_TAG_WARN__0_k$ = function () {
    return this._TAG_WARN;
  };
  Companion_16.prototype._get_TAG_ERROR__0_k$ = function () {
    return this._TAG_ERROR;
  };
  Companion_16.prototype.getLogger = function (name) {
    var logger = this._loggers.get_2bw_k$(name);
    if (logger == null) {
      logger = new Logger(name);
      {
        var tmp0_set_0 = this._loggers;
        var tmp1_set_0 = logger;
        tmp0_set_0.put_1q9pf_k$(name, tmp1_set_0);
        Unit_getInstance();
      }
    }return new Logger(name);
  };
  Companion_16.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_16.prototype, 'LEVEL_DEBUG', {
    configurable: true,
    get: Companion_16.prototype._get_LEVEL_DEBUG__0_k$
  });
  Object.defineProperty(Companion_16.prototype, 'LEVEL_INFO', {
    configurable: true,
    get: Companion_16.prototype._get_LEVEL_INFO__0_k$
  });
  Object.defineProperty(Companion_16.prototype, 'LEVEL_WARN', {
    configurable: true,
    get: Companion_16.prototype._get_LEVEL_WARN__0_k$
  });
  Object.defineProperty(Companion_16.prototype, 'LEVEL_ERROR', {
    configurable: true,
    get: Companion_16.prototype._get_LEVEL_ERROR__0_k$
  });
  Object.defineProperty(Companion_16.prototype, 'defaultlevel', {
    configurable: true,
    get: Companion_16.prototype._get_defaultlevel__0_k$,
    set: Companion_16.prototype._set_defaultlevel__majfzk_k$
  });
  Object.defineProperty(Companion_16.prototype, 'TAG_DEBUG', {
    configurable: true,
    get: Companion_16.prototype._get_TAG_DEBUG__0_k$
  });
  Object.defineProperty(Companion_16.prototype, 'TAG_INFO', {
    configurable: true,
    get: Companion_16.prototype._get_TAG_INFO__0_k$
  });
  Object.defineProperty(Companion_16.prototype, 'TAG_WARN', {
    configurable: true,
    get: Companion_16.prototype._get_TAG_WARN__0_k$
  });
  Object.defineProperty(Companion_16.prototype, 'TAG_ERROR', {
    configurable: true,
    get: Companion_16.prototype._get_TAG_ERROR__0_k$
  });
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_16();
    return Companion_instance_15;
  }
  function Logger(name) {
    Companion_getInstance_15();
    this._name_3 = name;
    this._nameTag = '' + '[' + this._name_3 + ']';
    this._level = Companion_getInstance_15()._defaultlevel;
  }
  Logger.prototype._get_name__0_k$ = function () {
    return this._name_3;
  };
  Logger.prototype._get_nameTag__0_k$ = function () {
    return this._nameTag;
  };
  Logger.prototype._get_level__0_k$ = function () {
    return this._level;
  };
  Logger.prototype._get_isDebugEnabled__0_k$ = function () {
    Companion_getInstance_15();
    return this._level <= 1;
  };
  Logger.prototype._get_isInfoEnabled__0_k$ = function () {
    Companion_getInstance_15();
    return this._level <= 2;
  };
  Logger.prototype._get_isWarnEnabled__0_k$ = function () {
    Companion_getInstance_15();
    return this._level <= 3;
  };
  Logger.prototype._get_isErrorEnabled__0_k$ = function () {
    Companion_getInstance_15();
    return this._level <= 4;
  };
  Logger.prototype.debug = function (message, obj) {
    return this.debug_jbb6jz_k$(message, obj === void 1 ? null : obj);
  };
  Logger.prototype.debug_jbb6jz_k$ = function (message, obj) {
    if (!this._get_isDebugEnabled__0_k$()) {
      return Unit_getInstance();
    }var tmp = console;
    var tmp_0 = (new Date(Date.now())).toDateString();
    Companion_getInstance_15();
    tmp.log(tmp_0, this._nameTag, '[DEBUG]', message, obj);
  };
  Logger.prototype.info = function (message, obj) {
    return this.info_jbb6jz_k$(message, obj === void 1 ? null : obj);
  };
  Logger.prototype.info_jbb6jz_k$ = function (message, obj) {
    if (!this._get_isInfoEnabled__0_k$()) {
      return Unit_getInstance();
    }var tmp = console;
    var tmp_0 = (new Date(Date.now())).toDateString();
    Companion_getInstance_15();
    tmp.info(tmp_0, this._nameTag, '[INFO]', message, obj);
  };
  Logger.prototype.warn = function (message, obj) {
    return this.warn_jbb6jz_k$(message, obj === void 1 ? null : obj);
  };
  Logger.prototype.warn_jbb6jz_k$ = function (message, obj) {
    if (!this._get_isWarnEnabled__0_k$()) {
      return Unit_getInstance();
    }var tmp = console;
    var tmp_0 = (new Date(Date.now())).toDateString();
    Companion_getInstance_15();
    tmp.warn(tmp_0, this._nameTag, '[WARN]', message, obj);
  };
  Logger.prototype.error = function (message, obj) {
    return this.error_jbb6jz_k$(message, obj === void 1 ? null : obj);
  };
  Logger.prototype.error_jbb6jz_k$ = function (message, obj) {
    if (!this._get_isErrorEnabled__0_k$()) {
      return Unit_getInstance();
    }var tmp = console;
    var tmp_0 = (new Date(Date.now())).toDateString();
    Companion_getInstance_15();
    tmp.error(tmp_0, this._nameTag, '[ERROR]', message, obj);
  };
  Logger.$metadata$ = {
    simpleName: 'Logger',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Logger.prototype, 'name', {
    configurable: true,
    get: Logger.prototype._get_name__0_k$
  });
  Object.defineProperty(Logger.prototype, 'nameTag', {
    configurable: true,
    get: Logger.prototype._get_nameTag__0_k$
  });
  Object.defineProperty(Logger.prototype, 'level', {
    configurable: true,
    get: Logger.prototype._get_level__0_k$
  });
  Object.defineProperty(Logger.prototype, 'isDebugEnabled', {
    configurable: true,
    get: Logger.prototype._get_isDebugEnabled__0_k$
  });
  Object.defineProperty(Logger.prototype, 'isInfoEnabled', {
    configurable: true,
    get: Logger.prototype._get_isInfoEnabled__0_k$
  });
  Object.defineProperty(Logger.prototype, 'isWarnEnabled', {
    configurable: true,
    get: Logger.prototype._get_isWarnEnabled__0_k$
  });
  Object.defineProperty(Logger.prototype, 'isErrorEnabled', {
    configurable: true,
    get: Logger.prototype._get_isErrorEnabled__0_k$
  });
  function getLogger(_this_, kClass) {
    var tmp0_elvis_lhs = kClass._get_simpleName__0_k$();
    return _this_.getLogger(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
  }
  function Connection(handler) {
    this._handler_2 = handler;
    this._status_0 = Connecting_getInstance();
    this._connectedPromise = asJSPromise((new HPromise())._promise);
    this._closedPromise = asJSPromise((new HPromise())._promise);
  }
  Connection.prototype._get_handler__0_k$ = function () {
    return this._handler_2;
  };
  Connection.prototype._get_closedPromise__0_k$ = function () {
    return this._closedPromise;
  };
  Connection.prototype._get_connectedPromise__0_k$ = function () {
    return this._connectedPromise;
  };
  Connection.prototype._set_type__a4enbm_k$ = function (_set___) {
    this._type_2 = _set___;
  };
  Connection.prototype._get_type__0_k$ = function () {
    var tmp = this._type_2;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('type');
    }
  };
  Connection.prototype._set_status__ba22ma_k$ = function (_set___) {
    this._status_0 = _set___;
  };
  Connection.prototype._get_status__0_k$ = function () {
    return this._status_0;
  };
  Connection.prototype._get_isClosed__0_k$ = function () {
    return equals_0(this._status_0, Closed_getInstance());
  };
  Connection.prototype._get_isConnecting__0_k$ = function () {
    return equals_0(this._status_0, Connecting_getInstance());
  };
  Connection.prototype._get_isConnected__0_k$ = function () {
    return equals_0(this._status_0, Connected_getInstance_0());
  };
  Connection.prototype.close = function (error) {
    return this.close_houul8_k$(error === void 1 ? null : error);
  };
  Connection.prototype.close_houul8_k$ = function (error) {
    if (this._get_isClosed__0_k$()) {
      return Unit_getInstance();
    }this._status_0 = Closed_getInstance();
    this.close0(error);
    this._handler_2.onConnectionClosed(this, error);
  };
  Connection.prototype.close$default_vfm6ec_k$ = function (error, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      error = null;
    return this.close_houul8_k$(error);
  };
  Connection.prototype.send = function (message) {
    return this.send0_4f0jt0_k$(message);
  };
  Connection.prototype.write = function (type, id, action) {
    var message = createWritableMessage(type, id);
    action(message);
    this.send(message);
    Unit_getInstance();
  };
  Connection.$metadata$ = {
    simpleName: 'Connection',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Connection.prototype, 'closedPromise', {
    configurable: true,
    get: Connection.prototype._get_closedPromise__0_k$
  });
  Object.defineProperty(Connection.prototype, 'connectedPromise', {
    configurable: true,
    get: Connection.prototype._get_connectedPromise__0_k$
  });
  Object.defineProperty(Connection.prototype, 'type', {
    configurable: true,
    get: Connection.prototype._get_type__0_k$,
    set: Connection.prototype._set_type__a4enbm_k$
  });
  Object.defineProperty(Connection.prototype, 'status', {
    configurable: true,
    get: Connection.prototype._get_status__0_k$,
    set: Connection.prototype._set_status__ba22ma_k$
  });
  Object.defineProperty(Connection.prototype, 'isClosed', {
    configurable: true,
    get: Connection.prototype._get_isClosed__0_k$
  });
  Object.defineProperty(Connection.prototype, 'isConnecting', {
    configurable: true,
    get: Connection.prototype._get_isConnecting__0_k$
  });
  Object.defineProperty(Connection.prototype, 'isConnected', {
    configurable: true,
    get: Connection.prototype._get_isConnected__0_k$
  });
  function createConnection(inetEndpoint, handler, options) {
    return createConnection_0(inetEndpoint, handler, options === void 1 ? {} : options);
  }
  function createConnection_0(inetEndpoint, handler, options) {
    var type = inetEndpoint._type_3;
    var tmp$ret$0;
    $l$block: {
      var tmp0_isEmpty_0 = type;
      tmp$ret$0 = charSequenceLength(tmp0_isEmpty_0) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      Companion_getInstance_20();
      type = 'Http';
    } else {
    }
    var tmp0_subject = type;
    var tmp;
    Companion_getInstance_20();
    if (tmp0_subject === 'Http') {
      tmp = new HttpConnectionImpl(inetEndpoint, handler, options);
    } else {
      {
        throw Exception_init_$Create$_0('' + 'unknown connection type: ' + type);
      }
    }
    return tmp;
  }
  function ConnectionHandler() {
  }
  ConnectionHandler.$metadata$ = {
    simpleName: 'ConnectionHandler',
    kind: 'class',
    interfaces: []
  };
  function Connecting() {
    Connecting_instance = this;
    ConnectionStatus.call(this);
  }
  Connecting.$metadata$ = {
    simpleName: 'Connecting',
    kind: 'object',
    interfaces: []
  };
  var Connecting_instance;
  function Connecting_getInstance() {
    if (Connecting_instance == null)
      new Connecting();
    return Connecting_instance;
  }
  function Connected_0() {
    Connected_instance_0 = this;
    ConnectionStatus.call(this);
  }
  Connected_0.$metadata$ = {
    simpleName: 'Connected',
    kind: 'object',
    interfaces: []
  };
  var Connected_instance_0;
  function Connected_getInstance_0() {
    if (Connected_instance_0 == null)
      new Connected_0();
    return Connected_instance_0;
  }
  function Closed() {
    Closed_instance = this;
    ConnectionStatus.call(this);
  }
  Closed.$metadata$ = {
    simpleName: 'Closed',
    kind: 'object',
    interfaces: []
  };
  var Closed_instance;
  function Closed_getInstance() {
    if (Closed_instance == null)
      new Closed();
    return Closed_instance;
  }
  function ConnectionStatus() {
  }
  ConnectionStatus.$metadata$ = {
    simpleName: 'ConnectionStatus',
    kind: 'class',
    interfaces: []
  };
  var DataType_None_instance;
  var DataType_Byte_instance;
  var DataType_Boolean_instance;
  var DataType_Short_instance;
  var DataType_Int_instance;
  var DataType_Long_instance;
  var DataType_Float_instance;
  var DataType_Double_instance;
  var DataType_UTF8_instance;
  var DataType_ByteArray_instance;
  function values() {
    return [DataType_None_getInstance(), DataType_Byte_getInstance(), DataType_Boolean_getInstance(), DataType_Short_getInstance(), DataType_Int_getInstance(), DataType_Long_getInstance(), DataType_Float_getInstance(), DataType_Double_getInstance(), DataType_UTF8_getInstance(), DataType_ByteArray_getInstance()];
  }
  var DataType_entriesInitialized;
  function DataType_initEntries() {
    if (DataType_entriesInitialized)
      return Unit_getInstance();
    DataType_entriesInitialized = true;
    DataType_None_instance = new DataType('None', 0);
    DataType_Byte_instance = new DataType('Byte', 1);
    DataType_Boolean_instance = new DataType('Boolean', 2);
    DataType_Short_instance = new DataType('Short', 3);
    DataType_Int_instance = new DataType('Int', 4);
    DataType_Long_instance = new DataType('Long', 5);
    DataType_Float_instance = new DataType('Float', 6);
    DataType_Double_instance = new DataType('Double', 7);
    DataType_UTF8_instance = new DataType('UTF8', 8);
    DataType_ByteArray_instance = new DataType('ByteArray', 9);
  }
  function DataType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  DataType.$metadata$ = {
    simpleName: 'DataType',
    kind: 'class',
    interfaces: []
  };
  function DataType_None_getInstance() {
    DataType_initEntries();
    return DataType_None_instance;
  }
  function DataType_Byte_getInstance() {
    DataType_initEntries();
    return DataType_Byte_instance;
  }
  function DataType_Boolean_getInstance() {
    DataType_initEntries();
    return DataType_Boolean_instance;
  }
  function DataType_Short_getInstance() {
    DataType_initEntries();
    return DataType_Short_instance;
  }
  function DataType_Int_getInstance() {
    DataType_initEntries();
    return DataType_Int_instance;
  }
  function DataType_Long_getInstance() {
    DataType_initEntries();
    return DataType_Long_instance;
  }
  function DataType_Float_getInstance() {
    DataType_initEntries();
    return DataType_Float_instance;
  }
  function DataType_Double_getInstance() {
    DataType_initEntries();
    return DataType_Double_instance;
  }
  function DataType_UTF8_getInstance() {
    DataType_initEntries();
    return DataType_UTF8_instance;
  }
  function DataType_ByteArray_getInstance() {
    DataType_initEntries();
    return DataType_ByteArray_instance;
  }
  function HttpConnection(handler) {
    Connection.call(this, handler);
    this._connectionId = '';
  }
  HttpConnection.prototype._set_connectionId__a4enbm_k$ = function (_set___) {
    this._connectionId = _set___;
  };
  HttpConnection.prototype._get_connectionId__0_k$ = function () {
    return this._connectionId;
  };
  HttpConnection.$metadata$ = {
    simpleName: 'HttpConnection',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(HttpConnection.prototype, 'connectionId', {
    configurable: true,
    get: HttpConnection.prototype._get_connectionId__0_k$,
    set: HttpConnection.prototype._set_connectionId__a4enbm_k$
  });
  function Companion_17() {
    Companion_instance_16 = this;
  }
  Companion_17.prototype.from = function (json) {
    var json_0 = (!(json == null) ? isObject(json) : false) ? json : THROW_CCE();
    var tmp0_safe_receiver = json_0['type'];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    var type = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_safe_receiver = json_0['hostname'];
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toString_1(tmp2_safe_receiver);
    var hostname = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp = json_0['port'];
    var port = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp4_elvis_lhs = json_0['data'];
    var data = tmp4_elvis_lhs == null ? {} : tmp4_elvis_lhs;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_let_0 = json_0['adviseLocales'];
      {
      }
      var tmp$ret$5;
      $l$block_4: {
        var tmp_0;
        if (tmp0_let_0 == null) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = [];
            break $l$block;
          }
          tmp_0 = tmp$ret$0;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            var tmp$ret$3;
            $l$block_2: {
              var tmp0_map_0_3 = (!(tmp0_let_0 == null) ? isArray(tmp0_let_0) : false) ? tmp0_let_0 : THROW_CCE();
              var tmp$ret$2;
              $l$block_1: {
                var tmp0_mapTo_0_1_4 = ArrayList_init_$Create$_0(tmp0_map_0_3.length);
                var indexedObject = tmp0_map_0_3;
                var inductionVariable = 0;
                var last = indexedObject.length;
                while (inductionVariable < last) {
                  var item_2_3_6 = indexedObject[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = toString_1(item_2_3_6);
                    break $l$block_0;
                  }
                  tmp0_mapTo_0_1_4.add_2bq_k$(tmp$ret$1);
                  Unit_getInstance();
                }
                tmp$ret$2 = tmp0_mapTo_0_1_4;
                break $l$block_1;
              }
              tmp$ret$3 = tmp$ret$2;
              break $l$block_2;
            }
            var tmp1_toTypedArray_0_2 = tmp$ret$3;
            tmp$ret$4 = copyToArray_0(tmp1_toTypedArray_0_2);
            break $l$block_3;
          }
          tmp_0 = tmp$ret$4;
        }
        tmp$ret$5 = tmp_0;
        break $l$block_4;
      }
      tmp$ret$6 = tmp$ret$5;
      break $l$block_5;
    }
    var adviseLocales = tmp$ret$6;
    var tmp$ret$13;
    $l$block_12: {
      var tmp1_let_0 = json_0['candidates'];
      {
      }
      var tmp$ret$12;
      $l$block_11: {
        var tmp_1;
        if (tmp1_let_0 == null) {
          var tmp$ret$7;
          $l$block_6: {
            tmp$ret$7 = [];
            break $l$block_6;
          }
          tmp_1 = tmp$ret$7;
        } else {
          var tmp$ret$11;
          $l$block_10: {
            var tmp$ret$10;
            $l$block_9: {
              var tmp0_map_0_3_0 = (!(tmp1_let_0 == null) ? isArray(tmp1_let_0) : false) ? tmp1_let_0 : THROW_CCE();
              var tmp$ret$9;
              $l$block_8: {
                var tmp0_mapTo_0_1_4_0 = ArrayList_init_$Create$_0(tmp0_map_0_3_0.length);
                var indexedObject_0 = tmp0_map_0_3_0;
                var inductionVariable_0 = 0;
                var last_0 = indexedObject_0.length;
                while (inductionVariable_0 < last_0) {
                  var item_2_3_6_0 = indexedObject_0[inductionVariable_0];
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var tmp$ret$8;
                  $l$block_7: {
                    tmp$ret$8 = Companion_getInstance_17().from(item_2_3_6_0);
                    break $l$block_7;
                  }
                  tmp0_mapTo_0_1_4_0.add_2bq_k$(tmp$ret$8);
                  Unit_getInstance();
                }
                tmp$ret$9 = tmp0_mapTo_0_1_4_0;
                break $l$block_8;
              }
              tmp$ret$10 = tmp$ret$9;
              break $l$block_9;
            }
            var tmp1_toTypedArray_0_2_0 = tmp$ret$10;
            tmp$ret$11 = copyToArray_0(tmp1_toTypedArray_0_2_0);
            break $l$block_10;
          }
          tmp_1 = tmp$ret$11;
        }
        tmp$ret$12 = tmp_1;
        break $l$block_11;
      }
      tmp$ret$13 = tmp$ret$12;
      break $l$block_12;
    }
    var candidates = tmp$ret$13;
    return new InetEndpoint(type, hostname, port, data, adviseLocales, candidates);
  };
  Companion_17.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    if (Companion_instance_16 == null)
      new Companion_17();
    return Companion_instance_16;
  }
  function InetEndpoint(type, hostname, port, data, adviseLocales, candidates) {
    Companion_getInstance_16();
    this._type_3 = type;
    this._hostname = hostname;
    this._port = port;
    this._data_0 = data;
    this._adviseLocales = adviseLocales;
    this._candidates = candidates;
  }
  InetEndpoint.prototype._get_type__0_k$ = function () {
    return this._type_3;
  };
  InetEndpoint.prototype._get_hostname__0_k$ = function () {
    return this._hostname;
  };
  InetEndpoint.prototype._get_port__0_k$ = function () {
    return this._port;
  };
  InetEndpoint.prototype._get_data__0_k$ = function () {
    return this._data_0;
  };
  InetEndpoint.prototype._get_adviseLocales__0_k$ = function () {
    return this._adviseLocales;
  };
  InetEndpoint.prototype._get_candidates__0_k$ = function () {
    return this._candidates;
  };
  InetEndpoint.$metadata$ = {
    simpleName: 'InetEndpoint',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(InetEndpoint.prototype, 'type', {
    configurable: true,
    get: InetEndpoint.prototype._get_type__0_k$
  });
  Object.defineProperty(InetEndpoint.prototype, 'hostname', {
    configurable: true,
    get: InetEndpoint.prototype._get_hostname__0_k$
  });
  Object.defineProperty(InetEndpoint.prototype, 'port', {
    configurable: true,
    get: InetEndpoint.prototype._get_port__0_k$
  });
  Object.defineProperty(InetEndpoint.prototype, 'data', {
    configurable: true,
    get: InetEndpoint.prototype._get_data__0_k$
  });
  Object.defineProperty(InetEndpoint.prototype, 'adviseLocales', {
    configurable: true,
    get: InetEndpoint.prototype._get_adviseLocales__0_k$
  });
  Object.defineProperty(InetEndpoint.prototype, 'candidates', {
    configurable: true,
    get: InetEndpoint.prototype._get_candidates__0_k$
  });
  function Companion_18() {
    Companion_instance_17 = this;
  }
  Companion_18.prototype.from = function (json) {
    var json_0 = (!(json == null) ? isObject(json) : false) ? json : THROW_CCE();
    var tmp0_safe_receiver = json_0['type'];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    var type = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp2_safe_receiver = json_0['hostname'];
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : toString_1(tmp2_safe_receiver);
    var hostname = tmp3_elvis_lhs == null ? '' : tmp3_elvis_lhs;
    var tmp = json_0['port'];
    var port = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var tmp4_elvis_lhs = json_0['data'];
    var data = tmp4_elvis_lhs == null ? {} : tmp4_elvis_lhs;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_let_0 = json_0['adviseLocales'];
      {
      }
      var tmp$ret$5;
      $l$block_4: {
        var tmp_0;
        if (tmp0_let_0 == null) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = [];
            break $l$block;
          }
          tmp_0 = tmp$ret$0;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            var tmp$ret$3;
            $l$block_2: {
              var tmp0_map_0_3 = (!(tmp0_let_0 == null) ? isArray(tmp0_let_0) : false) ? tmp0_let_0 : THROW_CCE();
              var tmp$ret$2;
              $l$block_1: {
                var tmp0_mapTo_0_1_4 = ArrayList_init_$Create$_0(tmp0_map_0_3.length);
                var indexedObject = tmp0_map_0_3;
                var inductionVariable = 0;
                var last = indexedObject.length;
                while (inductionVariable < last) {
                  var item_2_3_6 = indexedObject[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = toString_1(item_2_3_6);
                    break $l$block_0;
                  }
                  tmp0_mapTo_0_1_4.add_2bq_k$(tmp$ret$1);
                  Unit_getInstance();
                }
                tmp$ret$2 = tmp0_mapTo_0_1_4;
                break $l$block_1;
              }
              tmp$ret$3 = tmp$ret$2;
              break $l$block_2;
            }
            var tmp1_toTypedArray_0_2 = tmp$ret$3;
            tmp$ret$4 = copyToArray_0(tmp1_toTypedArray_0_2);
            break $l$block_3;
          }
          tmp_0 = tmp$ret$4;
        }
        tmp$ret$5 = tmp_0;
        break $l$block_4;
      }
      tmp$ret$6 = tmp$ret$5;
      break $l$block_5;
    }
    var adviseLocales = tmp$ret$6;
    return new InetEndpointCandidate(type, hostname, port, data, adviseLocales);
  };
  Companion_18.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_18();
    return Companion_instance_17;
  }
  function InetEndpointCandidate(type, hostname, port, data, adviseLocales) {
    Companion_getInstance_17();
    this._type_4 = type;
    this._hostname_0 = hostname;
    this._port_0 = port;
    this._data_1 = data;
    this._adviseLocales_0 = adviseLocales;
  }
  InetEndpointCandidate.prototype._get_type__0_k$ = function () {
    return this._type_4;
  };
  InetEndpointCandidate.prototype._get_hostname__0_k$ = function () {
    return this._hostname_0;
  };
  InetEndpointCandidate.prototype._get_port__0_k$ = function () {
    return this._port_0;
  };
  InetEndpointCandidate.prototype._get_data__0_k$ = function () {
    return this._data_1;
  };
  InetEndpointCandidate.prototype._get_adviseLocales__0_k$ = function () {
    return this._adviseLocales_0;
  };
  InetEndpointCandidate.$metadata$ = {
    simpleName: 'InetEndpointCandidate',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(InetEndpointCandidate.prototype, 'type', {
    configurable: true,
    get: InetEndpointCandidate.prototype._get_type__0_k$
  });
  Object.defineProperty(InetEndpointCandidate.prototype, 'hostname', {
    configurable: true,
    get: InetEndpointCandidate.prototype._get_hostname__0_k$
  });
  Object.defineProperty(InetEndpointCandidate.prototype, 'port', {
    configurable: true,
    get: InetEndpointCandidate.prototype._get_port__0_k$
  });
  Object.defineProperty(InetEndpointCandidate.prototype, 'data', {
    configurable: true,
    get: InetEndpointCandidate.prototype._get_data__0_k$
  });
  Object.defineProperty(InetEndpointCandidate.prototype, 'adviseLocales', {
    configurable: true,
    get: InetEndpointCandidate.prototype._get_adviseLocales__0_k$
  });
  function Companion_19() {
    Companion_instance_18 = this;
    var tmp = this;
    var tmp$ret$2;
    $l$block_1: {
      var tmp$ret$0;
      $l$block: {
        tmp$ret$0 = 104;
        break $l$block;
      }
      var tmp_0 = toByte(tmp$ret$0);
      var tmp$ret$1;
      $l$block_0: {
        tmp$ret$1 = 97;
        break $l$block_0;
      }
      var tmp0_byteArrayOf_0 = new Int8Array([tmp_0, toByte(tmp$ret$1)]);
      tmp$ret$2 = tmp0_byteArrayOf_0;
      break $l$block_1;
    }
    tmp._Tags = tmp$ret$2;
    this._HeaderSize = 64;
    this._HeaderIndex_SerialNo = 2;
    this._HeaderIndex_Type = 18;
    this._HeaderIndex_Id = 20;
    this._HeaderIndex_RecordLength = 10;
    this._HeaderIndex_BodyLength = 14;
    this._HeaderIndex_EncryptType = 32;
    this._HeaderIndex_EncryptAttachment = 33;
    this._HeaderIndex_ExtraFirst = 41;
    this._HeaderIndex_ExtraLast = this._HeaderSize - 1 | 0;
    this._Type_Internal = 30000;
    this._InternalMessageId_DateTest = 1;
    this._InternalMessageId_Ping = 2;
  }
  Companion_19.prototype._get_Tags__0_k$ = function () {
    return this._Tags;
  };
  Companion_19.prototype._get_HeaderSize__0_k$ = function () {
    return this._HeaderSize;
  };
  Companion_19.prototype._get_HeaderIndex_SerialNo__0_k$ = function () {
    return this._HeaderIndex_SerialNo;
  };
  Companion_19.prototype._get_HeaderIndex_Type__0_k$ = function () {
    return this._HeaderIndex_Type;
  };
  Companion_19.prototype._get_HeaderIndex_Id__0_k$ = function () {
    return this._HeaderIndex_Id;
  };
  Companion_19.prototype._get_HeaderIndex_RecordLength__0_k$ = function () {
    return this._HeaderIndex_RecordLength;
  };
  Companion_19.prototype._get_HeaderIndex_BodyLength__0_k$ = function () {
    return this._HeaderIndex_BodyLength;
  };
  Companion_19.prototype._get_HeaderIndex_EncryptType__0_k$ = function () {
    return this._HeaderIndex_EncryptType;
  };
  Companion_19.prototype._get_HeaderIndex_EncryptAttachment__0_k$ = function () {
    return this._HeaderIndex_EncryptAttachment;
  };
  Companion_19.prototype._get_HeaderIndex_ExtraFirst__0_k$ = function () {
    return this._HeaderIndex_ExtraFirst;
  };
  Companion_19.prototype._get_HeaderIndex_ExtraLast__0_k$ = function () {
    return this._HeaderIndex_ExtraLast;
  };
  Companion_19.prototype._get_Type_Internal__0_k$ = function () {
    return this._Type_Internal;
  };
  Companion_19.prototype._get_InternalMessageId_DateTest__0_k$ = function () {
    return this._InternalMessageId_DateTest;
  };
  Companion_19.prototype._get_InternalMessageId_Ping__0_k$ = function () {
    return this._InternalMessageId_Ping;
  };
  Companion_19.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  Object.defineProperty(Companion_19.prototype, 'Tags', {
    configurable: true,
    get: Companion_19.prototype._get_Tags__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderSize', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderSize__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_SerialNo', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_SerialNo__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_Type', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_Type__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_Id', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_Id__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_RecordLength', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_RecordLength__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_BodyLength', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_BodyLength__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_EncryptType', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_EncryptType__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_EncryptAttachment', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_EncryptAttachment__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_ExtraFirst', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_ExtraFirst__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'HeaderIndex_ExtraLast', {
    configurable: true,
    get: Companion_19.prototype._get_HeaderIndex_ExtraLast__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'Type_Internal', {
    configurable: true,
    get: Companion_19.prototype._get_Type_Internal__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'InternalMessageId_DateTest', {
    configurable: true,
    get: Companion_19.prototype._get_InternalMessageId_DateTest__0_k$
  });
  Object.defineProperty(Companion_19.prototype, 'InternalMessageId_Ping', {
    configurable: true,
    get: Companion_19.prototype._get_InternalMessageId_Ping__0_k$
  });
  var Companion_instance_18;
  function Companion_getInstance_18() {
    if (Companion_instance_18 == null)
      new Companion_19();
    return Companion_instance_18;
  }
  function MessageConsts() {
    Companion_getInstance_18();
  }
  MessageConsts.$metadata$ = {
    simpleName: 'MessageConsts',
    kind: 'class',
    interfaces: []
  };
  function Companion_20() {
    Companion_instance_19 = this;
  }
  Companion_20.prototype.tryParse = function (byteBuf) {
    var tmp = Companion_getInstance_21();
    return tmp.tryParse$default_c4rzib_k$(byteBuf, false, 2, null);
  };
  Companion_20.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_20();
    return Companion_instance_19;
  }
  function ReadableMessage() {
    Companion_getInstance_19();
    DataReader.call(this);
  }
  ReadableMessage.prototype._get_type__0_k$ = function () {
    return this._getType_0_k$();
  };
  ReadableMessage.prototype._get_id__0_k$ = function () {
    return this._getId_0_k$();
  };
  ReadableMessage.prototype._get_byteCount__0_k$ = function () {
    return this._getByteCount_0_k$();
  };
  ReadableMessage.$metadata$ = {
    simpleName: 'ReadableMessage',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(ReadableMessage.prototype, 'type', {
    configurable: true,
    get: ReadableMessage.prototype._get_type__0_k$
  });
  Object.defineProperty(ReadableMessage.prototype, 'id', {
    configurable: true,
    get: ReadableMessage.prototype._get_id__0_k$
  });
  Object.defineProperty(ReadableMessage.prototype, 'byteCount', {
    configurable: true,
    get: ReadableMessage.prototype._get_byteCount__0_k$
  });
  function WritableMessage() {
    DataWriter.call(this);
    this._type_5 = 0;
    this._id_0 = 0;
    this._byteCount = 0;
    this._sealed = false;
  }
  WritableMessage.prototype._get_type__0_k$ = function () {
    return this._type_5;
  };
  WritableMessage.prototype._get_id__0_k$ = function () {
    return this._id_0;
  };
  WritableMessage.prototype._get_byteCount__0_k$ = function () {
    return this._byteCount;
  };
  WritableMessage.prototype._get_sealed__0_k$ = function () {
    return this._sealed;
  };
  WritableMessage.$metadata$ = {
    simpleName: 'WritableMessage',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(WritableMessage.prototype, 'type', {
    configurable: true,
    get: WritableMessage.prototype._get_type__0_k$
  });
  Object.defineProperty(WritableMessage.prototype, 'id', {
    configurable: true,
    get: WritableMessage.prototype._get_id__0_k$
  });
  Object.defineProperty(WritableMessage.prototype, 'byteCount', {
    configurable: true,
    get: WritableMessage.prototype._get_byteCount__0_k$
  });
  Object.defineProperty(WritableMessage.prototype, 'sealed', {
    configurable: true,
    get: WritableMessage.prototype._get_sealed__0_k$
  });
  function createWritableMessage(type, id) {
    return Companion_getInstance_22().create_qlp5fx_k$(type, id);
  }
  function _get_urlForClose_($this) {
    var tmp = $this._urlForClose;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('urlForClose');
    }
  }
  function _get_urlForTouch_($this) {
    var tmp = $this._urlForTouch;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('urlForTouch');
    }
  }
  function open($this) {
    var tmp = promise(_no_name_provided_$factory_40($this, null));
    tmp.catch(_no_name_provided_$factory_41($this));
    Unit_getInstance();
  }
  function handleConnectSuccess($this) {
    $this._set_status__ba22ma_k$(Connected_getInstance_0());
    ensureNotNull(Companion_getInstance_10().from_q2jafu_k$($this._get_connectedPromise__0_k$()))._get_resolve__0_k$()(Unit_getInstance());
    $this._urlForTouch = '' + $this._url + '/touch?id=' + $this._get_connectionId__0_k$();
    $this._urlForClose = '' + $this._url + '/close?id=' + $this._get_connectionId__0_k$();
  }
  function handleConnectFail($this, status, statusText) {
    $this._set_status__ba22ma_k$(Closed_getInstance());
    var error = Exception_init_$Create$_0('' + 'status=' + status + ',statusText=' + statusText + ',url=' + $this._url);
    ensureNotNull(Companion_getInstance_10().from_q2jafu_k$($this._get_connectedPromise__0_k$()))._get_reject__0_k$()(error);
    $this._get_handler__0_k$().onConnectionOpenFail($this, error);
  }
  function checkStartSendTask($this) {
    if ($this._sendTaskId == null) {
      var tmp = $this;
      tmp._sendTaskId = setTimeout(_no_name_provided_$factory_42($this), $this._sendDelay);
    }}
  function sendPendingMessagesNow($this) {
    if ($this._pendingMessages.isEmpty_0_k$()) {
      sendNow($this, emptyList());
    } else {
      $l$break: while (true) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_isNotEmpty_0 = $this._pendingMessages;
          tmp$ret$0 = !tmp0_isNotEmpty_0.isEmpty_0_k$();
          break $l$block;
        }
        if (!tmp$ret$0) {
          break $l$break;
        }sendPendingMessagesNow0($this);
      }
    }
  }
  function sendPendingMessagesNow0($this) {
    var thisTimeByteCount = 0;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var sendList = tmp$ret$0;
    var tmp$ret$1;
    $l$block_0: {
      var tmp0_toTypedArray_0 = $this._pendingMessages;
      tmp$ret$1 = copyToArray_0(tmp0_toTypedArray_0);
      break $l$block_0;
    }
    var typedArray = tmp$ret$1;
    var indexedObject = typedArray;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$break: while (inductionVariable < last) {
      var pendingMessage = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var msgByteCount = pendingMessage._message_0._get_byteCount__0_k$();
      if (msgByteCount > $this._maxByteCountPerTouch) {
        closeByError($this, Exception_init_$Create$_0('' + 'message too large(size is ' + msgByteCount + ') to send,please change maxByteCountPerTouch(' + $this._maxByteCountPerTouch + ') config'));
      }if ((thisTimeByteCount + msgByteCount | 0) > $this._maxByteCountPerTouch) {
        break $l$break;
      }thisTimeByteCount = thisTimeByteCount + msgByteCount | 0;
      sendList.add_2bq_k$(pendingMessage);
      Unit_getInstance();
      $this._pendingMessages.remove_2bq_k$(pendingMessage);
      Unit_getInstance();
    }
    sendNow($this, sendList);
  }
  function sendNow($this, sendList) {
    var xhr = new XMLHttpRequest();
    var tmp$ret$2;
    $l$block_1: {
      var tmp0__get_ARRAYBUFFER__0 = null;
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = 'arraybuffer';
          break $l$block;
        }
        var tmp0_unsafeCast_0_1 = tmp$ret$0;
        tmp$ret$1 = tmp0_unsafeCast_0_1;
        break $l$block_0;
      }
      tmp$ret$2 = tmp$ret$1;
      break $l$block_1;
    }
    xhr.responseType = tmp$ret$2;
    xhr.open('POST', _get_urlForTouch_($this));
    var totalByteCount = 0;
    var tmp0_iterator = sendList.iterator_0_k$();
    while (tmp0_iterator.hasNext_0_k$()) {
      var sendRequest = tmp0_iterator.next_0_k$();
      totalByteCount = totalByteCount + sendRequest._message_0._get_byteCount__0_k$() | 0;
    }
    var body = new Int8Array(totalByteCount);
    var offset = 0;
    var tmp1_iterator = sendList.iterator_0_k$();
    while (tmp1_iterator.hasNext_0_k$()) {
      var sendRequest_0 = tmp1_iterator.next_0_k$();
      var tmp = sendRequest_0._message_0;
      var messageImpl = tmp instanceof WritableMessageImpl ? tmp : THROW_CCE();
      messageImpl.copyTo_s6vhqs_k$(body, offset);
      offset = offset + messageImpl._get_byteCount__0_k$() | 0;
    }
    xhr.send(body);
    xhr.onloadend = _no_name_provided_$factory_43($this, xhr);
  }
  function parseTouchResponse($this, xhr) {
    var statusCode = xhr.status;
    if (statusCode === 500) {
      console.error('server error:', xhr.statusText);
    } else if (!(statusCode === 200)) {
      closeByError($this, Exception_init_$Create$_0('' + 'touch response error,xhr.status=' + xhr.status + ',statusText=' + xhr.statusText));
    } else {
      try {
        var tmp = xhr.response;
        var data = new Int8Array(tmp instanceof ArrayBuffer ? tmp : THROW_CCE());
        var byteBuf = Companion_getInstance_12()._get_Default__0_k$().wrap(asByteArray(data));
        var remainMessageCount = byteBuf.readInt();
        $l$break: while (true) {
          var tmp_0 = Companion_getInstance_21();
          var rMessage = tmp_0.tryParse$default_c4rzib_k$(byteBuf, false, 2, null);
          if (!(rMessage == null)) {
            postMessage($this, rMessage);
          } else {
            break $l$break;
          }
        }
        if (!(remainMessageCount === 0)) {
          checkStartSendTask($this);
        }} catch ($p) {
        if ($p instanceof Error) {
          closeByError($this, $p);
        } else {
          {
            throw $p;
          }
        }
      }
    }
  }
  function postMessage($this, message) {
    try {
      $this._get_handler__0_k$().onMessageReceived($this, message);
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_error_0 = Companion_getInstance_20()._logger_0;
          if (!tmp0_error_0._get_isErrorEnabled__0_k$()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }var tmp = console;
          var tmp_0 = (new Date(Date.now())).toDateString();
          Companion_getInstance_15();
          tmp.error(tmp_0, tmp0_error_0._nameTag, '[ERROR]', 'postMessage error', $p);
        }
      } else {
        {
          throw $p;
        }
      }
    }
  }
  function closeByError($this, error) {
    $this.close_houul8_k$(error);
  }
  function Companion_21() {
    Companion_instance_20 = this;
    this._Type = 'Http';
    this._logger_0 = getLogger(Companion_getInstance_15(), getKClass_0(HttpConnectionImpl));
  }
  Companion_21.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_21();
    return Companion_instance_20;
  }
  function _no_name_provided__44(this$0, resultContinuation) {
    this._this$0_7 = this$0;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__44.prototype.invoke_sv8swh_k$ = function ($cont) {
    var tmp = this.create_s8oglw_k$($cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__44.prototype.invoke_0_k$ = function ($cont) {
    this.invoke_sv8swh_k$($cont);
    return Unit_getInstance();
  };
  _no_name_provided__44.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 2;
            this._xhr0 = new XMLHttpRequest();
            this._xhr0.open('POST', this._this$0_7._urlForOpen);
            var tmp_0 = this;
            tmp_0._tmp0__get_JSON__01 = null;
            var tmp_1 = this;
            tmp_1._tmp0_unsafeCast_0_12 = 'json';
            this._xhr0.responseType = this._tmp0_unsafeCast_0_12;
            this._xhr0.send();
            this._state_0 = 1;
            suspendResult = await_2(this._xhr0, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            if (!(this._xhr0.status === 200)) {
              println('xhr.response is ' + JSON.stringify(this._xhr0.response) + '\n');
              handleConnectFail(this._this$0_7, this._xhr0.status, this._xhr0.statusText);
            } else {
              var tmp_2 = this._xhr0.response;
              var respJson = (!(tmp_2 == null) ? isObject(tmp_2) : false) ? tmp_2 : THROW_CCE();
              var tmp_3 = respJson['id'];
              this._this$0_7._set_connectionId__a4enbm_k$((!(tmp_3 == null) ? typeof tmp_3 === 'string' : false) ? tmp_3 : THROW_CCE());
              handleConnectSuccess(this._this$0_7);
            }

            return Unit_getInstance();
          case 2:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 2) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__44.prototype.create_s8oglw_k$ = function (completion) {
    var i = new _no_name_provided__44(this._this$0_7, completion);
    return i;
  };
  _no_name_provided__44.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function _no_name_provided__45(this$0) {
    this._this$0_8 = this$0;
  }
  _no_name_provided__45.prototype.invoke_1ti8hr_k$ = function (it) {
    var tmp$ret$0;
    $l$block: {
      var tmp0_error_0 = Companion_getInstance_20()._logger_0;
      if (!tmp0_error_0._get_isErrorEnabled__0_k$()) {
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }var tmp = console;
      var tmp_0 = (new Date(Date.now())).toDateString();
      Companion_getInstance_15();
      tmp.error(tmp_0, tmp0_error_0._nameTag, '[ERROR]', 'error catched', it);
    }
    handleConnectFail(this._this$0_8, 0, it.toString());
  };
  _no_name_provided__45.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_1ti8hr_k$(p1 instanceof Error ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__45.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__46(this$0) {
    this._this$0_9 = this$0;
  }
  _no_name_provided__46.prototype.invoke_sv8swh_k$ = function () {
    sendPendingMessagesNow(this._this$0_9);
    this._this$0_9._sendTaskId = null;
  };
  _no_name_provided__46.prototype.invoke_0_k$ = function () {
    this.invoke_sv8swh_k$();
    return Unit_getInstance();
  };
  _no_name_provided__46.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__47(this$0, $xhr) {
    this._this$0_10 = this$0;
    this._$xhr = $xhr;
  }
  _no_name_provided__47.prototype.invoke_xfv2uo_k$ = function (it) {
    parseTouchResponse(this._this$0_10, this._$xhr);
  };
  _no_name_provided__47.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_xfv2uo_k$(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__47.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function HttpConnectionImpl(inetEndpoint, handler, options) {
    Companion_getInstance_20();
    HttpConnection.call(this, handler);
    this._sendDelay = 1000;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    tmp._pendingMessages = tmp$ret$0;
    this._sendTaskId = null;
    this._maxByteCountPerTouch = 131072;
    var tmp0_safe_receiver = options['sendDelay'];
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        var tmp_0 = this;
        tmp_0._sendDelay = numberToInt(isNumber(tmp0_safe_receiver) ? tmp0_safe_receiver : THROW_CCE());
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_elvis_lhs = inetEndpoint._data_0;
    var data = tmp1_elvis_lhs == null ? {} : tmp1_elvis_lhs;
    var tmp_1 = this;
    var tmp_2 = data['https'];
    var tmp2_elvis_lhs = (!(tmp_2 == null) ? typeof tmp_2 === 'boolean' : false) ? tmp_2 : null;
    tmp_1._https = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
    var tmp_3;
    if (this._https) {
      tmp_3 = 'https';
    } else {
      tmp_3 = 'http';
    }
    var protocol = tmp_3;
    this._url = protocol + '://' + inetEndpoint._hostname + ':' + inetEndpoint._port;
    this._urlForOpen = '' + this._url + '/open';
    open(this);
  }
  HttpConnectionImpl.prototype.close0 = function (error) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', _get_urlForClose_(this));
      xhr.send();
    } catch ($p) {
      if ($p instanceof Error) {
        var tmp$ret$0;
        $l$block: {
          var tmp0_error_0 = Companion_getInstance_20()._logger_0;
          if (!tmp0_error_0._get_isErrorEnabled__0_k$()) {
            tmp$ret$0 = Unit_getInstance();
            break $l$block;
          }var tmp = console;
          var tmp_0 = (new Date(Date.now())).toDateString();
          Companion_getInstance_15();
          tmp.error(tmp_0, tmp0_error_0._nameTag, '[ERROR]', 'close0 error happen', $p);
        }
      } else {
        {
          throw $p;
        }
      }
    }
    if (this._sendTaskId != null) {
      clearTimeout(this._sendTaskId);
      this._sendTaskId = null;
    }this._set_status__ba22ma_k$(Closed_getInstance());
    ensureNotNull(Companion_getInstance_10().from_q2jafu_k$(this._get_closedPromise__0_k$()))._get_resolve__0_k$()(Unit_getInstance());
  };
  HttpConnectionImpl.prototype.send0_4f0jt0_k$ = function (message) {
    message.seal();
    var sendRequest = new SendRequest(message);
    this._pendingMessages.add_2bq_k$(sendRequest);
    Unit_getInstance();
    checkStartSendTask(this);
    return asJSPromise(sendRequest._promise_2);
  };
  HttpConnectionImpl.prototype.touch = function () {
    if (this._sendTaskId != null) {
      clearTimeout(this._sendTaskId);
      this._sendTaskId = null;
    }sendPendingMessagesNow(this);
  };
  HttpConnectionImpl.$metadata$ = {
    simpleName: 'HttpConnectionImpl',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__48(this$0) {
    this._this$0_11 = this$0;
  }
  _no_name_provided__48.prototype.invoke_sqtm7b_k$ = function (resolve, reject) {
    this._this$0_11._resolve_0 = reject;
    this._this$0_11._reject_0 = reject;
  };
  _no_name_provided__48.prototype.invoke_osx4an_k$ = function (p1, p2) {
    var tmp = (!(p1 == null) ? typeof p1 === 'function' : false) ? p1 : THROW_CCE();
    this.invoke_sqtm7b_k$(tmp, (!(p2 == null) ? typeof p2 === 'function' : false) ? p2 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__48.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function SendRequest(message) {
    this._message_0 = message;
    var tmp = this;
    tmp._promise_2 = new Promise(_no_name_provided_$factory_44(this));
  }
  SendRequest.$metadata$ = {
    simpleName: 'SendRequest',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_40(this$0, resultContinuation) {
    var i = new _no_name_provided__44(this$0, resultContinuation);
    var l = function ($cont) {
      return i.invoke_sv8swh_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function _no_name_provided_$factory_41(this$0) {
    var i = new _no_name_provided__45(this$0);
    return function (p1) {
      i.invoke_1ti8hr_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_42(this$0) {
    var i = new _no_name_provided__46(this$0);
    return function () {
      i.invoke_sv8swh_k$();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_43(this$0, $xhr) {
    var i = new _no_name_provided__47(this$0, $xhr);
    return function (p1) {
      i.invoke_xfv2uo_k$(p1);
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_44(this$0) {
    var i = new _no_name_provided__48(this$0);
    return function (p1, p2) {
      i.invoke_sqtm7b_k$(p1, p2);
      return Unit_getInstance();
    };
  }
  function checkNextRecord($this, expectType) {
    var recordType = $this._data_2.getByte($this._recordIndex);
    if (!(recordType === expectType._get_ordinal__0_k$())) {
      var actualType = values()[recordType];
      throw Exception_init_$Create$_0('' + 'next data is ' + actualType._get_name__0_k$() + ', but expecting ' + expectType._get_name__0_k$());
    }var tmp0_this = $this;
    var tmp1 = tmp0_this._recordIndex;
    tmp0_this._recordIndex = tmp1 + 1 | 0;
    Unit_getInstance();
  }
  function Companion_22() {
    Companion_instance_21 = this;
  }
  Companion_22.prototype.tryParse_ookkgr_k$ = function (byteBuf, canRef) {
    if (byteBuf._get_readableBytes__0_k$() < Companion_getInstance_18()._HeaderSize) {
      return null;
    }var readerIndex = byteBuf._get_readerIndex__0_k$();
    var recordLength = byteBuf.getInt(readerIndex + Companion_getInstance_18()._HeaderIndex_RecordLength | 0);
    var bodyLength = byteBuf.getInt(readerIndex + Companion_getInstance_18()._HeaderIndex_BodyLength | 0);
    var messageByteCount = (Companion_getInstance_18()._HeaderSize + recordLength | 0) + bodyLength | 0;
    if (byteBuf._get_readableBytes__0_k$() < messageByteCount) {
      return null;
    }var data;
    if (canRef) {
      var bufImpl = byteBuf instanceof ByteBufImpl ? byteBuf : THROW_CCE();
      var buffer = bufImpl._view.buffer;
      var bufferOffset = bufImpl._view.byteOffset + readerIndex | 0;
      data = new Int8Array(buffer, bufferOffset, messageByteCount);
      var tmp0_this = byteBuf;
      tmp0_this._set_readerIndex__majfzk_k$(tmp0_this._get_readerIndex__0_k$() + messageByteCount | 0);
    } else {
      data = new Int8Array(messageByteCount);
      var tmp = asByteArray(data);
      byteBuf.readBytes$default_ffc7am_k$(tmp, 0, 0, 6, null);
    }
    return new ReadableMessageImpl(Companion_getInstance_12()._get_Default__0_k$().wrap(asByteArray(data)));
  };
  Companion_22.prototype.tryParse$default_c4rzib_k$ = function (byteBuf, canRef, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      canRef = true;
    return this.tryParse_ookkgr_k$(byteBuf, canRef);
  };
  Companion_22.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_22();
    return Companion_instance_21;
  }
  function ReadableMessageImpl(data) {
    Companion_getInstance_21();
    ReadableMessage.call(this);
    this._data_2 = data;
    this._recordIndex = Companion_getInstance_18()._HeaderSize;
    var recordLength = this._data_2.getInt(Companion_getInstance_18()._HeaderIndex_RecordLength);
    this._recordEndIndex = Companion_getInstance_18()._HeaderSize + recordLength | 0;
    this._bodyLength = this._data_2.getInt(Companion_getInstance_18()._HeaderIndex_BodyLength);
    this._data_2._set_readerIndex__majfzk_k$(this._recordEndIndex);
  }
  ReadableMessageImpl.prototype._getType_0_k$ = function () {
    return this._data_2.getShort(Companion_getInstance_18()._HeaderIndex_Type);
  };
  ReadableMessageImpl.prototype._getId_0_k$ = function () {
    return this._data_2.getInt(Companion_getInstance_18()._HeaderIndex_Id);
  };
  ReadableMessageImpl.prototype._getByteCount_0_k$ = function () {
    return this._data_2._get_writerIndex__0_k$();
  };
  ReadableMessageImpl.prototype.readByte = function () {
    checkNextRecord(this, DataType_Byte_getInstance());
    return this._data_2.readByte();
  };
  ReadableMessageImpl.prototype.readShort = function () {
    checkNextRecord(this, DataType_Short_getInstance());
    return this._data_2.readShort();
  };
  ReadableMessageImpl.prototype.readInt = function () {
    checkNextRecord(this, DataType_Int_getInstance());
    return this._data_2.readInt();
  };
  ReadableMessageImpl.prototype.readInt64 = function () {
    checkNextRecord(this, DataType_Long_getInstance());
    return this._data_2.readInt64();
  };
  ReadableMessageImpl.prototype.readFloat = function () {
    checkNextRecord(this, DataType_Float_getInstance());
    return this._data_2.readFloat();
  };
  ReadableMessageImpl.prototype.readDouble = function () {
    checkNextRecord(this, DataType_Double_getInstance());
    return this._data_2.readDouble();
  };
  ReadableMessageImpl.prototype.readBoolean = function () {
    checkNextRecord(this, DataType_Boolean_getInstance());
    return this._data_2.readBoolean();
  };
  ReadableMessageImpl.prototype.readUTF8 = function () {
    checkNextRecord(this, DataType_UTF8_getInstance());
    var dataLength = this._data_2.readInt();
    return this._data_2.readUTF8(dataLength);
  };
  ReadableMessageImpl.prototype.readBytes = function () {
    checkNextRecord(this, DataType_ByteArray_getInstance());
    var dataLength = this._data_2.readInt();
    var byteArray = new Int8Array(dataLength);
    this._data_2.readBytes_ysdrhq_k$(byteArray, 0, dataLength);
    return byteArray;
  };
  ReadableMessageImpl.$metadata$ = {
    simpleName: 'ReadableMessageImpl',
    kind: 'class',
    interfaces: []
  };
  function Companion_23() {
    Companion_instance_22 = this;
  }
  Companion_23.prototype.create_qlp5fx_k$ = function (type, id) {
    var msg = new WritableMessageImpl();
    msg._set_type__7gn77n_k$(type);
    msg._set_id__majfzk_k$(id);
    return msg;
  };
  Companion_23.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_23();
    return Companion_instance_22;
  }
  function WritableMessageImpl() {
    Companion_getInstance_22();
    WritableMessage.call(this);
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      var tmp0_also_0 = Companion_getInstance_12()._get_Default__0_k$().buffer_27zxwg_k$(Companion_getInstance_18()._HeaderSize, Companion_getInstance_18()._HeaderSize);
      {
      }
      {
        tmp0_also_0.setIndex(0, Companion_getInstance_18()._HeaderSize);
      }
      tmp$ret$0 = tmp0_also_0;
      break $l$block;
    }
    tmp._header = tmp$ret$0;
    var tmp_0 = this;
    var tmp_1 = Companion_getInstance_12()._get_Default__0_k$();
    tmp_0._record = tmp_1.buffer$default_1mz7xa_k$(0, 0, 3, null);
    var tmp_2 = this;
    var tmp_3 = Companion_getInstance_12()._get_Default__0_k$();
    tmp_2._body = tmp_3.buffer$default_1mz7xa_k$(0, 0, 3, null);
    this._sealed_0 = false;
    var tmp_4 = Companion_getInstance_18()._Tags;
    this._header.setBytes$default_esd280_k$(0, tmp_4, 0, 0, 12, null);
    Unit_getInstance();
  }
  WritableMessageImpl.prototype._get_byteCount__0_k$ = function () {
    return (this._header._get_writerIndex__0_k$() + this._record._get_writerIndex__0_k$() | 0) + this._body._get_writerIndex__0_k$() | 0;
  };
  WritableMessageImpl.prototype._set_id__majfzk_k$ = function (value) {
    this._header.setInt(Companion_getInstance_18()._HeaderIndex_Id, value);
  };
  WritableMessageImpl.prototype._get_id__0_k$ = function () {
    return this._header.getInt(Companion_getInstance_18()._HeaderIndex_Id);
  };
  WritableMessageImpl.prototype._set_type__7gn77n_k$ = function (value) {
    this._header.setShort(Companion_getInstance_18()._HeaderIndex_Type, value);
  };
  WritableMessageImpl.prototype._get_type__0_k$ = function () {
    return this._header.getShort(Companion_getInstance_18()._HeaderIndex_Type);
  };
  WritableMessageImpl.prototype._get_sealed__0_k$ = function () {
    return this._sealed_0;
  };
  WritableMessageImpl.prototype.writeByte = function (value) {
    {
      var tmp0_writeRecord_0 = DataType_Byte_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    this._body.writeByte(value);
  };
  WritableMessageImpl.prototype.writeBoolean = function (value) {
    {
      var tmp0_writeRecord_0 = DataType_Boolean_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    this._body.writeBoolean(value);
  };
  WritableMessageImpl.prototype.writeShort = function (value) {
    {
      var tmp0_writeRecord_0 = DataType_Short_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    this._body.writeShort(value);
  };
  WritableMessageImpl.prototype.writeInt = function (value) {
    {
      var tmp0_writeRecord_0 = DataType_Int_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    this._body.writeInt(value);
  };
  WritableMessageImpl.prototype.writeInt64 = function (value) {
    {
      var tmp0_writeRecord_0 = DataType_Long_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    this._body.writeInt64(value);
  };
  WritableMessageImpl.prototype.writeFloat = function (value) {
    {
      var tmp0_writeRecord_0 = DataType_Float_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    this._body.writeFloat(value);
  };
  WritableMessageImpl.prototype.writeDouble = function (value) {
    {
      var tmp0_writeRecord_0 = DataType_Double_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    this._body.writeDouble(value);
  };
  WritableMessageImpl.prototype.writeUTF8 = function (value) {
    {
      var tmp0_writeRecord_0 = DataType_UTF8_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    var lenIndex = this._body._get_writerIndex__0_k$();
    this._body.writeInt(0);
    var dataLen = this._body.writeUTF8(value);
    this._body.setInt(lenIndex, dataLen);
  };
  WritableMessageImpl.prototype.writeBytes = function (value, startIndex, length) {
    {
      var tmp0_writeRecord_0 = DataType_ByteArray_getInstance();
      if (this._sealed_0) {
        throw Exception_init_$Create$_0("message is sealed,can't write again");
      }this._record.writeByte(toByte(tmp0_writeRecord_0._get_ordinal__0_k$()));
    }
    var lenIndex = this._body._get_writerIndex__0_k$();
    this._body.writeInt(0);
    var dataLen = this._body.writeBytes_irqg4d_k$(value, startIndex, length);
    this._body.setInt(lenIndex, dataLen);
  };
  WritableMessageImpl.prototype.writeBytes_ysdrhq_k$ = function (value, startIndex, length) {
    return this.writeBytes(value, startIndex, length);
  };
  WritableMessageImpl.prototype.copyTo_s6vhqs_k$ = function (dest, offset) {
    var offset_0 = offset;
    var tmp = this._header;
    (tmp instanceof ByteBufImpl ? tmp : THROW_CCE()).copyDataTo_s6vhqs_k$(dest, offset_0);
    offset_0 = offset_0 + Companion_getInstance_18()._HeaderSize | 0;
    var tmp_0 = this._record;
    (tmp_0 instanceof ByteBufImpl ? tmp_0 : THROW_CCE()).copyDataTo_s6vhqs_k$(dest, offset_0);
    offset_0 = offset_0 + this._record._get_readableBytes__0_k$() | 0;
    var tmp_1 = this._body;
    (tmp_1 instanceof ByteBufImpl ? tmp_1 : THROW_CCE()).copyDataTo_s6vhqs_k$(dest, offset_0);
    offset_0 = offset_0 + this._body._get_readableBytes__0_k$() | 0;
  };
  WritableMessageImpl.prototype.seal = function () {
    this._sealed_0 = true;
    this._header.setInt(Companion_getInstance_18()._HeaderIndex_RecordLength, this._record._get_readableBytes__0_k$());
    this._header.setInt(Companion_getInstance_18()._HeaderIndex_BodyLength, this._body._get_readableBytes__0_k$());
  };
  WritableMessageImpl.$metadata$ = {
    simpleName: 'WritableMessageImpl',
    kind: 'class',
    interfaces: []
  };
  function Companion_24() {
    Companion_instance_23 = this;
  }
  Companion_24.prototype.from = function (json) {
    var json_0 = (!(json == null) ? isObject(json) : false) ? json : THROW_CCE();
    var tmp = json_0['id'];
    var id = toInt64(numberToLong((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()));
    var tmp0_safe_receiver = json_0['name'];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    var name = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp$ret$6;
    $l$block_5: {
      var tmp0_let_0 = json_0['endpoints'];
      {
      }
      var tmp$ret$5;
      $l$block_4: {
        var tmp_0;
        if (tmp0_let_0 == null) {
          var tmp$ret$0;
          $l$block: {
            tmp$ret$0 = [];
            break $l$block;
          }
          tmp_0 = tmp$ret$0;
        } else {
          var tmp$ret$4;
          $l$block_3: {
            var tmp$ret$3;
            $l$block_2: {
              var tmp0_map_0_3 = (!(tmp0_let_0 == null) ? isArray(tmp0_let_0) : false) ? tmp0_let_0 : THROW_CCE();
              var tmp$ret$2;
              $l$block_1: {
                var tmp0_mapTo_0_1_4 = ArrayList_init_$Create$_0(tmp0_map_0_3.length);
                var indexedObject = tmp0_map_0_3;
                var inductionVariable = 0;
                var last = indexedObject.length;
                while (inductionVariable < last) {
                  var item_2_3_6 = indexedObject[inductionVariable];
                  inductionVariable = inductionVariable + 1 | 0;
                  var tmp$ret$1;
                  $l$block_0: {
                    tmp$ret$1 = Companion_getInstance_16().from(item_2_3_6);
                    break $l$block_0;
                  }
                  tmp0_mapTo_0_1_4.add_2bq_k$(tmp$ret$1);
                  Unit_getInstance();
                }
                tmp$ret$2 = tmp0_mapTo_0_1_4;
                break $l$block_1;
              }
              tmp$ret$3 = tmp$ret$2;
              break $l$block_2;
            }
            var tmp1_toTypedArray_0_2 = tmp$ret$3;
            tmp$ret$4 = copyToArray_0(tmp1_toTypedArray_0_2);
            break $l$block_3;
          }
          tmp_0 = tmp$ret$4;
        }
        tmp$ret$5 = tmp_0;
        break $l$block_4;
      }
      tmp$ret$6 = tmp$ret$5;
      break $l$block_5;
    }
    var endpoints = tmp$ret$6;
    var tmp2_elvis_lhs = json_0['data'];
    var data = tmp2_elvis_lhs == null ? {} : tmp2_elvis_lhs;
    var tmp$ret$13;
    $l$block_12: {
      var tmp1_let_0 = json_0['aliases'];
      {
      }
      var tmp$ret$12;
      $l$block_11: {
        var tmp_1;
        if (tmp1_let_0 == null) {
          var tmp$ret$7;
          $l$block_6: {
            tmp$ret$7 = [];
            break $l$block_6;
          }
          tmp_1 = tmp$ret$7;
        } else {
          var tmp$ret$11;
          $l$block_10: {
            var tmp$ret$10;
            $l$block_9: {
              var tmp0_map_0_3_0 = (!(tmp1_let_0 == null) ? isArray(tmp1_let_0) : false) ? tmp1_let_0 : THROW_CCE();
              var tmp$ret$9;
              $l$block_8: {
                var tmp0_mapTo_0_1_4_0 = ArrayList_init_$Create$_0(tmp0_map_0_3_0.length);
                var indexedObject_0 = tmp0_map_0_3_0;
                var inductionVariable_0 = 0;
                var last_0 = indexedObject_0.length;
                while (inductionVariable_0 < last_0) {
                  var item_2_3_6_0 = indexedObject_0[inductionVariable_0];
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var tmp$ret$8;
                  $l$block_7: {
                    tmp$ret$8 = Companion_getInstance_25().from(item_2_3_6_0);
                    break $l$block_7;
                  }
                  tmp0_mapTo_0_1_4_0.add_2bq_k$(tmp$ret$8);
                  Unit_getInstance();
                }
                tmp$ret$9 = tmp0_mapTo_0_1_4_0;
                break $l$block_8;
              }
              tmp$ret$10 = tmp$ret$9;
              break $l$block_9;
            }
            var tmp1_toTypedArray_0_2_0 = tmp$ret$10;
            tmp$ret$11 = copyToArray_0(tmp1_toTypedArray_0_2_0);
            break $l$block_10;
          }
          tmp_1 = tmp$ret$11;
        }
        tmp$ret$12 = tmp_1;
        break $l$block_11;
      }
      tmp$ret$13 = tmp$ret$12;
      break $l$block_12;
    }
    var aliases = tmp$ret$13;
    var tmp_2 = json_0['zoneId'];
    var zoneId = toInt64(numberToLong((!(tmp_2 == null) ? typeof tmp_2 === 'number' : false) ? tmp_2 : THROW_CCE()));
    var tmp_3 = json_0['visible'];
    var tmp3_elvis_lhs = (!(tmp_3 == null) ? typeof tmp_3 === 'boolean' : false) ? tmp_3 : null;
    var visible = tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
    return new AppServer(id, name, endpoints, data, aliases, zoneId, visible);
  };
  Companion_24.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_24();
    return Companion_instance_23;
  }
  function AppServer(id, name, endpoints, data, aliases, zoneId, visible) {
    Companion_getInstance_23();
    this._id_1 = id;
    this._name_4 = name;
    this._endpoints = endpoints;
    this._data_3 = data;
    this._aliases = aliases;
    this._zoneId = zoneId;
    this._visible = visible;
  }
  AppServer.prototype._get_id__0_k$ = function () {
    return this._id_1;
  };
  AppServer.prototype._get_name__0_k$ = function () {
    return this._name_4;
  };
  AppServer.prototype._get_endpoints__0_k$ = function () {
    return this._endpoints;
  };
  AppServer.prototype._get_data__0_k$ = function () {
    return this._data_3;
  };
  AppServer.prototype._get_aliases__0_k$ = function () {
    return this._aliases;
  };
  AppServer.prototype._get_zoneId__0_k$ = function () {
    return this._zoneId;
  };
  AppServer.prototype._get_visible__0_k$ = function () {
    return this._visible;
  };
  AppServer.$metadata$ = {
    simpleName: 'AppServer',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AppServer.prototype, 'id', {
    configurable: true,
    get: AppServer.prototype._get_id__0_k$
  });
  Object.defineProperty(AppServer.prototype, 'name', {
    configurable: true,
    get: AppServer.prototype._get_name__0_k$
  });
  Object.defineProperty(AppServer.prototype, 'endpoints', {
    configurable: true,
    get: AppServer.prototype._get_endpoints__0_k$
  });
  Object.defineProperty(AppServer.prototype, 'data', {
    configurable: true,
    get: AppServer.prototype._get_data__0_k$
  });
  Object.defineProperty(AppServer.prototype, 'aliases', {
    configurable: true,
    get: AppServer.prototype._get_aliases__0_k$
  });
  Object.defineProperty(AppServer.prototype, 'zoneId', {
    configurable: true,
    get: AppServer.prototype._get_zoneId__0_k$
  });
  Object.defineProperty(AppServer.prototype, 'visible', {
    configurable: true,
    get: AppServer.prototype._get_visible__0_k$
  });
  function Companion_25() {
    Companion_instance_24 = this;
  }
  Companion_25.prototype.from = function (data) {
    var tmp = data['servers'];
    var serversJson = (!(tmp == null) ? isArray(tmp) : false) ? tmp : THROW_CCE();
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = ArrayList_init_$Create$();
      break $l$block;
    }
    var servers = tmp$ret$0;
    var inductionVariable = 0;
    var last = serversJson.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var serverJson = serversJson[i];
        var appServer = Companion_getInstance_23().from(serverJson);
        servers.add_2bq_k$(appServer);
        Unit_getInstance();
      }
       while (inductionVariable <= last);
    var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = copyToArray_0(servers);
      break $l$block_0;
    }
    return new AppServerList(tmp$ret$1);
  };
  Companion_25.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_25();
    return Companion_instance_24;
  }
  function AppServerList(servers) {
    Companion_getInstance_24();
    this._servers = servers;
  }
  AppServerList.prototype._get_servers__0_k$ = function () {
    return this._servers;
  };
  AppServerList.$metadata$ = {
    simpleName: 'AppServerList',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AppServerList.prototype, 'servers', {
    configurable: true,
    get: AppServerList.prototype._get_servers__0_k$
  });
  function None_1() {
    None_instance_1 = this;
    AppServerStatus.call(this);
  }
  None_1.$metadata$ = {
    simpleName: 'None',
    kind: 'object',
    interfaces: []
  };
  var None_instance_1;
  function None_getInstance_1() {
    if (None_instance_1 == null)
      new None_1();
    return None_instance_1;
  }
  function Starting() {
    Starting_instance = this;
    AppServerStatus.call(this);
  }
  Starting.$metadata$ = {
    simpleName: 'Starting',
    kind: 'object',
    interfaces: []
  };
  var Starting_instance;
  function Starting_getInstance() {
    if (Starting_instance == null)
      new Starting();
    return Starting_instance;
  }
  function Normal() {
    Normal_instance = this;
    AppServerStatus.call(this);
  }
  Normal.$metadata$ = {
    simpleName: 'Normal',
    kind: 'object',
    interfaces: []
  };
  var Normal_instance;
  function Normal_getInstance() {
    if (Normal_instance == null)
      new Normal();
    return Normal_instance;
  }
  function Stopping() {
    Stopping_instance = this;
    AppServerStatus.call(this);
  }
  Stopping.$metadata$ = {
    simpleName: 'Stopping',
    kind: 'object',
    interfaces: []
  };
  var Stopping_instance;
  function Stopping_getInstance() {
    if (Stopping_instance == null)
      new Stopping();
    return Stopping_instance;
  }
  function Offline() {
    Offline_instance = this;
    AppServerStatus.call(this);
  }
  Offline.$metadata$ = {
    simpleName: 'Offline',
    kind: 'object',
    interfaces: []
  };
  var Offline_instance;
  function Offline_getInstance() {
    if (Offline_instance == null)
      new Offline();
    return Offline_instance;
  }
  function AppServerStatus() {
  }
  AppServerStatus.$metadata$ = {
    simpleName: 'AppServerStatus',
    kind: 'class',
    interfaces: []
  };
  function Companion_26() {
    Companion_instance_25 = this;
  }
  Companion_26.prototype.from = function (json) {
    var json_0 = (!(json == null) ? isObject(json) : false) ? json : THROW_CCE();
    var tmp = json_0['id'];
    var id = toInt64(numberToLong((!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE()));
    var tmp0_safe_receiver = json_0['name'];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    var name = tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
    var tmp_0 = json_0['visible'];
    var tmp2_elvis_lhs = (!(tmp_0 == null) ? typeof tmp_0 === 'boolean' : false) ? tmp_0 : null;
    var visible = tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = json_0['data'];
    var data = tmp3_elvis_lhs == null ? {} : tmp3_elvis_lhs;
    var tmp_1 = json_0['zoneId'];
    var zoneId = toInt64(numberToLong((!(tmp_1 == null) ? typeof tmp_1 === 'number' : false) ? tmp_1 : THROW_CCE()));
    return new AppServiceAlias(id, name, visible, data, zoneId);
  };
  Companion_26.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_26();
    return Companion_instance_25;
  }
  function AppServiceAlias(id, name, visible, data, zoneId) {
    Companion_getInstance_25();
    this._id_2 = id;
    this._name_5 = name;
    this._visible_0 = visible;
    this._data_4 = data;
    this._zoneId_0 = zoneId;
  }
  AppServiceAlias.prototype._get_id__0_k$ = function () {
    return this._id_2;
  };
  AppServiceAlias.prototype._get_name__0_k$ = function () {
    return this._name_5;
  };
  AppServiceAlias.prototype._get_visible__0_k$ = function () {
    return this._visible_0;
  };
  AppServiceAlias.prototype._get_data__0_k$ = function () {
    return this._data_4;
  };
  AppServiceAlias.prototype._get_zoneId__0_k$ = function () {
    return this._zoneId_0;
  };
  AppServiceAlias.$metadata$ = {
    simpleName: 'AppServiceAlias',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(AppServiceAlias.prototype, 'id', {
    configurable: true,
    get: AppServiceAlias.prototype._get_id__0_k$
  });
  Object.defineProperty(AppServiceAlias.prototype, 'name', {
    configurable: true,
    get: AppServiceAlias.prototype._get_name__0_k$
  });
  Object.defineProperty(AppServiceAlias.prototype, 'visible', {
    configurable: true,
    get: AppServiceAlias.prototype._get_visible__0_k$
  });
  Object.defineProperty(AppServiceAlias.prototype, 'data', {
    configurable: true,
    get: AppServiceAlias.prototype._get_data__0_k$
  });
  Object.defineProperty(AppServiceAlias.prototype, 'zoneId', {
    configurable: true,
    get: AppServiceAlias.prototype._get_zoneId__0_k$
  });
  function Companion_27() {
    Companion_instance_26 = this;
  }
  Companion_27.prototype.from = function (data) {
    var map = (!(data == null) ? isObject(data) : false) ? data : THROW_CCE();
    var ld = new LoginData();
    var tmp0_safe_receiver = map['isNewUser'];
    if (tmp0_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        var tmp = ld;
        tmp._isNewUser = (!(tmp0_safe_receiver == null) ? typeof tmp0_safe_receiver === 'boolean' : false) ? tmp0_safe_receiver : THROW_CCE();
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    var tmp1_safe_receiver = map['appId'];
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$1;
      $l$block_0: {
        {
        }
        ld._appId = of(Companion_getInstance_11(), tmp1_safe_receiver);
        tmp$ret$1 = Unit_getInstance();
        break $l$block_0;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    ld._userUid_1 = of(Companion_getInstance_11(), ensureNotNull(map['userUid']));
    var tmp_0 = ld;
    var tmp_1 = map['tokenData'];
    tmp_0._tokenData_0 = (!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE();
    return ld;
  };
  Companion_27.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_27();
    return Companion_instance_26;
  }
  function LoginData() {
    Companion_getInstance_26();
    this._isNewUser = false;
    this._appId = Companion_getInstance_11()._Zero;
    this._userUid_1 = Companion_getInstance_11()._Zero;
    this._tokenData_0 = '';
  }
  LoginData.prototype._set_isNewUser__rpwsgn_k$ = function (_set___) {
    this._isNewUser = _set___;
  };
  LoginData.prototype._get_isNewUser__0_k$ = function () {
    return this._isNewUser;
  };
  LoginData.prototype._set_appId__zbub8q_k$ = function (_set___) {
    this._appId = _set___;
  };
  LoginData.prototype._get_appId__0_k$ = function () {
    return this._appId;
  };
  LoginData.prototype._set_userUid__zbub8q_k$ = function (_set___) {
    this._userUid_1 = _set___;
  };
  LoginData.prototype._get_userUid__0_k$ = function () {
    return this._userUid_1;
  };
  LoginData.prototype._set_tokenData__a4enbm_k$ = function (_set___) {
    this._tokenData_0 = _set___;
  };
  LoginData.prototype._get_tokenData__0_k$ = function () {
    return this._tokenData_0;
  };
  LoginData.$metadata$ = {
    simpleName: 'LoginData',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(LoginData.prototype, 'isNewUser', {
    configurable: true,
    get: LoginData.prototype._get_isNewUser__0_k$,
    set: LoginData.prototype._set_isNewUser__rpwsgn_k$
  });
  Object.defineProperty(LoginData.prototype, 'appId', {
    configurable: true,
    get: LoginData.prototype._get_appId__0_k$,
    set: LoginData.prototype._set_appId__zbub8q_k$
  });
  Object.defineProperty(LoginData.prototype, 'userUid', {
    configurable: true,
    get: LoginData.prototype._get_userUid__0_k$,
    set: LoginData.prototype._set_userUid__zbub8q_k$
  });
  Object.defineProperty(LoginData.prototype, 'tokenData', {
    configurable: true,
    get: LoginData.prototype._get_tokenData__0_k$,
    set: LoginData.prototype._set_tokenData__a4enbm_k$
  });
  function Platform() {
    this._locale = null;
  }
  Platform.prototype._set_locale__qlpr75_k$ = function (_set___) {
    this._locale = _set___;
  };
  Platform.prototype._get_locale__0_k$ = function () {
    return this._locale;
  };
  Platform.prototype._set_user__7g4wqc_k$ = function (_set___) {
    this._user = _set___;
  };
  Platform.prototype._get_user__0_k$ = function () {
    var tmp = this._user;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('user');
    }
  };
  Platform.prototype._set_app__tgr1ta_k$ = function (_set___) {
    this._app = _set___;
  };
  Platform.prototype._get_app__0_k$ = function () {
    var tmp = this._app;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('app');
    }
  };
  Platform.prototype.accessService = function (path, parameters) {
    return this.accessService_pqcwxr_k$(path, parameters === void 1 ? {} : parameters);
  };
  Platform.prototype.accessService$default_y3a76r_k$ = function (path, parameters, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      parameters = {};
    return $handler == null ? this.accessService_pqcwxr_k$(path, parameters) : $handler(path, parameters);
  };
  Platform.$metadata$ = {
    simpleName: 'Platform',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(Platform.prototype, 'locale', {
    configurable: true,
    get: Platform.prototype._get_locale__0_k$,
    set: Platform.prototype._set_locale__qlpr75_k$
  });
  Object.defineProperty(Platform.prototype, 'user', {
    configurable: true,
    get: Platform.prototype._get_user__0_k$,
    set: Platform.prototype._set_user__7g4wqc_k$
  });
  Object.defineProperty(Platform.prototype, 'app', {
    configurable: true,
    get: Platform.prototype._get_app__0_k$,
    set: Platform.prototype._set_app__tgr1ta_k$
  });
  function PlatformAppServices() {
  }
  PlatformAppServices.prototype.serverList = function (appId, parameters) {
    return this.serverList_qv1sud_k$(appId, parameters === void 1 ? {} : parameters);
  };
  PlatformAppServices.prototype.serverList$default_nxz1cp_k$ = function (appId, parameters, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      parameters = {};
    return $handler == null ? this.serverList_qv1sud_k$(appId, parameters) : $handler(appId, parameters);
  };
  PlatformAppServices.$metadata$ = {
    simpleName: 'PlatformAppServices',
    kind: 'class',
    interfaces: []
  };
  function Companion_28() {
    Companion_instance_27 = this;
  }
  Companion_28.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_28();
    return Companion_instance_27;
  }
  function PlatformResponse(errorCode, data) {
    Companion_getInstance_27();
    this._errorCode_0 = errorCode;
    this._data_5 = data;
  }
  PlatformResponse.prototype._get_errorCode__0_k$ = function () {
    return this._errorCode_0;
  };
  PlatformResponse.prototype._get_data__0_k$ = function () {
    return this._data_5;
  };
  PlatformResponse.$metadata$ = {
    simpleName: 'PlatformResponse',
    kind: 'class',
    interfaces: []
  };
  Object.defineProperty(PlatformResponse.prototype, 'errorCode', {
    configurable: true,
    get: PlatformResponse.prototype._get_errorCode__0_k$
  });
  Object.defineProperty(PlatformResponse.prototype, 'data', {
    configurable: true,
    get: PlatformResponse.prototype._get_data__0_k$
  });
  function failure(_this_, errorCode) {
    return new PlatformResponse(errorCode, null);
  }
  function success(_this_, data) {
    return new PlatformResponse(Companion_getInstance_8()._Success, data);
  }
  function PlatformUserServices() {
  }
  PlatformUserServices.prototype.deviceLogin = function (deviceId, parameters) {
    return this.deviceLogin_pqcwxr_k$(deviceId, parameters === void 1 ? {} : parameters);
  };
  PlatformUserServices.prototype.deviceLogin$default_y3a76r_k$ = function (deviceId, parameters, $mask0, $handler) {
    if (!(($mask0 & 2) === 0))
      parameters = {};
    return $handler == null ? this.deviceLogin_pqcwxr_k$(deviceId, parameters) : $handler(deviceId, parameters);
  };
  PlatformUserServices.prototype.login = function (bindingId, bindingType, password, parameters) {
    return this.login_wg86f1_k$(bindingId, bindingType, password, parameters === void 1 ? {} : parameters);
  };
  PlatformUserServices.prototype.login$default_bkwza3_k$ = function (bindingId, bindingType, password, parameters, $mask0, $handler) {
    if (!(($mask0 & 8) === 0))
      parameters = {};
    return $handler == null ? this.login_wg86f1_k$(bindingId, bindingType, password, parameters) : $handler(bindingId, bindingType, password, parameters);
  };
  PlatformUserServices.prototype.register = function (username, password, parameters) {
    return this.register_19pqyq_k$(username, password, parameters === void 1 ? {} : parameters);
  };
  PlatformUserServices.prototype.register$default_z0ceis_k$ = function (username, password, parameters, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      parameters = {};
    return $handler == null ? this.register_19pqyq_k$(username, password, parameters) : $handler(username, password, parameters);
  };
  PlatformUserServices.$metadata$ = {
    simpleName: 'PlatformUserServices',
    kind: 'class',
    interfaces: []
  };
  function createPlatform(url, options) {
    return createPlatform_0(url, options === void 1 ? {} : options);
  }
  function createPlatform_0(url, options) {
    return new PlatformImpl(url, options);
  }
  function _no_name_provided__49(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__49.prototype.invoke_33y0ow_k$ = function (data, $cont) {
    var tmp = this.create_mgx0k4_k$(data, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__49.prototype.invoke_20e8_k$ = function (p1, $cont) {
    return this.invoke_33y0ow_k$((p1 == null ? true : p1) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__49.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          return Companion_getInstance_24().from(this._data_6);
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__49.prototype.create_mgx0k4_k$ = function (data, completion) {
    var i = new _no_name_provided__49(completion);
    i._data_6 = data;
    return i;
  };
  _no_name_provided__49.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function PlatformAppServicesImpl(platformImpl) {
    PlatformAppServices.call(this);
    this._platformImpl = platformImpl;
  }
  PlatformAppServicesImpl.prototype.serverList = function (appId, parameters) {
    var finalParams = {};
    Object.assign(finalParams, parameters);
    finalParams['appId'] = appId.toShort();
    var url = this._platformImpl.generateUrl_pqcwxr_k$('app/ServerList', finalParams);
    return asJSPromise(this._platformImpl.servicePromise_2tgilw_k$(url, _no_name_provided_$factory_45(null)));
  };
  PlatformAppServicesImpl.prototype.serverList_qv1sud_k$ = function (appId, parameters) {
    return this.serverList(appId, parameters);
  };
  PlatformAppServicesImpl.$metadata$ = {
    simpleName: 'PlatformAppServicesImpl',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_45(resultContinuation) {
    var i = new _no_name_provided__49(resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_33y0ow_k$(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function concatUrl($this, part1, part2) {
    var endWith = endsWith$default(part1, '/', false, 2, null);
    var startWith = startsWith$default(part2, '/', false, 2, null);
    var tmp;
    if (endWith ? startWith : false) {
      var tmp$ret$1;
      $l$block_0: {
        var tmp$ret$0;
        $l$block: {
          tmp$ret$0 = part2;
          break $l$block;
        }
        tmp$ret$1 = tmp$ret$0.substring(1);
        break $l$block_0;
      }
      tmp = part1 + tmp$ret$1;
    } else if (endWith ? true : startWith) {
      tmp = part1 + part2;
    } else {
      tmp = '' + part1 + '/' + part2;
    }
    return tmp;
  }
  function toQueryString($this, parameters) {
    var names = Object.getOwnPropertyNames(parameters);
    var queryString = '';
    var indexedObject = names;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var name = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_safe_receiver = parameters[name];
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : toString_1(tmp1_safe_receiver);
      var tmp;
      if (tmp2_elvis_lhs == null) {
        continue;
      } else {
        tmp = tmp2_elvis_lhs;
      }
      var value = tmp;
      var tmp$ret$0;
      $l$block: {
        var tmp0_isNotEmpty_0 = queryString;
        tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty_0) > 0;
        break $l$block;
      }
      if (tmp$ret$0) {
        queryString = queryString + '&';
      } else {
      }
      queryString = queryString + ('' + encodeURIComponent(name) + '=' + encodeURIComponent(value));
    }
    return queryString;
  }
  function Companion_29() {
    Companion_instance_28 = this;
    this._Status_OK = 200;
  }
  Companion_29.$metadata$ = {
    simpleName: 'Companion',
    kind: 'object',
    interfaces: []
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_29();
    return Companion_instance_28;
  }
  function _no_name_provided__50($targetUrl, $action, resultContinuation) {
    this._$targetUrl = $targetUrl;
    this._$action = $action;
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__50.prototype.invoke_0_k$ = function ($cont) {
    var tmp = this.create_s8oglw_k$($cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__50.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        switch (tmp) {
          case 0:
            this._exceptionState = 7;
            this._xhr0_0 = new XMLHttpRequest();
            var tmp_0 = this;
            tmp_0._tmp0__get_JSON__01_0 = null;
            var tmp_1 = this;
            tmp_1._tmp0_unsafeCast_0_12_0 = 'json';
            this._xhr0_0.responseType = this._tmp0_unsafeCast_0_12_0;
            this._xhr0_0.open('POST', this._$targetUrl);
            this._xhr0_0.send();
            this._state_0 = 1;
            suspendResult = await_2(this._xhr0_0, this);
            if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
              return suspendResult;
            }
            continue $sm;
          case 1:
            if (!(this._xhr0_0.status === Companion_getInstance_28()._Status_OK)) {
              var tmp_2 = this;
              tmp_2._WHEN_RESULT3 = failure(Companion_getInstance_27(), ofErrorHttpCode(Companion_getInstance_8(), this._xhr0_0.status, this._xhr0_0.statusText));
              this._state_0 = 6;
              continue $sm;
            } else {
              this._exceptionState = 4;
              var tmp_3 = this;
              var tmp_4 = this._xhr0_0.response;
              tmp_3._json5 = (!(tmp_4 == null) ? isObject(tmp_4) : false) ? tmp_4 : THROW_CCE();
              var tmp_5 = this;
              var tmp_6 = this._json5['errorCode'];
              tmp_5._errorCodeObj6 = (!(tmp_6 == null) ? isObject(tmp_6) : false) ? tmp_6 : THROW_CCE();
              var tmp_7 = this;
              var tmp_8 = this._errorCodeObj6['code'];
              var tmp_9 = (!(tmp_8 == null) ? typeof tmp_8 === 'string' : false) ? tmp_8 : THROW_CCE();
              var tmp_10 = this._errorCodeObj6['message'];
              tmp_7._errorCode7 = new ErrorCode(tmp_9, (!(tmp_10 == null) ? typeof tmp_10 === 'string' : false) ? tmp_10 : THROW_CCE());
              if (_get_isSuccess_(this._errorCode7)) {
                this._ARGUMENT9 = Companion_getInstance_27();
                this._state_0 = 2;
                suspendResult = this._$action(this._json5['data'], this);
                if (suspendResult === _get_COROUTINE_SUSPENDED_()) {
                  return suspendResult;
                }continue $sm;
              } else {
                var tmp_11 = this;
                tmp_11._WHEN_RESULT8 = failure(Companion_getInstance_27(), this._errorCode7);
                this._state_0 = 3;
                continue $sm;
              }
              Unit_getInstance();
            }

            break;
          case 2:
            var ARGUMENT = suspendResult;
            this._WHEN_RESULT8 = success(this._ARGUMENT9, ARGUMENT);
            this._state_0 = 3;
            continue $sm;
          case 3:
            this._TRY_RESULT4 = this._WHEN_RESULT8;
            this._exceptionState = 7;
            this._state_0 = 5;
            continue $sm;
          case 4:
            this._exceptionState = 7;
            var tmp_12 = this._exception_0;
            if (tmp_12 instanceof Error) {
              var e = this._exception_0;
              var tmp_13 = this;
              tmp_13._TRY_RESULT4 = failure(Companion_getInstance_27(), ofError(Companion_getInstance_8(), e));
              this._state_0 = 5;
              continue $sm;
            } else {
              {
                throw this._exception_0;
              }
            }

            break;
          case 5:
            this._exceptionState = 7;
            this._WHEN_RESULT3 = this._TRY_RESULT4;
            this._state_0 = 6;
            continue $sm;
          case 6:
            return this._WHEN_RESULT3;
          case 7:
            throw this._exception_0;
        }
      } catch ($p) {
        if (this._exceptionState === 7) {
          throw $p;
        } else {
          this._state_0 = this._exceptionState;
          this._exception_0 = $p;
        }
      }
     while (true);
  };
  _no_name_provided__50.prototype.create_s8oglw_k$ = function (completion) {
    var i = new _no_name_provided__50(this._$targetUrl, this._$action, completion);
    return i;
  };
  _no_name_provided__50.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [0]
  };
  function _no_name_provided__51(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__51.prototype.invoke_33y0ow_k$ = function (it, $cont) {
    var tmp = this.create_mgx0k4_k$(it, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__51.prototype.invoke_20e8_k$ = function (p1, $cont) {
    return this.invoke_33y0ow_k$((p1 == null ? true : p1) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__51.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          return this._it;
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__51.prototype.create_mgx0k4_k$ = function (it, completion) {
    var i = new _no_name_provided__51(completion);
    i._it = it;
    return i;
  };
  _no_name_provided__51.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function PlatformImpl(url, options) {
    Companion_getInstance_28();
    Platform.call(this);
    this._locale_0 = null;
    this._appId_0 = null;
    this._url_0 = url;
    var map = (!(options == null) ? isObject(options) : false) ? options : THROW_CCE();
    var tmp = this;
    var tmp0_safe_receiver = map['locale'];
    tmp._locale_0 = tmp0_safe_receiver == null ? null : toString_1(tmp0_safe_receiver);
    var tmp1_safe_receiver = map['appId'];
    if (tmp1_safe_receiver == null)
      null;
    else {
      var tmp$ret$0;
      $l$block: {
        {
        }
        this._appId_0 = toString_1(tmp1_safe_receiver);
        tmp$ret$0 = Unit_getInstance();
        break $l$block;
      }
      Unit_getInstance();
    }
    Unit_getInstance();
    this._set_user__7g4wqc_k$(new PlatformUserServicesImpl(this));
    this._set_app__tgr1ta_k$(new PlatformAppServicesImpl(this));
  }
  PlatformImpl.prototype._set_locale__qlpr75_k$ = function (_set___) {
    this._locale_0 = _set___;
  };
  PlatformImpl.prototype._get_locale__0_k$ = function () {
    return this._locale_0;
  };
  PlatformImpl.prototype.servicePromise_2tgilw_k$ = function (targetUrl, action) {
    return promise(_no_name_provided_$factory_46(targetUrl, action, null));
  };
  PlatformImpl.prototype.generateUrl_pqcwxr_k$ = function (path, parameters) {
    var queryString = toQueryString(this, parameters);
    var url = concatUrl(this, this._url_0, path);
    url = url + ('?_r=' + Default_getInstance().nextInt_0_k$());
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNullOrEmpty_0 = this._locale_0;
      {
      }
      tmp$ret$0 = tmp0_isNullOrEmpty_0 == null ? true : charSequenceLength(tmp0_isNullOrEmpty_0) === 0;
      break $l$block;
    }
    if (!tmp$ret$0) {
      url = url + ('' + '&_locale=' + this._locale_0);
    } else {
    }
    if (!(this._appId_0 == null)) {
      url = url + ('' + '&appId=' + this._appId_0);
    }var tmp$ret$1;
    $l$block_0: {
      tmp$ret$1 = charSequenceLength(queryString) > 0;
      break $l$block_0;
    }
    if (tmp$ret$1) {
      url = url + ('' + '&' + queryString);
    } else {
    }
    return url;
  };
  PlatformImpl.prototype.accessService = function (path, parameters) {
    var targetUrl = this.generateUrl_pqcwxr_k$(path, parameters);
    return asJSPromise(this.servicePromise_2tgilw_k$(targetUrl, _no_name_provided_$factory_47(null)));
  };
  PlatformImpl.prototype.accessService_pqcwxr_k$ = function (path, parameters) {
    return this.accessService(path, parameters);
  };
  PlatformImpl.$metadata$ = {
    simpleName: 'PlatformImpl',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_46($targetUrl, $action, resultContinuation) {
    var i = new _no_name_provided__50($targetUrl, $action, resultContinuation);
    var l = function ($cont) {
      return i.invoke_0_k$($cont);
    };
    l.$arity = 0;
    return l;
  }
  function _no_name_provided_$factory_47(resultContinuation) {
    var i = new _no_name_provided__51(resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_33y0ow_k$(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided__52(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__52.prototype.invoke_33y0ow_k$ = function (data, $cont) {
    var tmp = this.create_mgx0k4_k$(data, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__52.prototype.invoke_20e8_k$ = function (p1, $cont) {
    return this.invoke_33y0ow_k$((p1 == null ? true : p1) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__52.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          return Companion_getInstance_26().from(this._data_7);
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__52.prototype.create_mgx0k4_k$ = function (data, completion) {
    var i = new _no_name_provided__52(completion);
    i._data_7 = data;
    return i;
  };
  _no_name_provided__52.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function _no_name_provided__53(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__53.prototype.invoke_33y0ow_k$ = function (data, $cont) {
    var tmp = this.create_mgx0k4_k$(data, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__53.prototype.invoke_20e8_k$ = function (p1, $cont) {
    return this.invoke_33y0ow_k$((p1 == null ? true : p1) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__53.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          return Companion_getInstance_26().from(this._data_8);
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__53.prototype.create_mgx0k4_k$ = function (data, completion) {
    var i = new _no_name_provided__53(completion);
    i._data_8 = data;
    return i;
  };
  _no_name_provided__53.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function _no_name_provided__54(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__54.prototype.invoke_33y0ow_k$ = function (data, $cont) {
    var tmp = this.create_mgx0k4_k$(data, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__54.prototype.invoke_20e8_k$ = function (p1, $cont) {
    return this.invoke_33y0ow_k$((p1 == null ? true : p1) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__54.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          return Companion_getInstance_26().from(this._data_9);
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__54.prototype.create_mgx0k4_k$ = function (data, completion) {
    var i = new _no_name_provided__54(completion);
    i._data_9 = data;
    return i;
  };
  _no_name_provided__54.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function _no_name_provided__55(resultContinuation) {
    CoroutineImpl_0.call(this, resultContinuation);
  }
  _no_name_provided__55.prototype.invoke_33y0ow_k$ = function (it, $cont) {
    var tmp = this.create_mgx0k4_k$(it, $cont);
    tmp._result = Unit_getInstance();
    tmp._exception_0 = null;
    return tmp.doResume_0_k$();
  };
  _no_name_provided__55.prototype.invoke_20e8_k$ = function (p1, $cont) {
    return this.invoke_33y0ow_k$((p1 == null ? true : p1) ? p1 : THROW_CCE(), $cont);
  };
  _no_name_provided__55.prototype.doResume_0_k$ = function () {
    var suspendResult = this._result;
    $sm: do
      try {
        var tmp = this._state_0;
        if (tmp === 0) {
          this._exceptionState = 1;
          return Companion_getInstance_26().from(this._it_0);
        } else if (tmp === 1) {
          throw this._exception_0;
        }} catch ($p) {
        throw $p;
      }
     while (true);
  };
  _no_name_provided__55.prototype.create_mgx0k4_k$ = function (it, completion) {
    var i = new _no_name_provided__55(completion);
    i._it_0 = it;
    return i;
  };
  _no_name_provided__55.$metadata$ = {
    kind: 'class',
    interfaces: [],
    suspendArity: [1]
  };
  function PlatformUserServicesImpl(platformImpl) {
    PlatformUserServices.call(this);
    this._platformImpl_0 = platformImpl;
  }
  PlatformUserServicesImpl.prototype.deviceLogin = function (deviceId, parameters) {
    var finalParams = {};
    Object.assign(finalParams, parameters);
    finalParams['id'] = deviceId;
    var url = this._platformImpl_0.generateUrl_pqcwxr_k$('user/DeviceLogin', finalParams);
    return asJSPromise(this._platformImpl_0.servicePromise_2tgilw_k$(url, _no_name_provided_$factory_48(null)));
  };
  PlatformUserServicesImpl.prototype.deviceLogin_pqcwxr_k$ = function (deviceId, parameters) {
    return this.deviceLogin(deviceId, parameters);
  };
  PlatformUserServicesImpl.prototype.login = function (bindingId, bindingType, password, parameters) {
    var finalParams = {};
    Object.assign(finalParams, parameters);
    finalParams['id'] = bindingId;
    finalParams['type'] = bindingType;
    finalParams['password'] = password;
    var url = this._platformImpl_0.generateUrl_pqcwxr_k$('user/Login', finalParams);
    return asJSPromise(this._platformImpl_0.servicePromise_2tgilw_k$(url, _no_name_provided_$factory_49(null)));
  };
  PlatformUserServicesImpl.prototype.login_wg86f1_k$ = function (bindingId, bindingType, password, parameters) {
    return this.login(bindingId, bindingType, password, parameters);
  };
  PlatformUserServicesImpl.prototype.register = function (username, password, parameters) {
    var finalParams = {};
    Object.assign(finalParams, parameters);
    finalParams['username'] = username;
    finalParams['password'] = password;
    finalParams['login'] = 'true';
    var url = this._platformImpl_0.generateUrl_pqcwxr_k$('user/Register', finalParams);
    return asJSPromise(this._platformImpl_0.servicePromise_2tgilw_k$(url, _no_name_provided_$factory_50(null)));
  };
  PlatformUserServicesImpl.prototype.register_19pqyq_k$ = function (username, password, parameters) {
    return this.register(username, password, parameters);
  };
  PlatformUserServicesImpl.prototype.accessLoginService = function (path, parameters) {
    var targetUrl = this._platformImpl_0.generateUrl_pqcwxr_k$(path, parameters);
    return asJSPromise(this._platformImpl_0.servicePromise_2tgilw_k$(targetUrl, _no_name_provided_$factory_51(null)));
  };
  PlatformUserServicesImpl.$metadata$ = {
    simpleName: 'PlatformUserServicesImpl',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_48(resultContinuation) {
    var i = new _no_name_provided__52(resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_33y0ow_k$(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_49(resultContinuation) {
    var i = new _no_name_provided__53(resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_33y0ow_k$(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_50(resultContinuation) {
    var i = new _no_name_provided__54(resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_33y0ow_k$(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function _no_name_provided_$factory_51(resultContinuation) {
    var i = new _no_name_provided__55(resultContinuation);
    var l = function (p1, $cont) {
      return i.invoke_33y0ow_k$(p1, $cont);
    };
    l.$arity = 1;
    return l;
  }
  function StatClient() {
  }
  StatClient.$metadata$ = {
    simpleName: 'StatClient',
    kind: 'class',
    interfaces: []
  };
  function createStatClient(url, storage) {
    return new StatClientImpl(url, storage);
  }
  function concatParams($this, parameters) {
    var parameterNames = Object.getOwnPropertyNames(parameters);
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = parameterNames.length === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      return '';
    } else {
    }
    var result = '';
    var i = 0;
    while (i < parameterNames.length) {
      if (!(i === 0)) {
        result = result + '&';
      }var key = parameterNames[i];
      var value = '' + parameters[key];
      result = result + ('' + key + '=' + value);
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      Unit_getInstance();
    }
    result = encodeURI(result);
    return result;
  }
  function toPath($this, category, templateId) {
    return '' + '/counter/' + category + '/' + templateId + '/Trigger';
  }
  function toSubUrl($this, category, templateId, parameters) {
    var query = concatParams($this, parameters);
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(query) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = toPath($this, category, templateId);
    } else {
      {
        tmp = toPath($this, category, templateId) + '?' + query;
      }
    }
    var subUrl = tmp;
    return subUrl;
  }
  function toKey($this, category, templateId, parameters) {
    var query = concatParams($this, parameters);
    var keyPrefix = '' + 'c.' + category + '/' + templateId;
    var tmp;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = charSequenceLength(query) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      tmp = keyPrefix;
    } else {
      {
        tmp = '' + keyPrefix + '?' + query;
      }
    }
    return tmp;
  }
  function accessSubUrl($this, subUrl) {
    accessSubUrl0$default($this, subUrl, false, _no_name_provided_$factory_52($this, subUrl), 4, null);
  }
  function scheduleRetryAccessSubUrl($this, retrySerialNo, subUrl) {
    if (retrySerialNo > $this._maxRetryCount) {
      console.error('' + 'max retry count(' + $this._maxRetryCount + ") reach,but still can't access " + subUrl);
      return Unit_getInstance();
    }var delayIndex = retrySerialNo - 1 | 0;
    if (delayIndex >= $this._retryDelays.length) {
      delayIndex = $this._retryDelays.length - 1 | 0;
    }var delay = $this._retryDelays[delayIndex];
    console.log('' + 'schedule retry access, subUrl=' + subUrl + ', delay=' + delay);
    setTimeout(_no_name_provided_$factory_53($this, retrySerialNo, subUrl), delay);
  }
  function retryAccessSubUrl($this, retrySerialNo, subUrl) {
    accessSubUrl0($this, subUrl, true, _no_name_provided_$factory_54($this, retrySerialNo, subUrl));
  }
  function accessSubUrl0($this, subUrl, forTry, errorHandler) {
    var finalUrl = $this._url_1 + subUrl;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', finalUrl);
    xhr.onerror = _no_name_provided_$factory_55(finalUrl, errorHandler);
    if (forTry) {
      xhr.onloadend = _no_name_provided_$factory_56(xhr, subUrl);
    }xhr.send();
  }
  function accessSubUrl0$default($this, subUrl, forTry, errorHandler, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      forTry = false;
    if (!(($mask0 & 8) === 0))
      errorHandler = null;
    return accessSubUrl0($this, subUrl, forTry, errorHandler);
  }
  function trigger0($this, category, templateId, delta_0, parameters) {
    var newParameters = Object.assign({}, parameters);
    parameters['_delta'] = delta_0;
    var subUrl = toSubUrl($this, category, templateId, newParameters);
    accessSubUrl($this, subUrl);
  }
  function _no_name_provided__56(this$0, $subUrl) {
    this._this$0_12 = this$0;
    this._$subUrl = $subUrl;
  }
  _no_name_provided__56.prototype.invoke_sv8swh_k$ = function () {
    scheduleRetryAccessSubUrl(this._this$0_12, 1, this._$subUrl);
  };
  _no_name_provided__56.prototype.invoke_0_k$ = function () {
    this.invoke_sv8swh_k$();
    return Unit_getInstance();
  };
  _no_name_provided__56.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__57(this$0, $retrySerialNo, $subUrl) {
    this._this$0_13 = this$0;
    this._$retrySerialNo = $retrySerialNo;
    this._$subUrl_0 = $subUrl;
  }
  _no_name_provided__57.prototype.invoke_sv8swh_k$ = function () {
    retryAccessSubUrl(this._this$0_13, this._$retrySerialNo, this._$subUrl_0);
  };
  _no_name_provided__57.prototype.invoke_0_k$ = function () {
    this.invoke_sv8swh_k$();
    return Unit_getInstance();
  };
  _no_name_provided__57.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__58(this$0, $retrySerialNo, $subUrl) {
    this._this$0_14 = this$0;
    this._$retrySerialNo_0 = $retrySerialNo;
    this._$subUrl_1 = $subUrl;
  }
  _no_name_provided__58.prototype.invoke_sv8swh_k$ = function () {
    scheduleRetryAccessSubUrl(this._this$0_14, this._$retrySerialNo_0 + 1 | 0, this._$subUrl_1);
  };
  _no_name_provided__58.prototype.invoke_0_k$ = function () {
    this.invoke_sv8swh_k$();
    return Unit_getInstance();
  };
  _no_name_provided__58.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__59($finalUrl, $errorHandler) {
    this._$finalUrl = $finalUrl;
    this._$errorHandler = $errorHandler;
  }
  _no_name_provided__59.prototype.invoke_5tgw3j_k$ = function (it) {
    console.error('' + 'access ' + this._$finalUrl + ' fail with error', it);
    var tmp0_safe_receiver = this._$errorHandler;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver();
  };
  _no_name_provided__59.prototype.invoke_20e8_k$ = function (p1) {
    return this.invoke_5tgw3j_k$(p1 instanceof Event ? p1 : THROW_CCE());
  };
  _no_name_provided__59.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided__60($xhr, $subUrl) {
    this._$xhr_0 = $xhr;
    this._$subUrl_2 = $subUrl;
  }
  _no_name_provided__60.prototype.invoke_xfv2uo_k$ = function (it) {
    if (this._$xhr_0.status === 200) {
      console.log('' + 'try success for ' + this._$subUrl_2);
    }};
  _no_name_provided__60.prototype.invoke_20e8_k$ = function (p1) {
    this.invoke_xfv2uo_k$(p1 instanceof Event ? p1 : THROW_CCE());
    return Unit_getInstance();
  };
  _no_name_provided__60.$metadata$ = {
    kind: 'class',
    interfaces: []
  };
  function StatClientImpl(url, storage) {
    StatClient.call(this);
    this._storage_0 = storage;
    var tmp = this;
    var tmp$ret$0;
    $l$block: {
      tmp$ret$0 = new Int32Array([5000, 10000, 30000]);
      break $l$block;
    }
    tmp._retryDelays = tmp$ret$0;
    this._maxRetryCount = 3;
    var tmp_0 = this;
    var tmp_1;
    if (endsWith$default(url, '/', false, 2, null)) {
      var tmp$ret$2;
      $l$block_1: {
        var tmp0_substring_0 = url.length - 1 | 0;
        var tmp$ret$1;
        $l$block_0: {
          tmp$ret$1 = url;
          break $l$block_0;
        }
        tmp$ret$2 = tmp$ret$1.substring(0, tmp0_substring_0);
        break $l$block_1;
      }
      tmp_1 = tmp$ret$2;
    } else {
      {
        tmp_1 = url;
      }
    }
    tmp_0._url_1 = tmp_1;
  }
  StatClientImpl.prototype.triggerIfFirstTime = function (category, templateId, parameters) {
    var subUrl = toSubUrl(this, category, templateId, parameters);
    var key = toKey(this, category, templateId, parameters);
    var tmp$ret$0;
    $l$block: {
      var tmp0_isNullOrEmpty_0 = this._storage_0.getValue(key);
      {
      }
      tmp$ret$0 = tmp0_isNullOrEmpty_0 == null ? true : charSequenceLength(tmp0_isNullOrEmpty_0) === 0;
      break $l$block;
    }
    if (tmp$ret$0) {
      this._storage_0.setValue(key, '1');
      accessSubUrl(this, subUrl);
    } else {
    }
  };
  StatClientImpl.prototype.trigger = function (category, templateId, parameters) {
    trigger0(this, category, templateId, 1, parameters);
  };
  StatClientImpl.prototype.triggerDelta = function (category, templateId, delta_0, parameters) {
    trigger0(this, category, templateId, delta_0, parameters);
  };
  StatClientImpl.$metadata$ = {
    simpleName: 'StatClientImpl',
    kind: 'class',
    interfaces: []
  };
  function _no_name_provided_$factory_52(this$0, $subUrl) {
    var i = new _no_name_provided__56(this$0, $subUrl);
    return function () {
      i.invoke_sv8swh_k$();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_53(this$0, $retrySerialNo, $subUrl) {
    var i = new _no_name_provided__57(this$0, $retrySerialNo, $subUrl);
    return function () {
      i.invoke_sv8swh_k$();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_54(this$0, $retrySerialNo, $subUrl) {
    var i = new _no_name_provided__58(this$0, $retrySerialNo, $subUrl);
    return function () {
      i.invoke_sv8swh_k$();
      return Unit_getInstance();
    };
  }
  function _no_name_provided_$factory_55($finalUrl, $errorHandler) {
    var i = new _no_name_provided__59($finalUrl, $errorHandler);
    return function (p1) {
      return i.invoke_5tgw3j_k$(p1);
    };
  }
  function _no_name_provided_$factory_56($xhr, $subUrl) {
    var i = new _no_name_provided__60($xhr, $subUrl);
    return function (p1) {
      i.invoke_xfv2uo_k$(p1);
      return Unit_getInstance();
    };
  }
  AbstractCoroutineContextElement.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  InternalHashCodeMap.prototype.createJsMap_0_k$ = InternalMap.prototype.createJsMap_0_k$;
  CoroutineDispatcher.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  EventLoop.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  JobSupport.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  JobSupport.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  JobImpl.prototype.invokeOnCompletion$default_n4h7x8_k$ = Job.prototype.invokeOnCompletion$default_n4h7x8_k$;
  JobImpl.prototype.get_9uvjra_k$ = Element_0.prototype.get_9uvjra_k$;
  UnconfinedEventLoop.prototype.get_9uvjra_k$ = ContinuationInterceptor.prototype.get_9uvjra_k$;
  output = output$init$();
  functionClasses = functionClasses$init$();
  REPLACEMENT_BYTE_SEQUENCE = REPLACEMENT_BYTE_SEQUENCE$init$();
  buf = new ArrayBuffer(8);
  bufFloat64 = bufFloat64$init$();
  bufInt32 = bufInt32$init$();
  lowIndex = lowIndex$init$();
  highIndex = 1 - lowIndex | 0;
  ZERO = fromInt(0);
  ONE = fromInt(1);
  NEG_ONE = fromInt(-1);
  MAX_VALUE = new Long(-1, 2147483647);
  MIN_VALUE = new Long(0, -2147483648);
  TWO_PWR_24_ = fromInt(16777216);
  propertyRefClassMetadataCache = propertyRefClassMetadataCache$init$();
  COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
  COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
  COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
  TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
  SEALED = new Symbol('SEALED');
  EMPTY_NEW = new Empty(false);
  EMPTY_ACTIVE = new Empty(true);
  UNDEFINED = new Symbol('UNDEFINED');
  REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
  counter = 0;
  DEBUG = false;
  MessageRangeSize = 10000;
  var $kotlinx = _.kotlinx || (_.kotlinx = {});
  var $kotlinx$atomicfu = $kotlinx.atomicfu || ($kotlinx.atomicfu = {});
  $kotlinx$atomicfu.atomic$ref$ = atomic_2;
  $kotlinx$atomicfu.atomic$boolean$ = atomic_4;
  $kotlinx$atomicfu.atomic$int$ = atomic_6;
  $kotlinx$atomicfu.atomic$long$ = atomic_8;
  var $hagice = _.hagice || (_.hagice = {});
  $hagice.CocosStorage = CocosStorage;
  $hagice.DataStorage = DataStorage;
  $hagice.ECResult = ECResult;
  $hagice.ErrorCode = ErrorCode;
  $hagice.H5DataStorage = H5DataStorage;
  $hagice.Int64 = Int64;
  Object.defineProperty($hagice, 'Int64_Zero', {
    configurable: true,
    get: _get_Int64_Zero_
  });
  $hagice.int64 = int64;
  $hagice.MemoryDataStorage = MemoryDataStorage;
  var $hagice$client = $hagice.client || ($hagice.client = {});
  $hagice$client.Client = Client;
  $hagice$client.ClientModule = ClientModule;
  $hagice$client.ClientStatus = ClientStatus;
  $hagice$client.LoadJob = LoadJob;
  $hagice$client.MessageHandler = MessageHandler;
  $hagice$client.ResponseWaiter = ResponseWaiter;
  Object.defineProperty($hagice$client, 'MessageRangeSize', {
    configurable: true,
    get: _get_MessageRangeSize_
  });
  var $hagice$client$role = $hagice$client.role || ($hagice$client.role = {});
  $hagice$client$role.Role = Role;
  $hagice$client$role.RoleInfo = RoleInfo;
  $hagice$client$role.RoleModule = RoleModule;
  var $hagice$io = $hagice.io || ($hagice.io = {});
  $hagice$io.ByteBuf = ByteBuf;
  $hagice$io.ByteBufAllocator = ByteBufAllocator;
  $hagice$io.ByteOrder = ByteOrder;
  $hagice$io.DataReader = DataReader;
  $hagice$io.DataWriter = DataWriter;
  var $hagice$logger = $hagice.logger || ($hagice.logger = {});
  $hagice$logger.Logger = Logger;
  var $hagice$net = $hagice.net || ($hagice.net = {});
  $hagice$net.Connection = Connection;
  $hagice$net.createConnection = createConnection;
  $hagice$net.ConnectionHandler = ConnectionHandler;
  $hagice$net.ConnectionStatus = ConnectionStatus;
  $hagice$net.HttpConnection = HttpConnection;
  $hagice$net.InetEndpoint = InetEndpoint;
  $hagice$net.InetEndpointCandidate = InetEndpointCandidate;
  $hagice$net.MessageConsts = MessageConsts;
  $hagice$net.ReadableMessage = ReadableMessage;
  $hagice$net.WritableMessage = WritableMessage;
  $hagice$net.createWritableMessage = createWritableMessage;
  var $hagice$platform = $hagice.platform || ($hagice.platform = {});
  $hagice$platform.AppServer = AppServer;
  $hagice$platform.AppServerList = AppServerList;
  $hagice$platform.AppServerStatus = AppServerStatus;
  $hagice$platform.AppServiceAlias = AppServiceAlias;
  $hagice$platform.LoginData = LoginData;
  $hagice$platform.Platform = Platform;
  $hagice$platform.PlatformAppServices = PlatformAppServices;
  $hagice$platform.PlatformResponse = PlatformResponse;
  $hagice$platform.PlatformUserServices = PlatformUserServices;
  $hagice$platform.createPlatform = createPlatform;
  var $hagice$stat = $hagice.stat || ($hagice.stat = {});
  $hagice$stat.StatClient = StatClient;
  $hagice$stat.createStatClient = createStatClient;
  return _;
}));

//# sourceMappingURL=hagice-client-js.js.map