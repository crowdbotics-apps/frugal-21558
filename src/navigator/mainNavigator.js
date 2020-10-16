import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile144162Navigator from '../features/UserProfile144162/navigator';
import UserProfile144101Navigator from '../features/UserProfile144101/navigator';
import Tutorial144100Navigator from '../features/Tutorial144100/navigator';
import NotificationList144072Navigator from '../features/NotificationList144072/navigator';
import Settings144071Navigator from '../features/Settings144071/navigator';
import Settings144063Navigator from '../features/Settings144063/navigator';
import UserProfile144061Navigator from '../features/UserProfile144061/navigator';
import BlankScreen0144039Navigator from '../features/BlankScreen0144039/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile144162: { screen: UserProfile144162Navigator },
UserProfile144101: { screen: UserProfile144101Navigator },
Tutorial144100: { screen: Tutorial144100Navigator },
NotificationList144072: { screen: NotificationList144072Navigator },
Settings144071: { screen: Settings144071Navigator },
Settings144063: { screen: Settings144063Navigator },
UserProfile144061: { screen: UserProfile144061Navigator },
BlankScreen0144039: { screen: BlankScreen0144039Navigator },

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
