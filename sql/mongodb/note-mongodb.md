# Mongodb学习笔记

## 常用命令

```powershell
# 注释待补充
show dbs
use blog
db.createCollection("post")
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
db.posts.find()
db.posts.findOne()
db.posts.find({category:"News"})
db.posts.find({}, {title:1, date:1})
db.posts.find({category:"News"}, {title:1, date:1})
db.posts.find({}, {_id:0, title:1, date:1})

```