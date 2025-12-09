# 2026 台灣精油芳療年會網站

這是一個使用 React + TypeScript + Tailwind CSS + Vite 建置的專案。

## 如何在本地執行

1.  確保電腦已安裝 Node.js。
2.  下載所有檔案。
3.  開啟終端機（Terminal），進入專案資料夾。
4.  安裝依賴套件：
    ```bash
    npm install
    ```
5.  啟動開發伺服器：
    ```bash
    npm run dev
    ```

## 如何部署到 GitHub Pages

1.  將此專案上傳至 GitHub Repository。
2.  在 GitHub Repository 的 **Settings** -> **Pages** 中：
    *   **Source** 選擇 `GitHub Actions` (如果使用 Action 自動部署)
    *   或者，最簡單的方式是手動打包後上傳：
        1.  在本地執行 `npm run build`。
        2.  這會產生一個 `dist` 資料夾。
        3.  將 `dist` 資料夾內的內容推送到 GitHub 的 `gh-pages` 分支，或是將整個專案設定為從 `dist` (或 root) 部署（視您的設定而定）。

### 推薦：使用 gh-pages 套件自動部署

1.  安裝部署工具：
    ```bash
    npm install gh-pages --save-dev
    ```
2.  在 `package.json` 的 `scripts` 中加入：
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
3.  執行部署指令：
    ```bash
    npm run deploy
    ```
    程式會自動打包並上傳到 GitHub Pages 分支。