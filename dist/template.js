"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EVertexType = void 0;
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
