// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
$(function () {
  $('#btn').on('click', function () {
    var inputText = $('#choose').val()
    $('#people_box tbody tr').each(function (i) {
      var name = $(this).children('td:eq(0)').html()
      var age = $(this).children('td:eq(1)').html()
      var sex = $(this).children('td:eq(2)').html()
      if ((inputText === name) || (inputText === age) || (inputText === sex)) {
        $(this).css('display', 'table-row')
      } else {
        $(this).css('display', 'none')
      }
    })
  })
  $('#delBtn').on('click', function () {
    $('#choose').val('')
    $('#people_box tbody tr').css('display', 'table-row')
  })
})
