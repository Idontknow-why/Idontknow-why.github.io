  var adjs = ['The day she let go of the things that were weighing her down, was the day she began to shine the brightest.',
   "If you want to conquer the anxiety of life, live in the moment, live in the breath.", 
   "The greatest weapon against stress is our ability to choose one thought over another.", 
   "It's a good idea always to do something relaxing prior to making an important decision in your life."],
      sentence = $('#sentence'),
      textSlider = $('#textSlider'),
      stop = false;

    // function to return the most up-to-date
    // version of our adjective list
    function getList() {
      return $('.adj');
    }

    // function to build the adjective list
    // args: adjective array
    function build(arr) {
      for (i = 0; i < arr.length; i++) {
        var item = "<li class='adj'>";
        $(textSlider).append(item + arr[i] + "</li>");
      }
    }

    // function to resize adjective list
    // args: adjective list item
    function resize(el) {
      $(textSlider).animate({
        width: $(el).width(),
      }, 400);
    }

    // function to add slide-in transition
    // args: element that needs to slide
    function slideIn(el) {
      // duration slide is on screen
      var hold = 10000;
      // resize area to sliding element
      resize($(el));
      // add slide-in class
      $(el).addClass('slide-in');
      // after 'hold' duration slide-out current item
      // then slide in next item
      setTimeout(function () {
        // check to see if loop should continue
        if (stop === true) {
          stop = false;
          return;
        }
        // slide current element out
        slideOut(el);
        // slide in next element in queue
        slideIn($(el).next());
      }, hold);
    }

    // function to add slide-out transition
    // args: element that needs to slide
    function slideOut(el) {
      // remove current class and add slide-out transition
      $(el).removeClass('slide-in').addClass('slide-out');
      // wait for slide tramsition to finish then
      // call 'change' function
      setTimeout(function () {
        change();
      }, 200);
    }

    // function to re-arrange adjective list
    function change() {
      // store last item index
      var i = adjs.length - 1;
      // detach element that has slide-out class
      // put to the bottom of the list after
      // the last item
      $('.adj:eq(' + i + ')').after($('.slide-out').detach());
      // remove class to send element back to original position
      $('.adj').removeClass('slide-out');
    }

    // build slider
    build(adjs);
    // init loop
    slideIn(getList()[0]);

    $('#stop').click(function () {
      // stop/start loop
      if ($(this).html() === "Start") {
        $(this).html("Stop");
        slideIn(getList()[0]);
      } else {
        stop = true;
        $(this).html("Start");
      }
    });


  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function () {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
