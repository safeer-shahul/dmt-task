import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Task, Stats, TaskDetailResponse } from '../models/task.model';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private readonly DATA_PATH = 'assets/data';
    private readonly API_DELAY = 500;

    constructor(private http: HttpClient) { }

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.DATA_PATH}/tasks.json`)
            .pipe(delay(this.API_DELAY));
    }

    getStats(): Observable<Stats[]> {
        return this.http.get<Stats[]>(`${this.DATA_PATH}/stats.json`)
            .pipe(delay(this.API_DELAY));
    }

    getTaskDetails(taskId: string): Observable<TaskDetailResponse> {
        return this.http.get<TaskDetailResponse>(`${this.DATA_PATH}/task-details.json`)
            .pipe(delay(this.API_DELAY));
    }
}
