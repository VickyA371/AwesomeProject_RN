// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import React, {Suspense, useEffect, useState} from 'react';
// import {AppContentEnumType, RootNavigationType} from '../../navigation/types';
// import {delayForDemo} from '../../utils/misc';

// const PrivacyPolicy = React.lazy(() =>
//   delayForDemo(import('../PrivacyPolicy')),
// );
// const ContactUs = React.lazy(() => delayForDemo(import('../ContactUs')));
// const AboutUs = React.lazy(() => delayForDemo(import('../AboutUs')));

// const AppContent = (
//   props: NativeStackScreenProps<RootNavigationType, 'appContent'>,
// ) => {
//   const {route} = props;

//   const [showPreview, setShowPreview] = useState<AppContentEnumType | null>(
//     null,
//   );

//   useEffect(() => {
//     setShowPreview(route.params?.contentType);
//   }, [route.params?.contentType]);

//   return (
//     <Suspense fallback={<Loader />}>
//       {showPreview === AppContentEnumType.PrivacyPolicy ? (
//         <PrivacyPolicy />
//       ) : showPreview === AppContentEnumType.ContactUs ? (
//         <ContactUs />
//       ) : showPreview === AppContentEnumType.AboutUs ? (
//         <AboutUs />
//       ) : null}
//     </Suspense>
//   );
// };

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {Suspense, useEffect, useState} from 'react';
import {AppContentEnumType, RootNavigationType} from '../../navigation/types';
import Loader from '../../components/Loader';
import {delayForDemo} from '../../utils/misc';
// import PrivacyPolicy from '../PrivacyPolicy';
// import ContactUs from '../ContactUs';
// import AboutUs from '../AboutUs';

const PrivacyPolicyScreen = React.lazy(() =>
  delayForDemo(import('../PrivacyPolicy')),
);
const AboutUsScreen = React.lazy(() => delayForDemo(import('../AboutUs')));
const ContactUsScreen = React.lazy(() => delayForDemo(import('../ContactUs')));

const AppContent = (
  props: NativeStackScreenProps<RootNavigationType, 'appContent'>,
) => {
  const {route} = props;

  const [showPreview, setShowPreview] = useState<AppContentEnumType | null>(
    null,
  );

  useEffect(() => {
    setShowPreview(route.params?.contentType);
  }, [route.params?.contentType]);

  return (
    <Suspense fallback={<Loader />}>
      {showPreview === AppContentEnumType.PrivacyPolicy ? (
        <PrivacyPolicyScreen />
      ) : showPreview === AppContentEnumType.ContactUs ? (
        <ContactUsScreen />
      ) : showPreview === AppContentEnumType.AboutUs ? (
        <AboutUsScreen />
      ) : null}
    </Suspense>
  );
};

export default AppContent;
