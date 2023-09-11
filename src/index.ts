import { Browser } from "./types";

const whichBrowser = () : Browser => {
  return 'browser';
};

const isSafari = (brw: Browser): boolean => brw === 'safari';


export {
  whichBrowser,
  isSafari,
}
