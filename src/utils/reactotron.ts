import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

declare global {
  interface Console {
    tron: typeof tron;
  }
}

export const tron = __DEV__
  ? Reactotron.configure({}) // controls connection & communication settings
      .useReactNative({
        networking: {
          // optionally, you can turn it off with false.
          ignoreUrls: /symbolicate/,
        },
      }) // add all built-in react native plugins
      .use(reactotronRedux()) //  <- here i am!
      .connect() // let's connect!
  : undefined;

console.tron = tron;
