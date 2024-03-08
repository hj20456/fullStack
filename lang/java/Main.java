/* Java重学之路开启 */

// 一个Java文件只有一个public公开类，且名称和文件名称相同
public class Main {
    // 静态方法意味着可以直接通过类名调用，而无需实例化，也就是可以获取一些静态变量。args[]字符数组用于接收命令行参数，可以在程序内使用
    public static void main(String[] args) {
        System.out.print("Hello, World!(without new line)");
        System.out.println("Hello, World!"); // 打印并换行

        /**
         * 变量类型，标识符区分大小写，可包含字母、数字、下划线和美元符号$ 
         * 数据类型：基元类型（原始类型）、引用类型（对象类型）。基元只有大小和类型，没有方法。
         * 基元类型：byte(1 byte),short(2 bytes),int(4 bytes),long(8 bytes),float(4 bytes),double(8 bytes),char(2 bytes),boolean(1 byte)
         * 引用类型：String,Arrays,Class,Interface等
         * 基元类型和引用类型的区别：前者有Java预定义，后者有程序员创建(String 除外);
         *  1. 前者没有方法，后者可以调用方法;
         *  2. 前者始终有值，后者可以是null；
         *  3. 前者小写字母开头，后者大写字母开头
        */
        String str = "Hello";
        final int i = 1; // 可选final，用于定义常量
        float f = 1.0f;
        double d = 9.99d;
        char c = 'a';
        boolean b = true;

        System.out.println(str + " " + i + " " + f + " " + d + " " + c + " " + b);

        // String方法
        System.out.println(str.length());
        System.out.println(str.toUpperCase());
        System.out.println(str.toLowerCase());
        System.out.println("首次出现lo的位置是(从0开始): " + str.indexOf("lo"));
        System.out.println(str.concat(" World!\n"));

        // +号，数字相加，字符相连，数字+字符=>相连

        // 数学函数
        System.out.println("(5,10)最大值: " + Math.max(5, 10));
        System.out.println("(5,10)最小值: " + Math.min(5, 10));
        System.out.println("平方根: " + Math.sqrt(64));
        System.out.println("绝对值（Java语言成立年）: " + Math.abs(-1995));
        System.out.println("2的3次方: " + Math.pow(2, 3));
        System.out.println("0~99随机数: " + (int)(Math.random() * 100)); //类型手动转换

        // 条件表达式
        if (b == true) {
            System.out.println("b == true");
        } else {
            System.out.println("b != true");
        }

        // short hand if...else【三元一行运算】 (条件)?"成功时执行":"失败时执行"
        System.out.println((b == true) ? "b == true" : "b != true");

        // switch statement
        switch (i) {
            case 1:
                System.out.println("i == 1");
                break;
            case 2:
                System.out.println("i == 2");
                break;
            default:
                System.out.println("i != 1 && i != 2");
        }

        // while loop statement
        int j = 0;
        while (j < 10) {
            System.out.println(j);
            j++;
        }

        //do while loop statement
        j = 0;
        do {
            System.out.println(j);
            j++;
        } while (j < 10);

        // for loop statement
        for (int k = 0; k < 10; k++) { // output:0,1,2,4
            // break and continue
            if (k == 3) {
                continue;
            }
            if (k == 5) {
                break;
            }
            System.out.println("k = " + k);
        }

        // for-each loop statement
        int[] arr = {1, 2, 3, 4, 5};
        for (int k : arr) {
            System.out.println(k);
        }

        String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
        for (String k : cars) {
            System.out.println(k);
        }

        /* Java基础到此结束，下面开始进阶学习Methods */

        // todo: Methods学习

    }
}