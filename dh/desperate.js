

    function Brain(){
      this.pairs = {};
      this.starts = [];
      this.name = "chatbot";
      this.d = 2;
    }


    function WisteriaLane(){
      this.actors = {};
      this.stagedirect = new Brain();
      this.maryalice = new Brain();
      this.sources = [];
    }

    const seps = /[.!?]/


var singlemode = false;
    var alls = new Brain();

    var wisteria = new WisteriaLane();

    function loadFile(filePath) {
      var result = null;
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("GET", filePath, false);
      xmlhttp.send();
      if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
      }
      return result;
    }
    function randintinc(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    function randfrom(arr) {
      return arr[Math.floor(Math.random() * arr.length)]
    }
