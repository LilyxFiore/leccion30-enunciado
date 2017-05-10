var modal = document.getElementById('modal');
var modalImage = document.getElementById("modalImage");
var modalClose = document.getElementById("modalClose");

var listImg = document.getElementsByClassName("img");

for(i=0; i < listImg.length; i++){
  listImg[i].addEventListener("click", function(e){
      var src = this.getAttribute("src");
      callModal(src);
    })
  }

function callModal(src){
  modal.style.display = "block";
  modalImage.src = src;
  /**Close Modal **/
  modalClose.addEventListener("click",function(){
    modal.style.display = "none";
  })
}
