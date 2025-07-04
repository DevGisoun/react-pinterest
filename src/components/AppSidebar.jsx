import { Home, Clock3, Users, MessageSquareMore, Bell } from 'lucide-react';

import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@ui/sidebar';

// Menu items.
const group1 = [
    { title: 'Home', url: '#', icon: Home },
    { title: 'Recent', url: '#', icon: Clock3 },
    { title: 'Following', url: '#', icon: Users },
];

const group2 = [
    { title: 'Messages', url: '#', icon: MessageSquareMore },
    { title: 'Notifications', url: '#', icon: Bell },
];

export function AppSidebar() {
    return (
        <Sidebar>
            {/* 사이드바 헤더: Pinterest 로고 이미지 및 텍스트 */}
            <SidebarHeader className="py-8 px-6">
                <div className="flex items-center gap-1">
                    <img src="src/assets/logo.png" alt="logo" />
                    <span className="font-bold">Pinterest</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                {/* 그룹1 */}
                <SidebarGroup className="p-0">
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {group1.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="px-8" asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                {/* 그룹2 */}
                <SidebarGroup className="p-0">
                    <SidebarGroupLabel className="px-8">
                        Insights
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {group2.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton className="px-8" asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
