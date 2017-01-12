// pages/textarea/textarea.js
Page({
  data:{
    height:20,
    focus:false
  },
  bindButtonTap:function(e){
    this.setData({
      focus:!this.data.focus
    })
  },
  bindTextAreaBlur: function(e) {
    console.log(e.detail.value)
  },
  bindFormSubmit: function(e) {
    console.log(e.detail.value.textarea)
  }
})