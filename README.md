import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Product[] catalog = {
            new Product(1, "Laptop", 50000),
            new Product(2, "Smartphone", 20000),
            new Product(3, "Headphones", 1500)
        };

        Scanner scanner = new Scanner(System.in);
        Order order = new Order();

        while (true) {
            System.out.println("\nAvailable Products:");
            for (Product p : catalog) {
                p.display();
            }

            System.out.print("Enter Product ID to add to cart (0 to finish): ");
            int choice = scanner.nextInt();

            if (choice == 0) break;

            boolean found = false;
            for (Product p : catalog) {
                if (p.getId() == choice) {
                    order.addProduct(p);
                    found = true;
                    break;
                }
            }

            if (!found) {
                System.out.println("Invalid Product ID.");
            }
        }

        order.showOrder();
        scanner.close();
    }
}

