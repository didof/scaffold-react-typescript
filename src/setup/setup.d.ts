import { activatedPatterns } from "./patterns/patterns";
declare enum Features {
    Patterns = "Patterns"
}
export declare const abilitedFeatures: Features[];
export interface activatedFeatures {
    patterns?: activatedPatterns;
}
export default function setup(features: Features[]): activatedFeatures;
export {};
