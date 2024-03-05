# fullStack
[full-stack learning in w3schools.](https://www.w3schools.com/)

## 学习路径

> content: html > css > js > sql > dsa

> language: js > python > java > c++ > c

add something from xmhj.

```powershell
# 远程仓库不对
git remote -v
git remote origin
git remote add origin https://github.com/hj20456/fullStack.git
# 再创建分支推送，发布pr
``` 
# powershell批量重命名
$files = Get-ChildItem -Filter "*.js.下载"
foreach ($file in $files) {
    # 构建新的文件名
    $newName =$file.Name -replace "\.js.下载$", ".js"
    # 重命名文件
    Rename-Item -Path $file.FullName -NewName $newName
}
$files = Get-ChildItem -Filter "*.js.js";foreach ($file in $files) {$newName =$file.Name -replace "\.js.js$", ".js";Rename-Item -Path $file.FullName -NewName $newName;}
```
