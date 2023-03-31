public class Ejercicio7 {
    public static void main(String[] args) {
        System.out.println("Instrucciones:");
        System.out.println("Crear un programa en `Java` que realice lo siguiente:");
        System.out.println("  - Input");
        System.out.println("    - Solicitar al usuario un dia de la semana (Lunes - Viernes)");
        System.out.println("    - Solicitar al usuario una hora (horas y minutos)");
        System.out.println("  - Calcular cuántos minutos faltan para el fin de semana.");
        System.out.println("    - Considerando el inicio para el fin de semana **Viernes a las 15:00 hrs**");
        System.out.println("  - Output");
        System.out.println("    - Mostrar el resultado por un mensaje en consola.");
        // Input
        System.out.println("Ingrese un dia de la semana (Lunes - Viernes):");
        String dia = System.console().readLine().toLowerCase();
        int diaNumero = 0;
        switch (dia) {
            case "lunes":
                diaNumero = 4;
                break;
            case "martes":
                diaNumero = 3;
                break;
            case "miercoles":
                diaNumero = 2;
                break;
            case "jueves":
                diaNumero = 1;
                break;
            case "viernes":
                diaNumero = 0;
                break;
            default:
                break;
        }
        System.out.println("Ingrese la hora:");
        // casting to int
        int hora = Integer.parseInt(System.console().readLine());
        System.out.println("Ingrese los minutos:");
        // casting to int
        int minutos = Integer.parseInt(System.console().readLine());
        // Calculo
        int minutosFaltantes = calculadoraMinutos(diaNumero, hora, minutos);
        // Output
        System.out.println("Faltan " + minutosFaltantes + " minutos para el fin de semana.");
    }

    public static int calculadoraMinutos(int dia, int hora, int minutos) {
        int resultado = 0;
        if (dia == 0 && hora >= 15) {
            resultado = 0;
        } else {
            resultado = (dia * 24 * 60);
            if (hora >= 15) {
                resultado += (hora - 15) * 60;
            } else {
                resultado += (15 - hora) * 60;
            }
            resultado -= minutos;
        }
        return resultado;
    }

    // Testing
    // lunes 10:00
    // 4*24*60 = 5760
    // 15-10 = 5
    // 5*60 = 300
    // total = 6060
    // lunes 16:00
    // 4*24*60 = 5760
    // 16-15 = 1
    // 1*60 = 60
    // total = 5820

    // lunes 14:30
    // 4*24*60 = 5760
    // 15-14 = 1
    // 1*60 = 60
    // 60-30 = 30
    // total = 5790

}
