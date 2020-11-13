import Singleton from "../../../design_patterns/creational/Singleton";
import { Patterns } from "../enum_patterns";
export default function initSingleton() {
    console.log(`initializing "${Patterns.Singleton}" pattern.`);
    const instance = Singleton.getInstance();
    return instance;
}
