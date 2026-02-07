import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    stats = [
        { label: 'Total Requests', value: '1,247', icon: 'user', color: 'blue' },
        { label: 'Active Users', value: '89', icon: 'users', color: 'green' },
        { label: 'Avg. Processing Time', value: '12.4 Days', icon: 'clock', color: 'purple' },
        { label: 'Completion Rate', value: '84.7%', icon: 'check-circle', color: 'cyan' }
    ];

    modules = [
        {
            name: 'Planning Module',
            description: 'Manage planning requests, workflows and approvals',
            icon: 'file-text',
            stats: [
                { label: 'Active', value: 342, type: 'active' },
                { label: 'Pending', value: 89, type: 'pending' },
                { label: 'Completed', value: 342, type: 'completed' }
            ],
            route: '/planning-tasks'
        },


        {
            name: 'MECS Module',
            description: 'External entity integration and communication system.',
            icon: 'setting',
            stats: [
                { label: 'Active', value: 12, type: 'active' },
                { label: 'Pending', value: 284, type: 'pending' },
                { label: 'Completed', value: 7, type: 'completed' }
            ]
        },
        {
            name: 'EPLS Module',
            description: 'Create survey and gather public feedback.',
            icon: 'folder',
            stats: [
                { label: 'Active', value: 12, type: 'active' },
                { label: 'Pending', value: 1043, type: 'pending' },
                { label: 'Completed', value: 2, type: 'completed' }
            ]
        },
        {
            name: 'Analytics & Reports',
            description: 'Insights, metrics and performance reports.',
            icon: 'pie-chart',
            isGeneric: true,
            stats: [
                { label: 'Reports', value: 45, type: 'generic' },
                { label: 'Dashboards', value: 8, type: 'generic' },
                { label: 'Insights', value: 186, type: 'generic' }
            ]
        }
    ];
}
