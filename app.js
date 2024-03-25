const { createApp } = Vue

createApp({
  data: function () {
    return {
      title: 'Titolo creato usando Vue.'
    }
  }
}).mount('#app')