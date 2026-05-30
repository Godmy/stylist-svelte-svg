import { FunctionScanner } from '../../src/lib/server/class/manager/function-scanner/index.js';

const _scanner = new FunctionScanner();

export const ROOT_DIR = process.cwd();
export const LIB_DIR = _scanner.libDir;

export const getDomainsWithFunction = (joint: string) => _scanner.getDomainsWithJoint(joint);
export const scanStateFiles = (dir: string) => _scanner.scanStateFiles(dir);
export const scanScriptFiles = (dir: string) => _scanner.scanScriptFiles(dir);
export const findFunctions = (content: string) => _scanner.findFunctions(content);
export const extractFunctionParams = (content: string, pos: number) =>
	_scanner.extractFunctionParams(content, pos);
export const extractReturnMembers = (content: string) => _scanner.extractReturnMembers(content);
