var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    slidesPerColumn: 1,
    slidesPerGroup: 3,
    spaceBetween: 0,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});


var mSwiper = new Swiper('.swiper-container1', {
  slidesPerView: 4,
  slidesPerColumn: 1,
  slidesPerGroup: 4,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiper = new Swiper(".areas", {
  spaceBetween: 5,
  slidesPerColumn: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


var swiper = new Swiper(".services__main", {
  spaceBetween: 30,
  slidesPerColumn: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



var swiper = new Swiper(".description", {
  spaceBetween: 30,
  slidesPerColumn: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* Simple Pagination for Equipment */

function getPageList(totalPages, page, maxLength){
  function range(start, end){
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if(totalPages <= maxLength){
    return range(1, totalPages);
  }

  if(page <= maxLength - sideWidth - 1 - rightWidth){
    return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
  }

  if(page >= totalPages - sideWidth - 1 - rightWidth){
    return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
  }

  return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

$(function(){
  var numberOfItems = $(".card-content .card").length;
  var limitPerPage = 9; //How many card items visible per a page
  var totalPages = Math.ceil(numberOfItems / limitPerPage);
  var paginationSize = 5; //How many page elements visible in the pagination
  var currentPage;

  function showPage(whichPage){
    if(whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

    $(".pagination li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
      $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
      .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
      .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
    });

    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);
    return true;
  }

  $(".pagination").append(
    $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("bx bx-left-arrow-alt").attr({href: "javascript:void(0)"})),
    $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("bx bx-right-arrow-alt").attr({href: "javascript:void(0)"}))
  );

  $(".card-content").show();
  showPage(1);

  $(document).on("click", ".pagination li.current-page:not(.active)", function(){
    return showPage(+$(this).text());
  });

  $(".next-page").on("click", function(){
    return showPage(currentPage + 1);
  });

  $(".previous-page").on("click", function(){
    return showPage(currentPage - 1);
  });

});


/* Simple Pagination for News */


function getPageList1(totalPages1, page1, maxLength){
  function range(start, end){
    return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if(totalPages1 <= maxLength){
    return range(1, totalPages1);
  }

  if(page1 <= maxLength - sideWidth - 1 - rightWidth){
    return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages1 - sideWidth + 1, totalPages1));
  }

  if(page1 >= totalPages1 - sideWidth - 1 - rightWidth){
    return range(1, sideWidth).concat(0, range(totalPages1 - sideWidth - 1 - rightWidth - leftWidth, totalPages1));
  }

  return range(1, sideWidth).concat(0, range(page1 - leftWidth, page1 + rightWidth), 0, range(totalPages1 - sideWidth + 1, totalPages1));
}

$(function(){
  var numberOfItems = $(".news__card-content .news__card").length;

  var limitPerPage = 16; //How many card items visible per a page

  var totalPages = Math.ceil(numberOfItems / limitPerPage);

  var paginationSize = 5; //How many page elements visible in the pagination
  var currentPage;

  /* function for equipment */
  function showPage1(whichPage){
    if(whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".news__card-content .news__card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

    $(".pagination1 li").slice(1, -1).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
      $("<li>").addClass("page-item").addClass(item ? "current-page" : "dots")
      .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
      .attr({href: "javascript:void(0)"}).text(item || "...")).insertBefore(".next-page");
    });

    $(".previous-page").toggleClass("disable", currentPage === 1);
    $(".next-page").toggleClass("disable", currentPage === totalPages);
    return true;
  }

  $(".pagination1").append(
    $("<li>").addClass("page-item").addClass("previous-page").append($("<a>").addClass("bx bx-left-arrow-alt").attr({href: "javascript:void(0)"})),
    $("<li>").addClass("page-item").addClass("next-page").append($("<a>").addClass("bx bx-right-arrow-alt").attr({href: "javascript:void(0)"}))
  );

  $(".news__card-content").show();
  showPage1(1);

  $(document).on("click", ".pagination1 li.current-page:not(.active)", function(){
    return showPage1(+$(this).text());
  });

  $(".next-page").on("click", function(){
    return showPage1(currentPage + 1);
  });

  $(".previous-page").on("click", function(){
    return showPage1(currentPage - 1);
  });

});


/* Map */

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.1801, lng: 71.446 },
    zoom: 8,
  });
}

window.initMap = initMap;



