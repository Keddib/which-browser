import { BrowserType } from "../../types";

const isArc = (brw: BrowserType) => BrowserType.Arc === brw;

export default isArc;
