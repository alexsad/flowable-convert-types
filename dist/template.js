"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENavigationMode = exports.ERequestMethodType = exports.EVertexType = void 0;
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
    ERequestMethodType["GET"] = "GET";
    ERequestMethodType["POST"] = "POST";
    ERequestMethodType["PUT"] = "PUT";
    ERequestMethodType["BATCH"] = "BATCH";
    ERequestMethodType["DELETE"] = "DELETE";
})(ERequestMethodType || (exports.ERequestMethodType = ERequestMethodType = {}));
var ENavigationMode;
(function (ENavigationMode) {
    ENavigationMode["SELF"] = "self";
    ENavigationMode["EXTERNAL"] = "external";
    ENavigationMode["EMBEDDED"] = "embedded";
})(ENavigationMode || (exports.ENavigationMode = ENavigationMode = {}));
