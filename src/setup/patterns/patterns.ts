import Singleton from '../../design_patterns/creational/Singleton';
import { Patterns } from './enum_patterns';
import initSingleton from './initFn/init_singleton';

export interface activatedPatterns {
   singleton?: Singleton,
};

export default function setupPatterns(patterns: Patterns[]): activatedPatterns {
   console.log(`initializing patterns: [${patterns}]`);

   const activatedPattern: activatedPatterns = {}

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
