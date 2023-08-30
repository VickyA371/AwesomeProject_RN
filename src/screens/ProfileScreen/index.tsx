import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// ** Components
import ProfileOption from '../../components/ProfileOption';

// ** Types
import {AppContentEnumType, RootNavigationType} from '../../navigation/types';
import colors from '../../constants/colors';

const ProfileScreen = (props: NativeStackScreenProps<RootNavigationType>) => {
  return (
    <View style={styles.container}>
      <ProfileOption
        text="Bottom Tab Example"
        onPress={() => {
          props.navigation.navigate('bottomTab');
        }}
      />
      <ProfileOption
        text="Code Split"
        onPress={() => {
          props.navigation.navigate('codeSplit');
        }}
      />
      <ProfileOption
        text="Privacy Policy"
        onPress={() => {
          props.navigation.navigate('appContent', {
            contentType: AppContentEnumType.PrivacyPolicy,
          });
        }}
      />
      <ProfileOption
        text="Contact Us"
        onPress={() => {
          props.navigation.navigate('appContent', {
            contentType: AppContentEnumType.ContactUs,
          });
        }}
      />
      <ProfileOption
        text="About Us"
        onPress={() => {
          props.navigation.navigate('appContent', {
            contentType: AppContentEnumType.AboutUs,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    paddingTop: 15,
  },
});

export default ProfileScreen;
