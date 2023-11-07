'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { SidenavItem } from './SidenavItem';
import { sidenavItemsTop, sidenavItemsBottom } from './sidenavItemsInfo';
import Link from 'next/link';
import { ChevronRightIcon, Bars3Icon } from '@heroicons/react/20/solid';
import {
  cn,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerSides,
  DrawerTrigger,
} from '@chaco/mate-ui';
import { MateLogo } from '@icons';
import useScreenSize from '@/hooks/useScreenSize';
import { usePreview } from '@components';

const styles = {
  inputRightIcon: 'flex items-center justify-center border-l-0 px-1',
  magnifyingGlassIcon: 'h-5 w-5 text-grey-400',
  itemsContainer: 'flex flex-col text-grey-700',
  itemsContainerTop: 'pb-6 border-b border-grey-300',
  itemsContainerBottom: 'pt-6',
};

export const Sidenav: React.FC = () => {
  const [activeSubmenu, setActiveSubmenu] = useState<string>('');
  const navigation = useRouter();
  const pathName = usePathname().substring(1);
  const screenSize = useScreenSize();
  const [open, setOpen] = React.useState<boolean>(false);
  const { onPreview } = usePreview();
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleItemClick = (route, hasSubItems, label) => {
    if (hasSubItems) {
      setActiveSubmenu(activeSubmenu === label ? '' : label);
    }
    navigation.push(route);

    if (!hasSubItems && setOpen) {
      setOpen(false);
    }
  };

  const isMobile = screenSize === 'sm' || screenSize === 'md';

  const renderSidenavItems = (
    items,
    activeSubmenu,
    pathName,
    handleItemClick
  ) => {
    return items.map((item) => (
      <div key={item.path}>
        <SidenavItem
          className="text-grey-900"
          isActive={pathName === item.path}
          rightIcon={
            item.submenuItems && item.submenuItems.length > 0 ? (
              <ChevronRightIcon />
            ) : null
          }
          onClick={() => {
            handleItemClick(
              item.path,
              item.submenuItems && item.submenuItems.length > 0,
              item.label
            );
          }}
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
              className="ml-4 text-grey-600"
            >
              {subItem.label}
            </SidenavItem>
          ))}
      </div>
    ));
  };

  const ItemsList = (
    <>
      <div className="pb-12" onClick={() => setOpen(false)}>
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

  return (
    <>
      {!onPreview && (
        <div className="flex w-full justify-between px-6 py-4 lg:block lg:w-[16rem] lg:px-8 lg:py-6">
          <Link href="/" className="lg:hidden">
            <MateLogo />
          </Link>
          {isMobile && domLoaded ? (
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger>
                <Bars3Icon className="h-5 w-5" />
              </DrawerTrigger>
              <DrawerContent side={DrawerSides.Left}>
                <DrawerBody className="flex h-full flex-col">
                  {ItemsList}
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          ) : (
            <div className="h-full">{ItemsList}</div>
          )}
        </div>
      )}
    </>
  );
};
