enum Patterns {
   // structural
   Adapter,
   Bridge,
   Composite,
   Decorator,
   Facade,
   Flyweight,
   Proxy,
   // behavioral
   ChainOfResponsibility,
   Command,
   Iterator,
   Mediator,
   Memento,
   Observer,
   State,
   Strategy,
   Template,
   Visitor,
   // creational
   Factory,
   AbstractFactory,
   Builder,
   Prototype,
   Singleton = "Singleton",
}

export const abilitedPatterns = [Patterns.Singleton];

function initSingleton(): void {
   console.log(`initializing "${Patterns.Singleton}" pattern.`);
}

export default function setupPatterns(patterns: Patterns[]): void {
   console.log(`initializing patterns: [${patterns}]`);
   patterns.forEach((p) => {
      switch (p) {
         case Patterns.Singleton:
            initSingleton()
            break;
         default:
            throw Error(`The pattern ${p} is not recognized.`);
      }
   });
}