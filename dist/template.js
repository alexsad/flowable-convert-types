"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERequestMethodType = exports.EVertexType = void 0;
var EVertexType;
(function (EVertexType) {
    EVertexType["START"] = "StartNoneEvent";
    EVertexType["END"] = "EndNoneEvent";
    EVertexType["EXCLUSIVE_GATEWAY"] = "ExclusiveGateway";
    EVertexType["USER_TASK"] = "UserTask";
    EVertexType["SERVICE_TASK"] = "ServiceTask";
    EVertexType["SCRIPT_TASK"] = "ScriptTask";
    EVertexType["SEND_TASK"] = "SendTask";
    EVertexType["SEQUENCE_FLOW"] = "SequenceFlow";
})(EVertexType || (exports.EVertexType = EVertexType = {}));
var ERequestMethodType;
(function (ERequestMethodType) {
    ERequestMethodType[ERequestMethodType["GET"] = 0] = "GET";
    ERequestMethodType[ERequestMethodType["POST"] = 1] = "POST";
    ERequestMethodType[ERequestMethodType["PUT"] = 2] = "PUT";
    ERequestMethodType[ERequestMethodType["BATCH"] = 3] = "BATCH";
    ERequestMethodType[ERequestMethodType["DELETE"] = 4] = "DELETE";
})(ERequestMethodType || (exports.ERequestMethodType = ERequestMethodType = {}));
