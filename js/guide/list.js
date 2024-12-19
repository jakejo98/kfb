export function list(){
  buildHeadingNum();
  buildIndexNum();
  fillLinks();
  initHistory();
}

/* Index Numbering */
function buildHeadingNum() {
  var i = 0;
  $('.guide-main').find('.guide-hd').each(function () {
    i++;
    var no = i + '.';
    $(this).prepend(no);
  });
}
/* Index Numbering */
function buildIndexNum() {
  var i = 0;
  $('.guide-main .guide-table').find('tbody>tr').each(function () {
    i++;
    insertIndexNum($(this), i);
  });
}
function insertIndexNum($target, i) {
  var $i = $('<th class="th-id">' + i + '</th>');
  $target.prepend($i);
}

/* Fill Links */
function fillLinks() {
  $('.guide-table').find('a').each(function () {
    var href = $(this).attr('href');
    var link = $(this).text();
    if (href == '#') {
      $(this).attr('href', link);
    }
  });
}

/* Project History */
function initHistory() {
  //toggle detail
  $('#history-list').find('.comment').on('click', function () {
    $(this).next().toggle();
    $(this).toggleClass('hide');
  });

  //add file version
  $('#history-list > li').each(function () {
    if ($(this).find('.date').text() != '') {
      addFileVersion($(this).find('.file-list'), $(this).find('.date').text());
    }
  });
}

function addFileVersion($fileList, date) {
  var version = date;
  $fileList.children('li').each(function () {
    var changedFile = $(this).text();
    $('.guide-table').find('a').each(function () {
      var file = $(this).text();
      if (file == changedFile) {
        $('<i class="version">#' + version + '</i>').insertAfter($(this));
      }
    });
  });
}
