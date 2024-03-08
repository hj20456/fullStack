# MySQl 必知必会-学习笔记

## 一、课前准备（3）

> 课程核心模块：实践篇 - 进阶篇 - 优化篇 - 案例篇

### 1.1 开篇词

> 核心思想：项目的实际需求 - 解决问题所需的知识点 - 用好这些知识的实战经验。

1. 在实战中学习
2. 在工作中，最重要的绝对不是你的知识储备量，而是你解决实际问题的能力
3. 正确的学习方法，远比你投入的时间更重要
4. 选择一个连锁超市的实战项目，手把手从 0 到 1 走完项目全流程，不仅掌握核心操作，还能让你真正拥有实战能力，能够迅速上手任何一个项目。
5. 为什么采用“连锁超市”项目

- 熟悉的场景，减少理解成本
- 背后环节复杂、数据多样；解决一个复杂项目，再去做其他业务，就可以游刃有余

### 1.2 环境准备

> 安装 MySQL 和图像化管理工具 Workbench

#### 下载

- 下载地址：[https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/)，进入页面下载下面大的 msi 安装包
- 进入后，按需安装 `MySQL server` 和 `workbench` ，其他默认配置即可

#### Workbench（以下简称 wb）使用

- 连接 MySQL
- 打开 excel 创建 test.csv 文件，包括 3 列，分别是 barcode、goodsname、price，代表商品条码、商品名称和售价。插入几条数据。记事本重新打开，再覆盖保存（UTF-8 格式）。
- wb 工作区创建数据库 `create database demo;` ，点击“⚡”（闪电）执行
- 导入 csv ：左侧 Navigator 下方 `Schemas` ，选择 demo 数据库，右键导入 `Table Data...`，

### 1.3 后续提升

