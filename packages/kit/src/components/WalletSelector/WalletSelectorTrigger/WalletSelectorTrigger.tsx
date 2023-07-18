/* eslint-disable @typescript-eslint/no-unsafe-call */
import type { FC, ReactNode } from 'react';
import { memo, useCallback, useMemo, useRef } from 'react';

import { Box, useIsVerticalLayout } from '@onekeyhq/components';
import type { DesktopRef } from '@onekeyhq/components/src/Select/Container/Desktop';
import {
  addNewRef,
  removeOldRef,
} from '@onekeyhq/components/src/utils/SelectAutoHide';

import backgroundApiProxy from '../../../background/instance/backgroundApiProxy';
import { useAppSelector, useNavigationActions } from '../../../hooks';
import { useCloseOnEsc } from '../../../hooks/useOnKeydown';
import reducerAccountSelector from '../../../store/reducers/reducerAccountSelector';
import { useWalletSelectorStatus } from '../hooks/useWalletSelectorStatus';
import WalletSelectorDesktop from '../WalletSelectorDesktop';

import { WalletSelectorTriggerElement } from './WalletSelectorTriggerElement';

import {
  useActiveWalletAccount,
} from '../../../hooks';



import Typography from '@onekeyhq/components/src/Typography';


type AccountSelectorProps = {
  renderTrigger?: ({
    visible,
    handleToggleVisible,
  }: {
    visible: boolean;
    handleToggleVisible: () => void;
  }) => ReactNode;
};

const { updateDesktopWalletSelectorVisible } = reducerAccountSelector.actions;

const WalletSelectorTrigger: FC<AccountSelectorProps> = ({ renderTrigger }) => {
  const isVertical = useIsVerticalLayout();

  const triggerRef = useRef<HTMLElement>(null);
  const { dispatch } = backgroundApiProxy;
  const isDesktopWalletSelectorVisible = useAppSelector(
    (s) => s.accountSelector.isDesktopWalletSelectorVisible,
  );
  const { toggleWalletSelector } = useNavigationActions();
  const { visible } = useWalletSelectorStatus();

  useCloseOnEsc(
    useCallback(() => {
      if (isDesktopWalletSelectorVisible) {
        dispatch(updateDesktopWalletSelectorVisible(false));
      }
    }, [dispatch, isDesktopWalletSelectorVisible]),
  );

  const handleToggleVisible = useCallback(() => {
    toggleWalletSelector();
  }, [toggleWalletSelector]);

  const {
    account: activeAccount,
    wallet: activeWallet,
    network: activeNetwork,
  } = useActiveWalletAccount();


  const activeWalletRef = useRef(activeWallet);
  activeWalletRef.current = activeWallet;

  const desktopRef = useRef<DesktopRef | null>(null);
  const setRef = useCallback((ref: DesktopRef | null) => {
    // Since we know there's a ref, we'll update `refs` to use it.
    if (ref) {
      // store the ref in this toast instance to be able to remove it from the array later when the ref becomes null.
      desktopRef.current = ref;
      addNewRef(ref);
    } else {
      // remove the this ref, wherever it is in the array.
      removeOldRef(desktopRef.current);
    }
  }, []);

  const child = useMemo(() => {
    if (isVertical) {
      return null;
    }
    return (
      <WalletSelectorDesktop
        ref={setRef}
        visible={visible}
        toggleVisible={handleToggleVisible}
      />
    );
  }, [isVertical, visible, handleToggleVisible, setRef]);

  const handleToggleVisibleDefault = useCallback(() => {
    if (!visible) {
      handleToggleVisible();
    }
  }, [handleToggleVisible, visible]);
  const vert = isVertical;
  return (
    <Box
      ref={triggerRef}
      position="relative"
      alignItems="flex-start"
      h="56px"
      justifyContent="flex-start"
      w="full"
      flexDir={"row"}
      pt={3}
    >
      {renderTrigger?.({ visible, handleToggleVisible }) ?? (
        <WalletSelectorTriggerElement
          visible={visible}
          handleToggleVisible={handleToggleVisibleDefault}
        />
      )}
      {child}
      
      {/* {console.log(vert)}
      <Box pt={vert==false? 2.5 : 1.5} pl={1} >
        <Typography.Body2Strong >
        {activeWalletRef.current?.name}
        </Typography.Body2Strong>
      </Box> */}
    </Box>
  );
};



export default memo(WalletSelectorTrigger);
