import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings144063Navigator from '../features/Settings144063/navigator';
import UserProfile144061Navigator from '../features/UserProfile144061/navigator';
import BlankScreen0144039Navigator from '../features/BlankScreen0144039/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
