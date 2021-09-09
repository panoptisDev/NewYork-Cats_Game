import { useSelector } from 'react-redux';

/**
 * Retrieves the wallet state from the redux store
 * @return {WalletStateType}
 */
function useWalletState() {
    return useSelector((state) => state.wallet);
}

export default useWalletState;

