class Singleton {
  private static instance: Singleton;

  // Đảm bảo constructor là private để ngăn việc khởi tạo từ bên ngoài
  private constructor() {}

  // Phương thức tĩnh để lấy instance duy nhất của lớp
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Một phương thức ví dụ
  public showMessage(): void {
    console.log("Hello, I am a singleton instance!");
  }
}

// Sử dụng Singleton
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.showMessage(); // Output: Hello, I am a singleton instance!

// Kiểm tra xem cả hai biến có trỏ đến cùng một instance hay không
console.log(singleton1 === singleton2); // Output: true
