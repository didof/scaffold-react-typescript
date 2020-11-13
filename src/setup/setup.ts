import setupPatterns, { abilitedPatterns, activatedPatterns } from "./patterns/patterns";

enum Features {
   Patterns = 'Patterns'
}

export const abilitedFeatures = [Features.Patterns];

export interface activatedFeatures {
   patterns?: activatedPatterns
}

export default function setup(features: Features[]): activatedFeatures {
   console.log(`initializing features: [${features}]`);

   const activatedFeatures: activatedFeatures = {};


   features.forEach((f) => {
      switch (f) {
         case Features.Patterns:
            activatedFeatures.patterns = setupPatterns(abilitedPatterns)
            break;
         default:
            throw Error(`The feature ${f} is not recognized.`);
      }
   })

   return activatedFeatures;
}