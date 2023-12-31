import { useCallback, useEffect } from 'react';

import { useNavigation } from '@react-navigation/core';
import { useRoute } from '@react-navigation/native';
import { useIntl } from 'react-intl';
import { StyleSheet } from 'react-native';

import {
  Box,
  Center,
  Hidden,
  Icon,
  Image,
  PresenceTransition,
  Text,
  useUserDevice,
} from '@onekeyhq/components';
import LogoLedger from '@onekeyhq/kit/assets/onboarding/logo_ledger.png';
import LogoMetaMask from '@onekeyhq/kit/assets/onboarding/logo_metamask.png';
import LogoOneKey from '@onekeyhq/kit/assets/onboarding/logo_onekey.png';
import LogoTokenPocket from '@onekeyhq/kit/assets/onboarding/logo_tokenpocket.png';
import LogoTrezor from '@onekeyhq/kit/assets/onboarding/logo_trezor.png';
import {
  AppUIEventBusNames,
  appUIEventBus,
} from '@onekeyhq/shared/src/eventBus/appUIEventBus';
import platformEnv from '@onekeyhq/shared/src/platformEnv';

import backgroundApiProxy from '../../../../background/instance/backgroundApiProxy';
import { useNavigationActions } from '../../../../hooks';
import { usePromiseResult } from '../../../../hooks/usePromiseResult';
import { RootRoutes } from '../../../../routes/routesEnum';
import { setOnBoardingLoadingBehindModal } from '../../../../store/reducers/runtime';
import Layout from '../../Layout';
import { EOnboardingRoutes } from '../../routes/enums';

import PressableListItem from './PressableListItem';
import TermsOfService from './TermsOfService';

import type { IOnboardingRoutesParams } from '../../routes/types';
import type { RouteProp } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  setHideRiskTokens,
  setHideSmallBalance,
  setPutMainTokenOnTop,
} from '@onekeyhq/kit/src/store/reducers/settings';

type NavigationProps = StackNavigationProp<
  IOnboardingRoutesParams,
  EOnboardingRoutes.Welcome
>;

type RouteProps = RouteProp<IOnboardingRoutesParams, EOnboardingRoutes.Welcome>;

