document.getElementById('form').addEventListener('submit', function (event) {
  let isValid = true

  // 名前のバリデーション
  const name = document.getElementById('name')
  const nameError = document.getElementById('nameError')
  if (name.value.trim() === '') {
    nameError.textContent = '名前を入力してください。'
    isValid = false
  } else {
    nameError.textContent = ''
  }

  // メールアドレスのバリデーション
  const email = document.getElementById('email')
  const emailError = document.getElementById('emailError')
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  if (!emailPattern.test(email.value)) {
    emailError.textContent = '有効なメールアドレスを入力してください。'
    isValid = false
  } else {
    emailError.textContent = ''
  }

  // メッセージのバリデーション
  const message = document.getElementById('message')
  const messageError = document.getElementById('messageError')
  if (message.value.trim() === '') {
    messageError.textContent = 'メッセージを入力してください。'
    isValid = false
  } else {
    messageError.textContent = ''
  }

  if (!isValid) {
    event.preventDefault()
  }
})
