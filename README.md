# fullStack
[full-stack learning in w3schools.](https://www.w3schools.com/)

## 学习路径

> content: html > css > js > sql > dsa

> language: js > python > java > c++ > c

add something from xmhj.

```powershell
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