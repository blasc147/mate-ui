'use client';
import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { MateLogo } from 'apps/mate-ui-docs/app/_icons';
import { SidenavItem } from './SidenavItem';
import { sidenavItemsTop, sidenavItemsBottom } from './sidenavItemsInfo';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { cn } from '@truenorth/mate-ui';

const styles = {
  inputRightIcon: 'flex items-center justify-center border-l-0 px-1',
  magnifyingGlassIcon: 'h-5 w-5 text-neutral-400',
  itemsContainer: 'flex flex-col text-neutral-700',
  itemsContainerTop: 'pb-6 border-b border-neutral-300',
  itemsContainerBottom: 'pt-6',
};

export const Sidenav = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string>('');
  const navigation = useRouter();
  const pathName = usePathname().substring(1);

  const handleItemClick = (route, hasSubItems, label) => {
    if (hasSubItems) {
      setActiveSubmenu(activeSubmenu === label ? '' : label);
    }
    navigation.push(route);
  };

  const renderSidenavItems = (
    items,
    activeSubmenu,
    pathName,
    handleItemClick
  ) => {
    return items.map((item) => (
      <div key={item.path}>
        <SidenavItem
          className="text-neutral-900"
          isActive={pathName === item.path}
          rightIcon={
            item.submenuItems && item.submenuItems.length > 0 ? (
              <ChevronRightIcon />
            ) : null
          }
          onClick={() =>
            handleItemClick(
              item.path,
              item.submenuItems && item.submenuItems.length > 0,
              item.label
            )
          }
        >
          {item.label}
        </SidenavItem>
        {activeSubmenu === item.label &&
          item.submenuItems?.map((subItem) => (
            <SidenavItem
              key={subItem.label}
              isActive={pathName === subItem.path}
              rightIcon={subItem.rightIcon}
              onClick={() =>
                handleItemClick(subItem.path, false, subItem.label)
              }
              className="ml-4 text-neutral-600"
            >
              {subItem.label}
            </SidenavItem>
          ))}
      </div>
    ));
  };

  return (
    <>
      <div className="pb-12">
        <Link href="/">
          <MateLogo />
        </Link>
      </div>
      <div className={cn(styles.itemsContainer, styles.itemsContainerTop)}>
        {renderSidenavItems(
          sidenavItemsTop,
          activeSubmenu,
          pathName,
          handleItemClick
        )}
      </div>
      <div className={cn(styles.itemsContainer, styles.itemsContainerBottom)}>
        {renderSidenavItems(
          sidenavItemsBottom,
          activeSubmenu,
          pathName,
          handleItemClick
        )}
      </div>
    </>
  );
};

export default Sidenav;
