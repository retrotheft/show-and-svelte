export const createHtmlContent = (cssContent: string, jsContent: string) =>
   `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>${cssContent}</style>
</head>
<body>
  <div id="app"></div>
  <script>${jsContent}</script>
</body>
</html>`;
