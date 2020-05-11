import { IStorage } from "../Interfaces/IStorage";
import { FakeStorage } from "../Fakes/FakeStorage";




export class ResourceManager {
    public static GetStorage(): IStorage {
        return new FakeStorage();
    }
}