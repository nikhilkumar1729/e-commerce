import java.util.Scanner;

public class MobileBankingLogin {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("=== Welcome to WAP Mobile Banking ===");
        System.out.print("Enter your username: ");
        String username = scanner.nextLine();

        System.out.print("Enter your PIN: ");
        String pin = scanner.nextLine();

        
        if (authenticate(username, pin)) {
            System.out.println("Login successful! Accessing your account...");
           \
            showMenu();
        } else {
            System.out.println("Login failed! Invalid credentials.");
        }

        scanner.close();
    }

    private static boolean authenticate(String username, String pin) {
       
        return username.equals("user123") && pin.equals("1234");
    }

    private static void showMenu() {
        System.out.println("1. Check Balance");
        System.out.println("2. Transfer Funds");
        System.out.println("3. Logout");
       
    }
}
