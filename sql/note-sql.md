# SQL 学习笔记

## [SQLite官方文档](https://www.sqlite.org/)

### SQLite用途
1. SQLite不能直接与客户端/服务器SQL数据库引擎（如MySQL，Oracle，PostgreSQL或SQL Server）相提并论，因为SQLite正在尝试解决不同的问题。

2. 客户端/服务器 SQL 数据库引擎努力实现企业数据的共享存储库。它们强调可伸缩性、并发性、集中化和控制。SQLite致力于为单个应用程序和设备提供本地数据存储。SQLite强调经济性、效率、可靠性、独立性和简单性。

3. SQLite不与客户端/服务器数据库竞争。SQLite 与 fopen（） 竞争。

### 建议

- SQLite项目于2000-05-09启动。未来总是很难预测，但开发人员的意图是在 2050 年之前支持 SQLite。设计决策时要牢记这一目标。

- 我们开发人员希望您发现SQLite有用，我们恳请您好好使用它：制作快速，可靠且易于使用的优质美观产品。像原谅他人一样为自己寻求宽恕。就像您免费获得SQLite一样，也可以免费给予，偿还债务。

- May you do good and not evil
愿你行善而不作恶
- May you find forgiveness for yourself and forgive others
愿你为自己找到宽恕，宽恕他人
- May you share freely, never taking more than you give.
愿你自由分享，永远不要索取超过你付出的。

### 命令行使用
```powershell
# 入口
sqlite3 [dbname] # 打开/创建数据库


# 备份
.open [dbname]
.backup main [目标地址，如'D:\backup\dbname.bak']

# 查看信息
.databases # main: C:\Users\hj\Documents\gitProject\fullStack\sql\sqlite\third r/w
.tables
```

### sqlite动态数据类型

- 存储类（数据类型）

> 日期和时间：存储为TEXT、REAL或INTEGER

|存储类|解释|
|--|--|
|NULL|空值|
|INTEGER|有符号整数，布尔值为整数0和1|
|REAL |8字节IEEE浮点数|
|TEXT |文本字符串|
|BLOB |blob数据存储，与输入时完全相同|


## VSCODE插件
- SQLTools
- SQLTools SQLite
- SQLTools MySQL/MariaDB/TiDB

