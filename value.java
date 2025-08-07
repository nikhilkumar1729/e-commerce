import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Comparator;

public class PrecisionSort {
    public static void main(String[] args) {
        BigDecimal[] numbers = {
            new BigDecimal("1.001"),
            new BigDecimal("1.01"),
            new BigDecimal("1.0001"),
            new BigDecimal("1.1"),
            new BigDecimal("1.00001")
        };

        Arrays.sort(numbers, Comparator.naturalOrder());

        System.out.println("Sorted numbers:");
        for (BigDecimal num : numbers) {
            System.out.println(num.toPlainString());
        }
    }
}
