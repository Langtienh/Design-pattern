class Projector {
  on(): void {
    console.log("Bật máy chiếu");
  }

  off(): void {
    console.log("Tắt máy chiếu");
  }
}

class FacadeScreen {
  down(): void {
    console.log("Hạ màn máy chiếu");
  }

  up(): void {
    console.log("Kéo màn máy chiếu lên");
  }
}

class Lights {
  dim() {
    console.log("Giảm độ sáng");
  }

  on() {
    console.log("Bật đèn");
  }
}

class FilmControl {
  private projector: Projector;
  private screen: FacadeScreen;
  private lights: Lights;
  constructor(projector: Projector, screen: FacadeScreen, lights: Lights) {
    this.lights = lights;
    this.projector = projector;
    this.screen = screen;
  }

  watchMovie() {
    this.projector.on();
    this.screen.down();
    this.lights.on();
  }

  endMovie() {
    this.lights.dim();
    this.projector.off();
    this.screen.up();
  }
}

const filmControl = new FilmControl(new Projector(), new FacadeScreen(), new Lights());
filmControl.watchMovie();
filmControl.endMovie();
