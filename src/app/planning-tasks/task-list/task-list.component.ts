import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { Task, Stats } from '../../core/models/task.model';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    activeTab: string = 'Active Requests';
    loading: boolean = false;

    stats: Stats[] = [];
    transactions: Task[] = [];

    currentPage = 1;
    pageSize = 10;
    pageSizeOptions = [5, 10, 20, 50];
    displayedTransactions: any[] = [];
    totalPages = 1;

    // Sorting
    sortColumn: string = 'createdOn'; // Default sort column
    sortOrder: 'asc' | 'desc' = 'desc'; // Default sort order

    constructor(private taskService: TaskService) { }

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.loading = true;

        this.taskService.getStats().subscribe({
            next: (stats) => {
                this.stats = stats;
            },
            error: (error) => {
                console.error('Error loading stats:', error);
                this.loading = false;
            }
        });

        this.taskService.getTasks().subscribe({
            next: (tasks) => {
                this.transactions = tasks;
                this.sortTransactions();
                this.updateDisplayedTransactions();
                this.loading = false;
            },
            error: (error) => {
                console.error('Error loading tasks:', error);
                this.loading = false;
            }
        });
    }

    setActiveTab(tab: string) {
        this.activeTab = tab;
        // Optionally filter transactions based on tab
    }

    // Pagination Methods
    updateDisplayedTransactions() {
        this.totalPages = Math.ceil(this.transactions.length / this.pageSize);
        const startIndex = (this.currentPage - 1) * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.displayedTransactions = this.transactions.slice(startIndex, endIndex);
    }

    onPageChange(page: number) {
        if (page >= 1 && page <= this.totalPages) {
            this.currentPage = page;
            this.updateDisplayedTransactions();
        }
    }

    onPageSizeChange(size: number) {
        this.pageSize = size;
        this.currentPage = 1;
        this.updateDisplayedTransactions();
    }

    getPages(): number[] {
        const pages = [];
        // Simple pagination for now: show all pages or limited window
        // For < 7 pages show all
        if (this.totalPages <= 7) {
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
        } else {
            // Logic for ellipsis can be added here, for now simpler approach
            for (let i = 1; i <= this.totalPages; i++) {
                pages.push(i);
            }
        }
        return pages;
    }

    // Sorting Logic
    toggleSort(column: string) {
        if (this.sortColumn === column) {
            this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortColumn = column;
            this.sortOrder = 'desc'; // Default to desc for new column
        }
        this.sortTransactions();
        this.updateDisplayedTransactions();
    }

    sortTransactions() {
        this.transactions.sort((a, b) => {
            const dateA = this.parseDate(a.createdOn);
            const dateB = this.parseDate(b.createdOn);

            if (this.sortOrder === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        });
    }

    parseDate(dateString: string): number {
        // Format: "22 Jan 2022, 01:00PM"
        // Removing comma and splitting
        const cleanString = dateString.replace(',', '');
        const parts = cleanString.split(' ');

        const day = parseInt(parts[0], 10);
        const monthStr = parts[1];
        const year = parseInt(parts[2], 10);
        const time = parts[3];

        const months: { [key: string]: number } = {
            'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
            'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
        };

        const month = months[monthStr];

        // Parse Time (01:00PM)
        let hours = parseInt(time.substring(0, 2), 10);
        const minutes = parseInt(time.substring(3, 5), 10);
        const meridiem = time.substring(5, 7);

        if (meridiem === 'PM' && hours !== 12) {
            hours += 12;
        } else if (meridiem === 'AM' && hours === 12) {
            hours = 0;
        }

        return new Date(year, month, day, hours, minutes).getTime();
    }
}
