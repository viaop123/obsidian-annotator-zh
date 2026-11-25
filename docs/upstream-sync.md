# 同步上游仓库

本文档记录这个 fork 如何跟随原项目更新，同时保留自己的中文修改。

- 我的 fork：<https://github.com/viaop123/obsidian-annotator-zh>
- 原项目：<https://github.com/elias-sundqvist/obsidian-annotator>

## 分支约定

| 分支 | 用途 | 是否直接开发 |
| --- | --- | --- |
| `master` | 原项目的镜像，尽量与 `upstream/master` 保持一致 | 否 |
| `zh` | 长期维护的中文整合分支 | 只合并经过检查的改动 |
| `feature/*` | 设置页翻译、文档更新等具体功能 | 是 |

关系如下：

```text
upstream/master -> origin/master -> zh -> feature/*
```

`origin` 指向自己的 fork，`upstream` 指向原项目。两个名称都只是本地 Git 的远程仓库别名，不会随 clone 自动保存。

## 首次配置

这组步骤在新 clone 的仓库中需要执行一次。

### 1. 检查远程仓库

```powershell
git remote -v
```

如果还没有 `upstream`：

```powershell
git remote add upstream https://github.com/elias-sundqvist/obsidian-annotator.git
```

如果 `upstream` 已存在，但地址不对：

```powershell
git remote set-url upstream https://github.com/elias-sundqvist/obsidian-annotator.git
```

### 2. 获取原项目的分支和标签

```powershell
git fetch upstream --prune --tags
git fetch origin --prune
```

### 3. 确认 `master` 与上游一致

开发前先确认工作区干净：

```powershell
git status --short --branch
```

如果 `master` 还没有自己的提交，可以这样更新：

```powershell
git switch master
git merge --ff-only upstream/master
git push origin master
```

如果 `--ff-only` 失败，说明本地的 `master` 已经出现了自己的提交。先检查这些提交；本文档的分支约定要求这些改动放到 `zh` 或功能分支，而不是 `master`。

### 4. 创建中文整合分支

如果自己的 GitHub 仓库和本地都还没有 `zh`：

```powershell
git switch -c zh master
git push -u origin zh
```

如果本地没有，但 GitHub 上已经有：

```powershell
git switch -c zh --track origin/zh
```

## 日常开发

每次开始一个具体任务时，从最新的 `zh` 创建功能分支：

```powershell
git switch zh
git pull --ff-only origin zh
git switch -c feature/zh-settings
```

完成并检查后合回 `zh`：

```powershell
git switch zh
git merge --no-ff feature/zh-settings
npm run check
git push origin zh
```

功能分支完成并合入后可以删除：

```powershell
git branch -d feature/zh-settings
```

不要直接在 `master` 上写中文修改。这样原项目更新时，`master` 可以继续直接快进。

## 同步原项目更新

建议每次开始新任务前同步一次，也可以在上游发布新版本后立即同步。

### 1. 更新自己的上游镜像

```powershell
git fetch upstream --prune --tags
git switch master
git merge --ff-only upstream/master
git push origin master
```

### 2. 将上游改动合入中文分支

先确认当前没有未提交改动：

```powershell
git status --short --branch
git switch zh
git pull --ff-only origin zh
git merge master
```

如果没有任何冲突，检查后推送：

```powershell
npm run check
git push origin zh
```

如果本地安装了项目要求的构建环境，再按改动范围运行更完整的检查：

```powershell
npm run build
npm run test:reader
```

项目要求 Node.js 26 或更高版本；完整构建和 proof 检查还需要 Bend 2.0.40，详见 `CONTRIBUTING.md`。

### 3. 更新正在开发的功能分支

如果功能分支还没合入 `zh`，需要把刚同步的 `zh` 合入功能分支：

```powershell
git switch feature/zh-settings
git merge zh
```

然后重新检查翻译和构建。

## 处理合并冲突

发生冲突时先查看状态：

```powershell
git status
git diff --name-only --diff-filter=U
```

处理设置页翻译冲突时，一般遵循这些规则：

1. 保留上游新增的功能和结构。
2. 把上游新增或修改的设置文案补进中文翻译。
3. 不要为了消除冲突而整段选择“本地版本”或“上游版本”。
4. 保留设置字段名、命令 ID、内部颜色标识和注释数据格式，只翻译用户可见的文字。
5. 修改完成后重新检查整个设置页，确保没有漏译或重复项。

解决冲突、验证文件后，将文件加入暂存区并完成合并：

```powershell
git add <已解决的文件>
git status
git commit
npm run check
```

不要把冲突标记留在文件中，也不要在没有检查的情况下强制推送 `zh`。

## 删除本地文件夹后重新 clone

只要分支已经推送到自己的 fork，删除本地文件夹不会删除 GitHub 上的提交。重新 clone 后，远端跟踪配置不会恢复，因此需要重新添加 `upstream`。

```powershell
git clone https://github.com/viaop123/obsidian-annotator-zh.git
cd obsidian-annotator-zh

git remote add upstream https://github.com/elias-sundqvist/obsidian-annotator.git
git fetch upstream --prune --tags
git fetch origin --prune

git switch zh
git branch -vv
```

如果 `zh` 已存在于 `origin`，`git switch zh` 通常会同时建立对 `origin/zh` 的跟踪。如果分支没有出现，先检查远程分支：

```powershell
git branch --all
```

然后按需要显式建立跟踪：

```powershell
git switch -c zh --track origin/zh
```

最后确认远程仓库和分支状态：

```powershell
git remote -v
git status --short --branch
```

## 安全规则

- `upstream` 只用于获取原项目代码，不应向它推送。
- 不直接修改 `master`，保证它可以随上游快进更新。
- 不对长期存在的 `master` 或 `zh` 使用 `rebase`。
- 不强制推送覆盖已经公开的 `zh` 历史。
- 合并上游后必须检查设置页，因为新版本可能增加或重命名设置项。
- `git fetch` 不会自动合并或覆盖当前分支，只会获取远程信息；实际合并仍由 `merge` 完成。

## 快捷检查清单

同步上游时依次确认：

1. 当前工作区没有未提交改动。
2. `git fetch upstream --prune --tags` 成功。
3. `master` 可以通过快进到 `upstream/master`。
4. 上游改动已经合入 `zh`。
5. 设置页的新文案已经处理。
6. `npm run check` 通过。
7. 需要时运行构建和测试。
8. 最后推送 `zh`。
