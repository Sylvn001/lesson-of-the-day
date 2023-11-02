# Javascript basic tips and scripts utils

!!! &nbsp; How copy and paste into text fields in websites that block pasting?

Press F12 and paste in cosnole

```
document.addEventListener('paste', function(e) {
  e.stopImmediatePropagation();
  return true;
}, true);
```
