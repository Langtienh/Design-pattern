interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
}

class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }
}

class TV implements Device {
  private on: boolean = false;
  private volume: number = 50;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
  }

  disable(): void {
    this.on = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }
}

class Radio implements Device {
  private on: boolean = false;
  private volume: number = 30;

  isEnabled(): boolean {
    return this.on;
  }

  enable(): void {
    this.on = true;
  }

  disable(): void {
    this.on = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }
}

class AdvancedRemoteControl extends RemoteControl {
  mute(): void {
    this.device.setVolume(0);
  }
}

function bridgeClientCode(remote: RemoteControl) {
  remote.togglePower();
  remote.volumeUp();
  remote.volumeDown();
}

const tv = new TV();
const tvRemote = new RemoteControl(tv);
bridgeClientCode(tvRemote);

const radio = new Radio();
const radioRemote = new AdvancedRemoteControl(radio);
bridgeClientCode(radioRemote);
radioRemote.mute();
