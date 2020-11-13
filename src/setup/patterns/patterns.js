import { Patterns } from './enum_patterns';
import initSingleton from './initFn/init_singleton';
;
export default function setupPatterns(patterns) {
    console.log(`initializing patterns: [${patterns}]`);
    const activatedPattern = {};
    patterns.forEach((p) => {
        switch (p) {
            case Patterns.Singleton:
                activatedPattern.singleton = initSingleton();
                break;
            default:
                throw Error(`The pattern ${p} is not recognized.`);
        }
    });
    return activatedPattern;
}
export const abilitedPatterns = [Patterns.Singleton];