1. 阅读源码：[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)-->下拉框选择三项： `8.0.x` `Source Code` `Windows (Architecture Independent)`-->下载
2. 浏览论坛：[https://forums.mysql.com/](https://forums.mysql.com/)

## 二、实践篇（13）

### 2.1 存储

> 数据存储**4 步**过程：创建数据库-->确认字段-->创建数据表-->插入数据

#### **创建数据库**

```sql
CREATE DATABASE demo;
```

```powershell
show databases;
```

- infomation_schema：MySQL 系统自带的数据库，主要保存 MySQL 数据库服务器的系统信息，比如数据库的名称、数据表的名称、字段名称、存取权限、数据文件所在的文件夹和系统使用的文件夹，等等
- performance_schema:MySQL 系统自带的数据库，可以用来监控 MySQL 的各类性能指标。
- sys:MySQL 系统自带的数据库，主要作用是，以一种更容易被理解的方式展示 MySQL 数据库服务器的各类性能指标，帮助系统管理员和开发人员监控 MySQL 的技术性能。
- mysql:保存了 MySQL 数据库服务器运行时需要的系统信息，比如数据文件夹、当前使用的字符集、约束检查信息，等等。

#### 确认字段

#### 创建数据表

- 指明数据库
- 最后一个字段不要加**逗号**

```sql
CREATE TABLE demo.test
(
  barcode text,
  goodsname text,
  price int
);
```

- 主键有什么用？

  - 必须唯一，不能重复；
  - 不能是空；
  - 必须可以唯一标识数据表中的记录。

- 为什么要使用？
  - 帮助减少错误数据
  - 提高查询速度

```sql
-- 添加列和主键
ALTER TABLE demo.test
ADD COLUMN itemnumber int PRIMARY KEY AUTO_INCREMENT;
```

插入数据

```sql
INSERT INTO demo.test
(barcode,goodsname,price)
VALUES ('0001','本',3);
```

- 为什么要始终标明要插入的字段
  - 可读性好
  - 不易出错
  - 容易修改

### 2.2 字段

> 最常用字段：整数：INT; 小数（定点数）：DECIMAL; 字符串：TEXT; 日期与时间：DATETIME。> 技术服务于业务，根据公司 DBA 规范适当调整

- 整型：TINYINT、SMALLINT、MEDIUMINT、INT（INTEGER）和 BIGINT
- 浮点和定点：FLOAT、DOUBLE、REAL（全局字段，默认 DOUBLE）、DECIMAL
  - DECIMAL（M,D）的方式表示高精度小数。其中，M 表示整数部分加小数部分，一共有多少位，M<=65。D 表示小数部分位数，D&lt;M。
- 文本：TEXT、CHAR(M)、VARCHAR(M)、ENUM（枚举） 和 SET（字符串对象）
  - TINYTEXT、TEXT、MEDIUMTEXT、LONGTEXT
- 日期时间：DATETIME、YEAR、TIME、DATE、TIMESTAMP

### 2.3 表

#### 创建

#### 格式

```sql
CREATE TABLE <表名>{
字段名1 数据类型 [字段级别约束] [默认值]，
字段名2 数据类型 [字段级别约束] [默认值]，
......
[表级别约束]
};
```

#### 约束

- 字段约束
  - 非空（主键自动满足）
  - 唯一（可以是空值）
  - 自增
- 表约束

#### 修改

#### 复制表结构

```sql
CREATE TABLE demo.importheadhist
LIKE demo.importhead;
```

#### 添加字段

```sql
ALTER TABLE demo.importheadhist
ADD confirmer INT;

ALTER TABLE demo.importheadhist
ADD confirmdate DATETIME;

ALTER TABLE demo.importheadhist
ADD suppliername TEXT FIRST|AFTER supplierid;
```

#### 修改字段

```sql
ALTER TABLE demo.importheadhist
ADD confirmer INT;

-- 可以省略COLUMN关键词
ALTER TABLE demo.importheadhist
ADD COLUMN confirmdate DATETIME;

ALTER TABLE demo.importheadhist
CHANGE quantity importquantity DOUBLE;

ALTER TABLE demo.importheadhist
MODIFY importquantity DECIMAL(10,3);

ALTER TABLE demo.importheadhist
ADD suppliername TEXT AFTER supplierid;
```

### 2.4 增删改查数据

```sql
DELETE
FROM demo.goodsmaster
WHERE itemnumber > 1 AND specification IS NULL;
```

### 2.5 设置主键

#### 业务字段

建议你尽量不要用业务字段，也就是跟业务有关的字段做主键。因为无法预测在项目的整个生命周期中，哪个业务字段会因为项目的业务需求而有重复，或者重用之类的情况出现。

#### 自增字段

```sql
-- 复制表：这样操作可以不用删除trans的内容，在实际工作中更适合
UPDATE demo.trans AS
a,demo.membermaster AS b
SET a.memberid=b.id
WHERE a.transactionno > 0
AND a.cardno = b.cardno;
```

#### 指定字段

场景：本地多个 MySQL 数据库，定期汇总到总部 MySQL 数据库，保证自增 id 不重复

操作：总部的参数信息表中添加一个字段，记录当前会员编号最大值。本地上传时先将最大值加 1，在依次递增

### 2.6 外键和连接

- 虽然不用**外键约束**，也可以进行**关联查询**，但是有了它，MySQL 系统才会保护你的数据，避免出现误删的情况，从而提高系统整体的可靠性。
- 为什么在 MySQL 里，没有外键约束也可以进行关联查询呢？原因是外键约束是有成本的，需要消耗系统资源。即使你不用外键约束，也要想办法通过**应用层面的附加逻辑**，来实现外键约束的功能，确保数据的一致性。
- 一句话说清连接：将数据表联合查询，字段分别有 4、5 个（1 个相同）。内联 a、b 表，（返回符合连接条件的行，可能小于初始行数）；a 左连 b，返回 a 5 个字段（符合条件，列出 b 表数据，否则填充 null，a 表字段完整，b 表字段残缺，数据等于初始行数）

```sql
-- 主表 从表
CREATE TABLE demo.importhead (
  listnumber INT PRIMARY KEY,
  supplierid INT,
  stocknumber INT,
  importtype INT,
  importquantity DECIMAL(10 , 3 ),
  importvalue DECIMAL(10 , 2 ),
  recorder INT,
  recordingdate DATETIME
);

CREATE TABLE demo.importdetails
(
  listnumber INT,
  itemnumber INT,
  quantity DECIMAL(10,3),
  importprice DECIMAL(10,2),
  importvalue DECIMAL(10,2),-- 定义外键约束，指出外键字段和参照的主表字段
  CONSTRAINT fk_importdetails_importhead
  FOREIGN KEY (listnumber) REFERENCES importhead (listnumber)
);

SELECT
  a.transactionno,
  a.itemnumber,
  a.quantity,
  a.price,
  a.transdate,
  b.membername
FROM demo.trans AS a
LEFT JOIN demo.membermaster AS b -- LEFT JOIN，以demo.transaction为主
ON (a.cardno = b.cardno);

SELECT
  a.transactionno,
  a.itemnumber,
  a.quantity,
  a.price,
  a.transdate,
  b.membername
FROM
  demo.membermaster AS b
RIGHT JOIN
  demo.trans AS a ON (a.cardno = b.cardno); -- RIGHT JOIN，顺序颠倒了，还是以dem
```

### 2.7 条件语句

> WHERE and HAVING

- 查询需求：查单笔销售金额超过 50 元的商品

```sql
-- 查询单笔销售额超过50的商品名称
SELECT g.goodsname
FROM goodsmaster AS g
    INNER JOIN transactiondetails AS t ON g.itemnumber = t.itemnumber
WHERE t.salesvalue > 50.00;

SELECT g.goodsname
FROM goodsmaster AS g
    INNER JOIN transactiondetails AS t ON g.itemnumber = t.itemnumber
GROUP BY g.goodsname
HAVING max(g.salesprice) > 50.00;

SELECT DISTINCT g.goodsname
FROM goodsmaster AS g
    INNER JOIN transactiondetails AS t ON g.itemnumber = t.itemnumber
WHERE t.salesvalue > 50.00;
```

### 2.8 聚合函数

> 分组统计

- SUM()
- AVG()
- MAX()
- MIN()
- COUNT()

- LETF(str,n) 返回左边 n 个字符
- ORDER BY

### 2.9 日期函数

#### 提取

```sql
SELECT
  EXTRACT(HOUR FROM b.transdate) AS 时段, SUM(a.quantity) AS 数量,
  SUM(a.salesvalue) AS 金额
FROM
  demo.transactiondetails a
  JOIN
  demo.transactionhead b ON (a.transactionid = b.transactionid)
GROUP BY EXTRACT(HOUR FROM b.transdate)
ORDER BY EXTRACT(HOUR FROM b.transdate);
```

#### 计算

> DATE_ADD()，ADDDATE()、DATE_SUB() 和 SUBDATE()
> CURDATE()、DAYOFWEEK()、DATE_FORMAT 和 DATEDIFF()。

```sql
SELECT DATE_ADD('2020-12-10', INTERVAL - 1 YEAR);
SELECT DATE_FORMAT("2020-12-01 13:25:50","%T");
SELECT DATE_FORMAT("2020-12-01 13:25:50","%r");
SELECT DATEDIFF("2021-02-01","2020-12-01");
```

### 2.10 数学计算、字符串处理和条件判断

#### 数学函数

取整函数 ROUND()、CEIL()、FLOOR()，绝对值函数 ABS() 和求余函数 MOD()。

#### 字符串函数

- CONCAT（s1,s2,...）：表示把字符串 s1、s2……拼接起来，组成一个字符串。
- CAST（表达式 AS CHAR）：表示将表达式的值转换成字符串。
- CHAR_LENGTH（字符串）：表示获取字符串的长度。
- SPACE（n）：表示获取一个由 n 个空格组成的字符串。

#### 条件判断函数

- IFNULL（V1，V2）：表示如果 V1 的值不为空值，则返回 V1，否则返回 V2。
- IF（表达式，V1，V2）：如果表达式为真（TRUE），则返回 V1，否则返回 V2。

### 2.11 索引

语句前面加上`EXPLAIN`查看细节

```sql
CREATE INDEX 索引名 ON TABLE 表名 (字段1，字段2，...);
ALTER TABLE 表名 ADD { INDEX | KEY } 索引名 (字段1，字段2，...);
DROP INDEX 索引名 ON 表名;
ALTER TABLE 表名 DROP PRIMARY KEY；
```

- 假如我有一个单品销售统计表，包括门店编号、销售日期（年月日）、商品编号、销售数量、销售金额、成本、毛利，而用户经常需要对销售情况进行查询，你会对这个表建什么样的索引呢？为什么？

- 对于这个单品销售统计表，可以考虑建立以下索引：

1. 门店编号和销售日期：这个组合索引可以帮助用户按门店和销售日期进行快速查询，例如按门店和日期范围查找销售情况。
2. 商品编号：单独的商品编号索引可以帮助用户按商品编号快速查询，例如查找特定商品的销售情况。
3. 销售日期：单独的销售日期索引可以帮助用户按日期快速查询，例如按日期范围查找销售情况。

- 这些索引可以帮助优化查询性能，提高用户对销售情况的查询效率。

### 2.12 事务

#### 特点

- 原子性（atomicity）:事务中的操作要么全部执行，要么全部不执行
- 一致性（consistency）:数据的完整性不会因为事务的执行而受到破坏。
- 持久性（durability）:事务对数据的修改是永久有效的
- 隔离性（isolation）:多个事务同时执行的时候，不互相干扰

```sql
START TRANSACTION 或者 BEGIN （开始事务）
一组DML语句
COMMIT（提交事务）ROLLBACK（事务回滚）

-- 存储过程函数使用事务
DELIMITER // -- 修改分隔符为 //
CREATE PROCEDURE demo.mytest() -- 创建存储过程
BEGIN-- 开始程序体
DECLARE EXIT HANDLER FOR SQLEXCEPTION ROLLBACK; -- 定义SQL操作发生错误是自动回滚
START TRANSACTION;-- 开始事务
INSERT INTO demo.mytrans VALUES (1,5);
UPDATE demo.inventory SET invquantity = invquantity - 5;
COMMIT;-- 提交事务
END
//-- 完成创建存储过程
DELIMITER ;
CALL demo.mytest();--调用
```

#### 注意

- 如果发现事务中的某个操作发生错误，要及时使用回滚；
- 只有事务中的所有操作都可以正常执行，才进行提交。
- 把重要的关联操作放在事务中，确保操作的原子性，并且对失败的操作进行回滚处理。
- 通过对锁的使用，可以实现事务之间的相互隔离。锁的使用方式不同，隔离的程度也不同。计算完成之后，你也不要忘记把隔离等级恢复到系统默认的状态。一方面，对于一些核心的数据更改操作，你可能需要较高的隔离等级，比如涉及金额的修改；另一方面，你要考虑资源的消耗，不能使系统整体的效率受到太大的影响。

### 2.13临时表

#### 总结

1. MySQL 中有 2 种临时表，分别是内部临时表和外部临时表
   1. 内部临时表主要用于性能优化，由系统自动产生，我们无法看到；
   2. 外部临时表通过 SQL 语句创建，我们可以使用。
   3. 在使用临时表的时候，要从简化查询和挤占资源两个方面综合考虑，既不能过度加重系统的负担，同时又能够通过存储中间结果，最大限度地简化查询。
2. 外部表使用

   ```sql
    CREATE TEMPORARY TABLE 表名(
      字段名 字段类型,
      ...
    ) ENGINE = MEMORY; （临时表数据存在内存中，默认是磁盘InnoDB）;
   ```

## 三、进阶篇（8）
