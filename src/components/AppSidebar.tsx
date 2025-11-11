import { 
  LayoutDashboard, 
  FolderKanban, 
  BarChart3, 
  FileText, 
  MessageSquare, 
  Settings,
  LogOut
} from 'lucide-react';
import { NavLink } from '@/components/NavLink';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import sd from "../../public/SD.webp"

const navItems = [
  { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
  { title: 'Projects', url: '/dashboard/projects', icon: FolderKanban },
  { title: 'Analytics', url: '/dashboard/analytics', icon: BarChart3 },
  { title: 'Invoices', url: '/dashboard/invoices', icon: FileText },
  { title: 'Support', url: '/dashboard/support', icon: MessageSquare },
  { title: 'Settings', url: '/dashboard/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const { user, logout } = useAuth();
  
  const collapsed = state === 'collapsed';

  const isActive = (path: string) => location.pathname === path;

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center">
              <img
                src={sd}
                alt="Sahil DigiEra Logo"
                className="w-10 h-10 object-cover"
              />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-sidebar-foreground">Sahil DigiEra</h2>
              <p className="text-xs text-muted-foreground">Client Portal</p>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="h-8 w-8 mx-auto flex items-center justify-center">
            <img
              src={sd}
              alt="Sahil DigiEra Logo"
              className="w-10 h-10 object-cover"
            />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all hover:bg-sidebar-accent"
                      activeClassName="bg-sidebar-accent text-primary font-medium glow"
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        {user && (
          <div className="space-y-3">
            {!collapsed && (
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 ring-2 ring-primary/20">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-sidebar-foreground truncate">
                    {user.name}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            )}
            {collapsed && (
              <Avatar className="h-9 w-9 mx-auto ring-2 ring-primary/20">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            )}
            <Button
              onClick={logout}
              variant="ghost"
              size={collapsed ? "icon" : "sm"}
              className="w-full hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span className="ml-2">Logout</span>}
            </Button>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
