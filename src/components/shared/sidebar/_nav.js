export default {
	items: [
		{
			name: 'Dashboard',
			url: '/dashboard',
			icon: 'icon-speedometer'
		}, {
			title: true,
			name: 'Threads',
			wrapper: {
				element: 'span',
				attributes: {}
			},
			class: ''
		},
		{
			name: 'All Threads',
			url: '/threads',
			icon: 'icon-list'
		},
		{
			name: 'Your Turn',
			url: '/threads/your-turn',
			icon: 'icon-pencil'
		},
		{
			name: 'Their Turn',
			url: '/threads/their-turn',
			icon: 'icon-check'
		},
		{
			name: 'Archived',
			url: '/threads/archived',
			icon: 'icon-drawer'
		},
		{
			name: 'Queued',
			url: '/threads/queued',
			icon: 'icon-calendar'
		}, {
			title: true,
			name: 'Manage',
			wrapper: {
				element: 'span',
				attributes: {}
			},
			class: ''
		}, {
			name: 'Characters',
			url: '/manage-characters',
			icon: 'icon-people'
		}, {
			name: 'Tools',
			url: '/tools',
			icon: 'icon-wrench'
		}, {
			name: 'Settings',
			url: '/settings',
			icon: 'icon-settings'
		}
	]
};
