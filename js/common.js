const thumbs = document.querySelectorAll('.thumb');
// console.log(thumbs);
thumbs.forEach(function(item,index){
  item.onclick = function(){
    document.getElementById('bigimg').src = this.dataset.image;
  }
});