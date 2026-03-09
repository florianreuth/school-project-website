/*
This project is licensed under the MIT License.
See the LICENSE file in the project root for details.

Copyright (c) 2024-2026 Florian Reuth <git@florianreuth.de>
*/

public final class SumExample {

    public static int sum(final int a, final int b) {
        return a + b;
    }

    public static void main(final String[] args) {
        final int result = sum(5, 10);
        System.out.println("Die Summe ist: " + result);
    }

}
