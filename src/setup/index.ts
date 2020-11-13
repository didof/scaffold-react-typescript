import setupPatterns, { abilitedPatterns } from "./patterns";

enum Features {
   Patterns = 'Patterns'
}

export const abilitedFeatures = [Features.Patterns];

export default function setup(features: Features[]) {
   console.log(`initializing features: [${features}]`);
   features.forEach((f) => {
      switch (f) {
         case Features.Patterns:
            setupPatterns(abilitedPatterns);
            break;
      }
   })
}