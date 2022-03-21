/**
 * @fileoverview gRPC-Web generated client stub for OrderTest
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.OrderTest = require('./OrderTest_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.OrderTest.OrderTestServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.OrderTest.OrderTestServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.OrderTest.IdsModel,
 *   !proto.OrderTest.BoolResult>}
 */
const methodDescriptor_OrderTestService_RunTests = new grpc.web.MethodDescriptor(
  '/OrderTest.OrderTestService/RunTests',
  grpc.web.MethodType.UNARY,
  proto.OrderTest.IdsModel,
  proto.OrderTest.BoolResult,
  /**
   * @param {!proto.OrderTest.IdsModel} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.OrderTest.BoolResult.deserializeBinary
);


/**
 * @param {!proto.OrderTest.IdsModel} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.OrderTest.BoolResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.OrderTest.BoolResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.OrderTest.OrderTestServiceClient.prototype.runTests =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/OrderTest.OrderTestService/RunTests',
      request,
      metadata || {},
      methodDescriptor_OrderTestService_RunTests,
      callback);
};


/**
 * @param {!proto.OrderTest.IdsModel} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.OrderTest.BoolResult>}
 *     Promise that resolves to the response
 */
proto.OrderTest.OrderTestServicePromiseClient.prototype.runTests =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/OrderTest.OrderTestService/RunTests',
      request,
      metadata || {},
      methodDescriptor_OrderTestService_RunTests);
};


module.exports = proto.OrderTest;

