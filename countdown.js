var display = document.getElementById('countdown-display');
var t2 = moment('20170501T030000');
var t1 = moment('20170430T150000');
var t0 = moment('20170430');

var counts = {
  months: ['månad', 'månader'],
  weeks: ['vecka', 'veckor'],
  days: ['dag', 'dagar'],
  hours: ['timme', 'timmar'],
  minutes: ['minut', 'minuter'],
  seconds: ['sekund', 'sekunder'],
};
const interval = setInterval(function () {
  const t = moment();
  if (t.isBetween(t0, t1)) {
    clearInterval(interval);
    display.innerHTML = 'Ja!';
  } else if (t.isBetween(t1, t2)) {
    clearInterval(interval);
    display.innerHTML = 'Ja, brölloppet håller på för fullt!';
  } else if (t.isAfter(t2)) {
    clearInterval(interval);
    display.innerHTML = 'Nej, brölloppet har redan varit.';
  } else {
    var dt = moment.duration(t1.diff(t));
    var str = Object.keys(counts)
      .map(function (key) {
        var x = dt[key]();
        if (x > 1) {
          return x + ' ' + counts[key][1];
        } else if (x > 0) {
          return x + ' ' + counts[key][0];
        }
        return null;
      })
      .filter(function (i) { return i; })
      .join(' ');
      display.innerHTML = 'Nej, det är bröllop om ' + str + '.';
  }
}, 1000);
