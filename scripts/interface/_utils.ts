import { InterfaceScanner } from '../../src/lib/server/class/manager/interface-scanner/index.js';

const _scanner = new InterfaceScanner();

export const ROOT_DIR = process.cwd();
export const LIB_DIR = _scanner.libDir;

export const getDomainsWithInterface = (joint: string) => _scanner.getDomainsWithJoint(joint);
export const scanInterfaceFiles = (dir: string) => _scanner.scanFiles(dir);
export const findInterfaces = (content: string) => _scanner.findInterfaces(content);
export const getInterfaceBodyPos = (content: string, from: number) =>
	_scanner.getBodyPos(content, from);
export const extractInterfaceKeys = (content: string, pos: number) =>
	_scanner.extractKeys(content, pos);
export const extractInterfaceEntries = (content: string, pos: number) =>
	_scanner.extractEntries(content, pos);
