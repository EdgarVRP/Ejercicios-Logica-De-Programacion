import java.util.Scanner;

public class Ejercicio8 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Ingrese 10 números enteros");
        int[] numeros = new int[10];
        for (int i = 0; i < numeros.length; i++) {
            numeros[i] = scanner.nextInt();
        }
        scanner.close();
        int[] numerosPrimos = new int[10];
        int[] numerosNoPrimos = new int[10];
        for (int i = 0; i < numeros.length; i++) {
            if (esPrimo(numeros[i])) {
                numerosPrimos[i] = numeros[i];
            } else {
                numerosNoPrimos[i] = numeros[i];
            }
        }
        System.out.println("Los números ingresados son:");
        for (int i = 0; i < numeros.length; i++) {
            System.out.println(numeros[i]);
        }

        System.out.println("Los números primos son:");
        for (int i = 0; i < numerosPrimos.length; i++) {
            if (numerosPrimos[i] != 0) {
                System.out.println(numerosPrimos[i]);
            }
        }
        System.out.println("Los números no primos son:");
        for (int i = 0; i < numerosNoPrimos.length; i++) {
            if (numerosNoPrimos[i] != 0) {
                System.out.println(numerosNoPrimos[i]);
            }
        }

    }

    public static boolean esPrimo(int numero) {
        if (numero == 1) {
            return false;
        }
        for (int i = 2; i < numero; i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true;
    }
}
