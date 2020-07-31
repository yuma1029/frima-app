$(function(){

  function buildImg(src){
      let html = `
             <img src="${src}", style="width:100px; height: 100px">
            `
      return html
  }

  function buildHtml(id){
      let html = `
             <input class="sell_image_content", id="${id}", type="file", name="item[images_attributes][${id - 1}][image_content]">
       `
       return html;
  }

  var file_field = document.querySelector('input[type = file]')
  $('.sell_image_label').on('change','.sell_image_content', function(){
    var file = $('input[type=file]').prop('files')[0];
    var node = $('.sell_image_label')
    var id = Number(node.attr('for'))
       node.removeAttr('for')
       new_id = id + 1;
       node[0].setAttribute('for', new_id);
         console.log(id)
         console.log(new_id)
     
    let file_in = buildHtml(new_id);
     console.log(file_in)
    $('.sell_image_label').append(file_in);

    var fileReader = new FileReader();
        fileReader.onloadend = function(){
          var src = fileReader.result
          let html = buildImg(src)
          
          $('.sell_image_area').append(html)
        }
        fileReader.readAsDataURL(file)
  })
  

})