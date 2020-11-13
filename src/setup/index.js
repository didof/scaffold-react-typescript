import setupPatterns, { abilitedPatterns } from "./patterns";
var Features;
(function (Features) {
    Features["Patterns"] = "Patterns";
})(Features || (Features = {}));
export var abilitedFeatures = [Features.Patterns];
export default function setup(features) {
    console.log("initializing features: [" + features + "]");
    features.forEach(function (f) {
        switch (f) {
            case Features.Patterns:
                setupPatterns(abilitedPatterns);
                break;
        }
    });
}
