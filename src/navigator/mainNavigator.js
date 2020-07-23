import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList83064Navigator from '../features/NotificationList83064/navigator';
import Settings83063Navigator from '../features/Settings83063/navigator';
import Settings83055Navigator from '../features/Settings83055/navigator';
import UserProfile83053Navigator from '../features/UserProfile83053/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList83064: { screen: NotificationList83064Navigator },
Settings83063: { screen: Settings83063Navigator },
Settings83055: { screen: Settings83055Navigator },
UserProfile83053: { screen: UserProfile83053Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
