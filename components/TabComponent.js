import * as React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';

import { KONSTRUNDAN_COLOURS } from '../constants/constants';
const ICON_NAMES = {
	INFO: 'information',
	ARTISTS: 'people',
	MAP: 'map',
};

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
			screenOptions={{
				headerShown: false,
				//tabBarStyle: { height: 80 },
				tabBarActiveBackgroundColor: KONSTRUNDAN_COLOURS.RED,
				tabBarInactiveBackgroundColor: KONSTRUNDAN_COLOURS.RED,
				tabBarInactiveTintColor: KONSTRUNDAN_COLOURS.WHITE,
				tabBarActiveTintColor: KONSTRUNDAN_COLOURS.YELLOW,
			}}
		>
            <Tab.Screen
				name={'INFO'}
				component={InfoViewGeneralStackNavigator}
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name={ICON_NAMES.INFO} size={size} color={color} />
					),
				}}
			/>
            <Tab.Screen
				name={'KONSTNÄRER'}
				component={ListViewArtistsStackNavigator}
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name={ICON_NAMES.ARTISTS} size={size} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={'KARTA'}
				component={MapViewArtistsStackNavigator}
				options={{
					tabBarIcon: ({color, size}) => (
						<Ionicons name={ICON_NAMES.MAP} size={size} color={color} />
					),
				}}
			/>
        </Tab.Navigator>
    );
};

export default React.memo(BottomTabNavigator);
