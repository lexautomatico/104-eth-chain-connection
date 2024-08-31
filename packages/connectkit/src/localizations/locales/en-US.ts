import { LocaleProps } from './';

const enUS: LocaleProps = {
  connectWallet: 'Connect Account',
  disconnect: 'Disconnect',
  connected: 'Connected',
  wrongNetwork: 'Wrong Network',
  switchNetworks: 'Switch Networks',
  chainNetwork: '{{ CHAIN }} Network',
  copyToClipboard: 'Copy to Clipboard',
  copyCode: 'Copy Code',
  moreInformation: 'More Information',
  back: 'Back',
  close: 'Close',
  or: 'or',
  more: 'More',
  tryAgain: 'Try Again',
  tryAgainQuestion: 'Try Again?',
  dontHaveTheApp: "Don't have the app?",
  scanTheQRCode: 'Scan the QR code',
  useWalletConnectModal: 'Use WalletConnect Modal',
  useModal: 'Use Modal',
  installTheExtension: 'Install the Extension',
  getWalletName: 'Get {{ CONNECTORNAME }}',
  otherWallets: 'Other Accounts',
  learnMore: 'Learn More',
  getWallet: 'Get a Account',
  approveInWallet: 'Approve in Account Manager',
  confirmInWallet: 'Confirm in Account Manager',
  awaitingConfirmation: 'Awaiting Confirmation',
  signIn: 'Sign In',
  signOut: 'Sign Out',
  signedIn: 'Signed In',
  signedOut: 'Signed Out',
  walletNotConnected: 'Account Not Connected',

  warnings_walletSwitchingUnsupported: `Your Account does not support switching networks from this app.`,
  warnings_walletSwitchingUnsupportedResolve: `Try switching networks from within your account instead.`,
  warnings_chainUnsupported: `This app does not support the current connected network.`,
  warnings_chainUnsupportedResolve: `Switch or disconnect to continue.`,

  onboardingScreen_heading: `Get a Web3 Account`,
  onboardingScreen_h1: `Start Exploring Web3`,
  onboardingScreen_p: `Your Web3 account is the gateway to all things Ethereum, the magical technology that makes it possible to explore web3.`,
  onboardingScreen_ctaText: `Choose Your first Acount Manager`,
  onboardingScreen_ctaUrl: `https://ethereum.org/en/wallets/find-wallet/`,

  aboutScreen_heading: `About Web3 Accounts`,
  aboutScreen_a_h1: `For your digital assets`,
  aboutScreen_a_p: `Accounts let you send, receive, store, and interact with digital assets like NFTs and other Ethereum tokens.`,
  aboutScreen_b_h1: `A better way to login`,
  aboutScreen_b_p: `With modern apps, your account can be used as an easy way to login, instead of having to remember a password.`,
  aboutScreen_c_h1: `Explore the world of web3`,
  aboutScreen_c_p: `Your Web3 Account is an essential utility that lets you explore and participate in the fast evolving world of web3.`,
  aboutScreen_ctaText: `Learn More`,
  aboutScreen_ctaUrl: `https://ethereum.org/en/wallets/`,

  connectorsScreen_heading: `Connect Account`,
  connectorsScreen_newcomer: `I don’t have a Web3 Account`,
  connectorsScreen_h1: `What is a Web3 Account?`,
  connectorsScreen_p: `Accounts are used to send, receive, and store digital assets. Connecting a Web3 account lets you interact with decentralized applications dApps.`,

  mobileConnectorsScreen_heading: `Choose Account`,

  scanScreen_heading: `Scan with Phone`,
  scanScreen_heading_withConnector: `Scan with {{ CONNECTORNAME }}`,
  scanScreen_tooltip_walletConnect: `Open a [WALLETCONNECTLOGO] WalletConnect \nsupported account to scan`,
  scanScreen_tooltip_default: `Open {{ CONNECTORNAME }} on \nyour mobile phone to scan`,

  downloadAppScreen_heading: `Get {{ CONNECTORNAME }}`,
  downloadAppScreen_iosAndroid: `Scan with your phone camera to download on iOS or Android.`,
  downloadAppScreen_ios: `Scan with your phone camera to download on iOS.`,
  downloadAppScreen_android: `Scan with your phone camera to download Android.`,

  injectionScreen_unavailable_h1: `Unsupported Browser`,
  injectionScreen_unavailable_p: `To connect your {{ CONNECTORSHORTNAME }} account,\ninstall the extension on {{ SUGGESTEDEXTENSIONBROWSER }}.`,

  injectionScreen_install_h1: `Install {{ CONNECTORNAME }}`,
  injectionScreen_install_p: `To connect your {{ CONNECTORSHORTNAME }} account,\ninstall the browser extension.`,

  injectionScreen_connecting_h1: `Requesting Connection`,
  injectionScreen_connecting_p: `Open the {{ CONNECTORSHORTNAME }} browser \nextension to connect your Web3 account.`,
  injectionScreen_connecting_injected_h1: `Requesting Connection`,
  injectionScreen_connecting_injected_p: `Accept the request through your account to connect to this app.`,

  injectionScreen_connected_h1: `Already Connected`,
  injectionScreen_connected_p: `It is now okay to close this popup`,

  injectionScreen_rejected_h1: `Request Cancelled`,
  injectionScreen_rejected_p: `You cancelled the request.\nClick above to try again.`,

  injectionScreen_failed_h1: `Connection Failed`,
  injectionScreen_failed_p: `Sorry, something went wrong.\nPlease try connecting again.`,

  injectionScreen_notconnected_h1: `Login to {{ CONNECTORNAME }}`,
  injectionScreen_notconnected_p: `To continue, please login to your {{ CONNECTORNAME }} extension.`,

  profileScreen_heading: 'Connected',

  switchNetworkScreen_heading: 'Switch Networks',

  signInWithEthereumScreen_tooltip:
    'You’re not signed in to this app.\n**Sign In With Ethereum** to continue.',

  signInWithEthereumScreen_signedOut_heading: 'Sign In With Ethereum',
  signInWithEthereumScreen_signedOut_h1:
    'This app would like to verify you \n as the owner of this account.',
  signInWithEthereumScreen_signedOut_p: `Please sign the message request \n in your account to continue.`,
  signInWithEthereumScreen_signedOut_button: 'Sign In',

  signInWithEthereumScreen_signedIn_heading: 'Signed In With Ethereum',
  signInWithEthereumScreen_signedIn_h1:
    'You successfully verified yourself \n as the owner of this account.',
  signInWithEthereumScreen_signedIn_p: `Signing out will require you to \n authenticate again in the future.`,
  signInWithEthereumScreen_signedIn_button: 'Sign Out',
};

export default enUS;
