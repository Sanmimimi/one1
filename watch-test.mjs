// watch-test.mjs
import chokidar from 'chokidar'

const watcher = chokidar.watch('.', {
  ignored: /(^|[\/\\])\../, // 忽略隐藏文件
  persistent: true,
  usePolling: true, // 强制轮询
  interval: 500,
})

watcher.on('change', (path) => {
  console.log(`File changed: ${path}`)
})

console.log('开始监听文件变动...')