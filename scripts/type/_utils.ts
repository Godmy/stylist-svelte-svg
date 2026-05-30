import { TypeScanner } from '../../src/lib/server/class/manager/type-scanner/index.js';

const _scanner = new TypeScanner();

export const ROOT_DIR = process.cwd();
export const LIB_DIR = _scanner.libDir;

export const getDomainsWithType = (joint: string) => _scanner.getDomainsWithJoint(joint);
export const scanTypeFiles = (dir: string) => _scanner.scanFiles(dir);
export const findTypeAliases = (content: string) => _scanner.findTypeAliases(content);
export const findInterfaces = (content: string) => _scanner.findInterfaces(content);
export const getTypeBodyPos = (content: string, from: number, kind: 'type' | 'interface') =>
	_scanner.getTypeBodyPos(content, from, kind);
export const extractTypeKeys = (content: string, pos: number) =>
	_scanner.extractTypeKeys(content, pos);
