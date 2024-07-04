import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  IconButton,
} from "@material-tailwind/react";
import {
  InboxIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from 'react-router-dom';

import styles from './sidebar.module.css';

export default function SidebarWithLogo({ sidebarOpen, toggleSidebar, toggleModal }) {
  const navigate = useNavigate();

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const handleInsightsClick = () => {
    navigate('/insights');
  };

  return (
    <div className="h-full">
      <IconButton
        className="md:hidden p-2 fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        {sidebarOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
      </IconButton>
      <Card className={`h-full p-4 shadow-xl shadow-blue-gray-900/5 ${styles.sidebar} ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
        <div className="mb-2 flex items-center gap-4 p-4">
          <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
          <Typography variant="h5" color="blue-gray">
            TruEstate
          </Typography>
        </div>
        <div className="flex flex-col justify-between h-full">
          <List>
            <Typography variant="h6" color="gray">
              TruEstate
            </Typography>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
              </ListItemSuffix>
            </ListItem>
            <ListItem onClick={handleWishlistClick}>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Wishlist
            </ListItem>
            <ListItem onClick={toggleModal}>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Help
            </ListItem>
            <ListItem onClick={handleInsightsClick}>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Insights
            </ListItem>
          </List>
          <List className="absolute bottom-0">
            <ListItem className="border">
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </div>
      </Card>
    </div>
  );
}
