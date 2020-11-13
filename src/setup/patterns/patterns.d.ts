import Singleton from '../../design_patterns/creational/Singleton';
import { Patterns } from './enum_patterns';
export interface activatedPatterns {
    singleton?: Singleton;
}
export default function setupPatterns(patterns: Patterns[]): activatedPatterns;
export declare const abilitedPatterns: Patterns[];
