# Mongodb学习笔记

## 基本概念
|名称|解释|
|--|--|
|Database|Mongodb数据库|
|Collection|集合（表）|
|Document|文档（数据行）|
|_id|自增id|
|ObjectId|自增id数据类型|
|insert_one|插入一条数据，返回结果包含ObjectId|
|insert_many|插入多条数据|
|find|查找数据,返回列表。参数{1}过滤条件，参数{2}指定显示列|
|find_one|查找第一条|
|updateOne|更新第一条，参数{1}过滤条件，参数{2}更新操作：$set:{}，参数{3}`upsert:true`找不到就插入|
|updateMany|更新所有，参数{1}过滤条件，参数{2}更新操作：$ins:{}|
|deleteOne|删除第一条，参数{1}过滤条件|
|deleteMany|删除所有，参数{1}过滤条件|
|count_documents|统计数据|
|sort|排序|
|index|索引|

## 常用命令

```powershell
# 注释待补充
show dbs #显示数据库
use blog # 打开数据库
db.createCollection("post") # 创建集合
# 插入
db.posts.insertOne({"title":"Post 1"})
db.posts.insertOne({
  title: "Post Title 1",
  body: "Body of post.",
  category: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date()
})
db.posts.insertMany([  
  {
    title: "Post Title 2",
    body: "Body of post.",
    category: "Event",
    likes: 2,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 3",
    body: "Body of post.",
    category: "Technology",
    likes: 3,
    tags: ["news", "events"],
    date: Date()
  },
  {
    title: "Post Title 4",
    body: "Body of post.",
    category: "Event",
    likes: 4,
    tags: ["news", "events"],
    date: Date()
  }
])

# 查找
db.posts.find()
db.posts.findOne()
db.posts.find({category:"News"})  # 条件过滤
db.posts.find({}, {title:1, date:1}) # 所有数据只显示title date两列（默认显示_id）
db.posts.find({category:"News"}, {title:1, date:1}) # 条件过滤+指定显示列
db.posts.find({}, {_id:0, title:1, date:1}) # 不显示_id字段

# 更新
db.posts.updateOne({title:"Post Title 1"},{$set:{likes:2}})
 # 找不到则插入upsert:true
db.posts.updateOne( 
  { title: "Post Title 5" }, 
  {
    $set: 
      {
        title: "Post Title 5",
        body: "Body of post.",
        category: "Event",
        likes: 5,
        tags: ["news", "events"],
        date: Date()
      }
  }, 
  { upsert: true }
)
 # 批量更新likes,从1开始递增
db.posts.updateMany({}, { $inc: { likes: 1 } })

# 删除
db.posts.deleteOne({ title: "Post Title 5" })
db.posts.deleteMany({ category: "Technology" })
```

## 查询运算符
| 运算符 | 解释                                      |
| ------ | ----------------------------------------- |
| $eq    | 值相等（比较↓）                           |
| $ne    | 值不相等                                  |
| $gt    | 值大于另一个值                            |
| $gte   | 值大于或等于另一个值                      |
| $lt    | 值小于另一个值                            |
| $lte   | 值小于或等于另一个值                      |
| $in    | 数组内的值匹配                            |
| $and   | 返回两个查询都匹配的文档（逻辑↓）         |
| $or    | 返回任一查询匹配的文档                    |
| $nor   | 返回两个查询都不匹配的文档                |
| $not   | 返回查询不匹配的文档                      |
| $regex | 允许在计算字段值时使用正则表达式（执行↓） |
| $text  | 执行文本搜索                              |
| $where | 使用 JavaScript 表达式匹配文档            |

## 更新运算符
| 运算符       | 解释                             |
| ------------ | -------------------------------- |
| $currentDate | 将字段值设置为当前日期（字段↓）  |
| $inc         | 递增字段值                       |
| $rename      | 重命名字段                       |
| $set         | 设置字段的值                     |
| $unset       | 从文档中删除字段                 |
| $addToSet    | 向数组添加不同的元素（数组↓）    |
| $pop         | 删除数组的第一个或最后一个元素   |
| $pull        | 从数组中删除与查询匹配的所有元素 |
| $push        | 将元素添加到数组                 |

## 聚合管道
```powershell
db.posts.aggregate([
  // Stage 1: Only find documents that have more than 1 like
  {
    $match: { likes: { $gt: 1 } }
  },
  // Stage 2: Group documents by category and sum each categories likes
  {
    $group: { _id: "$category", totalLikes: { $sum: "$likes" } }
  }
])
# print: [{_id: 'News', totalLikes: 3}, {_id: 'Event', totalLikes: 8}]
```