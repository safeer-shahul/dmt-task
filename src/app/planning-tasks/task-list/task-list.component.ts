import { Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
    activeTab: string = 'Active Requests';

    // Stats Data
    stats = [
        { title: 'My Request', count: 20, icon: 'user', color: '#1890FF', bg: '#E6F7FF' },
        { title: 'Ongoing', count: 15, icon: 'loader', color: '#FAAD14', bg: '#FFF7E6' },
        { title: 'Completed', count: '05', icon: 'check-circle', color: '#52C41A', bg: '#F6FFED' },
    ];

    // Pagination
    currentPage = 1;
    pageSize = 10;
    pageSizeOptions = [5, 10, 20, 50];
    displayedTransactions: any[] = [];
    totalPages = 1;

    // Table Data
    transactions = [
        {
            id: 'INT-LEXP-RLE-202602040003',
            status: 'New',
            statusColor: 'green',
            priority: '',
            createdOn: '22 Jan 2022, 01:00PM',
            objective: 'Approval',
            type: 'Residential Land Expansion'
        },
        {
            id: 'INT-LPM-RLM-202602040001',
            status: 'Processing',
            statusColor: 'blue',
            priority: '',
            createdOn: '20 Jan 2022, 08:30AM',
            objective: 'Approval',
            type: 'Residential Land Parcel Merger'
        },
        {
            id: 'INT-ANP-SERV-202602030003',
            status: 'New',
            statusColor: 'green',
            priority: 'High',
            createdOn: '24 Jan 2022, 10:20AM',
            objective: 'Approval',
            type: 'Allocation of a Service Utility Plot'
        },
        {
            id: 'INT-ATL-TSF-202602030002',
            status: 'New',
            statusColor: 'green',
            priority: 'High',
            createdOn: '26 Jan 2022, 04:25PM',
            objective: 'Decision',
            type: 'Planning Approval for Establishing Temporary Service Facility Land'
        },
        {
            id: 'INT-ATPB-DPB-202602030001',
            status: 'Processing',
            statusColor: 'blue',
            priority: 'High',
            createdOn: '18 Jan 2022, 11:00PM',
            objective: 'Decision',
            type: 'Development Project Boundaries'
        },
        {
            id: 'VVIP-202602020011',
            status: 'New',
            statusColor: 'green',
            priority: 'Critical/VIP',
            createdOn: '18 Jan 2022, 11:00PM',
            objective: 'Approval',
            type: 'Land Subdivision'
        },
        {
            id: 'VVIP-202602020010',
            status: 'New',
            statusColor: 'green',
            priority: 'Critical/VIP',
            createdOn: '18 Jan 2022, 11:00PM',
            objective: 'Decision',
            type: 'Land Subdivision'
        },
        // More mock data
        {
            id: 'INT-LEXP-RLE-202602040004',
            status: 'Processing',
            statusColor: 'blue',
            priority: 'High',
            createdOn: '22 Jan 2022, 02:00PM',
            objective: 'Approval',
            type: 'Residential Land Expansion'
        },
        {
            id: 'INT-LPM-RLM-202602040005',
            status: 'New',
            statusColor: 'green',
            priority: '',
            createdOn: '20 Jan 2022, 09:30AM',
            objective: 'Decision',
            type: 'Residential Land Parcel Merger'
        },
        {
            id: 'INT-ANP-SERV-202602030006',
            status: 'Processing',
            statusColor: 'blue',
            priority: '',
            createdOn: '24 Jan 2022, 11:20AM',
            objective: 'Approval',
            type: 'Allocation of a Service Utility Plot'
        },
        {
            id: 'INT-ATL-TSF-202602030007',
            status: 'New',
            statusColor: 'green',
            priority: 'High',
            createdOn: '26 Jan 2022, 05:25PM',
            objective: 'Decision',
            type: 'Planning Approval'
        },
        {
            id: 'INT-ATPB-DPB-202602030008',
            status: 'Processing',
            statusColor: 'blue',
            priority: '',
            createdOn: '18 Jan 2022, 11:45PM',
            objective: 'Decision',
            type: 'Development Project Boundaries'
        },
        {
            id: 'VVIP-202602020012',
            status: 'New',
            statusColor: 'green',
            priority: 'Critical/VIP',
            createdOn: '19 Jan 2022, 10:00AM',
            objective: 'Approval',
            type: 'Land Subdivision'
        },
        {
            id: 'VVIP-202602020013',
            status: 'Processing',
            statusColor: 'blue',
            priority: '',
            createdOn: '19 Jan 2022, 12:00PM',
            objective: 'Decision',
            type: 'Commercial Land'
        },
        {
            id: 'INT-LEXP-RLE-202602040014',
            status: 'New',
            statusColor: 'green',
            priority: 'High',
            createdOn: '22 Jan 2022, 03:00PM',
            objective: 'Approval',
            type: 'Residential Land Expansion'
        }
    ];

    // Sorting
    sortColumn: string = 'createdOn'; // Default sort column
    sortOrder: 'asc' | 'desc' = 'desc'; // Default sort order

    ngOnInit() {
        this.sortTransactions();
        this.updateDisplayedTransactions();
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
