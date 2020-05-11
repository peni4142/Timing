import { IDevice } from "../Interfaces/IDevice";


export class CordovaDevice implements IDevice {
    CallUri(uri: string): void {
        // cordova.InAppBrowser.open("",uri,"location=yes");

        // cordova.InAppBrowser.open(uri,"_system","location=yes");

        // cordova.file.resolveLocalFileSystemURI(uri);

        // @ts-ignore
        cordova.InAppBrowser.open("https://www.google.com","_blank","location=yes");
    }

}