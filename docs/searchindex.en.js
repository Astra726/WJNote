var relearn_searchindex = [
  {
    "breadcrumb": "MKDocs",
    "content": "Commands Hugo Install brew install hugo - macOS install. hugo version hugo server -D - 启动本地服务器。 hugo --gc - 垃圾回收。 生成静态文件 运行以下命令生成网站： bash 复制 hugo # 生成到 public/\n或指定输出目录 hugo -d docs # 如果使用 docs/ 作为发布目录 3. 配置 GitHub Pages 使用 Hugo 输出 情况 1：使用 docs/ 目录（推荐） 将 Hugo 生成的静态文件放入 docs/ 目录：\nbash 复制 hugo -d docs # 生成到 docs/ 在 GitHub 仓库设置中：\n进入 Settings → Pages。\n选择 Source: Deploy from a branch → Branch: main（或 master）。\n选择 Folder: /docs。\n点击 Save。\nTerminal Commands mkdir tech_notes - 创建文件夹 cd tech_notes - 进入文件夹 touch docs/css/custom.css - 创建文件 MkDocs Commands mkdocs new [dir-name] - Create a new project. mkdocs serve - Start the live-reloading docs server. mkdocs build - Build the documentation site. mkdocs -h - Print help message and exit.",
    "description": "Commands Hugo Install brew install hugo - macOS install. hugo version hugo server -D - 启动本地服务器。 hugo --gc - 垃圾回收。 生成静态文件 运行以下命令生成网站： bash 复制 hugo # 生成到 public/\n或指定输出目录 hugo -d docs # 如果使用 docs/ 作为发布目录 3. 配置 GitHub Pages 使用 Hugo 输出 情况 1：使用 docs/ 目录（推荐） 将 Hugo 生成的静态文件放入 docs/ 目录：\nbash 复制 hugo -d docs # 生成到 docs/ 在 GitHub 仓库设置中：\n进入 Settings → Pages。\n选择 Source: Deploy from a branch → Branch: main（或 master）。",
    "tags": [],
    "title": "Terminal Commands",
    "uri": "/WJNote/section1/topic1/index.html"
  },
  {
    "breadcrumb": "MKDocs",
    "content": "Built with by Relearn and Hugo. FontAwesome partial\nGo Theme Shortcodes Go Fontawesome Download Magic FontAwesome ​ python 1 print(\"Hello World!\") 这是一段 高亮文字。\n这是高亮文字 ==这是高亮文字== # 部分编辑器会渲染为黄色背景\n这是高亮文字\nGet Hugo",
    "description": "Built with by Relearn and Hugo. FontAwesome partial\nGo Theme Shortcodes Go Fontawesome Download Magic FontAwesome ​ python 1 print(\"Hello World!\") 这是一段 高亮文字。",
    "tags": [],
    "title": "Theme learning",
    "uri": "/WJNote/section1/topic2/index.html"
  },
  {
    "breadcrumb": "MKDocs",
    "content": "Share and collaborate your project. Create a Repository Go to GitHub. Create a new repository for your project by clicking on the New in the Repositories. Name the repository and select whether it should be Public or Private (depending on whether you want others to see it).\nPush Your Project to GitHub On your local machine where the MkDocs project exists:\n# Initialize Git git init # Add your files to the Git staging area git add . # Commit your changes git commit -m \"Initial commit\" Switched to a new branch 'main' git checkout -b main # Link the repository to your local directory git remote add origin https://github.com/your-username/your-repository.git # Push the changes to GitHub git push -u origin main Now, your project is stored on GitHub.\nCollaborating Across Multiple Computers On any other computer, you (or collaborators) can clone the repository and continue editing:\n# Clone the repository: `git clone https://github.com/your-username/your-repository.git` # Commit and push the changes: git add . git commit -m \"building\" git push origin main # Pull changes on other machines before working: `git pull` upload (push) your changes # Navigate to Your Project Directory cd /path/to/your/project # Check Git Status, to see which files have been modified or added, run: git status # Stages all changes in your working directory git add . # Stage specific files git add filename # Commit the Changes git commit -m \"Your commit message here\" # Push the Changes to GitHub git push origin main Changes the repository name git remote set-url origin [new_url] git remote -v 删除本地 .git 文件夹（谨慎操作！） rm -rf .git\n进入你的 Hugo 项目目录 cd /path/to/your/hugo-project\n初始化 Git（如果之前删除了 .git） git init\n关联新的远程仓库 git remote add origin https://github.com/Astra726/WJNote.git\n重置 Git 代理：\nbash 复制 git config –global –unset http.proxy git config –global –unset https.proxy\nbash 复制\n测试 HTTPS curl -v https://github.com\n测试 Git 协议 ssh -T git@github.com\n测试端口连通性 nc -zv github.com 443\ngit remote -v\n禁用 GitHub 的 Jekyll 构建 在 /docs 目录下创建空文件 .nojekyll，阻止 GitHub 使用 Jekyll 处理你的文件： bash 复制 touch docs/.nojekyll git add docs/.nojekyll git commit -m “Disable Jekyll processing” git push origin main\nrm -rf public/ rm -rf docs/",
    "description": "Share and collaborate your project. Create a Repository Go to GitHub. Create a new repository for your project by clicking on the New in the Repositories. Name the repository and select whether it should be Public or Private (depending on whether you want others to see it).\nPush Your Project to GitHub On your local machine where the MkDocs project exists:\n# Initialize Git git init # Add your files to the Git staging area git add . # Commit your changes git commit -m \"Initial commit\" Switched to a new branch 'main' git checkout -b main # Link the repository to your local directory git remote add origin https://github.com/your-username/your-repository.git # Push the changes to GitHub git push -u origin main Now, your project is stored on GitHub.",
    "tags": [],
    "title": "Github",
    "uri": "/WJNote/section1/topic3/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "MKDocs",
    "uri": "/WJNote/section1/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "Python",
    "uri": "/WJNote/section2/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "MKDocs",
    "uri": "/WJNote/section3/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "MKDocs",
    "uri": "/WJNote/section4/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "MKDocs",
    "uri": "/WJNote/section5/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/WJNote/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Posts",
    "uri": "/WJNote/posts/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/WJNote/tags/index.html"
  }
]
