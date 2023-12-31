import { useCallback } from 'react';

import * as FileSystem from 'expo-file-system';
import { useIntl } from 'react-intl';
import { useSettings } from '@onekeyhq/kit/src/hooks/redux';

import {
  Box,
  Icon,
  Pressable,
  Text,
  ToastManager,
  Typography,
  useTheme,
} from '@onekeyhq/components';
import { copyToClipboard } from '@onekeyhq/components/src/utils/ClipboardUtils';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import platformEnv from '@onekeyhq/shared/src/platformEnv';

const getShareModule = async () => {
  if (!platformEnv.isNative) return null;
  return (await import('react-native-share')).default;
};

export const FooterAction = () => {
  const intl = useIntl();

  const { themeVariant } = useTheme();

  const getLogName = useCallback(() => {
    const str = new Date().toISOString().replace(/[-:.]/g, '');
    return `log-${str}.txt`;
  }, []);

  const downloadTxtFile = useCallback(async () => {
    const logName = getLogName();
    const element = document.createElement('a');

    const logger = await backgroundApiProxy.serviceApp.getLoggerInstance();
    const file = new Blob(logger, {
      type: 'text/plain',
      endings: 'native',
    });
    element.href = URL.createObjectURL(file);
    element.download = logName;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }, [getLogName]);
  const settings = useSettings();

  const shareLogFile = useCallback(async () => {
    const logFilePath = `${FileSystem.cacheDirectory ?? ''}log.txt`;
    const shareFileName = getLogName();
    const Share = await getShareModule();
    if (!Share) return;
    Share.open({
      url: logFilePath,
      title: shareFileName,
      filename: shareFileName,
    }).catch(() => {
      /** ignore */
    });
  }, [getLogName]);

  const handleExportStateLog = useCallback(() => {
    if (platformEnv.isNative) {
      shareLogFile();
    } else {
      downloadTxtFile();
    }
  }, [downloadTxtFile, shareLogFile]);

  const handleCopyEmail = useCallback(() => {
    copyToClipboard('hi@onekey.so');
    ToastManager.show({ title: intl.formatMessage({ id: 'msg__copied' }) });
  }, [intl]);

  var pkg = require('../../../../../../package.json');

  return (
    <Box w="full" mb="10" >
   {/*    <Box
        borderRadius="12"
        bg="surface-default"
        borderWidth={themeVariant === 'light' ? 1 : undefined}
        borderColor="border-subdued"
      >
       <Pressable
          display="flex"
          flexDirection="row"
          alignItems="center"
          py={4}
          px={{ base: 4, md: 6 }}
          onPress={handleExportStateLog}
        >
          <Icon name="DocumentTextOutline" />
          <Text
            typography={{ sm: 'Body1Strong', md: 'Body2Strong' }}
            flex={1}
            mx={3}
          >
            {intl.formatMessage({
              id: 'content__state_logs',
            })}
          </Text>
          <Text
            mr="4"
            typography={{ sm: 'Body1Strong', md: 'Body2Strong' }}
            color="text-subdued"
          >
            {intl.formatMessage({ id: 'action__export' })}
          </Text>
          <Box>
            <Icon name="ArrowDownTrayOutline" color="icon-subdued" size={20} />
          </Box>
        </Pressable>
      </Box>*/}
        <Box flexDirection={'row'}>
      <Text
            typography={{ sm: 'Body1Strong', md: 'Body2Strong' }}
            flex={1}
            mx={0}
          >
            {intl.formatMessage({
              id: 'form__version',
            })}
          </Text>
          <Text
            typography={{ sm: 'Body1Strong', md: 'Body2Strong' }}
            color="text-subdued"
          >
            {pkg.version}
          </Text></Box>
    </Box>
  );
};
