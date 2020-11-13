var Patterns;
(function (Patterns) {
    // structural
    Patterns[Patterns["Adapter"] = 0] = "Adapter";
    Patterns[Patterns["Bridge"] = 1] = "Bridge";
    Patterns[Patterns["Composite"] = 2] = "Composite";
    Patterns[Patterns["Decorator"] = 3] = "Decorator";
    Patterns[Patterns["Facade"] = 4] = "Facade";
    Patterns[Patterns["Flyweight"] = 5] = "Flyweight";
    Patterns[Patterns["Proxy"] = 6] = "Proxy";
    // behavioral
    Patterns[Patterns["ChainOfResponsibility"] = 7] = "ChainOfResponsibility";
    Patterns[Patterns["Command"] = 8] = "Command";
    Patterns[Patterns["Iterator"] = 9] = "Iterator";
    Patterns[Patterns["Mediator"] = 10] = "Mediator";
    Patterns[Patterns["Memento"] = 11] = "Memento";
    Patterns[Patterns["Observer"] = 12] = "Observer";
    Patterns[Patterns["State"] = 13] = "State";
    Patterns[Patterns["Strategy"] = 14] = "Strategy";
    Patterns[Patterns["Template"] = 15] = "Template";
    Patterns[Patterns["Visitor"] = 16] = "Visitor";
    // creational
    Patterns[Patterns["Factory"] = 17] = "Factory";
    Patterns[Patterns["AbstractFactory"] = 18] = "AbstractFactory";
    Patterns[Patterns["Builder"] = 19] = "Builder";
    Patterns[Patterns["Prototype"] = 20] = "Prototype";
    Patterns["Singleton"] = "Singleton";
})(Patterns || (Patterns = {}));
export var abilitedPatterns = [Patterns.Singleton];
function initSingleton() {
    console.log("initializing \"" + Patterns.Singleton + "\" pattern.");
}
export default function setupPatterns(patterns) {
    console.log("initializing patterns: [" + patterns + "]");
    patterns.forEach(function (p) {
        switch (p) {
            case Patterns.Singleton:
                initSingleton();
                break;
            default:
                throw Error("The pattern " + p + " is not recognized.");
        }
    });
}
