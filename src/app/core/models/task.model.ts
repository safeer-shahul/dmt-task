export interface Task {
    id: string;
    status: string;
    statusColor: string;
    priority: string;
    createdOn: string;
    objective: string;
    type: string;
}

export interface Stats {
    title: string;
    count: number | string;
    icon: string;
    color: string;
    bg: string;
}

export interface Step {
    label: string;
    status: string;
    icon: string;
}

export interface TaskDetails {
    areaType: string;
    landType: string;
    initiatedBy: string;
    approvedBy: string;
    planningStatus: string;
    temporalStatus: string;
    constructionStatus: string;
    oldPlotArea: string;
    newPlotArea: string;
}

export interface TaskDetailResponse {
    steps: Step[];
    details: TaskDetails;
    assignees: string[];
}
