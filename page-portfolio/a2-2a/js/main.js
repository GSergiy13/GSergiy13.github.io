$(function(){


    let acc = document.getElementsByClassName("programs__accordion");    
    let i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight){
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
// собираем все якоря; устанавливаем время анимации и количество кадров
const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]')),
      animationTime = 1500,
      framesCount = 100;

anchors.forEach(function(item) {
  // каждому якорю присваиваем обработчик события
  item.addEventListener('click', function(e) {
    // убираем стандартное поведение
    e.preventDefault();
    
    // для каждого якоря берем соответствующий ему элемент и определяем его координату Y
    let coordY = document.querySelector(item.getAttribute('href')).getBoundingClientRect().top + window.pageYOffset;
    
    // запускаем интервал, в котором
    let scroller = setInterval(function() {
      // считаем на сколько скроллить за 1 такт
      let scrollBy = coordY / framesCount;
      
      // если к-во пикселей для скролла за 1 такт больше расстояния до элемента
      // и дно страницы не достигнуто
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        // то скроллим на к-во пикселей, которое соответствует одному такту
        window.scrollBy(0, scrollBy);
      } else {
        // иначе добираемся до элемента и выходим из интервала
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    // время интервала равняется частному от времени анимации и к-ва кадров
    }, animationTime / framesCount);
  });
});



    $('.select').each(function() {
      const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 450;
      _this.hide();
      _this.wrap('<div class="select"></div>');
      $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
      }).insertAfter(_this);
  
      const selectHead = _this.next('.new-select');
      $('<div>', {
        class: 'new-select__list'
      }).insertAfter(selectHead);
  
      const selectList = selectHead.next('.new-select__list');
      for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
          class: 'new-select__item',
          html: $('<span>', {
            text: selectOption.eq(i).text()
          })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
      }
  
      const selectItem = selectList.find('.new-select__item');
      selectList.slideUp(0);
      selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
          $(this).addClass('on');
          selectList.slideDown(duration);
  
          selectItem.on('click', function() {
            let chooseItem = $(this).data('value');
  
            $('select').val(chooseItem).attr('selected', 'selected');
            selectHead.text( $(this).find('span').text() );
  
            selectList.slideUp(duration);
            selectHead.removeClass('on');
          });
  
        } else {
          $(this).removeClass('on');
          selectList.slideUp(duration);
        }
      });
    });

    let popupBg = document.querySelector('.popup__bg');
    let popup = document.querySelector('.popup');
    let openPopupButtons = document.querySelectorAll('.open-popup');
    let closePopupButton = document.querySelector('.close-popup');
    
    openPopupButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            popupBg.classList.add('active');
            popup.classList.add('active');
        })
    });
    
    closePopupButton.addEventListener('click',() => {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    });
    
    document.addEventListener('click', (e) => {
        if(e.target === popupBg) {
            popupBg.classList.remove('active');
            popup.classList.remove('active');
        }
    });
    new WOW().init();
});


