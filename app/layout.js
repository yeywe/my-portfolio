import './globals.css'

export const metadata = {
  title: '前端开发者作品集',
  description: '管理系统、小程序、AI作品展示',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}