import { BrowserType } from "../../types";

const isEdge = (brw: BrowserType) => BrowserType.Edge === brw;

export default isEdge;
