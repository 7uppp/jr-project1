const container = document.getElementById('container')
const toggleBtn = document.getElementById('toggle-theme-btn')

function toggleTheme () {
  // get current theme
  const currentTheme = container.getAttribute('data-theme')

  // change theme
  if (currentTheme === 'dark') {
    container.setAttribute('data-theme', 'light')
  } else {
    container.setAttribute('data-theme', 'dark')
  }
}

// 添加点击事件监听器
toggleBtn.addEventListener('click', toggleTheme)