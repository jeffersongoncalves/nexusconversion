"use client"
import * as React from "react"
import {ChartCandlestick, Currency, Receipt,} from "lucide-react"

import {NavMain} from "@/components/nav-main"
import {NavUser} from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    navMain: [
        {
            title: "Conversão de Moedas",
            url: "/",
            icon: ChartCandlestick,
        },
        {
            title: "Minhas Conversões",
            url: "/my-convertions",
            icon: ChartCandlestick,
        },
        {
            title: "Minhas Moedas",
            url: "/my-cryptos",
            icon: Receipt,
        },
    ],
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    user: {
        name: string
        email: string
        avatar: string
    }
}

export function AppSidebar({...props}: AppSidebarProps) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <a href="#">
                                <div
                                    className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                                    <Currency className="size-4"/>
                                </div>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">Nexus</span>
                                    <span className="truncate text-xs">Conversão</span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain}/>
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={props.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
