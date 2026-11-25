/**
 * Chinese text for the plugin's settings tab.
 *
 * English source text is the key. New settings from upstream therefore fall
 * back to their English text until a translation is added here.
 */
const SETTINGS_ZH: Readonly<Record<string, string>> = {
    'Highlight colours': '高亮颜色',
    'Give each colour a meaning, such as “Key idea” or “Question”. Names appear wherever a colour is chosen. The colours themselves follow your theme and can be changed with a CSS snippet or the Style Settings plugin.':
        '为每种颜色赋予含义，例如“关键观点”或“疑问”。这些名称会显示在所有选择颜色的位置。颜色本身会跟随你的主题，也可以通过 CSS 片段或 Style Settings 插件修改。',
    Yellow: '黄色',
    Orange: '橙色',
    Pink: '粉色',
    Purple: '紫色',
    Blue: '蓝色',
    Green: '绿色',

    'Writing notes': '撰写笔记',
    'Where notes are written': '笔记的撰写位置',
    'Beside the passage keeps what you highlighted in view and gives the note room; on a phone it is a sheet at the bottom of the screen.':
        '在原文旁显示可以保留高亮内容，并为笔记提供充足空间；在手机上，它会显示为屏幕底部的面板。',
    'Beside the passage': '在原文旁',
    'In the sidebar': '在侧边栏',
    Sidebar: '侧边栏',
    'Compact cards': '紧凑卡片',
    'Tighter spacing and shorter quotes, for long documents.': '缩小间距并缩短引文，适合长篇文档。',
    'Open the sidebar when a source opens': '打开来源时显示侧边栏',
    'Brings the annotations forward whenever a PDF, book, page or video is opened from its note. When off, open them with the ribbon icon or the command "Show or hide the annotations sidebar"; following a link to an annotation still shows it.':
        '从笔记打开 PDF、书籍、网页或视频时，自动显示批注。关闭后，可通过功能区图标或命令“显示或隐藏批注侧边栏”打开；通过链接跳转到批注时仍会显示。',
    'Always show card actions': '始终显示卡片操作',
    'Show colour, edit, reply, link and delete under every card rather than on hover.':
        '始终在每张卡片下显示改色、编辑、回复、链接和删除操作，而不是仅在悬停时显示。',

    'Annotation notes': '标注笔记',
    'New annotation notes start with': '新标注笔记的起始标题',
    'The heading under which a new annotation note keeps its annotations. Empty for none.':
        '新标注笔记用于存放标注的标题。留空则不创建起始标题。',
    'Template for new annotation notes': '新标注笔记的模板',
    'A note whose text a new annotation note starts as, instead of the heading: its properties are kept, and {{title}}, {{date}} and {{target}} are filled in. Annotations are added at the end.':
        '新标注笔记会以该模板笔记的正文开头，而不是以标题开头。模板属性会保留，并填充 {{title}}、{{date}} 和 {{target}}。标注会追加到末尾。',
    'Write new annotations under this heading': '将新标注写入此标题下',
    'In any annotation note, new annotations go at the end of this heading\'s section, and the text after it stays after them. "## Highlights" means that level only, "Highlights" any level. A note without the heading gets it at its end. Empty: at the end of the note. Annotations a note already has stay where they are; the command "Move this note\'s annotations under the heading" moves them there.':
        '在任何标注笔记中，新标注都会追加到该标题所在小节的末尾，其后的正文仍保持在标注之后。“## Highlights”只匹配该级别，“Highlights”可匹配任意级别。没有该标题的笔记会在末尾创建它。留空则写入笔记末尾。已有标注不会移动；可使用命令“将此笔记的标注移动到标题下”迁移它们。',
    'Give each annotation a heading': '为每条标注创建标题',
    'A new annotation gets a heading of its own in its note, made of the first words of its passage or note: for the Outline, folding, and links such as [[Paper notes#First words]]. Rename it from the card or in the note; it is deleted with its annotation. For a note written before, use the command "Add headings to this note\'s annotations". Off: headings are left alone.':
        '每条新标注都会在笔记中获得独立标题，内容取自引文或笔记开头的文字，便于在大纲、折叠和 [[论文笔记#开头文字]] 等链接中使用。可从卡片或笔记中重命名，删除标注时标题也会删除。对于旧笔记，请使用命令“为此笔记的标注添加标题”。关闭后不会处理标题。',
    'Level of annotation headings': '标注标题级别',
    "A heading of this level directly above an annotation is that annotation's. Use a level below the headings you write annotations under.":
        '直接位于标注上方的该级别标题会视为该标注的标题。请使用比“写入此标题下”所用标题更低的级别。',
    'Highlight quotes in the note': '在笔记中高亮引文',
    'Wrap the quoted passage in ==highlight== marks inside the annotation note.':
        '在标注笔记中使用 ==高亮== 标记包裹引文。',
    'Keep text before the quote': '保留引文前的文字',
    'Show the words just before the passage in the annotation note, in italics. The note stores them either way, so the passage is found again if the source changes.':
        '在标注笔记中以斜体显示引文前紧邻的文字。无论此选项如何设置，笔记都会保存这些文字，以便来源变化后仍能重新定位引文。',
    'Keep text after the quote': '保留引文后的文字',
    'Show the words just after the passage in the annotation note, in italics.':
        '在标注笔记中以斜体显示引文后紧邻的文字。',
    'Keep reading progress in the note': '在笔记中记录阅读进度',
    'When a PDF, book or video is left, write where you were to its annotation note as the property annotation-progress ("12/340", "37%", "12:34"), for lists and Bases, and so that another device opens there. Off by default, because it changes the note each time.':
        '离开 PDF、书籍或视频时，将当前位置以 annotation-progress 属性写入标注笔记（例如“12/340”“37%”“12:34”），供列表和 Base 使用，也便于其他设备从同一位置打开。默认关闭，因为每次都会修改笔记。',
    'Fold annotation data in Live Preview': '在实时预览中折叠标注数据',
    'In an annotation note, shows each annotation as its passage, link, note and tags, with the stored data folded to a small mark. Put the cursor in an annotation to see it as written. Nothing in the file changes; Source mode shows everything.':
        '在标注笔记中，将每条标注显示为引文、链接、笔记和标签，并把存储数据折叠为一个小标记。将光标放入标注即可查看原始内容。文件内容不会改变；源码模式会显示全部内容。',
    'Show titles from this property': '使用此属性显示标题',
    'Where Annotator names an annotation note or its source (the tab of a PDF, book, page or video, the sidebar, the list of annotated sources, the search of all annotations, Citations), it says what this property of the note says, such as title, instead of the file\'s name. "Add the PDF\'s details" fills in title. A note without it is named as before. Only what is shown changes: no file is renamed and no note is changed. Empty: file names.':
        '当 Annotator 显示标注笔记或来源名称时（包括 PDF、书籍、网页或视频标签页、侧边栏、已标注来源列表、全部标注搜索和引文），优先显示笔记中指定属性的值，例如 title，而不显示文件名。“添加 PDF 详情”会填写 title。没有该属性的笔记仍使用原名称。此设置只改变显示内容，不会重命名文件或修改笔记。留空则使用文件名。',

    'Copying and exporting': '复制与导出',
    'Copied link': '复制的链接',
    'What is copied or dragged from a card\'s link button. Empty copies the plain link. A template may use {{link}} (the plain link) with {{quote}}, {{note}}, {{location}}, {{date}}, {{tags}}, {{title}}, {{author}} and {{year}}: for example "{{quote}}" ({{author}} {{year}}, {{location}}) {{link}}':
        '从卡片链接按钮复制或拖出的内容。留空则复制普通链接。模板可以组合 {{link}}（普通链接）以及 {{quote}}、{{note}}、{{location}}、{{date}}、{{tags}}、{{title}}、{{author}} 和 {{year}}，例如：“{{quote}}”（{{author}} {{year}}，{{location}}）{{link}}',
    'Export style': '导出样式',
    'How “Copy as Markdown” and “Export summary note” write each annotation.':
        '“复制为 Markdown”和“导出摘要笔记”写入每条标注时使用的格式。',
    'Callouts, tinted with the highlight colour': 'Callout 标注块，使用高亮颜色着色',
    'Plain block quotes': '普通块引用',
    'My own template': '自定义模板',
    Template: '模板',
    'Written once per annotation. {{quoted}} is the passage as a block quote (for a marked area, its picture) and {{quote}} the passage on one line; also {{note}}, {{image}}, {{kind}}, {{title}}, {{author}}, {{year}}, {{location}}, {{link}}, {{colour}}, {{tags}} and {{date}}.':
        '每条标注写入一次。{{quoted}} 是块引用形式的引文（标记区域则为其图片），{{quote}} 是单行引文；还可使用 {{note}}、{{image}}、{{kind}}、{{title}}、{{author}}、{{year}}、{{location}}、{{link}}、{{colour}}、{{tags}} 和 {{date}}。',
    'Link exports back to the passage': '导出内容链接回原文位置',
    'Each exported annotation links to its place in the source.': '每条导出的标注都会链接到其在来源中的位置。',

    Opening: '打开方式',
    'Open annotation notes in the reader': '在阅读器中打开标注笔记',
    'Opening a note with an annotation-target shows its source with highlights. Off, such notes open as ordinary Markdown.':
        '打开含 annotation-target 的笔记时，显示其来源及高亮。关闭后，这类笔记会作为普通 Markdown 打开。',
    'Default target folders': '默认目标文件夹',
    "Where an annotation-target that does not resolve on its own is looked for: one folder to a line, tried in order. A folder outside the vault is asked about before it is read. Several lines let one synced setting name the library folder of each computer. A folder may be written from the vault's own folder (../papers/), which names the same place on every computer the vault syncs to.":
        '当 annotation-target 无法直接解析来源时，按顺序在每个文件夹中查找。每行填写一个文件夹。读取仓库外文件夹前会先询问。可以填写多行，让同一份同步设置适配不同电脑上的资料库目录。也可以相对于仓库所在文件夹填写路径（例如 ../papers/），以便同步到其他电脑后仍指向相同位置。',
    'Also read the source from this property': '从此属性读取来源',
    'A note names its source in the property annotation-target. If your notes already name it in another property (source, pdf, file), write that name here: a note without annotation-target is then read by it.':
        '笔记通常通过 annotation-target 属性指定来源。如果你的笔记已使用其他属性（例如 source、pdf、file），请在此填写属性名；没有 annotation-target 的笔记将改用该属性。',
    'Write new notes with this property instead': '新建笔记时改用此属性',
    'New annotation notes, and notes for some pages of a PDF, name their source in the property above instead of annotation-target. Off is recommended: annotation-target is read by Annotator 0.2, by other devices and by other tools. A note written this way is read only by Annotator 0.3.2 and later with the same property set above, and not by Annotator 0.2.':
        '新建标注笔记以及 PDF 页面范围笔记时，使用上方属性而不是 annotation-target 指定来源。建议保持关闭：Annotator 0.2、其他设备和工具都能读取 annotation-target。这样写出的笔记只能由 0.3.2 及更高版本在上方配置相同属性后读取，Annotator 0.2 无法读取。',
    'Sources outside the vault': '仓库外的来源',
    'Copy outside sources into the vault': '将仓库外来源复制到仓库',
    "Off: a note's source outside the vault (a web address, a file on this computer, a Zotero, Calibre or DEVONthink link) is read where it is, and nothing is put into the vault; Annotate a copy in the vault makes a copy when you want one. On: every such source is copied into the folder for copies (below) the first time, as Annotator 0.3 did. Copies already made are read either way. Phones and tablets always read a copy, and so does Obsidian before 1.14.4.":
        '关闭：仓库外来源（网址、本机文件、Zotero、Calibre 或 DEVONthink 链接）会直接在原位置读取，不会放入仓库；“标注仓库中的副本”可在需要时创建副本。开启：首次使用时，每个此类来源都会复制到下方“副本文件夹”，与 Annotator 0.3 的行为相同。已有副本在两种模式下都可读取。手机和平板始终读取副本，Obsidian 1.14.4 之前也是如此。',
    'Folder for copies': '副本文件夹',
    'Where Annotate a copy in the vault, and every other copy of a source from outside the vault, is made. Copies already made stay where they are and are still found there: nothing is moved. Obsidian’s attachment folder is offered first where it is one folder.':
        '指定“标注仓库中的副本”以及仓库外来源的其他副本所存放的位置。已有副本会保留在当前位置并继续被找到，不会移动。如果 Obsidian 的附件文件夹只有一项，会优先建议该文件夹。',
    'Zotero data folder': 'Zotero 数据文件夹',
    'A note may name its source by a Zotero link to a PDF (zotero://open-pdf/library/items/…). The file is looked for in this folder, under "storage". Leave empty for Zotero\'s usual place, the folder Zotero in your home folder. Computers only.':
        '笔记可以通过指向 PDF 的 Zotero 链接（zotero://open-pdf/library/items/…）指定来源。插件会在该文件夹的“storage”下查找文件。留空则使用 Zotero 的默认位置，即用户主文件夹中的 Zotero 文件夹。仅适用于电脑。',
    'Calibre library folders': 'Calibre 资料库文件夹',
    "A note may name its source by a Calibre book link (calibre://show-book/Library/42). Name each library's folder here, one to a line: the book is looked for there, and its EPUB or PDF is the source. Computers only.":
        '笔记可以通过 Calibre 书籍链接（calibre://show-book/Library/42）指定来源。请在此逐行填写每个资料库的文件夹；插件会在其中查找书籍，并将 EPUB 或 PDF 作为来源。仅适用于电脑。',
    Reading: '阅读',
    'Page appearance': '页面外观',
    'For PDFs and books.': '适用于 PDF 和书籍。',
    'Follow Obsidian': '跟随 Obsidian',
    Light: '浅色',
    Dark: '深色',
    Sepia: '棕褐色',
    'Book layout': '书籍布局',
    'Continuous scroll': '连续滚动',
    Pages: '分页',
    'Book text size': '书籍文字大小',
    'Dark page brightness': '深色页面亮度',
    'Dark page contrast': '深色页面对比度',
    'Dark page warmth': '深色页面色温',
    'Show highlights in embedded PDFs': '在嵌入的 PDF 中显示高亮',
    'A PDF embedded in a note or placed on a Canvas is shown with its highlights, and a click on one opens it in the sidebar. Applies to embeds shown from now on.':
        '嵌入笔记或放置在画布上的 PDF 会显示高亮，点击高亮可在侧边栏打开。应用于此后显示的嵌入 PDF。',
    'Annotate in embedded PDFs': '在嵌入的 PDF 中标注',
    "Select text in an embedded PDF to highlight it or write a note, with the same bar as in the PDF's tab; right-click a highlight to change its colour, add a note or delete it. What you make goes into the PDF's annotation note, not the note the PDF is embedded in. On a Canvas, select the card first. Off: embeds only show their highlights.":
        '在嵌入的 PDF 中选择文字即可高亮或写笔记，并使用与 PDF 标签页相同的操作栏；右键点击高亮可改色、添加笔记或删除。新建内容会写入 PDF 的标注笔记，而不是嵌入该 PDF 的笔记。在画布中请先选中卡片。关闭后，嵌入 PDF 仅显示已有高亮。',
    'Folder for reference notes': '参考文献笔记文件夹',
    'Where the Citations view makes a note for a cited work. Empty: where Obsidian puts new notes.':
        '引文视图为被引作品创建笔记的位置。留空则使用 Obsidian 新建笔记的位置。',
    'Text recognition': '文字识别',
    'Recognising the text of a scanned PDF needs the recogniser and the data of a language. They are not part of the plugin: each is fetched the first time it is needed, when you say so, kept in the plugin\u2019s folder and checked before every use. Removing one frees its space; it is fetched again when it is next needed.':
        '识别扫描版 PDF 的文字需要识别引擎和语言数据。它们未内置在插件中：首次需要并得到确认后会下载，保存在插件文件夹中，并在每次使用前校验。删除某个文件可释放空间，下次需要时会重新下载。',
    'The recogniser': '识别引擎',
    'On this device, {size}.': '已在此设备上，{size}。',
    'Not on this device ({size} when fetched).': '尚未下载到此设备（下载后为 {size}）。',
    Remove: '删除',
    'Coming from Annotator 0.2': '从 Annotator 0.2 升级',
    'Existing annotation notes are already in the format this reader uses. Nothing needs converting.':
        '现有标注笔记已使用当前阅读器的格式，无需转换。',
    'Check my annotation notes': '检查我的标注笔记',
    'Counts your annotated sources and highlights and lists anything that cannot be read. Read-only.':
        '统计已标注来源和高亮数量，并列出无法读取的内容。此操作只读。',
    Check: '检查',

    'Keys on a selection': '选择文字时的快捷键',
    'While the bar by a selection is open, these keys act on it; 1–6 pick a colour and Escape closes it. With Shift, the mark key also copies the link (with a letter key). Each action is also a command, which Obsidian\u2019s Hotkeys settings can give any key.':
        '选择文字后操作栏显示期间，可用这些按键执行相应操作；1–6 选择颜色，Escape 关闭。按住 Shift 时，标记键还会复制链接（仅限字母键）。每个操作也都是命令，可在 Obsidian 的快捷键设置中绑定其他按键。',
    'Mark in the last colour': '使用上次的颜色标记',
    'Open a note': '打开笔记',
    'Next mark style': '下一种标记样式',
    'Key: {action}': '快捷键：{action}',
    'Back to H, A and S': '恢复为 H、A 和 S',
    'The keys the bar had to begin with.': '恢复操作栏最初使用的按键。',
    Reset: '重置',
    'Type a key.': '请输入一个按键。',
    'One character only.': '只能输入一个字符。',
    'A key that prints a character.': '请输入能够显示出来的字符。',
    'The number keys choose the colour.': '数字键用于选择颜色。',
    'Another action has this key.': '另一个操作已使用此按键。',

    'Open from outside Obsidian': '从 Obsidian 外部打开',
    'On a phone or tablet, Annotator reads a PDF or a book from the vault only: it cannot be handed over from the file manager or a share sheet where it is, so it is copied into the vault first. Share a PDF to Obsidian and choose Import into vault, then Open in Annotator. A book is saved into the vault’s folder with the file manager. The README says how, under “Open a file from outside Obsidian”.':
        '在手机或平板上，Annotator 只能读取仓库中的 PDF 或书籍：它无法直接从文件管理器或分享面板读取原位置文件，因此会先复制到仓库。可将 PDF 分享到 Obsidian，选择“导入到仓库”，再选择“在 Annotator 中打开”。书籍需通过文件管理器保存到仓库文件夹。详细步骤见 README 中“从 Obsidian 外部打开文件”。',
    'Address for a file in this vault': '仓库内文件的地址',
    'For a Shortcut or an automation: first save the PDF or book into this vault, then open this address with the file’s path in the vault added to it, URL-encoded.':
        '用于快捷指令或自动化：先将 PDF 或书籍保存到此仓库，然后在此地址后追加文件在仓库中的 URL 编码路径并打开。',
    'A PDF or a book can be handed to Annotator from the file manager, with Open with, and a page from your browser with the bookmarklet. The README says how for each system, under “Open a file from outside Obsidian”.':
        '可以通过文件管理器的“打开方式”将 PDF 或书籍交给 Annotator，也可以通过小书签打开浏览器页面。各系统的具体步骤见 README 中“从 Obsidian 外部打开文件”。',
    'This computer’s key': '此电脑的密钥',
    'A file outside the vault is opened only when the request carries this key, which a web page cannot know. The key is kept on this computer only, and is written into Open with Annotator and the recipe.':
        '只有请求中包含此密钥时，才会打开仓库外文件；网页无法获知该密钥。密钥仅保存在此电脑上，并写入“Open with Annotator”和安装脚本。',
    'A file outside the vault is opened only when the request carries a key that this computer made, which a web page cannot know. Install makes one; until there is one, no request from outside is followed to a file outside the vault.':
        '只有请求中包含此电脑生成的密钥时，才会打开仓库外文件；网页无法获知该密钥。安装会生成密钥；在生成之前，外部请求不会打开仓库外文件。',
    'Make a key': '生成密钥',
    'New key': '新密钥',
    'Open with Annotator and recipes made with the old key stop being answered.':
        '使用旧密钥的“Open with Annotator”和安装脚本将不再有效。',
    'Do it yourself': '手动设置',
    'What Install does, to paste into Terminal yourself. It makes “Open with Annotator” in the Applications folder of your home folder, from a script you can read; nothing is downloaded.':
        '以下为“安装”执行的命令，可自行粘贴到终端。它会在用户主文件夹的 Applications 文件夹中创建可查看脚本的“Open with Annotator”；不会下载任何内容。',
    'What Install does, to paste into a PowerShell window yourself. It adds “Open with Annotator” for PDFs and books, for your account only.':
        '以下为“安装”执行的命令，可自行粘贴到 PowerShell 窗口。它会仅针对当前用户，为 PDF 和书籍添加“Open with Annotator”。',
    'What Install does, to paste into a terminal yourself. It writes a small script and a desktop entry under your home folder.':
        '以下为“安装”执行的命令，可自行粘贴到终端。它会在用户主文件夹中写入一个小脚本和桌面启动项。',
    'Recipe for this computer': '此电脑的安装脚本',
    'The address itself': '地址本身',
    'For a script of your own: this address, with the full path of the PDF or book added to it, URL-encoded.':
        '用于自定义脚本：在此地址后追加 PDF 或书籍的完整路径，并进行 URL 编码。',
    'Folders files are copied from without a question': '无需询问即可复制文件的文件夹',
    None: '无',
    'None yet. The first file from a folder is asked about, and “Always from this folder” adds the folder here.':
        '尚无记录。首次复制某个文件夹中的文件时会询问；选择“始终使用此文件夹”后，该文件夹会加入此处。',
    '. Files are read where they are here, so this list is used only where they are copied in.':
        '。当前会直接在原位置读取文件，因此此列表仅用于需要复制文件的情况。',
    'Forget them': '清除记录',
    Bookmarklet: '小书签',
    'Hands the page your browser shows to Annotator: a PDF, a book, a video or a web page. Phone browsers make bookmarklets awkward: make a bookmark of any page, then change its address to the text below (Copy copies it); Annotator then asks for a press in Obsidian before it fetches anything. On Android, Share in the browser, then Obsidian, then Annotate in Annotator, is easier, and needs no press.':
        '将浏览器当前页面交给 Annotator，可以是 PDF、书籍、视频或网页。手机浏览器使用小书签较不方便：先收藏任意页面，再把书签地址改为下方文本（可点击“复制”）；Annotator 会在获取内容前要求你在 Obsidian 中确认。在 Android 上，可直接从浏览器分享到 Obsidian，再选择“在 Annotator 中标注”，无需额外确认。',
    'Drag the link to your browser’s bookmarks bar. On any page, it hands the page to Annotator: a PDF, a book, a video or a web page. Annotator asks for a press in Obsidian before it fetches anything. If your browser does not take the link, make a bookmark and give it the text below as its address: Copy copies it.':
        '将链接拖到浏览器的书签栏。在任何页面点击该书签，即可将页面（PDF、书籍、视频或网页）交给 Annotator。Annotator 会在获取内容前要求你在 Obsidian 中确认。如果浏览器无法接受该链接，可新建书签，并将下方文本设为地址；可点击“复制”。',
    'Annotate in Annotator': '在 Annotator 中标注',
    '{name}: drag to your bookmarks bar': '{name}：拖到浏览器书签栏',
    'Drag this link to your browser’s bookmarks bar.': '请将此链接拖到浏览器的书签栏。',
    'Copy the bookmarklet, to paste as a new bookmark’s address': '复制小书签，用于新建书签的地址',
    'Copied. Paste it as the address of a new bookmark.': '已复制。请将其粘贴为新书签的地址。',
    'The bookmarklet’s address': '小书签地址',
    'Open with Annotator': 'Open with Annotator',
    'Adds “Open with Annotator” to {manager} Open with, for PDFs and books, for this vault. {reading} Nothing is downloaded.':
        '为当前仓库的 PDF 和书籍，将“Open with Annotator”添加到 {manager} 的“打开方式”中。{reading} 不会下载任何内容。',
    'Finder’s': '访达的',
    'Explorer’s': '资源管理器的',
    'your file manager’s': '文件管理器的',
    'A file opened with it is read where it is, with a note made for it where new notes go.':
        '用它打开的文件会直接在原位置读取，并在新笔记的默认位置创建对应笔记。',
    'A file opened with it is copied into the vault, with a note made for it.':
        '用它打开的文件会复制到仓库，并创建对应笔记。',
    'Installing…': '正在安装…',
    'Uninstalling…': '正在卸载…',
    'Installed. {next}': '安装完成。{next}',
    'Uninstalled. {next}': '卸载完成。{next}',
    '“Open with Annotator” is installed.': '“Open with Annotator”已安装。',
    '“Open with Annotator” is uninstalled.': '“Open with Annotator”已卸载。',
    'Could not install: {error} The recipe under “Do it yourself” does the same by hand.':
        '无法安装：{error} 可使用“手动设置”中的脚本自行完成。',
    'Could not uninstall: {error} The recipe under “Do it yourself” does the same by hand.':
        '无法卸载：{error} 可使用“手动设置”中的脚本自行完成。',
    'Installed on this computer, for this vault. {next}': '已安装到此电脑，并用于当前仓库。{next}',
    'Installed on this computer, but made for another vault or an older key: files opened with it do not reach this vault. Install again to make it open them here.':
        '已安装到此电脑，但配置针对其他仓库或旧密钥：通过它打开的文件不会进入当前仓库。请重新安装，使其指向当前仓库。',
    'Not installed on this computer.': '尚未安装到此电脑。',
    Install: '安装',
    'Install again': '重新安装',
    Uninstall: '卸载',
    'Looking whether it is installed…': '正在检查安装状态…',
    'Copied.': '已复制。',
    'Could not copy. Select the text and copy it by hand.': '无法复制。请选中文本并手动复制。',
    'Text to copy': '要复制的文本',
    Copy: '复制'
};