const Welcome = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const navigation = useAppNavigation();
  const navigation = useNavigation<NavigationProps>();
  const navigationActions = useNavigationActions();
  if (process.env.NODE_ENV !== 'production') {
    global.$$navigationActions = navigationActions;
  }
  backgroundApiProxy.dispatch(setHideRiskTokens(false))
  const route = useRoute<RouteProps>();
  const disableAnimation = !!route?.params?.disableAnimation;

  useEffect(() => {
    (async function () {
      if (
        platformEnv.isExtensionUiPopup ||
        platformEnv.isExtensionUiStandaloneWindow
      ) {
        if (await backgroundApiProxy.serviceApp.isResettingApp()) {
          return;
        }
        // open onBoarding by browser tab
        backgroundApiProxy.serviceApp.openExtensionExpandTab({
          routes: [RootRoutes.Onboarding, EOnboardingRoutes.Welcome],
          params: {},
        });
        setTimeout(() => {
          window.close();
        }, 200);
      }
    })();
  }, []);

  useEffect(() => {
    // Fix cardano webembed crash when onboarding page is closed on Android platform.
    if (platformEnv.isNative) {
      appUIEventBus.emit(AppUIEventBusNames.ChainWebEmbedDisabled);
    }
  }, []);

  const intl = useIntl();
  const isSmallHeight = useUserDevice().screenHeight <= 667;
  // const goBack = useNavigationBack();
  // const insets = useSafeAreaInsets();
  const { result: hasPreviousBackups } = usePromiseResult<boolean>(async () => {
    const status =
      await backgroundApiProxy.serviceCloudBackup.getBackupStatus();
    return status.hasPreviousBackups;
  });

  const onPressCreateWallet = useCallback(() => {
    backgroundApiProxy.dispatch(setOnBoardingLoadingBehindModal(false));
    navigation.navigate(EOnboardingRoutes.SetPassword);
  }, [navigation]);
  const onPressImportWallet = useCallback(() => {
    backgroundApiProxy.dispatch(setOnBoardingLoadingBehindModal(false));
    navigation.navigate(EOnboardingRoutes.RecoveryWallet);
  }, [navigation]);
  const onPressConnectWallet = useCallback(() => {
    backgroundApiProxy.dispatch(setOnBoardingLoadingBehindModal(false));
    navigation.navigate(EOnboardingRoutes.ConnectWallet);
  }, [navigation]);
  const onPressRestoreFromCloud = useCallback(() => {
    backgroundApiProxy.dispatch(setOnBoardingLoadingBehindModal(false));
    navigation.navigate(EOnboardingRoutes.RestoreFromCloud);
  }, [navigation]);

  const logos = [
    LogoOneKey,
    LogoTrezor,
    LogoLedger,
    LogoMetaMask,
    LogoTokenPocket,
  ];

  return (
    <>
      <Layout
        showCloseButton
        backButton={false}
        pt={{ base: isSmallHeight ? 8 : 20, sm: 0 }}
        scaleFade
        disableAnimation={disableAnimation}
      >
        <Center><Icon name="BrandLogoIllus" height={100} width={250} onlyD={true} color="logo" /></Center>
        
       <Center> 
        {/* <Text typography={{ sm: 'DisplayXLarge', md: 'Display2XLarge' }}  >
          {intl.formatMessage({ id: 'onboarding__landing_welcome_title' })}
      
         
        </Text> */}
        <Text typography={{ sm: 'DisplayMedium', md: 'DisplayLarge' }} textAlign="center" color="text-subdued" mt={6} px={10}>
            {intl.formatMessage({ id: 'onboarding__landing_welcome_desc' })}
          </Text>
        </Center>
        <Box
          flexDir={{ sm: 'row' }}
          flexWrap={{ sm: 'wrap' }}
          mt={{ base: isSmallHeight ? 8 : 10, sm: 20 }}
          mx={-2}
        >
          <Box
            flexDirection={{ sm: 'row' }}
            w={{ sm: hasPreviousBackups ? '100%' : '2/3' }}
          >
            <PressableListItem
              icon="PlusCircleOutline"
              label={intl.formatMessage({
                id: 'action__create_wallet',
              })}
              roundedBottom={{ base: 0, sm: 'xl' }}
              onPress={onPressCreateWallet}
            />
            <PressableListItem
              icon="InboxArrowDownOutline"
              label={intl.formatMessage({
                id: 'action__import_wallet',
              })}
              mt="-1px"
              mb={{ base: 6, sm: 0 }}
              roundedTop={{ base: 0, sm: 'xl' }}
              onPress={onPressImportWallet}
            />
          </Box>
          <Box
            flexDirection={{ sm: 'row' }}
            w={{ sm: hasPreviousBackups ? '100%' : '1/3' }}
            mt={{ sm: hasPreviousBackups ? 4 : undefined }}
          >
          
            <Box flex={1}>
{/*               <PressableListItem */}
{/*                 icon="LinkOutline" */}
{/*                 label={intl.formatMessage({ */}
{/*                   id: 'action__connect_wallet', */}
{/*                 })} */}
{/*                 onPress={onPressConnectWallet} */}
{/*               > */}
{/*                 <Box */}
{/*                   flexDir="row" */}
{/*                   position={{ sm: 'absolute' }} */}
{/*                   top={{ base: 1, sm: 33 }} */}
{/*                   right={{ sm: 25 }} */}
{/*                   ml={2} */}
{/*                 > */}
{/*                   {logos.map((logo, index) => ( */}
{/*                     <Image */}
{/*                       key={index} */}
{/*                       source={logo} */}
{/*                       size={4} */}
{/*                       mx={0.5} */}
{/*                       borderWidth={StyleSheet.hairlineWidth} */}
{/*                       borderColor="border-subdued" */}
{/*                       rounded="sm" */}
{/*                     /> */}
{/*                   ))} */}
{/*                 </Box> */}
{/*               </PressableListItem> */}
{/*               <Hidden from="sm"> */}
{/*                 <Text mt={3} mx={2} color="text-subdued" typography="Body2"> */}
{/*                   {intl.formatMessage({ id: 'content__supported_wallets' })} */}
{/*                 </Text> */}
{/*               </Hidden> */}
            </Box>
            {hasPreviousBackups ? (
              <PresenceTransition
                as={Box}
                visible={hasPreviousBackups}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 150 },
                }}
                // @ts-expect-error
                mt={{ base: '24px', sm: '0' }}
                flex={1}
              >
                <PressableListItem
                  icon="CloudOutline"
                  label={intl.formatMessage({
                    id: 'action__restore_from_icloud',
                  })}
                  onPress={onPressRestoreFromCloud}
                />
              </PresenceTransition>
            ) : undefined}
          </Box>
        </Box>
      </Layout>
      <TermsOfService />
    </>
  );
};

export default Welcome;
