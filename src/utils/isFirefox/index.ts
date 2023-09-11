import { BrowserType } from "../../types";

const isFireFox = (brw: BrowserType) => BrowserType.Firefox === brw;

export default isFireFox;
