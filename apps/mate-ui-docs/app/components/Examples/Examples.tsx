
'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@truenorth/mate-ui';
import React from 'react';
import { Dashboard } from '../Dashboard';
import { List } from '../List';

const tabs = [
    { key: 'dashboard', name: 'Dashboard', component: <Dashboard /> },
    { key: 'list', name: 'List', component: <List /> },
  ];


const Examples = () => {
  return (
    <Tabs defaultValue={tabs[0].name}>
    <TabsList>
      {tabs.map((tab) => {
        return (
          <TabsTrigger key={tab.key} value={tab.name}>
            {tab.name}
          </TabsTrigger>
        );
      })}
    </TabsList>
    {tabs.map((tab) => {
      return (
        <TabsContent key={tab.key} value={tab.name}>
          {tab.component}
        </TabsContent>
      );
    })}
  </Tabs>
  );
};

export { Examples };


      