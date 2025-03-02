import {
    IconCalendarMonth,
    IconLayoutDashboard,
    IconLayoutKanban,
    IconSettings,
    IconStopwatch
} from '@tabler/icons-react'

import { DASHBOARD_PAGES } from '@/config/pages-url.config'
import { SidebarMenuType } from './SidebarMenuType'

export const SidebarMenuData: SidebarMenuType[] = [
    {
        icon: IconLayoutDashboard,
        link: DASHBOARD_PAGES.HOME,
        name: 'Dashboard'
    },
    {
        icon: IconLayoutKanban,
        link: DASHBOARD_PAGES.TASKS,
        name: 'Tasks'
    },
    {
        icon: IconStopwatch,
        link: DASHBOARD_PAGES.TIMER,
        name: 'Timer'
    },
    {
        icon: IconCalendarMonth,
        link: DASHBOARD_PAGES.TIME_BLOCKING,
        name: 'Time blocking'
    },
    {
        icon: IconSettings,
        link: DASHBOARD_PAGES.SETTINGS,
        name: 'Settings'
    }
]