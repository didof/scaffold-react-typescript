export default class Singleton {
    private static instance;
    private constructor();
    static createSingleton(): Singleton;
    static getInstance(): Singleton;
    businnessLogic(): void;
}
export declare function buildSingleton(): Singleton;
