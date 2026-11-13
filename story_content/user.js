function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6U473uK4r1i":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musiklatar.mp3";
audio.load();
audio.play();
audio.volume=0.5;
}

