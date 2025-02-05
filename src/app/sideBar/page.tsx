import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function SideBar({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider
        // className="pt-60"
        >
            <AppSidebar />
            <main>
                <SidebarTrigger />
                {children}
            </main>
        </SidebarProvider >
    )
}
