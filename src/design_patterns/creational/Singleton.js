export default class Singleton {
    constructor() {
    }
    static createSingleton() {
        Singleton.instance = new Singleton();
    }
    static getInstance() {
        if (!Singleton.instance)
            this.createSingleton();
        return Singleton.instance;
    }
    businnessLogic() {
        throw Error('not implemented');
    }
}