/** Text used outside the settings tab that is also shown there. */
const OTHER_ZH: Readonly<Record<string, string>> = {
    'To open a kind of file with it by a double-click: select one in Finder, choose File → Get Info, under “Open with” choose “Open with Annotator”, and press Change All. Do the same for each kind of book.':
        '要双击用其打开某类文件：在访达中选择一个文件，依次选择“文件”→“显示简介”，在“打开方式”中选择“Open with Annotator”，再点击“全部更改”。每类书籍都需要重复设置。',
    'To open a kind of file with it by a double-click: right-click one in Explorer, choose Open with → Choose another app, pick “Open with Annotator” and press Always. Do the same for each kind of book.':
        '要双击用其打开某类文件：在资源管理器中右键点击一个文件，依次选择“打开方式”→“选择其他应用”，选择“Open with Annotator”，再点击“始终”。每类书籍都需要重复设置。',
    'To open a kind of file with it by a double-click, choose it in your file manager’s Open With and set it as the default, or run for example: xdg-mime default open-with-annotator.desktop application/pdf':
        '要双击用其打开某类文件，请在文件管理器的“打开方式”中选择它并设为默认，或运行例如：xdg-mime default open-with-annotator.desktop application/pdf',
    'If you had made it the default for PDFs or books, choose another app for them: select one in Finder, File → Get Info, Open with, and Change All.':
        '如果曾将它设为 PDF 或书籍的默认应用，请为这些文件选择其他应用：在访达中选择一个文件，依次选择“文件”→“显示简介”→“打开方式”，再点击“全部更改”。',
    'If you had made it the default for a kind of file, Windows asks which app to use the next time you open one.':
        '如果曾将它设为某类文件的默认应用，下次打开该类文件时 Windows 会询问使用哪个应用。',
    'If you had made it the default with xdg-mime, choose another default the same way.':
        '如果曾通过 xdg-mime 将其设为默认，请用相同方式选择其他默认应用。',
    English: '英语',
    French: '法语',
    German: '德语',
    Spanish: '西班牙语',
    Swedish: '瑞典语'
};

const TRANSLATIONS: Readonly<Record<string, string>> = { ...OTHER_ZH, ...SETTINGS_ZH };

/** Translate settings text, falling back to the English source when no translation exists. */
export function settingsText(source: string, values: Readonly<Record<string, string | number>> = {}): string {
    const template = TRANSLATIONS[source] ?? source;
    return template.replace(
        /\{([A-Za-z][A-Za-z0-9]*)\}/g,
        (placeholder, name: string, offset: number, whole: string) => {
            if (whole[offset - 1] === '{' || whole[offset + placeholder.length] === '}') return placeholder;
            return Object.prototype.hasOwnProperty.call(values, name) ? String(values[name]) : placeholder;
        }
    );
}
