import fs from 'fs';
import path from 'path';

const fixElectronPaths = () => {
  const htmlPath = path.join(process.cwd(), 'out', 'index.html');
  
  if (!fs.existsSync(htmlPath)) {
    console.error('index.html not found in out directory');
    return;
  }
  
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');
  
  // 더 정확한 경로 수정 - HTML 속성들
  htmlContent = htmlContent.replace(/href="\/_next\//g, 'href="./_next/');
  htmlContent = htmlContent.replace(/src="\/_next\//g, 'src="./_next/');
  htmlContent = htmlContent.replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"');
  htmlContent = htmlContent.replace(/href="\/([^"]+\.(?:ico|png|jpg|jpeg|gif|svg))"/g, 'href="./$1"');
  
  // JavaScript 내부의 경로들 - 더 정확한 패턴
  htmlContent = htmlContent.replace(/\\"\/favicon\.ico\\"/g, '\\"./favicon.ico\\"');
  htmlContent = htmlContent.replace(/\\"\/([^"]+\.(?:ico|png|jpg|jpeg|gif|svg))\\"/g, '\\".\/$1\\"');
  
  // Next.js 스크립트 내부의 경로들
  htmlContent = htmlContent.replace(/"\/_next\/static\//g, '"./_next/static/');
  htmlContent = htmlContent.replace(/'\/_next\/static\//g, `'./_next/static/`);
  
  // JSON 내부의 경로들
  htmlContent = htmlContent.replace(/"href":"\/([^"]+)"/g, '"href":"./$1"');
  htmlContent = htmlContent.replace(/"src":"\/([^"]+)"/g, '"src":"./$1"');
  
  // 더 복잡한 패턴들
  htmlContent = htmlContent.replace(/\\"\/(_next\/[^"]+)\\"/g, '\\".\/$1\\"');
  htmlContent = htmlContent.replace(/:"\/(_next\/[^"]+)"/g, ':"./$1"');
  
  fs.writeFileSync(htmlPath, htmlContent);
  console.log('✅ Electron paths fixed successfully!');
  
  // 다른 HTML 파일들도 수정 (404.html 등)
  const outDir = path.join(process.cwd(), 'out');
  const files = fs.readdirSync(outDir);
  
  files.forEach(file => {
    if (file.endsWith('.html') && file !== 'index.html') {
      const filePath = path.join(outDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // 같은 패턴으로 수정
      content = content.replace(/href="\/_next\//g, 'href="./_next/');
      content = content.replace(/src="\/_next\//g, 'src="./_next/');
      content = content.replace(/href="\/favicon\.ico"/g, 'href="./favicon.ico"');
      content = content.replace(/"\/_next\/static\//g, '"./_next/static/');
      content = content.replace(/'\/_next\/static\//g, `'./_next/static/`);
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed paths in ${file}`);
    }
  });
};

fixElectronPaths(); 