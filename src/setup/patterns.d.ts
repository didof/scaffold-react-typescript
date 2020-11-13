declare enum Patterns {
    Adapter = 0,
    Bridge = 1,
    Composite = 2,
    Decorator = 3,
    Facade = 4,
    Flyweight = 5,
    Proxy = 6,
    ChainOfResponsibility = 7,
    Command = 8,
    Iterator = 9,
    Mediator = 10,
    Memento = 11,
    Observer = 12,
    State = 13,
    Strategy = 14,
    Template = 15,
    Visitor = 16,
    Factory = 17,
    AbstractFactory = 18,
    Builder = 19,
    Prototype = 20,
    Singleton = "Singleton"
}
export declare const abilitedPatterns: Patterns[];
export default function setupPatterns(patterns: Patterns[]): void;
export {};