export type BottomTabNavigationType = {
  tab1: undefined;
  tab2: undefined;
  tab3: undefined;
  tab4: undefined;
};

export enum AppContentEnumType {
  PrivacyPolicy = '0',
  ContactUs = '1',
  AboutUs = '2',
}

export type RootNavigationType = {
  home: undefined;
  profile: undefined;
  bottomTab?: BottomTabNavigationType;
  appContent: {
    contentType: AppContentEnumType;
  };
  codeSplit: undefined;
};
