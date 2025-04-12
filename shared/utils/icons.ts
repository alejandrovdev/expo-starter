import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@expo/vector-icons';

export const Icons = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

export type IconLibrary = keyof typeof Icons;

export type IconNames = {
  AntDesign: keyof typeof AntDesign.glyphMap;
  Entypo: keyof typeof Entypo.glyphMap;
  EvilIcons: keyof typeof EvilIcons.glyphMap;
  Feather: keyof typeof Feather.glyphMap;
  FontAwesome: keyof typeof FontAwesome.glyphMap;
  FontAwesome5: keyof typeof FontAwesome5.glyphMap;
  Fontisto: keyof typeof Fontisto.glyphMap;
  Foundation: keyof typeof Foundation.glyphMap;
  Ionicons: keyof typeof Ionicons.glyphMap;
  MaterialCommunityIcons: keyof typeof MaterialCommunityIcons.glyphMap;
  MaterialIcons: keyof typeof MaterialIcons.glyphMap;
  Octicons: keyof typeof Octicons.glyphMap;
  SimpleLineIcons: keyof typeof SimpleLineIcons.glyphMap;
  Zocial: keyof typeof Zocial.glyphMap;
};

export type IconProps<T extends IconLibrary> = {
  name: IconNames[T];
  size?: number;
  color?: string;
  style?: any;
};
