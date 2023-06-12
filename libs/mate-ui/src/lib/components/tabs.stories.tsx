import type { Meta } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';
import { Cog8ToothIcon, ViewColumnsIcon, AdjustmentsVerticalIcon, BriefcaseIcon, DocumentTextIcon, UserIcon } from '@heroicons/react/24/outline';

interface TabProps {
  key: string;
  name: string;
  notifications?: number;
  icon?: React.ReactNode;
}

interface TabsProps {
  tabs: TabProps[];
}

const tabsDefault: TabProps[] = [
  { key: 'dashboard', name: 'Dashboard' },
  { key: 'admin', name: 'Admin' },
  { key: 'providers', name: 'Providers' },
  { key: 'payout', name: 'Payout' },
  { key: 'consumers', name: 'Consumers' },
  { key: 'settings', name: 'Settings' },
]

const tablistWithNotifications: TabProps[] = [
  { key: 'dashboard', name: 'Dashboard', notifications: 1 },
  { key: 'admin', name: 'Admin' },
  { key: 'providers', name: 'Providers' },
  { key: 'payout', name: 'Payout', notifications: 1 },
  { key: 'consumers', name: 'Consumers' },
  { key: 'settings', name: 'Settings' },
]

const tabsWithIconsAndNotifications: TabProps[] = [
  { key: 'dashboard', name: 'Dashboard', notifications: 1, icon: <ViewColumnsIcon /> },
  { key: 'admin', name: 'Admin', icon: <AdjustmentsVerticalIcon /> },
  { key: 'providers', name: 'Providers', icon: <BriefcaseIcon /> },
  { key: 'payout', name: 'Payout', notifications: 1, icon: <DocumentTextIcon /> },
  { key: 'consumers', name: 'Consumers', icon: <UserIcon /> },
  { key: 'settings', name: 'Settings', icon: <Cog8ToothIcon /> },
]

const TabsComponent = ({ tabs }: TabsProps) => {
  return (
    <Tabs defaultValue={tabs[0].name}>
      <TabsList>
        {tabs.map(tab => {
          return (
            <TabsTrigger key={tab.key} value={tab.name} icon={tab?.icon} notifications={tab?.notifications}>
              {tab.name}
            </TabsTrigger>
          )
        })}
      </TabsList>
      {tabs.map(tab => {
        return (
          <TabsContent key={tab.key} value={tab.name}>
            Make changes to your {tab.name} here.
          </TabsContent>
        )
      })}
    </Tabs>
  )
}

const Story: Meta<TabsProps> = {
  component: TabsComponent,
  title: 'Tabs',
};
export default Story;

export const DefaultTablist = {
  args: {
    tabs: tabsDefault,
  },
};

export const DefaultTablistWithNotifications = {
  args: {
    tabs: tablistWithNotifications,
  },
};

export const LeadingIconTablistWithNotifications = {
  args: {
    tabs: tabsWithIconsAndNotifications,
  },
};

