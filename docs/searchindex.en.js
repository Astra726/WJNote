var relearn_searchindex = [
  {
    "breadcrumb": "POWER PLATFORM",
    "content": "Excel 相关操作 List rows present in a table Apply to each Condition Add a row into a table Filter array Update a row\nFilter array 按单列筛选符合条件的行。 Update a row 更改符合条件的筛选行内容。 变量引入 Initialize variable Append to array variable Increment variable Set variable\nvariable 主要在 Condition 中使用 Variable。\n其他 Run_a_query_against_a_dataset POWER BI 引入，取决于 Query text 栏中，DAX 语句最后返回的结果，例如：\nRETURN\rSUMMARIZE(\rTableWithReplacements,\r'BATCH_INCIDENT_NUM'[INCIDENT],\r[Engineer_Filled], -- Use the new column\r) 引入时填写：\n# From\r@{outputs('Run_a_query_against_a_dataset')?['body/firstTableRows']}\r# Value 直接引入\r@{item()?['BATCH_INCIDENT_NUM[SFC]']}\r@{item()?['[Engineer_Filled]']}\r# 引入变量\r@{variables('NCIF')}\r# Value 格式处理：浮点数小数位保留 2 位\r@{formatNumber(float(item()?['BATCH_INCIDENT_NUM[TIME]']), 'N2')} 在循环模块 Apply_to_each 中的引用方式：\n@{items('Apply_to_each')['[Engineer_Filled]']} Create HTML table 生成 HTML 表格。 Compose 打印结果或修饰 Create_HTML_table：\n\u003cstyle\u003e\rtable {\rborder: 1px solid #00A9E0;\rbackground-color: #FFFFFF;\rwidth: 100%;\rtext-align: left;\rborder-collapse: collapse;\r}\rtable td, table th {\rborder: 1px solid #00A9E0;\rpadding: 3px 2px;\r}\rtable tbody td {\rfont-size: 13px;\r}\rtable thead {\rbackground: #00A9E0; /* 设置标题行的背景颜色 */\rborder-bottom: 2px solid #444444;\r}\rtable thead th {\rfont-size: 15px;\rfont-weight: bold;\rcolor: #FFFFFF; /* 设置标题行的文字颜色为白色 */\rborder-left: 2px solid #D0E4F5;\r}\rtable thead th:first-child {\rborder-left: none;\r}\r\u003c/style\u003e@{body('Create_HTML_table')} When a new email arrives (V3) Post adaptive card to channel Adaptive Card:\n{\r\"$schema\": \"http://adaptivecards.io/schemas/adaptive-card.json\",\r\"type\": \"AdaptiveCard\",\r\"version\": \"1.2\",\r\"body\": [\r{\r\"type\": \"TextBlock\",\r\"text\": \"Andon Notification\",\r\"wrap\": true,\r\"size\": \"ExtraLarge\",\r\"weight\": \"Bolder\"\r},\r{\r\"type\": \"TextBlock\",\r\"text\": \"@{replace(triggerOutputs()?['body/subject'], '\"', '\\\"')}\",\r\"weight\": \"Bolder\",\r\"size\": \"Medium\"\r},\r{\r\"type\": \"TextBlock\",\r\"text\": \"From: @{triggerOutputs()?['body/from']}\",\r\"wrap\": true,\r\"weight\": \"Lighter\",\r},\r{\r\"type\": \"TextBlock\",\r\"text\": \"@{replace(triggerOutputs()?['body/bodyPreview'],'\"', '\\\"')}\",\r\"isSubtle\": true,\r\"wrap\": true\r}\r]\r} CASE 使用邮件发送表格 在模块 Send an email (V2) 中，正文引入 @{outputs('Compose')} 可以在邮件中发送表格。 EXCEL 筛选 EXCEL 插入 or 更新行 Teams 通知 收到特定发件人的邮件后，转发到 Teams 聊天组中。",
    "description": "Excel 相关操作 List rows present in a table Apply to each Condition Add a row into a table Filter array Update a row\nFilter array 按单列筛选符合条件的行。 Update a row 更改符合条件的筛选行内容。 变量引入 Initialize variable Append to array variable Increment variable Set variable",
    "tags": [],
    "title": "Power Automate",
    "uri": "/WJNote/powerplatform/powerautomate/index.html"
  },
  {
    "breadcrumb": "HUGO",
    "content": "Built with by Relearn and Hugo. FontAwesome Go Theme Shortcodes Go Fontawesome Download Magic FontAwesome ​ python 1 print(\"Hello World!\") 这是一段 高亮文字。\n这是高亮文字 Get Hugo",
    "description": "Built with by Relearn and Hugo. FontAwesome Go Theme Shortcodes Go Fontawesome Download Magic FontAwesome ​ python 1 print(\"Hello World!\") 这是一段 高亮文字。",
    "tags": [],
    "title": "Theme learning",
    "uri": "/WJNote/hugo/theme/index.html"
  },
  {
    "breadcrumb": "HUGO",
    "content": "Hugo 常用指令 brew install hugo - macOS install. hugo version hugo server - 启动本地服务器。 hugo --gc - 垃圾回收。 生成静态文件 hugo - 默认生成到 public/。 hugo -d docs - 生成静态文件，使用 docs/ 作为发布目录。 在配置文件 hugo.toml 中添加以下语句，可更改发布目录默认为 docs/（ 放到文件顶部）。 ​ hugo.toml 1 publishDir = \"docs\" # 静态文件输出目录 Terminal mkdir tech_notes - 创建文件夹 cd tech_notes - 进入文件夹 touch docs/css/custom.css - 创建文件 rm -rf public/ - 删除文件夹 MkDocs mkdocs new [dir-name] - Create a new project. mkdocs serve - Start the live-reloading docs server. mkdocs build - Build the documentation site. mkdocs -h - Print help message and exit. Enable GitHub Pages for Hosting MkDocs After pushing your MkDocs project to GitHub, install the MkDocs GitHub Pages plugin: 1 pip install mkdocs-material mkdocs-git-revision-date-localized-plugin Add this to your mkdocs.yml: ​ mkdocs.yml 1 2 3 plugins: - search - git-revision-date-localized Deploy your site: 1 mkdocs gh-deploy",
    "description": "Hugo 常用指令 brew install hugo - macOS install. hugo version hugo server - 启动本地服务器。 hugo --gc - 垃圾回收。 生成静态文件 hugo - 默认生成到 public/。 hugo -d docs - 生成静态文件，使用 docs/ 作为发布目录。 在配置文件 hugo.toml 中添加以下语句，可更改发布目录默认为 docs/（ 放到文件顶部）。 ​ hugo.toml 1 publishDir = \"docs\" # 静态文件输出目录 Terminal mkdir tech_notes - 创建文件夹 cd tech_notes - 进入文件夹 touch docs/css/custom.css - 创建文件 rm -rf public/ - 删除文件夹 MkDocs mkdocs new [dir-name] - Create a new project. mkdocs serve - Start the live-reloading docs server. mkdocs build - Build the documentation site. mkdocs -h - Print help message and exit. Enable GitHub Pages for Hosting MkDocs After pushing your MkDocs project to GitHub, install the MkDocs GitHub Pages plugin: 1 pip install mkdocs-material mkdocs-git-revision-date-localized-plugin",
    "tags": [],
    "title": "Quick lookup",
    "uri": "/WJNote/hugo/topic1/index.html"
  },
  {
    "breadcrumb": "HUGO",
    "content": "Share and collaborate your project Create a Repository Go to GitHub. Create a new repository for your project by clicking on the New in the Repositories. Name the repository and select whether it should be Public or Private. Check the box for Add a README file. Configure Git Account Check Currently Active Git Account View the account used by the current project (priority: project \u003e global).\n1 2 git config --show-origin user.name git config --show-origin user.email View global configuration. 1 git config --global --list | grep user Configure Git Account Uniformly Global settings (default for all projects). 1 2 git config --global user.name \"Astra726\" git config --global user.email \"XXX\" Project-level settings (current project only). 1 2 git config user.name \"Astra726\" git config user.email \"XXX\" Push Your Project to GitHub On your local machine where the project exists: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 # Navigate to Your Project Directory cd /path/to/your/project # Delete the local .git folder rm -rf .git # Connect to a new remote repository git remote add origin https://github.com/Astra726/WJNote.git git remote -v # Check Git Status, to see which files have been modified or added git status # Initialize Git git init # Add your files to the Git staging area git add . # Commit your changes git commit -m \"Initial commit\" # Push the changes to GitHub git push -u origin main Collaborating Across Multiple Computers On any other computer, you (or collaborators) can clone the repository and continue editing: 1 2 3 4 5 # Clone the repository: `git clone https://github.com/your-username/your-repository.git` # Pull changes on other machines before working: `git pull` 无法连接 Github 问题解决 同步仓库失败，报错提示如下：\nFailed to connect to github.com port 443 after 75016 ms: Couldn’t connect to server.\nHost github.com:443 was resolved.\n重置 Git 代理 1 2 git config --global --unset http.proxy git config --global --unset https.proxy 为终端配置代理 临时启用代理（替换为你的代理地址）： 1 2 export http_proxy=\"http://127.0.0.1:7890\" export https_proxy=\"http://127.0.0.1:7890\" 测试是否生效： 1 curl -v https://github.com 配置 GitHub Pages 使用 Hugo 输出 使用 docs/ 目录（推荐） 将 Hugo 生成的静态文件放入 docs/ 目录；\n在 GitHub 仓库设置中：进入 Settings → Pages。\n选择 Source: Deploy from a branch → Branch:main → Folder: /docs。\n点击 /Save。\nHugo 生成静态文件后不显示 CSS 检查 hugo.toml 文件中的 baseURL，应设为部署网址。 1 2 3 4 5 # 本地测试用 baseURL = \"http://localhost:1313/\" # Github Page baseURL = \"https://astra726.github.io/WJNote/\" 修改为基于根路径的绝对路径：查看 docs/ 下的 index.html 文件里的 css 引用路径，或者在页面使用 f12 进入开发者模式，console 下面查看哪些 css 文件引用出错。\n错误示例：例如下面显示的 ./WJNote/ 为相对路径，而在部署到 GitHub Pages 后，应该使用的是从根路径开始的相对路径或绝对路径。\n解决办法：检查 hugo.toml 文件中的是否有设置 relativeURLs = true，删掉这句话。\n❌ 错误路径：\u003clink href=\"./WJNote/fonts/fontawesome/css/...\"\u003e\u003cnoscript\u003e ✅ 正确路径：\u003clink href=\"/WJNote/css/theme.min.css?1743775153\" rel=\"stylesheet\"\u003e",
    "description": "Share and collaborate your project Create a Repository Go to GitHub. Create a new repository for your project by clicking on the New in the Repositories. Name the repository and select whether it should be Public or Private. Check the box for Add a README file. Configure Git Account Check Currently Active Git Account View the account used by the current project (priority: project \u003e global).\n1 2 git config --show-origin user.name git config --show-origin user.email View global configuration. 1 git config --global --list | grep user",
    "tags": [],
    "title": "Github",
    "uri": "/WJNote/hugo/github/index.html"
  },
  {
    "breadcrumb": "SQL",
    "content": "VSCode Extension Install the SQLite extension and visualize the database directly from code editor.\nSearch for SQLite and install the extension. Open the command palette ( Ctrl+Shift+P ) and search for “SQLite: Open Database”. Select .db file, and the tables will appear in a side panel. Generate ER relationship 使用 eralchemy 来生成数据库的 ER 关系，并输出为 .gv 文件，之后上传到在线工具转换为图像格式。\n安装 ERAlchemy: pip install eralchemy\n使用 eralchemy 生成 .gv 文件: eralchemy -i SQLitePath -o erd.gv\nPathtoSQLite: SQLite 数据库的路径； erd.gv 是生成的输出文件。\n上传 .gv 文件，或者直接复制文件内容到在线工具中即可查看数据库的 ER 关系图。\n在线工具有 Graphviz Online 和 WebGraphviz。",
    "description": "VSCode Extension Install the SQLite extension and visualize the database directly from code editor.\nSearch for SQLite and install the extension. Open the command palette ( Ctrl+Shift+P ) and search for “SQLite: Open Database”. Select .db file, and the tables will appear in a side panel. Generate ER relationship 使用 eralchemy 来生成数据库的 ER 关系，并输出为 .gv 文件，之后上传到在线工具转换为图像格式。\n安装 ERAlchemy: pip install eralchemy\n使用 eralchemy 生成 .gv 文件: eralchemy -i SQLitePath -o erd.gv",
    "tags": [],
    "title": "Configuration",
    "uri": "/WJNote/sql/sqlite/index.html"
  },
  {
    "breadcrumb": "PYTHON",
    "content": "设置 Python 默认指向 Python3（macOS 系统） 检查当前 Python 版本和地址 打开终端，运行： 1 2 3 4 5 python --version python3 --version which python which python3 创建符号链接，将 python 命令链接到 python3。 运行以下命令： 1 2 3 4 5 # 删除现有的 Python 符号链接： sudo rm /usr/local/bin/python #创建新的符号链接，将 python 链接到 Python 3 的路径： sudo ln -s /Library/Frameworks/Python.framework/Versions/3.13/bin/python3 /usr/local/bin/python 重新运行：python --version，设置成功应该显示 Python 3.x。\n安装 pip 检查 pip 是否已经安装： 1 python -m ensurepip --upgrade 使用 get-pip.py 安装（如果尚未安装）： 1 2 3 4 5 6 7 8 下载 get-pip.py 脚本： curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py # 运行 get-pip.py 来安装 pip： python get-pip.py # 更新 pip： python -m pip install --upgrade pip vscode 配置解释器 按住 ctrl+shift+p （macOS: cmd+shift+p）输入文本查找并选择 Python:Select Inerpreter。 选择正确的 python 版本。 SSL 证书问题 pip 安装某些库时报错：There was a problem confirming the ssl certificate: …。\n解决办法：关掉代理。\n删除当前安装 python /bin/bash -c “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/uninstall.sh)\"\n删除与 Python 相关的文件：\n删除全局 Python 可执行文件和链接： 1 2 3 4 sudo rm -f /usr/local/bin/python3 sudo rm -f /usr/local/bin/python sudo rm -f /usr/local/bin/pip3 sudo rm -f /usr/local/bin/pip 删除残留的配置文件： 手动清理残留的配置文件（例如在 ~/.bash_profile, ~/.zshrc 等文件中设置的 Python 环境变量）。 Homebrew 安装 brew 打开终端，运行以下命令来安装 Homebrew（需要管理员密码）： 1 2 3 4 /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)\" # 验证 Homebrew 是否安装成功 brew --version 如果 curl 命令无法直接下载 Homebrew 安装脚本（Failed to connect to raw.githubusercontent.com port 443 after 1 ms: Couldn’t \u003e connect to server，），可以从浏览器直接下载该脚本手动运行：\n在浏览器中访问 URL： go to install homebrew 将脚本下载到本地文件系统。 在终端中进入文件所在目录并运行：/bin/bash install.sh 手动添加 Homebrew 到 PATH 打开终端输入： 1 2 3 4 5 # 编辑 ~/.zshrc 文件 nano ~/.zshrc #在文件的末尾添加以下内容（Homebrew 默认安装的路径 Apple Silicon Macs）。 export PATH=\"/opt/homebrew/bin:$PATH\" 保存并退出编辑器: Ctrl + X -\u003e Y -\u003e Enter。\n重新加载 ~/.zshrc 文件，使修改生效：source ~/.zshrc 。",
    "description": "设置 Python 默认指向 Python3（macOS 系统） 检查当前 Python 版本和地址 打开终端，运行： 1 2 3 4 5 python --version python3 --version which python which python3 创建符号链接，将 python 命令链接到 python3。 运行以下命令： 1 2 3 4 5 # 删除现有的 Python 符号链接： sudo rm /usr/local/bin/python #创建新的符号链接，将 python 链接到 Python 3 的路径： sudo ln -s /Library/Frameworks/Python.framework/Versions/3.13/bin/python3 /usr/local/bin/python",
    "tags": [],
    "title": "Environment",
    "uri": "/WJNote/python/environment/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }} https://mcshelby.github.io/hugo-theme-relearn/introduction/index.html\nhttps://fontawesome.com/icons\nhttps://www.colormagic.art/zh\nhttps://markdown.com.cn/basic-syntax/\n{{ $paginator := .Paginate (.Pages.ByTitle) }} {{ range $paginator.Pages }} {{ .Title }}\n{{ end }}\n{{ template “_internal/pagination.html” . }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }} https://mcshelby.github.io/hugo-theme-relearn/introduction/index.html\nhttps://fontawesome.com/icons\nhttps://www.colormagic.art/zh\nhttps://markdown.com.cn/basic-syntax/\n{{ $paginator := .Paginate (.Pages.ByTitle) }} {{ range $paginator.Pages }} {{ .Title }}\n{{ end }}\n{{ template “_internal/pagination.html” . }}",
    "tags": [],
    "title": "HUGO",
    "uri": "/WJNote/hugo/index.html"
  },
  {
    "breadcrumb": "PYTHON",
    "content": "Pyautogui Screenshot 截取屏幕指定区域并保存为临时文件。\nparam region: 截取区域的坐标 (left, top, width, height)\nreturn: 临时文件的路径\ndef capture_screen_region(region):\rtry:\r# 截取屏幕指定区域\rscreenshot = pyautogui.screenshot(region=region)\r# 创建临时文件\rwith tempfile.NamedTemporaryFile(suffix=\".png\", delete=False) as temp_file:\rtemp_path = temp_file.name\rscreenshot.save(temp_path)\rreturn temp_path, screenshot # 返回临时文件路径和截图对象\rexcept Exception as e:\rprint(f\"截图失败：{e}\")\rreturn None, None\rscreen_region = (x, y, w, h) # 定义屏幕截图的区域 (left, top, width, height)\rimg_path, screenshot = capture_screen_region(screen_region) # 截取屏幕指定区域 PaddleOCR 初始化 PaddleOCR（全局变量，避免重复初始化） ocr = PaddleOCR(\ruse_angle_cls=False, # 不使用方向分类模型\rlang=\"ch\", # 使用中文模型\rdet_model_dir=\"ch_PP-OCRv2_det\", # 指定检测模型路径\rrec_model_dir=\"ch_PP-OCRv2_rec\", # 指定识别模型路径\rshow_log=False # 关闭日志输出\r)\rprint('ocr 完成初始化') 对指定图片进行 OCR 识别，返回识别出的文本 img_path: 图片路径\nreturn: 识别出的文本（字符串）\ndef ocr_image(img_path):\rtry:\r# 进行 OCR 识别\rresults = ocr.ocr(img_path, cls=True)\r# 提取识别结果\rtext_lines = []\rfor result in results:\rfor line in result:\rtext_lines.append(line[1][0]) # 提取每一行的文本\r# 将识别结果合并为一个字符串\rtext = \"\\n\".join(text_lines)\rreturn text\rexcept Exception as e:\rprint(f\"OCR识别失败：{e}\")\rreturn None Pyperclip ImageGrab # 从剪贴板获取截屏图片\rfrom PIL import ImageGrab # 用于从剪贴板获取图片\rdef get_screenshot_from_clipboard():\rtry:\r# 从剪贴板获取图片\rscreenshot = ImageGrab.grabclipboard()\rif screenshot is None:\rraise ValueError(\"剪贴板中没有图片！\")\rreturn screenshot\rexcept Exception as e:\rprint(f\"无法从剪贴板获取图片：{e}\")\rreturn None # 将文本复制到剪贴板\rdef copy_to_clipboard(text):\rpyperclip.copy(text)\rprint(\"文本已复制到剪贴板！\")",
    "description": "Pyautogui Screenshot 截取屏幕指定区域并保存为临时文件。\nparam region: 截取区域的坐标 (left, top, width, height)\nreturn: 临时文件的路径\ndef capture_screen_region(region):\rtry:\r# 截取屏幕指定区域\rscreenshot = pyautogui.screenshot(region=region)\r# 创建临时文件\rwith tempfile.NamedTemporaryFile(suffix=\".png\", delete=False) as temp_file:\rtemp_path = temp_file.name\rscreenshot.save(temp_path)\rreturn temp_path, screenshot # 返回临时文件路径和截图对象\rexcept Exception as e:\rprint(f\"截图失败：{e}\")\rreturn None, None\rscreen_region = (x, y, w, h) # 定义屏幕截图的区域 (left, top, width, height)\rimg_path, screenshot = capture_screen_region(screen_region) # 截取屏幕指定区域 PaddleOCR 初始化 PaddleOCR（全局变量，避免重复初始化） ocr = PaddleOCR(\ruse_angle_cls=False, # 不使用方向分类模型\rlang=\"ch\", # 使用中文模型\rdet_model_dir=\"ch_PP-OCRv2_det\", # 指定检测模型路径\rrec_model_dir=\"ch_PP-OCRv2_rec\", # 指定识别模型路径\rshow_log=False # 关闭日志输出\r)\rprint('ocr 完成初始化') 对指定图片进行 OCR 识别，返回识别出的文本 img_path: 图片路径",
    "tags": [],
    "title": "Common Libraries",
    "uri": "/WJNote/python/common/index.html"
  },
  {
    "breadcrumb": "SQL",
    "content": "Python Connecting to SQL Databases Using sqlite3 (Built-in Python). 1 2 3 4 5 6 7 8 9 10 11 12 import sqlite3 def query_database(query): # create SQLite connect conn = sqlite3.connect(db_file_path) cursor = conn.cursor() cursor.execute(query) # submit and disconnect conn.commit() conn.close() Print result cursor.fetchall() 返回列表，其中每一行都是一个元组。结果存在内存中。 1 2 3 4 5 # 获取所有结果 result = cursor.fetchall() # 获取指定第 n+1 行 result = cursor.fetchall()[n] cursor.fetchone() 返回查询结果的第一行，如果存在多行，它只会返回第一行的内容。 1 2 # 指定输出第一行的第 n+1 个元素 result = cursor.fetchone()[n] 但是 .fetchone() 每次调用都会取出并移动到下一行，所以可以实现类似 .fetchall()[n] 的功能： 1 2 3 4 5 6 7 8 9 10 11 # 获取第 3 行 result = cursor.fetchone() result = cursor.fetchone() result = cursor.fetchone() # 获取指定第 n+1 行 N = n result = None for _ in range(N): result = cursor.fetchone() print(result) Table operation 1 2 3 4 5 6 7 8 9 # Delete table DROP TABLE IF EXISTS TableName # Change table name ALTER TABLE TableName_Old RENAME TO TableName_New # 获取总行数 SELECT COUNT(*) FROM TableName total_rows = cursor.fetchone()[0] Deduplication GROUP BY 中要包括所有需要保持唯一的列。 1 2 3 4 5 6 7 cursor.execute(\"\"\" DELETE FROM TableName WHERE ROWID NOT IN ( SELECT MIN(ROWID) FROM TableName GROUP BY ColumnName1, ColumnName2) \"\"\") 示例：\nROWID MEASURE_NAME MEASURE_GROUP DESCRIPTION ACTUAL 1 Test1 Group1 Desc1 10 2 Test1 Group1 Desc2 15 3 Test2 Group2 Desc3 20 如果 GROUP BY 是 MEASURE_NAME, MEASURE_GROUP， ROWID 1 和 ROWID 2 会被视为同一组，因为 MEASURE_NAME 和 MEASURE_GROUP 相同。\n由于 MIN(ROWID) 的使用，ROWID 1 会被保留，ROWID 2 会被删除，即便 DESCRIPTION 和 ACTUAL 不同。\nColumn operation Delete column SQLite 不支持使用 ALTER TABLE 直接删除列。可以组合操作，创建一个新的表，复制数据时不包括该列，删除原始表，然后重命名新表为原始表的名称。\nAdd Column 1 2 3 4 5 6 7 # 检查表中是否已存在此列 cursor.execute(\"PRAGMA table_info(TableName)\") columns = [col[1] for col in cursor.fetchall()] if 'ColumnName' not in columns: # 创建 ColumnName 列，ColumnType 为数据类型 cursor.execute(\"\"\" ALTER TABLE TableName ADD COLUMN ColumnName ColumnType \"\"\") Character operation Fixed position 执行 UPDATE 语句，以 ‘,’ 为分隔符选择 ColumnName 列中固定第 n+1 部分： 1 2 UPDATE TableName SET ColumnName = substr(ColumnName, instr(ColumnName, ',') + n) Regular expression 关键词顺序：范围小的放到前面以优先匹配。 1 energy_pattern = re.compile(r'(\\d+XFFF|2_5X|\\d+X|\\d+E|\\d+HDTSE)') 匹配时也有先后顺序。 1 2 3 # 在 MEASURE_GROUP 和 MEASURE_NAME 中搜索能量信息。下面两个表达式有先后顺序。 match_group = energy_pattern.search(measure_name) match_name = energy_pattern.search(measure_group) 提取找到的第一个匹配项。 1 2 3 4 5 6 7 8 energy = match_group.group(0) if match_group else (match_name.group(0) if match_name else None) # 更新表中的新列 cursor.execute(\"\"\" UPDATE TableName SET ENERGY = ? WHERE ROWID = ? \"\"\", (energy, rowid))",
    "description": "Python Connecting to SQL Databases Using sqlite3 (Built-in Python). 1 2 3 4 5 6 7 8 9 10 11 12 import sqlite3 def query_database(query): # create SQLite connect conn = sqlite3.connect(db_file_path) cursor = conn.cursor() cursor.execute(query) # submit and disconnect conn.commit() conn.close()",
    "tags": [],
    "title": "Operations",
    "uri": "/WJNote/sql/topic32/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "PYTHON",
    "uri": "/WJNote/python/index.html"
  },
  {
    "breadcrumb": "PYTHON",
    "content": "日期格式清洗函数 确保日期是标准的 YYYY-MM-DD 格式。\ndef clean_date(date_str): # 将日期分割成日期和时间部分 date_part, time_part = date_str.split() # 检查日期分隔符并替换为标准格式的 '-' date_part = date_part.replace('/', '-') # 将日期部分转为标准格式 YYYY-MM-DD year, month, day = date_part.split('-') month = month.zfill(2) # 补齐月的前导零 day = day.zfill(2) # 补齐日的前导零 # 拼接回标准日期格式 formatted_date = f\"{year}-{month}-{day} {time_part}\" return formatted_date",
    "description": "日期格式清洗函数 确保日期是标准的 YYYY-MM-DD 格式。\ndef clean_date(date_str): # 将日期分割成日期和时间部分 date_part, time_part = date_str.split() # 检查日期分隔符并替换为标准格式的 '-' date_part = date_part.replace('/', '-') # 将日期部分转为标准格式 YYYY-MM-DD year, month, day = date_part.split('-') month = month.zfill(2) # 补齐月的前导零 day = day.zfill(2) # 补齐日的前导零 # 拼接回标准日期格式 formatted_date = f\"{year}-{month}-{day} {time_part}\" return formatted_date",
    "tags": [],
    "title": "Data Cleaning",
    "uri": "/WJNote/python/topic33/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "SQL",
    "uri": "/WJNote/sql/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "POWER PLATFORM",
    "uri": "/WJNote/powerplatform/index.html"
  },
  {
    "breadcrumb": "",
    "content": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "description": "子页面列表 {{ range .Pages }} {{ .Title }} {{ end }}",
    "tags": [],
    "title": "WAIT FOR ADD",
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
