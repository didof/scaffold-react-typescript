var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.createSingleton = function () {
        return new Singleton();
    };
    Singleton.getInstance = function () {
        console.log("in a static method, this referes to " + this);
        if (!Singleton.instance)
            Singleton.instance = new Singleton();
        return Singleton.instance;
    };
    Singleton.prototype.businnessLogic = function () {
        throw Error('not implemented');
    };
    return Singleton;
}());
export default Singleton;
export function buildSingleton() {
    var singleton = Singleton.createSingleton();
    return singleton;
}
