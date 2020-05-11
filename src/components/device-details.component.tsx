import React from "react";
import { CordovaDevice } from "../logic/Devices/Cordova";


export default class DeviceDetails extends React.Component<{}, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      // @ts-ignore
      deviceData: device
    };
  }

  test(): void {
    let device: CordovaDevice = new CordovaDevice();
    device.CallUri("calc://");
  }

  render() {
    let deviceInformation: any = null;
    if (this.state.deviceData) {
      deviceInformation = Object.keys(this.state.deviceData).map(key =>
        <div>{key} - {this.state.deviceData[key]}</div>
      );
    }

    return (
      <div>
        <h1>Device Information</h1>
        {deviceInformation}
        Test123
        <input type="button" onClick={() => { this.test(); }} name="TestButton" value="TestButton" />
      </div>
    );
  }
}
