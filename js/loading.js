class Loader {
  constructor(){
    this.section = document.getElementById("loading");
  }

  loading(){
    this.iframe = document.createElement("iframe");
    this.iframe.setAttribute("src", "https://giphy.com/embed/ZLeczmapXFUqc");
    this.iframe.setAttribute("width", 480);
    this.iframe.setAttribute("height", 480);
    this.iframe.setAttribute("frameBorder", 0);
    this.iframe.setAttribute("class", "giphy-embed");
    this.iframe.setAttribute("allowFullScreen", true);

    
    this.section.append(this.iframe);
  }

  loaded(){
    if(this.iframe) this.iframe.remove();
  }
}

// <iframe src="https://giphy.com/embed/ZLeczmapXFUqc" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
{/* <p><a href="https://giphy.com/gifs/line-alternate-loader-ZLeczmapXFUqc">via GIPHY</a></p> */}