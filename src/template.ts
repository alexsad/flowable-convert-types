export enum EVertexType {
    START = 'StartNoneEvent',
    END = 'EndNoneEvent',
    EXCLUSIVE_GATEWAY = 'ExclusiveGateway',
    USER_TASK = 'UserTask',
    SERVICE_TASK = 'ServiceTask',
    SCRIPT_TASK = 'ScriptTask',
    SEND_TASK = 'SendTask',
    SEQUENCE_FLOW = 'SequenceFlow',
}

export enum ERequestMethodType {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    BATCH = "BATCH",
    DELETE = "DELETE",
}

export interface IBounds {
    lowerRight: { x: number, y: number },
    upperLeft: { x: number, y: number },
}

export interface IStencil {
    id: string,
}

export interface IResourceReference {
    resourceId: string,
}

export type TOperationTypes = "mail" | "expression" | "delegateExpression" | "html"

export interface ISequenceFlowNodeProperties {
    name?: string,
    prototypeId: string,
    nodeType: EVertexType,
    conditionExpression?: string,
}

export interface INodeProperties {
    name?: string,
    documentation?: string,
    processId?: string,
    prototypeId?: string,
    nodeType: EVertexType,
    overrideId?: string,
    taskId?: string,
    taskCount?: number,
    sendTaskConfig?:{
        operation?: TOperationTypes,
        target?:string,
        subject?:string,
        text?:string,
    },
    serviceTaskConfig?: {
        operation?: TOperationTypes,
        uri?: string,
        method?: ERequestMethodType,
        responseVariableName?: string,
        saveResponseVariableAsJson?: boolean,
    },
    scriptTaskConfig?: {
        scriptFormat: "javascript" | "groovy" | "juel",
        resultVariable: string,
        scriptContent: string,
    },
    userTaskAssignment?: {
        assignment: {
            assignee?: string,
            type: "idm",
            candidateGroups: string[],
            candidateUsers: string[],
        },
    }
}

export interface IChildShape {
    resourceId: string,
    stencil: IStencil,
    properties: INodeProperties | ISequenceFlowNodeProperties,
    bounds?: IBounds | {},
    outgoing?: IResourceReference[],
    childShapes?: IChildShape[],
    dockers?: Array<{ x: number, y: number }>,
}

export interface IFlowableBpmnJson {
    resourceId: string,
    properties: {
        processId?: string,
        name?: string,
        documentation?:string,
    },
    stencil: IStencil,
    childShapes: IChildShape[],
    bounds?: IBounds,
}