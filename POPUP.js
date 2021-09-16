var options = {}

chrome.storage.sync.get('options', (data) => {
    Object.assign(options, data.options);
    optionsForm.save.checked = Boolean(options.save);;
});

optionsForm.save.addEventListener('change', (event) => {
    options.save = event.target.checked;
    chrome.storage.sync.set({options});
  });