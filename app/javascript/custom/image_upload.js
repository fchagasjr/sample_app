// Prevent uploading of big images

document.addEventListener("turbo:load", function() {
  document.addEventListener("change", function(event) {
    let imageUpload = document.querySelector('#micropost_image');
    const sizeInMegabytes = imageUpload.files[0].size/1024/1024;
    if (sizeInMegabytes > 5) {
      alert ("Maximum file size is 5MB. Please choose a smaller file.");
      imageUpload.value = "";
    }
  });
});