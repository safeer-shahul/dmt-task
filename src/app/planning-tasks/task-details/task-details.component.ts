import { Component, HostListener, OnInit } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { Step, TaskDetails } from '../../core/models/task.model';

@Component({
    selector: 'app-task-details',
    templateUrl: './task-details.component.html',
    styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
    activeTab: string = 'Transaction - Process';
    loading: boolean = false;

    steps: Step[] = [];
    details: TaskDetails | null = null;
    assignees: string[] = [];
    selectedAssignee: string | null = null;

    isExpanded: boolean = false;
    isFullScreen: boolean = false;

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.loadTaskDetails();
    }

    loadTaskDetails() {
        this.loading = true;
        this.taskService.getTaskDetails('dummy-id').subscribe({
            next: (data) => {
                this.steps = data.steps;
                this.details = data.details;
                this.assignees = data.assignees;
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading task details:', error);
                this.loading = false;
            }
        });
    }

    toggleExpand() {
        this.isExpanded = !this.isExpanded;
    }

    toggleFullScreen() {
        this.isFullScreen = !this.isFullScreen;
    }

    // Resizing Logic
    rightPanelWidth: number = 45; // Default percentage width
    isResizing: boolean = false;

    startResizing(event: MouseEvent) {
        this.isResizing = true;
        event.preventDefault(); // Prevent text selection
    }

    @HostListener('window:mousemove', ['$event'])
    onMouseMove(event: MouseEvent) {
        if (!this.isResizing) return;

        // Calculate new width percentage based on mouse position
        const windowWidth = window.innerWidth;
        const newWidth = ((windowWidth - event.clientX) / windowWidth) * 100;

        // Set limits (e.g., minimum 20%, maximum 80%)
        if (newWidth > 20 && newWidth < 80) {
            this.rightPanelWidth = newWidth;
        }
    }

    @HostListener('window:mouseup')
    stopResizing() {
        this.isResizing = false;
    }
}
