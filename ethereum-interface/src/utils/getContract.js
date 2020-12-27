import { Contract } from '@ethersproject/contracts';

/**
 * readonly: if using provider
 * write: if using signer
 */
export const getContract = (address, abi, providerOrSigner) => {
  if (!address || !abi || !providerOrSigner) return null;
  return new Contract(address, abi, providerOrSigner);
};
