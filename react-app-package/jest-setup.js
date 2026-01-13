/**
 * This is responsible for accessing DOM asserting methods like .toBeInTheDocument()
 * This setup globally helps us to not import this everywhere in our test-cases
 * For more information visit this: https://www.npmjs.com/package/@testing-library/jest-dom
 */
import '@testing-library/jest-dom';

/**
 * The ReferenceError: TextEncoder is not defined error occurs in Jest because the
 * default jsdom testing environment, which simulates a browser, does not include TextEncoder
 * in its globals by default. The error related to BrowserRouter likely stems from a library
 * it uses internally (or one of your components uses) that relies on TextEncoder.
 *
 * To fix this, you need to manually polyfill TextEncoder in your Jest setup file.
 */
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, {
  TextDecoder,
  TextEncoder,
});
