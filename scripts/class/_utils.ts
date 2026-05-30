import { ClassScanner } from '../../src/lib/server/class/manager/class-scanner/index.js';

const _scanner = new ClassScanner();

export const ROOT_DIR = process.cwd();
export const LIB_DIR = _scanner.libDir;

export const getDomainsWithClass = (joint: string) => _scanner.getDomainsWithJoint(joint);
export const scanClassFiles = (dir: string) => _scanner.scanFiles(dir);
export const findClasses = (content: string) => _scanner.findClasses(content);
export const getClassBodyPos = (content: string, from: number) =>
	_scanner.getBodyPos(content, from);
export const extractPublicMethods = (content: string, pos: number) =>
	_scanner.extractPublicMethods(content, pos);
