export const createHtmlContent = (cssContent, jsContent) => `<!DOCTYPE html>
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
