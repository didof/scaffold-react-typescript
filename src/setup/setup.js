import setupPatterns, { abilitedPatterns } from "./patterns/patterns";
var Features;
(function (Features) {
    Features["Patterns"] = "Patterns";
})(Features || (Features = {}));
export const abilitedFeatures = [Features.Patterns];
export default function setup(features) {
    console.log(`initializing features: [${features}]`);
    const activatedFeatures = {};
    features.forEach((f) => {
        switch (f) {
            case Features.Patterns:
                activatedFeatures.patterns = setupPatterns(abilitedPatterns);
                break;
            default:
                throw Error(`The feature ${f} is not recognized.`);
        }
    });
    return activatedFeatures;
}
