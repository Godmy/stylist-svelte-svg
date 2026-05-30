import {
	ConstScanner,
	type SerializablePrimitive,
	type SerializableValue
} from '../../src/lib/server/class/manager/const-scanner/index.js';

export type { SerializablePrimitive, SerializableValue };

const _scanner = new ConstScanner();

export const ROOT_DIR = process.cwd();
export const LIB_DIR = _scanner.libDir;

export const getDomainsWithConst = (joint: string) => _scanner.getDomainsWithJoint(joint);
export const scanConstFiles = (dir: string) => _scanner.scanFiles(dir);
export const findConstExports = (content: string) => _scanner.findConstExports(content);
export const getValuePos = (content: string, from: number) => _scanner.getValuePos(content, from);
export const extractArrayValues = (content: string, pos: number) =>
	_scanner.extractArrayValues(content, pos);
export const extractMapEntries = (content: string, pos: number) =>
	_scanner.extractMapEntries(content, pos);
export const extractSimpleMapEntries = (content: string, pos: number) =>
	_scanner.extractSimpleMapEntries(content, pos);
export const extractSingleValue = (content: string, pos: number) =>
	_scanner.extractSingleValue(content, pos);
